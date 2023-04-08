onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            inputs: ['item','item'],//Input item
            heated: true,//whether or not heat//surperheated:true
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated().id(recipe.id);
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated().id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
//{
    "type": "create:compacting",
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
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  event.recipes.createCompacting(output[], input[])
  
