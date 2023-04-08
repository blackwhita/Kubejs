onEvent('recipes', (event) => {
    const recipes = [
        {
            result: { item: 'item' },//Output items
            resultfluid: { fluid: 'fluid', amount: value },//Output fluid，Output quantity
            input: {//Input item，import quantity
                base_ingredient: { item: 'item' },
                count: value
            },
            inputfluid: { fluid: 'fluid', amount: value },//Input fluid，Input quantity
            time: value,//Required time
            energy: value,//Required energy
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "immersivepetroleum:coker",
  "result": {
    "item": "item"
  },
  "resultfluid": {
    "tag": "tag",
    "amount": value
  },
  "input": {
    "count": value,
    "base_ingredient": {
      "tag": "tag"
    }
  },
  "inputfluid": {
    "tag": "tag",
    "amount": value
  },
  "time": value,
  "energy": value
}
