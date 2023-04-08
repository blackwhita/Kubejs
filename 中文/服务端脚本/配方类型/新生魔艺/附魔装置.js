onEvent('recipes', (event) => {
    //合成表显示
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
            reagent: 'item',//附魔器的核心物品
            sourceCost: value,//消耗魔源，最大值10000//可以忽略
            output: 'item',//输出物品
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
