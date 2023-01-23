onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            addedInput: 'item',//二次输入物品
            output: 'item',//输出物品
            texture: 'bindinglightningarray',//材质
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .array(recipe.output, recipe.input, recipe.addedInput)
            .texture(`bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`)
            .id(recipe.id);
    });
});
