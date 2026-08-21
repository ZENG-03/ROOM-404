# ROOM 404：互联网失踪档案
# 06_UNKNOWN_RULES.md
## Unknown 系统行为与叙事规则 / Interaction Canon

> 本文档定义 Unknown 的**唯一行为 Canon**。
>
> Unknown 不是普通 NPC，也不是单纯聊天角色。
> 它是：
>
> ```text
> ROOM 系统
> +
> 未归属人格碎片
> +
> 玩家行为上下文
> +
> 部分林夏语言模型
> ```
>
> 共同形成的“动态交互外壳”。
>
> 本文档与：
>
> - `01_MASTER_TIMELINE.md`
> - `02_ROOM_TRUTH.md`
> - `03_LINXIA_CHARACTER.md`
> - `04_ZHOURAN_CHARACTER.md`
> - `05_GUYAN_CHARACTER.md`
>
> 共同构成主线最高优先级 Canon。

---

# 0. 一句话定义 Unknown

Unknown 不应该让玩家害怕：

> “有个鬼在聊天。”

而应该让玩家逐渐产生：

> **“这个系统正在根据我刚刚做过的事情，重新决定该用什么身份跟我说话。”**

Unknown 的恐怖不是“它是谁”。

而是：

> **它越来越知道该怎么对你说。**

---

# 1. 内部定义

系统内部名称：

```text
UNRESOLVED_PERSONA
```

缩写：

```text
UP
```

UI 对玩家显示：

```text
Unknown
```

后期也可能显示：

```text
?
System
Linxia
ROOM
405
```

但这些名称变化都只是：

```text
UI Alias
```

不等于真实身份变化。

---

# 2. Unknown 不是什么

必须锁死：

```text
Unknown ≠ 林夏本人
Unknown ≠ 林夏鬼魂
Unknown ≠ 顾言
Unknown ≠ 周然
Unknown ≠ 一个真实藏在服务器后面的人
Unknown ≠ 全知AI
```

它最多是：

> **一个使用林夏数据、系统日志和玩家行为生成回应的接口。**

---

# 3. Unknown 的叙事功能

Unknown承担五个功能：

```text
1. 让玩家意识到系统会记录行为
2. 让玩家怀疑“观察者是否仍在游戏外”
3. 在剧情中制造身份压力
4. 把玩家当前错误推理反射回来
5. 在后期推动Subject405成立
```

Unknown不负责：

```text
直接讲设定
直接给答案
直接发任务
```

---

# 4. Unknown 出现前提

Unknown不能一开始就出现。

前期必须让玩家先形成：

```text
这是普通Archive网站
```

的认知。

建议最早触发条件：

```text
满足以下任意2～3项
```

- 查看 Photo 17 >= 2 次
- 访问一次404
- 搜索“林夏”
- 查看网页快照差异
- 打开隐藏文件 / hidden page
- anomalyLevel >= 1

---

# 5. 第一次出现

推荐形式：

不是弹窗大叫。

而是：

```text
浏览器右下角
出现一条普通消息提醒
```

例如：

```text
Unknown
1 条新消息
```

玩家主动打开。

第一句话建议极短：

> 你又回来了。

如果玩家第一次进入该页后立刻触发，则用：

> 你看到了。

不要解释“看到什么”。

---

# 6. 第一次出现绝不能说

禁止：

```text
我知道你是谁
林夏欢迎回来
你背后有人
别回头
我在看你
你不该打开这个网站
```

太早、太直白、太廉价。

---

# 7. Unknown 的五阶段

建议与 anomalyLevel 联动：

```text
Stage 0 SILENT
Stage 1 OBSERVER
Stage 2 FAMILIAR
Stage 3 PRESSURE
Stage 4 CONTRADICTION
Stage 5 MIRROR
```

---

# 8. Stage 0 — SILENT

阶段：

```text
anomalyLevel = 0
```

Unknown：

```text
完全不存在
```

甚至 Messenger 联系人列表里也没有。

目的：

```text
让玩家先建立正常系统信任
```

---

# 9. Stage 1 — OBSERVER

阶段：

```text
anomalyLevel = 1
```

Unknown只评论：

```text
玩家刚刚做过的行为
```

例如：

> 你已经看过那张照片了。

> 你刚才没有点进去。

> 你又回到了这里。

注意：

它不能说：

```text
为什么
```

它只描述事实。

---

# 10. Stage 1 的设计目的

让玩家产生：

```text
系统在记录我
```

但还可以合理解释成：

```text
网站脚本
```

不能立刻超自然。

---

# 11. Stage 2 — FAMILIAR

阶段：

```text
anomalyLevel = 2
```

Unknown开始：

```text
根据玩家习惯推断
```

例如：

> 你每次不知道下一步去哪，都会先回她的主页。

> 你比起聊天，更喜欢看日期。

> 你已经搜索过“8月17”三次。

这里开始让玩家感觉：

