//函数来源NillerMedDild

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}
//shapedRecipe(result, pattern, key, id): 定义有形状的合成配方，包括参数如下：
//result：合成结果物品。
//pattern：合成表格，使用字符串数组表示。
//key：材料对应表格，使用对象来表示每个材料。
//id：合成配方的唯一 ID。


function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}
//shapelessRecipe(result, ingredients, id): 定义无形状的合成配方，包括参数如下：
//result：合成结果物品。
//ingredients：合成材料列表，使用字符串数组表示。
//id：合成配方的唯一 ID。


function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}
//返回一个对象，包含两个属性 material 和 type，分别表示要屏蔽的物品名称和类型。


function entryIsBlacklisted(material, type) {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}
//判断一个物品是否被屏蔽，
//如果被屏蔽，则返回 true，否则返回 false。
//该函数会先遍历 unificationBlacklist 列表中的所有屏蔽条目，如果找到对应的条目，就返回 true。
//如果遍历完所有条目都没有找到，则返回 false。


function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}
//tagIsEmpty(tag): 判断标签是否为空，包括参数如下：
//tag: 标签名称。


function getPreferredItemInTag(tag) {
    let pref =
        Utils
            .listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
}
//获取标签 tag 中首选的物品，并返回该物品的对象实例。
//这个函数会先将标签中的物品按照模组顺序排序，然后返回排序后的数组的第一个元素，
//如果标签中没有物品，则返回空气物品

function getItemsInTag(tag) {
    let items = Utils.listOf(tag.stacks).toArray();
    return items;
}
// 获取标签 tag 中的所有物品，并将它们封装到一个数组中返回。
//这个函数首先将 tag.stacks 转换成一个可迭代的对象，然后再将其转换为数组并返回

function compareIndices(a, b, tag) {
    if (a == b) return 0; 
    for (let mod of modPriorities) {
        if (mod == a) return -1; 
        if (mod == b) return 1; 
    }
    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}
//compareIndices(a, b, tag): 比较两个模组之间的顺序，用于统一化物品，包括参数如下：
//a：第一个模组名称。
//b：第二个模组名称。
//tag：标签名称。


function getStrippedLogFrom(logBlock) {
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
}
//getStrippedLogFrom(logBlock): 获取去皮木材方块对应的条木材方块，包括参数如下：
//logBlock：原木方块的名称。


function lowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}
//lowerTiers(tiers, tier): 获取低于指定等级的所有等级，包括参数如下：
//tiers：全部等级数组。
//tier：指定等级。


function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); //
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}
//fallback_id(recipe, id_prefix): 将配方中的唯一 ID 转换为添加前缀后的 MD5 值，包括参数如下：
//recipe：配方实例。
//id_prefix：ID 前缀。