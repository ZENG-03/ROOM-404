# ROOM 404：互联网失踪档案
# 19_CALENDAR_AND_SESSION_LOGS.md
## Chapter 04 Calendar与Observer Session日志完整设计 / Temporal Layer Canon

> 本文档定义 Recovery Calendar 与 2026 Observer Session Log。
>
> 这是 Chapter 04 最重要的时间层机制。
>
> 玩家最初看到：
>
> ```text
> 2007年8月
> ```
>
> 会自然认为：
>
> ```text
> “这是林夏的日历。”
> ```
>
> 随后他会发现：
>
> ```text
> 2026
> ```
>
> 里面记录的不是林夏。
>
> 是自己刚刚在游戏里做过的事情。

---

# 0. Calendar的三层时间

必须严格区分：

```text
ANCHOR
BUILD
SESSION
```

---

# 1. ANCHOR

```text
2007-08-18 03:17
```

作用：

```text
Recovery Environment的历史参考锚点
```

不是：

```text
桌面真实开机时间
```

---

# 2. BUILD

```text
2016-03-17
```

作用：

```text
Recovery Environment首次完整构建时间
```

---

# 3. SESSION

```text
2026玩家当前游戏Session
```

作用：

```text
Observer行为记录
```

---

# 4. Calendar默认视图

首次：

```text
August 2007
```

旧PIM风。

左侧：

```text
Personal
Recovery
Session
```

第一次只明显显示：

```text
Personal
```

---

# 5. 2007历史事件池

建议：

```text
08/03 整理照片
08/08 改主页
08/12 首页更新
08/14 摄影社讨论
08/17 体育馆
08/18 -
08/27 返校
```

---

# 6. 8月3日

```text
整理照片
```

Source：

```text
RECOVERED_CALENDAR
```

备注：

```text
分 original / edit / web
```

---

# 7. 8月8日

```text
主页
```

备注：

```text
改相册
```

普通。

---

# 8. 8月12日

```text
首页
```

备注：

```text
改回旧版
```

与主页最后更新一致。

---

# 9. 8月14日

```text
摄影社
16:00?
```

备注：

```text
17号旧体育馆
四点
```

---

# 10. 8月17日

事件：

```text
旧体育馆
16:00
```

备注：

```text
相机
电池
```

没有：

```text
“失踪”
```

---

# 11. 8月18日

建议：

```text
无事件
```

这是非常重要的空白。

不要替玩家写：

```text
离家
失踪
```

---

# 12. 8月27日

```text
返校
```

这是普通未来计划。

会让玩家感到：

```text
她原本仍有正常未来安排
```

---

# 13. 2007 Calendar来源

必须区分：

```text
RECOVERED_CALENDAR
RECOVERED_NOTE
MAPPED_EVENT
```

有些是原Calendar。

有些是Recovery根据其他文件映射成事件。

---

# 14. MAPPED_EVENT

例如：

```text
Photo17 18:42
```

如果出现在Calendar Timeline里：

Source：

```text
PHOTO_METADATA
Mapped Event
```

不是林夏自己在日历里写的。

---

# 15. 默认Calendar是否显示Mapped Event

建议：

```text
默认隐藏
```

玩家开启：

```text
Show Recovered Events
```

后才出现。

这更公平。

---

# 16. Other Calendars

玩家点击左栏：

```text
Recovery
Session
```

---

# 17. Recovery Calendar

包含：

```text
2016 Build事件
```

例如：

```text
2016-03-17
Environment Build
```

但初期可折叠。

---

# 18. Session Calendar

玩家点击：

```text
Session
```

Calendar跳到：

```text
2026
```

这是Chapter4关键时刻。

---

# 19. Session事件来源

只能来自：

```text
游戏内Event Log
```

允许类型：

```text
SESSION_START
SEARCH
PAGE_OPEN
PHOTO_VIEW
COMPARE
THREAD_OPEN
IDENTITY_RELATION
PROVENANCE_VIEW
DESKTOP_BOOT
APP_OPEN
FILE_OPEN
MESSAGE_VIEW
CALENDAR_VIEW
TERMINAL_COMMAND
SOURCE_INSPECT
```

---

# 20. 禁止记录

绝对禁止：

```text
玩家现实文件
浏览器其他标签
剪贴板
真实姓名
摄像头
麦克风
真实位置
现实搜索历史
```

---

# 21. Session Event数据结构