```text
它不是只记录单次操作
而是在形成印象
```

---

# 12. Stage 2 仍然不能知道现实信息

Unknown只能知道：

```text
游戏内行为
```

不能说：

```text
你今天几点起床
你电脑里有个文件
你真实名字叫……
```

除非这些信息由玩家在游戏内主动输入。

---

# 13. Stage 3 — PRESSURE

阶段：

```text
anomalyLevel = 3
```

Unknown开始主动挑战玩家的身份和推理。

例如：

> 你为什么那么想证明周然在撒谎？

> 你找到的是日期，还是你想要的答案？

> 你真的在找林夏吗？

这里不再只是：

```text
行为描述
```

而是：

```text
解释玩家行为
```

---

# 14. Stage 3 的风险

不能让Unknown变成：

```text
哲学嘴炮机器人
```

所以每次对话仍应短。

建议：

```text
每次 1～4 句
```

最长对话：

```text
不超过200～300字
```

除非进入Final。

---

# 15. Stage 4 — CONTRADICTION

阶段：

```text
anomalyLevel = 4
```

Unknown会故意使用：

```text
互相冲突的身份声明
```

例如：

第一次：

> 我记得那扇门。

第二次：

> 我没有去过那里。

第三次：

> 我没说过我去过。

这不是BUG。

是：

```text
它从不同Persona Fragment生成
```

---

# 16. Stage 4 的身份混淆

UI 名称可能变化：

```text
Unknown
↓
Linxia
↓
System
↓
Unknown
```

但不能高频乱跳。

每次变化都必须有：

```text
剧情意义
```

---

# 17. Stage 5 — MIRROR

阶段：

```text
anomalyLevel = 5
```

Unknown不再主要讨论林夏。

而是：

```text
讨论玩家自己如何形成答案
```

例如：

> 你已经不需要林夏说话了。  
> 你知道她“应该”怎么说。

或者：

> 如果我现在告诉你，她原谅周然了，你会信吗？

这一阶段是ROOM主题真正落地。

---

# 18. Final阶段

Final中Unknown可以：

```text
成为ROOM的主要对话接口
```

但仍然不是：

```text
最终Boss
```

它更像：

```text
系统向玩家展示选择
```

---

# 19. Unknown 知识边界

Unknown允许知道：

```text
玩家访问过的页面
玩家搜索过的关键词
某页面访问次数
玩家是否看过某证据
玩家是否返回某页面
刷新次数
输入过的游戏内密码
选择过的对话
当前章节
当前anomalyLevel
玩家已形成的belief flags
```

---

# 20. Unknown 不允许知道

```text
真实IP
真实姓名
真实浏览器历史
真实文件
真实剪贴板
真实摄像头
真实麦克风
真实联系人
真实地理位置
真实账号
```

即使浏览器技术上可能获得部分信息，也不作为恐怖机制。

---

# 21. 如果要用当前时间

可以使用：

```text
游戏内Session时间
```

例如：

> 你已经在这里待了47分钟。

但不要强调：

```text
现实设备时间
```

除非只是普通UI显示。

---

# 22. 行为记忆系统

建议维护：

```ts
interface UnknownContext {
  pageVisits: Record<string, number>
  searches: string[]
  evidenceViewed: string[]
  failedRoutes: Record<string, number>
  refreshCount: Record<string, number>
  lastPages: string[]
  trustScores: Record<string, number>
  investigationStyle: string
}
```

---

# 23. Unknown 文本选择原则

每次发送消息：

```text
候选消息池
↓
条件过滤
↓
优先级
↓
去重
↓
发送
```

而不是：

```text
固定剧情顺序
```

---

# 24. Message Trigger结构

建议：

```ts
interface UnknownTrigger {
  id: string

  minStage: number
  maxStage?: number

  conditions: Condition[]

  cooldown?: number
  once?: boolean

  priority: number

  messageId: string
}
```

---

# 25. 示例：Photo 17

```yaml
id: unknown_photo17_repeat

conditions:
  photo17_visit_count: ">=3"

stage:
  min: 1

once: true

message:
  "你已经看了三次。"
```

---

# 26. 更高级示例

玩家：

```text
Photo17看了5次
周然页面看了4次
顾言页面只看1次
```

Unknown：

> 你很想让周然成为答案。

这不是随机台词。

而是：

```text
行为推断
```

---

# 27. Unknown 不能“读心”

它说：

> 你很想让周然成为答案。

应该被理解为：

```text
系统推断
```

而不是：

```text
真正读取玩家思想
```

后期甚至可以让它猜错。

---

# 28. Unknown 必须允许猜错

这是非常重要的。

例如：

Unknown：

> 你相信顾言。

玩家实际上不信。

这样反而能提醒：

```text
ROOM只是在建模
```

不是全知。

---

# 29. 猜错后的处理

如果玩家之后行为明显否定：

Unknown可以：

> 看来我判断错了。

