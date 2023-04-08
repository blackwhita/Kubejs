/*onEvent('jei.remove.recipes', (event) => {
    recipesToHide.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove('item', [id]);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.remove('item', [id]);
                } catch (err) {
                    // do nothing
                }
            }
            console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });
});*/
