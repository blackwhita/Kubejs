onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { count: value, base_ingredient: { item: 'item' } },//输入物品数量，输入物品id
                { tag: 'tag' }
            ],
            category: 'category',//蓝图类型
            output: {//输出物品id，输出物品数量
                item: 'item',
                count: value
            },
            id: 'id'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
//
{
    "type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"item"},
        {"tag":"tag"}],
    "category":"category",
    "result":{"item":"item"}
}
