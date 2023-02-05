//这个是我在做1.19.2的整合包时引入EE材质时的一部分代码
const emendatusenigmatica_metal = [
    'aluminum',
    'iridium',
    'lead',
    'nickel',
    'platinum'
  ]//自定义数组 const是常见的前缀不能变，emendatusenigmatica_metal是数组的名称可变
const emendatusenigmatica_vanilla = [
    'coal',
    'copper'
]//规定特殊数组
const emendatusenigmatica = [
    { name: 'aluminum', tpye: 'metal' },
    { name: 'iridium', tpye: 'metal' },
    { name: 'lead', tpye: 'metal' },
    { name: 'nickel', tpye: 'metal' },
    { name: 'platinum', tpye: 'metal' },
    { name: 'coal', tpye: 'vanilla' },
    { name: 'copper', tpye: 'vanilla' }
  ]//规定统一数组
StartupEvents.registry('item', event => {
  emendatusenigmatica.forEach((item) => {//用统一数组进行批量
      event.create(`emendatusenigmatica:${item.name}_dust`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_dust`);
      event.create(`emendatusenigmatica:${item.name}_gear`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_gear`);
      event.create(`emendatusenigmatica:${item.name}_plate`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_plate`);
  });//批量自定义相同的物品，省去大量代码，同时使代码更加美观
  emendatusenigmatica_metal.forEach((e) => {//用特殊数组进行批量
        event.create(`emendatusenigmatica:${e}_ingot`).texture(`emendatusenigmatica:metal/${e}/items/${e}_ingot`);
        event.create(`emendatusenigmatica:${e}_dirty_dust`).texture(`emendatusenigmatica:metal/${e}/items/${e}_dirty_dust`);
    });//不同物品差别讨论，例如coal并没有coal_dirty_dust
  //`` 和""还有''的差别是:  ``是能添加变量的""和''无视变量全部视为一个字符串
  // 第二个是我为EE这些物品添加tag的时候写的（具体讲解见 服务端/tags ）
  const emendatusenigmatica_items = [
    'aluminum',
    'iridium',
    'lead',
    'nickel',
    'platinum',
    'silver',
  ]//规定材料数组
  const emendatusenigmatica_type = [
        'block',
        'raw',
        'dust',
        'gear'
    ]//规定材料类型
  emendatusenigmatica_type.forEach((type) => {
        emendatusenigmatica_items.forEach((item) => {
            if(!Item.exists(`emendatusenigmatica:${item}_${type}`)) {//判定如果物品`emendatusenigmatica:${item}_${type}`不存在时返回//Item.exists()可以判定物品是否存在,!代表不的意思
            return//return代表如果不存在则跳出这个循环，并不在参与
            }else if (type == 'block'){//如果存在，并且类型为block就执行下面的代码
                event.add(`forge:storage_${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:storage_${type}s`, [`emendatusenigmatica:${item}_${type}`])
            }else if ( type == 'raw' ){//如果存在，并且类型为raw就执行下面的代码
                event.add(`forge:${type}_materials/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:${type}_materials`, [`emendatusenigmatica:${item}_${type}`])
            }else{//如果存在，且类型不是raw,和block，就执行下面的代码
                event.add(`forge:${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:${type}s`, [`emendatusenigmatica:${item}_${type}`])
            }
        });//使用if类型的的时候可以判定物品的值，并要求执行你想要的函数
    });
