onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            outputs: [//输出物品
                Item.of('item'),
                Item.of('item').chance(value)//输出概率
            ],
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
