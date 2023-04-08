onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输入物品
            output: 'item',//输出物品
            syphon: value,//消耗LP
            altarLevel: value,//祭坛等级
            consumptionRate: value,//LP消耗率（速度）
            drainRate: value,//LP流失率
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
