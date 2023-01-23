onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Item.of('item', value), 'item'],//输入物品，输入量，输入物品
            outputs: [Item.of('item', value)],//输出物品
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
