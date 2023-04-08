/*
	原文件于kubejs mekanism Github仓库中 https://github.com/KubeJS-Mods/KubeJS-Mekanism/blob/1.18/main/run/kubejs/startup_scripts/test_script.js
*/
// 自定义气体
// registers a basic custom gas,
// as well as a radioactive gas with a reddish tint
onEvent('mekanism.gas.registry', event => {
	event.create("test")
	event.create("danger").color(0xCC5500).radioactivity(10)
})

// 自定义浆液
// registers a dirty and a clean slurry, as well
// as a slurry with a "custom" texture
// note: recipes are not automatically generated!
onEvent('mekanism.slurry.registry', event => {
	event.create('test').texture('mekanism:slurry/dirty').color(0x42387F)

	event.create("dirty_kubium_slurry", "dirty").color(0xFCB95B).ore('forge:ores/kubium')
	event.create("clean_kubium_slurry", "clean").color(0xFCB95B).ore('forge:ores/kubium')
})


/*
	原文为discord #support频道 中提问帖子的回复
*/
// 自定义灌注类型
onEvent('mekanism.infuse_type.registry', event => {
	event.create("test_infuse_type").color(16711688)
})

// 自定义染料类型
onEvent('mekanism.pigment.registry', event => {
	event.create('test').displayName('test').color(0xFFFFFF)
})