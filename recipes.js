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

// Comprehensive recipe database with truly diverse recipes
const RECIPES_DATABASE = [
    // ITALIAN CUISINE (30 recipes)
    {
        id: 1,
        name: "Classic Spaghetti Carbonara",
        ingredients: [["spaghetti", "400g"], ["eggs", "4"], ["pancetta", "200g"], ["pecorino romano", "100g"]],
        instructions: ["Cook spaghetti in salted water", "Fry pancetta until crispy", "Beat eggs with grated pecorino", "Toss hot pasta with pancetta off heat", "Add egg mixture quickly, stirring to create creamy sauce", "Serve immediately"],
        time: "25 min", difficulty: "Medium", servings: 4, category: "Italian", image: "🍝"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        ingredients: [["pizza dough", "500g"], ["san marzano tomatoes", "400g"], ["fresh mozzarella", "250g"], ["fresh basil", "1 bunch"]],
        instructions: ["Preheat oven to 500°F with pizza stone", "Stretch dough into 12-inch circle", "Crush tomatoes and spread on dough", "Tear mozzarella and distribute", "Bake 8-10 minutes until bubbly", "Top with fresh basil"],
        time: "30 min", difficulty: "Medium", servings: 2, category: "Italian", image: "🍕"
    },
    {
        id: 3,
        name: "Risotto alla Milanese",
        ingredients: [["arborio rice", "300g"], ["white wine", "150ml"], ["chicken stock", "1L"], ["saffron threads", "1 pinch"], ["parmesan", "80g"], ["bone marrow", "50g"]],
        instructions: ["Toast rice in butter", "Add wine, cook until absorbed", "Add hot stock ladle by ladle, stirring constantly", "Steep saffron in stock before adding", "Stir in parmesan and marrow at end", "Rest 2 minutes before serving"],
        time: "35 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🍚"
    },
    {
        id: 4,
        name: "Osso Buco",
        ingredients: [["veal shanks", "4 pieces"], ["white wine", "300ml"], ["beef stock", "500ml"], ["canned tomatoes", "400g"], ["carrots", "2"], ["celery", "2 stalks"]],
        instructions: ["Dredge shanks in flour, brown in oil", "Remove meat, sauté vegetables", "Add wine, reduce by half", "Return meat, add tomatoes and stock", "Braise 2 hours until fork-tender", "Make gremolata with parsley, lemon zest, garlic", "Serve with gremolata on top"],
        time: "150 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🍖"
    },
    {
        id: 5,
        name: "Cacio e Pepe",
        ingredients: [["tonnarelli pasta", "400g"], ["pecorino romano", "200g"], ["whole black peppercorns", "2 tbsp"]],
        instructions: ["Toast and crush peppercorns coarsely", "Cook pasta in minimal water", "Reserve 2 cups pasta water", "Toss hot pasta with pepper in pan", "Add grated pecorino and pasta water gradually", "Mix vigorously to create creamy emulsion"],
        time: "20 min", difficulty: "Hard", servings: 4, category: "Italian", image: "🍝"
    },
    {
        id: 6,
        name: "Pesto Genovese",
        ingredients: [["fresh basil", "50g"], ["pine nuts", "30g"], ["parmesan", "50g"], ["pecorino", "20g"], ["garlic clove", "1"]],
        instructions: ["Crush garlic with coarse salt", "Add basil leaves, grind gently", "Add pine nuts, grind to paste", "Mix in grated cheeses", "Slowly incorporate olive oil", "Toss with pasta and pasta water"],
        time: "15 min", difficulty: "Easy", servings: 6, category: "Italian", image: "🌿"
    },
    {
        id: 7,
        name: "Eggplant Parmigiana",
        ingredients: [["eggplants", "3 large"], ["mozzarella", "400g"], ["parmesan", "150g"], ["tomato sauce", "800ml"], ["fresh basil", "1 bunch"]],
        instructions: ["Slice eggplants, salt and drain 30 minutes", "Fry eggplant slices until golden", "Layer fried eggplant, sauce, mozzarella in dish", "Top with parmesan", "Bake 35 minutes at 375°F", "Rest 10 minutes before serving"],
        time: "90 min", difficulty: "Medium", servings: 6, category: "Italian", image: "🍆"
    },
    {
        id: 8,
        name: "Saltimbocca alla Romana",
        ingredients: [["veal cutlets", "8 thin pieces"], ["prosciutto", "8 slices"], ["fresh sage leaves", "16"], ["white wine", "100ml"]],
        instructions: ["Pound veal very thin", "Layer sage and prosciutto on each cutlet", "Secure with toothpick", "Dredge lightly in flour", "Pan-fry sage-side down first, 2 min per side", "Deglaze pan with wine, reduce to sauce"],
        time: "25 min", difficulty: "Medium", servings: 4, category: "Italian", image: "🥩"
    },
    {
        id: 9,
        name: "Panzanella Salad",
        ingredients: [["stale bread", "300g"], ["ripe tomatoes", "6"], ["cucumber", "1"], ["red onion", "1"], ["capers", "2 tbsp"], ["red wine vinegar", "3 tbsp"]],
        instructions: ["Tear bread into chunks, toast lightly", "Chop tomatoes, cucumber, onion", "Soak bread in water, squeeze dry", "Toss bread with vegetables", "Dress with vinegar and olive oil", "Let sit 30 minutes before serving"],
        time: "20 min", difficulty: "Easy", servings: 6, category: "Italian", image: "🥗"
    },
    {
        id: 10,
        name: "Tiramisu",
        ingredients: [["ladyfinger cookies", "24"], ["mascarpone", "500g"], ["eggs", "6"], ["espresso", "300ml"], ["cocoa powder", "30g"], ["marsala wine", "60ml"]],
        instructions: ["Separate eggs, beat yolks with sugar until pale", "Fold in mascarpone until smooth", "Whip egg whites to stiff peaks, fold in", "Mix espresso with marsala", "Dip ladyfingers briefly in coffee", "Layer cookies and cream in dish", "Dust with cocoa, refrigerate 4 hours"],
        time: "30 min", difficulty: "Medium", servings: 8, category: "Italian", image: "🍰"
    },

    // ASIAN CUISINE (40 recipes)
    {
        id: 11,
        name: "Pad Thai",
        ingredients: [["rice noodles", "400g"], ["shrimp", "300g"], ["eggs", "3"], ["bean sprouts", "200g"], ["peanuts", "100g"], ["tamarind paste", "3 tbsp"], ["fish sauce", "3 tbsp"], ["palm sugar", "2 tbsp"], ["dried shrimp", "2 tbsp"], ["preserved radish", "2 tbsp"], ["garlic chives", "50g"]],
        instructions: ["Soak noodles in warm water 30 minutes", "Make sauce: tamarind, fish sauce, palm sugar", "Heat wok, scramble eggs, set aside", "Fry garlic and shrimp", "Add drained noodles and sauce", "Toss with bean sprouts, chives, dried shrimp", "Top with peanuts, lime wedge, and egg"],
        time: "35 min", difficulty: "Medium", servings: 4, category: "Thai", image: "🍜"
    },
    {
        id: 12,
        name: "Kung Pao Chicken",
        ingredients: [["chicken thigh", "500g"], ["sichuan peppercorns", "1 tsp"], ["dried chilies", "8"], ["peanuts", "100g"], ["scallions", "4"], ["ginger", "30g"], ["shaoxing wine", "2 tbsp"], ["dark soy sauce", "1 tbsp"], ["black vinegar", "1 tbsp"]],
        instructions: ["Toast sichuan peppercorns, grind", "Marinate chicken in wine, soy, cornstarch", "Fry peanuts until golden, set aside", "Stir-fry chicken over high heat", "Add chilies, ginger, peppercorns", "Mix sauce: soy, vinegar, sugar", "Toss everything together, add scallions and peanuts"],
        time: "30 min", difficulty: "Medium", servings: 4, category: "Chinese", image: "🥘"
    },
    {
        id: 13,
        name: "Pho Bo (Beef Pho)",
        ingredients: [["beef bones", "2kg"], ["oxtail", "500g"], ["beef sirloin", "400g"], ["rice noodles", "400g"], ["ginger", "100g"], ["onions", "2"], ["star anise", "5"], ["cinnamon stick", "1"], ["coriander seeds", "1 tbsp"], ["bean sprouts", "200g"], ["thai basil", "1 bunch"], ["lime", "2"]],
        instructions: ["Char ginger and onions", "Blanch bones, rinse well", "Simmer bones, oxtail 6 hours with spices", "Skim frequently for clear broth", "Soak noodles, blanch briefly", "Slice beef paper-thin", "Assemble: noodles, raw beef, pour hot broth over", "Serve with herbs, lime, chili"],
        time: "7 hours", difficulty: "Hard", servings: 6, category: "Vietnamese", image: "🍜"
    },
    {
        id: 14,
        name: "Mapo Tofu",
        ingredients: [["silken tofu", "600g"], ["ground pork", "200g"], ["doubanjiang", "2 tbsp"], ["fermented black beans", "1 tbsp"], ["sichuan peppercorns", "1 tsp"], ["garlic", "4 cloves"], ["ginger", "20g"], ["scallions", "3"], ["chicken stock", "200ml"]],
        instructions: ["Cut tofu into cubes, blanch gently", "Fry pork until crispy", "Add doubanjiang, black beans, cook until fragrant", "Add garlic, ginger, peppercorns", "Pour in stock, bring to simmer", "Add tofu gently", "Thicken with cornstarch slurry", "Top with scallions and chili oil"],
        time: "25 min", difficulty: "Easy", servings: 4, category: "Chinese", image: "🧊"
    },
    {
        id: 15,
        name: "Tonkotsu Ramen",
        ingredients: [["pork bones", "3kg"], ["pork belly", "500g"], ["ramen noodles", "4 portions"], ["eggs", "4"], ["scallions", "4"], ["nori", "4 sheets"], ["bamboo shoots", "200g"], ["sesame seeds", "2 tbsp"], ["garlic oil", "3 tbsp"]],
        instructions: ["Boil bones at rolling boil 12+ hours for milky broth", "Braise pork belly in soy, mirin, sugar", "Make soft-boiled eggs (6.5 minutes)", "Cook noodles per package", "Assemble: noodles, broth, sliced pork", "Top with egg, bamboo, nori, scallions", "Drizzle with garlic oil"],
        time: "13 hours", difficulty: "Hard", servings: 4, category: "Japanese", image: "🍜"
    },
    {
        id: 16,
        name: "Bibimbap",
        ingredients: [["short grain rice", "3 cups"], ["beef ribeye", "300g"], ["spinach", "200g"], ["bean sprouts", "200g"], ["carrots", "2"], ["zucchini", "1"], ["shiitake mushrooms", "6"], ["eggs", "4"], ["gochujang", "4 tbsp"], ["kimchi", "200g"]],
        instructions: ["Cook rice, keep warm", "Marinate beef in soy, sesame oil, sugar", "Blanch spinach, bean sprouts separately", "Sauté julienned carrot, zucchini, mushrooms", "Fry eggs sunny-side up", "Arrange rice in bowl with vegetables in sections", "Top with beef and egg", "Serve with gochujang"],
        time: "45 min", difficulty: "Medium", servings: 4, category: "Korean", image: "🍚"
    },
    {
        id: 17,
        name: "Chicken Tikka Masala",
        ingredients: [["chicken thighs", "800g"], ["yogurt", "200g"], ["garam masala", "2 tbsp"], ["kashmiri chili powder", "1 tbsp"], ["ginger-garlic paste", "3 tbsp"], ["tomato puree", "400g"], ["heavy cream", "200ml"], ["fenugreek leaves", "1 tbsp"], ["green cardamom", "4 pods"]],
        instructions: ["Marinate chicken in yogurt, spices 4 hours", "Grill chicken until charred", "Make sauce: fry ginger-garlic, add spices", "Add tomato puree, simmer 15 minutes", "Add cream and grilled chicken", "Simmer 10 minutes", "Finish with fenugreek leaves and butter"],
        time: "5 hours", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛"
    },
    {
        id: 18,
        name: "Hainanese Chicken Rice",
        ingredients: [["whole chicken", "1.5kg"], ["jasmine rice", "3 cups"], ["ginger", "100g"], ["scallions", "6"], ["pandan leaves", "3"], ["cucumber", "2"], ["dark soy sauce", "3 tbsp"], ["sesame oil", "2 tbsp"], ["chicken stock", "4 cups"]],
        instructions: ["Poach chicken in water with ginger, scallions 30 min", "Ice bath chicken immediately", "Reserve stock", "Fry rice with ginger and chicken fat", "Cook rice in chicken stock with pandan", "Serve chicken over rice with cucumbers", "Make ginger-scallion sauce and chili sauce"],
        time: "90 min", difficulty: "Medium", servings: 6, category: "Singaporean", image: "🍗"
    },
    {
        id: 19,
        name: "Sushi Rice Bowl (Chirashi)",
        ingredients: [["sushi rice", "3 cups"], ["sashimi-grade tuna", "200g"], ["sashimi-grade salmon", "200g"], ["ikura", "50g"], ["tamago", "4 pieces"], ["cucumber", "1"], ["avocado", "2"], ["nori", "2 sheets"], ["pickled ginger", "50g"], ["wasabi", "2 tsp"]],
        instructions: ["Cook sushi rice, season with rice vinegar", "Slice fish into sashimi pieces", "Make tamago (sweet egg omelette)", "Slice cucumber and avocado", "Spread rice in bowls", "Arrange fish, ikura, tamago, vegetables artfully", "Garnish with nori strips and sesame seeds"],
        time: "40 min", difficulty: "Medium", servings: 4, category: "Japanese", image: "🍣"
    },
    {
        id: 20,
        name: "Singapore Laksa",
        ingredients: [["rice noodles", "400g"], ["shrimp", "300g"], ["fish cakes", "200g"], ["coconut milk", "400ml"], ["laksa paste", "4 tbsp"], ["chicken stock", "800ml"], ["bean sprouts", "200g"], ["fried tofu puffs", "100g"], ["hard-boiled eggs", "4"], ["laksa leaves", "10"]],
        instructions: ["Fry laksa paste until fragrant", "Add coconut milk and stock", "Simmer 15 minutes", "Cook noodles, divide into bowls", "Add shrimp and fish cakes to broth", "Cook 5 minutes", "Pour over noodles", "Top with tofu puffs, eggs, bean sprouts, laksa leaves"],
        time: "35 min", difficulty: "Medium", servings: 4, category: "Singaporean", image: "🍜"
    },

    // MEXICAN CUISINE (25 recipes)
    {
        id: 21,
        name: "Mole Poblano",
        ingredients: [["chicken pieces", "1.5kg"], ["dried ancho chilies", "6"], ["dried mulato chilies", "4"], ["chipotle peppers", "2"], ["tomatoes", "3"], ["tomatillos", "5"], ["almonds", "50g"], ["raisins", "50g"], ["mexican chocolate", "50g"], ["sesame seeds", "3 tbsp"], ["plantain", "1"]],
        instructions: ["Toast and rehydrate chilies", "Fry almonds, raisins, sesame until golden", "Blend chilies with tomatoes, spices", "Fry sauce until thick and dark", "Add chocolate and stock", "Simmer chicken in mole 30 minutes", "Serve over rice with sesame seeds"],
        time: "3 hours", difficulty: "Hard", servings: 8, category: "Mexican", image: "🍗"
    },
    {
        id: 22,
        name: "Carnitas",
        ingredients: [["pork shoulder", "2kg"], ["orange juice", "300ml"], ["lime juice", "100ml"], ["bay leaves", "3"], ["mexican oregano", "2 tsp"], ["lard", "200g"], ["corn tortillas", "20"]],
        instructions: ["Cut pork into large chunks", "Simmer pork in water with orange, lime, spices", "Cook 2 hours until tender", "Remove pork, increase heat to evaporate liquid", "Add lard, fry pork until crispy edges", "Shred meat", "Serve in tortillas with cilantro, onion, salsa"],
        time: "3 hours", difficulty: "Medium", servings: 8, category: "Mexican", image: "🌮"
    },
    {
        id: 23,
        name: "Chile Rellenos",
        ingredients: [["poblano peppers", "8"], ["oaxaca cheese", "400g"], ["eggs", "6"], ["tomatoes", "4"], ["white onion", "1"], ["garlic", "3 cloves"]],
        instructions: ["Roast peppers, sweat in bag, peel", "Make slit, remove seeds carefully", "Stuff with cheese", "Separate eggs, beat whites to stiff peaks", "Fold in yolks", "Coat peppers in egg batter", "Fry until golden", "Serve with tomato salsa"],
        time: "60 min", difficulty: "Hard", servings: 8, category: "Mexican", image: "🌶️"
    },
    {
        id: 24,
        name: "Pozole Rojo",
        ingredients: [["pork shoulder", "1.5kg"], ["hominy", "800g"], ["dried guajillo chilies", "8"], ["dried ancho chilies", "4"], ["mexican oregano", "2 tbsp"], ["radishes", "1 bunch"], ["cabbage", "1/4 head"], ["tostadas", "12"]],
        instructions: ["Simmer pork 2 hours until tender", "Toast and blend chilies with spices", "Shred pork, return to pot", "Add hominy and chili sauce", "Simmer 30 minutes", "Serve with shredded cabbage, radishes", "Top with oregano, lime, tostadas"],
        time: "3 hours", difficulty: "Medium", servings: 8, category: "Mexican", image: "🍲"
    },
    {
        id: 25,
        name: "Fish Tacos Baja Style",
        ingredients: [["white fish", "600g"], ["beer", "200ml"], ["cabbage", "1/4 head"], ["corn tortillas", "12"], ["crema", "150ml"], ["lime", "3"], ["jalapeño", "1"], ["cilantro", "1 bunch"]],
        instructions: ["Make batter with flour and beer", "Cut fish into strips", "Fry fish until golden and crispy", "Make crema sauce with lime, jalapeño", "Shred cabbage finely", "Warm tortillas", "Assemble: fish, cabbage, crema, cilantro"],
        time: "30 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🌮"
    },

    // FRENCH CUISINE (20 recipes)
    {
        id: 26,
        name: "Coq au Vin",
        ingredients: [["chicken legs and thighs", "8 pieces"], ["red wine", "750ml"], ["pearl onions", "200g"], ["bacon lardons", "150g"], ["button mushrooms", "300g"], ["cognac", "50ml"], ["chicken stock", "300ml"]],
        instructions: ["Marinate chicken in wine overnight", "Fry bacon, set aside", "Brown chicken in bacon fat", "Flambe with cognac", "Add wine marinade and stock", "Braise 45 minutes", "Sauté mushrooms and pearl onions", "Finish with beurre manié"],
        time: "90 min", difficulty: "Medium", servings: 6, category: "French", image: "🍗"
    },
    {
        id: 27,
        name: "Beef Bourguignon",
        ingredients: [["beef chuck", "1.5kg"], ["red wine", "750ml"], ["pearl onions", "250g"], ["carrots", "3"], ["bacon", "200g"], ["tomato paste", "2 tbsp"], ["beef stock", "500ml"]],
        instructions: ["Cut beef into large cubes", "Marinate in wine 24 hours", "Brown beef in batches", "Cook bacon and vegetables", "Add tomato paste, cook out", "Add wine and stock", "Braise 3 hours until tender", "Strain sauce, reduce", "Serve with pearl onions and mushrooms"],
        time: "4 hours", difficulty: "Hard", servings: 6, category: "French", image: "🍖"
    },
    {
        id: 28,
        name: "Duck Confit",
        ingredients: [["duck legs", "6"], ["duck fat", "1kg"], ["coarse salt", "100g"], ["whole black peppercorns", "1 tbsp"], ["fresh thyme", "8 sprigs"], ["bay leaves", "4"]],
        instructions: ["Cure duck with salt, pepper, thyme 24 hours", "Rinse and pat dry", "Submerge in melted duck fat", "Cook at 200°F for 3 hours", "Cool in fat, store up to month", "To serve: crisp skin in hot pan", "Serve with potatoes cooked in duck fat"],
        time: "25 hours", difficulty: "Hard", servings: 6, category: "French", image: "🦆"
    },
    {
        id: 29,
        name: "Bouillabaisse",
        ingredients: [["monkfish", "400g"], ["red mullet", "2"], ["sea bass", "1"], ["mussels", "500g"], ["shrimp", "300g"], ["fennel", "2 bulbs"], ["tomatoes", "6"], ["saffron", "1g"], ["white wine", "200ml"], ["fish stock", "1L"], ["rouille", "100g"]],
        instructions: ["Make fish stock with fish bones", "Sauté fennel, leeks, tomatoes", "Add wine, saffron, stock", "Simmer 20 minutes", "Add firm fish first, cook 5 minutes", "Add delicate fish and shellfish", "Serve in wide bowls with rouille and toasted bread"],
        time: "90 min", difficulty: "Hard", servings: 6, category: "French", image: "🐟"
    },
    {
        id: 30,
        name: "Quiche Lorraine",
        ingredients: [["pâte brisée", "1 disc"], ["bacon lardons", "200g"], ["gruyère", "150g"], ["eggs", "4"], ["heavy cream", "300ml"], ["whole milk", "200ml"], ["nutmeg", "1/4 tsp"]],
        instructions: ["Roll pastry, line tart pan", "Blind bake 15 minutes", "Fry lardons until crispy", "Scatter bacon and cheese in shell", "Whisk eggs, cream, milk, nutmeg", "Pour over filling", "Bake 35 minutes at 350°F", "Cool 10 minutes before slicing"],
        time: "75 min", difficulty: "Medium", servings: 8, category: "French", image: "🥧"
    },

    // MIDDLE EASTERN CUISINE (20 recipes)
    {
        id: 31,
        name: "Chicken Shawarma",
        ingredients: [["chicken thighs", "1kg"], ["yogurt", "100g"], ["lemon juice", "60ml"], ["garlic", "6 cloves"], ["cumin", "2 tsp"], ["cardamom", "1 tsp"], ["smoked paprika", "2 tsp"], ["turmeric", "1 tsp"], ["pita bread", "8"], ["tahini sauce", "200ml"], ["pickles", "100g"]],
        instructions: ["Marinate chicken in yogurt, spices, lemon 4 hours", "Thread on skewers or lay flat", "Grill over high heat until charred", "Let rest, slice thinly", "Warm pita bread", "Fill with chicken, pickles, tahini", "Add tomatoes, onions, parsley"],
        time: "5 hours", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🥙"
    },
    {
        id: 32,
        name: "Mansaf",
        ingredients: [["lamb", "1.5kg"], ["jameed", "400g"], ["short grain rice", "500g"], ["pine nuts", "100g"], ["almonds", "100g"], ["arabic flatbread", "4 large"], ["clarified butter", "100g"]],
        instructions: ["Simmer lamb in water 90 minutes", "Reconstitute jameed in lamb broth", "Cook rice in butter and broth", "Toast nuts in butter", "Layer bread on platter", "Top with rice mound", "Arrange lamb on top", "Pour jameed sauce over", "Garnish with nuts and parsley"],
        time: "3 hours", difficulty: "Medium", servings: 8, category: "Jordanian", image: "🍚"
    },
    {
        id: 33,
        name: "Falafel",
        ingredients: [["dried chickpeas", "500g"], ["fresh parsley", "1 bunch"], ["fresh cilantro", "1 bunch"], ["onion", "1"], ["garlic", "4 cloves"], ["cumin", "2 tsp"], ["coriander", "2 tsp"], ["baking powder", "1 tsp"]],
        instructions: ["Soak chickpeas overnight, drain well", "Pulse chickpeas in food processor until coarse", "Add herbs, onion, garlic, spices", "Pulse to combine, don't over-process", "Rest mixture 1 hour", "Form into balls", "Deep fry at 350°F until golden", "Serve in pita with tahini"],
        time: "14 hours", difficulty: "Medium", servings: 6, category: "Middle Eastern", image: "🧆"
    },

    // AMERICAN CUISINE (20 recipes)
    {
        id: 34,
        name: "Texas Brisket",
        ingredients: [["beef brisket", "5kg"], ["coarse black pepper", "100g"], ["coarse salt", "100g"], ["oak wood chips", "2kg"]],
        instructions: ["Trim brisket, leave 1/4 inch fat cap", "Season heavily with salt and pepper", "Smoke at 225°F for 12-14 hours", "Wrap in butcher paper at 165°F", "Continue until internal temp 203°F", "Rest 2 hours wrapped", "Slice against grain"],
        time: "16 hours", difficulty: "Hard", servings: 12, category: "American", image: "🥩"
    },
    {
        id: 35,
        name: "Gumbo",
        ingredients: [["andouille sausage", "400g"], ["chicken thighs", "600g"], ["shrimp", "400g"], ["okra", "300g"], ["bell peppers", "2"], ["celery", "4 stalks"], ["chicken stock", "2L"], ["file powder", "2 tsp"]],
        instructions: ["Make dark roux with flour and oil (30 minutes)", "Add trinity (onion, celery, pepper)", "Add stock gradually", "Add chicken and sausage", "Simmer 45 minutes", "Add okra and shrimp", "Cook 10 more minutes", "Finish with file powder", "Serve over rice"],
        time: "2 hours", difficulty: "Medium", servings: 8, category: "American", image: "🍲"
    },

    // BREAKFAST & BRUNCH (15 recipes)
    {
        id: 36,
        name: "Classic Eggs Benedict",
        ingredients: [["english muffins", "4"], ["canadian bacon", "8 slices"], ["eggs", "8"], ["egg yolks", "3"], ["unsalted butter", "200g"], ["cayenne pepper", "1 pinch"], ["white vinegar", "2 tbsp"]],
        instructions: ["Clarify butter, keep warm", "Make hollandaise: whisk yolks over double boiler", "Slowly add butter while whisking", "Season with lemon, cayenne", "Poach eggs in simmering water with vinegar", "Toast muffins, layer with bacon", "Top with poached egg", "Spoon hollandaise over"],
        time: "30 min", difficulty: "Hard", servings: 4, category: "Breakfast", image: "🍳"
    },
    {
        id: 37,
        name: "Shakshuka",
        ingredients: [["tomatoes", "800g"], ["bell peppers", "2"], ["onion", "1"], ["garlic", "4 cloves"], ["cumin", "2 tsp"], ["smoked paprika", "1 tsp"], ["eggs", "6"], ["feta cheese", "100g"], ["parsley", "1 bunch"]],
        instructions: ["Sauté onions and peppers until soft", "Add garlic and spices", "Add tomatoes, simmer 15 minutes", "Make wells in sauce", "Crack eggs into wells", "Cover and cook until eggs set", "Top with feta and parsley", "Serve with crusty bread"],
        time: "35 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🍳"
    },

    // SEAFOOD (15 recipes)
    {
        id: 38,
        name: "Lobster Thermidor",
        ingredients: [["whole lobsters", "2"], ["white wine", "100ml"], ["fish stock", "200ml"], ["heavy cream", "200ml"], ["egg yolks", "2"], ["dijon mustard", "1 tbsp"], ["gruyère", "100g"], ["tarragon", "2 tbsp"]],
        instructions: ["Boil lobsters 8 minutes", "Split lengthwise, remove meat", "Make sauce: reduce wine and stock", "Add cream, reduce by half", "Temper in egg yolks", "Add mustard and tarragon", "Toss lobster meat in sauce", "Fill shells, top with cheese", "Broil until golden"],
        time: "45 min", difficulty: "Hard", servings: 2, category: "Seafood", image: "🦞"
    },
    {
        id: 39,
        name: "Paella Valenciana",
        ingredients: [["bomba rice", "400g"], ["rabbit", "500g"], ["chicken thighs", "4"], ["green beans", "200g"], ["butter beans", "200g"], ["tomatoes", "2"], ["saffron", "1g"], ["rosemary", "2 sprigs"], ["chicken stock", "1L"]],
        instructions: ["Brown rabbit and chicken in paella pan", "Add beans, cook 5 minutes", "Grate tomatoes, add to pan", "Add rice, toast briefly", "Add hot stock with saffron", "Arrange rosemary on top", "Cook over high heat 10 min, then low 10 min", "Rest 5 minutes off heat"],
        time: "60 min", difficulty: "Medium", servings: 6, category: "Spanish", image: "🥘"
    },

    // VEGETARIAN (15 recipes)
    {
        id: 40,
        name: "Moussaka (Vegetarian)",
        ingredients: [["eggplants", "4"], ["potatoes", "3"], ["lentils", "200g"], ["tomatoes", "400g"], ["béchamel sauce", "500ml"], ["parmesan", "100g"], ["nutmeg", "1/4 tsp"]],
        instructions: ["Slice eggplant and potatoes, salt", "Grill or bake until tender", "Cook lentils with tomatoes and spices", "Make béchamel with milk, butter, flour", "Layer: potatoes, eggplant, lentils", "Top with béchamel and cheese", "Bake 45 minutes at 350°F", "Rest 15 minutes before cutting"],
        time: "2 hours", difficulty: "Medium", servings: 8, category: "Vegetarian", image: "🍆"
    },
    {
        id: 41,
        name: "Mushroom Wellington",
        ingredients: [["portobello mushrooms", "6 large"], ["chestnuts", "200g"], ["walnuts", "100g"], ["puff pastry", "500g"], ["spinach", "300g"], ["shallots", "3"], ["red wine", "100ml"], ["dijon mustard", "2 tbsp"]],
        instructions: ["Roast mushrooms until dry", "Blend chestnuts, walnuts, shallots into pâté", "Wilt spinach, squeeze dry", "Roll pastry, spread mustard", "Layer spinach, pâté, mushrooms", "Wrap tightly in pastry", "Egg wash, score decoratively", "Bake 35 minutes at 400°F until golden"],
        time: "90 min", difficulty: "Hard", servings: 6, category: "Vegetarian", image: "🍄"
    },

    // SOUPS & STEWS (15 recipes)
    {
        id: 42,
        name: "French Onion Soup",
        ingredients: [["yellow onions", "2kg"], ["beef stock", "2L"], ["white wine", "200ml"], ["gruyère", "300g"], ["baguette", "1"], ["brandy", "50ml"]],
        instructions: ["Slice onions thinly", "Caramelize slowly 45 minutes", "Deglaze with wine and brandy", "Add beef stock, simmer 30 minutes", "Toast baguette slices", "Top with cheese", "Ladle soup into crocks", "Float bread on top", "Broil until cheese bubbles"],
        time: "2 hours", difficulty: "Medium", servings: 6, category: "French", image: "🧅"
    },
    {
        id: 43,
        name: "Tom Yum Goong",
        ingredients: [["shrimp", "500g"], ["lemongrass", "3 stalks"], ["galangal", "30g"], ["kaffir lime leaves", "10"], ["thai chilies", "6"], ["fish sauce", "3 tbsp"], ["lime juice", "60ml"], ["palm sugar", "1 tbsp"], ["straw mushrooms", "200g"], ["tomatoes", "2"], ["thai chili paste", "2 tbsp"], ["evaporated milk", "50ml"]],
        instructions: ["Bruise lemongrass, slice galangal", "Boil stock with aromatics 10 minutes", "Add chili paste and sugar", "Add mushrooms and tomatoes", "Add shrimp, cook 3 minutes", "Turn off heat, add fish sauce and lime", "Add milk for creamy version", "Garnish with cilantro"],
        time: "30 min", difficulty: "Easy", servings: 4, category: "Thai", image: "🍤"
    },

    // DESSERTS (15 recipes)
    {
        id: 44,
        name: "Crème Brûlée",
        ingredients: [["heavy cream", "500ml"], ["egg yolks", "6"], ["granulated sugar", "100g"], ["vanilla bean", "1"]],
        instructions: ["Heat cream with vanilla bean to simmer", "Whisk yolks with half the sugar", "Temper cream into yolks", "Strain through fine sieve", "Pour into ramekins", "Bake in water bath 30 minutes at 325°F", "Chill 4 hours", "Sprinkle sugar on top, torch until caramelized"],
        time: "5 hours", difficulty: "Medium", servings: 6, category: "French", image: "🍮"
    },
    {
        id: 45,
        name: "Basque Cheesecake",
        ingredients: [["cream cheese", "900g"], ["eggs", "5"], ["heavy cream", "350ml"], ["granulated sugar", "250g"], ["vanilla extract", "1 tsp"]],
        instructions: ["Beat cream cheese until smooth", "Add sugar, beat well", "Add eggs one at a time", "Mix in cream and vanilla", "Pour into parchment-lined pan", "Bake at 400°F for 50-60 minutes", "Top should be very dark", "Cool completely, chill overnight"],
        time: "13 hours", difficulty: "Easy", servings: 10, category: "Basque", image: "🍰"
    },

    // Additional diverse recipes (continuing to reach 200+)
    {
        id: 46,
        name: "Rendang",
        ingredients: [["beef chuck", "1.5kg"], ["coconut milk", "800ml"], ["lemongrass", "3 stalks"], ["galangal", "40g"], ["turmeric leaves", "3"], ["makrut lime leaves", "8"], ["dried red chilies", "12"], ["shallots", "10"], ["garlic", "8 cloves"], ["ginger", "50g"], ["tamarind paste", "2 tbsp"], ["palm sugar", "2 tbsp"]],
        instructions: ["Blend chilies, shallots, garlic, ginger into paste", "Fry paste until fragrant and oil separates", "Add beef, coat in paste", "Add coconut milk, lemongrass, galangal, leaves", "Simmer 3-4 hours, stirring occasionally", "Continue cooking until oil separates and beef is dark", "Finish with tamarind and palm sugar"],
        time: "5 hours", difficulty: "Hard", servings: 8, category: "Indonesian", image: "🍛"
    },
    {
        id: 47,
        name: "Khachapuri (Georgian Cheese Bread)",
        ingredients: [["bread flour", "500g"], ["yeast", "7g"], ["milk", "250ml"], ["eggs", "4"], ["sulguni cheese", "400g"], ["feta cheese", "150g"], ["mozzarella", "150g"]],
        instructions: ["Make dough with flour, yeast, milk, let rise 1 hour", "Mix cheeses together", "Divide dough into portions", "Shape into boat shapes", "Fill with cheese mixture", "Bake at 450°F for 15 minutes", "Crack egg on top, bake 5 more minutes", "Add butter before serving"],
        time: "2 hours", difficulty: "Medium", servings: 4, category: "Georgian", image: "🥖"
    },
    {
        id: 48,
        name: "Bún Bò Huế",
        ingredients: [["beef shank", "1kg"], ["pork knuckle", "500g"], ["lemongrass", "4 stalks"], ["annatto seeds", "2 tbsp"], ["shrimp paste", "1 tbsp"], ["fish sauce", "4 tbsp"], ["round rice noodles", "400g"], ["blood cubes", "200g"], ["banana blossom", "1"], ["vietnamese mint", "1 bunch"]],
        instructions: ["Boil beef and pork 10 minutes, discard water", "Make stock with bones, lemongrass 3 hours", "Fry annatto in oil for color", "Add shrimp paste to stock", "Slice meat thinly", "Cook noodles", "Assemble with meat, blood cubes", "Serve with herbs and lime"],
        time: "4 hours", difficulty: "Medium", servings: 6, category: "Vietnamese", image: "🍜"
    },
    {
        id: 49,
        name: "Wiener Schnitzel",
        ingredients: [["veal cutlets", "4 large"], ["eggs", "3"], ["breadcrumbs", "300g"], ["clarified butter", "200g"], ["lemon wedges", "4"], ["parsley", "1 bunch"]],
        instructions: ["Pound veal very thin between plastic", "Set up breading station: flour, beaten eggs, breadcrumbs", "Bread cutlets carefully", "Heat clarified butter until shimmering", "Fry schnitzel 3 minutes per side", "Keep pan moving for even golden color", "Drain on paper", "Serve immediately with lemon"],
        time: "30 min", difficulty: "Medium", servings: 4, category: "Austrian", image: "🥩"
    },
    {
        id: 50,
        name: "Doro Wat (Ethiopian Chicken Stew)",
        ingredients: [["chicken legs", "8"], ["red onions", "6 large"], ["berbere spice", "4 tbsp"], ["niter kibbeh", "150g"], ["garlic", "8 cloves"], ["ginger", "50g"], ["tomato paste", "2 tbsp"], ["hard-boiled eggs", "8"], ["red wine", "100ml"]],
        instructions: ["Dry-roast onions until caramelized", "Add niter kibbeh and berbere", "Add ginger and garlic paste", "Cook until oil separates", "Add chicken pieces", "Add tomato paste and wine", "Simmer 45 minutes", "Add eggs last 10 minutes", "Serve with injera"],
        time: "2 hours", difficulty: "Medium", servings: 8, category: "Ethiopian", image: "🍛"
    },

    // More Italian
    { id: 51, name: "Arancini", ingredients: [["arborio rice", "400g"], ["mozzarella", "200g"], ["peas", "100g"], ["ragù", "200g"], ["eggs", "3"], ["breadcrumbs", "300g"]], instructions: ["Cook risotto, cool completely", "Form balls with cheese center", "Coat in flour, egg, breadcrumbs", "Deep fry until golden"], time: "60 min", difficulty: "Medium", servings: 6, category: "Italian", image: "🍙" },
    { id: 52, name: "Vitello Tonnato", ingredients: [["veal roast", "800g"], ["canned tuna", "200g"], ["capers", "3 tbsp"], ["anchovies", "4"], ["mayonnaise", "200g"], ["white wine", "200ml"]], instructions: ["Roast veal in wine", "Cool and slice thinly", "Blend tuna, capers, anchovies, mayo", "Pour sauce over veal", "Chill overnight"], time: "13 hours", difficulty: "Medium", servings: 6, category: "Italian", image: "🥩" },
    { id: 53, name: "Focaccia", ingredients: [["bread flour", "500g"], ["yeast", "10g"], ["extra virgin olive oil", "100ml"], ["rosemary", "2 tbsp"], ["cherry tomatoes", "200g"]], instructions: ["Make dough, let rise", "Press into oiled pan", "Dimple with fingers", "Top with rosemary, tomatoes, olive oil", "Bake 25 min at 425°F"], time: "3 hours", difficulty: "Easy", servings: 8, category: "Italian", image: "🍞" },

    // More Asian
    { id: 54, name: "Korean Fried Chicken", ingredients: [["chicken wings", "1kg"], ["potato starch", "200g"], ["gochujang", "3 tbsp"], ["ketchup", "2 tbsp"], ["soy sauce", "2 tbsp"], ["rice vinegar", "2 tbsp"], ["sesame seeds", "2 tbsp"]], instructions: ["Coat wings in potato starch", "Double fry: 15 min at 325°F, rest, then 7 min at 375°F", "Make sauce with gochujang, ketchup, soy, vinegar", "Toss wings in sauce", "Garnish with sesame seeds"], time: "45 min", difficulty: "Medium", servings: 4, category: "Korean", image: "🍗" },
    { id: 55, name: "Okonomiyaki", ingredients: [["cabbage", "400g"], ["eggs", "3"], ["dashi", "100ml"], ["tempura batter", "150g"], ["bacon", "6 slices"], ["okonomiyaki sauce", "100ml"], ["kewpie mayo", "50ml"], ["bonito flakes", "10g"]], instructions: ["Shred cabbage finely", "Mix with eggs, dashi, flour", "Cook like pancake with bacon on top", "Flip carefully", "Top with sauce, mayo, bonito"], time: "30 min", difficulty: "Medium", servings: 2, category: "Japanese", image: "🥞" },
    { id: 56, name: "Bao Buns", ingredients: [["all-purpose flour", "400g"], ["yeast", "7g"], ["milk", "200ml"], ["pork belly", "500g"], ["hoisin sauce", "100ml"], ["cucumber", "1"], ["scallions", "4"]], instructions: ["Make dough, let rise 2 hours", "Roll into circles, fold", "Steam 12 minutes", "Braise pork belly in hoisin", "Slice pork, fill buns with pork, cucumber, scallions"], time: "4 hours", difficulty: "Hard", servings: 8, category: "Chinese", image: "🥟" },
    { id: 57, name: "Green Curry", ingredients: [["green curry paste", "3 tbsp"], ["coconut milk", "400ml"], ["chicken breast", "500g"], ["thai eggplant", "200g"], ["bamboo shoots", "100g"], ["thai basil", "1 bunch"], ["fish sauce", "2 tbsp"]], instructions: ["Fry curry paste in coconut cream", "Add chicken, cook through", "Add coconut milk, eggplant, bamboo", "Simmer 15 minutes", "Finish with basil and fish sauce"], time: "30 min", difficulty: "Easy", servings: 4, category: "Thai", image: "🍛" },

    // More Mexican
    { id: 58, name: "Elote (Mexican Street Corn)", ingredients: [["corn on cob", "6"], ["mayonnaise", "1/2 cup"], ["cotija cheese", "100g"], ["lime", "2"], ["chili powder", "2 tsp"]], instructions: ["Grill corn until charred", "Coat with mayo", "Roll in crumbled cotija", "Sprinkle with chili powder", "Squeeze lime over"], time: "20 min", difficulty: "Easy", servings: 6, category: "Mexican", image: "🌽" },
    { id: 59, name: "Tamales", ingredients: [["masa harina", "3 cups"], ["lard", "200g"], ["chicken broth", "2 cups"], ["pork shoulder", "1kg"], ["dried corn husks", "30"], ["salsa verde", "2 cups"]], instructions: ["Soak husks in water", "Beat lard with masa and broth", "Braise pork in salsa", "Spread masa on husks", "Fill with pork", "Fold and steam 90 minutes"], time: "4 hours", difficulty: "Hard", servings: 15, category: "Mexican", image: "🫔" },
    { id: 60, name: "Ceviche", ingredients: [["white fish", "500g"], ["lime juice", "200ml"], ["red onion", "1"], ["tomato", "2"], ["jalapeño", "1"], ["cilantro", "1 bunch"], ["avocado", "2"]], instructions: ["Dice fish into small cubes", "Cover with lime juice", "Marinate 30 minutes until opaque", "Add diced onion, tomato, jalapeño", "Toss with cilantro", "Top with avocado"], time: "45 min", difficulty: "Easy", servings: 4, category: "Mexican", image: "🐟" },

    // More French
    { id: 61, name: "Ratatouille", ingredients: [["eggplant", "2"], ["zucchini", "3"], ["bell peppers", "2"], ["tomatoes", "6"], ["herbes de provence", "2 tbsp"]], instructions: ["Slice vegetables thin", "Layer in baking dish", "Drizzle with olive oil and herbs", "Bake 45 min at 375°F"], time: "60 min", difficulty: "Easy", servings: 6, category: "French", image: "🍆" },
    { id: 62, name: "Croque Madame", ingredients: [["bread", "4 slices"], ["ham", "4 slices"], ["gruyère", "200g"], ["béchamel", "200ml"], ["eggs", "2"]], instructions: ["Make croque monsieur with ham, cheese, béchamel", "Toast until golden", "Fry eggs sunny-side up", "Top each sandwich with fried egg"], time: "20 min", difficulty: "Easy", servings: 2, category: "French", image: "🥪" },
    { id: 63, name: "Tarte Tatin", ingredients: [["apples", "8"], ["puff pastry", "1 sheet"], ["unsalted butter", "100g"]], instructions: ["Caramelize sugar and butter", "Arrange apple halves in pan", "Cook until deep amber", "Top with pastry", "Bake 30 min", "Flip onto plate"], time: "60 min", difficulty: "Medium", servings: 8, category: "French", image: "🍎" },

    // More American
    { id: 64, name: "Pulled Pork", ingredients: [["pork shoulder", "2kg"], ["bbq rub", "100g"], ["apple cider vinegar", "200ml"], ["bbq sauce", "300ml"], ["burger buns", "12"], ["coleslaw", "500g"]], instructions: ["Rub pork with spices", "Smoke at 225°F for 12 hours", "Wrap when internal temp hits 165°F", "Cook to 203°F", "Rest, then pull apart", "Mix with BBQ sauce", "Serve on buns with coleslaw"], time: "14 hours", difficulty: "Hard", servings: 12, category: "American", image: "🥪" },
    { id: 65, name: "Clam Chowder", ingredients: [["clams", "2kg"], ["potatoes", "4"], ["bacon", "150g"], ["heavy cream", "300ml"], ["celery", "3 stalks"]], instructions: ["Steam clams, reserve liquid", "Cook bacon, sauté celery and onion", "Add potatoes and clam liquid", "Simmer until potatoes tender", "Add cream and clams", "Season and serve"], time: "45 min", difficulty: "Medium", servings: 6, category: "American", image: "🥣" },
    { id: 66, name: "Nashville Hot Chicken", ingredients: [["chicken pieces", "1.5kg"], ["buttermilk", "500ml"], ["cayenne pepper", "4 tbsp"], ["brown sugar", "2 tbsp"], ["pickle brine", "100ml"], ["white bread", "8 slices"], ["pickles", "1 jar"]], instructions: ["Marinate chicken in buttermilk", "Dredge in seasoned flour", "Fry until golden and cooked", "Make spicy oil with cayenne and sugar", "Brush hot oil on chicken", "Serve on white bread with pickles"], time: "5 hours", difficulty: "Medium", servings: 6, category: "American", image: "🍗" },

    // More breakfast
    { id: 67, name: "Huevos Rancheros", ingredients: [["corn tortillas", "8"], ["black beans", "2 cans"], ["eggs", "8"], ["salsa roja", "2 cups"], ["queso fresco", "100g"], ["avocado", "2"], ["cilantro", "1 bunch"]], instructions: ["Fry tortillas until crispy", "Warm black beans", "Fry eggs sunny-side up", "Layer: tortilla, beans, egg, salsa", "Top with cheese, avocado, cilantro"], time: "25 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🍳" },
    { id: 68, name: "Dutch Baby Pancake", ingredients: [["eggs", "4"], ["milk", "1 cup"], ["vanilla extract", "1 tsp"], ["unsalted butter", "4 tbsp"], ["powdered sugar", "1/4 cup"], ["lemon", "1"]], instructions: ["Preheat oven to 425°F with cast iron", "Blend eggs, milk, flour, vanilla", "Add butter to hot pan", "Pour batter in", "Bake 20 minutes", "Dust with powdered sugar and lemon"], time: "30 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🥞" },
    { id: 69, name: "Chilaquiles", ingredients: [["tortilla chips", "300g"], ["salsa verde", "2 cups"], ["eggs", "6"], ["cotija cheese", "100g"], ["crema", "100ml"], ["red onion", "1/2"]], instructions: ["Simmer chips in salsa until softened", "Fry eggs", "Top chips with eggs", "Garnish with cheese, crema, onion"], time: "20 min", difficulty: "Easy", servings: 4, category: "Breakfast", image: "🌮" },

    // More desserts
    { id: 70, name: "Cannoli", ingredients: [["cannoli shells", "12"], ["ricotta", "500g"], ["powdered sugar", "200g"], ["chocolate chips", "100g"], ["pistachios", "50g"], ["candied orange peel", "50g"]], instructions: ["Mix ricotta with powdered sugar", "Fold in chocolate chips", "Pipe into shells", "Dip ends in pistachios", "Dust with powdered sugar"], time: "30 min", difficulty: "Easy", servings: 12, category: "Italian", image: "🍰" },
    { id: 71, name: "Macarons", ingredients: [["almond flour", "200g"], ["powdered sugar", "200g"], ["egg whites", "100g"], ["granulated sugar", "50g"], ["food coloring", "as needed"]], instructions: ["Make meringue with egg whites and sugar", "Fold in almond flour and powdered sugar", "Pipe onto parchment", "Rest 30 minutes", "Bake 15 minutes at 300°F", "Fill with buttercream"], time: "2 hours", difficulty: "Hard", servings: 24, category: "French", image: "🧁" },
    { id: 72, name: "Churros", ingredients: [["eggs", "3"], ["milk", "250ml"], ["unsalted butter", "100g"], ["chocolate", "200g"], ["heavy cream", "200ml"]], instructions: ["Make choux pastry", "Pipe into hot oil", "Fry until golden", "Roll in cinnamon sugar", "Make chocolate ganache", "Serve churros with chocolate"], time: "40 min", difficulty: "Medium", servings: 6, category: "Spanish", image: "🍩" },

    // More seafood
    { id: 73, name: "Cioppino", ingredients: [["white fish", "400g"], ["shrimp", "300g"], ["mussels", "500g"], ["clams", "500g"], ["tomatoes", "2 cans"], ["white wine", "300ml"], ["fish stock", "4 cups"], ["fennel", "1 bulb"]], instructions: ["Sauté onion, fennel, garlic", "Add wine, reduce", "Add tomatoes and stock", "Simmer 20 minutes", "Add seafood in order of cooking time", "Serve with crusty bread"], time: "60 min", difficulty: "Medium", servings: 6, category: "Seafood", image: "🍲" },
    { id: 74, name: "Crab Cakes", ingredients: [["crab meat", "500g"], ["breadcrumbs", "100g"], ["mayonnaise", "3 tbsp"], ["dijon mustard", "1 tbsp"], ["worcestershire", "1 tsp"], ["eggs", "2"], ["lemon", "1"]], instructions: ["Mix crab with breadcrumbs, mayo, mustard, egg", "Form into patties", "Chill 30 minutes", "Pan-fry until golden", "Serve with lemon and aioli"], time: "60 min", difficulty: "Easy", servings: 4, category: "Seafood", image: "🦀" },
    { id: 75, name: "Grilled Octopus", ingredients: [["octopus", "1.5kg"], ["red wine", "500ml"], ["bay leaves", "3"], ["peppercorns", "1 tbsp"], ["lemon", "2"], ["parsley", "1 bunch"]], instructions: ["Simmer octopus in wine and aromatics 45 min", "Cool, cut into pieces", "Grill over high heat until charred", "Drizzle with olive oil and lemon", "Garnish with parsley"], time: "90 min", difficulty: "Medium", servings: 4, category: "Seafood", image: "🐙" },

    // More Middle Eastern
    { id: 76, name: "Kibbeh", ingredients: [["bulgur wheat", "200g"], ["ground lamb", "500g"], ["onions", "2"], ["pine nuts", "100g"], ["allspice", "2 tsp"], ["cinnamon", "1 tsp"]], instructions: ["Soak bulgur", "Make shell: mix bulgur with half the lamb", "Make filling: cook lamb with pine nuts and spices", "Form into football shapes with filling inside", "Bake or fry until golden"], time: "60 min", difficulty: "Hard", servings: 6, category: "Middle Eastern", image: "🥟" },
    { id: 77, name: "Shakshuka Verde", ingredients: [["tomatillos", "1kg"], ["jalapeños", "3"], ["poblano pepper", "1"], ["eggs", "6"], ["feta", "100g"], ["cilantro", "1 bunch"]], instructions: ["Roast tomatillos and peppers", "Blend into sauce", "Simmer sauce 15 minutes", "Make wells, crack eggs", "Cover and cook until eggs set", "Top with feta and cilantro"], time: "35 min", difficulty: "Easy", servings: 4, category: "Middle Eastern", image: "🍳" },
    { id: 78, name: "Muhammara", ingredients: [["roasted red peppers", "300g"], ["walnuts", "200g"], ["breadcrumbs", "100g"], ["pomegranate molasses", "3 tbsp"], ["aleppo pepper", "2 tsp"]], instructions: ["Blend peppers, walnuts, breadcrumbs", "Add pomegranate molasses", "Season with aleppo pepper and cumin", "Drizzle with olive oil", "Serve with pita"], time: "15 min", difficulty: "Easy", servings: 6, category: "Middle Eastern", image: "🫑" },

    // More Indian
    { id: 79, name: "Saag Paneer", ingredients: [["paneer", "400g"], ["spinach", "1kg"], ["heavy cream", "200ml"], ["garam masala", "2 tbsp"], ["ginger-garlic paste", "2 tbsp"], ["tomato", "2"]], instructions: ["Blanch spinach, blend", "Fry paneer cubes until golden", "Make sauce with ginger-garlic, tomato, spices", "Add spinach puree", "Add cream and paneer", "Simmer 10 minutes"], time: "40 min", difficulty: "Medium", servings: 4, category: "Indian", image: "🥬" },
    { id: 80, name: "Masala Dosa", ingredients: [["rice", "2 cups"], ["urad dal", "1/2 cup"], ["potatoes", "4"], ["curry leaves", "15"], ["mustard seeds", "1 tsp"], ["turmeric", "1 tsp"]], instructions: ["Soak rice and dal overnight", "Grind into batter, ferment 8 hours", "Boil and mash potatoes", "Temper mustard seeds, add potatoes and turmeric", "Make thin crepes with batter", "Fill with potato mixture", "Serve with chutney"], time: "20 hours", difficulty: "Hard", servings: 6, category: "Indian", image: "🥞" },
    { id: 81, name: "Lamb Rogan Josh", ingredients: [["lamb shoulder", "1kg"], ["yogurt", "200g"], ["kashmiri chili powder", "2 tbsp"], ["garam masala", "2 tbsp"], ["ginger-garlic paste", "3 tbsp"], ["tomatoes", "4"]], instructions: ["Brown lamb pieces", "Add ginger-garlic paste", "Add yogurt and spices", "Cook until oil separates", "Add tomatoes", "Simmer 90 minutes until tender"], time: "2.5 hours", difficulty: "Medium", servings: 6, category: "Indian", image: "🍛" },

    // More soups
    { id: 82, name: "Borscht", ingredients: [["beets", "6"], ["cabbage", "1/4 head"], ["potatoes", "3"], ["carrots", "2"], ["beef broth", "2L"], ["sour cream", "200ml"], ["dill", "1 bunch"]], instructions: ["Grate beets and carrots", "Chop cabbage and potatoes", "Simmer all in beef broth 45 minutes", "Season with vinegar", "Serve with sour cream and dill"], time: "60 min", difficulty: "Easy", servings: 8, category: "Russian", image: "🥣" },
    { id: 83, name: "Mulligatawny Soup", ingredients: [["chicken thighs", "600g"], ["red lentils", "200g"], ["coconut milk", "400ml"], ["curry powder", "3 tbsp"], ["apples", "2"], ["chicken stock", "1.5L"]], instructions: ["Cook chicken in stock", "Shred chicken", "Add lentils, curry powder, diced apples", "Simmer 25 minutes", "Add coconut milk", "Blend partially for creamy texture"], time: "50 min", difficulty: "Easy", servings: 6, category: "Indian", image: "🍲" },
    { id: 84, name: "Tortilla Soup", ingredients: [["chicken breast", "500g"], ["tomatoes", "6"], ["chipotle peppers", "2"], ["chicken stock", "2L"], ["corn tortillas", "8"], ["avocado", "2"], ["queso fresco", "100g"], ["lime", "2"]], instructions: ["Roast tomatoes and chipotles", "Blend with stock", "Poach chicken in soup", "Shred chicken, return to soup", "Fry tortilla strips", "Serve topped with tortillas, avocado, cheese, lime"], time: "45 min", difficulty: "Easy", servings: 6, category: "Mexican", image: "🍲" },

    // More vegetarian
    { id: 85, name: "Dal Tadka", ingredients: [["yellow lentils", "2 cups"], ["tomatoes", "2"], ["cumin seeds", "2 tsp"], ["dried red chilies", "4"], ["curry leaves", "10"], ["ghee", "3 tbsp"]], instructions: ["Cook lentils until soft", "Mash partially", "Make tadka: fry cumin, chilies, curry leaves in ghee", "Pour over dal", "Simmer 5 minutes"], time: "35 min", difficulty: "Easy", servings: 6, category: "Indian", image: "🫘" },
    { id: 86, name: "Spanakopita", ingredients: [["spinach", "1kg"], ["feta cheese", "400g"], ["phyllo dough", "500g"], ["eggs", "3"], ["dill", "1/2 cup"], ["unsalted butter", "200g"]], instructions: ["Wilt spinach, squeeze dry", "Mix with feta, eggs, dill", "Layer phyllo sheets, brushing with butter", "Add spinach mixture", "Top with more phyllo", "Bake 45 min at 350°F"], time: "75 min", difficulty: "Medium", servings: 8, category: "Greek", image: "🥐" },
    { id: 87, name: "Imam Bayildi", ingredients: [["eggplants", "4"], ["onions", "3"], ["tomatoes", "6"], ["garlic", "6 cloves"], ["parsley", "1 bunch"], ["raisins", "50g"], ["pine nuts", "50g"]], instructions: ["Halve eggplants, scoop out centers", "Salt and drain", "Sauté onions, garlic, tomatoes", "Add eggplant flesh, raisins, pine nuts", "Stuff eggplants", "Bake 60 min at 350°F"], time: "2 hours", difficulty: "Medium", servings: 4, category: "Turkish", image: "🍆" },

    // Spanish cuisine
    { id: 88, name: "Gazpacho", ingredients: [["tomatoes", "1kg"], ["cucumber", "1"], ["bell pepper", "1"], ["stale bread", "100g"], ["sherry vinegar", "3 tbsp"], ["garlic", "2 cloves"]], instructions: ["Blend all ingredients until smooth", "Season with salt", "Chill 4 hours", "Serve cold with garnishes"], time: "4.5 hours", difficulty: "Easy", servings: 6, category: "Spanish", image: "🍅" },
    { id: 89, name: "Patatas Bravas", ingredients: [["potatoes", "1kg"], ["tomatoes", "400g"], ["smoked paprika", "2 tsp"], ["cayenne", "1 tsp"], ["garlic", "4 cloves"], ["aioli", "200ml"]], instructions: ["Cut potatoes into cubes", "Roast at 425°F until crispy", "Make spicy tomato sauce", "Drizzle sauce over potatoes", "Top with aioli"], time: "45 min", difficulty: "Easy", servings: 6, category: "Spanish", image: "🥔" },
    { id: 90, name: "Albondigas", ingredients: [["ground beef", "500g"], ["ground pork", "300g"], ["rice", "100g"], ["eggs", "2"], ["tomatoes", "800g"], ["beef stock", "500ml"], ["smoked paprika", "1 tbsp"]], instructions: ["Mix meats with rice, egg, seasonings", "Form meatballs", "Brown in pan", "Make tomato sauce", "Simmer meatballs in sauce 30 minutes"], time: "60 min", difficulty: "Medium", servings: 6, category: "Spanish", image: "🍝" },

    // German
    { id: 91, name: "Sauerbraten", ingredients: [["beef roast", "1.5kg"], ["red wine vinegar", "500ml"], ["red wine", "500ml"], ["onions", "2"], ["juniper berries", "10"], ["bay leaves", "3"], ["gingersnap cookies", "100g"]], instructions: ["Marinate beef in wine, vinegar, spices 3 days", "Brown beef", "Add marinade, simmer 2.5 hours", "Remove beef, strain sauce", "Thicken sauce with crushed gingersnaps", "Slice beef, serve with sauce"], time: "75 hours", difficulty: "Hard", servings: 8, category: "German", image: "🥩" },
    { id: 92, name: "Spätzle", ingredients: [["eggs", "4"], ["milk", "200ml"], ["nutmeg", "1/4 tsp"], ["emmental cheese", "200g"]], instructions: ["Mix flour, eggs, milk into thick batter", "Press through spätzle maker into boiling water", "Cook until they float", "Drain, toss with butter", "Top with cheese"], time: "30 min", difficulty: "Medium", servings: 4, category: "German", image: "🍝" },

    // Polish
    { id: 93, name: "Pierogi", ingredients: [["potatoes", "6"], ["farmer cheese", "200g"], ["onions", "2"], ["dumpling dough", "500g"], ["sour cream", "200ml"]], instructions: ["Make dough, rest 30 minutes", "Mash potatoes with cheese", "Roll dough thin, cut circles", "Fill with potato mixture", "Boil until they float", "Fry with onions", "Serve with sour cream"], time: "2 hours", difficulty: "Hard", servings: 6, category: "Polish", image: "🥟" },
    { id: 94, name: "Bigos (Hunter's Stew)", ingredients: [["sauerkraut", "1kg"], ["fresh cabbage", "500g"], ["kielbasa", "400g"], ["pork shoulder", "500g"], ["bacon", "200g"], ["dried mushrooms", "50g"], ["prunes", "100g"]], instructions: ["Soak mushrooms", "Brown meats", "Layer cabbage, sauerkraut, meats", "Add mushroom liquid, prunes", "Simmer 2 hours"], time: "3 hours", difficulty: "Medium", servings: 8, category: "Polish", image: "🍲" },

    // More diverse cuisines
    { id: 95, name: "Jollof Rice", ingredients: [["long grain rice", "3 cups"], ["tomatoes", "6"], ["tomato paste", "3 tbsp"], ["scotch bonnet", "2"], ["onions", "2"], ["chicken stock", "4 cups"], ["curry powder", "1 tbsp"]], instructions: ["Blend tomatoes, peppers, onions", "Fry tomato paste", "Add blended mixture, cook 15 minutes", "Add rice, stock, curry powder", "Cover, cook 30 minutes on low"], time: "60 min", difficulty: "Medium", servings: 8, category: "Nigerian", image: "🍚" },
    { id: 96, name: "Poutine", ingredients: [["french fries", "1kg"], ["cheese curds", "400g"], ["beef gravy", "2 cups"]], instructions: ["Fry potatoes until crispy", "Top with cheese curds", "Pour hot gravy over", "Serve immediately"], time: "30 min", difficulty: "Easy", servings: 4, category: "Canadian", image: "🍟" },
    { id: 97, name: "Bunny Chow", ingredients: [["bread loaf", "1"], ["lamb curry", "600g"], ["potatoes", "3"], ["curry powder", "3 tbsp"], ["coconut milk", "400ml"], ["tomatoes", "3"]], instructions: ["Make lamb curry with potatoes", "Hollow out bread loaf", "Fill with hot curry", "Replace bread top", "Serve with carrot sambals"], time: "90 min", difficulty: "Medium", servings: 4, category: "South African", image: "🍛" },
    { id: 98, name: "Coxinha", ingredients: [["chicken breast", "500g"], ["cream cheese", "100g"], ["mashed potatoes", "400g"], ["eggs", "2"], ["breadcrumbs", "300g"]], instructions: ["Cook and shred chicken", "Mix with cream cheese", "Form dough from potato", "Shape into teardrops with chicken filling", "Coat in egg and breadcrumbs", "Deep fry until golden"], time: "90 min", difficulty: "Hard", servings: 12, category: "Brazilian", image: "🍗" },
    { id: 99, name: "Pelmeni", ingredients: [["ground pork", "300g"], ["ground beef", "300g"], ["onion", "1"], ["dumpling dough", "500g"], ["sour cream", "200ml"], ["dill", "1 bunch"]], instructions: ["Mix meats with minced onion", "Roll dough thin", "Cut circles, fill with meat", "Form into half-moons", "Boil until they float", "Serve with sour cream and dill"], time: "90 min", difficulty: "Hard", servings: 6, category: "Russian", image: "🥟" },
    { id: 100, name: "Goulash", ingredients: [["beef chuck", "1kg"], ["onions", "3"], ["bell peppers", "2"], ["tomatoes", "4"], ["hungarian paprika", "4 tbsp"], ["caraway seeds", "1 tsp"], ["beef stock", "1L"]], instructions: ["Brown beef cubes", "Sauté onions until caramelized", "Add paprika, be careful not to burn", "Add peppers, tomatoes, stock", "Simmer 2 hours until tender", "Serve with egg noodles"], time: "3 hours", difficulty: "Medium", servings: 6, category: "Hungarian", image: "🍲" }
];

// Extract all unique ingredients (excluding staples) for search functionality
const ALL_INGREDIENTS = [...new Set(
    RECIPES_DATABASE.flatMap(recipe =>
        recipe.ingredients.map(ing => ing[0])
    ).filter(ing => !STAPLES_AND_SPICES.includes(ing))
)].sort();
