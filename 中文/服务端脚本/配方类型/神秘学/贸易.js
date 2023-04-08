onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'item' }],//输入物品
            output: {//输出物品，输出量
                item: 'item',
                count: value
            },
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'occultism:spirit_trade',
            ingredients: recipe.inputs,
            result: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
