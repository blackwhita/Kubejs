onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item
                { tag: 'tag' },
                { item: 'item' }
            ],
            output: { item: 'item' },//Output items//tag
            mana: value,//mana consumption
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
//
{
  "type": "botania:terra_plate",
  "mana": value,
  "ingredients": [
    {
      "item": "item"
    }
  ],
  "result": {
    "item": "item"
  }
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.terra_plate("output", ["input1", "input2"], value)
