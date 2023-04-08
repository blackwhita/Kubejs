onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//Input item
            output: 'item',//Output items
            syphon: value,//consume LP
            altarLevel: value,//Altar level
            consumptionRate: value,//LPconsult rate (speed)
            drainRate: value,//LP loss rate
            id: 'id'
        },
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            .id(recipe.id);
    });
});
//
{
  "type": "bloodmagic:altar",
  "input": {
    "item": "item"
  },
  "output": {
    "item": "item"
  },
  "upgradeLevel": value,
  "altarSyphon": value,
  "consumptionRate": value,
  "drainRate": value
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.bloodmagic.altar(output, input).upgradeLevel(value).altarSyphon(value).consumptionRate(value).drainRate(value)
