onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//Input item
                { tag: 'tag' },
                { item: 'item' }
            ],
            output: { item: 'item' },//Output items
            mana: value,//Desired mana
            fromColor: parseInt('color'),//Source Color
            toColor: parseInt('color'),//Aggregate Color
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
