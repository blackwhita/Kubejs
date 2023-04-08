onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'item',//输出物品
            xp: value,//输出经验
            id: 'id'
        },
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
//
{
	"group": "字符串", 可选，具有相同该标识符的配方会在配方书中显示为一组。
	"type": "minecraft:blasting"
	"ingredients": "item"
	"result": "item",
	"experience": value
	"cookingtime": value
}
