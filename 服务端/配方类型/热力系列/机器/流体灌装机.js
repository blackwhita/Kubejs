onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            fluid: Fluid.of('fluid', value),//输入流体，输入量
            output: 'item',//输出物品
            energy: value,//所需能量
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
