onEvent('recipes', (event) => {
    const recipes = [
        {
            result: { item: 'item' },//输出物品
            resultfluid: { fluid: 'fluid', amount: value },//输出流体，输出量
            input: {//输入物品，输入数量
                base_ingredient: { item: 'item' },
                count: value
            },
            inputfluid: { fluid: 'fluid', amount: value },//输入流体，输入量
            time: value,//所需时间
            energy: value,//所需能量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
