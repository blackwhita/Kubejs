onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
            ],
            mana: value,//consume mana
            output: 'item',//Output items
            count: value,//Output items quantity
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