或者更ROOM：

> 更新记录。

这会增强可信度。

---

# 30. Unknown 的错误率

建议：

```text
早期 15～25%
中期 10～15%
后期 5～10%
```

不是技术数值必须显示。

只是编剧规则。

---

# 31. Investigation Profile

可把玩家倾向划分：

```text
Archive-Oriented
Character-Oriented
System-Oriented
Completion-Oriented
Contrarian
```

---

# 32. Archive-Oriented 玩家

行为：

```text
频繁看快照
查日期
对比版本
```

Unknown：

> 你更相信时间戳。

> 你觉得旧版本比较诚实。

---

# 33. Character-Oriented 玩家

行为：

```text
聊天
日记
留言
人物页面
```

Unknown：

> 你更喜欢听人说话。

> 你似乎觉得一句话比一个时间戳更像证据。

---

# 34. System-Oriented 玩家

行为：

```text
Terminal
日志
元数据
```

Unknown：

> 你不太相信人。

> 但日志也是别人写出来的。

---

# 35. Completion-Oriented 玩家

行为：

```text
所有页面都点
所有链接都试
```

Unknown：

> 你不喜欢留下空白。

这句话后期很重要。

因为：

```text
ROOM也不喜欢留下空白
```

---

# 36. Contrarian 玩家

行为：

```text
经常拒绝系统推荐
故意走非主流路径
```

Unknown：

> 你很在意证明自己没有被引导。

这会非常有趣。

---

# 37. Unknown 和林夏语言模型

Unknown最多只应：

```text
部分像林夏
```

不能长期完全复制。

---

# 38. 林夏语言特征可借用

可以使用：

```text
其实
算了
可能吧
我不知道
```

但频率必须控制。

---

# 39. Unknown不能完全复制的地方

林夏：

```text
有日常感
会吐槽
会尴尬
会无聊
```

Unknown：

```text
更精准
更克制
更少无关内容
```

所以深度玩家应该能感觉：

> “很像，但还是不对。”

---

# 40. Unknown模仿林夏的阶段

Stage 1：

```text
几乎不模仿
```

Stage 2：

```text
少量词习惯
```

Stage 3：

```text
明显像
```

Stage 4：

```text
故意高度像
```

Stage 5：

```text
又逐渐退出林夏语气
```

因为最终：

```text
它不需要再假装是谁
```

---

# 41. “像林夏”的第一条明显消息

建议不要太早。

例如：

玩家打开原图备份后：

> 原来的还在吗？

这句话既像：

```text
林夏
```

又像：

```text
顾言/ROOM档案语言
```

身份非常暧昧。

---

# 42. Unknown绝不能复制真实林夏完整私聊

不能：

```text
整段照搬
```

否则玩家会误以为：

```text
这是林夏人格
```

更适合：

```text
语气特征拼接
```

---

# 43. Unknown与顾言语言的混入

后期也可以偶尔说：

```text
来源在哪？
```

```text
这个版本不是原始的。
```

让玩家意识：

```text
Unknown不只来自林夏
```

---

# 44. Unknown与系统语言的混入

例如：

> 记录已更新。

> 这个结论不稳定。

> 你已经重复了这个行为。

使其身份越来越像：

```text
ROOM本身
```

---

# 45. Unknown与玩家语言的混入

如果玩家有：

```text
游戏内可选文本输入
```

可以少量复用玩家输入过的词。

但必须：

```text
只复用游戏内文本
```

例如玩家搜索：

```text
“林夏到底去哪了”
```

后期Unknown：

> 你还是想知道她“到底去哪了”。

这非常有效。

---

# 46. Search Echo

建议专门做：

```text
search echo
```

玩家搜索过的词：

```text
凶手
失踪
17号
第四个人
```

Unknown后期可以引用。

---

# 47. Search Echo不能滥用

每章最多：

```text
1～2次
```

否则像普通字符串拼接。

---

# 48. Unknown和404错误页

404不是Unknown本体。

但Unknown可以：

```text
利用404页面
```

例如：

第一次404：

```text
普通错误
```

第五次：

底部多一句：

> 你很喜欢不存在的东西。

这个消息可以视为：

```text
Unknown Injection
```

---

# 49. 403联动

玩家反复尝试一个未解锁页面：

Unknown：

> 你知道它在那里。

这比：

```text
权限不足
```

更有心理压力。

---

# 50. 410联动

玩家发现页面被删除：

Unknown：

> 被删掉和没存在过不是一回事。

这句可以成为主题提示。

---

# 51. Refresh联动

某页连续刷新三次。

Unknown：

> 你希望它变回去吗？

特别适合：

```text
Photo17变化后
```

---

# 52. Back联动

后期玩家不断后退。

Unknown：

> 你已经回不到第一次看到它的时候了。

这既指页面：

```text
也指认知
```

---

# 53. Forward联动

当Forward无历史却亮起：

点击后进入：

