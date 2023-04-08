onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'block',//Block before conversion
            output: 'block',//Blocks before conversion Blocks after conversion
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredient =
            recipe.input.charAt(0) == '#'
                ? { type: 'tag', tag: recipe.input.slice(1) }
                : { type: 'block', block: recipe.input };

        const re = event.custom({
            type: 'botania:pure_daisy',
            input: ingredient,
            output: { name: recipe.output }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
//
{
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",//tag//fluid
    "block": "blcok"
  },
  "output": {
    "name": "item"
  }
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.botania.pure_daisy("output", "input", value)
