/*  
    copyright：854342681 
    reference resources:
    https://discord.com/channels/303440391124942858/1048591172165189632/threads/1065178370423398420  By Quentin76(ping me)
    https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/particle
    https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/playsound

    minecraft 1.18.2 forge

    Function: To achieve multi block structure synthesis
Structure: X is empty, D is a mechanical powered storage platform
XXDXX
XXXXX
DXDXD
XXXXX
XXDXX
Formula:
Center input iron ingot 1
Input Stone 1 Around
Sand 1
Gold ingot 1
Diamond 1
Handheld item iron axe consumes durability of 10
*/

// Global variables are adjustable parameters of this script
var finder_dis = 2,
    speed = 0,
    arround_input = ['minecraft:stone','minecraft:sand','minecraft:gold_ingot','minecraft:diamond'],
    hand_item = 'minecraft:iron_axe',
    center_input = 'minecraft:iron_ingot',
    output = 'minecraft:apple'


// Trigger event input for loop particle effect command during ascent: (event, center item entity, set Y upper limit, timing variable, recipe item information)
function loop(e,item,y,tick,block_info) {
    if (item.y < y) {
        // Delay 1 tick trigger to prevent game from getting stuck
        e.server.scheduleInTicks(1,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:item ${item.item.id} ${item.x} ${item.y + 0.05} ${item.z} 0 0 0 ${speed} 20 force`)
            speed += 0.008
            tick ++
            for (var find_item in block_info) {

                // Calculate the relative coordinates between the formula item and the central item
                let offset = {
                        x: item.x - block_info[find_item][0],
                        y: item.y - block_info[find_item][1],
                        z: item.z - block_info[find_item][2],
                    },
                    newz = block_info[find_item][2],
                    newx = block_info[find_item][0];

                // Changing particle trajectory based on geometric functions
                if (Math.abs(offset.x) == 0){
                    newz = block_info[find_item][2] + offset.y * Math.sign(offset.z)   // Math.sqrt(3) * offset.y * Math.sign(offset.z)
                } else if (Math.abs(offset.z) == 0){
                    newx = block_info[find_item][0] + offset.y * Math.sign(offset.x)   // Math.sqrt(3) * offset.y * Math.sign(offset.z)
                }

                let x = find_item

                // Delay 1 tick trigger to prevent game from getting stuck
                e.server.scheduleInTicks(1, e, callback => {
                    e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:item ${x} ${newx} ${item.y + 0.5} ${newz} 0 0 0 0 20 force`)
                })

                // Update the coordinates of the central item entity
                block_info[find_item][0] = newx
                block_info[find_item][1] = item.y
                block_info[find_item][2] = newz
            }

            // Enter next cycle
            loop(e,item,y,tick,block_info)
        })
    } else {

        // Exit the loop after reaching the specified height
        item.motionY = 0
        for (var i in block_info) {
            block_info[i][3].kill()
        }
        enchant(e,item,tick-75)

        // Delay 4tick trigger
        e.server.scheduleInTicks(4,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:enchant ${e.block.x} ${e.block.y + 2} ${e.block.z} 0 0 0 1 300 force`)
        })

        speed = 0
    }
}

// Trigger synthesis to complete the particle effect and cause the item to fall. Input: (event, central item entity, timing variable)
function enchant(e,item,tick) {
    for (;tick < 20; tick++) {
        
        // Delayed by 5 ticks triggered
        e.server.scheduleInTicks(5,e,callback => {
            e.server.runCommandSilent(`execute in ${e.level.dimension} run particle minecraft:soul ${item.x} ${item.y} ${item.z} 0 0 0 1 10 force`)
            e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:entity.experience_orb.pickup ambient @p ${itemEntity.x} ${itemEntity.y} ${itemEntity.z}`)
        })

    }
    let out = e.block.createEntity('item')
    out.item = output   // Output items
    out.x = item.x
    out.y = item.y
    out.z = item.z
    out.item.count = 1
    out.setPickupDelay(50)
    out.noGravity = false
    item.kill()
    out.spawn()
}

// Search for surrounding storage platforms, store items in the storage platform, and coordinate the storage platform. Input: (event, formula item information) Output: formula item information
function finder(e,block_info) {
    for (var i = -2; i <= finder_dis; i++) {
        for (var o = -2; o <= finder_dis; o++) {
            let find_block = e.block.offset(i, 0, o)
            if (find_block.id == 'create:depot' & i + o !== 0) {
                block_info[find_block.inventory.get(0).id] = [find_block.x + 0.5, find_block.y + 0.8, find_block.z + 0.5]   // block_info = {Item ID: Coordinates of the storage platform where the item is located}
                find_block.inventory.extract(0,1,false)
            }   
        }
    }
    return block_info
}

// Create an item entity for each recipe item Input: (Event, Recipe Item Information) Output: Recipe Item Information
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
            e.block.inventory.extract(0,1,false)    // Remove 1 item from the corresponding position in the block inventory

            // When the deviation distance is less than 1, it will result in an uncontrollable initial velocity when the entity and the block are squeezed together
            itemEntity.y+=1        
            itemEntity.x+=0.5
            itemEntity.z+=0.5


            itemEntity.item = item
            itemEntity.item.count = 1
            itemEntity.setPickupDelay(6000)     // Pick delay to prevent accidental picking in the composite image from causing errors
            itemEntity.noGravity = true
            itemEntity.spawn()
            var disy = itemEntity.y + 2
            block_info = fly(e,block_info)

            // Delay triggering by 10 ticks
            e.server.scheduleInTicks(10,e,callback => {
                e.server.runCommandSilent(`execute in ${e.level.dimension} run playsound minecraft:block.beacon.activate ambient @p ${itemEntity.x} ${itemEntity.y} ${itemEntity.z}`)

                // Assign movement speed on three coordinate axes to each recipe item
                for (var i in block_info) {
                    let find_item = i,
                        tmp = block_info[find_item][3]
                    tmp.motionY = (disy - tmp.y ) / 40
                    tmp.motionX = (itemEntity.x - tmp.x) / 40
                    tmp.motionZ = (itemEntity.z - tmp.z) / 40 
                }

                // Give the central item entity a Y-axis movement speed
                itemEntity.motionY = 0.05
                loop(e,itemEntity,disy,0,block_info)
            })
            
        }
    }
})

