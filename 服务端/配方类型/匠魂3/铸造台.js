onEvent('recipes', (event) => {
    const recipes = [
        {
            cast: { item: 'item' },//放置的物品
            cast_consumed: true,//是否消耗放置的物品
            fluid: { name: 'fluid', amount: value },//流入的流体
            result: Item.of('item').toResultJson(),//形成的物品
            cooling_time: value,//所需时间
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:casting_table',
                cast: recipe.cast,
                cast_consumed: recipe.cast_consumed,
                fluid: recipe.fluid,
                result: recipe.result,
                cooling_time: recipe.cooling_time
            })
            .id(recipe.id);
    });
});
