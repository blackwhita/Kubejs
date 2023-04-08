onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('item', value),//Input item, quantity
            pattern: ['B___B', '_CDC_', '_EAE_', '_FGF_', 'B___B'],
            key: {
                A: { type }
            },
            altar_type: 1,
            duration: value,//Time Used
            starlight: value,//Stellar energy Maximum 2000
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
  "altar_type": 1,
  "duration": value,
  "starlight": value,
  "pattern": [
    "A___A",
    "_AAA_",
    "_AAA_",
    "_AAA_",
    "A___A"
  ],
  "key": {
    "A": {
      "tag": "tag"
    }
  },
  "recipe_class": "astralsorcery:constellation_upgrade",
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
