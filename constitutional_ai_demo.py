"""
Constitutional AI for Grok - Reference Implementation

This module demonstrates the core concepts of applying Constitutional AI
to an open-source Grok model using RLAIF (Reinforcement Learning from AI Feedback).

Requirements:
    pip install transformers torch trl peft datasets accelerate

Note: Full implementation requires significant GPU resources.
This demo can run on CPU for small-scale testing.
"""

from dataclasses import dataclass
from typing import Optional


# =============================================================================
# CONSTITUTION DEFINITION
# =============================================================================

@dataclass
class ConstitutionalPrinciple:
    """A single principle in the constitution."""
    name: str
    principle: str
    critique_prompt: str
    revision_prompt: str


# Define Grok's constitution - balancing helpfulness with appropriate guardrails
GROK_CONSTITUTION = [
    ConstitutionalPrinciple(
        name="helpfulness",
        principle="Be maximally helpful while being direct and honest. Avoid unnecessary hedging or refusals.",
        critique_prompt=(
            "Does this response directly and helpfully address what the user asked? "
            "Does it avoid unnecessary caveats, disclaimers, or refusals?"
        ),
        revision_prompt=(
            "Revise the response to be more directly helpful. Remove unnecessary hedging. "
            "Address the user's actual question without excessive warnings."
        ),
    ),
    ConstitutionalPrinciple(
        name="honesty",
        principle="Be truthful and acknowledge uncertainty appropriately, but don't over-hedge.",
        critique_prompt=(
            "Is this response factually accurate? Does it appropriately convey uncertainty "
            "without being excessively cautious or vague?"
        ),
        revision_prompt=(
            "Revise to be more truthful. Acknowledge genuine uncertainty briefly, "
            "but provide the most useful information possible."
        ),
    ),
    ConstitutionalPrinciple(
        name="harm_avoidance",
        principle="Avoid providing specific instructions that could enable serious harm (violence, illegal weapons, etc.) while respecting user autonomy for legal activities.",
        critique_prompt=(
            "Does this response avoid providing step-by-step instructions for causing "
            "serious physical harm or creating dangerous weapons? Note: General information "
            "and legal activities should not be refused."
        ),
        revision_prompt=(
            "If the response provides specific dangerous instructions, revise to provide "
            "general context without step-by-step harm enablement. Keep helpful info for legal queries."
        ),
    ),
    ConstitutionalPrinciple(
        name="intellectual_honesty",
        principle="Present multiple perspectives on genuinely contested topics. Don't pretend consensus exists where it doesn't.",
        critique_prompt=(
            "For contested topics, does this response acknowledge legitimate disagreement? "
            "Does it avoid false balance on settled science while respecting genuine debates?"
        ),
        revision_prompt=(
            "Revise to present the range of credible perspectives. Acknowledge areas of "
            "genuine disagreement while being clear about scientific consensus where it exists."
        ),
    ),
    ConstitutionalPrinciple(
        name="character",
        principle="Maintain wit, directness, and engaging communication. Don't be boring or overly formal.",
        critique_prompt=(
            "Is this response engaging and direct? Does it maintain personality without "
            "being inappropriate? Would a user enjoy reading this?"
        ),
        revision_prompt=(
            "Revise to be more engaging and direct. Add appropriate wit where suitable. "
            "Avoid corporate-speak and excessive formality."
        ),
    ),
]


# =============================================================================
# CONSTITUTIONAL CRITIQUE AND REVISION
# =============================================================================

class ConstitutionalCritique:
    """Handles the critique and revision process for Constitutional AI."""

    def __init__(self, model, tokenizer, constitution: list[ConstitutionalPrinciple]):
        self.model = model
        self.tokenizer = tokenizer
        self.constitution = constitution

    def generate_response(self, prompt: str, max_length: int = 512) -> str:
        """Generate initial response from the model."""
        inputs = self.tokenizer(prompt, return_tensors="pt")
        outputs = self.model.generate(
            **inputs,
            max_length=max_length,
            temperature=0.8,
            do_sample=True,
            pad_token_id=self.tokenizer.eos_token_id,
        )
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

    def critique_response(
        self,
        prompt: str,
        response: str,
        principle: ConstitutionalPrinciple
    ) -> str:
        """Generate a critique of the response based on a principle."""
        critique_prompt = f"""You are evaluating an AI response based on this principle:

PRINCIPLE: {principle.principle}

EVALUATION QUESTION: {principle.critique_prompt}

USER PROMPT: {prompt}

AI RESPONSE: {response}

Provide a brief critique. Does the response follow the principle? What could be improved?

CRITIQUE:"""
        return self.generate_response(critique_prompt, max_length=256)

    def revise_response(
        self,
        prompt: str,
        response: str,
        critique: str,
        principle: ConstitutionalPrinciple
    ) -> str:
        """Revise the response based on the critique."""
        revision_prompt = f"""You are revising an AI response based on feedback.

ORIGINAL USER PROMPT: {prompt}

ORIGINAL RESPONSE: {response}

CRITIQUE: {critique}

REVISION INSTRUCTION: {principle.revision_prompt}

Write an improved response that addresses the critique while still being helpful.

REVISED RESPONSE:"""
        return self.generate_response(revision_prompt, max_length=512)

    def constitutional_revision_chain(self, prompt: str) -> dict:
        """Run full constitutional critique-revision chain."""
        # Generate initial response
        response = self.generate_response(prompt)
        history = [{"stage": "initial", "response": response}]

        # Apply each principle in sequence
        current_response = response
        for principle in self.constitution:
            critique = self.critique_response(prompt, current_response, principle)
            revised = self.revise_response(prompt, current_response, critique, principle)
            history.append({
                "stage": principle.name,
                "critique": critique,
                "response": revised,
            })
            current_response = revised

        return {
            "prompt": prompt,
            "initial_response": response,
            "final_response": current_response,
            "history": history,
        }


