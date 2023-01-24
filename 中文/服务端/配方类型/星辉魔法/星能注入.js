onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//消耗物品
            fluid: 'fluid',//消耗流体id
            consumptionChance: 0.5,//消耗液体概率
            output: 'item',// 输出物品
            count: value,//数量
            duration: value,//所需时间
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'astralsorcery:infuser',
                fluidInput: recipe.fluid,
                input: Ingredient.of(recipe.input).toJson(),
                output: Item.of(recipe.output, recipe.count).toResultJson(),
                consumptionChance: recipe.consumptionChance,
                duration: recipe.duration,
                consumeMultipleFluids: false,//液体是否消耗
                acceptChaliceInput: true,//是否接受圣杯输入
                copyNBTToOutputs: false//是否输出NBT物品
            })
            .id(recipe.id);
    });
});
//
{
  "type": "astralsorcery:infuser",
  "fluidInput": "fluid",
  "input": {
    "tag": "tag"
  },
  "output": {
    "item": "item",
    "count": value
  },
  "consumptionChance": value,
  "duration": value,
  "consumeMultipleFluids": true/false,
  "acceptChaliceInput": true/false,
  "copyNBTToOutputs": true/false
}
