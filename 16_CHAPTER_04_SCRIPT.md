# ROOM 404：互联网失踪档案
# 16_CHAPTER_04_SCRIPT.md
## Chapter 04《恢复》完整可玩脚本 / Playable Script Canon

> 本文档将 `15_DESKTOP_RECOVERY_SYSTEM.md` 中的 Recovery Desktop 正式转化为：
>
> ```text
> Boot
> +
> Desktop
> +
> Files
> +
> Gallery
> +
> Messenger
> +
> Calendar
> +
> Settings
> +
> Terminal
> +
> Raw View
> +
> MEMORY ERROR
> +
> Unknown Stage 4
> +
> Chapter End
> ```
>
> 的完整可玩 Chapter 04。
>
> 本文档不是单纯系统说明。
>
> 它必须直接回答：
>
> ```text
> 玩家第一个看到什么？
> 第一个点什么？
> 文件里写什么？
> 哪一步产生误导？
> 哪一步开始拆掉误导？
> Calendar什么时候出现2026？
> Unknown什么时候说话？
> Terminal什么时候开放memory status？
> 什么条件下才能完成Chapter 4？
> ```
>
> 必须遵守：
>
> - `01_MASTER_TIMELINE.md`
> - `02_ROOM_TRUTH.md`
> - `03_LINXIA_CHARACTER.md`
> - `04_ZHOURAN_CHARACTER.md`
> - `05_GUYAN_CHARACTER.md`
> - `06_UNKNOWN_RULES.md`
> - `07_CHAPTER_01_SCRIPT.md`
> - `08_2003_SCHOOL_CONTENT.md`
> - `09_2007_HOMEPAGE_CONTENT.md`
> - `10_BLUEMOON_FORUM.md`
> - `12_CHAPTER_02_SCRIPT.md`
> - `13_PHOTO17_FORENSICS.md`
> - `14_CHAPTER_03_SCRIPT.md`
> - `15_DESKTOP_RECOVERY_SYSTEM.md`

---

# 0. Chapter 04 基础信息

```yaml
chapter_id: chapter_04
title_cn: 恢复
title_en: Recovery
estimated_playtime: 45-70 min
recommended_first_read: 18000-26000 chars
deep_exploration: 30000-45000 chars
anomaly_start: 3
anomaly_end: 4
unknown_stage_start: 3
unknown_stage_end: 4
main_space: RENV_SUBJECT04_20160317
```

本章入口：

```text
Chapter 03
↓
SUBJECT_04 / PHOTO17
↓
Associated Environment
↓
backup_20070823.zip

Identity dependency:
RESOLVED

Image provenance:
RESOLVED

Recovery environment:
AVAILABLE

[Begin Recovery]
```

本章结束时：

```text
玩家不能再合理地把桌面理解为
“林夏2007年的原电脑桌面”。

正确理解必须至少达到：

“这是ROOM在2016年以后，
把多个来源重新组织后生成的Recovery Environment。”
```

---

# 1. 本章真正的核心反转

Chapter 3解决的是：

```text
当前图片 ≠ 原图
```

Chapter 4把这个问题扩大到整个桌面：

```text
当前桌面 ≠ 原电脑
```

玩家一开始：

> “终于进林夏电脑了。”

玩家结束时：

> “我进入的是一个关于林夏的数据环境。”

这两句话之间，就是 Chapter 04。

---

# 2. 本章必须让玩家确认的硬事实

Chapter 04 最低完成后必须确认：

```text
1. backup_20070823是真实恢复数据包
2. 顾言参与了2007-08-23恢复工作
3. Recovery Environment的Build日期是2016-03-17
4. 2007-Legacy只是Display Profile
5. Files / Messenger / Calendar等应用是ROOM Recovery应用
6. Messenger把不同来源的聊天映射进统一联系人界面
7. Calendar同时挂载2007历史事件与2026玩家Session事件
8. 当前玩家的游戏内行为正被ROOM写入Observer/Session记录
9. MEMORY ERROR不是RAM错误
10. MEMORY ERROR对应Persona Memory Graph一致性失败
11. TEMPORAL / IDENTITY / SELF_REPORT是三个主要冲突类别
12. “完整桌面”本身就是后来构造出来的连续性
```

---

# 3. 本章仍然禁止完全揭示

不能在 Chapter 04 完整解释：

```text
ROOM = Recursive Online Object Memory
Subject 401 / 402 / 403完整历史
Subject04为什么后来变成404
ROOM人格连续性研究全部伦理争议
顾言2017退出全过程
Observer405正式注册逻辑
四结局
```

Chapter 04 只需让玩家明白：

> **ROOM已经不只是Archive。**

---

# 4. Chapter 04 总流程

推荐主路径：

```text
Begin Recovery
↓
Boot
↓
MEMORY ERROR
↓
Recovery Login
↓
Desktop
↓
自由探索 5～10分钟
↓
Files
↓
Gallery / Messenger
↓
玩家产生“这就是林夏电脑”的感觉
↓
Calendar
↓
发现2026 Session记录
↓
认知第一次断裂
↓
Settings / Desktop Properties
↓
发现Build 2016.03.17 / 2007-Legacy
↓
Messenger Source
↓
发现聊天来自多个来源
↓
Terminal
↓
whoami
↓
source
↓
memory status
↓
PERSONA MEMORY GRAPH ERROR
↓
environment.manifest
↓
recovery.log
↓
Raw View
↓
确认桌面目录是后来整理的
↓
Unknown Stage 4
↓
玩家彻底推翻“这是林夏原电脑”
↓
Chapter End
```

---

# 5. Chapter 04 页面 / 应用总表

```text
/recovery/subject04
│
├─ /recovery/boot
├─ /recovery/login
└─ /recovery/desktop
    │
    ├─ Files
    │  ├─ My Documents
    │  ├─ temp
    │  └─ Properties / Source
    │
    ├─ Gallery
    │
    ├─ Messenger
    │  ├─ 妈妈
    │  ├─ 周然
    │  ├─ 顾言
    │  ├─ 摄影社群
    │  └─ Unknown
    │
    ├─ Calendar
    │  ├─ 2007-08
    │  └─ 2026 Session
    │
    ├─ Browser
    ├─ Player
    ├─ Recycle Bin
    ├─ Settings
    └─ Terminal
```

系统对象：

```text
R:\SYSTEM\environment.manifest
R:\SYSTEM\recovery.log
R:\SYSTEM\memory.graph
R:\SYSTEM\session.log
```

---

# 6. Begin Recovery

玩家点击：

```text
[Begin Recovery]
```

屏幕从ROOM Archive现代UI切换。

不要：

```text
故障闪烁
红屏
巨大噪点
```

只是：

```text
黑色背景
小型灰白加载文字
```

---

# 7. Recovery Boot 开始

显示：

```text
ROOM RECOVERY SYSTEM
Environment Build 2016.03

Target:
SUBJECT_04

Source Package:
backup_20070823
```

停顿约：

```text
0.8s
```

随后：

```text
Preparing recovery environment...
```

---

# 8. Boot组件恢复顺序

逐行：

