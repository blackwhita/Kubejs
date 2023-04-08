onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'item' }],//Input item
            output: {//Output items，Output quantity
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
