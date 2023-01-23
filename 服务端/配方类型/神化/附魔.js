onEvent('server.datapack.high_priority', (event) => {
    let enchantingBlocks = [];//创建列表

    bookshelves.forEach((bookshelf) => {
        enchantingBlocks.push({
            block: bookshelf,
            stats: {
                maxEterna: value,//最大50
                eterna: value,//最大值50,             // Enchanting Level
                quanta: value,//最大值100,            // Increases variability
                arcana: value,//最大值100,            // Increases Rarity
                clues: value,//最大有用范围10
                rectification: value,//最大值100      // Reduces variance from Quanta
            }
        });
    });

    //events

    enchantingBlocks.forEach((enchantingBlock) => {
        event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.block.replace(':', '_')}.json`, enchantingBlock);
    });
});
