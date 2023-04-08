onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: 'item',//Output items
            count: value,//export quantity
            mana: value,//Magic consumption value
            catalyst: 'block',//The catalyst under the magic pool
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        const re = event.custom(constructed_recipe);

        if (recipe.id) {
            re.id(recipe.id);
        } else {
            fallback_id(re, id_prefix);
        }
    });
});
//
{
  "type": "botania:mana_infusion",
  "input": {
    "item": "item"
  },
  "output": {
    "item": "item"
  },
  "mana": value,
  "group": "gruop",
  "catalyst": {
    "type": "block",
    "block": "block"
  }
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.mana_infusion("output", "input", value, "block")
