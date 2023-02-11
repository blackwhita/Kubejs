/*  
    copyright：854342681 
    参考：
    https://discord.com/channels/303440391124942858/1048591172165189632/threads/1065178370423398420  By Quentin76(ping me)
    https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/particle
    https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/playsound

    minecraft 1.18.2 forge

    作用：实现多方块结构合成
    结构: X为空，D为机械动力的置物台   
        XXDXX
        XXXXX
        DXDXD
        XXXXX
        XXDXX
    配方：  
        中心输入 铁锭    1
        四周输入 石头    1
                沙子    1
                金锭    1
                钻石    1
        手持物品 铁斧   消耗耐久 10
*/

// 全局变量 即本脚本可调参数
var finder_dis = 2,
    speed = 0,
    arround_input = ['minecraft:stone','minecraft:sand','minecraft:gold_ingot','minecraft:diamond'],
    hand_item = 'minecraft:iron_axe',
    center_input = 'minecraft:iron_ingot',
    output = 'minecraft:apple'


// 在上升时循环粒子效果指令触发事件 输入：（事件，中心物品实体，设定Y上限，计时变量，配方物品信息）
function loop(e,item,y,tick,block_info) {
    if (item.y < y) {
        // 延迟1tick触发，防止游戏卡死
        e.server.scheduleInTicks(1,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:item ${item.item.id} ${item.x} ${item.y + 0.05} ${item.z} 0 0 0 ${speed} 20 force`)
            speed += 0.008
            tick ++
            for (var find_item in block_info) {

                // 计算配方物品与中心物品的相对坐标
                let offset = {
                        x: item.x - block_info[find_item][0],
                        y: item.y - block_info[find_item][1],
                        z: item.z - block_info[find_item][2],
                    },
                    newz = block_info[find_item][2],
                    newx = block_info[find_item][0];

                // 根据几何函数改变粒子运行轨迹
                if (Math.abs(offset.x) == 0){
                    newz = block_info[find_item][2] + offset.y * Math.sign(offset.z)   // Math.sqrt(3) * offset.y * Math.sign(offset.z)
                } else if (Math.abs(offset.z) == 0){
                    newx = block_info[find_item][0] + offset.y * Math.sign(offset.x)   // Math.sqrt(3) * offset.y * Math.sign(offset.z)
                }

                let x = find_item

                // 延迟1tick触发，防止游戏卡死
                e.server.scheduleInTicks(1, e, callback => {
                    e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:item ${x} ${newx} ${item.y + 0.5} ${newz} 0 0 0 0 20 force`)
                })

                // 更新中心物品实体的坐标
                block_info[find_item][0] = newx
                block_info[find_item][1] = item.y
                block_info[find_item][2] = newz
            }

            // 进入下次循环
            loop(e,item,y,tick,block_info)
        })
    } else {

        // 到达指定高度后退出循环
        item.motionY = 0
        for (var i in block_info) {
            block_info[i][3].kill()
        }
        enchant(e,item,tick-75)

        // 延迟4tick触发
        e.server.scheduleInTicks(4,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:enchant ${e.block.x} ${e.block.y + 2} ${e.block.z} 0 0 0 1 300 force`)
        })

        speed = 0
    }
}

// 触发合成完成粒子效果，并使物品下落 输入：（事件，中心物品实体，计时变量）
function enchant(e,item,tick) {
    for (;tick < 20; tick++) {
        
        // 延迟5tick触发
        e.server.scheduleInTicks(5,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:soul ${item.x} ${item.y} ${item.z} 0 0 0 1 10 force`)
            e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:entity.experience_orb.pickup ambient @p ${itemEntity.x} ${itemEntity.y} ${itemEntity.z}`)
        })

    }
    let out = e.block.createEntity('item')
    out.item = output   // 输出物品
    out.x = item.x
    out.y = item.y
    out.z = item.z
    out.item.count = 1
    out.setPickupDelay(50)
    out.noGravity = false
    item.kill()
    out.spawn()
}

// 寻找周围置物台，并存储置物台中的物品及置物台的坐标 输入：（事件，配方物品信息） 输出：配方物品信息
function finder(e,block_info) {
    for (var i = -2; i <= finder_dis; i++) {
        for (var o = -2; o <= finder_dis; o++) {
            let find_block = e.block.offset(i, 0, o)
            if (find_block.id == 'create:depot' & i + o !== 0) {
                block_info[find_block.inventory.get(0).id] = [find_block.x + 0.5, find_block.y + 0.8, find_block.z + 0.5]   // block_info = {物品id:物品所在置物台坐标}
                find_block.inventory.extract(0,1,false)
            }   
        }
    }
    return block_info
}

// 为每个配方物品创建一个物品实体 输入：（事件，配方物品信息） 输出：配方物品信息
function fly(e,block_info) {
    for (var i in block_info) {
        let find_item = i
        block_info[find_item].push(e.block.createEntity('item'))
        let tmp = block_info[find_item][3]
        e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:block.stone.break ambient @p ${tmp.x} ${tmp.y} ${tmp.z}`)
        tmp.x = block_info[find_item][0]
        tmp.y = block_info[find_item][1] + 0.1
        tmp.z = block_info[find_item][2]
        tmp.item = find_item
        tmp.item.count = 1
        tmp.setPickupDelay(6000)
        tmp.noGravity = true
        tmp.spawn()
    }
    return block_info
}


onEvent('block.right_click', e => {
    if (e.player.getHeldItem(MAIN_HAND) == hand_item & e.block.id == 'create:depot' & e.block.inventory.get(0) == center_input) {
        e.cancel()
        e.player.damageHeldItem(MAIN_HAND,10)
        let block_info = {};
        block_info = finder(e,block_info)
        if (Object.keys(block_info).sort().join() == arround_input.sort().join()) {
            let item = e.block.inventory.get(0),
                itemEntity = e.block.createEntity('item');
            e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:entity.lightning_bolt.thunder ambient @p ${itemEntity.x} ${itemEntity.y} ${itemEntity.z}`)
            e.block.inventory.extract(0,1,false)    // 从方块库存对应位置中去除1个物品

            // 偏离距离少于1时会使实体与方块挤压获得一个不可控的初速度
            itemEntity.y+=1        
            itemEntity.x+=0.5
            itemEntity.z+=0.5


            itemEntity.item = item
            itemEntity.item.count = 1
            itemEntity.setPickupDelay(6000)     // 拾取延迟，防止合成图中被意外拾取造成错误
            itemEntity.noGravity = true
            itemEntity.spawn()
            var disy = itemEntity.y + 2
            block_info = fly(e,block_info)

            // 延迟10tick触发
            e.server.scheduleInTicks(10,e,callback => {
                e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:block.beacon.activate ambient @p ${itemEntity.x} ${itemEntity.y} ${itemEntity.z}`)

                // 为每个配方物品赋予在三个坐标轴上的移动速度
                for (var i in block_info) {
                    let find_item = i,
                        tmp = block_info[find_item][3]
                    tmp.motionY = (disy - tmp.y ) / 40
                    tmp.motionX = (itemEntity.x - tmp.x) / 40
                    tmp.motionZ = (itemEntity.z - tmp.z) / 40 
                }

                // 给予中心物品实体一个Y轴移速
                itemEntity.motionY = 0.05
                loop(e,itemEntity,disy,0,block_info)
            })
            
        }
    }
})

