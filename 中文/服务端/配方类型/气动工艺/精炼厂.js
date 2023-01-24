onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//输入流体，输入量
            temperature: { min_temp: value },//最小温度//max_temp: value
            results: [//输出流体，输出量 
                { fluid: 'fluid', amount: value },
            ],
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "pneumaticcraft:refinery",
  "input": {
    "type": "pneumaticcraft:fluid",
    "tag": "fluid",
    "amount": value
  },
  "temperature": {
    "min_temp": value
  },
  "results": [
    {
      "fluid": fluid",
      "amount": value
    }
  ]
}