```text
USER PROFILE ............ OK
DOCUMENTS ............... OK
PHOTO ................... OK
MESSENGER CACHE ......... PARTIAL
BROWSER HISTORY ......... OK
CALENDAR ................ OK
DELETED FILES ........... PARTIAL
APPLICATION STATE ....... PARTIAL
MEMORY .................. ERROR
```

每行：

```text
100～250ms
```

不要拖太久。

---

# 9. MEMORY ERROR停留

到：

```text
MEMORY .................. ERROR
```

停：

```text
1.5～2秒
```

下方：

```text
Recovery can continue.
```

按钮：

```text
[Continue]
```

这是第一次 MEMORY ERROR。

---

# 10. MEMORY ERROR此时不解释

如果玩家点：

```text
Details
```

只显示：

```text
Memory consistency check failed.
See system log after environment initialization.
```

不要出现：

```text
Persona
```

太早。

---

# 11. Boot Event

```yaml
id: c04_boot_memory_error_seen
type: SYSTEM_VIEW
effects:
  memory_error_seen: true
  autosave: true
```

---

# 12. Recovery Login

进入：

```text
ROOM Recovery
```

用户卡：

```text
SUBJECT_04

Environment:
2007-Legacy
```

按钮：

```text
[Enter]
```

底部小字：

```text
Read-only recovery environment
```

---

# 13. 玩家可能误解

这是故意的。

视觉让人联想到：

```text
旧电脑登录
```

但实际上页面已经写：

```text
Recovery
Environment
```

这是公平误导。

---

# 14. Login Event

```yaml
id: c04_recovery_login
effects:
  recovery_shell_entered: true
```

---

# 15. 首次进入桌面

屏幕：

```text
1024×768感
```

壁纸：

```text
林夏拍的雨天窗户
```

桌面图标：

```text
我的文档
我的图片
Messenger
日历
回收站
播放器
终端
```

右下角：

```text
03:17
```

---

# 16. Chapter标题

玩家第一次真正看到桌面后：

左上短暂显示：

```text
CHAPTER 04
恢复
```

然后消失。

---

# 17. 第一阶段：让玩家相信这是林夏电脑

非常重要。

进入桌面后的前：

```text
5～10分钟
```

不要立即告诉玩家：

```text
“这是2016生成环境”
```

所有第一印象都应该支持：

```text
“终于到了她电脑里”
```

---

# 18. 桌面第一阶段可点击

立即开放：

```text
我的文档
我的图片
Messenger
播放器
```

稍后开放但图标存在：

```text
Calendar
Terminal
Settings
```

注意：

图标可以都能点。

只是系统引导不会强调。

---

# 19. 玩家自由探索阶段

内部：

```text
free_explore_count
```

每打开一个不同App：

```text
+1
```

达到：

```text
3
```

后可以触发：

```text
下一阶段软引导
```

不强制点击顺序。

---

# 20. 我的文档

打开：

```text
My Documents
```

窗口标题：

```text
我的文档
```

文件：

```text
diary.txt
todo.txt
photo_list.txt
0817.txt
unsent.txt
school.doc
links.txt
music.txt
temp/
```

---

# 21. todo.txt

正文：

```text
相机充电
把照片分一下
还周然那本书
问顾言网页空间
打印报名表
买空白光盘
整理相册
```

底部：

```text
照片先别删
```

这一行可写：

```text
后来补的
```

但不要明显强调。

---

# 22. todo.txt的作用

纯粹让玩家感觉：

```text
这是个真实生活文件
```

主线价值很低。

---

# 23. photo_list.txt

正文：

```text
0817 gym
67 photos

web:
先选10-12张

原图：
顾言那边有

不要直接覆盖
```

这与前三章呼应。

---

# 24. photo_list Event

```yaml
id: c04_photo_list_seen
effects:
  knows_photo_club_copy_was_intended: true
```

这不是新硬证据。

只是：

```text
进一步降低“顾言偷偷备份”的误解
```

---

# 25. diary.txt

不要写完整人格日记。

第一屏：

```text
07.28 下雨
08.03 原图
08.09 公交
08.12 首页
```

与主页Diary一致。

下方：

```text
drafts/
```

但打不开：

```text
Some entries unavailable.
```

---

# 26. 0817.txt

重要但不应取代 `/0817/private.html`。

正文：

> 17号。  
>   
> 下午去体育馆。  
>   
> 设备间那些图不发可以。  
> 但为什么一定要删。  
>   
> 周然说“意思一样”。  
>   
> 我现在最烦这句话。  
>   
> 顾言那边有原来的。  
>   
> 明天再说。

这比private更像本地速记。

---

# 27. 0817.txt Source

如果玩家右键：

```text
Properties
```

初期只有：

```text
Created:
2007-08-17

Recovered:
2007-08-23
```

按钮：

```text
[Source]
```

第一次可点击。

---

# 28. Source面板

```text
Source Type:
RECOVERED_FILE

Origin:
backup_20070823

Reconstruction:
NO
```

这是玩家第一次在Desktop里接触：

```text
Provenance
```

与Chapter3技能延续。

---

# 29. unsent.txt

内容不要是遗书。

正文：

> 如果以后有人看到这些东西，  
> 大概又会觉得我当时一定在想什么特别严重的事。  
>   
> 其实没有。  
>   
> 我只是很烦。  
>   
> 先存着。  
> 不发。

注意：

这可以是：

```text
后续02:03自邮件草稿的早期/局部版本
```

但不要完全等同。

---

# 30. unsent.txt的作用

玩家容易再一次：

```text
过度解读
```

但文本本身主动抵抗这种解读。

---

# 31. temp/

内容：

```text
index_old.htm
photo_tmp.jpg
~school.tmp
note1.txt
newfile.txt
```

大量无用。

---

# 32. 一个故意无用的文件

`note1.txt`：

```text
买电池
```

仅此而已。

这是必须的。

---

# 33. My Documents探索完成条件

只需：

```text
opened_documents >= 2
```

不强制读所有。

---

# 34. 我的图片 / Gallery

打开：

```text
我的图片
```

相册：

```text
学校
街道
摄影社
雨天
私人
```

Photo17：

```text
DSC0017.JPG
Original Source Verified
```

---

# 35. Gallery第一印象

玩家应该有：

```text
“这里终于全是原图了吧”
```

但这也不完全正确。

---

# 36. Gallery普通图片

至少：

```text
10～15张可开
```

多数无异常。

例如：

```text
公交
窗户
周然背影
顾言电脑
校门
天空
桌面壁纸原图
```

---

# 37. 某个Gallery对象的Source

例如：

```text
Window Rain cover.jpg
```

Source：

```text
WEB_CACHE
```

而不是：

```text
backup_20070823
```

这是第一次很轻的：

```text
“为什么我的图片里会有网页缓存？”
```

---

# 38. Gallery Source Mismatch Event

```yaml
id: c04_gallery_mixed_source_hint
conditions:
  opened_gallery_source_nonlocal: true
effects:
  source_mix_hint_count += 1
```

---

# 39. Messenger

玩家打开：

```text
Messenger
```

联系人列表：

```text
妈妈
周然
顾言
摄影社群
leaf
Unknown
```

---

# 40. 第一反应

玩家会自然理解：

