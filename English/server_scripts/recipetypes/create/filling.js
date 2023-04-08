onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            fluid: Fluid.of('fluid', value),//Input fluid，Input quantity
            output: 'item',//Output items 
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
//
{
  "type": "create:filling",
  "ingredients": [
    {
      "item": "item"
    },
    {
      "fluid": "fluid",
      "nbt": {},
      "amount": value
    }
  ],
  "results": [
    {
      "item": "item"
    }
  ]
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.createFilling(output[], input[])
