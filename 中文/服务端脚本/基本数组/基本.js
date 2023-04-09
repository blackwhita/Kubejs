//自定义air在接下来很有用
const air = 'minecraft:air';
//基本颜色
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];
//定义黑名单物品
const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};
//playerHas(item, player): 判断玩家是否拥有某个物品，包括参数如下：
//item：物品名称。
//player：玩家实例。