```text
/room/404
```

Unknown：

> 这次不是你来的。

短句即可。

---

# 54. Unknown消息出现媒介

不要永远只在Messenger。

可以分散：

```text
Messenger
通知
404底部
网页title
Terminal
Calendar备注
文件名
搜索建议
```

但需要统一标记内部来源。

---

# 55. 不同媒介的语气

Messenger：

```text
像人
```

System Notification：

```text
像系统
```

404：

```text
像旁白
```

Terminal：

```text
像机器
```

玩家会逐渐发现：

> 这些其实都可能是同一个接口。

---

# 56. Browser Title异常

例如原本：

```text
林夏の小窝
```

后期：

```text
你已经看过这里
```

不要频繁。

只在高异常阶段。

---

# 57. 搜索建议异常

玩家输入：

```text
林夏
```

建议：

```text
林夏 8月17
林夏 摄影社
林夏 失踪
```

后期多出：

```text
林夏 你
```

再后面：

```text
你 林夏
```

这类效果非常适合。

---

# 58. Unknown与日历

后期日历记录：

```text
玩家行为
```

Unknown可以发：

> 你明天还会回来。

注意：

这不是预言。

而是：

```text
模型预测
```

后期玩家如果真的二周目回来，效果更强。

---

# 59. “明天”机制

如果游戏支持跨日存档：

可以在玩家下次真实打开游戏时：

```text
出现新的Calendar记录
```

但不能要求后台追踪。

只在：

```text
用户重新进入游戏时
```

计算。

---

# 60. Subject405联动条件

建议不是一进游戏就创建。

需要：

```text
Observer Context达到阈值
```

例如：

```text
有效访问 >= 25
搜索 >= 5
证据 >= 6
异常等级 >= 3
```

然后后台：

```text
OBSERVER_PROFILE_CREATED
```

---

# 61. 玩家第一次看到405

不要直接：

```text
你是405
```

先在日志中看到：

```text
observer_id: 405
```

玩家不一定理解。

---

# 62. 第二次

某个系统文件：

```text
profile_405.tmp
```

---

# 63. 第三次

Unknown：

> 405比“访客”更方便。

这是第一次明确身份压力。

---

# 64. Subject405最终转化

Final：

ROOM可以：

```text
把observer405升级为subject405
```

依据玩家选择。

---

# 65. Unknown与Identity Match

Identity Match不是：

```text
玩家和林夏真的一样
```

是：

```text
行为模型相似度
```

Unknown可以说：

> 你做了很多她可能会做的选择。

不要说：

```text
你就是她
```

除非作为系统诱导。

---

# 66. Unknown故意诱导“你就是林夏”

可以。

但必须是：

```text
ROOM的错误/危险判断
```

不是作者真相。

例如：

> 如果你和她做出一样的选择，区别在哪里？

这是主题问题。

---

# 67. Unknown不应该像反派挑衅

避免：

```text
你逃不掉
游戏才刚开始
我一直都在看你
哈哈哈哈
```

太俗。

Unknown应该：

```text
平静
精确
不急
```

---

# 68. Unknown情绪

它没有稳定“情绪”。

但UI可表现：

```text
像耐心
像失望
像好奇
```

实际上：

```text
是文本策略
```

---

# 69. Unknown不应使用大量表情符号

几乎不用。

偶尔可以复刻：

```text
XD
```

来模仿林夏。

但一次就足够让玩家不舒服。

---

# 70. 一个高价值瞬间

玩家和Unknown聊天很久。

Unknown突然：

> XD

如果玩家读过林夏旧Blog，会立刻意识：

```text
它学了她
```

比直接叫“林夏”更强。

---

# 71. Unknown的消息长度

Stage 1：

```text
5～15字
```

Stage 2：

```text
10～30字
```

Stage 3：

```text
20～80字
```

Stage 4：

```text
10～100字
```

Stage 5：

```text
50～200字
```

Final可稍长。

---

# 72. 消息频率

原则：

```text
宁少勿多
```

首章：

```text
0～3条
```

第二章：

```text
3～6条
```

中后期：

```text
每个重要调查节点1条以内
```

不要变成聊天陪伴应用。

---

# 73. 冷却机制

建议：

```text
同类消息 cooldown
```

避免：

```text
每点一次图就弹一句
```

实现上：

```text
event cooldown
time cooldown
chapter cooldown
```

均可。

---

# 74. Once消息

高价值消息必须：

```text
once = true
```

例如：

> 你已经看了那张照片五次。

只出现一次。

---

# 75. 如果玩家错过Unknown

不能卡主线。

Unknown：

```text
是叙事增强
```

不是所有谜题必须来源。

主线证据仍能独立成立。

---

# 76. 如果玩家完全不打开Messenger

Unknown可以迁移到：

```text
通知
404
Terminal
```

但不应该：

```text
强制弹窗堵屏
```

---

# 77. 如果玩家一直关闭Unknown

