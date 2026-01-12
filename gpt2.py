"""
GPT-2 Implementation from Scratch
A clean, educational implementation of the GPT-2 transformer architecture.
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
import math


class MultiHeadAttention(nn.Module):
    """
    Multi-head self-attention mechanism.
    Allows the model to attend to different parts of the sequence simultaneously.
    """

    def __init__(self, d_model, num_heads, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"

        self.d_model = d_model
        self.num_heads = num_heads
        self.head_dim = d_model // num_heads

        self.qkv_projection = nn.Linear(d_model, 3 * d_model)
        self.output_projection = nn.Linear(d_model, d_model)

        self.dropout = nn.Dropout(dropout)
        self.scale = math.sqrt(self.head_dim)

    def forward(self, x, mask=None):
        batch_size, seq_length, d_model = x.shape

        qkv = self.qkv_projection(x)

        qkv = qkv.reshape(batch_size, seq_length, 3, self.num_heads, self.head_dim)
        qkv = qkv.permute(2, 0, 3, 1, 4)

        queries, keys, values = qkv[0], qkv[1], qkv[2]

        attention_scores = torch.matmul(queries, keys.transpose(-2, -1)) / self.scale

        if mask is not None:
            attention_scores = attention_scores.masked_fill(mask == 0, float('-inf'))

        attention_weights = F.softmax(attention_scores, dim=-1)
        attention_weights = self.dropout(attention_weights)

        attention_output = torch.matmul(attention_weights, values)

        attention_output = attention_output.permute(0, 2, 1, 3).contiguous()
        attention_output = attention_output.reshape(batch_size, seq_length, d_model)

        output = self.output_projection(attention_output)

        return output


class FeedForward(nn.Module):
    """
    Position-wise feed-forward network.
    Applies two linear transformations with a GELU activation in between.
    """

    def __init__(self, d_model, d_ff, dropout=0.1):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.linear2 = nn.Linear(d_ff, d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x):
        x = self.linear1(x)
        x = F.gelu(x)
        x = self.dropout(x)
        x = self.linear2(x)
        return x


class TransformerBlock(nn.Module):
    """
    A single transformer block consisting of:
    - Multi-head self-attention with layer norm and residual connection
    - Feed-forward network with layer norm and residual connection
    """

    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        self.attention = MultiHeadAttention(d_model, num_heads, dropout)
        self.norm1 = nn.LayerNorm(d_model)
        self.feed_forward = FeedForward(d_model, d_ff, dropout)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, mask=None):
        attention_output = self.attention(self.norm1(x), mask)
        x = x + self.dropout(attention_output)

        ff_output = self.feed_forward(self.norm2(x))
        x = x + self.dropout(ff_output)

        return x


class GPT2(nn.Module):
    """
    GPT-2: Generative Pre-trained Transformer 2
    A decoder-only transformer model for autoregressive language generation.
    """

    def __init__(self, vocab_size, d_model=768, num_heads=12, num_layers=12,
                 d_ff=3072, max_seq_length=1024, dropout=0.1):
        super().__init__()

        self.vocab_size = vocab_size
        self.d_model = d_model
        self.max_seq_length = max_seq_length

        self.token_embedding = nn.Embedding(vocab_size, d_model)
        self.position_embedding = nn.Embedding(max_seq_length, d_model)

        self.dropout = nn.Dropout(dropout)

        self.transformer_blocks = nn.ModuleList([
            TransformerBlock(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])

        self.layer_norm = nn.LayerNorm(d_model)

        self.output_projection = nn.Linear(d_model, vocab_size, bias=False)

        self.output_projection.weight = self.token_embedding.weight

        self._init_weights()

    def _init_weights(self):
        for module in self.modules():
            if isinstance(module, nn.Linear):
                torch.nn.init.normal_(module.weight, mean=0.0, std=0.02)
                if module.bias is not None:
                    torch.nn.init.zeros_(module.bias)
            elif isinstance(module, nn.Embedding):
                torch.nn.init.normal_(module.weight, mean=0.0, std=0.02)
            elif isinstance(module, nn.LayerNorm):
                torch.nn.init.ones_(module.weight)
                torch.nn.init.zeros_(module.bias)

    def _create_causal_mask(self, seq_length, device):
        mask = torch.triu(torch.ones(seq_length, seq_length, device=device), diagonal=1)
        mask = mask.masked_fill(mask == 1, False).masked_fill(mask == 0, True)
        return mask.unsqueeze(0).unsqueeze(0)

    def forward(self, input_ids, targets=None):
        batch_size, seq_length = input_ids.shape

        device = input_ids.device
        positions = torch.arange(0, seq_length, dtype=torch.long, device=device)
        positions = positions.unsqueeze(0).expand(batch_size, seq_length)

        token_embeddings = self.token_embedding(input_ids)
        position_embeddings = self.position_embedding(positions)

        x = token_embeddings + position_embeddings
        x = self.dropout(x)

        mask = self._create_causal_mask(seq_length, device)

        for transformer_block in self.transformer_blocks:
            x = transformer_block(x, mask)

        x = self.layer_norm(x)

        logits = self.output_projection(x)

        loss = None
        if targets is not None:
            loss = F.cross_entropy(
                logits.view(-1, self.vocab_size),
                targets.view(-1),
                ignore_index=-100
            )

        return logits, loss

    def generate(self, input_ids, max_new_tokens=100, temperature=1.0, top_k=None):
        """
        Generate text autoregressively given a prompt.
        """
        self.eval()

        for _ in range(max_new_tokens):
            input_ids_truncated = input_ids[:, -self.max_seq_length:]

            with torch.no_grad():
                logits, _ = self.forward(input_ids_truncated)

            logits = logits[:, -1, :] / temperature

            if top_k is not None:
                values, indices = torch.topk(logits, top_k)
                logits[logits < values[:, -1, None]] = float('-inf')

            probs = F.softmax(logits, dim=-1)

            next_token = torch.multinomial(probs, num_samples=1)

            input_ids = torch.cat([input_ids, next_token], dim=1)

            if next_token.item() == 0:
                break

        return input_ids


def create_gpt2_small():
    """Create GPT-2 Small (117M parameters)"""
    return GPT2(
        vocab_size=50257,
        d_model=768,
        num_heads=12,
        num_layers=12,
        d_ff=3072,
        max_seq_length=1024,
        dropout=0.1
    )


def create_gpt2_medium():
    """Create GPT-2 Medium (345M parameters)"""
    return GPT2(
        vocab_size=50257,
        d_model=1024,
        num_heads=16,
        num_layers=24,
        d_ff=4096,
        max_seq_length=1024,
        dropout=0.1
    )


def create_gpt2_large():
    """Create GPT-2 Large (762M parameters)"""
    return GPT2(
        vocab_size=50257,
        d_model=1280,
        num_heads=20,
        num_layers=36,
        d_ff=5120,
        max_seq_length=1024,
        dropout=0.1
    )


def create_gpt2_xl():
    """Create GPT-2 XL (1.5B parameters)"""
    return GPT2(
        vocab_size=50257,
        d_model=1600,
        num_heads=25,
        num_layers=48,
        d_ff=6400,
        max_seq_length=1024,
        dropout=0.1
    )


if __name__ == "__main__":
    model = create_gpt2_small()

    batch_size = 2
    seq_length = 128
    input_ids = torch.randint(0, 50257, (batch_size, seq_length))

    logits, loss = model(input_ids, targets=input_ids)

    print(f"Model created successfully!")
    print(f"Input shape: {input_ids.shape}")
    print(f"Output shape: {logits.shape}")
    print(f"Number of parameters: {sum(p.numel() for p in model.parameters()):,}")
