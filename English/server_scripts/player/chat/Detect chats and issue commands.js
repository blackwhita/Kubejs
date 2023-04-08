onEvent('player.chat', function (event) {
  if (event.message.startsWith('test')) {
    event.server.runCommandSilent('kick '+event.player.name+' test ')
    event.server.runCommandSilent(`say 已踢出玩家${event.player.name}`)
    event.cancel()//聊天不显示
  }
})
