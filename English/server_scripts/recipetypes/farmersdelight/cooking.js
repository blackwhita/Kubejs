onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: ['item', 'item','item','item','item','item',],//Input item
            output: 'item',//Output items
            count: value,//Output items quantity
            cookingTime: value,//制作time 
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = { item: recipe.output, count: recipe.count };
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "item": "item"
    }
  ],
  "result": {
    "item": "item"
  },
  "container": {
    "item": "item"
  },
  "experience": value,
  "cookingtime": value
}
