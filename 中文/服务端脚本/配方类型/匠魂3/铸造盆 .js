onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                fluid: 'fluid',//流入流体
                fluid_amount: value,//流体量
                casts: [{ item: 'item' }],//铸造盆放置物品
                cast_consumed: true,//是否消耗
                output: 'item',//形成物品
                cooling_time: value,//凝固时间
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
