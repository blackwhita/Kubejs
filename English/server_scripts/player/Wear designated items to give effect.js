onEvent("player.tick", event => {// 监听player.tick事件
    if(event.player.headArmorItem.id == "minecraft:netherite_helmet"){// 判断玩家头盔是不是下界合金头盔
        // 上述判断通过即给予玩家1 tick的缓慢I效果
        event.player.potionEffects.add("minecraft:slowness", 1, 1, false, false);
    }
})
