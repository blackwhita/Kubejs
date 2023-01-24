onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('item', value),//输入物品,数量
            pattern: ['AAAAA','AAAAA','AAAAA','AAAAA','AAAAA'],
            key: {
                A: { type }
            },
            relay_inputs: [//额外输入物品
                { type }
            ],
            altar_type: 3,
            duration: value,//所用时间
            starlight: value,//星能 最大值8000
            focus_constellation: 'constellation',//所需星座//可以忽略
            effects: ['achievement'],//需要达成的成就 
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
