onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'item',//输出物品
            outputs: ['item'],//输出物品
            transitionalItem: 'item',//过度物品
            loops: value,//循环次数
            sequence: [//一次循环所经历的步骤
                {
                    type: 'type',//第一步处理类型
                    input: 'type_1',
                    output: 'taye_2'
                },
                {
                    type: 'type',//第二步处理类型
                    input: 'type_1',
                    output: 'taye_2'
                }
            ],
            id: 'id'
        }
    ];
    /*
    type: 'deploying',//机械手装配
    input: ['item_1', 'item_2'],//item_2是输入机械手的item_1是要装配的（原本物品）
    output: 'item'//输出物

    type: 'cutting',//切割
    input: item,//输入物品（原本物品）
    output: 'item'//输出物品
    processingTime:value//消耗时间

    type: 'filling',//灌注流体（未完善）
    input: Fluid.of('fluid', value),//输入流体id，输入流体量
    output: 'item'输出物品
    
    type: 'pressing',//挤压
    input: item,//输入物品（原本物品）
    output: 'item'//输出物品
    */
    //批量四步自定义循环次数装配
    let armorTypes = [
        {
            loops: value,
            armors: [
                {
                    base: 'item',//输出物品
                    material_1: 'item',//第一步装配物品
                    material_2: 'item',//第二步装配物品
                    material_3: 'item',//第三步装配物品
                    material_4: 'item',//第四部装配物品
                    result: 'item',//输出物品
                    id: 'id'
                },
                {
                    event
                }
            ]
        },
        {
            event
        }
    ];

    armorTypes.forEach((armorType) => {
        armorType.armors.forEach((armor) => {
            recipes.push({
                input: Ingredient.customNBT(
                    Item.of(armor.base, '{Damage:0}').weakNBT(),
                    (nbt) => !nbt.SequencedAssembly
                ),
                outputs: [armor.result],
                transitionalItem: armor.base,
                loops: armorType.loops,
                sequence: [
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_1],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_2],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_3],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_4],
                        output: armor.base
                    },
                ],
                id: armor.id
            });
        });
    });

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id);
    });
});