```ts
interface SessionEvent {
  id: string
  type: string
  at: string
  objectId?: string
  route?: string
  metadata?: Record<string, string>
}
```

---

# 22. 示例：SESSION_START

```text
10:02
SESSION_START
ROOM Archive
```

Source：

```text
CURRENT_OBSERVER
```

---

# 23. 示例：SEARCH

```text
10:05
SEARCH
林夏
```

只记录：

```text
游戏内ROOM Search
```

---

# 24. PAGE_OPEN

```text
10:08
OPEN
linxia-home.net
```

---

# 25. PHOTO_VIEW

```text
10:15
PHOTO_VIEW
Photo17
count=1
```

---

# 26. 第二次PhotoView

```text
10:21
PHOTO_VIEW
Photo17
count=2
variant=recon_v1
```

Chapter3后玩家回看会非常有价值。

---

# 27. Compare

```text
10:34
COMPARE
2007-08-15
2007-08-19
```

---

# 28. Forum

```text
11:12
OPEN
Summer17
```

---

# 29. Identity Relation

```text
11:36
IDENTITY_RELATION
Linxia ↔ Summer17
confidence=HIGH
```

注意：

这是：

```text
系统记录玩家完成的调查状态
```

不是现实真相自动生成。

---

# 30. Provenance

```text
12:08
PROVENANCE_VIEW
DSC0017.JPG
```

---

# 31. Desktop Boot

```text
12:41
DESKTOP_BOOT
RENV_SUBJECT04_20160317
```

---

# 32. APP_OPEN

```text
12:43
APP_OPEN
Files
```

---

# 33. FILE_OPEN

```text
12:45
FILE_OPEN
0817.txt
```

---

# 34. MESSAGE_VIEW

```text
12:53
MESSAGE_VIEW
顾言
```

---

# 35. Calendar自指事件

当玩家打开Calendar：

```text
12:58
CALENDAR_VIEW
Session
```

于是：

```text
Calendar里出现一条“打开Calendar”的记录
```

这会形成很轻的自指感。

---

# 36. 是否实时刷新

是。

玩家停留Calendar时：

新的Session Event可以：

```text
几秒后出现
```

但不要做得像魔法。

例如：

玩家在Calendar中打开某事件：

```text
不需要立刻生成EVENT_VIEW
```

避免无限递归。

---

# 37. 防止无限自记录

必须设规则：

```text
Calendar本身不记录每一次“看到Session事件”
```

只记录：

```text
第一次打开Calendar / Session层
```

否则会无限套娃。

---

# 38. Terminal Command

玩家输入：

```text
memory status
```

Session：

```text
13:22
TERMINAL_COMMAND
memory status
```

这是Chapter4最终高潮的重要事件。

---

# 39. Terminal history与Calendar必须一致

如果Terminal：

```text
history
```

显示：

```text
13:22 memory status
```

Calendar也必须：

```text
13:22 TERMINAL_COMMAND memory status
```

---

# 40. session.log也必须一致

三处：

```text
Calendar
Terminal history
session.log
```

必须使用：

```text
同一个Event Store
```

避免剧情逻辑Bug。

---

# 41. Session Calendar点击事件

点：

```text
SEARCH 林夏
```

右侧：

```text
Source:
CURRENT_OBSERVER

Recorded by:
Recovery Session Logger
```

这是第一次正式说明：

```text
系统只是在记录当前Session
```

---

# 42. Unknown Calendar回应

第一次：

> 现在也有你的东西了。

如果玩家问：

```text
这是我的记录？
```

Unknown：

> 是你在这里做过的事。

---

# 43. 问“为什么在林夏的日历”

> 你为什么觉得这是林夏的日历？

核心台词。

---

# 44. Calendar的真实UI名

顶部可以不叫：

```text
林夏的日历
```

而是：

```text
Calendar
```

玩家是自己默认理解。

这是公平误导的重要点。

---

# 45. Personal Calendar来源

真正属于林夏的：

```text
Personal
```

Session：

```text
Current Observer
```

Recovery：

```text
System Build / mapped historical objects
```

---

# 46. 三层切换UI

左栏：

```text
☑ Personal
☑ Recovered Events
☐ Session
```

当玩家勾Session：

```text
突然出现2026条目
```

而不是Calendar“自己变”。

---

# 47. 这比诡异跳年更高级

因为：

```text
系统从未隐藏Session存在
```

玩家只是：

```text
先入为主
```

---

# 48. 2016 Build事件

