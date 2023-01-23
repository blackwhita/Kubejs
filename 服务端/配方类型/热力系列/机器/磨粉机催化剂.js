onEvent('recipes', (event) => {
    const recipes = [
        {
            catalyst: 'item',//物品
            primaryMod: value,//主产物产出倍数
            secondaryMod: value,//副产物产出倍数
            energyMod: value,//能耗倍数
            minChance: value,//消耗几率
            useChance: value,//消耗几率
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .pulverizer_catalyst(recipe.catalyst)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
//https://www.mcmod.cn/item/451432.html
