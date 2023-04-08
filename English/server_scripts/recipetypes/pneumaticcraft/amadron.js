onEvent('recipes', (event) => {
    const recipes = [
        {
            static: true,//whether or not Appearing in the tablet daily discount
            input: { type: 'ITEM', id: 'item', amount: value },//Input item，item  id， quantity
            output: { type: 'ITEM', id: 'item', amount: value },//Output items，item  id， quantity
            level: value,//Define appearance rarity, 1-5, 0 is off，1: 50%； 2: 25%； 3: 15%； 4: 7%； 5: 3%；
            maxStock: value,//Maximum inventory value
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});
//https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152