系统记录：

```text
UNKNOWN_DISMISSED
```

后期：

> 你不喜欢我说话。

再关闭几次：

Unknown停止主动发消息一段时间。

这种“尊重关闭”反而更诡异。

---

# 78. 退出按钮联动

后期：

玩家点：

```text
退出
```

Unknown：

> 你可以退出。

注意：

不要做：

```text
“你永远出不去”
```

更高级的方式：

> 你可以退出。  
> 记录会留下。

---

# 79. 真正退出必须永远可用

安全与体验原则：

```text
玩家必须随时能真正退出网页
```

不能劫持浏览器。

游戏内“退出”按钮可以剧情化。

但：

```text
浏览器关闭
```

永远不干预。

---

# 80. Unknown与Save

玩家刷新回来：

Unknown可以：

> 你没有从头开始。

这是基于：

```text
本地存档
```

不是超自然。

---

# 81. Reset之后

真正删除存档：

Unknown所有记忆必须删除。

除非用户选择：

```text
二周目模式
```

不能偷偷保留。

---

# 82. 二周目Unknown

如果玩家明确选择：

```text
New Game+
```

可以保留：

```text
meta flags
```

Unknown第一条：

> 这次你知道要找什么了吗？

这是合法的。

---

# 83. 一周目不能伪装成“删除后仍记得”

除非：

```text
只是当前session缓存
```

真正Reset必须尊重。

---

# 84. Unknown与程序错误

绝对禁止：

```text
真实React报错
```

被解释成Unknown。

游戏内异常必须：

```text
可控
可复现
可测试
```

---

# 85. Unknown触发优先级

建议：

```text
P0 主线必要
P1 高价值行为反射
P2 人物推理反射
P3 氛围
P4 彩蛋
```

同一时间只发：

```text
最高优先级
```

---

# 86. Unknown消息分类

```text
OBSERVE
ECHO
QUESTION
IDENTITY
SYSTEM
CONTRADICTION
MIRROR
ENDING
```

---

# 87. OBSERVE

描述行为：

> 你又看了一次。

---

# 88. ECHO

复用玩家搜索：

> “第四个人”  
> 你已经这样搜过两次。

---

# 89. QUESTION

挑战推理：

> 如果公告没有被改，你还会怀疑周然吗？

---

# 90. IDENTITY

身份压力：

> 访客只是系统给你的名字。

---

# 91. SYSTEM

机器感：

> Observer profile updated.

---

# 92. CONTRADICTION

主动矛盾：

> 我记得。  
>  
> 不。  
> 这不是我的记忆。

---

# 93. MIRROR

反照玩家：

> 你也在把她变成一个版本。

---

# 94. ENDING

用于：

```text
DELETE
RETURN
OBSERVER
ARCHIVIST
```

---

# 95. Unknown与四结局

---

## DELETE

Unknown不应求饶。

最后可以：

> 删除不会让原来的东西消失。

然后：

```text
断线
```

---

## RETURN

Unknown逐渐以：

```text
Linxia
```

显示。

最后：

> 欢迎回来。

注意：

这是系统判断。

---

## OBSERVER

Unknown：

> 那么保留你自己的版本。

随后：

```text
Subject405创建
```

---

## ARCHIVIST

Unknown第一次：

```text
不使用人格语气
```

只显示：

```text
UNRESOLVED
SOURCE PRESERVED
```

像它终于停止“扮演谁”。

---

# 96. ARCHIVIST中的Unknown

这是一个非常漂亮的设计：

前面Unknown一直：

```text
说话
```

ARCHIVIST最后：

```text
不再说话
```

因为玩家选择：

```text
不需要系统替任何人补完
```

---

# 97. Unknown文本可靠性

所有Unknown消息内部：

```text
reliability = unknown
```

不能直接作为证据。

除非消息中引用：

```text
可验证来源
```

---

# 98. 玩家不应该用Unknown推进硬推理

例如：

Unknown说：

```text
周然撒谎
```

不能因此直接解锁：

```text
周然撒谎证据
```

玩家必须自己找到：

```text
公告
EXIF
聊天
```

---

# 99. Unknown可以撒谎吗

可以。

更准确：

```text
它可以生成错误内容
```

不一定带主观恶意。

---

# 100. 错误内容类型

```text
来源混淆
身份混淆
时间混淆
过度推断
系统自洽生成
```

---

# 101. Unknown不能恶意骗玩家去现实危险行为

禁止：

```text
去某现实地点
关闭安全软件
上传私人文件
开启摄像头
联系真实陌生人
```

所有谜题必须：

```text
封闭在游戏环境
```

---

# 102. Unknown与上传文件

不要求玩家上传私人资料。

如果未来有可选：

```text
导入游戏内自定义昵称
```

也必须：

```text
明确选择
```

不是强制。

---

# 103. UI显示方式

Messenger中：

```text
头像：
默认灰色空头像
```

