onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { item: 'item', count: value },//输入物品，输入量
            output: { item: 'item', count: value },//输出物品，输出量
            program: 'program',//装配类型 
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
/*
program=(
    drill,
    laser
)
*/
//
{
  "type": "pneumaticcraft:assembly_laser",// "type": "pneumaticcraft:assembly_drill"
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "item": "item",
    "count": value
  },
  "result": {
    "item": "item",
    "count": value
  },
  "program": "program"
}
