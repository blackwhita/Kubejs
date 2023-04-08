onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            container: 'item',//Output items
            fluid: Fluid.of('fluid', value),//Output fluid，fluid  value
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
{
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "item"
      }
    ],
    "results": [
      {
        "item": "item"
      },
      {
        "fluid": "fluid",
        "amount": value
      }
    ]
  }
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  event.recipes.createEmptying(output[], input[])
  