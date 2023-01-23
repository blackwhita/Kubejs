onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: ['item', 'item','item','item','item','item',],//输入物品
            output: 'item',//输出物品
            count: value,//输出物品数量
            cookingTime: value,//制作时间
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = { item: recipe.output, count: recipe.count };
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
