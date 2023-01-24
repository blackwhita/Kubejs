onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//输入流体，输入量
                output: { item: 'item' },//输出物品
                max_temp: value,//最大温度
                bonus_output: { multiplier: value, limit:  value },//额外输出，倍率，限制最大量
                id: 'id'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:heat_frame_cooling',
                input: recipe.input,
                max_temp: recipe.max_temp,
                result: recipe.output,
                bonus_output: recipe.bonus_output
            })
            .id(recipe.id);
    });
});
