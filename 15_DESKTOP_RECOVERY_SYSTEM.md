# ROOM 404：互联网失踪档案
# 15_DESKTOP_RECOVERY_SYSTEM.md
## Chapter 04《恢复》桌面恢复系统 / Desktop Recovery System Canon

> 本文档定义 ROOM 404 Chapter 04 的“恢复桌面系统”最高优先级 Canon。
>
> 本章第一次把玩家从：
>
> ```text
> 浏览网页
> ↓
> 搜索论坛
> ↓
> 检查文件来源
> ```
>
> 推进到：
>
> ```text
> 进入一个看起来可以“居住”的数字环境
> ```
>
> 这个环境非常重要，因为它会让玩家产生一个危险但自然的错觉：
>
> > **“我终于进入林夏当年的电脑了。”**
>
> 实际上，这句话只对了一半。
>
> 正确描述是：
>
> > **玩家进入的是 ROOM 根据 `backup_20070823`、网页缓存、聊天缓存、照片、日历、浏览器历史与后期结构化数据生成的 Recovery Environment。**
>
> 它包含大量真实 2007 数据。
>
> 但：
>
> ```text
> 真实文件
> ≠
> 这个桌面环境本身也是真实2007桌面
> ```
>
> 这一差异是 Chapter 04 的核心。

---

# 0. 依赖文档

本文件必须遵守：

```text
01_MASTER_TIMELINE.md
02_ROOM_TRUTH.md
03_LINXIA_CHARACTER.md
04_ZHOURAN_CHARACTER.md
05_GUYAN_CHARACTER.md
06_UNKNOWN_RULES.md
07_CHAPTER_01_SCRIPT.md
08_2003_SCHOOL_CONTENT.md
09_2007_HOMEPAGE_CONTENT.md
10_BLUEMOON_FORUM.md
12_CHAPTER_02_SCRIPT.md
13_PHOTO17_FORENSICS.md
14_CHAPTER_03_SCRIPT.md
```

---

# 1. Chapter 04 基础信息

```yaml
chapter_id: chapter_04
title_cn: 恢复
title_en: Recovery
estimated_playtime: 45-70 min
anomaly_start: 3
anomaly_end: 4
unknown_stage: 3-4
main_space: ROOM Recovery Environment
```

Chapter 3 结束时：

```text
Identity dependency:
RESOLVED

Image provenance:
RESOLVED

Associated reconstruction:
SUBJECT_04

Recovery environment:
AVAILABLE
```

玩家点击：

```text
[Begin Recovery]
```

进入本章。

---

# 2. Chapter 04 核心问题

表层：

> **林夏的电脑里有什么？**

中层：

> **这些文件真的是同一台电脑、同一个时间点留下的吗？**

深层：

> **如果系统把不同来源的数据放进一个看起来完整的桌面里，玩家会不会自动把这个“界面上的连续性”误认为“现实中的连续性”？**

---

# 3. 本章必须确认的硬事实

本章结束前，玩家至少应确认：

```text
1. backup_20070823是真实存在的恢复数据来源
2. 顾言参与了2007-08-23的数据恢复
3. backup中包含Documents / Photos / Messenger Cache / Browser History / Calendar / Deleted Files
4. 部分文件确实来自林夏2007年的真实电脑
5. Recovery Desktop本身不是2007年的原始桌面镜像
6. 这个桌面是ROOM后来将多个数据源包装成的可交互环境
7. Calendar中开始出现不属于2007年的玩家Session活动
8. MEMORY ERROR不是RAM错误，而是人格记忆图无法形成稳定、自洽的连续模型
```

仍然不能完全揭示：

```text
ROOM全称
Subject04后来为何成为404
ROOM完整Subject 401-404实验史
顾言全部伦理冲突
2016聊天/云层的完整伪装逻辑
最终结局机制
```

---

# 4. 最重要的 Canon

## 4.1 Recovery Desktop不是林夏原电脑的屏幕录像

禁止写成：

```text
这是林夏电脑2007年的完整桌面备份
```

正确：

```text
这是ROOM Recovery System将多个可恢复对象重新挂载后形成的模拟桌面环境。
```

---

# 5. 数据层与表现层必须分开

内部结构：

```text
RAW / SOURCE LAYER
↓
RECOVERED OBJECT LAYER
↓
NORMALIZED DATA LAYER
↓
RECOVERY ENVIRONMENT
↓
DESKTOP UI
```

玩家最初只看到：

```text
DESKTOP UI
```

后期才逐步看到下面几层。

---

# 6. 为什么这很危险

真实数据可能分别来自：

```text
2007林夏硬盘
BlueMoon论坛缓存
林夏个人主页
学校摄影社电脑
ROOM Archive
2016迁移数据
后期重建对象
```

但Recovery Desktop把它们摆成：

```text
我的文档
我的图片
聊天记录
日历
```

于是玩家自然认为：

> “这些本来就同时存在于林夏电脑里。”

这正是 UI 制造的叙事。

---

# 7. 顾言对此的后期批评

Canonical：

> “你们不是在恢复环境。  
> 你们是在替这些文件发明一个共同的过去。”

Chapter 04 可以暂时只发现残句：

```text
...common past...
```

完整句留Chapter 5。

---

# 8. Recovery Boot流程

玩家点击：

```text
Begin Recovery
```

进入：

```text
ROOM RECOVERY SYSTEM
```

视觉：

```text
黑底
灰白字
极少蓝色状态
```

不是恐怖终端。

像：

```text
旧恢复工具 / 企业系统
```

---

# 9. Boot阶段文本

```text
ROOM RECOVERY SYSTEM
Environment Build 2016.03

Target:
SUBJECT_04

Source Package:
backup_20070823

Preparing recovery environment...
```

随后逐项：

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

---

# 10. MEMORY ERROR第一次出现

必须：

```text
普通
冷静
不解释
```

不要：

```text
红色大字
警报
屏幕震动
```

只显示：

```text
MEMORY ........ ERROR
```

然后：

```text
Recovery can continue.
```

按钮：

```text
[Continue]
```

---

# 11. MEMORY ERROR不是电脑内存错误

内部 Canon：

```text
MEMORY
=
Persona Memory Graph
```

