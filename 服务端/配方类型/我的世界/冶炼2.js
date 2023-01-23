onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: 'item',//输入物品1号位
            input2: 'item',//输入物品2号位
            output: 'item',//输出物品
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
