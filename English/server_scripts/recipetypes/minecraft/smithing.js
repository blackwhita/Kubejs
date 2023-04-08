//
onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: 'item',//Input item1
            input2: 'item',//Input item2
            output: 'item',//Output items
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});

{
	"group": "alphabetic string", //Optionally, formulas with the same identifier will be displayed as a group in the recipe book.
	"type": "minecraft:smithing",
	"base": "item"//Specify an item to upgrade
	"addition": "item"//Consumables required for upgrade
	"result": "item" //Upgraded items
}
