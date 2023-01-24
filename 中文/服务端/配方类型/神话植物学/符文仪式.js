onEvent('recipes', (event) => {
    recipes = [
        {
            group: 'rune_rituals',//设置一个组名 
            center: { item: 'item' },//核心物品
            runes: [//需要放置的物品，需要定义位置x,z
                { item: 'item', pos: { x: value, z: value } },
                { item: 'tag', pos: { x: value, z: value } },
            ],
            consume_runes: false,//是否消耗符文
            mana: value,//所需魔力
            ticks: value,//所需时间
            inputs: [//需要丢弃的物品
                'item'
            ],
            outputs: ['item'],//输出物品
            special_input: 'entity',//献祭实体
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let rune_inputs = [];

        recipe.runes.forEach((rune) => {
            rune_inputs.push({
                rune: Item.of(rune.item).toJson(),
                x: rune.pos.x,
                z: rune.pos.z,
                consume: recipe.consume_runes
            });
        });

        recipe.type = 'mythicbotany:rune_ritual';
        recipe.runes = rune_inputs;
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.outputs = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
