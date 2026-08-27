/* =========================================
   KUSINAQUEST RECIPE DATABASE
========================================= */

const recipes = {

    /* =====================================
       MAIN DISHES
    ===================================== */

    adobo: {

        title: "Chicken Adobo",
        category: "Main Dish",

        image:
        "Image/adobo.png",

        description:
        "Chicken Adobo is one of the Philippines' most recognizable dishes. Chicken is slowly cooked with vinegar, soy sauce, garlic, pepper, and bay leaves.",

        ingredients: [
            "1 kg chicken pieces",
            "1/2 cup soy sauce",
            "1/3 cup vinegar",
            "5 cloves garlic",
            "3 bay leaves",
            "1 teaspoon black pepper",
            "1 cup water",
            "1 tablespoon cooking oil"
        ],

        steps: [
            "Heat cooking oil in a large pan and lightly brown the chicken.",
            "Add the garlic and sauté until fragrant.",
            "Pour in the soy sauce, vinegar, and water.",
            "Add the bay leaves and black pepper.",
            "Bring the mixture to a boil.",
            "Lower the heat and simmer until the chicken becomes tender.",
            "Serve hot with steamed rice."
        ]
    },


    pancit: {

        title: "Pancit",
        category: "Main Dish",

        image:
        "Image/pancit.png",

        description:
        "Pancit is a Filipino noodle dish commonly prepared with vegetables, meat, and savory seasonings.",

        ingredients: [
            "400 g rice noodles",
            "200 g chicken",
            "1 carrot",
            "1 cabbage",
            "1 onion",
            "3 cloves garlic",
            "Soy sauce",
            "Chicken broth",
            "Cooking oil",
            "Calamansi"
        ],

        steps: [
            "Prepare the noodles according to their package instructions.",
            "Heat oil in a large pan.",
            "Sauté garlic and onion.",
            "Add the chicken and cook thoroughly.",
            "Add the vegetables and stir-fry.",
            "Add chicken broth and soy sauce.",
            "Add the noodles and mix everything together.",
            "Cook until the noodles absorb the sauce.",
            "Serve with calamansi."
        ]
    },


    "kare-kare": {

        title: "Kare-Kare",
        category: "Main Dish",

        image:
        "Image/karekare.png",

        description:
        "Kare-Kare is a rich Filipino stew known for its thick peanut-based sauce and vegetables.",

        ingredients: [
            "500 g beef or pork",
            "1/2 cup peanut butter",
            "1 onion",
            "3 cloves garlic",
            "Eggplant",
            "String beans",
            "Pechay",
            "Annatto powder",
            "Water",
            "Salt and pepper"
        ],

        steps: [
            "Boil the meat until tender and reserve the broth.",
            "Sauté garlic and onion in a large pot.",
            "Add the cooked meat.",
            "Add peanut butter and some of the reserved broth.",
            "Add annatto powder for color.",
            "Simmer until the sauce thickens.",
            "Add the vegetables and cook until tender.",
            "Season to taste and serve with bagoong."
        ]
    },


    sisig: {

        title: "Sisig",
        category: "Main Dish",

        image:
        "Image/sisig.png",

        description:
        "Sisig is a popular Filipino dish made with finely chopped pork, onions, chili, and savory seasonings.",

        ingredients: [
            "500 g cooked pork",
            "1 onion, finely chopped",
            "2 cloves garlic",
            "2 tablespoons soy sauce",
            "2 tablespoons calamansi juice",
            "1 chili pepper",
            "1 tablespoon mayonnaise",
            "Black pepper",
            "Cooking oil"
        ],

        steps: [
            "Cook the pork thoroughly until tender.",
            "Chop the cooked pork into small pieces.",
            "Heat a pan and add a small amount of cooking oil.",
            "Sauté garlic and onion.",
            "Add the chopped pork.",
            "Season with soy sauce and black pepper.",
            "Add calamansi juice and chili.",
            "Mix in mayonnaise if desired.",
            "Serve hot, traditionally on a sizzling plate."
        ]
    },


    /* =====================================
       SOUPS
    ===================================== */

    sinigang: {

        title: "Sinigang",
        category: "Soup",

        image:
        "Image/sinigang.png",

        description:
        "Sinigang is a Filipino sour soup commonly prepared with pork, vegetables, and tamarind-based broth.",

        ingredients: [
            "500 g pork",
            "1 onion",
            "2 tomatoes",
            "1 packet tamarind soup base",
            "1 radish",
            "1 eggplant",
            "String beans",
            "Kangkong",
            "6 cups water",
            "Fish sauce to taste"
        ],

        steps: [
            "Boil the pork in water until tender.",
            "Add the onion and tomatoes.",
            "Add the radish and eggplant.",
            "Add the tamarind soup base.",
            "Add the string beans.",
            "Season with fish sauce.",
            "Add kangkong near the end of cooking.",
            "Serve hot with rice."
        ]
    },


    bulalo: {

        title: "Bulalo",
        category: "Soup",

        image:
        "Image/Bulalo.png",

        description:
        "Bulalo is a hearty Filipino beef soup known for its flavorful broth, tender beef shank, and bone marrow.",

        ingredients: [
            "1 kg beef shank",
            "2 corn cobs",
            "1 onion",
            "1 cabbage",
            "String beans",
            "1 teaspoon whole peppercorns",
            "8 cups water",
            "Fish sauce or salt"
        ],

        steps: [
            "Place the beef shank in a large pot with water.",
            "Bring the water to a boil and remove excess foam.",
            "Add onion and peppercorns.",
            "Simmer until the beef becomes tender.",
            "Add the corn and cook until tender.",
            "Add the vegetables.",
            "Season with fish sauce or salt.",
            "Serve hot with rice."
        ]
    },


    tinola: {

        title: "Tinola",
        category: "Soup",

        image:
        "Image/tinola.png",

        description:
        "Tinola is a comforting Filipino chicken soup flavored with ginger and commonly served with green papaya and leafy vegetables.",

        ingredients: [
            "1 kg chicken pieces",
            "1 thumb-sized piece ginger",
            "1 onion",
            "3 cloves garlic",
            "1 green papaya",
            "Malunggay or chili leaves",
            "6 cups water",
            "Fish sauce",
            "Cooking oil"
        ],

        steps: [
            "Heat oil in a large pot.",
            "Sauté garlic, onion, and ginger.",
            "Add the chicken and cook until lightly browned.",
            "Add water and bring to a boil.",
            "Lower the heat and simmer until the chicken is tender.",
            "Add green papaya.",
            "Add malunggay or chili leaves.",
            "Season with fish sauce and serve hot."
        ]
    },


    batchoy: {

        title: "Batchoy",
        category: "Soup",

        image:
        "Image/batchoy.png",

        description:
        "Batchoy is a flavorful Filipino noodle soup traditionally associated with Iloilo and made with noodles, meat, and a rich broth.",

        ingredients: [
            "200 g egg noodles",
            "200 g pork",
            "100 g pork liver",
            "Garlic",
            "Onion",
            "Spring onions",
            "4 cups pork broth",
            "Fish sauce",
            "Black pepper"
        ],

        steps: [
            "Prepare the pork broth in a large pot.",
            "Sauté garlic and onion.",
            "Add the pork and cook thoroughly.",
            "Add the pork liver and cook carefully.",
            "Pour in the pork broth.",
            "Add the noodles and cook until tender.",
            "Season with fish sauce and pepper.",
            "Top with spring onions and serve hot."
        ]
    },


    /* =====================================
       SNACKS
    ===================================== */

    lumpia: {

        title: "Lumpiang Shanghai",
        category: "Snack",

        image:
        "Image/lumpia.png",

        description:
        "Lumpiang Shanghai is a popular Filipino appetizer made from seasoned ground meat wrapped in thin spring-roll wrappers.",

        ingredients: [
            "500 g ground pork",
            "1 carrot",
            "1 onion",
            "2 cloves garlic",
            "1 egg",
            "Lumpia wrappers",
            "Salt and pepper",
            "Cooking oil"
        ],

        steps: [
            "Combine ground pork, carrot, onion, garlic, and egg.",
            "Season with salt and pepper.",
            "Place filling onto a lumpia wrapper.",
            "Roll the wrapper tightly.",
            "Seal the edge with water.",
            "Heat cooking oil.",
            "Fry until golden brown and crispy.",
            "Drain and serve."
        ]
    },


    turon: {

        title: "Turon",
        category: "Snack",

        image:
        "Image/turon.png",

        description:
        "Turon is a popular Filipino snack made with sliced saba bananas wrapped in spring-roll wrappers and coated with caramelized sugar.",

        ingredients: [
            "6 saba bananas",
            "6 lumpia wrappers",
            "1/2 cup brown sugar",
            "Jackfruit slices",
            "Cooking oil"
        ],

        steps: [
            "Peel and slice the saba bananas lengthwise.",
            "Place a banana slice and jackfruit on a wrapper.",
            "Sprinkle brown sugar over the filling.",
            "Roll the wrapper tightly.",
            "Heat cooking oil in a pan.",
            "Fry the turon until golden brown.",
            "Allow excess oil to drain.",
            "Serve once slightly cooled."
        ]
    },


    empanada: {

        title: "Filipino Empanada",
        category: "Snack",

        image:
        "Image/empanada.png",

        description:
        "Filipino empanadas are savory pastries filled with meat, vegetables, and flavorful seasonings.",

        ingredients: [
            "2 cups all-purpose flour",
            "1/2 cup butter",
            "1 egg",
            "Ground meat",
            "1 potato",
            "1 carrot",
            "1 onion",
            "Salt and pepper",
            "Cooking oil"
        ],

        steps: [
            "Prepare the dough using flour, butter, egg, and water.",
            "Cook the ground meat with onion.",
            "Add potato and carrot.",
            "Season with salt and pepper.",
            "Roll out the dough into circles.",
            "Place the filling in the center.",
            "Fold and seal the edges.",
            "Fry or bake until golden brown.",
            "Allow to cool before serving."
        ]
    },


    "siopao-asado": {

        title: "Siopao Asado",
        category: "Snack",

        image:
        "Image/siopaoasado.png",

        description:
        "Siopao Asado is a Filipino steamed bun filled with sweet and savory Asado-style pork. It is soft, fluffy, and commonly enjoyed as a snack or light meal.",

        ingredients: [
            "500 g pork shoulder, finely chopped",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tablespoons oyster sauce",
            "2 tablespoons brown sugar",
            "1/2 cup water",
            "1 tablespoon cornstarch",
            "1 tablespoon cooking oil",
            "White pepper to taste",
            "Siopao dough"
        ],

        steps: [
            "Heat cooking oil in a pan and sauté the garlic and onion.",
            "Add the chopped pork and cook until lightly browned.",
            "Add soy sauce, oyster sauce, brown sugar, and water.",
            "Mix well and let the filling simmer until the pork becomes tender.",
            "Mix cornstarch with a little water and add it to the filling.",
            "Stir until the sauce thickens, then season with white pepper.",
            "Allow the Asado filling to cool before using it.",
            "Place some filling in the center of a piece of siopao dough.",
            "Gather and seal the edges of the dough.",
            "Place the filled buns in a steamer and steam until the dough is fluffy and fully cooked.",
            "Serve warm."
        ]
    },


    /* =====================================
       DESSERTS
    ===================================== */

    "halo-halo": {

        title: "Halo-Halo",
        category: "Dessert",

        image:
        "Image/halohalo1.png",

        description:
        "Halo-Halo is a colorful Filipino dessert combining shaved ice, evaporated milk, sweetened fruits, beans, and various toppings.",

        ingredients: [
            "Shaved ice",
            "Evaporated milk",
            "Sweetened banana",
            "Sweetened jackfruit",
            "Sweetened beans",
            "Nata de coco",
            "Kaong",
            "Ube halaya",
            "Leche flan",
            "Ube ice cream"
        ],

        steps: [
            "Place sweetened fruits and beans into a tall glass.",
            "Add a generous amount of shaved ice.",
            "Pour evaporated milk over the ice.",
            "Add ube halaya and other toppings.",
            "Place leche flan on top.",
            "Add a scoop of ube ice cream.",
            "Mix everything together before eating."
        ]
    },


    "leche-flan": {

        title: "Leche Flan",
        category: "Dessert",

        image:
        "Image/lecheflan.png",

        description:
        "Leche Flan is a rich Filipino custard dessert topped with a smooth layer of caramel.",

        ingredients: [
            "10 egg yolks",
            "1 can condensed milk",
            "1 can evaporated milk",
            "1 teaspoon vanilla",
            "1 cup sugar"
        ],

        steps: [
            "Melt sugar in a pan until it becomes golden caramel.",
            "Pour the caramel into a mold.",
            "Mix egg yolks, condensed milk, evaporated milk, and vanilla.",
            "Strain the mixture to make it smooth.",
            "Pour the mixture into the caramel-lined mold.",
            "Cover the mold.",
            "Steam until the custard becomes firm.",
            "Cool before removing from the mold.",
            "Serve chilled."
        ]
    },


    bibingka: {

        title: "Bibingka",
        category: "Dessert",

        image:
        "Image/bibingka.png",

        description:
        "Bibingka is a soft Filipino rice cake traditionally enjoyed during the Christmas season.",

        ingredients: [
            "1 cup rice flour",
            "1/2 cup sugar",
            "1 teaspoon baking powder",
            "1 egg",
            "1/2 cup coconut milk",
            "1/4 cup melted butter",
            "Salted egg",
            "Grated coconut",
            "Cheese"
        ],

        steps: [
            "Preheat the oven.",
            "Mix rice flour, sugar, and baking powder.",
            "Add egg, coconut milk, and melted butter.",
            "Mix until the batter is smooth.",
            "Pour the batter into a lined baking mold.",
            "Add salted egg and cheese.",
            "Bake until the bibingka is cooked and lightly browned.",
            "Brush with butter.",
            "Top with grated coconut before serving."
        ]
    },


    biko: {

        title: "Biko",
        category: "Dessert",

        image:
        "Image/biko.png",

        description:
        "Biko is a sticky Filipino rice cake made from glutinous rice, coconut milk, and brown sugar.",

        ingredients: [
            "2 cups glutinous rice",
            "2 cups coconut milk",
            "1 cup brown sugar",
            "1/2 teaspoon salt",
            "1 cup water",
            "Latik for topping"
        ],

        steps: [
            "Cook the glutinous rice with water until almost tender.",
            "Combine coconut milk and brown sugar in a pan.",
            "Heat until the sugar dissolves.",
            "Add the cooked rice.",
            "Stir continuously until the mixture becomes thick and sticky.",
            "Transfer the mixture to a lined tray.",
            "Spread evenly.",
            "Top with latik.",
            "Allow it to cool before slicing."
        ]
    }

};


