onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            container: 'item',//输出物品
            fluid: Fluid.of('fluid', value),//输出流体，流体量
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
