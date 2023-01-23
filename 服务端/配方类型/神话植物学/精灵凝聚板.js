onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                { tag: 'tag' },
                { item: 'item' }
            ],
            output: { item: 'item' },//输出物品
            mana: value,//所需魔力
            fromColor: parseInt('color'),//来源颜色
            toColor: parseInt('color'),//聚合颜色
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'mythicbotany:infusion',
                group: 'infuser',
                ingredients: recipe.inputs,
                output: recipe.output,
                mana: recipe.mana,
                fromColor: recipe.fromColor,
                toColor: recipe.toColor
            })
            .id(recipe.id);
    });
});
