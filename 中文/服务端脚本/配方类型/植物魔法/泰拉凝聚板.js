onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                { tag: 'tag' },
                { item: 'item' }
            ],
            output: { item: 'item' },//输出物品//tag
            mana: value,//魔力消耗量
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
