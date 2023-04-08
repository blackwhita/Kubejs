onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            outputs: [Item.of('item').withChance(value), Fluid.of('fluid', value)],//Output items，exportprobability，Output fluid，Output quantity
            energy: value,
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
