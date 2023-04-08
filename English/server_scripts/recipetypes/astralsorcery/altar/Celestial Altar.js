onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('item', value),//Input item, quantity
            pattern: ['AA_AA', 'AAAAA', '_AAA_', 'AAAAA', 'AA_AA'],
            key: {
                A: { type }
            },
            altar_type: 2,
            duration: value,//Time Used
            starlight: value,//Stellar energy Maximum 4000
            effects: ['achievement'],//Achievements to be achieved
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
//
{
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": value,
  "starlight": value,
  "pattern": [
    "AA_AA",
    "AAAAA",
    "_AAA_",
    "AA_AA",
    "AA_AA"
  ],
  "key": {
    "A": {
      "item": "item"
    }
  },
  "recipe_class": "astralsorcery:trait_upgrade",
  "output": [
    {
      "item": "item",
      "count": value
    }
  ],
  "effects": [
    "effects"
  ]
}
