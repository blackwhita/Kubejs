onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [//输入物品
                { tag: 'tag', count: value },
                { item: 'item', count: value }
            ],
            pressure: value,//所需压力（可以为负数）
            results: [{ item: 'item', count: value }],//输出物品，输出量
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
//
{
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "tag": "tag"
    }
  ],
  "pressure": value,
  "results": [
    {
      "item": "item"
    }
  ]
}
