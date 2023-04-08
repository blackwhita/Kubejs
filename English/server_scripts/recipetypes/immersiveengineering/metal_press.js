onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            input: 'item',//Input item
            mold: 'mold',//mould
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});
//
{
    "type":"immersiveengineering:metal_press",
    "mold":{"item":"item"},
    "result":{"tag":"tag"},
    "conditions":[
        {"value":{"tag":"tag","type":"forge:tag_empty"},"type":"forge:not"},
        {"value":{"tag":"tag","type":"forge:tag_empty"},"type":"forge:not"}
    ],
    "input":{
      "count":value,
      "base_ingredient":{"tag":"tag"}
    },
    "energy":value
}
