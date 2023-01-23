onEvent('recipes', (event) => {
    const recipes = [
        {
            entity: { type: 'entity' },//实体
            result: { fluid: 'fluid', amount: value },//生成的流体，流体量
            damage: value,//每次对实体的伤害
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:entity_melting';
        event.custom(recipe).id(recipe.id);
    });
});
