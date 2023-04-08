onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('item', value),//Input item, quantity
            pattern: ['AAAAA','AAAAA','AAAAA','AAAAA','AAAAA'],
            key: {
                A: { type }
            },
            relay_inputs: [//extra Input item
                { type }
            ],
            altar_type: 3,
            duration: value,//Time Used
            starlight: value,//Stellar energy Maximum 8000
            focus_constellation: 'constellation',//Required constellation//Negligible
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
  "altar_type": 3,
  "duration": value,
  "starlight": value,
  "pattern": [
    "AAAAA",
    "AAAAA",
    "AAAAA",
    "AAAAA",
    "AAAAA",
  ],
  "key": {
    "A": {
      "tag": tag"
    }
  },
  "recipe_class": "astralsorcery:constellation_base_nbt_copy",
  "output": [
    {
      "item": "item",
      "count": value
    }
  ],
  "options": {//?
    "copy_nbt_from_items_matching": [
      {
        "item": "item"
      }
    ],
    "constellation": "constellation"
  },
  "focus_constellation": "focus_constellation",
  "relay_inputs": [
    {
      "tag": "tag"
    },
    {
      "item": "item"
    }
  ],
  "effects": [
    "effects"
  ]
}
