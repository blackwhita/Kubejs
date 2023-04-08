onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Ingredient.of('3x item'), 'item'],//输入三个物品和一个物品
            output: Item.of('3x item'),//输出三个物品
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]).id(recipe.id);
    });
});
//
{
    "type":"immersiveengineering:alloy",
    "time":value,
    "result":{
        "count":value,
        "base_ingredient":{"tag":"tag"}},
    "conditions":[
        {"value":{"tag":"tag","type":"forge:tag_empty"},"type":"forge:not"},
        {"value":{"tag":"tag","type":"forge:tag_empty"},"type":"forge:not"
        }],
    "input0":{"tag":"tag"},
    "input1":{"tag":"tag"}
}
