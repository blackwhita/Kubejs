onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { item: 'item' },//Input item
            output: 'item',//Output items
            count: value,//Output quantity
            time: value,//Required time
            ignore_crushing_multiplier: false,//whether or not Ignore the gain of the crusher
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    item: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.time,
                ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
            })
            .id(recipe.id);
    });
});