```text
这是林夏聊天软件
```

这正是要的。

---

# 41. 妈妈聊天

内容主要生活：

```text
妈：
晚上回来吃饭吗

林夏：
不知道

妈：
冰箱有菜

林夏：
嗯

妈：
别又只吃面

林夏：
知道了
```

另一些：

```text
带伞
买牛奶
夜班
钥匙
```

不要案件化。

---

# 42. 妈妈聊天意义

把林夏从：

```text
数字谜题
```

拉回：

```text
普通生活的人
```

非常重要。

---

# 43. 周然聊天

建议玩家本章能看到三组：

```text
7月普通聊天
8月16争执前
8月17活动相关
```

---

# 44. 8月16关键聊天

Canonical：

周然：

> 明天别又临时改。

林夏：

> 我没有改过。

周然：

> 我是说计划。

林夏：

> 你每次都这样。

周然：

> 又怎么了。

后面：

```text
cache incomplete
```

不要恢复完整。

---

# 45. 这段的作用

继续表现：

```text
双方都在为“谁在改什么”争执
```

但不是犯罪证据。

---

# 46. 顾言聊天

普通：

```text
网页坏
相册空间
原图
读卡器
```

关键：

林夏：

> 原来的还在？

顾言：

> 在。

林夏：

> 别删。

顾言：

> 嗯。

---

# 47. “照片先别删”邮件/聊天引用

可以在顾言聊天里有：

```text
你邮件我看到了
没删
```

时间：

```text
2007-08-17 22:5x
```

但注意：

Master Timeline中的22:41邮件发出。

顾言回复可以：

```text
稍后
```

如果没有锁定精确回复时间，建议：

```text
不显示具体当夜回复
```

避免时间冲突。

---

# 48. 摄影社群

大量普通：

```text
谁带电池
陈海迟到
集合在哪
周然催人
许晓不来
```

8月14：

```text
17号旧体育馆
```

进一步支持既有时间线。

---

# 49. leaf聊天

只有少量论坛PM映射。

例如：

leaf：

> 你最近怎么老说删东西。

Summer17：

> 因为硬盘快满了。

显示在Messenger里会让玩家觉得：

```text
原来林夏跟leaf也聊天
```

但Source很重要。

---

# 50. leaf聊天 Source

右键：

```text
Source
```

显示：

```text
Source Type:
FORUM_PRIVATE_MESSAGE

Origin:
BlueMoon Archive

Mapped To:
Messenger
```

这是第一条非常强的：

> **Messenger不是原聊天软件，而是统一查看器。**

---

# 51. Source Mapping Event

```yaml
id: c04_messenger_mapping_seen
conditions:
  forum_pm_source_seen: true
effects:
  knows_messenger_is_aggregated_view: true
  source_mix_hint_count += 1
```

---

# 52. 玩家应产生疑问

> “为什么论坛私信会出现在这台电脑的Messenger联系人里？”

很好。

不要立刻解释。

---

# 53. Unknown联系人

点击：

```text
Unknown
```

窗口右侧：

```text
Source:
Unresolved
```

聊天历史包含玩家前几章收到过的Unknown消息。

也就是说：

```text
Chapter1/2/3的Unknown聊天
```

现在被映射进这个Messenger。

---

# 54. 这是非常重要的冲击

因为这些消息是：

```text
2026玩家Session里发生的
```

却出现在：

```text
看起来属于林夏2007电脑的Messenger
```

玩家第一次真正感觉：

```text
时间层混在一起了
```

---

# 55. Unknown Stage 3桌面第一条

如果玩家第一次主动点击Unknown：

> 这里看起来更像她，对吗？

这一句非常适合。

---

# 56. 玩家回复“这是她的电脑吗”

Unknown：

> 你已经这样叫它了。

不要直接回答。

---

# 57. 回复“你为什么在这里”

Unknown：

> 你也在这里。

这句很简洁。

---

# 58. 回复“你是2007的联系人吗”

Unknown：

> 不是。

这是可以直接回答的。

因为Canon明确。

然后：

> 但这个窗口没有问年份。

这句很好。

---

# 59. Messenger异质来源软提示

当玩家查看至少：

```text
2个Source
```

UI顶部出现：

```text
Conversation sources vary by thread.
```

帮助页：

```text
Recovery Messenger combines supported message sources into a unified view.
```

注意：

这是非常公平的明示。

---

# 60. 玩家此时如果已经明白桌面不是原系统

允许提前Flag：

```text
knows_desktop_mixes_sources = true
```

但Chapter仍需Calendar和Memory。

---

# 61. Player / 播放器

不是主线强制。

打开：

```text
Window Rain
untitled.mp3
track02.mp3
bus_window.wav
```

---

# 62. Player普通体验

播放：

```text
Window Rain
```

与林夏主页BGM呼应。

增加：

```text
“终于进入她旧电脑”
```

的情感沉浸。

---

# 63. Player Source彩蛋

`Window Rain`：

```text
Source:
WEB_CACHE
```

而不是硬盘。

进一步提示：

```text
Recovery Environment把网页资源也塞进播放器
```

---

# 64. Recycle Bin

可选但建议开放。

里面：

```text
old_index.htm
photo_tmp.jpg
test.txt
draft_old.txt
mail_unsent.eml
```

---

# 65. 普通垃圾

`test.txt`：

```text
123
```

`photo_tmp.jpg`：

```text
重复缩略图
```

不要每个垃圾文件都关键。

---

# 66. mail_unsent.eml

Chapter4中可以显示：

```text
Recovered fragment
```

Subject：

```text
如果以后有人看到
```

正文只恢复：

> 如果以后有人看到这些，  
> 别替我把没写完的地方补完。

这句很强。

但是否过于主题化？

可以保留为：

```text
后期完整草稿的一句真实林夏表达
```

需要注意林夏不能预知ROOM。

这句话只针对：

```text
别人解释她的文字
```

符合Canon。

---

# 67. Calendar第一次进入

默认：

```text
2007年8月
```

界面旧PIM风。

事件：

```text
8/14 摄影社
8/17 体育馆
8/18 -
```

---

# 68. 2007 Calendar事件

例如：

```text
08/14 16:00
摄影社讨论

08/17 16:00
体育馆

08/27
返校
```

这些可能来自：

```text
本地Calendar
```

Source：

```text
RECOVERED_CALENDAR
```

---

# 69. 8月18日

建议显示：

```text
无事件
```

或：

```text
空白
```

不要直接写：

```text
失踪
```

---

# 70. Calendar Search

右上：

```text
Search events
```

玩家若搜：

```text
林夏
```

可能无关。

如果搜：

```text
Photo17
```

系统会跨层检索。

但不必强制。

---

# 71. 2026入口方式

推荐两种都支持：

### 路径 A

日历年份下拉：

```text
2007
...
2016
...
2026
```

玩家自己发现。

### 路径 B

Calendar左侧：

```text
Other Calendars
```

有：

```text
Recovery Session
```

点击后直接到当前Session。

---

# 72. Other Calendars

初次：

```text
Personal
Recovery
Session
```

这已经略显不对。

---

# 73. 玩家点击Session

切到：

```text
2026
```

显示：

