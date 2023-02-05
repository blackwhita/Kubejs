//1.16.5
onEvent("fluid.registry", (event) => {
    event
        .create("molten_black_iron")
        .color(666666)
        .bucketColor(666666);
});
//你可以自定义一个流体，并自定义他在桶中的显示颜色（ic,create等的储罐容器类似桶，统一定义）
//color是倒出后流体的颜色
//bucketColor是桶中的颜色
//颜色的表示一律用进制数字表示,有些特殊的颜色游戏中定义了可以用 red等
