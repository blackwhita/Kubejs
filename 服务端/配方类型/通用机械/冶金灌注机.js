onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            input: 'item',//输入物品
            infusionInput: 'fluid',//灌注流体
            infusionAmount: value,//灌注量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
/*
infusionInput(
    mekanism:redstone,
    mekanism:diamond,
    mekanism:refined_obsidian,
    mekanism:coal
    )
*/
