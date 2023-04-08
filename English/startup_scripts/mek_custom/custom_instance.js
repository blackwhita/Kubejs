/*
	The original file is in the kubejs mekanism Github warehouse https://github.com/KubeJS-Mods/KubeJS-Mekanism/blob/1.18/main/run/kubejs/startup_scripts/test_script.js
*/
// Custom Gas
// registers a basic custom gas,
// as well as a radioactive gas with a reddish tint
onEvent('mekanism.gas.registry', event => {
	event.create("test")
	event.create("danger").color(0xCC5500).radioactivity(10)
})

// Custom slurry
// registers a dirty and a clean slurry, as well
// as a slurry with a "custom" texture
// note: recipes are not automatically generated!
onEvent('mekanism.slurry.registry', event => {
	event.create('test').texture('mekanism:slurry/dirty').color(0x42387F)

	event.create("dirty_kubium_slurry", "dirty").color(0xFCB95B).ore('forge:ores/kubium')
	event.create("clean_kubium_slurry", "clean").color(0xFCB95B).ore('forge:ores/kubium')
})


/*
	The original text is a response to a question post on the Discord # support channel
*/
// Custom perfusion type
onEvent('mekanism.infuse_type.registry', event => {
	event.create("test_infuse_type").color(16711688)
})

// Custom dye type
onEvent('mekanism.pigment.registry', event => {
	event.create('test').displayName('test').color(0xFFFFFF)
})