即：

ROOM尝试建立：

```text
事件
关系
个人叙述
照片
聊天
日记
身份
```

之间的连续人物记忆图。

因为林夏数据存在：

```text
矛盾
自我修改
撒谎
缺失
多账号
```

所以：

```text
无法形成单一自洽Memory Graph
```

于是：

```text
MEMORY ERROR
```

---

# 12. 玩家第一次不会知道这个含义

玩家会自然理解为：

```text
内存错误
```

这是允许的。

后面 Terminal 才逐步纠正。

---

# 13. Boot成功后

显示：

```text
ENVIRONMENT READY
```

然后短暂：

```text
Loading user shell...
```

进入仿旧桌面。

---

# 14. 桌面时代定位

目标：

```text
Windows XP / 2000 / 早期国产皮肤混合感
```

但不要：

```text
1:1复制Windows商标
```

建议制作原创：

```text
ROOM Legacy Shell
```

视觉上让玩家觉得：

```text
2007个人电脑
```

但细节并非完整克隆真实OS。

---

# 15. 桌面基础视觉

分辨率感：

```text
1024×768
```

壁纸：

```text
林夏拍的一张雨后窗户 / 天空 / 城市
```

任务栏：

```text
底部
```

左下：

```text
开始
```

右下：

```text
时间
音量
网络
```

---

# 16. 桌面时间第一次显示

建议：

```text
03:17
```

但日期不要直接写：

```text
2007-08-18
```

点击时钟后：

```text
2007-08-18
03:17
```

玩家会产生：

```text
这是林夏电脑当时的状态？
```

实际上：

```text
2016 Recovery环境把高权重时间03:17作为默认恢复锚点
```

后期解释。

---

# 17. 为什么是03:17

真实链：

```text
2007-08-18 03:17
林夏电脑Unexpected Restart

↓
2015 ROOM
将其标为高权重恢复事件

↓
2016 Recovery
默认恢复任务时间锚点

↓
2026 Session
继续重复
```

不是鬼时间。

---

# 18. 桌面图标

第一屏建议：

```text
我的文档
我的图片
Messenger
日历
回收站
播放器
终端
```

可选：

```text
浏览器
记事本
设置
```

---

# 19. 文件应用

App ID：

```text
files
```

显示名：

```text
我的文档
```

功能：

```text
文件夹浏览
文本打开
属性
来源
恢复状态
```

第一章进入Desktop后：

```text
来源标签默认隐藏
```

玩家后期逐步解锁：

```text
Properties → Provenance
```

---

# 20. 我的文档初始结构

```text
My Documents/
├── diary.txt
├── todo.txt
├── photo_list.txt
├── 0817.txt
├── unsent.txt
├── school.doc
├── links.txt
├── music.txt
└── temp/
```

注意：

不是每个都主线。

---

# 21. diary.txt

定位：

```text
本地日记/草稿集合索引
```

不直接等于：

```text
主页Diary
```

可包含：

```text
未发布内容
网页草稿
短句
```

---

# 22. todo.txt

普通：

```text
充电
洗照片
改相册
还周然书
问顾言网页空间
打印报名表
```

后期某一项：

```text
“照片先别删”
```

可以有。

但不要让todo全是案件。

---

# 23. photo_list.txt

记录：

```text
照片整理清单
```

例如：

```text
0817 gym
67 photos

web:
maybe 12

delete:
none
```

这能强化：

```text
她倾向不删原图
```

---

# 24. 0817.txt

这是重要文件。

第一版不应一打开就给全部真相。

建议内容：

```text
17号
体育馆
设备间
周然
照片
顾言备份
```

像：

```text
整理中的个人笔记
```

与 `/0817/private.html` 部分重合。

但措辞不能完全一样。

---

# 25. unsent.txt

不是“遗书”。

应该是：

```text
没发出的邮件/自言自语草稿
```

可与：

```text
“如果以后有人看到”
```

联系。

但真正重要版本留在Deleted Files / Email Cache中。

---

# 26. school.doc

普通：

```text
学校活动资料
社团申请
摄影社文案
```

可能包含：

```text
旧体育馆活动v1
```

但不是核心。

---

# 27. temp文件夹

必须有大量：

```text
.tmp
bak
old
```

例如：

```text
index_old.htm
photo_tmp.jpg
note1.txt
~school.tmp
```

提升真实感。

---

# 28. 我的图片 / Gallery

App ID：

```text
gallery
```

初始显示：

```text
相册
摄影社
街道
学校
私人
```

玩家已见Photo17。

这里首次看到：

```text
更多原始缩略图
```

---

# 29. Gallery最重要设计

每张图片都可：

```text
View
Properties
Provenance
```

但：

```text
Gallery默认展示的是Recovery环境选择版本
```

不一定全是原图。

这继续Chapter3主题。

---

# 30. Gallery提示

第一次进入：

```text
Some images were recovered from multiple sources.
```

玩家可点：

```text
Details
```

但不会强制。

---

# 31. Photo17在Gallery

显示：

```text
DSC0017.JPG
```

并有：

```text
Original Source Verified
```

因为Chapter3已完成。

玩家获得安全锚点。

---

# 32. 其他照片

建议：

```text
60%普通
20%人物关系
10%谜题
10%重建异常
```

不要每张都鬼影。

---

# 33. Messenger

App ID：

```text
messenger
```

视觉：

```text
2007即时通讯软件
```

联系人：

```text
妈妈
周然
顾言
摄影社群
BlueMoon网友
Unknown
```

注意：

Unknown不是原始联系人。

---

# 34. Messenger数据来源

必须明确内部：

```text
真实IM缓存
+
网页论坛私信
+
恢复的聊天碎片
+
ROOM结构化映射
```

所以：

```text
Messenger UI ≠ 2007原始聊天软件截图
```

它是Recovery统一查看器。

---

# 35. 玩家最初不知道这一点

看起来就像：

```text
林夏2007年的聊天软件
```

这是故意的。

后期Properties显示：

```text
Source:
Messenger Cache
Forum PM
Recovered Fragment
```

玩家才意识。

---

# 36. 妈妈联系人

对话风格：

```text
普通
生活化
```

内容：

