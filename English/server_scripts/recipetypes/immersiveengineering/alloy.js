onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Ingredient.of('3x item'), 'item'],//import三个item  和一个item  
            output: Item.of('3x item'),//export三个item  
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
