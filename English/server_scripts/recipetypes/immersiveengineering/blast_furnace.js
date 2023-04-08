onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            input: 'item',//Input item
            slag: 'slag',//炉渣位置Output items 
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag).id(recipe.id);
    });
});
//
{
    "type":"immersiveengineering:blast_furnace",
    "result":{"tag":"tagl"},
    "input":{"tag":"tag"},
    "slag":{"tag":"tag"},
    "time":value
}
