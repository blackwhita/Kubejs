onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ tag: 'tag' }, { item : 'item' }],//Input item
            output: {//Output items
                item: 'item',
                tag: 'tag'
            },
            id: 'id' 
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
//
{
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "item"
    }
  ],
  "output": [
    {
      "item": "item"
    }
  ]
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.elven_trade(["output1", "output2"], ["input1", "input2"])
