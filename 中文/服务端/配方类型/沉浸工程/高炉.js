onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            input: 'item',//输入物品
            slag: 'slag',//炉渣位置输出物品 
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
