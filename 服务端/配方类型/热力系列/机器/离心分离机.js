onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            outputs: [Item.of('item').withChance(value), Fluid.of('fluid', value)],//输出物品，输出概率，输出流体，输出量
            energy: value,
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
