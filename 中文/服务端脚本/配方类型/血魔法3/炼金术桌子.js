onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: ['item1', 'item2', 'item3','item4', 'item5','item6'],//输入物品
            output: 'item',//输出物品
            count: value,//输出数量
            syphon: value,//所需LP
            ticks: value,//所需时间
            orbLevel: value,//宝珠等级
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
