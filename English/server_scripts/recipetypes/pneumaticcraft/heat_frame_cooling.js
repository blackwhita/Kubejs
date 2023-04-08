onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid，Input quantity
                output: { item: 'item' },//Output items
                max_temp: value,//Maximum temperature
                bonus_output: { multiplier: value, limit:  value },//extra export，Multiplication, limit maximum value
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:heat_frame_cooling',
                input: recipe.input,
                max_temp: recipe.max_temp,
                result: recipe.output,
                bonus_output: recipe.bonus_output
            })
            .id(recipe.id);
    });
});
//
{
  "type": "pneumaticcraft:heat_frame_cooling",
  "input": {
    "type": "pneumaticcraft:fluid",
    "tag": "tag",
    "amount": value
  },
  "max_temp": value,
  "result": {
    "item": "item"
  }
}
