onEvent('item.right_click', event => {
    if(event.player.crouching == true && event.item.id == "item"){
        event.cancel();// 取消该事件
    }
})
&&
onEvent('block.right_click', event => {
    if(event.player.crouching == true && event.item.id == "item"){
        event.cancel();// 取消该事件
    }
})
