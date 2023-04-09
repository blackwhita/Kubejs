//1.16.5
onEvent('block.registry', event => {
    event.create('blockcasing_plain').material('stone').hardness(2).displayName('结构方块')
})
//这个与物品有所不同的是用.textureALL()来加载图片材质（.png）他会将这个图片覆盖到方块的六个面，或者你也可以像我一样使用material模型，具体讲解在assets文件夹下
//其他的相同讲解在custom_item中的item.js下
