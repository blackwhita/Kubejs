onEvent('recipes', (event) => {
    const recipes = [
        {
            cast: { item: 'item' },//Placed items
            cast_consumed: true,//Whether to consume items placed
            fluid: { name: 'fluid', amount: value },//Inflow fluid
            result: Item.of('item').toResultJson(),//Formed items
            cooling_time: value,//Required time
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
