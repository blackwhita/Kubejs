onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:coal',//Input item
            outputs: ['item', Fluid.of('fluid', value)],//Output items
            energy: value,//Required energy
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.pyrolyzer(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