/* =========================================
   GET HTML ELEMENTS
========================================= */

const modal =
    document.getElementById("recipeModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalSteps =
    document.getElementById("modalSteps");

const searchInput =
    document.getElementById("searchInput");

const foodCards =
    document.querySelectorAll(".food-card");

const categoryButtons =
    document.querySelectorAll(".category-btn");


/* =========================================
   OPEN RECIPE
========================================= */

function openRecipe(recipeName) {

    const recipe = recipes[recipeName];

    if (!recipe) {
        return;
    }

    modalImage.src = recipe.image;

    modalImage.alt = recipe.title;

    modalTitle.textContent =
        recipe.title;

    modalCategory.textContent =
        recipe.category;

    modalDescription.textContent =
        recipe.description;


    /* INGREDIENTS */

    modalIngredients.innerHTML = "";

    recipe.ingredients.forEach(function(ingredient) {

        const item =
            document.createElement("li");

        item.textContent =
            ingredient;

        modalIngredients.appendChild(item);

    });


    /* STEPS */

    modalSteps.innerHTML = "";

    recipe.steps.forEach(function(step) {

        const item =
            document.createElement("li");

        item.textContent =
            step;

        modalSteps.appendChild(item);

    });


    /* SHOW MODAL */

    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE RECIPE
========================================= */

function closeRecipe() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


closeModal.addEventListener(
    "click",
    closeRecipe
);


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeRecipe();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeRecipe();

        }

    }
);


