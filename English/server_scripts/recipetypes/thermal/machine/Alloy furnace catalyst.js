onEvent('recipes', (event) => {
    const recipes = [
        {
            catalyst: 'item',//item  
            primaryMod: value,//Main product output multiple
            secondaryMod: value,//Byproducts output multiple
            energyMod: value,//Energy consumption multiple
            minChance: value,//consume probability
            useChance: value,//consume probability
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .smelter_catalyst(recipe.catalyst)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
