onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { block: 'block' },//转化前方块 
            output: { block: 'block' },//转化后方块
            starlight: value,// 消耗星能
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe).id(recipe.id);
    });
});
