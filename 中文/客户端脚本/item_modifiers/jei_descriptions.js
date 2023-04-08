/*onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['createaddition:overcharged_alloy'],
            text: ['不要尝试用自然祭坛去制作它，否则你会后悔的']
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                // This works but doesn't provide color in JEI text.
                // I just made it like this to be easily copied from tooltips script
                Text.of('Disabled in Expert Mode.').red(),
                Text.of('Liquid Meat can be obtained by "processing" cows.').color('#6e2a2a'),
                Text.of('Pink Slime can be harvested from a Pink Wither using a Fluid Laser.').color('#da07e6')
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    const disabledItems = [
        'items'
    ];
    disabledItems.forEach((item) => {
        event.add(
            item,
            "text"
        );
    });
});
*/