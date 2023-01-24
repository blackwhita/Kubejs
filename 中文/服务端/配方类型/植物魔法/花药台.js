onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
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
            output: 'item',//输出物品
            count: value,//输出物品数量
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
