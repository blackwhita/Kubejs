onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'item',//输出物品
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});
