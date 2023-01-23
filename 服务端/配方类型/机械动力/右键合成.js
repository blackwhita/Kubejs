onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: ['item'],//输入物品
            output: Item.of('item', value),//输出物品 第一个物品是使用的物品(安山合金)，第二个物品是被使用的方块(被剥皮的原木)
            id: 'id'
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.itemApplication(recipe.output, recipe.inputs).id(recipe.id);
    });
});