```text
吃饭
回家
夜班
带伞
买东西
```

作用：

```text
现实锚点
```

不要全是失踪。

---

# 37. 周然联系人

聊天量：

```text
较多
```

内容：

```text
活动
吐槽
时间
照片
普通朋友互动
```

其中包含：

```text
8月16日晚
“明天别又临时改”
```

和：

```text
8月17活动前后
```

---

# 38. 顾言联系人

聊天量：

```text
中等
```

特点：

```text
短
技术
备份
网页
相机
```

关键：

```text
“原来的还在。”
```

与：

```text
“照片先别删”
```

---

# 39. 摄影社群

群聊：

```text
周然
林夏
顾言
陈海
许晓
```

大量：

```text
集合
迟到
器材
相机
吃饭
```

重要用来证明：

```text
他们不是只在案件发生前才联系
```

---

# 40. BlueMoon网友

如：

```text
leaf
night_train
```

不要全部搬论坛。

仅少量PM/聊天碎片。

---

# 41. Unknown在Messenger中的特殊性

第一次进入Messenger联系人列表：

```text
Unknown
```

可能已经存在。

玩家会以为：

```text
这是原聊天对象？
```

点击：

显示：

```text
Source:
Unresolved
```

而不是：

```text
2007联系人
```

这第一次暗示：

```text
Recovery环境把Unknown也塞进来了
```

---

# 42. Unknown在Chapter4升级到Stage4前的行为

首先只是：

> 这里看起来更像她，对吗？

非常适合桌面开场。

---

# 43. Calendar

App ID：

```text
calendar
```

视觉：

```text
旧PIM日历
```

默认打开：

```text
2007年8月
```

真实事件：

```text
8/14 摄影社计划
8/17 旧体育馆
8/18 ?
```

---

# 44. Calendar最大的Chapter4机制

玩家逐渐会发现：

```text
2026年日期
```

存在。

一开始日历左侧：

```text
2007
```

用户切：

```text
2026
```

或搜索：

```text
林夏
```

后发现：

```text
今天的玩家行为记录
```

---

# 45. 2026 Calendar记录示例

必须完全来自游戏内行为。

例如：

```text
2026-08-18

19:45
Search: 林夏

19:48
Opened:
linxia-home.net

19:52
Viewed:
Photo17

20:06
Compared:
2007/08/15
2007/08/19

20:31
Opened:
Summer17
```

具体时间按真实Session事件生成。

---

# 46. 绝不能写现实隐私

禁止：

```text
用户真实桌面
真实浏览器历史
真实名字
真实照片
```

Calendar只记录：

```text
ROOM 404内事件
```

---

# 47. 玩家首次发现2026 Calendar

这是Chapter4最大心理冲击之一。

因为前面他以为：

```text
这是林夏的桌面
```

但：

```text
里面竟然有自己的调查记录
```

问题立刻变成：

> **这个桌面到底属于谁？**

---

# 48. Calendar的真正来源

内部：

```text
Recovery Environment
+
Observer Model Event Log
```

ROOM把玩家Session：

```text
挂载到同一个Calendar应用
```

这不是穿越。

是：

```text
统一环境视图
```

---

# 49. Calendar首次2026 Event

```yaml
id: c04_calendar_2026_seen
effects:
  knows_recovery_environment_contains_observer_data: true
  anomaly_level: 4
```

---

# 50. Unknown回应

> 这不是她的日历。

停顿。

> 也不全是。

非常好。

或者更克制：

> 你现在也在里面。

推荐后者。

---

# 51. 回收站

App ID：

```text
recycle_bin
```

显示：

```text
删除文件
恢复残片
```

但必须区分：

```text
用户删除
恢复工具识别Deleted File
Archive缺失
```

---

# 52. 回收站对象

建议：

```text
draft_0818.txt
old_index.htm
chat_fragment.dat
photo_note.tmp
mail_unsent.eml
```

其中：

```text
mail_unsent.eml
```

可能对应：

```text
2007-08-18 02:03
“如果以后有人看到”
```

但Chapter4只解锁部分。

---

# 53. Recycle Bin不是“所有秘密都在垃圾桶”

避免套路。

里面：

```text
80%普通垃圾
```

比如：

```text
旧图片
测试HTML
临时文档
重复文件
```

---

# 54. 删除文件的来源标签

```text
Deleted by user
Recovered from unallocated space
Temporary file
Unknown deletion state
```

这些后续很重要。

---

# 55. Browser History

可作为Files里一个入口或独立App。

建议独立：

```text
浏览历史
```

但首桌面图标不显示。

从：

```text
Browser
```

打开历史。

---

# 56. Browser

App ID：

```text
browser_legacy
```

打开后：

```text
林夏主页
BlueMoon
学校
```

看似旧浏览器。

但它其实是：

```text
Recovery Browser
```

把历史URL映射到本地Archive。

---

# 57. Browser History内容

真实2007历史：

```text
linxia-home.net
bluemoon-forum.net
nc2ms.edu
```

以及：

```text
8/17网吧访问
```

后期还能出现：

```text
2026 ROOM Archive
```

这进一步暴露环境混合。

---

# 58. Webamp / Player

App ID：

```text
player
```

风格：

```text
Winamp-like
```

但原创外壳。

播放列表：

```text
Window Rain
Track 02
untitled.mp3
bus_window.wav
```

---

# 59. 音频作用

主要：

```text
生活感
```

不是每首都线索。

可在某文件：

```text
ID3 Comment
```

发现：

```text
2007网页BGM来源
```

但不作为主线。

---

# 60. Player的一个高级用途

某些音频可能来源：

```text
网页缓存
```

不一定存在于林夏本机。

玩家查看Properties：

```text
Source:
Web Cache
```

又一次证明：

```text
桌面环境是汇总视图
```

---

# 61. Terminal

App ID：

```text
terminal
```

视觉：

```text
普通黑底终端
```

不是“黑客游戏”。

初期命令：

```text
help
dir
cd
type
whoami
history
object
source
recover
```

---

# 62. Terminal不是Windows CMD完全复刻

建议自定义：

```text
ROOM Recovery Console
```

Prompt：

```text
R:\SUBJECT_04>
```

这会让玩家第一次直接看到：

