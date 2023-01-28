onEvent('player.inventory.changed', e => {
    if(e.player.inventory.find('item') == -1) return
    if(e.player.tags.contains('item')) return
    e.player.tags.add('item')
})