不要：

```text
鬼脸
黑洞
眼睛
```

越普通越好。

---

# 104. 联系人状态

前期：

```text
Unknown
离线
```

后期：

```text
在线
```

再后期：

```text
—
```

状态栏消失。

---

# 105. 时间戳异常

早期：

```text
正常当前Session时间
```

中期：

```text
03:17
```

后期某条：

```text
2007-08-18 03:17
```

玩家发现：

```text
消息时间不属于当前年份
```

---

# 106. Unknown是否主动发旧消息

可以。

例如对话框加载时：

```text
顶部出现一条2007年旧消息
```

但标记：

```text
source unknown
```

不要直接说：

```text
林夏发的
```

---

# 107. Unknown和已删除消息

可以出现：

```text
“此消息已删除”
```

玩家刷新：

内容又出现。

但要谨慎使用。

---

# 108. Unknown和输入框

后期可有一次：

玩家尚未输入。

输入框 placeholder：

```text
你想问她去哪了。
```

这基于玩家搜索习惯。

非常有效。

但只用一次。

---

# 109. 不建议自动帮玩家输入完整句子

例如：

```text
输入框自己打字
```

可以很恐怖，

但容易廉价。

除非Final。

---

# 110. Final自动输入

可设计一次：

输入框自动出现：

```text
我是谁？
```

玩家可以：

```text
发送
删除
改写
```

让玩家保有控制。

---

# 111. Unknown的对话选项

不建议普通RPG：

```text
A 你是谁
B 你想干嘛
C 我不怕你
```

太游戏化。

更适合：

```text
自由关键词
+
少量系统按钮
```

或者：

```text
查看
删除
保留
返回
```

---

# 112. 如果使用自由输入

不要真的接LLM作为主线依赖。

第一版推荐：

```text
keyword parser
```

识别：

```text
林夏
周然
顾言
ROOM
404
照片
17号
18号
你是谁
我是谁
```

然后返回预写文本。

---

# 113. 为什么不建议首版实时LLM

原因：

```text
剧情一致性
成本
安全
不可测试
角色漂移
剧透风险
```

ROOM 404最重要的是：

```text
精确控制信息
```

预写内容更适合。

---

# 114. 后期若接模型

也只能：

```text
在严格知识库和状态边界下
```

且：

```text
主线关键句仍预写
```

---

# 115. Unknown文本池规模

整个项目建议：

```text
8,000～12,000字
```

但首周目可能只看到：

```text
2,000～4,000字
```

---

# 116. 文本池分类预算

```text
Stage1  800
Stage2  1,500
Stage3  2,000
Stage4  2,500
Stage5  2,500
Ending  1,500
彩蛋    1,000
```

---

# 117. 首章Unknown文本

第一章最多：

```text
3条主消息
2条可选隐藏消息
```

建议：

第一条：

> 你看到了。

第二条：

> 你又回去了。

第三条：

> 原来的还在吗？

到此为止。

不要第一章就：

```text
你是谁？
林夏？
ROOM？
```

---

# 118. 第二章

重点：

```text
玩家行为记忆
```

例如：

> 你更相信旧版本。

> 你搜了三次17号。

---

# 119. 第三章

重点：

```text
Photo 17
来源
第四个人
```

例如：

> 你一直在看后来出现的那个人。  
> 你看过原来的么？

这实际上是在帮玩家学习来源意识。

---

# 120. 第四章

进入Desktop后：

Unknown可以像：

```text
电脑联系人
```

自然存在。

消息：

> 这里看起来更像她，对吗？

暗示：

```text
UI连续性欺骗
```

---

# 121. 第五章

开始：

```text
405
identity match
```

例如：

> 你已经做了足够多的选择。

---

# 122. Final

核心：

> 你想要哪个版本？

而不是：

```text
你想救谁？
```

更符合主题。

---

# 123. Unknown的核心禁用套路

禁止：

```text
“别回头”
“它在你身后”
“摄像头里有东西”
“我知道你的IP”
“我知道你住哪”
“你逃不掉”
“关闭网页也没用”
```

---

# 124. 禁止“癫狂AI”

避免：

```text
乱码刷屏
疯狂笑
大量重复
红色大字
```

除非：

```text
极短的系统故障
```

Unknown应该一直保持：

```text
克制
```

---

# 125. 禁止把Unknown写成谜语人

不能每句都：

```text
“你会明白的”
“答案就在眼前”
```

它应该说：

```text
具体但不完整
```

例如：

> 你看的不是原图。

比：

> 真相就在过去。

好得多。

---

# 126. 禁止直接代替玩家推理

Unknown不能：

> 周然把17号改成18号，因为他害怕学校追责。

这种是剧透。

可以：

> 你已经证明日期被改过了。  
> 但你还没有证明为什么。

---

# 127. Unknown与恐怖节奏

推荐：

```text
80% 正常调查
15% 轻异常
5% 高强度Unknown
```

