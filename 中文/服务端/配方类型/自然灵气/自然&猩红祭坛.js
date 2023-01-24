onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: { item: 'item', count: value },//输出物品，输出量
            aura_type: 'aura_type',//祭坛类型
            aura: value,//所需灵气
            time: value,//所需时间
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
