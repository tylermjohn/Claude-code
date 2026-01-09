// App State
let selectedIngredients = new Set();
let currentRecipes = [];

// DOM Elements
const ingredientSearch = document.getElementById('ingredient-search');
const suggestionsContainer = document.getElementById('suggestions');
const selectedIngredientsContainer = document.getElementById('selected-ingredients');
const recipesContainer = document.getElementById('recipes-container');
const recipeCount = document.getElementById('recipe-count');
const modal = document.getElementById('recipe-modal');
const recipeDetails = document.getElementById('recipe-details');

// Initialize
function init() {
    setupEventListeners();
    updateRecipes();
}

// Event Listeners
function setupEventListeners() {
    ingredientSearch.addEventListener('input', handleSearch);
    ingredientSearch.addEventListener('focus', handleSearch);

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            suggestionsContainer.classList.remove('active');
        }
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with close button
    document.querySelector('.close-btn').addEventListener('click', closeModal);

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Search and Autocomplete
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm.length === 0) {
        suggestionsContainer.classList.remove('active');
        return;
    }

    const matches = ALL_INGREDIENTS.filter(ingredient =>
        ingredient.toLowerCase().includes(searchTerm) &&
        !selectedIngredients.has(ingredient)
    );

    displaySuggestions(matches, searchTerm);
}

function displaySuggestions(matches, searchTerm) {
    if (matches.length === 0) {
        suggestionsContainer.classList.remove('active');
        return;
    }

    suggestionsContainer.innerHTML = matches.slice(0, 10).map(ingredient => {
        const highlighted = highlightMatch(ingredient, searchTerm);
        return `<div class="suggestion-item" data-ingredient="${ingredient}">${highlighted}</div>`;
    }).join('');

    suggestionsContainer.classList.add('active');

    // Add click listeners to suggestions
    suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            addIngredient(item.dataset.ingredient);
            ingredientSearch.value = '';
            suggestionsContainer.classList.remove('active');
            ingredientSearch.focus();
        });
    });
}

function highlightMatch(text, searchTerm) {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + searchTerm.length);
    const after = text.slice(index + searchTerm.length);

    return `${before}<mark>${match}</mark>${after}`;
}

// Ingredient Management
function addIngredient(ingredient) {
    if (selectedIngredients.has(ingredient)) return;

    selectedIngredients.add(ingredient);
    updateSelectedIngredients();
    updateRecipes();
}

function removeIngredient(ingredient) {
    selectedIngredients.delete(ingredient);
    updateSelectedIngredients();
    updateRecipes();
}

function updateSelectedIngredients() {
    if (selectedIngredients.size === 0) {
        selectedIngredientsContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🥕</span>
                <p>Start adding ingredients to find recipes!</p>
            </div>
        `;
        return;
    }

    selectedIngredientsContainer.innerHTML = Array.from(selectedIngredients)
        .sort()
        .map(ingredient => `
            <div class="ingredient-tag">
                <span>${capitalizeFirst(ingredient)}</span>
                <button class="remove-btn" onclick="removeIngredient('${ingredient}')">×</button>
            </div>
        `).join('');
}

// Recipe Matching and Display
function updateRecipes() {
    if (selectedIngredients.size === 0) {
        recipesContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">👨‍🍳</span>
                <p>Add some ingredients and I'll suggest delicious recipes!</p>
            </div>
        `;
        recipeCount.textContent = '';
        return;
    }

    // Find matching recipes and calculate match scores
    const recipesWithScores = RECIPES_DATABASE.map(recipe => {
        const matchingIngredients = recipe.ingredients.filter(ing =>
            selectedIngredients.has(ing)
        );
        const missingIngredients = recipe.ingredients.filter(ing =>
            !selectedIngredients.has(ing)
        );

        const matchScore = (matchingIngredients.length / recipe.ingredients.length) * 100;

        return {
            ...recipe,
            matchingIngredients,
            missingIngredients,
            matchScore
        };
    })
    .filter(recipe => recipe.matchingIngredients.length > 0) // Only show recipes with at least one matching ingredient
    .sort((a, b) => b.matchScore - a.matchScore); // Sort by match score

    currentRecipes = recipesWithScores;

    if (recipesWithScores.length === 0) {
        recipesContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">😔</span>
                <p>No recipes found with these ingredients. Try adding more!</p>
            </div>
        `;
        recipeCount.textContent = '';
        return;
    }

    recipeCount.textContent = `${recipesWithScores.length} recipe${recipesWithScores.length !== 1 ? 's' : ''} found`;

    recipesContainer.innerHTML = recipesWithScores.map(recipe => `
        <div class="recipe-card" onclick="showRecipeDetails(${recipe.id})">
            <div class="recipe-image">${recipe.image}</div>
            <div class="match-score">${Math.round(recipe.matchScore)}% match</div>
            <h3>${recipe.name}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            ${recipe.missingIngredients.length > 0 ? `
                <div class="missing-ingredients">
                    <strong>Missing:</strong> ${recipe.missingIngredients.slice(0, 3).map(ing => capitalizeFirst(ing)).join(', ')}
                    ${recipe.missingIngredients.length > 3 ? ` +${recipe.missingIngredients.length - 3} more` : ''}
                </div>
            ` : '<div style="color: #4CAF50; font-weight: bold;">✓ You have all ingredients!</div>'}
        </div>
    `).join('');
}

// Recipe Details Modal
function showRecipeDetails(recipeId) {
    const recipe = currentRecipes.find(r => r.id === recipeId) ||
                   RECIPES_DATABASE.find(r => r.id === recipeId);

    if (!recipe) return;

    const hasAllIngredients = recipe.missingIngredients ? recipe.missingIngredients.length === 0 : false;
    const matchScore = recipe.matchScore || 0;

    recipeDetails.innerHTML = `
        <div class="recipe-detail">
            <div class="recipe-detail-image">${recipe.image}</div>
            <h2>${recipe.name}</h2>

            <div class="recipe-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings} servings</span>
                <span>📊 ${recipe.difficulty}</span>
                <span>🏷️ ${recipe.category}</span>
            </div>

            ${matchScore > 0 ? `
                <div class="match-score" style="margin-bottom: 20px; font-size: 1.1em;">
                    ${Math.round(matchScore)}% ingredient match
                </div>
            ` : ''}

            ${hasAllIngredients ? `
                <div style="background: #4CAF50; color: white; padding: 15px; border-radius: 10px; margin-bottom: 20px; text-align: center; font-weight: bold;">
                    🎉 You have all the ingredients for this recipe!
                </div>
            ` : ''}

            <div class="ingredients-list">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ing => {
                        const hasIngredient = selectedIngredients.has(ing);
                        return `<li style="${hasIngredient ? 'background: #E8F5E9;' : ''}">${capitalizeFirst(ing)}${hasIngredient ? ' ✓' : ''}</li>`;
                    }).join('')}
                </ul>
            </div>

            <div class="instructions-list">
                <h3>Instructions</h3>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>

            ${recipe.missingIngredients && recipe.missingIngredients.length > 0 ? `
                <div style="background: #FFF3E0; padding: 15px; border-radius: 10px; margin-top: 20px;">
                    <strong>Missing Ingredients:</strong><br>
                    ${recipe.missingIngredients.map(ing => capitalizeFirst(ing)).join(', ')}
                </div>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make functions globally accessible for onclick handlers
window.removeIngredient = removeIngredient;
window.showRecipeDetails = showRecipeDetails;
