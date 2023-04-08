onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: Item.of('item'),//Output items
                itemInput: { ingredient: { item: 'item' } },//Input item
                gasInput: { amount: value, gas: 'gas' },//Input quantity，import gas
                duration: value,//Required time
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
