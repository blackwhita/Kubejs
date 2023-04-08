onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item，Input quantity
                { tag: 'forge:pink_slime', amount: value },
                { item: 'item', amount: value }
            ],
            result: { fluid: 'fluid', amount: value },//Output items，Output quantity
            temperature: value,//所需温度
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
