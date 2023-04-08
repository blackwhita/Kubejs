onEvent('recipes', (event) => {
    recipes = [
        {
            group: 'rune_rituals',//Set a group name
            center: { item: 'item' },//Core item
            runes: [//The items to be placed need to be defined at positions x, z
                { item: 'item', pos: { x: value, z: value } },
                { item: 'tag', pos: { x: value, z: value } },
            ],
            consume_runes: false,//whether or not consume Rune
            mana: value,//Desired mana
            ticks: value,//Required time
            inputs: [//Items that need to be discarded 
                'item'
            ],
            outputs: ['item'],//Output items
            special_input: 'entity',//Sacrificial entity
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
