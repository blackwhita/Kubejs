onEvent('jei.hide.items', (event) => {
    materials.forEach((material) => {
        types.forEach((type) => {
            itemsToHide.push(
                'immersiveengineering:' + material + '_' + type,
                'mekanism:' + material + '_' + type,
                'thermal:' + material + '_' + type,
                'create:' + material + '_' + type,
                'silentgems:' + material + '_' + type,
            );
        });
    });
    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
    //ae2
    event.hide(Item.of('ae2:facade').ignoreNBT());
    //colors
    //You can use it to hide all items with colors
    colors.forEach((color) => {
    });
});