在网站 https://kubejs.com/ 上可以找到更多详细信息。
目录信息：
assets - 作为资源包（resource pack），您可以将任何客户端资源放在这里，如纹理、模型等。例如：assets/kubejs/textures/item/test_item.png
data - 作为数据包（datapack），您可以将任何服务器资源放在这里，如战利品表、函数等。例如：data/kubejs/loot_tables/blocks/test_block.json
startup_scripts - 游戏启动时只会加载一次的脚本，用于添加物品和其他只能在游戏加载时执行的内容。（可以使用 /kubejs reload_startup_scripts 重新加载，但可能不起作用！）
server_scripts - 每次重新加载服务器资源时都会加载的脚本，用于修改配方、标签、战利品表以及处理服务器事件。（可以使用 /reload 重新加载）
client_scripts - 每次重新加载客户端资源时都会加载的脚本，用于 JEI（Just Enough Items）事件、工具提示以及其他客户端相关的操作。（可以使用 F3+T 重新加载）
config - KubeJS 配置存储。这也是除了世界目录以外，脚本可以访问的唯一目录。
exported - 数据转储，如纹理合并后的贴图最终保存在此处。
您可以在 logs/kubejs/ 目录中找到特定类型的日志信息。
在调用中文文档时，你需要将中文文件名改成英文