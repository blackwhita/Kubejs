onEvent('recipes', (event) => {
    const recipes = [
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//输入流体，输入量
            item_input: { item: 'item' },//输入物品
            fluid_output: { fluid: 'fluid', amount: value },//输入流体，输入量
            item_output: { item: 'item', count: value },//输出物品，输出量
            pressure: value,//压力值
            speed: value,//速度
            exothermic: false,//是否放热
            temperature: { min_temp: value },//最小温度//max_temp: value
            id: 'id'
        }
    ];


    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
