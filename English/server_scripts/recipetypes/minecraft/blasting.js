onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: 'item',//Output items
            xp: value,//Output experience
            id: 'id'
        },
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
//
{
	"group": "alphabetic string", //Optionally, formulas with the same identifier will be displayed as a group in the recipe book.
	"type": "minecraft:blasting"
	"ingredients": "item"
	"result": "item",
	"experience": value
	"cookingtime": value
}
