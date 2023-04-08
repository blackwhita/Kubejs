onEvent('recipes', (event) => {
    const recipes = [
        {
            input: Item.of('item'),//Input item
            output: Item.of('item'),//Output items
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
