onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'item',//输入物品
                output: 'item',//输出物品
                catalysts: [//灌注基座序列号，最大0-7
                    { index: value, item: 'item' },
                    { index: value, tag: 'tag' }
                ],
                time: value,//消耗时间 
                id: 'id'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
//
{
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "item"
  },
  "output": "item",
  "time": value,
  "catalysts": [
    {
      "item": "item",
      "index": 0//0-7
    }
  ]
}
