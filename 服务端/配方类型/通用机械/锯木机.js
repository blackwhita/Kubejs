onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: Item.of('item', value),//输出物品，输出量
            extraOutput: Item.of('item').chance(value),//副产物，输出概率（<=1）
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput).id(recipe.id);
    });
});
