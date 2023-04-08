onEvent('recipes', (event) => {
    const recipes = [
        {
            heated: true,//whether or not heat//superheated:true
            inputs: ['item', 'item'],//Input item
            output: Item.of('item', value),//Output items
            id: 'id'
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
    });
});
//
{
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "item"
    },
    {
      "fluidTag": "fluidTag",
      "amount": value
    }
  ],
  "results": [
    {
      "fluid": "fluid",
      "amount": value
    }
  ],
  "heatRequirement": "heated"
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.createMixing(output[], input[])
