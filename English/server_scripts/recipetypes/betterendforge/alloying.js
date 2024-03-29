onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['item1', 'item2'],//Input item
                output: Item.of('item', value),//Output items, quantity
                experience: value,//experience export
                smelttime: value,//consume time 
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
  "type": "betterendforge:alloying",
  "ingredients": [
    {
      "item": "item"
    },
    {
      "item": "item"
    }
  ],
  "result": "item",
  "experience": value,
  "smelttime": value
}
