onEvent('recipes', (event) => {
    //Composite Table Display
    /*
    123
    4_5
    678
    */
    const recipes = [
        {
            inputs: [
                'item',//1
                'item',//2
                'item',//3
                'item',//4
                'item',//5
                'item',//6
                'item',//7
                'item',//8
            ],
            reagent: 'item',//The core item of an enchanter
            sourceCost: value,//Consume Magic Source，Maximum 10000//Negligible
            output: 'item',//Output items
            id: 'id'
        },
        {
            event
        }
    ]
    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
//
{
  "type": "ars_nouveau:enchanting_apparatus",
  "item_1": [
    {
      "tag": "tag"
    }
  ],
  "item_2": [
    {
      "tag": "tag"
    }
  ],
  "item_3": [
    {
      "tag": "tag"
    }
  ],
  "item_4": [
    {
      "tag": "tag"
    }
  ],
  "item_5": [
    {
      "item": "item"
    }
  ],
  "item_6": [
    {
      "item": "item"
    }
  ],
  "item_7": [
    {
      "item": "item"
    }
  ],
  "item_8": [
    {
      "item": "item"
    }
  ],
  "reagent": [
    {
      "tag": "tag"
    }
  ],
  "ourceCost": value,
  "output": {
    "item": "item"
  }
}
