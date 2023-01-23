onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            pattern: ['AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA','AAAAAAA',],//合成表可以无限大
            key: {
                A: 'item',
            },
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
