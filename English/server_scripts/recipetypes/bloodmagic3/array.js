onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            addedInput: 'item',//secondary Input item
            output: 'item',//Output items
            texture: 'bindinglightningarray',//material quality
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .array(recipe.output, recipe.input, recipe.addedInput)
            .texture(`bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`)
            .id(recipe.id);
    });
});
//
{
  "type": "bloodmagic:array",
  "texture": "texture",
  "baseinput": {
    "item": "item"
  },
  "addedinput": {
    "item": "item"
  },
  "output": {
    "item": "item"
  }
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.bloodmagic.array(output, baseInput, addedInput).texture(texture)