```text
SUBJECT_04
```

---

# 63. whoami

第一次：

```text
SUBJECT_04
```

玩家自然：

```text
所以这个桌面属于林夏？
```

后面完成Observer数据发现后：

```text
whoami
```

可能变：

```text
SUBJECT_04
OBSERVER: CURRENT
```

再后：

```text
OBSERVER_405
```

但Chapter4最好只到：

```text
CURRENT_OBSERVER
```

---

# 64. dir

展示：

```text
R:\SUBJECT_04
```

目录：

```text
DOCUMENTS
PHOTOS
MESSAGES
CALENDAR
SYSTEM
RECOVERED
```

---

# 65. source命令

这是Chapter4重要新能力。

例如：

```text
source diary.txt
```

返回：

```text
SOURCE TYPE:
RECOVERED_FILE

ORIGIN:
backup_20070823

CREATED:
2007-08-xx

MODIFIED:
...

RECONSTRUCTION:
NO
```

---

# 66. source Messenger聊天

例如：

```text
source msg_zhou_0816
```

返回：

```text
SOURCE:
MESSENGER_CACHE

COMPLETENESS:
78%

RECONSTRUCTED:
NO
```

---

# 67. 某些聊天

可能：

```text
RECONSTRUCTED:
PARTIAL
```

玩家第一次看到：

```text
聊天也可能被补全
```

不要过早大量用。

---

# 68. object命令

```text
object SUBJECT_04
```

初期：

```text
ACCESS PARTIAL
```

显示：

```text
Associated source:
backup_20070823

Environment:
RECOVERY

Memory:
ERROR
```

---

# 69. memory命令

玩家尝试：

```text
memory
```

初期：

```text
Unknown command
```

或者：

```text
memory status
```

需要后续从Help发现。

更推荐：

```text
memory status
```

返回：

```text
PERSONA MEMORY GRAPH
STATUS: ERROR

Reason:
INCONSISTENT SOURCE EVENTS
```

但不解释Persona是什么。

---

# 70. MEMORY ERROR深一层信息

满足玩家发现：

```text
17/18矛盾
Summer17/Linxia双账号
公开Diary/隐藏Diary冲突
```

后：

```text
memory status
```

可返回：

```text
Conflicts:
TEMPORAL
IDENTITY
SELF-REPORT
```

这三个类别正对应前三章。

---

# 71. MEMORY ERROR不是“故障”

玩家后期会理解：

> **真实林夏本来就不完全自洽。**

而ROOM把这种：

```text
人类正常矛盾
```

当成：

```text
需要修复的Memory Error
```

这直接通往系统伦理问题。

---

# 72. Settings

App ID：

```text
settings
```

初期可打开：

```text
桌面主题
声音
显示
Recovery Information
```

---

# 73. Recovery Information

显示：

```text
Environment:
ROOM Recovery

Build:
2016.03

Source Package:
backup_20070823

Mode:
Reconstructed Environment
```

这是一个很重要但容易被忽略的真相。

玩家如果早看Settings：

```text
可以提前知道桌面不是原始2007桌面
```

允许聪明玩家Sequence Break。

---

# 74. 为什么可以允许

因为公平原则：

```text
真相不是强制藏起来
```

玩家只是：

```text
容易因为视觉先入为主忽略
```

这是比硬锁更高级的误导。

---

# 75. Recovery Build 2016.03

与Canon：

```text
2016-03-17
首次完整用户环境恢复
```

一致。

可以显示：

```text
Build 2016.03.17
```

但不解释。

---

# 76. Desktop Properties

右键桌面：

```text
Properties
```

可看到：

```text
Environment Version:
2016.03.17

Display Profile:
2007-Legacy
```

这其实早就说明：

```text
2016系统模拟2007界面
```

但玩家未必注意。

---

# 77. Window Manager

核心功能：

```text
可拖动
最小化
最大化
关闭
多窗口
任务栏
窗口层级
```

建议：

```text
窗口状态持久化
```

玩家关掉再打开：

```text
位置保留
```

增强“桌面感”。

---

# 78. 窗口数量限制

不要无限开。

建议：

```text
桌面同时5～7个窗口
```

性能和可用性平衡。

---

# 79. 右键菜单

桌面：

```text
排列图标
刷新
新建文件夹（禁用/只读）
属性
```

文件：

```text
打开
属性
查看来源
恢复版本
```

---

# 80. 桌面只读原则

Chapter4初期：

```text
Recovery Environment is read-only
```

玩家不能真的删除/修改原始对象。

如果点击删除：

```text
Create local session annotation?
```

最好先不提供。

避免破坏证据状态。

---

# 81. 为什么只读

既合理：

```text
档案恢复环境
```

又保护：

```text
玩家不会误删主线文件
```

---

# 82. 文件Properties

字段：

```text
Name
Type
Size
Created
Modified
Recovered
Source
Integrity
```

后期加：

```text
Reconstruction
Generation
```

---

# 83. 文件来源分类

Recovery中必须使用统一标签：

```text
ORIGINAL
RECOVERED
ALTERED
RECONSTRUCTED
GENERATED
SYSTEM
UNKNOWN
```

但Chapter4初期UI可以只显示：

```text
Recovered
Cached
System
```

完整分类逐步展开。

---

# 84. 桌面图标来源

重要：

连：

```text
Messenger
Calendar
Gallery
```

这些“应用”都不是林夏原系统exe。

而是：

```text
ROOM Recovery viewer apps
```

只是使用：

```text
2007-Legacy skin
```

---

# 85. 玩家何时意识到这一点

至少三条证据：

```text
Settings显示Build 2016.03
Calendar出现2026
Messenger source来自多个媒介
```

完成：

```text
knows_desktop_is_recovery_shell
```

---

# 86. 本章核心Flag

```ts
knows_backup_is_real_source_package
knows_desktop_is_recovery_shell
knows_messenger_is_aggregated_view
knows_calendar_contains_observer_data
knows_memory_error_is_persona_graph
knows_recovery_environment_mixes_sources
```

---

# 87. Chapter4主线系统玩法

虽然本文件不是完整脚本，但推荐主线：

