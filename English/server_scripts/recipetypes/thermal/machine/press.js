onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Item.of('item'), Ingredient.of('die')],//Input item，importmould
            output: Item.of('item'),//Output items
            energy: value,//Required energy
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
