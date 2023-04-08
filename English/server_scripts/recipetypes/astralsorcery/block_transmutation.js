onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { block: 'block' },//Block before conversion
            output: { block: 'block' },//Block after conversion
            starlight: value,// consume Stellar energy
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe).id(recipe.id);
    });
});
//
{
  "type": "astralsorcery:block_transmutation",
  "input": [
    {
      "block": "block",
      "display": {
        "item": "item",
        "count": value
      }
    }
  ],
  "output": {
    "block": "block"
  },
  "display": {
    "item": "item",
    "count": value
  },
  "starlight": value
}