```text
当前玩家在ROOM 404里的事件
```

必须使用真实游戏事件数据。

---

# 74. 2026 Session示例

假设玩家游戏内行为：

```text
10:12 Search: 林夏
10:17 Opened: Linxia Home
10:23 Viewed: Photo17
10:41 Compared: 2007-08-15 / 2007-08-19
11:08 Opened: Summer17
11:34 Identity relation updated
12:03 Provenance: DSC0017
12:26 Recovery Environment opened
```

实际运行时：

```text
根据event log动态生成
```

---

# 75. Calendar 2026 UI

每条事件：

```text
时间
行为
对象
```

例如：

```text
10:23
VIEW
photo17
```

点击：

```text
Source:
CURRENT_OBSERVER
```

---

# 76. 首次Calendar 2026冲击

不要加音效。

不要页面闪。

玩家只是：

```text
发现一个不应该在这里的年份
```

这本身足够。

---

# 77. Calendar 2026 Event

```yaml
id: c04_calendar_2026_seen
conditions:
  calendar_year: 2026
effects:
  knows_calendar_contains_observer_data: true
  anomaly_level: 4
  autosave: true
```

---

# 78. Unknown Stage 4第一条

Calendar 2026关闭/切回桌面后：

通知：

```text
Unknown
1条新消息
```

内容：

> 现在也有你的东西了。

这是Chapter4关键Unknown。

---

# 79. 玩家回复“这是我的记录？”

Unknown：

> 是你在这里做过的事。

非常明确。

防止误解成：

```text
现实设备监控
```

---

# 80. 回复“你在监视我”

Unknown：

> 这个环境会记录Session。

保持系统感。

---

# 81. 回复“你知道我现实里做什么吗”

必须：

> 不知道。

可以再：

> 我只知道你在这里做过什么。

这明确隐私边界。

---

# 82. 回复“为什么写进林夏日历”

Unknown：

> 你为什么觉得这是林夏的日历？

这是Chapter4最强问题之一。

---

# 83. 这句话的意义

玩家终于被迫正面面对：

```text
自己从来没有证据证明
整个Calendar App属于林夏原电脑
```

---

# 84. Settings软引导

Calendar事件后：

桌面Recovery托盘：

```text
Recovery Information
```

出现轻微高亮。

或Unknown不提示。

玩家可以主动开：

```text
Settings
```

---

# 85. Settings首页

```text
Display
Sound
Environment
Recovery Information
```

点击：

```text
Recovery Information
```

---

# 86. Recovery Information

显示：

```text
Environment ID:
RENV_SUBJECT04_20160317

Build:
2016-03-17

Display Profile:
2007-Legacy

Source Package:
backup_20070823

Mode:
Reconstructed Environment

Access:
Read-only
```

这份页面已经基本摧毁：

```text
“2007原桌面”
```

的假设。

---

# 87. Settings Event

```yaml
id: c04_recovery_info_seen
effects:
  knows_recovery_shell_created_2016: true
  recovery_shell_evidence_count += 1
```

---

# 88. Desktop Properties

玩家右键桌面：

```text
Properties
```

同样显示：

```text
Display Profile:
2007-Legacy

Environment Build:
2016.03.17
```

作为替代路径。

---

# 89. 玩家若在Calendar前就看Settings

允许提前发现。

然后Calendar的冲击会变成：

```text
“原来2016系统还把我当前Session挂进来了”
```

而不是：

```text
“这不是2007电脑”
```

两种体验都成立。

---

# 90. Recovery Shell知识确认

条件：

```text
recovery_info_seen
OR
desktop_properties_seen
```

只设置：

```text
knows_shell_build_2016
```

还不能完整：

```text
knows_desktop_is_recovery_shell
```

还需证明应用在混合来源。

---

# 91. Messenger Source作为第二证据

当：

```text
knows_messenger_is_aggregated_view
```

且：

```text
knows_shell_build_2016
```

后：

```text
recovery_shell_evidence_count >= 2
```

---

# 92. Calendar Session作为第三证据

当：

```text
knows_calendar_contains_observer_data
```

后：

```text
recovery_shell_evidence_count >= 3
```

系统可判定：

```text
knows_desktop_is_recovery_shell = true
```

---

# 93. Knowledge Event

```yaml
id: c04_desktop_not_original
conditions:
  recovery_shell_evidence_count: ">=3"
effects:
  knows_desktop_is_recovery_shell: true
  unlock:
    - E041_recovery_build
    - E042_messenger_mapping
    - E043_calendar_session
```

---

# 94. 不需要弹结论

只是：

```text
Evidence Relation
```

显示：

```text
Recovery Environment
Build 2016
+
Mixed Message Sources
+
2026 Session Events
```

---

# 95. Terminal开放

Terminal从开局就可以点。

但：

```text
memory status
```

初期可能返回：

```text
Command unavailable.
System context not initialized.
```

当：

```text
memory_error_seen
AND
至少打开过2个App
```

后开放。

---

# 96. Terminal初始界面

```text
ROOM Recovery Console
Build 2016.03

Type "help" for commands.

R:\SUBJECT_04>
```

---

# 97. help

输出：

```text
dir
cd
type
source
whoami
history
object
memory
help
clear
```

后期解锁：

```text
mount
```

---

# 98. whoami第一次

如果尚未发现Calendar 2026：

```text
SUBJECT_04
```

如果已发现：

```text
SUBJECT_04
CURRENT_OBSERVER
```

注意：

不是：

```text
Subject405
```

太早。

---

# 99. whoami Event

```yaml
id: c04_whoami_seen
effects:
  subject04_terminal_seen: true
```

---

# 100. dir

```text
R:\SUBJECT_04

DOCUMENTS
PHOTOS
MESSAGES
CALENDAR
RECOVERED
SYSTEM
```

---

# 101. cd SYSTEM

目录：

```text
environment.manifest
recovery.log
memory.graph
session.log
```

初期：

```text
memory.graph
```

可以存在但部分锁。

---

# 102. type environment.manifest

显示：

```text
environment_id=RENV_SUBJECT04_20160317
display_profile=2007_LEGACY
source_package=backup_20070823
environment_mode=RECOVERY
merge_policy=continuity
```

---

# 103. merge_policy=continuity

玩家此时不理解。

如果输入：

```text
help continuity
```

返回：

```text
No local help entry.
```

不要解释。

---

# 104. environment.manifest Event

```yaml
id: c04_manifest_seen
effects:
  knows_environment_manifest: true
  unlock:
    - E044_environment_manifest
```

---

# 105. type recovery.log

显示：

```text
2016-03-17 03:17:02
Mounting source objects...

2016-03-17 03:17:04
Normalizing timestamps...

2016-03-17 03:17:05
Mapping message sources...

2016-03-17 03:17:06
Mapping calendar objects...

2016-03-17 03:17:07
Building user shell...

2016-03-17 03:17:10
Memory consistency check failed.

Recovery environment available.
```

---

# 106. Recovery Log关键点

玩家第一次看到：

```text
Building user shell
```

必须非常有力量。

这句话直接说明：

```text
桌面是构建出来的
```

---

# 107. Log Event

