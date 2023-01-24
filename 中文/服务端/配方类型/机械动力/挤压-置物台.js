onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            inputs: ['item'],//输入物品
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
