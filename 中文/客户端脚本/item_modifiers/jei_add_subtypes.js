onEvent('jei.subtypes', (event) => {
    /*
    /// regex to be supported next version. Can remove direct item calls then and just rely on the regex.
    const augmentItems = [
        /kubejs:\w+augment/,
    ];

    augmentItems.forEach((augmentItem) => {
        event.useNBTKey(augmentItem, 'AugmentData');
    });
    */

    event.useNBTKey('resourcefulbees:bee_jar', 'Entity');
});
