//priority: 999
onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        //利用定义函数获得标签数组
        var ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        var gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
        var gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        //ingot 变量是通过调用 getPreferredItemInTag 函数从 #forge:ingots/${material} 这个 Tag 中获取一个优先级最高的物品，并将其 ID 存储在 ingot 变量中。
        //如果 material 变量的值是 "iron"，那么这个函数就会从 #forge:ingots/iron 这个 Tag 中获取一个优先级最高的物品，并将其 ID 存储在 ingot 变量中。这个过程是发生在 forEach 循环内部，对于不同的 material 值，都会执行一遍。
        //调用函数
        gear_unification(event, material, ingot, gem, gear)
    })
    //定义函数
    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {//如果没有齿轮则返回
            return;
        }
        event.remove({ output: gear });//先移除所有齿轮
        var output,//定义输入输出模具
            input,
            mold = 'immersiveengineering:mold_gear';
        if (Item.exists(`emendatusenigmatica:${material}_gear`)) {//判断是否存在所需材料
            output = `emendatusenigmatica:${material}_gear`
        } else {
            output = gear
        }
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        //批量写出合成
        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);//添加id
        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, Ingredient.of(`16x ${input}`), mold)
            .id(`immersiveengineering:metalpress/${material}_gear`);
        event
            .shaped(output, ['CAC', 'ABA', 'CAC'], {
                A: input,
                B: '#forge:plates/iron',
                C: '#forge:nuggets/aluminum'
            })
            .id(`ico:${material}_gear`);
    }
})
