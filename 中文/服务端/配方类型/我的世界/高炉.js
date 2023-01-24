onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'item',//输出物品
            xp: value,//输出经验
            id: 'id'
        },
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
