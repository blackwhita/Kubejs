onEvent('player.chat',function (event){
    let input = event.message.trim();
    event.server.tell([Text.blue('rank').bold(), `<${event.player.name}> ${input}`]);
    event.cancel();
    }
})
rank=表示名称
