onEvent('recipes', (event) => {
    const recipes = [
        {
            itemInput: { amount: value, ingredient: { item: 'item' } },//Input quantity，Input item
            fluidInput: { amount: value, tfluid: 'fluid' },//Input quantity，Input fluid
            gasInput: { amount: value, gas: 'gas' },//Input quantity，import gas
            energyRequired: value,//consume  value
            duration: value,//Required time
            itemOutput: { item: 'item' },//Output items
            gasOutput: { gas: 'gas', amount: value },//export gas，Output quantity
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        event.custom(constructed_recipe).id(recipe.id);
    });
});
