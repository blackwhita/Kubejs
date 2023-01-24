onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredients: [//输入物品，最多8种
                'item'
            ],
            output: 'item',//输出物品
            time: value,//所需时间
            sapling: 'tree',//所需树苗
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe).id(recipe.id);
    });
});
