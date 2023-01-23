onEvent('recipes', (event) => {
    const recipes = [
        {
            static: true,//是否出现在平板每日优惠中 
            input: { type: 'ITEM', id: 'item', amount: value },//输入物品，物品id，数量
            output: { type: 'ITEM', id: 'item', amount: value },//输出物品，物品id，数量
            level: value,//定义外观稀有度，1-5，0为关闭，1: 50%； 2: 25%； 3: 15%； 4: 7%； 5: 3%；
            maxStock: value,//最大存货量
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});
//https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152
