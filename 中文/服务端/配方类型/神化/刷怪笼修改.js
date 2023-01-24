onEvent('recipes', (event) => {
    const recipes = [
        {
            mainhand: { item: 'item' },//主手物品
            offhand: { item: 'item' },//副手物品（相反效果）
            consumes_offhand: false,//是否消耗(true/false)
            stat_changes: [
                {
                    id: 'mod_id',//mod定义的修改属性id
                    value: 2,//值
                    min: -1,//最小范围/刷怪量
                    max: 10//最大范围/刷怪量
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
        recipe.conditions = [{ type: 'apotheosis:module', module: 'spawner' }];//module:修改类型,
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
	"consumes_offhand": true/false,
	"stat_changes": [{
		"id": "mod_id",
		"value": true/false
	}]
}
