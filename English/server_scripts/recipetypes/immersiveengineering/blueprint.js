onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { count: value, base_ingredient: { item: 'item' } },//Input item quantity，Input itemid
                { tag: 'tag' }
            ],
            category: 'category',//Blueprint Type
            output: {//Output itemsid，Output items quantity
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
