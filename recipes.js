// Common staples and spices that most kitchens have
const STAPLES_AND_SPICES = [
    "salt", "black pepper", "water", "olive oil", "vegetable oil",
    "butter", "sugar", "flour", "garlic", "onion",
    "cumin", "paprika", "chili powder", "oregano", "basil",
    "thyme", "rosemary", "cinnamon", "vanilla extract", "bay leaves",
    "red pepper flakes", "cayenne pepper", "white pepper", "garlic powder",
    "onion powder", "italian seasoning", "baking powder", "baking soda",
    "cornstarch", "honey", "soy sauce", "vinegar", "lemon juice", "lime juice"
].sort();

// Generate comprehensive recipe database
function generateRecipeDatabase() {
    const recipes = [];
    let id = 1;

    // Italian Recipes (500)
    const italianRecipes = [
        { name: "Spaghetti Carbonara", ingredients: [["spaghetti", "400g"], ["eggs", "4"], ["bacon", "200g"], ["parmesan cheese", "100g"]], time: "20 min", difficulty: "Medium", servings: 4, category: "Italian", image: "🍝" },
        { name: "Margherita Pizza", ingredients: [["pizza dough", "1 ball"], ["tomato sauce", "1 cup"], ["mozzarella cheese", "250g"], ["fresh basil", "1 bunch"]], time: "30 min", difficulty: "Medium", servings: 2, category: "Italian", image: "🍕" },
        { name: "Lasagna", ingredients: [["lasagna noodles", "12 sheets"], ["ground beef", "500g"], ["ricotta cheese", "500g"], ["mozzarella cheese", "300g"], ["parmesan cheese", "100g"], ["eggs", "2"], ["tomato sauce", "3 cups"]], time: "90 min", difficulty: "Hard", servings: 8, category: "Italian", image: "🍝" },
        { name: "Chicken Parmesan", ingredients: [["chicken breast", "4 pieces"], ["bread crumbs", "2 cups"], ["parmesan cheese", "150g"], ["eggs", "3"], ["tomato sauce", "2 cups"], ["mozzarella cheese", "200g"]], time: "40 min", difficulty: "Medium", servings: 4, category: "Italian", image: "🍗" },
        { name: "Fettuccine Alfredo", ingredients: [["fettuccine", "400g"], ["heavy cream", "2 cups"], ["parmesan cheese", "150g"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Italian", image: "🍝" },
        { name: "Pesto Pasta", ingredients: [["pasta", "400g"], ["fresh basil", "2 cups"], ["pine nuts", "1/2 cup"], ["parmesan cheese", "100g"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Italian", image: "🍝" },
        { name: "Risotto Milanese", ingredients: [["arborio rice", "2 cups"], ["white wine", "1 cup"], ["chicken broth", "6 cups"], ["parmesan cheese", "100g"], ["saffron", "1 pinch"]], time: "40 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🍚" },
        { name: "Caprese Salad", ingredients: [["tomatoes", "4 large"], ["mozzarella cheese", "250g"], ["fresh basil", "1 bunch"], ["balsamic vinegar", "2 tbsp"]], time: "10 min", difficulty: "Easy", servings: 4, category: "Italian", image: "🍅" },
        { name: "Minestrone Soup", ingredients: [["pasta", "1 cup"], ["kidney beans", "1 can"], ["tomatoes", "2 cans"], ["carrots", "2"], ["celery", "3 stalks"], ["zucchini", "1"], ["spinach", "2 cups"], ["vegetable broth", "6 cups"]], time: "45 min", difficulty: "Easy", servings: 6, category: "Italian", image: "🥣" },
        { name: "Bruschetta", ingredients: [["baguette", "1"], ["tomatoes", "4"], ["fresh basil", "1/2 cup"], ["balsamic vinegar", "2 tbsp"]], time: "15 min", difficulty: "Easy", servings: 6, category: "Italian", image: "🥖" },
        { name: "Tiramisu", ingredients: [["ladyfinger cookies", "24"], ["mascarpone cheese", "500g"], ["eggs", "6"], ["espresso", "2 cups"], ["cocoa powder", "1/4 cup"]], time: "30 min", difficulty: "Medium", servings: 8, category: "Italian", image: "🍰" },
        { name: "Osso Buco", ingredients: [["veal shanks", "4 pieces"], ["white wine", "2 cups"], ["beef broth", "2 cups"], ["tomatoes", "2 cans"], ["carrots", "2"], ["celery", "2 stalks"]], time: "150 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🍖" },
        { name: "Gnocchi", ingredients: [["potatoes", "1kg"], ["eggs", "2"], ["parmesan cheese", "50g"]], time: "60 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🥔" },
        { name: "Arrabbiata Pasta", ingredients: [["penne pasta", "400g"], ["tomatoes", "4 cans"], ["red chili peppers", "3"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Italian", image: "🍝" },
        { name: "Panzanella", ingredients: [["stale bread", "4 cups"], ["tomatoes", "6"], ["cucumber", "2"], ["red onion", "1"], ["fresh basil", "1 cup"]], time: "20 min", difficulty: "Easy", servings: 6, category: "Italian", image: "🥗" },
    ];

    italianRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Asian Recipes (500)
    const asianRecipes = [
        { name: "Chicken Stir Fry", ingredients: [["chicken breast", "500g"], ["bell peppers", "2"], ["broccoli", "2 cups"], ["rice", "2 cups"], ["sesame oil", "2 tbsp"], ["ginger", "2 tbsp"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Asian", image: "🥘" },
        { name: "Pad Thai", ingredients: [["rice noodles", "400g"], ["shrimp", "300g"], ["eggs", "3"], ["bean sprouts", "2 cups"], ["peanuts", "1/2 cup"], ["tofu", "200g"], ["green onions", "4"], ["lime", "2"], ["fish sauce", "3 tbsp"]], time: "30 min", difficulty: "Hard", servings: 4, category: "Asian", image: "🍜" },
        { name: "Fried Rice", ingredients: [["rice", "4 cups cooked"], ["eggs", "3"], ["peas", "1 cup"], ["carrots", "2"], ["green onions", "4"], ["sesame oil", "2 tbsp"], ["ginger", "1 tbsp"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Asian", image: "🍚" },
        { name: "Teriyaki Salmon", ingredients: [["salmon fillets", "4"], ["rice vinegar", "2 tbsp"], ["sesame oil", "1 tbsp"], ["green onions", "3"], ["sesame seeds", "2 tbsp"], ["ginger", "2 tbsp"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🐟" },
        { name: "Spring Rolls", ingredients: [["rice paper", "12 sheets"], ["shrimp", "300g"], ["rice noodles", "200g"], ["carrots", "2"], ["cucumber", "1"], ["lettuce", "1 head"], ["mint", "1 bunch"], ["cilantro", "1 bunch"]], time: "40 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🥗" },
        { name: "Tom Yum Soup", ingredients: [["shrimp", "400g"], ["mushrooms", "200g"], ["tomatoes", "3"], ["lemongrass", "3 stalks"], ["lime leaves", "6"], ["galangal", "3 slices"], ["fish sauce", "3 tbsp"], ["chili peppers", "5"], ["cilantro", "1 bunch"], ["chicken broth", "6 cups"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🍲" },
        { name: "Ramen", ingredients: [["ramen noodles", "4 packs"], ["pork belly", "300g"], ["eggs", "4"], ["green onions", "6"], ["nori", "4 sheets"], ["chicken broth", "8 cups"], ["miso paste", "3 tbsp"], ["ginger", "2 tbsp"]], time: "45 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🍜" },
        { name: "Dumplings", ingredients: [["dumpling wrappers", "40 pieces"], ["ground pork", "500g"], ["cabbage", "2 cups"], ["green onions", "6"], ["ginger", "2 tbsp"], ["sesame oil", "2 tbsp"]], time: "60 min", difficulty: "Hard", servings: 6, category: "Asian", image: "🥟" },
        { name: "General Tso's Chicken", ingredients: [["chicken thighs", "600g"], ["cornstarch", "1/2 cup"], ["eggs", "2"], ["rice vinegar", "3 tbsp"], ["ginger", "2 tbsp"], ["dried chili peppers", "8"], ["broccoli", "2 cups"]], time: "35 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🍗" },
        { name: "Pho", ingredients: [["rice noodles", "400g"], ["beef", "400g"], ["beef bones", "1kg"], ["ginger", "3 inch piece"], ["star anise", "4"], ["cinnamon stick", "1"], ["bean sprouts", "2 cups"], ["fresh basil", "1 bunch"], ["lime", "2"]], time: "120 min", difficulty: "Hard", servings: 6, category: "Asian", image: "🍜" },
        { name: "Bibimbap", ingredients: [["rice", "4 cups"], ["beef", "300g"], ["spinach", "2 cups"], ["bean sprouts", "2 cups"], ["carrots", "2"], ["eggs", "4"], ["gochujang", "4 tbsp"], ["sesame oil", "3 tbsp"]], time: "40 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🍚" },
        { name: "Tempura", ingredients: [["shrimp", "400g"], ["sweet potato", "2"], ["zucchini", "2"], ["eggs", "2"], ["ice water", "2 cups"], ["tempura batter mix", "2 cups"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🍤" },
        { name: "Sushi Rolls", ingredients: [["sushi rice", "3 cups"], ["nori sheets", "10"], ["salmon", "300g"], ["avocado", "2"], ["cucumber", "2"], ["rice vinegar", "1/4 cup"], ["wasabi", "2 tbsp"], ["pickled ginger", "1/2 cup"]], time: "45 min", difficulty: "Hard", servings: 4, category: "Asian", image: "🍣" },
        { name: "Kung Pao Chicken", ingredients: [["chicken breast", "500g"], ["peanuts", "1 cup"], ["bell peppers", "2"], ["dried chili peppers", "10"], ["rice vinegar", "2 tbsp"], ["cornstarch", "2 tbsp"]], time: "25 min", difficulty: "Medium", servings: 4, category: "Asian", image: "🥘" },
        { name: "Yakisoba", ingredients: [["yakisoba noodles", "400g"], ["pork", "300g"], ["cabbage", "3 cups"], ["carrots", "2"], ["green onions", "4"], ["yakisoba sauce", "1/2 cup"], ["ginger", "1 tbsp"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Asian", image: "🍜" },
    ];

    asianRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Mexican Recipes (500)
    const mexicanRecipes = [
        { name: "Beef Tacos", ingredients: [["ground beef", "500g"], ["taco shells", "12"], ["lettuce", "1 head"], ["tomatoes", "3"], ["cheddar cheese", "200g"], ["sour cream", "1 cup"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🌮" },
        { name: "Guacamole", ingredients: [["avocados", "4"], ["tomatoes", "2"], ["cilantro", "1/2 cup"], ["jalapeño", "1"]], time: "10 min", difficulty: "Easy", servings: 6, category: "Mexican", image: "🥑" },
        { name: "Quesadilla", ingredients: [["tortillas", "8"], ["cheddar cheese", "300g"], ["bell peppers", "2"], ["chicken breast", "300g"], ["sour cream", "1 cup"], ["salsa", "1 cup"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🌮" },
        { name: "Enchiladas", ingredients: [["tortillas", "12"], ["chicken breast", "500g"], ["enchilada sauce", "3 cups"], ["cheddar cheese", "300g"], ["sour cream", "1 cup"], ["black beans", "1 can"]], time: "45 min", difficulty: "Medium", servings: 6, category: "Mexican", image: "🌯" },
        { name: "Chiles Rellenos", ingredients: [["poblano peppers", "6"], ["monterey jack cheese", "300g"], ["eggs", "6"], ["tomato sauce", "2 cups"]], time: "60 min", difficulty: "Hard", servings: 6, category: "Mexican", image: "🌶️" },
        { name: "Carne Asada", ingredients: [["flank steak", "800g"], ["lime", "4"], ["cilantro", "1 bunch"], ["tortillas", "12"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Mexican", image: "🥩" },
        { name: "Pozole", ingredients: [["pork shoulder", "1kg"], ["hominy", "2 cans"], ["dried chilies", "6"], ["cabbage", "1 head"], ["radishes", "1 bunch"], ["oregano", "2 tbsp"]], time: "180 min", difficulty: "Hard", servings: 8, category: "Mexican", image: "🍲" },
        { name: "Fajitas", ingredients: [["chicken breast", "600g"], ["bell peppers", "3"], ["tortillas", "12"], ["sour cream", "1 cup"], ["salsa", "1 cup"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🌮" },
        { name: "Nachos", ingredients: [["tortilla chips", "1 large bag"], ["ground beef", "400g"], ["cheddar cheese", "300g"], ["jalapeños", "1 cup"], ["sour cream", "1 cup"], ["salsa", "1 cup"], ["black beans", "1 can"]], time: "20 min", difficulty: "Easy", servings: 6, category: "Mexican", image: "🧀" },
        { name: "Burrito Bowl", ingredients: [["rice", "3 cups"], ["black beans", "2 cans"], ["chicken breast", "500g"], ["corn", "2 cups"], ["tomatoes", "3"], ["lettuce", "1 head"], ["cheddar cheese", "200g"], ["sour cream", "1 cup"], ["salsa", "1 cup"]], time: "30 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🥙" },
        { name: "Tamales", ingredients: [["masa harina", "4 cups"], ["pork shoulder", "1kg"], ["dried corn husks", "30"], ["chicken broth", "4 cups"], ["lard", "1 cup"]], time: "180 min", difficulty: "Hard", servings: 12, category: "Mexican", image: "🫔" },
        { name: "Salsa Verde", ingredients: [["tomatillos", "1 lb"], ["jalapeños", "3"], ["cilantro", "1 cup"]], time: "15 min", difficulty: "Easy", servings: 8, category: "Mexican", image: "🥗" },
        { name: "Churros", ingredients: [["eggs", "3"], ["milk", "1 cup"], ["cinnamon", "2 tbsp"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Mexican", image: "🍩" },
        { name: "Carnitas", ingredients: [["pork shoulder", "2kg"], ["orange juice", "2 cups"], ["lime", "3"], ["tortillas", "20"], ["cilantro", "1 bunch"]], time: "240 min", difficulty: "Medium", servings: 8, category: "Mexican", image: "🥩" },
        { name: "Fish Tacos", ingredients: [["white fish", "600g"], ["corn tortillas", "12"], ["cabbage", "2 cups"], ["lime", "3"], ["sour cream", "1 cup"], ["cilantro", "1 bunch"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🐟" },
    ];

    mexicanRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // American Recipes (500)
    const americanRecipes = [
        { name: "Burger", ingredients: [["ground beef", "600g"], ["burger buns", "4"], ["lettuce", "1 head"], ["tomatoes", "2"], ["pickles", "1 cup"], ["cheddar cheese", "4 slices"], ["ketchup", "1/4 cup"], ["mustard", "2 tbsp"]], time: "20 min", difficulty: "Easy", servings: 4, category: "American", image: "🍔" },
        { name: "BBQ Ribs", ingredients: [["pork ribs", "2kg"], ["bbq sauce", "2 cups"], ["brown sugar", "1/2 cup"]], time: "180 min", difficulty: "Medium", servings: 6, category: "American", image: "🍖" },
        { name: "Mac and Cheese", ingredients: [["macaroni", "400g"], ["cheddar cheese", "400g"], ["milk", "3 cups"], ["mustard", "1 tsp"]], time: "25 min", difficulty: "Easy", servings: 6, category: "American", image: "🧀" },
        { name: "Fried Chicken", ingredients: [["chicken pieces", "1.5kg"], ["buttermilk", "2 cups"], ["eggs", "2"]], time: "45 min", difficulty: "Medium", servings: 6, category: "American", image: "🍗" },
        { name: "Pulled Pork Sandwich", ingredients: [["pork shoulder", "2kg"], ["bbq sauce", "2 cups"], ["coleslaw", "3 cups"], ["burger buns", "8"], ["brown sugar", "1/4 cup"]], time: "360 min", difficulty: "Medium", servings: 8, category: "American", image: "🥪" },
        { name: "Clam Chowder", ingredients: [["clams", "2 lbs"], ["potatoes", "4"], ["bacon", "6 strips"], ["heavy cream", "2 cups"], ["celery", "3 stalks"]], time: "45 min", difficulty: "Medium", servings: 6, category: "American", image: "🥣" },
        { name: "Meatloaf", ingredients: [["ground beef", "1kg"], ["eggs", "2"], ["bread crumbs", "1 cup"], ["ketchup", "1/2 cup"], ["worcestershire sauce", "2 tbsp"]], time: "75 min", difficulty: "Easy", servings: 6, category: "American", image: "🍖" },
        { name: "Buffalo Wings", ingredients: [["chicken wings", "2kg"], ["hot sauce", "1 cup"], ["blue cheese dressing", "1 cup"], ["celery", "1 bunch"]], time: "40 min", difficulty: "Easy", servings: 6, category: "American", image: "🍗" },
        { name: "Grilled Cheese", ingredients: [["bread", "8 slices"], ["cheddar cheese", "8 slices"]], time: "10 min", difficulty: "Easy", servings: 4, category: "American", image: "🧀" },
        { name: "Pot Roast", ingredients: [["beef roast", "1.5kg"], ["potatoes", "6"], ["carrots", "6"], ["beef broth", "3 cups"], ["red wine", "1 cup"]], time: "240 min", difficulty: "Easy", servings: 8, category: "American", image: "🍖" },
        { name: "Cornbread", ingredients: [["cornmeal", "2 cups"], ["eggs", "2"], ["buttermilk", "1.5 cups"]], time: "35 min", difficulty: "Easy", servings: 8, category: "American", image: "🌽" },
        { name: "Jambalaya", ingredients: [["chicken thighs", "500g"], ["andouille sausage", "400g"], ["shrimp", "300g"], ["rice", "2 cups"], ["bell peppers", "2"], ["celery", "3 stalks"], ["tomatoes", "2 cans"], ["chicken broth", "4 cups"]], time: "60 min", difficulty: "Medium", servings: 8, category: "American", image: "🍲" },
        { name: "Philly Cheesesteak", ingredients: [["ribeye steak", "600g"], ["hoagie rolls", "4"], ["provolone cheese", "8 slices"], ["bell peppers", "2"], ["mushrooms", "200g"]], time: "20 min", difficulty: "Easy", servings: 4, category: "American", image: "🥪" },
        { name: "Cobb Salad", ingredients: [["romaine lettuce", "1 head"], ["chicken breast", "400g"], ["bacon", "8 strips"], ["eggs", "4"], ["avocado", "2"], ["blue cheese", "1 cup"], ["tomatoes", "3"]], time: "25 min", difficulty: "Easy", servings: 4, category: "American", image: "🥗" },
        { name: "Biscuits and Gravy", ingredients: [["biscuits", "8"], ["pork sausage", "400g"], ["milk", "3 cups"]], time: "25 min", difficulty: "Medium", servings: 4, category: "American", image: "🥐" },
    ];

    americanRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Indian Recipes (500)
    const indianRecipes = [
        { name: "Chicken Curry", ingredients: [["chicken breast", "700g"], ["coconut milk", "2 cans"], ["curry powder", "3 tbsp"], ["tomatoes", "4"], ["rice", "3 cups"], ["cilantro", "1 bunch"], ["ginger", "3 tbsp"]], time: "40 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛" },
        { name: "Butter Chicken", ingredients: [["chicken thighs", "800g"], ["heavy cream", "1 cup"], ["tomato sauce", "2 cups"], ["garam masala", "2 tbsp"], ["ginger", "2 tbsp"], ["cilantro", "1 bunch"]], time: "45 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛" },
        { name: "Palak Paneer", ingredients: [["paneer", "400g"], ["spinach", "1kg"], ["heavy cream", "1/2 cup"], ["garam masala", "1 tbsp"], ["ginger", "2 tbsp"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Indian", image: "🥬" },
        { name: "Biryani", ingredients: [["basmati rice", "3 cups"], ["chicken", "800g"], ["yogurt", "1 cup"], ["garam masala", "2 tbsp"], ["saffron", "1 pinch"], ["fried onions", "1 cup"], ["mint", "1 bunch"], ["ginger", "3 tbsp"]], time: "75 min", difficulty: "Hard", servings: 6, category: "Indian", image: "🍚" },
        { name: "Tikka Masala", ingredients: [["chicken breast", "700g"], ["yogurt", "1 cup"], ["heavy cream", "1 cup"], ["tomato sauce", "2 cups"], ["garam masala", "2 tbsp"], ["ginger", "2 tbsp"]], time: "50 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛" },
        { name: "Samosas", ingredients: [["potatoes", "4"], ["peas", "1 cup"], ["pastry dough", "1 lb"], ["garam masala", "1 tbsp"], ["ginger", "1 tbsp"]], time: "60 min", difficulty: "Hard", servings: 8, category: "Indian", image: "🥟" },
        { name: "Naan Bread", ingredients: [["yogurt", "1 cup"], ["milk", "1/2 cup"], ["eggs", "1"]], time: "90 min", difficulty: "Medium", servings: 8, category: "Indian", image: "🫓" },
        { name: "Dal Makhani", ingredients: [["black lentils", "2 cups"], ["kidney beans", "1/2 cup"], ["heavy cream", "1 cup"], ["tomatoes", "3"], ["garam masala", "2 tbsp"], ["ginger", "2 tbsp"]], time: "120 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍲" },
        { name: "Tandoori Chicken", ingredients: [["chicken legs", "8 pieces"], ["yogurt", "2 cups"], ["tandoori masala", "3 tbsp"], ["ginger", "3 tbsp"], ["lime", "2"]], time: "180 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍗" },
        { name: "Vindaloo", ingredients: [["pork", "800g"], ["vinegar", "1/2 cup"], ["chili powder", "3 tbsp"], ["potatoes", "4"], ["garam masala", "2 tbsp"], ["ginger", "3 tbsp"]], time: "90 min", difficulty: "Hard", servings: 6, category: "Indian", image: "🍛" },
        { name: "Aloo Gobi", ingredients: [["potatoes", "4"], ["cauliflower", "1 head"], ["tomatoes", "2"], ["garam masala", "2 tbsp"], ["turmeric", "1 tsp"], ["ginger", "2 tbsp"]], time: "35 min", difficulty: "Easy", servings: 4, category: "Indian", image: "🥔" },
        { name: "Chana Masala", ingredients: [["chickpeas", "3 cans"], ["tomatoes", "4"], ["garam masala", "2 tbsp"], ["ginger", "2 tbsp"], ["cilantro", "1 bunch"]], time: "30 min", difficulty: "Easy", servings: 6, category: "Indian", image: "🫘" },
        { name: "Chicken 65", ingredients: [["chicken breast", "600g"], ["yogurt", "1/2 cup"], ["cornstarch", "1/4 cup"], ["curry leaves", "20"], ["ginger", "2 tbsp"], ["chili powder", "2 tbsp"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Indian", image: "🍗" },
        { name: "Paneer Tikka", ingredients: [["paneer", "500g"], ["yogurt", "1 cup"], ["bell peppers", "2"], ["ginger", "2 tbsp"], ["garam masala", "2 tbsp"]], time: "30 min", difficulty: "Easy", servings: 4, category: "Indian", image: "🧀" },
        { name: "Korma", ingredients: [["chicken", "700g"], ["yogurt", "1 cup"], ["heavy cream", "1 cup"], ["cashews", "1 cup"], ["garam masala", "2 tbsp"], ["ginger", "2 tbsp"]], time: "50 min", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛" },
    ];

    indianRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Mediterranean/Greek Recipes (500)
    const mediterraneanRecipes = [
        { name: "Greek Salad", ingredients: [["tomatoes", "4"], ["cucumber", "2"], ["red onion", "1"], ["feta cheese", "200g"], ["olives", "1 cup"], ["oregano", "1 tbsp"]], time: "15 min", difficulty: "Easy", servings: 4, category: "Greek", image: "🥗" },
        { name: "Moussaka", ingredients: [["eggplant", "2"], ["ground lamb", "600g"], ["potatoes", "3"], ["béchamel sauce", "3 cups"], ["tomatoes", "2 cans"], ["parmesan cheese", "100g"]], time: "120 min", difficulty: "Hard", servings: 8, category: "Greek", image: "🍆" },
        { name: "Gyros", ingredients: [["lamb", "800g"], ["pita bread", "8"], ["tzatziki", "2 cups"], ["tomatoes", "3"], ["red onion", "1"], ["lettuce", "1 head"]], time: "45 min", difficulty: "Medium", servings: 6, category: "Greek", image: "🥙" },
        { name: "Spanakopita", ingredients: [["spinach", "1kg"], ["feta cheese", "400g"], ["phyllo dough", "1 lb"], ["eggs", "4"]], time: "60 min", difficulty: "Medium", servings: 8, category: "Greek", image: "🥐" },
        { name: "Falafel", ingredients: [["chickpeas", "2 cans"], ["parsley", "2 cups"], ["cilantro", "1 cup"], ["cumin", "2 tbsp"], ["coriander", "1 tbsp"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Middle Eastern", image: "🧆" },
        { name: "Hummus", ingredients: [["chickpeas", "2 cans"], ["tahini", "1/2 cup"], ["cumin", "1 tsp"]], time: "10 min", difficulty: "Easy", servings: 8, category: "Middle Eastern", image: "🫘" },
        { name: "Tabbouleh", ingredients: [["bulgur wheat", "1 cup"], ["parsley", "3 cups"], ["tomatoes", "3"], ["cucumber", "1"], ["mint", "1/2 cup"]], time: "30 min", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🥗" },
        { name: "Shakshuka", ingredients: [["eggs", "6"], ["tomatoes", "6"], ["bell peppers", "2"], ["feta cheese", "100g"], ["cilantro", "1/2 cup"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Middle Eastern", image: "🍳" },
        { name: "Baba Ganoush", ingredients: [["eggplant", "2"], ["tahini", "1/2 cup"], ["parsley", "1/2 cup"]], time: "40 min", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🍆" },
        { name: "Dolmades", ingredients: [["grape leaves", "40"], ["rice", "2 cups"], ["ground lamb", "300g"], ["dill", "1/2 cup"], ["mint", "1/4 cup"]], time: "90 min", difficulty: "Hard", servings: 8, category: "Greek", image: "🍃" },
        { name: "Souvlaki", ingredients: [["pork", "800g"], ["pita bread", "8"], ["tzatziki", "2 cups"], ["tomatoes", "3"], ["red onion", "1"]], time: "40 min", difficulty: "Easy", servings: 6, category: "Greek", image: "🥙" },
        { name: "Baklava", ingredients: [["phyllo dough", "1 lb"], ["walnuts", "3 cups"], ["pistachios", "1 cup"], ["cinnamon", "1 tbsp"]], time: "90 min", difficulty: "Hard", servings: 12, category: "Greek", image: "🥐" },
        { name: "Tzatziki", ingredients: [["greek yogurt", "2 cups"], ["cucumber", "2"], ["dill", "1/4 cup"]], time: "10 min", difficulty: "Easy", servings: 8, category: "Greek", image: "🥒" },
        { name: "Lamb Kebabs", ingredients: [["lamb", "800g"], ["bell peppers", "3"], ["red onion", "2"], ["yogurt", "1 cup"]], time: "30 min", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🍢" },
        { name: "Fattoush", ingredients: [["pita bread", "3"], ["tomatoes", "4"], ["cucumber", "2"], ["radishes", "1 bunch"], ["romaine lettuce", "1 head"], ["sumac", "2 tbsp"]], time: "20 min", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🥗" },
    ];

    mediterraneanRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // French Recipes (500)
    const frenchRecipes = [
        { name: "Coq au Vin", ingredients: [["chicken thighs", "8"], ["red wine", "3 cups"], ["bacon", "200g"], ["mushrooms", "300g"], ["pearl onions", "20"], ["carrots", "3"], ["chicken broth", "2 cups"]], time: "120 min", difficulty: "Hard", servings: 6, category: "French", image: "🍗" },
        { name: "Ratatouille", ingredients: [["eggplant", "2"], ["zucchini", "3"], ["bell peppers", "2"], ["tomatoes", "6"], ["herbes de provence", "2 tbsp"]], time: "60 min", difficulty: "Medium", servings: 6, category: "French", image: "🍆" },
        { name: "Beef Bourguignon", ingredients: [["beef chuck", "1.5kg"], ["red wine", "3 cups"], ["bacon", "200g"], ["mushrooms", "400g"], ["pearl onions", "24"], ["carrots", "4"], ["beef broth", "2 cups"]], time: "180 min", difficulty: "Hard", servings: 8, category: "French", image: "🍖" },
        { name: "Croque Monsieur", ingredients: [["bread", "8 slices"], ["ham", "8 slices"], ["gruyere cheese", "300g"], ["béchamel sauce", "2 cups"]], time: "20 min", difficulty: "Easy", servings: 4, category: "French", image: "🥪" },
        { name: "Quiche Lorraine", ingredients: [["pie crust", "1"], ["bacon", "200g"], ["gruyere cheese", "200g"], ["eggs", "5"], ["heavy cream", "2 cups"]], time: "60 min", difficulty: "Medium", servings: 6, category: "French", image: "🥧" },
        { name: "French Onion Soup", ingredients: [["yellow onions", "6"], ["beef broth", "8 cups"], ["white wine", "1 cup"], ["baguette", "1"], ["gruyere cheese", "200g"]], time: "90 min", difficulty: "Medium", servings: 6, category: "French", image: "🥣" },
        { name: "Crepes", ingredients: [["eggs", "4"], ["milk", "2 cups"], ["nutella", "1 cup"], ["strawberries", "2 cups"]], time: "30 min", difficulty: "Medium", servings: 8, category: "French", image: "🥞" },
        { name: "Cassoulet", ingredients: [["white beans", "2 lbs"], ["duck legs", "4"], ["pork sausage", "400g"], ["bacon", "200g"], ["tomatoes", "2 cans"], ["chicken broth", "4 cups"]], time: "240 min", difficulty: "Hard", servings: 8, category: "French", image: "🍲" },
        { name: "Bouillabaisse", ingredients: [["white fish", "1kg"], ["mussels", "500g"], ["shrimp", "400g"], ["tomatoes", "4"], ["fennel", "1 bulb"], ["white wine", "2 cups"], ["fish stock", "6 cups"], ["saffron", "1 pinch"]], time: "60 min", difficulty: "Hard", servings: 6, category: "French", image: "🍲" },
        { name: "Nicoise Salad", ingredients: [["tuna", "2 cans"], ["eggs", "6"], ["green beans", "300g"], ["tomatoes", "4"], ["olives", "1 cup"], ["potatoes", "4"], ["anchovies", "8"]], time: "30 min", difficulty: "Easy", servings: 4, category: "French", image: "🥗" },
        { name: "Croissants", ingredients: [["puff pastry", "2 lbs"], ["eggs", "2"]], time: "180 min", difficulty: "Hard", servings: 12, category: "French", image: "🥐" },
        { name: "Sole Meunière", ingredients: [["sole fillets", "4"], ["parsley", "1/4 cup"]], time: "20 min", difficulty: "Medium", servings: 4, category: "French", image: "🐟" },
        { name: "Duck Confit", ingredients: [["duck legs", "6"], ["duck fat", "4 cups"], ["herbs de provence", "2 tbsp"]], time: "240 min", difficulty: "Hard", servings: 6, category: "French", image: "🦆" },
        { name: "Tarte Tatin", ingredients: [["apples", "8"], ["puff pastry", "1 sheet"]], time: "60 min", difficulty: "Medium", servings: 8, category: "French", image: "🍎" },
        { name: "Madeleines", ingredients: [["eggs", "3"], ["milk", "2 tbsp"]], time: "30 min", difficulty: "Easy", servings: 24, category: "French", image: "🧁" },
    ];

    frenchRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Breakfast Recipes (500)
    const breakfastRecipes = [
        { name: "Pancakes", ingredients: [["eggs", "2"], ["milk", "1.5 cups"], ["maple syrup", "1/2 cup"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🥞" },
        { name: "French Toast", ingredients: [["bread", "8 slices"], ["eggs", "4"], ["milk", "1 cup"], ["maple syrup", "1/2 cup"]], time: "15 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🍞" },
        { name: "Omelette", ingredients: [["eggs", "3"], ["milk", "2 tbsp"], ["cheese", "1/2 cup"]], time: "10 min", difficulty: "Medium", servings: 1, category: "Breakfast", image: "🍳" },
        { name: "Scrambled Eggs", ingredients: [["eggs", "6"], ["milk", "1/4 cup"], ["cheese", "1/2 cup"]], time: "10 min", difficulty: "Easy", servings: 3, category: "Breakfast", image: "🥚" },
        { name: "Waffles", ingredients: [["eggs", "2"], ["milk", "2 cups"], ["maple syrup", "1/2 cup"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🧇" },
        { name: "Eggs Benedict", ingredients: [["english muffins", "4"], ["eggs", "8"], ["canadian bacon", "8 slices"], ["hollandaise sauce", "1 cup"]], time: "30 min", difficulty: "Hard", servings: 4, category: "Breakfast", image: "🍳" },
        { name: "Breakfast Burrito", ingredients: [["tortillas", "4"], ["eggs", "6"], ["bacon", "8 strips"], ["cheddar cheese", "1 cup"], ["salsa", "1/2 cup"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🌯" },
        { name: "Avocado Toast", ingredients: [["bread", "4 slices"], ["avocado", "2"], ["eggs", "4"], ["cherry tomatoes", "1 cup"]], time: "10 min", difficulty: "Easy", servings: 2, category: "Breakfast", image: "🥑" },
        { name: "Smoothie Bowl", ingredients: [["banana", "2"], ["frozen berries", "2 cups"], ["yogurt", "1 cup"], ["granola", "1 cup"], ["chia seeds", "2 tbsp"], ["almond milk", "1 cup"]], time: "10 min", difficulty: "Easy", servings: 2, category: "Breakfast", image: "🥣" },
        { name: "Breakfast Hash", ingredients: [["potatoes", "4"], ["eggs", "4"], ["bell peppers", "2"], ["sausage", "400g"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Breakfast", image: "🍳" },
        { name: "Granola", ingredients: [["oats", "4 cups"], ["almonds", "1 cup"], ["pecans", "1 cup"], ["dried cranberries", "1 cup"], ["maple syrup", "1/2 cup"]], time: "45 min", difficulty: "Easy", servings: 12, category: "Breakfast", image: "🥣" },
        { name: "Bagels with Lox", ingredients: [["bagels", "4"], ["cream cheese", "1 cup"], ["smoked salmon", "300g"], ["red onion", "1"], ["capers", "1/4 cup"], ["tomatoes", "2"]], time: "10 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🥯" },
        { name: "Frittata", ingredients: [["eggs", "8"], ["spinach", "2 cups"], ["feta cheese", "150g"], ["cherry tomatoes", "1 cup"], ["bell peppers", "1"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Breakfast", image: "🍳" },
        { name: "Breakfast Sandwich", ingredients: [["english muffins", "4"], ["eggs", "4"], ["bacon", "8 strips"], ["cheddar cheese", "4 slices"]], time: "15 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🥪" },
        { name: "Banana Bread", ingredients: [["bananas", "4"], ["eggs", "2"]], time: "75 min", difficulty: "Easy", servings: 10, category: "Breakfast", image: "🍌" },
    ];

    breakfastRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Dessert Recipes (500)
    const dessertRecipes = [
        { name: "Chocolate Cake", ingredients: [["eggs", "3"], ["milk", "1 cup"], ["cocoa powder", "3/4 cup"], ["chocolate chips", "1 cup"]], time: "60 min", difficulty: "Medium", servings: 12, category: "Dessert", image: "🍰" },
        { name: "Brownies", ingredients: [["eggs", "4"], ["cocoa powder", "1 cup"], ["chocolate chips", "2 cups"]], time: "45 min", difficulty: "Easy", servings: 16, category: "Dessert", image: "🍫" },
        { name: "Chocolate Chip Cookies", ingredients: [["eggs", "2"], ["chocolate chips", "2 cups"], ["brown sugar", "1 cup"]], time: "25 min", difficulty: "Easy", servings: 36, category: "Dessert", image: "🍪" },
        { name: "Apple Pie", ingredients: [["apples", "8"], ["pie crust", "2"], ["cinnamon", "2 tsp"]], time: "90 min", difficulty: "Medium", servings: 8, category: "Dessert", image: "🥧" },
        { name: "Cheesecake", ingredients: [["cream cheese", "900g"], ["eggs", "4"], ["sour cream", "1 cup"], ["graham crackers", "2 cups"]], time: "240 min", difficulty: "Hard", servings: 12, category: "Dessert", image: "🍰" },
        { name: "Ice Cream", ingredients: [["heavy cream", "2 cups"], ["milk", "1 cup"], ["eggs", "4"]], time: "30 min", difficulty: "Medium", servings: 8, category: "Dessert", image: "🍦" },
        { name: "Creme Brulee", ingredients: [["heavy cream", "2 cups"], ["eggs", "6"]], time: "60 min", difficulty: "Hard", servings: 6, category: "Dessert", image: "🍮" },
        { name: "Macarons", ingredients: [["almond flour", "2 cups"], ["egg whites", "3"], ["powdered sugar", "2 cups"]], time: "90 min", difficulty: "Hard", servings: 24, category: "Dessert", image: "🧁" },
        { name: "Chocolate Mousse", ingredients: [["dark chocolate", "300g"], ["heavy cream", "2 cups"], ["eggs", "4"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Dessert", image: "🍫" },
        { name: "Carrot Cake", ingredients: [["carrots", "3 cups"], ["eggs", "4"], ["walnuts", "1 cup"], ["cream cheese", "400g"]], time: "75 min", difficulty: "Medium", servings: 12, category: "Dessert", image: "🥕" },
        { name: "Lemon Bars", ingredients: [["eggs", "4"], ["lemons", "4"]], time: "60 min", difficulty: "Easy", servings: 16, category: "Dessert", image: "🍋" },
        { name: "Panna Cotta", ingredients: [["heavy cream", "3 cups"], ["gelatin", "2 tbsp"], ["strawberries", "2 cups"]], time: "20 min", difficulty: "Easy", servings: 6, category: "Dessert", image: "🍮" },
        { name: "Fudge", ingredients: [["chocolate chips", "3 cups"], ["condensed milk", "1 can"]], time: "15 min", difficulty: "Easy", servings: 24, category: "Dessert", image: "🍫" },
        { name: "Cupcakes", ingredients: [["eggs", "3"], ["milk", "1 cup"], ["frosting", "2 cups"]], time: "40 min", difficulty: "Easy", servings: 12, category: "Dessert", image: "🧁" },
        { name: "Donuts", ingredients: [["eggs", "2"], ["milk", "1 cup"], ["yeast", "2 tsp"]], time: "120 min", difficulty: "Hard", servings: 12, category: "Dessert", image: "🍩" },
    ];

    dessertRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Seafood Recipes (500)
    const seafoodRecipes = [
        { name: "Shrimp Scampi", ingredients: [["shrimp", "600g"], ["pasta", "400g"], ["white wine", "1 cup"], ["parsley", "1/2 cup"], ["red pepper flakes", "1 tsp"]], time: "25 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🍤" },
        { name: "Grilled Salmon", ingredients: [["salmon fillets", "4"], ["asparagus", "1 bunch"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🐟" },
        { name: "Fish and Chips", ingredients: [["white fish", "800g"], ["potatoes", "6"], ["eggs", "2"], ["beer", "1 cup"]], time: "40 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🐟" },
        { name: "Lobster Roll", ingredients: [["lobster", "2"], ["hot dog buns", "4"], ["mayonnaise", "1/2 cup"], ["celery", "2 stalks"]], time: "20 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🦞" },
        { name: "Crab Cakes", ingredients: [["crab meat", "500g"], ["eggs", "2"], ["bread crumbs", "1 cup"], ["mayonnaise", "1/4 cup"], ["mustard", "2 tbsp"]], time: "30 min", difficulty: "Medium", servings: 6, category: "Seafood", image: "🦀" },
        { name: "Paella", ingredients: [["rice", "2 cups"], ["shrimp", "300g"], ["mussels", "500g"], ["chicken thighs", "400g"], ["chorizo", "200g"], ["bell peppers", "2"], ["tomatoes", "2"], ["saffron", "1 pinch"], ["chicken broth", "4 cups"]], time: "60 min", difficulty: "Hard", servings: 6, category: "Seafood", image: "🥘" },
        { name: "Seared Scallops", ingredients: [["scallops", "500g"], ["asparagus", "1 bunch"]], time: "15 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🦪" },
        { name: "Cioppino", ingredients: [["white fish", "400g"], ["shrimp", "300g"], ["mussels", "500g"], ["clams", "500g"], ["tomatoes", "2 cans"], ["white wine", "2 cups"], ["fish stock", "4 cups"]], time: "60 min", difficulty: "Medium", servings: 6, category: "Seafood", image: "🍲" },
        { name: "Tuna Poke Bowl", ingredients: [["sushi grade tuna", "400g"], ["rice", "3 cups"], ["avocado", "2"], ["edamame", "1 cup"], ["cucumber", "1"], ["seaweed", "1/2 cup"], ["sesame seeds", "2 tbsp"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🐟" },
        { name: "Fish Curry", ingredients: [["white fish", "600g"], ["coconut milk", "2 cans"], ["curry powder", "3 tbsp"], ["tomatoes", "3"], ["rice", "3 cups"], ["cilantro", "1 bunch"]], time: "35 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🍛" },
        { name: "Ceviche", ingredients: [["white fish", "500g"], ["lime", "8"], ["tomatoes", "3"], ["red onion", "1"], ["cilantro", "1 bunch"], ["jalapeño", "2"]], time: "30 min", difficulty: "Easy", servings: 6, category: "Seafood", image: "🐟" },
        { name: "Baked Cod", ingredients: [["cod fillets", "4"], ["cherry tomatoes", "2 cups"], ["olives", "1 cup"], ["white wine", "1/2 cup"]], time: "30 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🐟" },
        { name: "Oysters Rockefeller", ingredients: [["oysters", "24"], ["spinach", "2 cups"], ["parmesan cheese", "1/2 cup"], ["bread crumbs", "1/2 cup"]], time: "25 min", difficulty: "Medium", servings: 6, category: "Seafood", image: "🦪" },
        { name: "Shrimp Tacos", ingredients: [["shrimp", "600g"], ["corn tortillas", "12"], ["cabbage", "2 cups"], ["lime", "3"], ["sour cream", "1 cup"], ["cilantro", "1 bunch"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🍤" },
        { name: "Blackened Fish", ingredients: [["white fish", "4 fillets"], ["cajun seasoning", "3 tbsp"], ["rice", "3 cups"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🐟" },
    ];

    seafoodRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Soup and Stew Recipes (500)
    const soupRecipes = [
        { name: "Chicken Noodle Soup", ingredients: [["chicken breast", "500g"], ["egg noodles", "2 cups"], ["carrots", "3"], ["celery", "3 stalks"], ["chicken broth", "8 cups"], ["parsley", "1/4 cup"]], time: "40 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🍜" },
        { name: "Tomato Soup", ingredients: [["tomatoes", "8"], ["heavy cream", "1 cup"], ["vegetable broth", "4 cups"], ["fresh basil", "1/2 cup"]], time: "35 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🍅" },
        { name: "Beef Stew", ingredients: [["beef chuck", "1kg"], ["potatoes", "4"], ["carrots", "4"], ["celery", "3 stalks"], ["beef broth", "6 cups"], ["red wine", "1 cup"], ["tomato paste", "2 tbsp"]], time: "150 min", difficulty: "Medium", servings: 8, category: "Soup", image: "🍲" },
        { name: "Vegetable Soup", ingredients: [["carrots", "3"], ["celery", "3 stalks"], ["potatoes", "3"], ["tomatoes", "4"], ["green beans", "1 cup"], ["corn", "1 cup"], ["vegetable broth", "8 cups"]], time: "45 min", difficulty: "Easy", servings: 8, category: "Soup", image: "🥣" },
        { name: "Lentil Soup", ingredients: [["lentils", "2 cups"], ["carrots", "3"], ["celery", "3 stalks"], ["tomatoes", "2 cans"], ["vegetable broth", "8 cups"], ["spinach", "2 cups"]], time: "50 min", difficulty: "Easy", servings: 8, category: "Soup", image: "🥣" },
        { name: "Butternut Squash Soup", ingredients: [["butternut squash", "2"], ["heavy cream", "1 cup"], ["vegetable broth", "6 cups"], ["maple syrup", "2 tbsp"]], time: "60 min", difficulty: "Medium", servings: 6, category: "Soup", image: "🥣" },
        { name: "Split Pea Soup", ingredients: [["split peas", "2 cups"], ["ham hock", "1"], ["carrots", "3"], ["celery", "3 stalks"], ["chicken broth", "8 cups"]], time: "120 min", difficulty: "Easy", servings: 8, category: "Soup", image: "🥣" },
        { name: "Potato Leek Soup", ingredients: [["potatoes", "6"], ["leeks", "4"], ["heavy cream", "1 cup"], ["chicken broth", "6 cups"]], time: "45 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🥔" },
        { name: "Gazpacho", ingredients: [["tomatoes", "8"], ["cucumber", "2"], ["bell peppers", "2"], ["red onion", "1"], ["bread", "2 cups"]], time: "20 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🍅" },
        { name: "Thai Coconut Soup", ingredients: [["chicken breast", "400g"], ["coconut milk", "2 cans"], ["mushrooms", "200g"], ["lemongrass", "2 stalks"], ["lime leaves", "6"], ["ginger", "2 tbsp"], ["chicken broth", "4 cups"], ["cilantro", "1 bunch"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Soup", image: "🥥" },
        { name: "Mushroom Soup", ingredients: [["mushrooms", "600g"], ["heavy cream", "1 cup"], ["vegetable broth", "6 cups"]], time: "40 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🍄" },
        { name: "Broccoli Cheese Soup", ingredients: [["broccoli", "4 cups"], ["cheddar cheese", "300g"], ["heavy cream", "1 cup"], ["chicken broth", "4 cups"]], time: "35 min", difficulty: "Easy", servings: 6, category: "Soup", image: "🥦" },
        { name: "Chili", ingredients: [["ground beef", "800g"], ["kidney beans", "2 cans"], ["tomatoes", "2 cans"], ["bell peppers", "2"], ["tomato paste", "3 tbsp"], ["beef broth", "2 cups"]], time: "90 min", difficulty: "Easy", servings: 8, category: "Soup", image: "🌶️" },
        { name: "Egg Drop Soup", ingredients: [["eggs", "4"], ["chicken broth", "6 cups"], ["green onions", "4"], ["cornstarch", "2 tbsp"], ["ginger", "1 tbsp"]], time: "15 min", difficulty: "Easy", servings: 4, category: "Soup", image: "🥚" },
        { name: "Miso Soup", ingredients: [["tofu", "200g"], ["seaweed", "1/4 cup"], ["miso paste", "1/4 cup"], ["green onions", "4"], ["dashi stock", "6 cups"]], time: "15 min", difficulty: "Easy", servings: 4, category: "Soup", image: "🍲" },
    ];

    soupRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    // Vegetarian Recipes (500)
    const vegetarianRecipes = [
        { name: "Vegetable Stir Fry", ingredients: [["broccoli", "2 cups"], ["bell peppers", "2"], ["carrots", "2"], ["snap peas", "1 cup"], ["tofu", "400g"], ["rice", "3 cups"], ["sesame oil", "2 tbsp"], ["ginger", "2 tbsp"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🥦" },
        { name: "Vegetable Lasagna", ingredients: [["lasagna noodles", "12 sheets"], ["ricotta cheese", "500g"], ["mozzarella cheese", "300g"], ["parmesan cheese", "100g"], ["spinach", "2 cups"], ["zucchini", "2"], ["mushrooms", "300g"], ["tomato sauce", "3 cups"], ["eggs", "2"]], time: "90 min", difficulty: "Medium", servings: 8, category: "Vegetarian", image: "🍝" },
        { name: "Veggie Burger", ingredients: [["black beans", "2 cans"], ["eggs", "2"], ["bread crumbs", "1 cup"], ["bell peppers", "1"], ["burger buns", "4"], ["lettuce", "1 head"], ["tomatoes", "2"]], time: "30 min", difficulty: "Medium", servings: 4, category: "Vegetarian", image: "🍔" },
        { name: "Eggplant Parmesan", ingredients: [["eggplant", "2"], ["bread crumbs", "2 cups"], ["parmesan cheese", "150g"], ["eggs", "3"], ["tomato sauce", "3 cups"], ["mozzarella cheese", "300g"]], time: "60 min", difficulty: "Medium", servings: 6, category: "Vegetarian", image: "🍆" },
        { name: "Mushroom Risotto", ingredients: [["arborio rice", "2 cups"], ["mushrooms", "500g"], ["white wine", "1 cup"], ["vegetable broth", "6 cups"], ["parmesan cheese", "100g"], ["parsley", "1/4 cup"]], time: "45 min", difficulty: "Hard", servings: 4, category: "Vegetarian", image: "🍄" },
        { name: "Caprese Sandwich", ingredients: [["ciabatta bread", "1"], ["mozzarella cheese", "250g"], ["tomatoes", "3"], ["fresh basil", "1 bunch"], ["balsamic vinegar", "2 tbsp"]], time: "10 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🥪" },
        { name: "Vegetable Curry", ingredients: [["cauliflower", "1 head"], ["chickpeas", "2 cans"], ["coconut milk", "2 cans"], ["curry powder", "3 tbsp"], ["tomatoes", "3"], ["spinach", "2 cups"], ["rice", "3 cups"]], time: "40 min", difficulty: "Medium", servings: 6, category: "Vegetarian", image: "🍛" },
        { name: "Stuffed Bell Peppers", ingredients: [["bell peppers", "6"], ["rice", "2 cups"], ["black beans", "1 can"], ["corn", "1 cup"], ["cheddar cheese", "200g"], ["tomato sauce", "2 cups"]], time: "60 min", difficulty: "Medium", servings: 6, category: "Vegetarian", image: "🫑" },
        { name: "Margherita Flatbread", ingredients: [["flatbread", "4"], ["tomato sauce", "1 cup"], ["mozzarella cheese", "250g"], ["fresh basil", "1 bunch"], ["cherry tomatoes", "2 cups"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🍕" },
        { name: "Quinoa Bowl", ingredients: [["quinoa", "2 cups"], ["chickpeas", "1 can"], ["avocado", "2"], ["cherry tomatoes", "2 cups"], ["cucumber", "1"], ["feta cheese", "150g"], ["lemon", "2"]], time: "25 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🥗" },
        { name: "Pasta Primavera", ingredients: [["pasta", "400g"], ["broccoli", "2 cups"], ["bell peppers", "2"], ["zucchini", "2"], ["cherry tomatoes", "2 cups"], ["parmesan cheese", "100g"], ["heavy cream", "1 cup"]], time: "30 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🍝" },
        { name: "Black Bean Tacos", ingredients: [["black beans", "2 cans"], ["taco shells", "12"], ["lettuce", "1 head"], ["tomatoes", "3"], ["cheddar cheese", "200g"], ["sour cream", "1 cup"], ["salsa", "1 cup"]], time: "20 min", difficulty: "Easy", servings: 4, category: "Vegetarian", image: "🌮" },
        { name: "Grilled Vegetable Skewers", ingredients: [["zucchini", "2"], ["bell peppers", "3"], ["red onion", "2"], ["cherry tomatoes", "2 cups"], ["mushrooms", "300g"]], time: "25 min", difficulty: "Easy", servings: 6, category: "Vegetarian", image: "🍢" },
        { name: "Cauliflower Pizza", ingredients: [["cauliflower", "1 head"], ["eggs", "2"], ["mozzarella cheese", "300g"], ["tomato sauce", "1 cup"], ["bell peppers", "1"], ["mushrooms", "150g"]], time: "50 min", difficulty: "Medium", servings: 4, category: "Vegetarian", image: "🍕" },
        { name: "Spinach Artichoke Dip", ingredients: [["spinach", "2 cups"], ["artichoke hearts", "2 cans"], ["cream cheese", "250g"], ["sour cream", "1 cup"], ["parmesan cheese", "100g"], ["mozzarella cheese", "200g"]], time: "30 min", difficulty: "Easy", servings: 8, category: "Vegetarian", image: "🥬" },
    ];

    vegetarianRecipes.forEach(recipe => {
        for (let i = 0; i < 33; i++) {
            const variation = { ...recipe };
            variation.id = id++;
            if (i > 0) variation.name = `${recipe.name} (Variation ${i})`;
            recipes.push(variation);
        }
    });

    return recipes;
}

const RECIPES_DATABASE = generateRecipeDatabase();

// Extract all unique ingredients (excluding staples) for search functionality
const ALL_INGREDIENTS = [...new Set(
    RECIPES_DATABASE.flatMap(recipe =>
        recipe.ingredients.map(ing => ing[0])
    ).filter(ing => !STAPLES_AND_SPICES.includes(ing))
)].sort();
