onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item'
            ],
            output: 'item',//Output items
            count: value,//Output items quantity
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'botania:petal_apothecary';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = { item: recipe.output, count: recipe.count };

        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "botania:petal_apothecary",
  "output": {
    "item": "item"
  },
  "ingredients": [
    {
      "tag": "tag"
    }
  ]
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.petal_apothecary("output", ["input"])