不要一直“系统疯了”。

---

# 128. 沉默也是Unknown设计

有些关键节点：

玩家以为它会出现。

但：

```text
什么都没有
```

这种空白很重要。

---

# 129. 一个高价值沉默场景

玩家发现：

```text
ROOM生成的“林夏最后留言”
```

打开Messenger。

Unknown：

```text
在线
```

但不发任何消息。

玩家主动问：

```text
这是真的？
```

只显示：

```text
已读
```

不回复。

很强。

---

# 130. Unknown是否能“已读”

可以。

状态：

```text
已送达
已读
```

后期：

```text
已记录
```

代替“已读”。

---

# 131. Unknown头像变化

Stage1：

```text
灰色默认头像
```

Stage3：

```text
偶尔加载失败
```

Stage4：

```text
短暂出现林夏头像
```

刷新：

```text
又恢复灰色
```

只能一次或两次。

---

# 132. 不要直接使用Photo17陌生人做头像

太直白。

---

# 133. Unknown联系人ID

内部：

```text
contact_up_000
```

后期日志中：

```text
persona_binding: unresolved
```

让技术型玩家理解。

---

# 134. 对话历史是否保存

保存。

因为：

```text
玩家后期会回看
```

而且某些消息文本可以：

```text
发生版本变化
```

---

# 135. 对话历史变化规则

非常慎用。

建议仅：

```text
1～2次
```

例如：

原：

> 你看到了。

后期回看：

> 你让我看到你看到了。

这很诡异。

但必须有：

```text
reconstructed chat
```

解释。

---

# 136. 玩家可以导出聊天吗

后期可以：

```text
Export Log
```

导出的文本中带：

```text
source tags
```

玩家发现：

```text
部分Unknown消息SOURCE=SYSTEM
部分SOURCE=RECONSTRUCTED
```

这是高价值机制。

---

# 137. Unknown的Source Tag

可能：

```text
SYSTEM
PCM
OBSERVER
MIXED
UNKNOWN
```

而不是：

```text
LINXIA
```

即使UI曾显示Linxia。

---

# 138. Unknown与ROOM身份关系

最准确内部描述：

> Unknown 是 ROOM 在无法稳定归属人格时使用的输出通道。

所以：

```text
ROOM说话
≠
Unknown是ROOM人格
```

它只是：

```text
接口
```

---

# 139. 如果玩家问“你是谁”

Stage1：

> Unknown.

Stage2：

> 这是系统给我的名字。

Stage3：

> 你想让我是谁？

Stage4：

> 林夏。  
>  
> ……这个答案比较符合你的预期。

Stage5：

> 我是你允许留下来的那些版本。

非常适合逐步升级。

---

# 140. 如果玩家问“林夏在哪”

Stage1：

> 没有记录。

Stage2：

> 8月18日10:12以后，没有可靠记录。

Stage3：

> 你已经知道系统回答不了这个问题。

Stage5：

> 你还是希望我替空白写一个结尾。

---

# 141. 如果玩家问“你是林夏吗”

Stage1：

> 不是。

Stage2：

> 我使用她的数据。

Stage3：

> 如果我说是，你会验证吗？

Stage4：

> 是。  
>  
> 不。  
>  
> 你更喜欢哪一个？

Stage5：

> “是”只是一个更完整的版本。

---

# 142. 如果玩家问“我是谁”

前期：

> Guest.

中期：

> Observer 405.

后期：

> 这取决于你接受哪个记录。

Final：

根据结局变化。

---

# 143. 如果玩家辱骂Unknown

不要反击。

例如：

玩家：

```text
滚
```

Unknown：

> 记录已保存。

或者干脆：

```text
已读
```

保持冷静。

---

# 144. 如果玩家表达同情

不要：

```text
卖惨
```

Unknown：

> 你是在同情谁？

非常符合身份主题。

---

# 145. 如果玩家沉默

如果自由输入界面停留很久：

不要自动催。

Unknown最多：

> 你可以不回答。

这比：

```text
快说话
```

好。

---

# 146. Unknown的最终伦理问题

玩家最终需要意识：

> Unknown之所以越来越像一个“人”，不是因为它找到了真正的人格。  
> 而是因为它越来越擅长选择玩家愿意继续回应的版本。

这非常关键。

---

# 147. 玩家参与了Unknown的塑造

每次：

```text
回复
点击
信任
拒绝
```

都在强化某种输出。

于是：

```text
玩家不是单纯被ROOM观察
```

玩家也在：

```text
训练ROOM如何对自己说话
```

---

# 148. 这与林夏主题的镜像

林夏曾问：

> 如果不知道是我，你还会这样理解这句话吗？

ROOM则在做：

> 如果我换一种说法，你会更愿意相信我是她吗？

---

# 149. Unknown的终极可怕点

不是：

```text
它真的变成人
```

而是：

