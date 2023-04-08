onEvent('server.datapack.high_priority', (event) => {
	let enchantingBlocks = [];//Create List

	bookshelves.forEach((bookshelf) => {
		enchantingBlocks.push({
			block: bookshelf,
			stats: {
				maxEterna: value,//maximum 50
				eterna: value,//Maximum 50,             // Enchanting Level
				quanta: value,//Maximum 100,            // Increases variability
				arcana: value,//Maximum 100,            // Increases Rarity
				clues: value,//Maximum useful range 10
				rectification: value,//Maximum 100      // Reduces variance from Quanta
			}
		});
	});

	//events

	enchantingBlocks.forEach((enchantingBlock) => {
		event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.block.replace(':', '_')}.json`, enchantingBlock);
	});
});
//
{
	"type": "apotheosis:keep_nbt_enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
			"input": {
		"item": "item"
	},
	"requirements": {
		"eterna": value,
			"quanta": value,
				"arcana": value
	},
	"max_requirements": {
		"eterna": value,
			"quanta": value,
				"arcana": value
	},
	"result": {
		"item": "item",
			"count": value
	}
}
