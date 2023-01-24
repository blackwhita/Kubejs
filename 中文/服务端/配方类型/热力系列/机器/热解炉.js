onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:coal',//输入物品
            outputs: ['item', Fluid.of('fluid', value)],//输出物品
            energy: value,//所需能量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.pyrolyzer(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
