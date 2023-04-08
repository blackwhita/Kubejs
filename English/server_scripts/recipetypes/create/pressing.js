onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            inputs: ['item'],//Input item
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
//
{
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": "tag"
    }
  ],
  "results": [
    {
      "item": "item"
    }
  ]
}
