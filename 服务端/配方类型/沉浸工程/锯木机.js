onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: Item.of('item', 8),//输出物品
            extraOutput: Item.of('item').chance(value),//额外输出物品，输出几率(<=1)
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [{ stripping: false, output: recipe.extraOutput }])
            .id(recipe.id);
    });
});
