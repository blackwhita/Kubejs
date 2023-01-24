onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: Ingredient.of('3x item'),//输入三个物品
                secondaries: ['item1', 'item2'],//输入物品二号位
                outputs: [Item.of('3x item')],//输出三个物品
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering
            .arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries)
            .id(recipe.id);

        if (recipe.time) {
            re.time(recipe.time);
        }

        if (recipe.energy) {
            re.energy(recipe.energy);
        }
    });
});
//
{
    "type":"immersiveengineering:arc_furnace",
    "results":[{
        "count":value,
        "base_ingredient":{"tag":"tag"}
        }],
    "additives":[{"tag":"tag"}],
    "input":{"tag":"tag"},
    "time":value,
    "energy":value
}
