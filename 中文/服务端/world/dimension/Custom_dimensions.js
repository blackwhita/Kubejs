{
	"type": "维度类型命名空间ID" 或 维度类型JSON对象,
	"generator": {
		"type"："minecraft:noise",
		"seed"：整数, 种子
		"settings"："噪声设置命名空间ID" 或 噪声设置JSON对象,
		"biome_source": { 生物群系设置
			"seed"：整数, 种子

			"type": "minecraft:vanilla_layered", 原主世界默认生成和巨型生物群系生成
			"large_biomes": true 或 false, 是否为巨型生物群系
		或
			"type": "minecraft:multi_noise", 多维噪声型
			"min_quart_y": 整数, TBD
			"max_quart_y": 整数, TBD
			"biomes": [ 生物群系列表
				{
					"biome": "生物群系命名空间ID", 生物群系
					"parameters": { 生物群系属性
						"humidity": -2~2 之间的数值范围, 振幅，柏林噪声参数
						"erosion": -2~2 之间的数值范围, 振幅，柏林噪声参数
						"temperature": -2~2 之间的数值范围, 振幅，柏林噪声参数
						"weirdness": -2~2 之间的数值范围, 振幅，柏林噪声参数
						"continentalness": -2~2 之间的数值范围, 振幅，柏林噪声参数
						"depth": 数值, TBD
						"offset": 0~1 之间的数值 为地图上的点计算最接近的生物群系时，会根据这个值来调大距离，因此这个值绝对值越大，生物群系越小
					}
				}
			]
		或
			"type": "minecraft:fixed", 单生物群系维度
			"biome": "生物群系命名空间ID"
		或
			"type": "minecraft:checkerboard", 生物群系单元呈正方形按棋盘状排列
			"scale": 正整数, 正方形单元的大小
			"biomes": [ 生物群系列表
				"生物群系命名空间ID"
			]
		或
			"type": "minecraft:the_end" 用于在末路之地中生成的生物群系，以生物群系minecraft:the_end为中心，周围环绕着其它生物群系
		}
	}
}
//超平坦
{
	"type": "维度类型命名空间ID" 或 维度类型JSON对象,
	"generator": {
		"type": "minecraft:flat",
		"settings": {
			"layers": [
				{
					"height": 正整数, 该层方块高度
					"block": "方块命名空间ID" 该层使用方块
				}
			],
			"biome": "生物群系命名空间ID", 该维度使用的单一生物群系
			"lakes": true 或 false, 可选，是否生成湖。如果设为true，则水湖和熔岩湖常会生成，即使在生物群系中湖通常不生成。熔岩湖生成时会被主世界不同种类的石头和矿物包围
			"features": true 或 false, 可选，是否生成生物群系特有的装饰性结构，比如主世界的树木、花、草、仙人掌，下界的火/灵魂火、菌类、菌索等等
			"structures": { 结构设置
				"stronghold": { 可选，要塞的生成设置
					"count": 1~4095 之间的整数,
					"spread": 0~1023 之间的整数, 设置为0时会使世界中某些位置上反复生成多个要塞
					"distance": 0~1023 之间的整数
				},
				"structures": { 该维度中会生成的结构，如果需要生成要塞也需在此列出
					"结构命名空间ID": { 注意这不是结构地物命名空间ID，自定义的结构地物生成几率设置随同其对应的原版结构
						"spacing": 正整数, 两个该种类的结构之间的平均距离，以区块为单位
						"separation": 1~(spacing-1) 之间的整数, 两个该种类的结构之间的最小距离，以区块为单位
						"salt": 整数 影响结构内部生成
					}
				}
			}
		}
	}
}
//调试
{
	"type": "维度类型命名空间ID" 或 维度类型JSON对象,
	"generator": {
		"type": "minecraft:debug"
	}
}
