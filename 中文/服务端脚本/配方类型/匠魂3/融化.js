onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredient: { item: 'item' },//输入物品
            result: { fluid: 'fluid', amount: value },//融化出的流体，流体量
            temperature: value,//所需温度
            time: value,//所需时间
            id: `materialis:smeltery/melting/metal/tools/iesnium/iesnium_pickaxe`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
