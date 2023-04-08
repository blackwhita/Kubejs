onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredients: [//Input item
                { tag: 'tag' },
                { item: 'item' }
            ],
            energy: value,//Required energy
            result: {//Output items，Output quantity
                item: 'item',
                count: value
            },
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
//
onEvent('recipes', (event) => {
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          {"item": "item"},
          {"tag": "tag"}
        ],
        "energy": value,
        "result": {
          "item": "item"
        }
      }).id("id")
      
});
