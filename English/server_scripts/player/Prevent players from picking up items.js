onEvent("item.pickup", event => {// 监听item.pickup事件
    if(event.item.id == "item" ){// 判断物品
        // 判断通过则取消事件防止被捡起
        event.cancel();
    }
})
