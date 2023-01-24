onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ tag: 'tag' }, { item : 'item' }],//输入物品
            output: {//输出物品
                item: 'item',
                tag: 'tag'
            },
            id: 'id' 
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