```text
Recovery Boot
↓
MEMORY ERROR
↓
Desktop
↓
Files / Gallery自由探索
↓
Messenger
↓
Calendar
↓
发现2026 Session记录
↓
开始怀疑桌面归属
↓
Settings / Properties / Terminal
↓
确认Build 2016
↓
确认Recovery Shell混合来源
↓
memory status
↓
PERSONA MEMORY GRAPH ERROR
↓
Unknown Stage4
```

---

# 88. Chapter4的第一小时体验

不要一进入就疯狂异常。

前20分钟：

```text
非常像“终于拿到林夏电脑”
```

玩家应有：

```text
兴奋
考古
窥探感
```

这非常重要。

然后逐渐：

```text
东西对不上年代
```

---

# 89. 桌面中的“普通生活”

必须大量存在。

例如：

```text
作业
照片
MP3
购物清单
壁纸
聊天
网页收藏
```

如果桌面只有：

```text
失踪秘密
```

就会假。

---

# 90. 收藏夹

Browser Favorites：

```text
BlueMoon
南城二中
天气
相机论坛
免费空间
公交查询
雨天收集站
```

普通。

---

# 91. Recent Documents

可显示：

```text
photo_list.txt
school.doc
index.html
todo.txt
```

不要：

```text
murder_secret.txt
```

---

# 92. 桌面壁纸

建议：

```text
林夏自己拍的雨天玻璃
```

原始文件可在：

```text
Gallery
```

找到。

Properties：

```text
Source:
backup_20070823
```

这使桌面有真实感。

---

# 93. Start Menu

```text
我的文档
我的图片
Messenger
日历
播放器
浏览器
终端
设置
```

底部：

```text
注销
关闭 Recovery
```

---

# 94. “关闭Recovery”

可以点击。

显示：

```text
Return to ROOM Archive?
Progress will be saved.
```

必须真的可退出到Archive。

不做：

```text
你无法退出
```

---

# 95. “注销”

显示：

```text
Recovery profile:
SUBJECT_04
```

点击：

```text
Return to Recovery Login
```

---

# 96. Recovery Login

开机后可以有一个很短登录屏。

```text
User:
SUBJECT_04

Environment:
2007-Legacy
```

无密码。

按钮：

```text
Enter
```

---

# 97. 为什么无密码

这是：

```text
档案恢复环境
```

不是实际账户登录。

避免玩家误以为：

```text
破解林夏电脑密码
```

---

# 98. 桌面右下角

托盘：

```text
Volume
Network
Recovery
```

Recovery图标Hover：

```text
ROOM Recovery Environment
Source: backup_20070823
```

又一个公平线索。

---

# 99. Network图标

不是联网2007互联网。

显示：

```text
Archive Network
```

点击：

```text
External network access disabled.
```

防止玩家觉得：

```text
可以真的访问现实2007网站
```

---

# 100. 系统时间

托盘时间：

```text
03:17
```

点击：

```text
Recovery Anchor:
2007-08-18 03:17

Session:
2026-xx-xx
```

这两个时间可以后期同时出现。

第一次只显示Anchor。

---

# 101. 时间双层机制

Recovery系统维护：

```text
anchor_time
session_time
```

anchor：

```text
恢复环境参考时间
```

session：

```text
玩家当前调查时间
```

Calendar将两者统一展示。

---

# 102. 这是为什么Calendar能出现2026

不是：

```text
时间穿越
```

而是：

```text
Recovery app同时挂载Anchor Events + Session Events
```

---

# 103. Desktop Event Log

建议统一：

```ts
DESKTOP_BOOT
APP_OPEN
FILE_OPEN
MESSAGE_VIEW
CALENDAR_VIEW
TERMINAL_COMMAND
WINDOW_CLOSE
SOURCE_INSPECT
```

Observer Model可读取。

---

# 104. Unknown如何利用桌面行为

例如玩家：

```text
先打开Gallery
```

Unknown：

> 你还是先看照片。

玩家：

```text
先打开Messenger
```

Unknown：

> 你想听她说话。

玩家：

```text
先开Terminal
```

Unknown：

> 你不太信这个桌面。

这是Stage3/4很好的行为反射。

---

# 105. Unknown不能成为桌面助手

不要：

```text
不停提示下一步
```

它仍然：

```text
少
精准
```

---

# 106. Messenger中的Unknown第一次桌面消息

推荐：

> 这里看起来更像她，对吗？

玩家此时很容易认同。

---

# 107. 后期第二条

Calendar 2026被发现：

> 现在也有你的东西了。

---

# 108. 第三条

当玩家确认Recovery Shell：

> 你以为这是她的电脑。  
> 系统只说这是她的环境。

非常强。

---

# 109. Recovery Environment命名

内部：

```text
RENV
```

例如：

```text
RENV_SUBJECT04_20160317
```

后期Terminal可看到。

---

# 110. 环境Manifest

隐藏文件：

```text
R:\SYSTEM\environment.manifest
```

内容：

```text
environment_id=RENV_SUBJECT04_20160317
display_profile=2007_LEGACY
source_package=backup_20070823
merge_policy=continuity
```

最后一行：

```text
merge_policy=continuity
```

Chapter4后半可以解锁。

是大伏笔。

---

# 111. merge_policy=continuity

不要立刻解释。

玩家可能理解：

```text
保持桌面连续
```

后期才知道：

```text
ROOM的目标就是Persona Continuity
```

---

# 112. environment.manifest来源

```text
SYSTEM
```

不是2007文件。

这能证明：

```text
桌面环境后来生成
```

---

# 113. Recovery Log

```text
R:\SYSTEM\recovery.log
```

建议：

```text
2016-03-17
Mounting source objects...
Normalizing timestamps...
Mapping messages...
Mapping calendar...
Building user shell...
Memory graph failed consistency check.
```

---

# 114. “Normalizing timestamps”

这是重要风险词。

意味着：

```text
系统可能把不同数据按统一时间视图整理
```

不是伪造时间。

但会：

```text
制造视觉连续性
```

---

# 115. “Mapping messages”

说明：

```text
不同聊天来源被映射到Messenger
```

---

# 116. “Building user shell”

直接证明：

```text
桌面是Build出来的
```

---

# 117. MEMORY log

