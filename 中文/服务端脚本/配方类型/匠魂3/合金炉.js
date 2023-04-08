onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品，输入量
                { tag: 'forge:pink_slime', amount: value },
                { item: 'item', amount: value }
            ],
            result: { fluid: 'fluid', amount: value },//输出物品，输出量
            temperature: value,//所需温度
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
