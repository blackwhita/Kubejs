onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'item',//输出物品
            count: value,//输出数量
            mana: value,//魔力消耗值
            catalyst: 'block',//魔力池底下的催化剂
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