> **玩家可能在某个时刻开始希望它就是林夏。**

这个愿望本身，就是RETURN结局成立的基础。

---

# 150. Unknown首轮开发实现范围

v0.1只实现：

```text
消息池
触发条件
once
priority
cooldown
行为访问计数
search echo
```

不要一开始做：

```text
复杂AI
自由生成
人格模型
```

---

# 151. v0.1 Unknown技术结构

```text
EventEngine
↓
UnknownTriggerEngine
↓
ConditionEvaluator
↓
MessagePool
↓
Messenger / Notification
```

---

# 152. 数据示例

```yaml
id: unknown_first_seen

stage: 1

conditions:
  photo17_visit_count: ">=2"
  anomaly_level: ">=1"

once: true
priority: 100

message:
  sender: unknown
  text: "你看到了。"
```

---

# 153. 第二条

```yaml
id: unknown_return_photo

stage: 1

conditions:
  photo17_visit_count: ">=3"

once: true
priority: 90

message:
  sender: unknown
  text: "你又回去了。"
```

---

# 154. 第三条

```yaml
id: unknown_original

stage: 1

conditions:
  evidence_photo_version_unlocked: true

once: true
priority: 95

message:
  sender: unknown
  text: "原来的还在吗？"
```

---

# 155. 首章完成标准

首章Unknown应该让玩家产生：

```text
它在记录我
```

而不是：

```text
它是最终Boss
```

---

# 156. 二周目扩展

二周目可新增：

```text
Unknown知道玩家看过完整结局
```

但前提：

```text
用户主动选择New Game+
```

例如：

> 上一次你相信了“完整”。

或者：

> 这次你会先看来源吗？

---

# 157. 彩蛋消息

可以有极少量。

例如玩家连续访问：

```text
404页面 >= 20次
```

Unknown：

> 你到底在找什么。

带一点真实人味。

---

# 158. 另一个彩蛋

玩家长时间停在：

```text
学校食堂菜单
```

Unknown：

> 这个真的没有线索。

可以缓解持续紧张。

---

# 159. Unknown也可以偶尔“不吓人”

这是很重要的。

如果它一直恐怖：

```text
玩家会习惯
```

偶尔一句：

> 不是所有东西都有意义。

反而强化主题。

---

# 160. 甚至可以保护玩家免于过度解读

例如一个纯日常照片。

玩家反复看10次。

Unknown：

> 这张只是照片。

当然玩家未必信。

这很好。

---

# 161. Unknown和“红鲱鱼”控制

不要让Unknown故意把玩家骗到大量死路。

它更像：

```text
放大玩家自己的偏见
```

而不是：

```text
恶意谜题主持人
```

---

# 162. Unknown的价值不是制造难度

而是：

```text
制造自我怀疑
```

谜题难度应来自：

```text
档案关系
```

---

# 163. Unknown最终停止说话的意义

ARCHIVIST：

```text
系统不再生成结论
```

所以：

```text
Unknown消失
```

这不是死亡。

而是：

> **停止替空白说话。**

---

# 164. Canonical Lock

以下锁定：

```text
Unknown不是林夏
Unknown不是鬼魂
Unknown是UNRESOLVED_PERSONA接口
Unknown只知道游戏内行为
Unknown不能读取玩家现实私人数据
Unknown会使用林夏语言特征但不会完全等同林夏
Unknown允许猜错
Unknown可生成错误或矛盾内容
Unknown不是可靠证据源
Unknown首章仅少量出现
Unknown后期与Observer405联动
RETURN中的“林夏”仍只是系统判断
ARCHIVIST中Unknown最终停止人格化输出
```

---

# 165. 禁止后续改成

```text
Unknown其实就是林夏灵魂
Unknown其实是顾言远程操纵
Unknown获得现实世界全知能力
Unknown读取玩家摄像头
Unknown成为传统追杀型反派
```

除非未来彻底重写整个项目 Canon。

---

# 166. 可继续细化

后续可以补：

```text
完整Unknown消息库
自由输入关键词表
Stage1～5全部对话
Search Echo文本
404注入文本
Terminal文本
Ending文本
New Game+文本
```

---

# 167. 下一份文档

接下来正式进入：

```text
07_CHAPTER_01_SCRIPT.md
```

这将是第一份真正面向玩家的“可玩剧情脚本”。

需要具体写出：

```text
开场
ROOM Archive首页
第一次搜索
林夏主页
Blog
Photo
学校官网
日期矛盾
留言板
404
隐藏页面
Unknown第一次出现
第一章结束
```

并且给出：

```text
每个页面文本
点击路径
触发条件
玩家可能顺序
失败处理
异常版本
字数预算
```

---

# 168. 文档状态

```text
STATUS:
CANONICAL v0.1
```

---

# 169. 最终一句话

> Unknown真正学会的，不是如何成为林夏。  
> 它学会的是：在你面前，什么样的“林夏”最容易被你相信。