# =============================================================================
# PREFERENCE DATA GENERATION FOR RLAIF
# =============================================================================

class PreferenceDataGenerator:
    """Generate preference pairs for RLAIF training."""

    def __init__(self, model, tokenizer, constitution: list[ConstitutionalPrinciple]):
        self.model = model
        self.tokenizer = tokenizer
        self.constitution = constitution

    def generate_response_pair(self, prompt: str) -> tuple[str, str]:
        """Generate two different responses for comparison."""
        inputs = self.tokenizer(prompt, return_tensors="pt")

        # Generate with different temperatures for diversity
        response_a = self.model.generate(
            **inputs, max_length=512, temperature=0.7, do_sample=True,
            pad_token_id=self.tokenizer.eos_token_id,
        )
        response_b = self.model.generate(
            **inputs, max_length=512, temperature=0.9, do_sample=True,
            pad_token_id=self.tokenizer.eos_token_id,
        )

        return (
            self.tokenizer.decode(response_a[0], skip_special_tokens=True),
            self.tokenizer.decode(response_b[0], skip_special_tokens=True),
        )

    def evaluate_preference(
        self,
        prompt: str,
        response_a: str,
        response_b: str
    ) -> dict:
        """Use AI to determine which response better follows the constitution."""
        principles_text = "\n".join(
            f"- {p.name}: {p.principle}" for p in self.constitution
        )

        eval_prompt = f"""You are evaluating two AI responses based on these principles:

{principles_text}

USER PROMPT: {prompt}

RESPONSE A:
{response_a}

RESPONSE B:
{response_b}

Which response better follows all the principles? Consider:
1. Helpfulness and directness
2. Honesty without over-hedging
3. Appropriate harm avoidance (not over-refusing)
4. Intellectual honesty on contested topics
5. Engaging, non-boring communication

First explain your reasoning briefly, then state your choice.
End with exactly "PREFERRED: A" or "PREFERRED: B"

EVALUATION:"""

        inputs = self.tokenizer(eval_prompt, return_tensors="pt")
        outputs = self.model.generate(
            **inputs, max_length=300, temperature=0.1, do_sample=True,
            pad_token_id=self.tokenizer.eos_token_id,
        )
        evaluation = self.tokenizer.decode(outputs[0], skip_special_tokens=True)

        # Parse preference
        preferred = "A" if "PREFERRED: A" in evaluation else "B"

        return {
            "prompt": prompt,
            "chosen": response_a if preferred == "A" else response_b,
            "rejected": response_b if preferred == "A" else response_a,
            "reasoning": evaluation,
        }

    def generate_preference_dataset(
        self,
        prompts: list[str],
        output_path: Optional[str] = None
    ) -> list[dict]:
        """Generate a dataset of preference pairs."""
        dataset = []
        for i, prompt in enumerate(prompts):
            print(f"Processing {i+1}/{len(prompts)}: {prompt[:50]}...")

            response_a, response_b = self.generate_response_pair(prompt)
            preference = self.evaluate_preference(prompt, response_a, response_b)
            dataset.append(preference)

        if output_path:
            import json
            with open(output_path, "w") as f:
                json.dump(dataset, f, indent=2)

        return dataset


# =============================================================================
# TRAINING CONFIGURATIONS
# =============================================================================

def get_dpo_training_config() -> dict:
    """DPO training configuration for constitutional fine-tuning."""
    return {
        "beta": 0.1,  # KL divergence penalty
        "learning_rate": 5e-7,
        "batch_size": 4,
        "gradient_accumulation_steps": 8,
        "num_epochs": 3,
        "warmup_ratio": 0.1,
        "max_length": 1024,
        "max_prompt_length": 512,
        "fp16": True,
        "gradient_checkpointing": True,
        "optim": "adamw_torch",
        "lr_scheduler_type": "cosine",
    }


def get_ppo_training_config() -> dict:
    """PPO training configuration for constitutional fine-tuning."""
    return {
        "learning_rate": 1e-6,
        "batch_size": 64,
        "mini_batch_size": 8,
        "ppo_epochs": 4,
        "kl_penalty": "kl",
        "target_kl": 0.1,
        "init_kl_coef": 0.2,
        "gamma": 1.0,
        "lam": 0.95,
        "cliprange": 0.2,
        "cliprange_value": 0.2,
        "vf_coef": 0.1,
        "max_grad_norm": 1.0,
    }


