onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'item',//输出物品
            input: 'item',//输入物品
            tool: '#bloodmagic:arc/reverter',//工具
            extraOutputs: [],//额外输出
            consume: true,
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume)
            .id(recipe.id);

        if (recipe.outputFluid) {
            re.outputFluid(recipe.outputFluid);
        }
    });
});
//
{
  "type": "bloodmagic:arc",
  "input": {
    "tag": "tag"
  },
  "tool": {
    "tag": "toolTag"
  },
  "addedoutput": [
    {
      "chance": value,
      "type": {
        "item": "item"
      }
    },
    {
      "chance": value,
      "type": {
        "item": "item"
      }
    }
  ],
  "output": {
    "item": "item"
  },
  "consumeingredient": true/false
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
event.recipes.bloodmagic.arc(output, input, tool, [addedOutput]).consumeIngredient(boolean).outputFluid(fluid)