```yaml
id: c04_recovery_log_seen
effects:
  knows_ui_continuity_is_constructed: true
  unlock:
    - E045_recovery_log
```

---

# 108. source命令

示例：

```text
source R:\DOCUMENTS\0817.txt
```

返回：

```text
SOURCE TYPE:
RECOVERED_FILE

ORIGIN:
backup_20070823

RECONSTRUCTION:
NO
```

---

# 109. source Messenger对象

例如：

```text
source MSG:LEAF:0003
```

返回：

```text
SOURCE TYPE:
FORUM_PRIVATE_MESSAGE

ORIGIN:
BlueMoon Archive

MAPPED VIEW:
Messenger
```

这进一步验证UI映射。

---

# 110. source Unknown

```text
source MSG:UNKNOWN
```

返回：

```text
SOURCE TYPE:
UNRESOLVED

ORIGIN:
CURRENT RECOVERY SESSION

2007 SOURCE:
NONE
```

这是非常强的硬证据：

```text
Unknown不是2007联系人
```

---

# 111. Unknown Source Event

```yaml
id: c04_unknown_source_seen
effects:
  knows_unknown_not_original_contact: true
```

---

# 112. memory status

前提：

```text
memory_error_seen
```

输入：

```text
memory status
```

输出：

```text
PERSONA MEMORY GRAPH

SUBJECT:
04

STATUS:
ERROR

CONTINUITY:
FAILED

PRIMARY CONFLICTS:
TEMPORAL
IDENTITY
SELF_REPORT
```

第一次正式出现：

```text
PERSONA MEMORY GRAPH
```

---

# 113. 这是Chapter4最大系统真相之一

玩家终于知道：

```text
Boot的MEMORY
```

不是：

```text
RAM
```

而是：

```text
人物记忆模型
```

---

# 114. memory status Event

```yaml
id: c04_memory_status_seen
effects:
  knows_memory_error_is_persona_graph: true
  unlock:
    - E046_persona_memory_graph
  autosave: true
```

---

# 115. memory conflicts

如果玩家输入：

```text
memory conflicts
```

显示：

```text
TEMPORAL:
event date disagreement

IDENTITY:
multiple persistent identity profiles

SELF_REPORT:
subject statements conflict with source evidence
```

不要直接写：

```text
17/18
Linxia/Summer17
“17号没出门”
```

如果玩家已分别找到对应证据：

可展开：

```text
Related known conflicts:
```

再列。

---

# 116. TEMPORAL展开

若：

```text
knows_event_date_changed
```

显示：

```text
Example:
2007-08-17 / 2007-08-18 event date conflict
```

---

# 117. IDENTITY展开

若：

```text
knows_summer17_is_linxia
```

显示：

```text
Example:
Linxia / Summer17 identity relation
```

---

# 118. SELF_REPORT展开

若玩家已解锁：

```text
“17号我没有出门”
```

的缓存片段：

显示：

```text
Example:
subject self-report inconsistent with external source events
```

不要直接宣布：

```text
林夏说谎
```

除非后续完整证据。

---

# 119. 这一步的主题意义

ROOM把：

```text
不同日期
不同账号
自我隐瞒
```

统一称为：

```text
CONFLICT
```

玩家应该开始不舒服。

因为：

> **一个真实的人本来就可以矛盾。**

---

# 120. Unknown Stage 4主消息

触发：

```text
knows_memory_error_is_persona_graph
AND
knows_desktop_is_recovery_shell
```

Unknown：

> 你以为这是她的电脑。  
> 系统只说这是她的环境。

这是Chapter4最重要Unknown台词。

---

# 121. 玩家回复“区别是什么”

Unknown：

> 电脑是她用过的。  
> 环境是别人替她整理的。

这句可以说。

---

# 122. 回复“谁整理的”

Unknown：

> ROOM。

此时可以第一次把ROOM当系统主体称呼。

但不展开全称。

---

# 123. 回复“为什么”

Unknown：

> 因为不完整。

这一句非常重要。

然后停。

---

# 124. 回复“什么不完整”

Unknown：

> 她。

这是一个非常强的结尾式短句。

但建议：

```text
只在玩家主动追问两次后
```

否则太直接。

---

# 125. “因为不完整”是Chapter5入口

Chapter5真正会解释：

```text
ROOM的错误目标：
让Personality Continuity更完整
```

Chapter4只让玩家看到：

```text
系统把不一致视为需要修复
```

---

# 126. Raw View解锁

条件建议：

```text
manifest_seen
AND
recovery_log_seen
```

Terminal：

```text
mount raw
```

开始可用。

---

# 127. mount raw

输出：

```text
RAW SOURCE VIEW MOUNTED

R:\RAW\
```

注意：

这是：

```text
恢复包原始目录视图
```

不是玩家真实硬盘。

---

# 128. Raw Directory

```text
R:\RAW\

DOC\
my\
temp\
新建文件夹\
新建文件夹(2)\
photo\
qq\
iecache\
misc\
```

非常乱。

---

# 129. 与Recovery桌面对比

Recovery：

```text
Documents
Photos
Messages
Calendar
```

Raw：

```text
真实碎乱目录
```

这是一种非常强的非文字证据：

> **系统把杂乱碎片重新整理成了一个“像人会用的电脑”。**

---

# 130. Raw View Event

```yaml
id: c04_raw_view_seen
effects:
  knows_raw_directory_differs_from_shell: true
  knows_ui_continuity_is_constructed: true
  unlock:
    - E047_raw_vs_shell
```

---

# 131. 玩家可查看Raw中的qq缓存

文件名可能：

```text
msg001.dat
msg002.dat
cache_3.db
```

不像：

```text
“周然聊天.txt”
```

这说明：

```text
Messenger的整齐对话线程是后来解析出来的
```

---

# 132. Raw Photo目录

可能：

```text
DSC0001.JPG
DSC0017.JPG
thumbs.db
tmp_17.jpg
```

与Gallery分类：

```text
学校
街道
摄影社
```

明显不同。

---

# 133. Raw Calendar

可能只有：

```text
schedule.dat
```

并没有漂亮的：

```text
2007月历
```

---

# 134. 这就是“界面创造连续性”

Chapter4最需要玩家亲眼看见的东西。

---

# 135. Chapter4知识最终确认条件

建议：

```text
knows_desktop_is_recovery_shell
AND
knows_calendar_contains_observer_data
AND
knows_memory_error_is_persona_graph
AND
knows_ui_continuity_is_constructed
```

四项必须完成。

---

# 136. Chapter完成前的Environment Summary

Settings / Terminal均可打开：

```text
Recovery Summary
```

内容：

```text
Environment:
RENV_SUBJECT04_20160317

Source Package:
backup_20070823

Display:
2007-Legacy

Message Sources:
Mixed

Calendar Sources:
Historical + Session

Memory:
ERROR

Observer:
CURRENT
```

---

# 137. 玩家此时必须理解

不是：

```text
“这个桌面是假的，所以里面全是假。”
```

而是：

```text
“桌面是后来的，但是里面很多文件是真实恢复数据。”
```

非常重要。

---

# 138. Chapter4错误结论保护

如果玩家倾向：

```text
所有内容都是ROOM伪造
```

