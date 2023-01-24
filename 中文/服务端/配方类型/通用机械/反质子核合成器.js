onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: Item.of('item'),//输出物品
                itemInput: { ingredient: { item: 'item' } },//输入物品
                gasInput: { amount: value, gas: 'gas' },//输入量，输入气体
                duration: value,//所需时间
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