```text
Memory graph:
FAILED

Conflict count:
17

Primary categories:
TEMPORAL
IDENTITY
SELF_REPORT
```

不要出现：

```text
SOUL
CONSCIOUSNESS
```

太科幻。

---

# 118. 为什么TEMPORAL

例如：

```text
17 / 18活动日期
```

---

# 119. 为什么IDENTITY

例如：

```text
Linxia / Summer17
```

---

# 120. 为什么SELF_REPORT

例如：

```text
“17号我没有出门”
vs
实际证据
```

---

# 121. ROOM认为这些是“Memory Error”

这开始显示：

```text
系统的错误目标
```

它把：

```text
人的矛盾表达
```

当成：

```text
模型一致性问题
```

---

# 122. 玩家应逐渐意识

> **林夏没有“坏掉”。**
>
> 是ROOM无法接受一个人同时留下互相冲突的版本。

但不要在Chapter4直接写成台词。

让玩家推。

---

# 123. 文件内容来源层

建议每个对象内部都有：

```yaml
object_id:
display_name:
origin:
origin_time:
ingest_time:
source_type:
integrity:
reconstruction:
```

---

# 124. 一个真实文件例子

```yaml
object_id: doc_todo_20070816
display_name: todo.txt
origin: backup_20070823
origin_time: 2007-08-16
source_type: RECOVERED
integrity: 1.0
reconstruction: none
```

---

# 125. 一个Messenger碎片例子

```yaml
object_id: msg_zhou_0816
origin: messenger_cache
source_type: RECOVERED
integrity: 0.81
reconstruction: none
```

---

# 126. 一个部分重建聊天例子

```yaml
object_id: msg_unknown_fragment
origin: mixed
source_type: RECONSTRUCTED
integrity: 0.46
reconstruction: generation_2
```

---

# 127. UI默认不要显示所有内部字段

玩家先看：

```text
文件内容
```

想深入：

```text
Properties
```

再：

```text
Source
```

这保持可读性。

---

# 128. Chapter4桌面体验的核心技巧

同一个文件：

第一次：

```text
看内容
```

后期：

```text
看来源
```

页面不变。

认知变。

延续前几章设计哲学。

---

# 129. 真实2007文件不要突然写ROOM

例如：

```text
diary.txt
```

绝不能包含：

```text
ROOM
Subject04
未来
```

除非文件来源其实是后期重建。

所有年代穿帮必须：

```text
可追溯到Recovery/System层
```

---

# 130. 2016层的“伪2007”内容

可以存在：

```text
2016桌面皮肤
```

但不能：

```text
把2016聊天伪装成林夏真实2016手机
```

那是后续跨设备层，需要更谨慎。

---

# 131. 桌面中的2016痕迹

要少而明确：

```text
Build 2016.03
manifest
recovery.log
```

这足以。

---

# 132. Chapter4视觉进展

前半：

```text
稳定2007风格
```

中段：

```text
Properties开始出现ROOM字体/现代层
```

后半：

```text
Calendar 2026
Terminal系统层
```

视觉逐渐混合。

---

# 133. 不要用故障滤镜表现混合

更高级：

```text
窗口里出现一个明显属于2026 Archive的中性组件
```

例如：

Calendar右侧详情突然使用：

```text
ROOM Archive的现代字体
```

这是Layer Leakage。

---

# 134. Layer Leakage规则

只有系统生成/Session内容：

```text
可以使用现代UI样式
```

真实2007数据：

```text
保持旧UI
```

玩家从视觉就能开始区分来源层。

---

# 135. Messenger Layer Leakage

Unknown对话泡泡：

```text
可比其他2007聊天更现代
```

很轻微。

不要变成：

```text
霓虹科幻聊天
```

---

# 136. Calendar Layer Leakage

2007事件：

```text
旧PIM风格
```

2026 Session事件：

```text
更现代的ROOM Tag
```

这是非常强的视觉提示。

---

# 137. Terminal始终是系统层

所以：

```text
字体/风格较现代中性
```

与桌面旧皮肤有差异。

合理。

---

# 138. Desktop安全边界

该桌面：

```text
完全运行在游戏内虚拟文件系统
```

不能：

```text
读取玩家真实文件系统
列C盘
读取剪贴板
扫描本地图片
```

Terminal的：

```text
dir
```

只操作：

```text
ROOM VFS
```

---

# 139. Terminal安全提示不需要对玩家大段声明

实现层保证即可。

若玩家尝试：

```text
cd C:\
```

返回：

```text
Path unavailable in recovery environment.
```

---

# 140. Virtual File System

建议：

```text
IndexedDB
```

或内存/JSON+Dexie。

结构：

```text
VFS Node
```

---

# 141. VFS数据结构

```ts
interface VfsNode {
  id: string
  name: string
  type: "file" | "folder" | "app" | "virtual"
  parentId?: string

  contentRef?: string

  origin?: string
  sourceType?: string
  createdAt?: string
  modifiedAt?: string
  recoveredAt?: string

  integrity?: number
  reconstructionGeneration?: number

  hidden?: boolean
  locked?: boolean
}
```

---

# 142. Window State

```ts
interface WindowState {
  id: string
  appId: string
  title: string
  x: number
  y: number
  width: number
  height: number
  minimized: boolean
  maximized: boolean
  zIndex: number
}
```

---

# 143. Desktop Store建议

```text
desktopStore
```

管理：

```text
windows
activeApp
taskbar
selectedIcon
wallpaper
```

---

# 144. VFS Store

```text
vfsStore
```

管理：

```text
nodes
permissions
unlockedSources
```

---

# 145. Recovery Store

```text
recoveryStore
```

管理：

```text
environmentId
anchorTime
memoryStatus
resolvedDependencies
```

---

# 146. Observer Store

继续记录：

```text
appOpenCounts
fileViews
messageViews
calendarViews
terminalCommands
```

供Unknown使用。

---

# 147. 应用组件目录

推荐：

```text
src/apps/
├── Files/
├── Gallery/
├── Messenger/
├── Calendar/
├── Browser/
├── Player/
├── RecycleBin/
├── Terminal/
└── Settings/
```

---

# 148. 桌面组件

