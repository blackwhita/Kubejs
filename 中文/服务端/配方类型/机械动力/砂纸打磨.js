onEvent('recipes', (event) => {
    const recipes = [
        {
            input: Item.of('item'),//输入物品
            output: Item.of('item'),//输出物品
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.sandpaper_polishing(recipe.output, recipe.input).id(recipe.id);
    });
});
//
{
  "type": "create:sandpaper_polishing",
  "ingredients": [
    {
      "item": "item"
    }
  ],
  "results": [
    {
      "item": "item"
    }
  ]
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.createSandpaperPolishing(output[], input[])
