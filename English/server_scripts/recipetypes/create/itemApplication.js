onEvent('recipes', (event) => {
    const recipes = [
        {
            // 第一个import是被使用的方块，第二个import是使用的item  。
            // 第一个import如果有 quantity，则会替代第二个Input item，但依旧只要求一个，第二个import的 quantity，不会生效
            // 第一个import可以不为方块，如果这么做，则只能用机械手合成
            inputs: ['item','item'],
            // export可以有多个item  ，除第一个外，玩家右手合成时会以掉落物的方式生成。
            // 如果第一个不是可放置方块，则也会以掉落物方式生成。
            // export可以有 quantity。
            // 玩家右手合成时，第一个export如果是有 quantity的方块，则第一个export仍生成 1 个方块，如果是item  ，生成要求export quantity的掉落物。
            // 机械手合成时，无论第一个export是什么，都会生成对应export quantity的生成物。
            // 其余的export，无论是玩家右手合成还是机械手合成，都会生成对应export quantity的生成物(玩家右手合成时，都会以掉落物的方式生成)
            output: Item.of('item', value),//Output items 
            id: 'id'
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.itemApplication(recipe.output, recipe.inputs).id(recipe.id);
    });
});