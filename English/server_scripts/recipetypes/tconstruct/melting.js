onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredient: { item: 'item' },//Input item
            result: { fluid: 'fluid', amount: value },//Melted fluid, fluid value
            temperature: value,//Required temperature
            time: value,//Required time
            id: `materialis:smeltery/melting/metal/tools/iesnium/iesnium_pickaxe`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
