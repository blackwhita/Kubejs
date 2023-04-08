onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredients: [//输入物品
                { tag: 'tag' },
                { item: 'item' }
            ],
            energy: value,//所需能量
            result: {//输出物品，输出量
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
