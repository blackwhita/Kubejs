onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            fluid: Fluid.of('fluid', value),//输入流体，输入量
            output: 'item',//输出物品 
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