Recovery Calendar：

```text
2016-03-17 03:17
Environment Build
```

Source：

```text
SYSTEM
```

详情：

```text
RENV_SUBJECT04_20160317
```

---

# 49. 2015事件

可选：

```text
2015-08-23
Source Package Imported
```

不直接揭全部ROOM历史。

---

# 50. 03:17反复出现

玩家可发现：

```text
2007-08-18 03:17
2016-03-17 03:17
```

以及后续系统任务。

此时只应理解：

```text
Recovery Scheduler偏好03:17
```

不要超自然。

---

# 51. 03:17帮助

Terminal或Calendar Source：

```text
Anchor time selected from high-weight recovery event.
```

这解释：

```text
为什么桌面时钟总是03:17
```

---

# 52. Observer Profile字段

内部：

```ts
interface ObserverProfile {
  searches: number
  pageVisits: number
  repeatedViews: number
  evidenceOpened: number
  sourceChecks: number
  terminalCommands: number
  investigationStyle?: string
}
```

---

# 53. Calendar不显示“心理画像”

它只显示：

```text
事件
```

InvestigationProfile留Unknown/Chapter5。

---

# 54. Session事件标题规则

不要太自然语言。

使用机器式：

```text
SEARCH
OPEN
VIEW
COMPARE
COMMAND
```

让玩家意识：

```text
这是日志
```

---

# 55. Calendar 2007事件则更像人类

例如：

```text
体育馆
返校
相机
```

两层风格不同。

---

# 56. Layer Leakage

2007事件：

```text
旧PIM卡片
```

Session事件：

```text
现代ROOM细边框
```

视觉直接提示来源层。

---

# 57. Session日期

必须使用玩家真实游戏Session日期。

如果当前游戏世界设定固定2026-08-18：

也可以：

```text
Narrative Session Date固定
```

但不能与系统外真实设备时间强绑。

建议使用：

```text
Game Session Clock
```

---

# 58. 如果玩家跨现实日期回来

Session层可新增：

```text
new session
```

例如：

```text
SESSION_02
```

但只在玩家重新进入游戏时生成。

---

# 59. New Session事件

```text
SESSION_RESUME
```

而不是：

```text
偷偷后台跟踪
```

---

# 60. Calendar Search

可以搜：

```text
Photo17
Summer17
memory
```

搜索跨：

```text
Personal
Recovered
Session
```

结果必须显示Source。

---

# 61. 搜memory

在执行Terminal前：

```text
0 session results
```

执行后：

```text
TERMINAL_COMMAND memory status
```

出现。

---

# 62. 自指高潮

玩家：

```text
刚查完memory status
```

再打开Calendar：

```text
最新事件就是自己刚查memory status
```

这能自然触发：

Unknown：

> 现在这也是记录的一部分。

---

# 63. session.log

Terminal：

```text
type R:\SYSTEM\session.log
```

动态生成：

```text
[SESSION]
id=current_observer

10:02 SESSION_START
10:05 SEARCH linxia
10:08 PAGE_OPEN linxia_home
10:15 PHOTO_VIEW photo17
...
13:22 TERMINAL_COMMAND memory status
```

---

# 64. session.log不是2007文件

Source：

```text
SYSTEM
CURRENT_SESSION
```

---

# 65. Calendar与session.log对比

玩家可验证：

```text
同源
```

这说明：

```text
不是Calendar鬼异生成
```

而是：

```text
系统正常写日志
```

---

# 66. Unknown如何知道玩家行为

来源就是：

```text
Session Event Store
```

因此：

> “你已经看了那张照片五次。”

完全有机制解释。

---

# 67. Unknown不能知道未记录行为

例如：

玩家现实中：

```text
去喝水
切网页
```

Unknown不知道。

---

# 68. Session Event Storage

建议：

```text
Dexie / IndexedDB
```

表：

```text
session_events
```

---

# 69. session_events字段

```ts
id
sessionId
type
timestamp
objectId
route
metadata
```

---

# 70. Calendar从同一表读取

```text
CalendarSessionProvider
```

不要复制一份数据。

---

# 71. Unknown也从同一表读取

```text
ObserverModel
```

避免：

```text
Unknown说看5次
Calendar只记录4次
```

---

# 72. 第一章旧Event是否全保留

建议：

```text
保留关键行为
```

不是每一次鼠标点击。

例如：

```text
PAGE_VISIT
SEARCH
PHOTO_VIEW
COMPARE
```

