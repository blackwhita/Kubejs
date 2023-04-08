onEvent('recipes', (event) => {
    const recipes = [
        {
            entity: { type: 'entity' },
            result: { fluid: 'fluid', amount: value },
            damage: value,//Every damage to an entity
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:entity_melting';
        event.custom(recipe).id(recipe.id);
    });
});
