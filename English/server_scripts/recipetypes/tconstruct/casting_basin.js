onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                fluid: 'fluid',//Inflow into fluid
                fluid_amount: value,//fluid  value
                casts: [{ item: 'item' }],//Casting basin placement item
                cast_consumed: true,//whether or not consume 
                output: 'item',//Form item
                cooling_time: value,//Solidification time
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
