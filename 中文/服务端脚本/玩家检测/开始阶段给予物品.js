// 监听玩家登录事件 player.logged_in
onEvent('player.logged_in', event => {
  // 检测玩家是否有starting_items阶段
  if (!event.player.stages.has('starting_items')) {
    // 没有则添加该阶段
    event.player.stages.add('starting_items')
    // 给予玩家初始物品
    event.player.give('minecraft:stone_sword')
    event.player.give(Item.of('minecraft:stone_pickaxe', "{Damage: 10}"))
    event.player.give('30x minecraft:apple')
  }
})//1.16.5