/* =========================================
   RECIPE BUTTONS
========================================= */

const recipeButtons =
    document.querySelectorAll(".recipe-btn");

recipeButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const recipeName =
                button.dataset.recipe;

            openRecipe(recipeName);

        }
    );

});


/* =========================================
   FOOD IMAGE CLICK
========================================= */

const foodImages =
    document.querySelectorAll(".food-image");

foodImages.forEach(function(image) {

    image.addEventListener(
        "click",
        function() {

            const card =
                image.closest(".food-card");

            const recipeName =
                card
                .querySelector(".recipe-btn")
                .dataset.recipe;

            openRecipe(recipeName);

        }
    );

});


/* =========================================
   FAVORITE BUTTON
========================================= */

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            button.classList.toggle("liked");

            if (
                button.classList.contains("liked")
            ) {

                button.textContent = "♥";

            } else {

                button.textContent = "♡";

            }

        }
    );

});


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const selectedCategory =
                button.dataset.category;


            /* Active category */

            categoryButtons.forEach(
                function(btn) {

                    btn.classList.remove("active");

                }
            );

            button.classList.add("active");


            /* Filter cards */

            foodCards.forEach(
                function(card) {

                    const cardCategory =
                        card.dataset.category;

                    if (
                        selectedCategory === "all" ||
                        cardCategory === selectedCategory
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            /* Clear search */

            searchInput.value = "";

        }
    );

});


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    function() {

        const searchTerm =
            searchInput.value
            .toLowerCase()
            .trim();


        foodCards.forEach(
            function(card) {

                const foodName =
                    card.dataset.name
                    .toLowerCase();

                if (
                    foodName.includes(searchTerm)
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        /* Reset category */

        categoryButtons.forEach(
            function(button) {

                button.classList.remove(
                    "active"
                );

            }
        );

        categoryButtons[0].classList.add(
            "active"
        );

    }
);