onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
            ],
            mana: value,//消耗魔力
            output: 'item',//输出物品
            count: value,//输出物品数量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
//
{
  "type": "botania:runic_altar_head",
  "output": {
    "item": "item"
  },
  "mana": value,
  "ingredients": [
    {
      "item": "item"
    }
  ]
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.runic_altar("uoput", ["input1", "input2"], value)
