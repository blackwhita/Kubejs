onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: 'itme',//Output items
            tier: 'tier',// 类型ONE/TWO/THREE
            id: 'id'
        },
        {
            event
        }
    ];

    /*
    Tiers
    ONE: 魔法黏土
    TWO: 非凡黏土
    THREE: 神话黏土
    */

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph_recipe';

        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "ars_nouveau:glyph_recipe",
  "tier": "tier",
  "input": "item",
  "output": "itemr"
}
