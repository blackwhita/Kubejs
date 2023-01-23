onEvent('recipes', (event) => {
    const recipes = [
        {
            itemInput: { amount: value, ingredient: { item: 'item' } },//输入量，输入物品
            fluidInput: { amount: value, tfluid: 'fluid' },//输入量，输入流体
            gasInput: { amount: value, gas: 'gas' },//输入量，输入气体
            energyRequired: value,//消耗能量
            duration: value,//所需时间
            itemOutput: { item: 'item' },//输出物品
            gasOutput: { gas: 'gas', amount: value },//输出气体，输出量
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