```text
src/components/desktop/
├── Desktop.tsx
├── DesktopIcon.tsx
├── Window.tsx
├── WindowManager.tsx
├── Taskbar.tsx
├── StartMenu.tsx
├── SystemTray.tsx
├── ContextMenu.tsx
└── RecoveryOverlay.tsx
```

---

# 149. Recovery Engine

推荐：

```text
game/recovery/
├── RecoveryEngine.ts
├── EnvironmentBuilder.ts
├── SourceMapper.ts
├── MemoryGraph.ts
└── ProvenanceResolver.ts
```

---

# 150. EnvironmentBuilder职责

输入：

```text
source objects
```

输出：

```text
VFS
Apps
Calendar Events
Message Threads
Gallery Albums
```

不要在组件里硬编码故事。

---

# 151. SourceMapper

例如：

```text
BlueMoon PM
↓
Messenger thread
```

```text
Web image
↓
Gallery item
```

```text
Browser cache
↓
Browser history
```

这正是“Recovery环境汇总”的技术实现。

---

# 152. MemoryGraph

第一版不必做复杂AI。

只做：

```text
冲突检测数据
```

例如：

```ts
{
  temporalConflicts: 4,
  identityConflicts: 2,
  selfReportConflicts: 3
}
```

然后UI：

```text
MEMORY ERROR
```

---

# 153. 不能真的做“人格AI”作为Chapter4前置

主线必须：

```text
数据驱动
可测试
可复现
```

以后模型API只能是可选增强。

---

# 154. Messenger数据也预写

不要让LLM自由生成关键聊天。

关键证据：

```text
必须固定
```

普通聊天也最好：

```text
预写池
```

确保年代口吻。

---

# 155. Player应用状态持久化

Dexie/IndexedDB：

```text
desktop state
opened files
window positions
read messages
calendar selected date
terminal history
```

刷新后保留。

---

# 156. Boot是否每次出现

第一次进入Chapter4：

```text
完整Boot
```

之后从Archive重新进入：

```text
短Boot
```

或：

```text
Resume Environment
```

按钮。

---

# 157. Resume

显示：

```text
Recovery environment suspended.
```

按钮：

```text
Resume
Restart Environment
Return to Archive
```

---

# 158. Restart Environment

只重置：

```text
窗口状态
```

不重置：

```text
剧情进度
```

避免误操作。

---

# 159. Reset Recovery Data

不要放普通UI。

只有：

```text
游戏设置 → Reset Chapter
```

用户明确选择才重置。

---

# 160. MEMORY ERROR不阻止桌面使用

非常重要。

如果它卡住：

```text
就像系统故障
```

但我们要表达：

```text
环境可用，只是人格连续模型失败
```

因此Boot写：

```text
Recovery can continue.
```

---

# 161. 玩家会怎样错误理解MEMORY ERROR

第一阶段：

```text
电脑内存坏了
```

第二阶段：

```text
备份缺失
```

第三阶段：

```text
某种“林夏记忆”失败
```

后期：

```text
ROOM把矛盾的人类记录视为错误
```

认知逐层升级。

---

# 162. Chapter4结束的理想认知

玩家应从：

> “我进入了林夏的电脑。”

变成：

> “我进入了一个系统为林夏搭出来的环境。”

但仍可能问：

> “里面那些真实文件和这个环境里的‘林夏’，边界到底在哪？”

这正是Chapter5入口。

---

# 163. Chapter4的最大视觉隐喻

**桌面图标排列得过于完整。**

真实旧电脑：

```text
乱
```

Recovery Shell：

```text
整齐
```

最开始玩家觉得：

```text
好用
```

后来意识：

```text
这是系统整理后的结果
```

---

# 164. 可设计一个证据

真实硬盘目录：

```text
非常乱
```

例如：

```text
新建文件夹
新建文件夹(2)
aaa
temp
照片
```

Recovery桌面：

```text
Documents
Photos
Messages
Calendar
```

这个对比非常强。

---

# 165. Raw View

Terminal后期命令：

```text
mount raw
```

可看到：

```text
原始目录碎片
```

这瞬间证明：

```text
Recovery UI重组了文件
```

但建议Chapter4后半开放。

---

# 166. Raw View中的目录

例如：

```text
/RecoveredDisk/
├── DOC/
├── my/
├── temp/
├── 新建文件夹/
├── 新建文件夹(2)/
├── photo/
├── qq/
└── iecache/
```

比桌面乱很多。

---

# 167. 这不会贬低Recovery

它确实：

```text
让数据更易浏览
```

问题只是：

```text
易浏览的结构也会影响解释
```

这就是ROOM主题。

---

# 168. Chapter4内容资产预算

建议最终：

```text
Documents：8k～12k字
Messenger：10k～15k字
Calendar：2k～3k字
Terminal/System：4k～6k字
Browser/History：2k～3k字
Recycle Bin：3k～5k字
普通环境文本：4k～6k字
```

Chapter4总池：

```text
30k～45k字
```

首周目：

```text
18k～25k字
```

---

# 169. 普通聊天比例

Messenger：

```text
70%生活
20%人物关系
10%关键证据
```

继续坚持。

---

# 170. Files比例

```text
60%普通
20%人物
10%来源机制
10%主线
```

---

# 171. Calendar比例

2007：

```text
学校
生日
活动
作业
```

2026：

```text
纯玩家调查事件
```

两层对撞。

---

# 172. Player比例

播放器绝大多数：

```text
非主线
```

这能给玩家“住进旧电脑”的感觉。

---

# 173. Terminal比例

Terminal是：

```text
高密度系统真相
```

但不要强制普通玩家全靠命令。

同样信息应有：

```text
UI路径
```

Terminal只是快捷/深度方式。

---

# 174. 无Terminal玩家也必须能通关

例如：

```text
Settings
Properties
Calendar
```

足够确认：

```text
Recovery Shell
```

Terminal只是更快看到：

```text
Memory Graph
```

---

# 175. Chapter4核心证据建议

```text
E040 backup_20070823 Manifest
E041 Recovery Environment Build 2016.03
E042 Messenger Source Mapping
E043 Calendar 2026 Session Entries
E044 environment.manifest
E045 recovery.log
E046 Persona Memory Graph Error
E047 Raw Directory vs Recovery Shell
```