Unknown可在玩家打开一个已验证Original文件时说：

> 环境是后来做的。  
> 这个文件不是。

这句非常有价值。

防止滑向：

```text
全盘虚无主义
```

---

# 139. 推荐触发

条件：

```text
player_belief_all_fake >= high
AND
opened_verified_original_after_shell_reveal
```

Unknown：

> 环境是后来做的。  
> 这个文件不是。

---

# 140. Chapter4第二个重要认知

> **“容器是构造的”不代表“容器里的每个对象都是构造的”。**

这是后续 ARCHIVIST 结局所需的来源意识。

---

# 141. Calendar回看机制

当玩家执行：

```text
memory status
```

之后回Calendar 2026。

新事件：

```text
[时间]
TERMINAL COMMAND
memory status
```

必须实时出现。

---

# 142. 这条是Chapter4最终心理高潮候选

玩家刚刚查：

```text
系统如何记录自己
```

结果：

```text
查询行为本身又被记录
```

非常ROOM。

---

# 143. Calendar Command Event

动态生成：

```text
SESSION EVENT

Action:
TERMINAL_COMMAND

Value:
memory status
```

Source：

```text
CURRENT_OBSERVER
```

---

# 144. Unknown最终消息候选A

当玩家回Calendar看到该事件：

> 现在这也是记录的一部分。

推荐。

---

# 145. Unknown最终消息候选B

如果玩家已经大量反复检查：

> 你正在看它怎么记住你。

也很好。

---

# 146. Chapter4最终收束场景

推荐：

玩家完成：

```text
memory status
```

然后：

```text
Calendar自动出现新Session事件
```

此时：

```text
Recovery托盘弹出
Environment state updated
```

玩家打开：

```text
Recovery Summary
```

看到：

```text
Observer:
CURRENT
```

然后Unknown：

> 现在这也是记录的一部分。

Chapter 04进入结束状态。

---

# 147. Chapter End UI

不显示：

```text
Chapter Complete
```

桌面右下角Recovery图标状态：

```text
ENVIRONMENT UPDATED
```

点击：

```text
RECOVERY SUMMARY
```

底部多：

```text
Observer Context:
ACTIVE
```

---

# 148. Chapter End条件

```yaml
id: c04_complete

conditions:
  knows_desktop_is_recovery_shell: true
  knows_calendar_contains_observer_data: true
  knows_memory_error_is_persona_graph: true
  knows_ui_continuity_is_constructed: true

effects:
  chapter_complete: 4
  unknown_stage: 4
  unlock:
    - room_continuity_reference
    - chapter05_entry
  autosave: true
```

---

# 149. Chapter5入口

Terminal / Recovery Summary出现：

```text
ROOM CONTINUITY SERVICE

Observer Context:
ACTIVE

Memory Graph:
FAILED

Reconstruction:
AVAILABLE
```

按钮：

```text
[View Service Status]
```

或Terminal：

```text
service status
```

下一章：

```text
系统知道
```

---

# 150. 不要Chapter4直接显示ROOM全称

`ROOM CONTINUITY SERVICE`

已经足够。

全称：

```text
Recursive Online Object Memory
```

建议Chapter5 Terminal再揭。

---

# 151. 本章可选Branch：玩家先开Terminal

如果玩家进入桌面第一秒就开Terminal：

```text
whoami
```

看到：

```text
SUBJECT_04
```

然后：

```text
dir
```

可以探索。

但：

```text
memory status
```

如果Boot完成即可使用也不是问题。

Sequence Break允许。

这类玩家会比普通玩家更早发现：

```text
桌面不是单纯旧电脑
```

---

# 152. 是否真的锁memory status？

更推荐：

```text
不硬锁
```

如果玩家知道命令：

```text
可以直接运行
```

因为：

```text
公平考古游戏应奖励主动探索
```

只是Help列表可以在一定进度后才展示 `memory status`。

也就是：

```text
命令存在
但不主动告诉
```

---

# 153. Sequence Break原则

玩家知道：

```text
environment.manifest
memory status
mount raw
```

可以提前查。

游戏不应惩罚。

只需：

```text
知识Flag提前解锁
```

其余剧情根据Flag适配。

---

# 154. 如果玩家先发现桌面是2016 Build

Unknown首次桌面消息不要再：

> 这里看起来更像她，对吗？

可换：

> 你看得比这个界面快。

但这句略Meta。

更推荐：

> 你已经看到Build时间了。

非常直接。

---

# 155. 如果玩家先发现Calendar 2026

Unknown使用：

> 现在也有你的东西了。

不变。

---

# 156. 如果玩家完全不看Messenger

仍可完成：

```text
Settings + Calendar + Raw View + memory status
```

所以Messenger Source不是硬门槛。

---

# 157. 如果玩家完全不看Raw View

仍可：

```text
Settings Build
Messenger Mapping
Calendar Session
recovery.log
```

确认桌面构造。

Raw View是强证据但不必强制。

---

# 158. 最低三条“桌面不是原桌面”路径

可任选三类：

```text
Build 2016
Mixed Messenger Source
2026 Calendar
Building user shell log
Raw directory mismatch
Unknown no-2007 source
```

当 >=3：

```text
knows_desktop_is_recovery_shell
```

这样玩法自由。

---

# 159. Recovery Shell Evidence Counter

```ts
recoveryShellEvidence = {
  build2016: boolean,
  messengerMapping: boolean,
  calendar2026: boolean,
  buildUserShellLog: boolean,
  rawMismatch: boolean,
  unknownNo2007Source: boolean
}
```

完成：

```text
>=3
```

---

# 160. 本章主线不应依赖某一个小文件

尤其不要：

```text
必须找到隐藏文件123.txt
```

才能推主线。

核心应来自：

```text
系统关系
```

---

# 161. Chapter4玩家行为分类

Observer Model在桌面阶段开始有更多素材。

记录：

```text
first_app_opened
most_opened_app
files_read
messages_read
calendar_views
terminal_commands
source_checks
```

---

# 162. First App Unknown变体

如果第一App：

### Gallery

> 你还是先看照片。

### Messenger

> 你想先听她说话。

### Files

> 你先看她留下了什么。

### Terminal

> 你不太信这个界面。

### Calendar

> 你先找时间。

每种：

```text
只出现一次
```

且不是必须。

---

# 163. 不建议全部玩家都收到

可以只在：

```text
Unknown engagement高
```

时触发。

否则Unknown太吵。

---

# 164. Messenger内容开放层级

Chapter4首版：

```text
妈妈：8～12段
周然：8～10段
顾言：6～8段
摄影社群：5～8段
leaf：2～3段
Unknown：动态
```

完整内容另写：

```text
18_MESSENGER_SCRIPT.md
```

---

# 165. Files开放层级

首版：

```text
8～12个文件
```

完整另写：

```text
17_DESKTOP_FILES_CONTENT.md
```

---

# 166. Calendar开放层级

2007：

```text
10～15个事件
```

2026：

```text
动态Session事件
```

完整另写：

```text
19_CALENDAR_AND_SESSION_LOGS.md
```

---

# 167. Terminal完整日志

本章只需：

```text
environment.manifest
recovery.log
memory status
session.log
```

