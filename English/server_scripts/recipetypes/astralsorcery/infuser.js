onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//consume item  
            fluid: 'fluid',//consume fluid id
            consumptionChance: 0.5,//consume fluid probability
            output: 'item',// Output items
            count: value,// quantity
            duration: value,//Required time
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'astralsorcery:infuser',
                fluidInput: recipe.fluid,
                input: Ingredient.of(recipe.input).toJson(),
                output: Item.of(recipe.output, recipe.count).toResultJson(),
                consumptionChance: recipe.consumptionChance,
                duration: recipe.duration,
                consumeMultipleFluids: false,//fluid whether or not consume 
                acceptChaliceInput: true,//whether or not accept Holy Grail Input
                copyNBTToOutputs: false//whether or not Output NBTitem
            })
            .id(recipe.id);
    });
});
//
{
  "type": "astralsorcery:infuser",
  "fluidInput": "fluid",
  "input": {
    "tag": "tag"
  },
  "output": {
    "item": "item",
    "count": value
  },
  "consumptionChance": value,
  "duration": value,
  "consumeMultipleFluids": true/false,
  "acceptChaliceInput": true/false,
  "copyNBTToOutputs": true/false
}
