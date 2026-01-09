// Comprehensive recipe database
const RECIPES_DATABASE = [
    {
        id: 1,
        name: "Classic Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper", "salt"],
        instructions: [
            "Cook spaghetti according to package directions in salted boiling water",
            "While pasta cooks, fry bacon until crispy, then chop into small pieces",
            "Beat eggs with grated parmesan cheese and black pepper",
            "Drain pasta, reserving 1 cup pasta water",
            "Remove pan from heat, add hot pasta to bacon",
            "Quickly stir in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra parmesan and black pepper"
        ],
        time: "20 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Pasta",
        image: "🍝"
    },
    {
        id: 2,
        name: "Chicken Stir Fry",
        ingredients: ["chicken breast", "soy sauce", "garlic", "ginger", "bell peppers", "onion", "broccoli", "rice", "vegetable oil", "sesame oil"],
        instructions: [
            "Cut chicken into bite-sized pieces",
            "Mince garlic and ginger",
            "Chop vegetables into similar-sized pieces",
            "Heat vegetable oil in a wok or large pan over high heat",
            "Cook chicken until golden, then remove",
            "Stir-fry vegetables until tender-crisp",
            "Return chicken to pan, add soy sauce and sesame oil",
            "Serve over cooked rice"
        ],
        time: "25 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Asian",
        image: "🥘"
    },
    {
        id: 3,
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil", "salt"],
        instructions: [
            "Preheat oven to 475°F (245°C)",
            "Roll out pizza dough on floured surface",
            "Spread tomato sauce evenly, leaving border for crust",
            "Tear mozzarella and distribute over sauce",
            "Drizzle with olive oil and sprinkle with salt",
            "Bake for 12-15 minutes until crust is golden",
            "Top with fresh basil leaves before serving"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 2,
        category: "Italian",
        image: "🍕"
    },
    {
        id: 4,
        name: "Greek Salad",
        ingredients: ["tomatoes", "cucumber", "red onion", "feta cheese", "olives", "olive oil", "lemon juice", "oregano", "salt", "black pepper"],
        instructions: [
            "Chop tomatoes and cucumber into chunks",
            "Slice red onion thinly",
            "Combine vegetables in a large bowl",
            "Add olives and crumbled feta cheese",
            "Whisk together olive oil, lemon juice, oregano, salt, and pepper",
            "Pour dressing over salad and toss gently",
            "Let sit for 10 minutes before serving for flavors to meld"
        ],
        time: "15 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Salad",
        image: "🥗"
    },
    {
        id: 5,
        name: "Beef Tacos",
        ingredients: ["ground beef", "taco shells", "lettuce", "tomatoes", "cheddar cheese", "sour cream", "onion", "cumin", "chili powder", "garlic powder", "salt"],
        instructions: [
            "Brown ground beef in a large skillet over medium-high heat",
            "Add cumin, chili powder, garlic powder, and salt",
            "Cook until beef is fully cooked and seasoned",
            "Warm taco shells according to package directions",
            "Chop lettuce and tomatoes",
            "Shred cheese if needed",
            "Assemble tacos with beef, lettuce, tomatoes, cheese, and sour cream"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Mexican",
        image: "🌮"
    },
    {
        id: 6,
        name: "Mushroom Risotto",
        ingredients: ["arborio rice", "mushrooms", "onion", "garlic", "white wine", "vegetable broth", "parmesan cheese", "butter", "olive oil", "parsley"],
        instructions: [
            "Heat broth in a saucepan and keep warm",
            "Sauté sliced mushrooms in butter until golden, set aside",
            "In same pan, sauté diced onion and garlic in olive oil",
            "Add rice and toast for 2 minutes",
            "Pour in white wine and stir until absorbed",
            "Add broth one ladle at a time, stirring constantly",
            "When rice is creamy and al dente, stir in mushrooms, parmesan, and parsley"
        ],
        time: "40 minutes",
        difficulty: "Hard",
        servings: 4,
        category: "Italian",
        image: "🍄"
    },
    {
        id: 7,
        name: "Pancakes",
        ingredients: ["flour", "eggs", "milk", "sugar", "baking powder", "salt", "butter", "maple syrup"],
        instructions: [
            "Mix flour, sugar, baking powder, and salt in a bowl",
            "In another bowl, whisk eggs and milk together",
            "Pour wet ingredients into dry and mix until just combined",
            "Heat a griddle or pan over medium heat and add butter",
            "Pour 1/4 cup batter for each pancake",
            "Cook until bubbles form on surface, then flip",
            "Cook until golden brown on both sides",
            "Serve warm with butter and maple syrup"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Breakfast",
        image: "🥞"
    },
    {
        id: 8,
        name: "Caprese Salad",
        ingredients: ["tomatoes", "mozzarella cheese", "fresh basil", "olive oil", "balsamic vinegar", "salt", "black pepper"],
        instructions: [
            "Slice tomatoes and mozzarella into 1/4 inch rounds",
            "Arrange on a platter, alternating tomato and mozzarella slices",
            "Tuck fresh basil leaves between slices",
            "Drizzle with olive oil and balsamic vinegar",
            "Season with salt and freshly ground black pepper",
            "Let sit for 5 minutes before serving to allow flavors to develop"
        ],
        time: "10 minutes",
        difficulty: "Easy",
        servings: 2,
        category: "Salad",
        image: "🍅"
    },
    {
        id: 9,
        name: "Chicken Curry",
        ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic", "ginger", "tomatoes", "rice", "vegetable oil", "cilantro"],
        instructions: [
            "Cut chicken into cubes",
            "Sauté onion, garlic, and ginger in oil until fragrant",
            "Add curry powder and cook for 1 minute",
            "Add chicken and brown on all sides",
            "Add diced tomatoes and coconut milk",
            "Simmer for 20 minutes until chicken is cooked through",
            "Serve over rice, garnished with fresh cilantro"
        ],
        time: "35 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Indian",
        image: "🍛"
    },
    {
        id: 10,
        name: "Caesar Salad",
        ingredients: ["romaine lettuce", "parmesan cheese", "croutons", "eggs", "garlic", "lemon juice", "olive oil", "worcestershire sauce", "mustard", "anchovy paste"],
        instructions: [
            "Make dressing: blend egg yolk, garlic, lemon juice, worcestershire, mustard, and anchovy paste",
            "Slowly drizzle in olive oil while blending until emulsified",
            "Chop romaine lettuce into bite-sized pieces",
            "Toss lettuce with dressing",
            "Add croutons and shaved parmesan cheese",
            "Toss again and serve immediately"
        ],
        time: "15 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Salad",
        image: "🥬"
    },
    {
        id: 11,
        name: "Beef Burgers",
        ingredients: ["ground beef", "burger buns", "lettuce", "tomatoes", "onion", "pickles", "cheddar cheese", "ketchup", "mustard", "salt", "black pepper"],
        instructions: [
            "Season ground beef with salt and pepper",
            "Form into 4 equal patties, making a small indent in the center",
            "Heat grill or pan over medium-high heat",
            "Cook burgers 4-5 minutes per side for medium",
            "Add cheese in last minute of cooking if desired",
            "Toast buns lightly",
            "Assemble burgers with lettuce, tomato, onion, pickles, ketchup, and mustard"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "American",
        image: "🍔"
    },
    {
        id: 12,
        name: "Shrimp Scampi",
        ingredients: ["shrimp", "pasta", "garlic", "butter", "white wine", "lemon juice", "parsley", "red pepper flakes", "salt", "black pepper"],
        instructions: [
            "Cook pasta according to package directions",
            "Peel and devein shrimp",
            "Melt butter in large pan, add minced garlic and red pepper flakes",
            "Add shrimp and cook until pink, about 2-3 minutes per side",
            "Add white wine and lemon juice, simmer for 2 minutes",
            "Toss with drained pasta",
            "Garnish with fresh parsley and serve"
        ],
        time: "25 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Seafood",
        image: "🍤"
    },
    {
        id: 13,
        name: "Vegetable Soup",
        ingredients: ["carrots", "celery", "onion", "potatoes", "tomatoes", "vegetable broth", "garlic", "thyme", "bay leaves", "olive oil", "salt", "black pepper"],
        instructions: [
            "Chop all vegetables into bite-sized pieces",
            "Heat olive oil in large pot, sauté onion, carrots, and celery",
            "Add garlic and cook for 1 minute",
            "Add potatoes, tomatoes, and vegetable broth",
            "Add thyme and bay leaves",
            "Bring to boil, then simmer for 25 minutes",
            "Season with salt and pepper, remove bay leaves before serving"
        ],
        time: "45 minutes",
        difficulty: "Easy",
        servings: 6,
        category: "Soup",
        image: "🥣"
    },
    {
        id: 14,
        name: "Omelette",
        ingredients: ["eggs", "milk", "butter", "cheese", "salt", "black pepper"],
        instructions: [
            "Beat eggs with milk, salt, and pepper",
            "Heat butter in non-stick pan over medium heat",
            "Pour in egg mixture",
            "As eggs begin to set, gently push edges toward center",
            "When mostly set but still slightly runny on top, add cheese to one half",
            "Fold omelette in half and cook for 30 more seconds",
            "Slide onto plate and serve immediately"
        ],
        time: "10 minutes",
        difficulty: "Medium",
        servings: 1,
        category: "Breakfast",
        image: "🍳"
    },
    {
        id: 15,
        name: "Pad Thai",
        ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "peanuts", "lime", "fish sauce", "sugar", "garlic", "tofu", "green onions", "vegetable oil"],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes",
            "Make sauce: mix fish sauce, sugar, and lime juice",
            "Heat oil in wok, scramble eggs and set aside",
            "Cook garlic and shrimp until pink",
            "Add drained noodles and sauce, toss until noodles soften",
            "Add tofu, bean sprouts, and scrambled eggs",
            "Serve garnished with peanuts, lime wedges, and green onions"
        ],
        time: "30 minutes",
        difficulty: "Hard",
        servings: 4,
        category: "Asian",
        image: "🍜"
    },
    {
        id: 16,
        name: "French Toast",
        ingredients: ["bread", "eggs", "milk", "cinnamon", "vanilla extract", "sugar", "butter", "maple syrup"],
        instructions: [
            "Whisk together eggs, milk, cinnamon, vanilla, and sugar",
            "Heat butter in a large skillet over medium heat",
            "Dip bread slices in egg mixture, coating both sides",
            "Cook until golden brown, about 2-3 minutes per side",
            "Serve hot with butter and maple syrup",
            "Optional: dust with powdered sugar"
        ],
        time: "15 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Breakfast",
        image: "🍞"
    },
    {
        id: 17,
        name: "Chili Con Carne",
        ingredients: ["ground beef", "kidney beans", "tomatoes", "onion", "bell peppers", "garlic", "chili powder", "cumin", "tomato paste", "beef broth", "salt", "black pepper"],
        instructions: [
            "Brown ground beef in large pot, drain excess fat",
            "Add diced onion, bell peppers, and garlic, cook until soft",
            "Add chili powder, cumin, salt, and pepper",
            "Stir in tomato paste, diced tomatoes, and beef broth",
            "Add kidney beans",
            "Bring to boil, then simmer for 45 minutes, stirring occasionally",
            "Serve with sour cream, cheese, and green onions if desired"
        ],
        time: "60 minutes",
        difficulty: "Medium",
        servings: 6,
        category: "American",
        image: "🌶️"
    },
    {
        id: 18,
        name: "Grilled Cheese Sandwich",
        ingredients: ["bread", "cheddar cheese", "butter"],
        instructions: [
            "Butter one side of each bread slice",
            "Place cheese between unbuttered sides of bread",
            "Heat skillet over medium heat",
            "Place sandwich in skillet, buttered side down",
            "Cook until golden brown, about 3-4 minutes",
            "Flip and cook other side until golden and cheese is melted",
            "Cut in half and serve hot"
        ],
        time: "10 minutes",
        difficulty: "Easy",
        servings: 1,
        category: "American",
        image: "🧀"
    },
    {
        id: 19,
        name: "Teriyaki Salmon",
        ingredients: ["salmon", "soy sauce", "honey", "ginger", "garlic", "rice vinegar", "sesame oil", "green onions", "sesame seeds"],
        instructions: [
            "Make teriyaki sauce: combine soy sauce, honey, ginger, garlic, rice vinegar",
            "Marinate salmon in half the sauce for 15 minutes",
            "Heat sesame oil in pan over medium-high heat",
            "Cook salmon skin-side up first, 4 minutes",
            "Flip and cook 4 more minutes",
            "Add remaining sauce to pan and cook until thickened",
            "Garnish with green onions and sesame seeds"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Asian",
        image: "🐟"
    },
    {
        id: 20,
        name: "Guacamole",
        ingredients: ["avocados", "lime juice", "tomatoes", "onion", "cilantro", "jalapeño", "garlic", "salt"],
        instructions: [
            "Cut avocados in half, remove pit, and scoop out flesh",
            "Mash avocados with fork to desired consistency",
            "Add lime juice immediately to prevent browning",
            "Dice tomatoes, onion, and jalapeño finely",
            "Mince garlic and chop cilantro",
            "Mix all ingredients together",
            "Season with salt to taste",
            "Serve with tortilla chips"
        ],
        time: "10 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Mexican",
        image: "🥑"
    },
    {
        id: 21,
        name: "Lasagna",
        ingredients: ["lasagna noodles", "ground beef", "ricotta cheese", "mozzarella cheese", "parmesan cheese", "eggs", "tomato sauce", "onion", "garlic", "italian seasoning", "salt", "black pepper"],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Cook lasagna noodles according to package directions",
            "Brown ground beef with onion and garlic, add tomato sauce and italian seasoning",
            "Mix ricotta cheese with eggs, half the mozzarella, and parmesan",
            "Layer in 9x13 pan: sauce, noodles, cheese mixture, repeat",
            "Top with remaining mozzarella",
            "Cover with foil and bake 25 minutes, then uncover and bake 25 more minutes",
            "Let rest 15 minutes before serving"
        ],
        time: "90 minutes",
        difficulty: "Hard",
        servings: 8,
        category: "Italian",
        image: "🍝"
    },
    {
        id: 22,
        name: "Fried Rice",
        ingredients: ["rice", "eggs", "peas", "carrots", "green onions", "soy sauce", "sesame oil", "garlic", "ginger", "vegetable oil"],
        instructions: [
            "Use day-old rice for best results",
            "Scramble eggs in wok, set aside",
            "Heat oil in wok over high heat",
            "Stir-fry carrots and peas until tender",
            "Add garlic and ginger, cook 30 seconds",
            "Add rice and break up clumps",
            "Add soy sauce and sesame oil, toss well",
            "Stir in eggs and green onions, serve hot"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Asian",
        image: "🍚"
    },
    {
        id: 23,
        name: "Bruschetta",
        ingredients: ["baguette", "tomatoes", "garlic", "fresh basil", "olive oil", "balsamic vinegar", "salt", "black pepper"],
        instructions: [
            "Slice baguette into 1/2 inch slices",
            "Brush with olive oil and toast until golden",
            "Rub toasted bread with cut garlic clove",
            "Dice tomatoes and mix with chopped basil",
            "Add olive oil, balsamic vinegar, salt, and pepper to tomatoes",
            "Let tomato mixture sit for 10 minutes",
            "Spoon tomato mixture onto toasted bread just before serving"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 6,
        category: "Italian",
        image: "🥖"
    },
    {
        id: 24,
        name: "Chicken Alfredo",
        ingredients: ["fettuccine", "chicken breast", "heavy cream", "parmesan cheese", "butter", "garlic", "salt", "black pepper", "parsley"],
        instructions: [
            "Cook fettuccine according to package directions",
            "Season and cook chicken in butter until done, slice",
            "In same pan, sauté garlic in butter",
            "Add heavy cream and bring to simmer",
            "Stir in parmesan cheese until melted and smooth",
            "Season with salt and pepper",
            "Toss pasta with sauce and top with sliced chicken",
            "Garnish with parsley and extra parmesan"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Italian",
        image: "🍝"
    },
    {
        id: 25,
        name: "Quesadilla",
        ingredients: ["tortillas", "cheddar cheese", "bell peppers", "onion", "chicken breast", "sour cream", "salsa", "vegetable oil"],
        instructions: [
            "Cook diced chicken with bell peppers and onion",
            "Heat tortilla in dry skillet",
            "On half the tortilla, layer cheese, chicken mixture, more cheese",
            "Fold tortilla in half",
            "Cook until golden and crispy on both sides",
            "Cut into wedges",
            "Serve with sour cream and salsa"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 2,
        category: "Mexican",
        image: "🌮"
    },
    {
        id: 26,
        name: "Minestrone Soup",
        ingredients: ["pasta", "kidney beans", "tomatoes", "carrots", "celery", "onion", "garlic", "zucchini", "spinach", "vegetable broth", "olive oil", "italian seasoning", "parmesan cheese"],
        instructions: [
            "Heat olive oil in large pot, sauté onion, carrots, and celery",
            "Add garlic and italian seasoning, cook 1 minute",
            "Add diced tomatoes, vegetable broth, and kidney beans",
            "Bring to boil, add pasta and zucchini",
            "Simmer until pasta is tender",
            "Stir in fresh spinach until wilted",
            "Serve with grated parmesan cheese"
        ],
        time: "40 minutes",
        difficulty: "Easy",
        servings: 6,
        category: "Soup",
        image: "🥣"
    },
    {
        id: 27,
        name: "Fish Tacos",
        ingredients: ["white fish", "corn tortillas", "cabbage", "lime", "sour cream", "cilantro", "cumin", "chili powder", "garlic powder", "salt"],
        instructions: [
            "Season fish with cumin, chili powder, garlic powder, and salt",
            "Cook fish in skillet until flaky, about 3-4 minutes per side",
            "Break fish into chunks",
            "Mix sour cream with lime juice for sauce",
            "Shred cabbage thinly",
            "Warm tortillas",
            "Assemble tacos with fish, cabbage, sauce, and cilantro",
            "Serve with lime wedges"
        ],
        time: "25 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Mexican",
        image: "🐟"
    },
    {
        id: 28,
        name: "Chicken Noodle Soup",
        ingredients: ["chicken breast", "egg noodles", "carrots", "celery", "onion", "garlic", "chicken broth", "bay leaves", "thyme", "parsley", "salt", "black pepper"],
        instructions: [
            "Cut chicken into bite-sized pieces",
            "Sauté onion, carrots, and celery in large pot",
            "Add garlic and cook 1 minute",
            "Add chicken broth, bay leaves, and thyme",
            "Add chicken and simmer until cooked, about 15 minutes",
            "Add egg noodles and cook until tender",
            "Remove bay leaves, season with salt and pepper",
            "Garnish with fresh parsley"
        ],
        time: "35 minutes",
        difficulty: "Easy",
        servings: 6,
        category: "Soup",
        image: "🍜"
    },
    {
        id: 29,
        name: "Pesto Pasta",
        ingredients: ["pasta", "basil", "pine nuts", "garlic", "parmesan cheese", "olive oil", "salt", "black pepper"],
        instructions: [
            "Cook pasta according to package directions",
            "Make pesto: blend basil, pine nuts, garlic, parmesan, and olive oil",
            "Season pesto with salt and pepper",
            "Reserve 1 cup pasta water before draining",
            "Toss hot pasta with pesto",
            "Add pasta water as needed to reach desired consistency",
            "Serve with extra parmesan"
        ],
        time: "20 minutes",
        difficulty: "Easy",
        servings: 4,
        category: "Italian",
        image: "🍝"
    },
    {
        id: 30,
        name: "Scrambled Eggs",
        ingredients: ["eggs", "milk", "butter", "salt", "black pepper", "cheese"],
        instructions: [
            "Whisk eggs with milk, salt, and pepper",
            "Melt butter in non-stick pan over medium-low heat",
            "Pour in egg mixture",
            "Let sit for 20 seconds, then gently stir with spatula",
            "Continue cooking and stirring gently until eggs are softly set",
            "Add cheese in last 30 seconds if desired",
            "Remove from heat while still slightly creamy",
            "Serve immediately"
        ],
        time: "10 minutes",
        difficulty: "Easy",
        servings: 2,
        category: "Breakfast",
        image: "🥚"
    },
    {
        id: 31,
        name: "BBQ Chicken Pizza",
        ingredients: ["pizza dough", "bbq sauce", "chicken breast", "red onion", "mozzarella cheese", "cilantro"],
        instructions: [
            "Preheat oven to 475°F (245°C)",
            "Cook and shred chicken, toss with BBQ sauce",
            "Roll out pizza dough",
            "Spread BBQ sauce on dough as base",
            "Top with chicken, sliced red onion, and mozzarella",
            "Bake 12-15 minutes until crust is golden",
            "Garnish with fresh cilantro before serving"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 2,
        category: "American",
        image: "🍕"
    },
    {
        id: 32,
        name: "Tom Yum Soup",
        ingredients: ["shrimp", "mushrooms", "tomatoes", "lemongrass", "lime leaves", "galangal", "fish sauce", "lime juice", "chili peppers", "cilantro", "chicken broth"],
        instructions: [
            "Bring chicken broth to boil",
            "Add lemongrass, lime leaves, and galangal",
            "Simmer for 10 minutes to infuse flavors",
            "Add mushrooms and tomatoes",
            "Add shrimp and cook until pink",
            "Season with fish sauce and lime juice",
            "Add chili peppers for heat",
            "Garnish with fresh cilantro"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Asian",
        image: "🍲"
    },
    {
        id: 33,
        name: "Chicken Parmesan",
        ingredients: ["chicken breast", "bread crumbs", "parmesan cheese", "eggs", "tomato sauce", "mozzarella cheese", "flour", "italian seasoning", "olive oil"],
        instructions: [
            "Pound chicken to even thickness",
            "Set up breading station: flour, beaten eggs, bread crumbs mixed with parmesan",
            "Bread chicken: flour, egg, bread crumbs",
            "Fry in olive oil until golden, about 4 minutes per side",
            "Place in baking dish, top with tomato sauce and mozzarella",
            "Bake at 400°F until cheese is melted and bubbly",
            "Serve over pasta"
        ],
        time: "40 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Italian",
        image: "🍗"
    },
    {
        id: 34,
        name: "Falafel",
        ingredients: ["chickpeas", "onion", "garlic", "parsley", "cilantro", "cumin", "coriander", "flour", "baking powder", "salt", "vegetable oil"],
        instructions: [
            "Soak dried chickpeas overnight",
            "Blend chickpeas, onion, garlic, herbs, and spices in food processor",
            "Add flour and baking powder, pulse to combine",
            "Refrigerate mixture for 1 hour",
            "Form into small balls or patties",
            "Deep fry in oil heated to 350°F until golden brown",
            "Drain on paper towels",
            "Serve in pita with tahini sauce and vegetables"
        ],
        time: "30 minutes (plus overnight soaking)",
        difficulty: "Medium",
        servings: 4,
        category: "Middle Eastern",
        image: "🧆"
    },
    {
        id: 35,
        name: "Mac and Cheese",
        ingredients: ["macaroni", "cheddar cheese", "milk", "butter", "flour", "salt", "black pepper", "mustard"],
        instructions: [
            "Cook macaroni according to package directions",
            "Make roux: melt butter, whisk in flour, cook 1 minute",
            "Gradually whisk in milk, cook until thickened",
            "Remove from heat, stir in shredded cheese until melted",
            "Add mustard, salt, and pepper",
            "Toss with drained macaroni",
            "Optional: top with bread crumbs and bake until golden"
        ],
        time: "25 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "American",
        image: "🧀"
    },
    {
        id: 36,
        name: "Spring Rolls",
        ingredients: ["rice paper", "shrimp", "rice noodles", "carrots", "cucumber", "lettuce", "mint", "cilantro", "peanut sauce"],
        instructions: [
            "Cook shrimp and rice noodles, let cool",
            "Julienne carrots and cucumber",
            "Dip rice paper in warm water until soft",
            "Lay flat and add lettuce, noodles, shrimp, vegetables, and herbs",
            "Fold sides in and roll tightly",
            "Serve with peanut sauce for dipping",
            "Keep covered with damp towel until serving"
        ],
        time: "30 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Asian",
        image: "🥗"
    },
    {
        id: 37,
        name: "Meatballs",
        ingredients: ["ground beef", "bread crumbs", "eggs", "parmesan cheese", "garlic", "parsley", "onion", "milk", "salt", "black pepper", "tomato sauce"],
        instructions: [
            "Preheat oven to 400°F (200°C)",
            "Soak bread crumbs in milk",
            "Mix ground beef, soaked bread crumbs, eggs, parmesan, garlic, parsley, and onion",
            "Season with salt and pepper",
            "Form into 1.5-inch balls",
            "Bake for 20 minutes until browned",
            "Simmer in tomato sauce for 10 minutes",
            "Serve over pasta or in sub sandwich"
        ],
        time: "45 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "Italian",
        image: "🍝"
    },
    {
        id: 38,
        name: "Hummus",
        ingredients: ["chickpeas", "tahini", "lemon juice", "garlic", "olive oil", "cumin", "salt", "paprika"],
        instructions: [
            "Drain and rinse chickpeas, reserve some liquid",
            "Blend chickpeas, tahini, lemon juice, and garlic in food processor",
            "Add olive oil slowly while blending",
            "Add reserved chickpea liquid to reach desired consistency",
            "Season with cumin and salt",
            "Transfer to bowl, create well in center",
            "Drizzle with olive oil and sprinkle with paprika",
            "Serve with pita bread or vegetables"
        ],
        time: "10 minutes",
        difficulty: "Easy",
        servings: 6,
        category: "Middle Eastern",
        image: "🫘"
    },
    {
        id: 39,
        name: "Pork Chops",
        ingredients: ["pork chops", "garlic", "thyme", "butter", "olive oil", "salt", "black pepper"],
        instructions: [
            "Season pork chops generously with salt and pepper",
            "Heat olive oil in skillet over medium-high heat",
            "Sear pork chops 4-5 minutes per side",
            "Add butter, garlic, and thyme to pan",
            "Baste pork chops with butter mixture",
            "Cook until internal temperature reaches 145°F",
            "Let rest 5 minutes before serving"
        ],
        time: "20 minutes",
        difficulty: "Medium",
        servings: 4,
        category: "American",
        image: "🥩"
    },
    {
        id: 40,
        name: "Banana Bread",
        ingredients: ["bananas", "flour", "sugar", "eggs", "butter", "baking soda", "salt", "vanilla extract", "cinnamon"],
        instructions: [
            "Preheat oven to 350°F (175°C)",
            "Mash ripe bananas in bowl",
            "Cream butter and sugar together",
            "Beat in eggs and vanilla",
            "Mix in mashed bananas",
            "In separate bowl, combine flour, baking soda, salt, and cinnamon",
            "Fold dry ingredients into wet ingredients",
            "Pour into greased loaf pan",
            "Bake 60 minutes until toothpick comes out clean"
        ],
        time: "75 minutes",
        difficulty: "Easy",
        servings: 8,
        category: "Baking",
        image: "🍌"
    }
];

// Extract all unique ingredients for search functionality
const ALL_INGREDIENTS = [...new Set(RECIPES_DATABASE.flatMap(recipe => recipe.ingredients))].sort();
