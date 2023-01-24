onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Item.of('item'), Ingredient.of('die')],//输入物品，输入模具
            output: Item.of('item'),//输出物品
            energy: value,//所需能量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
