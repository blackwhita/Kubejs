onEvent('recipes', (event) => {
    const recipes = [
        {
            fluid: 'fluid',//流体//block
            temperature: value,//fluid的天然热量,会基于此加热/冷却事物
            thermalResistance: value,//传递热量的速度
            transformCold: { block: 'block' },//过冷时转化
            transformHot: { block: 'block' },//过热时转化
            heatCapacity: value,//在转化前传递的热量
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
