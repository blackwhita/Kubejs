// 物品白名单
const whitelist = Ingredient.matchAny([
    'minecraft:diamond', //单个物品
    'minecraft:gold_ingot',//单个物品
    '@tinkersconstruct', //mod物品示例
    'minecraft:emerald'
])
// 执行一次间隔（注：该值必须大于1）
const minutes = 30;

// ======================================

var lastResult = [];
var totalResult = [];
var lastItemCount = 0;
var totalItemCount = 0;


function clearLag(server){
    lastResult = [];
    lastItemCount = 0;
    server.getEntities("@e[type=item]").forEach(entity => {
        if (!whitelist.test(entity.item.id)){
            lastResult.push([entity.item.id, entity.item.count]);
            totalResult.push([entity.item.id, entity.item.count]);
            lastItemCount += entity.item.count;
            entity.kill();
        }
    });
    lastResult.sort();
    totalResult.sort();
    server.tell([Text.lightPurple('[扫地机器人]'), `本次共清除 ${lastItemCount} 个物品`]);
    server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
    server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
}

function countResult(result,event){
    if(result != []){
        result.forEach((singleResult, index) => {
        event.server.tell([Text.lightPurple(`第 ${index + 1} 项 `), `${singleResult[0]} , 个数为 ${singleResult[1]}`])
        })
    }
}

onEvent('server.load', function (event) {
    event.server.scheduleInTicks(100, event.server, function (callback0) {
        callback0.data.tell([Text.lightPurple('[扫地机器人]'), `加载成功，使用 !clearlag help 查看帮助`]);
    })
    event.server.schedule((minutes - 1) * MINUTE, event.server, function (callback1) {
        callback1.data.tell([Text.lightPurple('[扫地机器人]'), "1分钟后将清理地面掉落物"]);
        callback1.data.schedule(MINUTE, callback1.data, function(callback2) {
            clearLag(callback2.data);
        })
        callback1.reschedule();
    })
})

// 聊天事件，只有有OP权限的文件才能执行查询/扫地
onEvent('player.chat',function (event){
    let input = event.message.trim();
    switch (input) {
        case "!clearlag last":
            if (event.player.op){// 判断玩家权限
                countResult(lastResult,event);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
            }
            break;
        case "!clearlag total":
            if (event.player.op){
                countResult(totalResult,event);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
            }
            break;
        case "!clearlag help":
            event.player.tell([Text.lightPurple('[扫地机器人]'), "扫地机器人 by Wudji@mcbbbs.net. Powered by KubeJS"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag 立即清除掉落物"]);
            break;
        case "!clearlag":
            if (event.player.op){
                clearLag(event.server);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
            }
            break;
    }
})