足够。

---

# 73. Event去噪

不要记录：

```text
滚动
hover
每个按钮
```

否则Calendar太乱。

---

# 74. Session Calendar密度

首周目：

```text
20～40条
```

足够。

可折叠：

```text
Earlier Activity
```

---

# 75. Timeline Summary

Calendar顶部：

```text
Session Summary
```

可显示：

```text
Pages opened
Searches
Evidence relations
```

但不要变成“玩家画像”。

---

# 76. Current Observer

玩家第一次看到：

```text
Source: CURRENT_OBSERVER
```

还没有：

```text
405
```

锁死。

---

# 77. Observer405出现时机

Chapter5以后。

Chapter4仅：

```text
CURRENT_OBSERVER
```

---

# 78. Calendar关键Evidence

```text
E070 Calendar Personal 2007
E071 Recovery Build 2016
E072 Current Observer Session
E073 Session Terminal Command
E074 Anchor 03:17
```

---

# 79. PlayerKnowledge

```ts
knows_calendar_personal_layer
knows_calendar_recovery_layer
knows_calendar_session_layer
knows_calendar_contains_observer_data
knows_anchor_build_session_are_different
knows_session_log_and_calendar_same_source
```

---

# 80. Calendar完成的认知

玩家最终必须明白：

```text
这个Calendar不是“林夏的日历”
```

而是：

```text
Recovery Calendar
```

其中：

```text
Personal只是其中一个Source Layer
```

---

# 81. 最重要的一句话

> **“日历”这个应用只是一个时间视图。**
>
> 它把：
>
> ```text
> 林夏的历史
> Recovery系统历史
> 玩家当前Session
> ```
>
> 放进了同一套年月界面里。

---

# 82. 这与Messenger是同一个机制

Messenger：

```text
不同消息来源 → 联系人连续性
```

Calendar：

```text
不同时间来源 → 时间连续性
```

Files：

```text
不同目录来源 → 文件连续性
```

整个Recovery Desktop都在做：

```text
统一视图
```

---

# 83. ROOM的问题不是“完全造假”

而是：

> **它太擅长让不同来源的东西看起来本来就属于同一个连续世界。**

---

# 84. Chapter4最终Calendar场景

推荐：

1. 玩家输入：

```text
memory status
```

2. Terminal返回：

```text
PERSONA MEMORY GRAPH
STATUS: ERROR
```

3. 玩家切回Calendar。

4. 最新Session事件：

```text
TERMINAL_COMMAND
memory status
```

5. Unknown：

> 现在这也是记录的一部分。

6. Recovery Summary：

```text
Observer Context: ACTIVE
```

Chapter4结束。

---

# 85. QA要求

必须保证：

```text
Calendar Session
Terminal history
session.log
Unknown visit counts
```

共享同一Event Store。

---

# 86. 时区

游戏内统一：

```text
UTC+8
```

历史2007也是：

```text
南城本地时间
```

---

# 87. 时间格式

2007 Personal：

```text
2007.08.17
```

System：

```text
2016-03-17 03:17:02
```

Session：

```text
2026-xx-xx 10:23
```

不同层使用不同风格。

---

# 88. Calendar禁止的表现

不要：

```text
自动写玩家真实生日
真实会议
现实日历
“明天你会死”
```

全部禁止。

---

# 89. 可允许的预测

后期Unknown：

> 你明天还会回来。

只能作为：

```text
模型预测
```

不能预填进Personal Calendar。

---

# 90. Calendar的“明天”

如果未来做跨日New Game：

可以在Session层：

```text
Prediction
```

但必须标：

```text
SYSTEM PREDICTION
```

不是事实。

---

# 91. Canonical Lock

以下锁定：

```text
Calendar存在Personal / Recovery / Session三层
2007 Personal属于林夏真实/恢复日历
2016 Build属于System层
2026 Session只记录玩家游戏内行为
CURRENT_OBSERVER不是Subject405
Calendar与session.log共享Event Store
Terminal memory status会被Session记录
03:17是Anchor/Recovery高权重时间，不是鬼时间
```

---

# 92. 最终一句话

> 玩家真正害怕的不是“2007年的日历里为什么会出现2026”。
>
> 真正让人不舒服的是：
>
> **这个系统从来没有说这些事件属于同一个人。**
>
> 是日历这种天然强调连续性的界面，
>
> 让玩家自己把它们理解成了同一条人生。
