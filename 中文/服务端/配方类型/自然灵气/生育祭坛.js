onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品，最多4种
                'item'
            ],
            entity: 'entity',//召唤实体
            aura: value,//所需灵气
            time: value,//所需时间
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
