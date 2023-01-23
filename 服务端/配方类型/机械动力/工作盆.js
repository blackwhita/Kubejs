onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            inputs: ['item','item'],//输入物品
            heated: true,//是否加热//surperheated:true
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated().id(recipe.id);
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated().id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