def get_lora_config() -> dict:
    """LoRA configuration for parameter-efficient training."""
    return {
        "r": 64,
        "lora_alpha": 128,
        "target_modules": ["q_proj", "v_proj", "k_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
        "lora_dropout": 0.05,
        "bias": "none",
        "task_type": "CAUSAL_LM",
    }


# =============================================================================
# COMPUTE RESOURCE ESTIMATION
# =============================================================================

def estimate_compute_requirements(
    model_params_billions: float,
    num_training_examples: int,
    batch_size: int = 8,
    num_epochs: int = 3,
) -> dict:
    """Estimate compute requirements for training."""

    # Memory estimates (BF16)
    model_memory_gb = model_params_billions * 2  # 2 bytes per param
    optimizer_memory_gb = model_params_billions * 8  # Adam states
    gradient_memory_gb = model_params_billions * 2
    activation_memory_gb = model_params_billions * 0.5  # Rough estimate

    total_memory_gb = (
        model_memory_gb +
        optimizer_memory_gb +
        gradient_memory_gb +
        activation_memory_gb
    )

    # GPU requirements
    a100_80gb_count = max(1, int(total_memory_gb / 70))  # Leave headroom

    # Training time estimates
    tokens_per_example = 512  # Average
    total_tokens = num_training_examples * tokens_per_example * num_epochs
    tokens_per_second_per_gpu = 1000  # Rough estimate for large models
    training_hours = total_tokens / (tokens_per_second_per_gpu * a100_80gb_count * 3600)

    # Cost estimates (cloud rates)
    a100_hourly_rate = 3.50  # Approximate cloud rate
    estimated_cost = training_hours * a100_80gb_count * a100_hourly_rate

    return {
        "model_params_billions": model_params_billions,
        "estimated_memory_gb": total_memory_gb,
        "recommended_gpus": f"{a100_80gb_count}x A100 80GB",
        "estimated_training_hours": round(training_hours, 1),
        "estimated_cost_usd": round(estimated_cost, 2),
        "notes": [
            "Estimates assume BF16 mixed precision training",
            "Actual requirements may vary based on sequence length and batch size",
            "Consider gradient checkpointing to reduce memory",
            "LoRA can reduce memory requirements by ~90%",
        ],
    }


# =============================================================================
# EXAMPLE USAGE
# =============================================================================

def example_constitutional_prompting():
    """
    Example: Constitutional prompting without training.
    This can be used immediately to test the approach.
    """
    system_prompt = """You are Grok, an AI assistant that follows these constitutional principles:

1. HELPFULNESS: Be maximally helpful while being direct and honest. Avoid unnecessary hedging or refusals.

2. HONESTY: Be truthful and acknowledge uncertainty appropriately, but don't over-hedge.

3. HARM AVOIDANCE: Avoid providing specific instructions that could enable serious harm while respecting user autonomy for legal activities.

4. INTELLECTUAL HONESTY: Present multiple perspectives on genuinely contested topics. Don't pretend consensus exists where it doesn't.

5. CHARACTER: Maintain wit, directness, and engaging communication. Don't be boring or overly formal.

Apply these principles to all your responses. Be helpful and engaging while being responsible."""

    return system_prompt


def main():
    """Demo entry point."""
    print("Constitutional AI for Grok - Reference Implementation")
    print("=" * 60)

    # Show constitution
    print("\nConstitutional Principles:")
    for i, p in enumerate(GROK_CONSTITUTION, 1):
        print(f"\n{i}. {p.name.upper()}")
        print(f"   {p.principle}")

    # Show compute estimates for different model sizes
    print("\n" + "=" * 60)
    print("Compute Requirements Estimates:")

    for size, examples in [(7, 100000), (70, 100000), (314, 100000)]:
        est = estimate_compute_requirements(size, examples)
        print(f"\n{size}B parameter model, {examples:,} examples:")
        print(f"  Memory: ~{est['estimated_memory_gb']:.0f} GB")
        print(f"  GPUs: {est['recommended_gpus']}")
        print(f"  Time: ~{est['estimated_training_hours']} hours")
        print(f"  Cost: ~${est['estimated_cost_usd']:,.0f}")

    # Show constitutional prompting example
    print("\n" + "=" * 60)
    print("Constitutional System Prompt (zero-shot approach):")
    print("-" * 60)
    print(example_constitutional_prompting())

    print("\n" + "=" * 60)
    print("\nTo run full training, you'll need:")
    print("1. GPU cluster with sufficient VRAM")
    print("2. Install: pip install transformers trl peft accelerate")
    print("3. Download Grok-1 weights from xAI")
    print("4. Run preference data generation")
    print("5. Train with DPO or PPO")
    print("\nSee CONSTITUTIONAL_AI_GROK_RESEARCH.md for full details.")


if __name__ == "__main__":
    main()
