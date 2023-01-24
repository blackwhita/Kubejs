onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                'item',
                'item',
                'item',
                'item'
            ],
            output: 'item',//输出物品
            minimumDrain: value,//最小意志值
            drain: value,//消耗意志
            id: 'bloodmagic:soulforge/demon_crystallizer'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain)
            .id(recipe.id);
    });
});
//
{
  "type": "bloodmagic:soulforge",
  "input0": {
    "tag": "tag"
  },
  "input1": {
    "item": "item"
  },
  "input2": {
    "tag": "item"
  },
  "input3": {
    "item": "item"
  },
  "output": {
    "item": "item"
  },
  "minimumDrain": value,
  "drain": value
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.bloodmagic.soulforge(output, [input]).minimumDrain(value).drain(value)
