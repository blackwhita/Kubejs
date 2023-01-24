onEvent('recipes', (event) => {
    const recipes = [
        {
            results: [//输出流体，输出量
                { fluid: 'fluid', amount: value },
                { fluid: 'fluid', amount: value }
            ],
            byproducts: [{ item: 'item' }],//输出副产物物品
            input: { fluid: 'fluid', amount: value },//输入流体，输入量
            time: value,//所需时间
            energy: value,//所需能量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