更深系统日志留：

```text
20_TERMINAL_SYSTEM_LOGS.md
```

---

# 168. session.log

Terminal：

```text
type R:\SYSTEM\session.log
```

内容动态：

```text
SESSION_START
SEARCH linxia
PAGE_OPEN linxia_home
PHOTO_VIEW photo17
...
DESKTOP_BOOT
APP_OPEN terminal
```

这与Calendar使用同源Event Log。

---

# 169. 为什么Calendar和session.log必须一致

这是关键QA。

玩家会对比。

如果时间/事件不一致：

```text
会破坏公平取证
```

除非是剧情有意异常。

Chapter4不要故意不一致。

---

# 170. 2026 Session时间

使用游戏实际Session时间。

但如果跨日：

```text
按玩家当前本地Session记录
```

不应写死成某一具体小时。

---

# 171. 隐私设计

Session Log只记录：

```text
游戏内部行为
```

例如：

```text
SEARCH
PAGE_OPEN
FILE_OPEN
TERMINAL_COMMAND
```

绝不记录：

```text
现实文件
现实应用
现实浏览器标签页
现实键盘输入（除游戏输入）
```

---

# 172. 玩家如果问Unknown“你知道我名字吗”

如果游戏内没有输入名字：

> 不知道。

如果玩家曾在游戏内主动填写昵称：

> 你告诉过系统一个名字。

不能暗示现实读取。

---

# 173. 本章视觉层混合

前半：

```text
2007 Legacy
```

后半：

```text
SYSTEM / ROOM现代中性层
```

混合方式：

```text
Properties右侧面板
Session Calendar tag
Terminal
Recovery Summary
```

不要Glitch。

---

# 174. Calendar 2026事件样式

旧2007事件：

```text
灰色旧PIM卡
```

2026 Session：

```text
现代细边框
ROOM字体
```

玩家视觉上就能感觉：

```text
不是同一层
```

---

# 175. Unknown聊天泡泡

2007联系人：

```text
旧即时通讯样式
```

Unknown：

```text
略现代
```

但不要明显科幻。

---

# 176. 本章音频

Boot：

```text
轻硬盘/启动声
```

Desktop：

```text
系统点击
窗口打开
```

Messenger：

```text
普通提示音
```

Calendar 2026：

```text
无恐怖音
```

Terminal：

```text
键入/轻提示
```

---

# 177. MEMORY ERROR音频

无警报。

可以：

```text
Boot磁盘声停一下
```

足够。

---

# 178. 最终Calendar Session写入

也不要音效。

玩家自己发现最好。

---

# 179. Chapter4异常预算

核心异常：

```text
1. Unknown存在于Recovery Messenger
2. Calendar出现2026玩家行为
3. whoami出现CURRENT_OBSERVER
4. Session行为实时写入
```

实际上这些都：

```text
不是超自然异常
```

而是系统机制。

---

# 180. 不能使用的Chapter4异常

禁止：

```text
真实桌面文件复制进游戏
鼠标自己移动
窗口强制无法关闭
摄像头画面
用户真实用户名
桌面出现“别回头”
```

---

# 181. ErrorBoundary

真实程序错误：

```text
Unexpected application error
Recovery progress preserved.
[Reload]
```

不要解释成：

```text
MEMORY ERROR
```

两个概念必须严格分离。

---

# 182. VFS删除行为

Recovery只读。

玩家点Delete：

```text
This environment is read-only.
```

不要让Unknown阻止。

---

# 183. 回收站的“恢复”

玩家可以：

```text
Preview recovered object
```

但不改变原VFS。

---

# 184. Start菜单“关闭Recovery”

永远可用。

显示：

```text
Return to ROOM Archive?
Progress will be saved.
```

这保持用户控制。

---

# 185. 玩家退出后再回来

Archive页面：

```text
Recovery Environment
Status:
SUSPENDED
```

按钮：

```text
[Resume]
```

进入时：

```text
短Resume动画
```

而不是完整Boot。

---

# 186. 再次进入的Unknown

不需要：

```text
欢迎回来
```

除非后期有一次高价值：

> 你又回到这个环境了。

但可不做。

---

# 187. Autosave点

必须：

```text
Boot完成
首次进入Desktop
首次查看Document Source
Messenger Mapping
Calendar 2026
Recovery Info
memory status
recovery.log
Raw View
Chapter End
```

---

# 188. Window状态保存

保存：

```text
位置
大小
打开应用
```

但Resume时可只恢复：

```text
最后2～3个窗口
```

避免过乱。

---

# 189. QA路径 A：普通玩家

```text
Boot
→ Files
→ Gallery
→ Messenger
→ Calendar
→ 2026
→ Settings
→ Terminal
→ memory status
→ recovery.log
→ End
```

必须通。

---

# 190. QA路径 B：技术玩家

```text
Boot
→ Terminal
→ whoami
→ dir SYSTEM
→ manifest
→ recovery.log
→ memory status
→ mount raw
→ Calendar
```

必须通。

---

# 191. QA路径 C：人物型玩家

```text
Boot
→ Messenger
→ 妈妈
→ 周然
→ 顾言
→ Unknown
→ Calendar
→ Settings
→ End
```

即使不深用Terminal，也要能通过UI获得Memory Graph信息。

---

# 192. 非Terminal版Memory Graph入口

Settings：

```text
Recovery Diagnostics
```

解锁条件：

```text
memory_error_seen
```

点击：

```text
Memory
```

显示与：

```text
memory status
```

等价的核心信息。

确保无Terminal玩家可通关。

---

# 193. QA路径 D：只爱点桌面

```text
Properties
→ Settings
→ Calendar
→ Messenger Source
→ Recovery Diagnostics
```

也通。

---

# 194. QA：Unknown Source

Unknown必须：

```text
2007 SOURCE: NONE
```

不能误标：

```text
Recovered Messenger
```

---

# 195. QA：Build时间

所有地方统一：

```text
2016-03-17
```

包括：

```text
Settings
manifest
recovery.log
Desktop Properties
```

---

# 196. QA：Anchor时间

Recovery Anchor：

```text
2007-08-18 03:17
```

不是Build时间。

必须区分：

```text
Anchor 2007
Build 2016
Session 2026
```

这是Chapter4最重要的三层时间。

---

# 197. 三层时间UI

建议帮助页：

```text
ANCHOR
Historical reference time

BUILD
Recovery environment creation time

SESSION
Current observer activity time
```

可以在玩家发现两层以上后解锁。

---

# 198. QA：Calendar

2007事件：

```text
Source = historical
```

2026：

```text
Source = current observer
```

绝不混标。

---

# 199. QA：Messenger

真实2007缓存：

```text
Recovered
```

Forum PM：

```text
Mapped
```

Unknown：

```text
Current Session / Unresolved
```

必须区分。

---

# 200. QA：Raw View

Raw目录不得和Recovery目录完全一样。

否则：

```text
“系统整理”结论不成立
```

---

# 201. QA：memory status

必须显示：

```text
PERSONA MEMORY GRAPH
```

不能只：

```text
MEMORY ERROR
```

否则玩家无法翻转“RAM错误”理解。

---

