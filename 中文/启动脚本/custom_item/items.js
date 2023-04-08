//1.16.5
//这个是我做的一个创建物品的例子
onEvent('item.registry', event => {
    event.create('avaritia:akashic_record').displayName('akashic_record').tooltip('by').texture('avaritia:items/akashic_record')
})
//其中item代表你在游戏中获取的该物品的id，当然你可以在前面加上模组名例如create("xnet:apple")/create("apple")显示游戏内id分别为xnet:apple和kubejs:apple
//displayName代表物品在游戏中显示的名称，如果不加可能会出现item.{mod}.{item.name}这种名称,如果你想要在不同语言下用不同名称，请在assets/lang文件夹下做翻译
//tooltip代表你在物品下面加的提示
//texture表示材质路径，当然如果你的材质不在kubejs文件夹下,例如我的文件目录在kubejs\assets\avaritia\textures\items\akashic_record.png,
