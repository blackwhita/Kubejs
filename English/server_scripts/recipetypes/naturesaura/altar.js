onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: { item: 'item', count: value },//Output items，Output quantity
            aura_type: 'aura_type',//Altar type
            aura: value,//Required aura
            time: value,//Required time
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
/*
aura_type=(
'naturesaura:overworld',
'naturesaura:nether'
)
*/
//
{
    "type": "naturesaura:altar",
    "input": {
        "item": "item"
    },
    "output": {
        "item": "item"
    },
    "aura_type": "naturesaura:overworld",// "aura_type": "naturesaura:nether",
    "catalyst": {
        "item": "item"
    },
    "aura": value,
    "time": value
}
