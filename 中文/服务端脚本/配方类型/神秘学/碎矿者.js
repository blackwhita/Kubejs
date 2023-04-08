onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { item: 'item' },//输入物品
            output: 'item',//输出物品
            count: value,//输出量
            time: value,//所需时间
            ignore_crushing_multiplier: false,//是否忽略碎矿者的增益
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
