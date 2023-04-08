onEvent('recipes', (event) => {
    const recipes = [
        {
            results: [//Output fluid，Output quantity
                { fluid: 'fluid', amount: value },
                { fluid: 'fluid', amount: value }
            ],
            byproducts: [{ item: 'item' }],//Output by-product items
            input: { fluid: 'fluid', amount: value },//Input fluid，Input quantity
            time: value,//Required time
            energy: value,//Required energy
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "immersivepetroleum:distillation",
  "byproducts": [
    {
      "item": "item",
      "chance": "value"
    }
  ],
  "results": [
    {
      "fluid": "fluid",
      "amount": value
    }
  ],
  "input": {
    "tag": "tag",
    "amount": value
  },
  "time": value,
  "energy": value
}