---

# 176. Chapter4核心Knowledge

```ts
knows_backup_is_real
knows_recovery_shell_created_2016
knows_desktop_mixes_sources
knows_calendar_contains_session_events
knows_unknown_not_original_contact
knows_memory_error_is_model_consistency_failure
knows_ui_continuity_is_constructed
```

---

# 177. 本章Unknown主台词候选

第一阶段：

> 这里看起来更像她，对吗？

Calendar之后：

> 现在也有你的东西了。

确认Recovery Shell：

> 你以为这是她的电脑。  
> 系统只说这是她的环境。

MEMORY ERROR后：

> 它一直想让她记得同一个版本。

最后一句可以留Chapter5，避免过早。

---

# 178. 本章禁用恐怖套路

不要：

```text
桌面突然出现玩家真实文件
摄像头应用自动打开
系统读取真实用户名
Wallpaper变鬼脸
回收站自己清空
Messenger出现“你身后”
Terminal黑客攻击现实电脑
```

全部禁止。

---

# 179. 允许的“恐怖”

```text
Calendar记录玩家游戏内行为
桌面Build年份不对
同一个聊天来自多个来源
Unknown混进联系人
SYSTEM manifest说明环境是后来构建
MEMORY ERROR代表人物矛盾无法被系统接受
```

这是ROOM 404自己的恐怖。

---

# 180. Chapter4系统的主题句

内部编剧锚点：

> **“界面不是事实的容器。界面也会替事实安排关系。”**

---

# 181. 与前三章的递进

```text
Chapter1：
网页版本

Chapter2：
账号版本

Chapter3：
照片版本

Chapter4：
整个“人”的环境版本
```

到这里ROOM真正开始从：

```text
档案
```

进入：

```text
人格重建
```

---

# 182. Chapter4结束钩子建议

玩家执行：

```text
memory status
```

看到：

```text
PERSONA MEMORY GRAPH
STATUS: ERROR

SUBJECT:
04

CONTINUITY:
FAILED

RECONSTRUCTION REQUIRED
```

然后下面首次出现：

```text
ROOM CONTINUITY SERVICE
```

但不展开全称。

这为Chapter5：

```text
系统知道
```

准备。

---

# 183. 或者更克制的结尾

Calendar中突然出现：

```text
2026-xx-xx
OPENED: memory status
```

几秒前玩家刚执行。

这证明：

```text
环境正在实时把玩家行为写进“记忆”视图
```

Unknown：

> 现在这也是记录的一部分。

非常强。

---

# 184. 推荐Chapter4最终收束

建议同时完成：

```text
MEMORY ERROR含义初步揭示
+
Calendar记录玩家行为
+
Recovery Shell不是原始桌面
```

但：

```text
ROOM为什么要做Persona Continuity
```

留Chapter5。

---

# 185. Chapter4开发优先级

P0：

```text
Recovery Boot
Desktop
Window Manager
Files
Gallery
Messenger
Calendar
Settings
Terminal基础
MEMORY ERROR
```

P1：

```text
Recycle Bin
Browser
Player
Raw View
Provenance Properties
```

P2：

```text
更多普通文件
更多聊天
更多音频
桌面彩蛋
```

---

# 186. MVP最低可玩桌面

如果先做Demo：

```text
Recovery Boot
↓
Desktop
↓
Files
↓
Messenger
↓
Calendar
↓
Terminal
```

只要这五个应用能跑，

Chapter4核心已经成立。

---

# 187. MVP必做文件

```text
todo.txt
photo_list.txt
0817.txt
unsent.txt
environment.manifest
recovery.log
```

---

# 188. MVP必做Messenger

```text
妈妈
周然
顾言
Unknown
```

---

# 189. MVP必做Calendar

```text
2007-08
2026 Session
```

---

# 190. MVP必做Terminal

```text
help
dir
type
source
whoami
memory status
```

---

# 191. MVP必做设置

```text
Recovery Information
Build 2016.03.17
Source package backup_20070823
```

---

# 192. Chapter4后续脚本文档

下一份应进入：

```text
16_CHAPTER_04_SCRIPT.md
```

把本文件转成真正：

```text
Boot第几秒出现什么
玩家首次进入桌面能点什么
哪个文件先解锁
Messenger具体读什么
Calendar什么时候出现2026
Unknown什么时候发消息
Terminal何时解锁memory status
章节结束条件
```

的完整脚本。

---

# 193. 再下一份内容文档

可以拆：

```text
17_DESKTOP_FILES_CONTENT.md
18_MESSENGER_SCRIPT.md
19_CALENDAR_AND_SESSION_LOGS.md
20_TERMINAL_SYSTEM_LOGS.md
```

这样Chapter4文本不会全部挤在一个文件里。

---

# 194. Canonical Lock

以下锁定：

```text
Recovery Desktop不是林夏2007原始桌面
backup_20070823是真实Source Package
Recovery Environment首次完整构建于2016-03-17
桌面使用2007-Legacy Display Profile
Files/Gallery/Messenger/Calendar是ROOM Recovery应用
Messenger会映射多个来源
Calendar会同时显示历史事件和2026玩家Session事件
Unknown不是2007原始联系人
Terminal只访问游戏内VFS
MEMORY ERROR不是RAM错误
MEMORY ERROR = Persona Memory Graph无法形成自洽连续模型
TEMPORAL / IDENTITY / SELF_REPORT是核心冲突类别
Recovery环境只读，不访问玩家真实文件系统
```

---

# 195. 禁止后续破坏

不要：

```text
后来又说桌面其实真的是2007完整磁盘镜像
让MEMORY ERROR变成普通内存故障
让Unknown成为真实2007联系人
让Calendar读玩家真实日历
让Terminal访问玩家电脑
把Recovery环境设成超自然空间
```

---

# 196. 最终一句话

> Chapter 4 一开始，玩家应该觉得自己终于“走进了林夏留下来的世界”。
>
> 到这一章结束时，他应该开始意识到：
>
> **自己走进去的，也许不是林夏留下来的世界。**
>
> 而是 ROOM 把所有关于林夏的东西整理、排列、补齐之后——
>
> **替她搭出来的一个世界。**