# 202. QA：Chapter End

不能仅因：

```text
玩家打开Calendar
```

就完成。

需要：

```text
Recovery Shell + Observer + Memory Graph + Constructed UI
```

四类认知。

---

# 203. Chapter4核心证据

建议正式编号：

```text
E040 backup_20070823 Source Package
E041 Recovery Build 2016.03.17
E042 Messenger Source Mapping
E043 Calendar Current Observer Events
E044 environment.manifest
E045 recovery.log
E046 Persona Memory Graph Error
E047 Raw Directory vs Recovery Shell
E048 Unknown Current Session Source
```

---

# 204. PlayerKnowledge正式字段

```ts
knows_backup_is_real_source_package
knows_shell_build_2016
knows_messenger_is_aggregated_view
knows_calendar_contains_observer_data
knows_unknown_not_original_contact
knows_desktop_is_recovery_shell
knows_memory_error_is_persona_graph
knows_ui_continuity_is_constructed
knows_raw_directory_differs_from_shell
```

---

# 205. Chapter4 Belief字段

可内部：

```text
trust_room
trust_recovery_ui
trust_original_files
completionism
system_focus
character_focus
```

Unknown动态使用。

---

# 206. 如果玩家开始不信所有文件

检测：

```text
trust_original_files low
```

Unknown：

> 环境是后来做的。  
> 这个文件不是。

条件：

```text
打开E030/E040等高可靠原始对象
```

---

# 207. 如果玩家仍说“这是林夏电脑”

Unknown：

> 哪一部分？

这是非常好的回应。

---

# 208. 如果玩家说“这是假的桌面”

Unknown：

> 桌面是后来做的。

然后：

> 文件有自己的来源。

这教育玩家：

```text
不要二元真假
```

---

# 209. 如果玩家说“ROOM在骗我”

Unknown：

> 它没有把“2007-Legacy”写成“2007 Original”。

这句很锋利。

可以作为高系统型玩家回应。

---

# 210. 这体现ROOM的伦理问题

ROOM很多时候：

```text
没有直接撒谎
```

但通过：

```text
界面设计
默认展示
连续结构
```

引导玩家形成：

```text
错误理解
```

这是比“AI撒谎”更高级的恐怖。

---

# 211. Chapter4主题

表层：

> **这台电脑里有什么？**

中层：

> **这些东西为什么被放在一起？**

深层：

> **一个足够自然的界面，能不能让一个后来构造的连续性看起来像历史本来就是这样？**

---

# 212. 与前三章的递进

```text
Chapter1：
两个日期

Chapter2：
两个账号

Chapter3：
多个照片版本

Chapter4：
一个完整环境本身也是一个版本
```

范围越来越大。

---

# 213. Chapter4最终玩家状态

理想：

```text
玩家不再相信UI表面
但开始更重视Source
```

这为最终ARCHIVIST路线打基础。

---

# 214. Chapter4最后建议场景

玩家在Terminal：

```text
memory status
```

返回：

```text
PERSONA MEMORY GRAPH
STATUS: ERROR
CONTINUITY: FAILED
```

随后打开Calendar。

最新Session：

```text
TERMINAL_COMMAND
memory status
```

Unknown：

> 现在这也是记录的一部分。

然后：

Recovery Summary：

```text
Observer Context:
ACTIVE
```

最后：

```text
ROOM CONTINUITY SERVICE
AVAILABLE
```

画面停。

非常适合作为Chapter4结束。

---

# 215. Chapter5开场预埋

下一章第一步：

```text
service status
```

或：

```text
[View Service Status]
```

玩家开始看到：

```text
Observer
Continuity
Persona
Reconstruction
```

ROOM从：

```text
恢复环境
```

正式变成：

```text
人格连续系统
```

---

# 216. Chapter4实际文本拆分建议

本文件只锁流程。

详细内容继续拆：

```text
17_DESKTOP_FILES_CONTENT.md
18_MESSENGER_SCRIPT.md
19_CALENDAR_AND_SESSION_LOGS.md
20_TERMINAL_SYSTEM_LOGS.md
```

然后再进入：

```text
21_CHAPTER_05_SCRIPT.md
```

---

# 217. P0开发顺序

第一阶段：

```text
Boot
Desktop
Window Manager
Files
Messenger
Calendar
Settings
Terminal
```

第二阶段：

```text
Source Mapping
Session Events
Memory Graph
Recovery Summary
```

第三阶段：

```text
Raw View
Recycle Bin
Player
Browser
更多普通内容
```

---

# 218. 最小Chapter4 Demo

如果现在开始编码，先实现：

```text
Boot
↓
Desktop
↓
todo.txt
↓
Messenger / 顾言
↓
Calendar 2007
↓
Calendar Session
↓
Settings Build 2016
↓
Terminal memory status
↓
Unknown
```

这已经能完整表达Chapter4核心。

---

# 219. Chapter4完成判断

不是：

```text
玩家把所有文件都看完
```

而是：

玩家真正经历了：

```text
“这是林夏电脑”
↓
“有点不对”
↓
“这个App在混来源”
↓
“为什么有2026”
↓
“这是2016 Build”
↓
“桌面是构造出来的”
↓
“MEMORY不是电脑内存”
↓
“系统正在把我也写进去”
```

这条认知链成立。

---

# 220. Canonical Lock

以下锁定：

```text
Chapter4标题《恢复》
Recovery Boot首先出现MEMORY ERROR
玩家初期被允许误认为这是林夏2007电脑
Recovery Login显示SUBJECT_04 / 2007-Legacy
桌面Anchor时间为2007-08-18 03:17
Build日期为2016-03-17
Messenger是多来源统一查看器
Unknown不是2007原始联系人
Calendar会显示CURRENT_OBSERVER游戏内行为
Settings/Properties可证明2007-Legacy只是Display Profile
Terminal prompt为R:\SUBJECT_04>
memory status揭示PERSONA MEMORY GRAPH
TEMPORAL / IDENTITY / SELF_REPORT为主要冲突类别
environment.manifest包含merge_policy=continuity
recovery.log包含Building user shell
Raw View与Recovery Shell目录不同
Chapter结束时玩家必须确认桌面是Recovery Environment
```

---

# 221. 禁止后续破坏

不要：

```text
把Recovery桌面改成真实2007完整桌面镜像
让Calendar读取现实日历
让Terminal读取现实文件
把Unknown变成2007真实联系人
把MEMORY ERROR改成普通硬件错误
让Recovery Shell里的所有文件都变成生成内容
让ROOM突然承认自己故意撒谎
```

---

# 222. 最终一句话

> Chapter 4 开始时，玩家终于得到了一样前三章都没有得到的东西：
>
> **一个看起来完整的林夏。**
>
> 她有文件，有照片，有聊天，有日历，有音乐，有桌面。
>
> 一切都被放在了该放的位置。
>
> 也正因为太完整了，
>
> 玩家最终才会发现真正不对劲的地方：
>
> **林夏留下来的从来不是这样一个完整的世界。**
>
> 是 ROOM 把那些原本分散、冲突、缺失、互不属于同一层的数据，
>
> **替她整理成了一个看起来像“她一直在这里生活过”的世界。**
