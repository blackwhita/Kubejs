onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'item',//Input item
                output: 'item',//Output items
                catalysts: [//Pouring base serial number, maximum 0-7
                    { index: value, item: 'item' },
                    { index: value, tag: 'tag' }
                ],
                time: value,//consume time  
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
