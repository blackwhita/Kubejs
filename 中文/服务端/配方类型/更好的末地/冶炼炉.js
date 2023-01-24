onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['item1', 'item2'],//输入物品
                output: Item.of('item', value),//输出物品,数量
                experience: value,//经验输出
                smelttime: value,//消耗时间
                id: 'id'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:alloying',
                ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
                result: recipe.output,
                experience: recipe.experience,
                smelttime: recipe.smelttime
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
