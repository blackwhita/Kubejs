onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//Output items
            input: 'item',//Input item
            infusionInput: 'fluid',//infuse fluid 
            infusionAmount: value,//infuse value
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
