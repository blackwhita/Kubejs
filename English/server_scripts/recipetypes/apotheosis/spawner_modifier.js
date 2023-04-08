onEvent('recipes', (event) => {
    const recipes = [
        {
            mainhand: { item: 'item' },//Main item
            offhand: { item: 'item' },//Secondary item (opposite effect)
            consumes_offhand: false,//Whether to consume (true/false)
            stat_changes: [
                {
                    id: 'mod_id',//Modify attribute id defined by mod
                    value: 2,//值
                    min: -1,//Minimum range/monster amount
                    max: 10//Maximum range/monster amount
                }
            ],
            id: 'id'
        },
        {
            ...events,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:spawner_modifier';
        recipe.conditions = [{ type: 'apotheosis:module', module: 'spawner' }];//module:Modify Type,
        event.custom(recipe).id(recipe.id);
    });
});
//
{
    "type": "apotheosis:spawner_modifier",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "spawner"
        }],
            "mainhand": {
        "item": "item"
    },
    "offhand": {
        "item": "item"
    },
    "consumes_offhand": true / false,
        "stat_changes": [{
            "id": "mod_id",
            "value": true / false
        }]
}
