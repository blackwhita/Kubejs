// 最小及最大坐标
const minX = 1000;
const minZ = 1000;
const maxX = 10000;
const maxZ = 10000;
const minY = 100;
const maxY = 200;
// 是否随机取负值
const reverseNumber = true;

// 返回随机数
function getNumber(min,max){
    let randNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(Math.random() > 0.5 && reverseNumber){
        randNumber = -randNumber;
    }
    return randNumber;
}

// 监听聊天事件，如果内容为 "!rtp" 就随机传送并给予缓降效果
onEvent('player.chat',function (event){
    let input = event.message.trim();
    if(input == "!rtp"){
        event.player.setPosition(getNumber(minX,maxX), Math.abs(getNumber(minY,maxY)), getNumber(minZ,maxZ));// 设置坐标
        event.player.statusMessage = `已将你传送到 x: ${event.player.x} y: ${event.player.y} z: ${event.player.z}`;// 玩家状态栏显示文字
        event.player.potionEffects.add('minecraft:slow_falling', 600, 10, false, false);// 给予缓降效果
        /**
         * EntityPotionEffectsJS支持以下函数
         * .clear() 清除药水效果
         * .getActive() 返回具有的效果
         * .isActive(MobEffect 效果) 返回是否具有给定效果
         * .getDuration(MobEffect 效果) 返回给定效果剩余时间
         * .add(MobEffect 效果, 整形 持续时间(tick), 整形 等级, 布尔值 是否为信标产生, 布尔值 是否显示粒子)
         *     其中后三项，后两项，后一项均可省略不写，默认值对应为0，false, true. 
         * .isApplicable(MobEffect 效果) 返回给定效果是否能应用于当前实体上
         */
        event.cancel();// 取消该事件，也就是说玩家发送的消息不会显示在其他玩家的公屏上
    }
})
/**
 * 另一种写法：监听物品右键事件，如果物品id为钻石则消耗一个钻石随机传送并冷却100秒
 * 此处钻石可以替换为你想使用的物品
 * 注：重进世界会刷新冷却时间
 */
onEvent('item.right_click',function (event){
    if(event.player.mainHandItem.id == "minecraft:diamond"){
        event.player.setPosition(getNumber(minX,maxX), Math.abs(getNumber(minY,maxY)), getNumber(minZ,maxZ));
        event.player.statusMessage = `已将你传送到 x: ${event.player.x} y: ${event.player.y} z: ${event.player.z}`;
        event.player.potionEffects.add('minecraft:slow_falling', 600, 10, false, false);
        // 钻石数量减一
        event.item.count--;
        event.player.addItemCooldown('minecraft:diamond', 2000);
    }
})
