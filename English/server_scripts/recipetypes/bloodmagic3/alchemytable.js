onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: ['item1', 'item2', 'item3','item4', 'item5','item6'],//Input item
            output: 'item',//Output items
            count: value,//export quantity
            syphon: value,//Required LP
            ticks: value,//Required time
            orbLevel: value,//Jewel level
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel)
            .id(recipe.id);
    });
});
//
{
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "tag"
    }
  ],
  "output": {
    "item": "item",
    "count": value
  },
  "syphon": value,
  "ticks": value,
  "upgradeLevel": value
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.bloodmagic.alchemytable(output, [input]).syphon(value).ticks(value).upgradeLevel(value)
