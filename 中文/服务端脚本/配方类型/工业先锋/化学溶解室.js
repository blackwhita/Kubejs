onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                'item', 'item', 'item',
                'item', 'item',
                'item', 'item', 'item',
            ],
            inputFluid: 'fluid',//输入流体
            inputFluidAmount: value,//输入流体量
            processingTime: value,//消耗时间
            outputItem: { item: 'item', count: value },//输出物品，输出量
            outputFluid: 'fluid',//输出流体
            outputFluidAmount: value,//输出流体量
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});
//
{
  "input": [
    {
      "item": "item"
    }
  ],
  "inputFluid": "{FluidName:"fluid",Amount:value}",
  "processingTime": value,
  "output": {
    "item": "item",
    "count": value
  },
  "type": "industrialforegoing:dissolution_chamber"
}
