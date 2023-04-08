onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item
                'item',
                'item',
                'item',
                'item'
            ],
            output: 'item',//Output items
            minimumDrain: value,//Minimum willpower value
            drain: value,//consume will
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
