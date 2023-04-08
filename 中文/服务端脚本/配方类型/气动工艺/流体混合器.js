onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//输入流体1，输入量
            input2: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//输入流体2，输入量
            item_output: { item: 'item' },//输出物品
            fluid_output: { fluid: 'fluid', amount: value },//输出流体，输出量
            pressure: value,//所需压力
            time: value,//所需时间
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fluid_mixer';
        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "pneumaticcraft:fluid_mixer",
  "input1": {
    "type": "pneumaticcraft:fluid",
    "tag": "tag",
    "amount": value
  },
  "input2": {
    "type": "pneumaticcraft:fluid",
    "tag": "tag",
    "amount": value
  },
  "fluid_output": {
    "fluid": "fluid",
    "amount": value
  },
  "item_output": {
    "item": "item"
  },
  "pressure": value,
  "time": value
}
