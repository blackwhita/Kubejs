onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            pattern: ['AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA',],//合成表可以无限大
            key: {
                A: 'item',
            },
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
//
{
  "type": "create:mechanical_crafting",
  "pattern": [
    "AAA",
    "AAA",
    "AAA",
    "AAA",
    "AAA",
  ],
  "key": {
    "A": {
      "tag": "tag"
    }
  },
  "result": {
    "item": "item"
  },
  "acceptMirrored": true/false
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.createMechanicalCrafting(output, pattern[], {合成键值})
