onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'itme',//输出物品
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
