onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid1，Input quantity
            input2: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid2，Input quantity
            item_output: { item: 'item' },//Output items
            fluid_output: { fluid: 'fluid', amount: value },//Output fluid，Output quantity
            pressure: value,//Required pressure
            time: value,//Required time
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
