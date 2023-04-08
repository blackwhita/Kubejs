onEvent("player.tick", event => {// 监听player.tick事件
    if(event.player.creativeMode || event.player.creativeMode.spectator){// 判断玩家游戏模式（创造或观察者）
        // 上述判断通过即通过服务器静默执行指令将玩家调为生存模式
        event.server.runCommandSilent(`gamemode survival ${event.player.name}`);
    }
})
