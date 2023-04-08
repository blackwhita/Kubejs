onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: Item.of('item', 8),//Output items
            extraOutput: Item.of('item').chance(value),//extra Output items，exportprobability(<=1)
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [{ stripping: false, output: recipe.extraOutput }])
            .id(recipe.id);
    });
});
//
{
    "type":"immersiveengineering:sawmill",
    "secondaries":[
        {"output":{"tag":"tag"},"stripping":true/fales}
        ],
    "result":{"item":"item","count":value},
    "energy":value,
    "input":[
        {"item":"item"},
        {"item":"item"}
        ],
    "stripped":{"item":"item"}
}
