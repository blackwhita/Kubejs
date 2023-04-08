onEvent('recipes', (event) => {
    const recipes = [
        {
            ritual_type: 'occultism:craft',
            activation_item: 'item',//Core item
            pentacle_id: 'occultism_type',//Ritual type
            duration: value,//Required time
            ritual_dummy: 'texture',//Icon represented by JEI
            ingredients: [//Required items
                'item'
            ],
            result: 'occultism:infused_lenses',//Output items
            id: 'id'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'item',
            pentacle_id: 'occultism_type',
            duration: value,
            entity_to_sacrifice: {//Sacrificial entity
                tag: 'tag',
                display_name: 'display_name'
            },
            ritual_dummy: 'texture',
            ingredients: [
                'item',
            ],
            result: 'item',
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
