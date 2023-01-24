onEvent('recipes', (event) => {
    const recipes= [
        { 
            fluid: Fluid.of('fluid', value),//输入流体，输入量
            energy: value, //输出能量
            id: 'id'
        }
    ]
    recipes.forEach((recipe) => {
            event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy).id(recipe.id)
    });
});
