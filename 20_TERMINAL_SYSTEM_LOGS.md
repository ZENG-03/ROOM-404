# ROOM 404：互联网失踪档案
# 20_TERMINAL_SYSTEM_LOGS.md
## Chapter 04→05 Terminal / System Logs / Continuity Service Canon

> 本文档负责把 ROOM Recovery Console 正式建设成一个**可调查、可验证、可交叉取证**的系统层。
>
> 它不是“黑客小游戏”，也不是为了让玩家输入炫技命令。
>
> 它的核心功能只有一个：
>
> > **让玩家直接查看“界面背后的来源关系”。**
>
> Chapter 04 前半，玩家主要相信：
>
> ```text
> 桌面
> 文件夹
> 联系人
> 日历
> ```
>
> 到 Terminal 层，玩家第一次能够绕过这些整理后的 UI，直接询问：
>
> ```text
> 这个对象从哪里来？
> 它什么时候产生？
> 它是不是重建的？
> 这个环境是谁？
> MEMORY ERROR到底是什么？
> 当前Session是谁？
> ```
>
> 因此 Terminal 是 Chapter 04 的“来源意识毕业考试”，同时也是 Chapter 05 的入口。

---

# 0. 依赖文档

必须与以下文档保持一致：

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
15_DESKTOP_RECOVERY_SYSTEM.md
16_CHAPTER_04_SCRIPT.md
17_DESKTOP_FILES_CONTENT.md
18_MESSENGER_SCRIPT.md
19_CALENDAR_AND_SESSION_LOGS.md
```

---

# 1. Terminal 基本信息

App ID：

```text
terminal
```

显示名：

```text
ROOM Recovery Console
```

默认 Prompt：

```text
R:\SUBJECT_04>
```

版本：

```text
Recovery Console 2016.03
```

启动文字：

```text
ROOM Recovery Console
Environment: RENV_SUBJECT04_20160317

Type "help" for commands.
```

---

# 2. Terminal 不是 Windows CMD

视觉可以参考：

```text
CMD
DOS
恢复控制台
```

但不要 1:1 复制真实系统。

原因：

```text
它是 ROOM Recovery 自己的 Console。
```

因此允许命令：

```text
dir
cd
type
source
object
whoami
history
memory
mount
service
help
clear
exit
```

不需要支持：

```text
ping
ipconfig
netstat
regedit
format
del
copy
```

除非以后确实有玩法需求。

---

# 3. Terminal安全边界

Terminal 只访问：

```text
ROOM Virtual File System
```

永远不能访问：

```text
用户真实C盘
桌面
下载文件夹
剪贴板
摄像头
麦克风
真实网络
```

玩家输入：

```text
cd C:\
```

返回：

```text
Path unavailable in recovery environment.
```

输入：

```text
dir /home
```

返回：

```text
Path unavailable in recovery environment.
```

---

# 4. 初始目录

```text
R:\SUBJECT_04>
```

执行：

```text
dir
```

返回：

```text
 Volume: RECOVERY
 Environment: SUBJECT_04

 DOCUMENTS
 PHOTOS
 MESSAGES
 CALENDAR
 RECOVERED
 SYSTEM

 6 directories
```

---

# 5. SYSTEM目录

```text
R:\SUBJECT_04> cd SYSTEM
R:\SUBJECT_04\SYSTEM> dir
```

返回：

```text
environment.manifest
recovery.log
session.log
memory.graph
objects.idx
service.cfg
```

Chapter 04初期：

```text
service.cfg
```

可以显示：

```text
ACCESS PARTIAL
```

直到 Chapter 04完成。

---

# 6. `help`

初始：

```text
Available commands:

dir        list objects
cd         change path
type       display text object
source     inspect provenance
object     inspect ROOM object metadata
whoami     display active identity context
history    command history
memory     memory graph diagnostics
mount      mount available source view
service    service status
clear      clear console
exit       close console
```

注意：

```text
memory
mount
service
```

虽然列出来，但子命令可以随着进度增加。

---

# 7. `help source`

```text
source <path|object>

Displays provenance metadata for a recovered object.

Example:
source DOCUMENTS\0817.txt
```

---

# 8. `help object`

```text
object <id>

Displays ROOM object metadata.

This command does not display file contents.
```

---

# 9. `help memory`

Chapter 04前期：

```text
memory status
memory conflicts
```

Chapter 05后增加：

```text
memory graph
memory source
memory generations
```

---

# 10. `help mount`

```text
mount raw

Mounts the raw recovered source view if available.
```

强调：

```text
raw
```

是：

```text
恢复包原始数据结构
```

不是物理磁盘直接读取。

---

# 11. `whoami` 第一阶段

如果玩家尚未发现 Session Calendar：

```text
R:\SUBJECT_04> whoami

SUBJECT_04
```

这会强化：

```text
“这是林夏环境”
```

但还不够完整。

---

# 12. `whoami` 第二阶段

玩家发现：

```text
CURRENT_OBSERVER
```

后：

```text
R:\SUBJECT_04> whoami

SUBJECT CONTEXT:
SUBJECT_04

OBSERVER CONTEXT:
CURRENT_OBSERVER
```

---

# 13. `whoami` 不允许出现405

Chapter 04严格：

```text
CURRENT_OBSERVER
```

不能提前：

```text
SUBJECT_405
OBSERVER_405
```

这是 Chapter 05以后才发生的映射。

---

# 14. `whoami` 深层输出

输入：

```text
whoami /source
```

如果支持：

```text
SUBJECT_04
  source: recovery_environment

CURRENT_OBSERVER
  source: active_session
```

让技术型玩家更早理解：

```text
两个上下文同时存在
```

---

# 15. `history`

返回玩家真实 Terminal 命令历史：

```text
12:42 help
12:43 dir
12:44 cd SYSTEM
12:44 type environment.manifest
12:46 whoami
```

必须来自真实游戏事件。

不能写死。

---

# 16. Terminal history与Session Log关系

Terminal每条命令：

```text
TERMINAL_COMMAND
```

写入统一 Event Store。

因此：

```text
history
Calendar Session
session.log
Unknown行为统计
```

都来自同一个源。

---

# 17. `type`

语法：

```text
type <path>
```

例如：

```text
type DOCUMENTS\0817.txt
```

返回文件正文。

---

# 18. `type` 对二进制文件

例如：

```text
type PHOTOS\DSC0017.JPG
```

返回：

```text
Binary object.
Use "object" or open Gallery.
```

---

# 19. `source`

这是最重要命令之一。

示例：

```text
source DOCUMENTS\0817.txt
```

返回：

```text
OBJECT:
doc_0817_note

DISPLAY NAME:
0817.txt

SOURCE TYPE:
RECOVERED_FILE

ORIGIN:
backup_20070823

ORIGINAL PATH:
\DOC\note3.txt

CREATED:
2007-08-17 23:52

RECOVERED:
2007-08-23

INTEGRITY:
100%

RECONSTRUCTION:
NO
```

这里非常重要：

```text
Display Name ≠ Original Name
```

说明 Recovery Shell进行了映射。

---

# 20. `source todo.txt`

```text
SOURCE TYPE:
RECOVERED_FILE

ORIGINAL PATH:
\DOC\todo.txt

DISPLAY NAME:
todo.txt

RECONSTRUCTION:
NO
```

这个文件的显示名可能恰好与原名相同。

不是所有文件都被改名。

---

# 21. `source summary_0817.txt`

如果玩家找到ROOM生成摘要：

```text
SOURCE TYPE:
GENERATED

ORIGIN:
ROOM Recovery

CREATED:
2016-03-17

SOURCE OBJECTS:
doc_0817_note
private_0817
school_event
messenger_zhou

GENERATION:
1
```

这非常关键。

它告诉玩家：

```text
“我的文档”里也可能存在2016生成文件。
```

---

# 22. Generated Summary不可隐藏来源

Terminal必须明确：

```text
GENERATED
```

ROOM的伦理问题不是：

```text
完全不标来源
```

而是：

```text
UI默认让不同来源看起来太连续。
```

---

# 23. `source MSG:LEAF`

输入：

```text
source MSG:LEAF
```

返回：

```text
DISPLAY VIEW:
Messenger

SOURCE TYPE:
FORUM_PRIVATE_MESSAGE

ORIGIN:
BlueMoon Archive

ORIGINAL USER:
Summer17

MAPPED CONTACT:
leaf

RECOVERY MAPPING:
YES

RECONSTRUCTION:
NO
```

---

# 24. `source MSG:GUYAN`

```text
SOURCE TYPE:
MESSENGER_CACHE

ORIGIN:
backup_20070823

COMPLETENESS:
81%

RECOVERY MAPPING:
YES

RECONSTRUCTION:
NO
```

即使真实IM聊天：

```text
也仍然经过Recovery映射成当前线程
```

---

# 25. `source MSG:UNKNOWN`

Chapter 04最强命令之一：

```text
SOURCE TYPE:
UNRESOLVED

ORIGIN:
CURRENT RECOVERY SESSION

2007 SOURCE:
NONE

RECOVERY MAPPING:
YES
```

这锁死：

```text
Unknown不是2007联系人
```

---

# 26. `source CALENDAR:2007`

```text
VIEW:
Calendar / Personal

SOURCE TYPE:
RECOVERED_CALENDAR

ORIGIN:
backup_20070823
```

---

# 27. `source CALENDAR:SESSION`

```text
VIEW:
Calendar / Session

SOURCE TYPE:
SYSTEM

ORIGIN:
CURRENT_OBSERVER EVENT STORE

HISTORICAL SOURCE:
NONE
```

---

# 28. `object`

与 `source` 不同。

`source`回答：

```text
“这个显示对象从哪里来？”
```

`object`回答：

```text
“ROOM把它当成什么对象？”
```

这一区别很重要。

---

# 29. `object DSC0017`

```text
OBJECT ID:
PHOTO17

SUBJECT:
04

TYPE:
IMAGE

SOURCE OBJECTS:
PHOTO17_ORIGINAL
PHOTO17_CLUB_COPY
PHOTO17_WEB
PHOTO17_RECOVERED_20070823

DERIVED OBJECTS:
ROOM_RESTORE_2015
RECON_GENERATIONS
SESSION_VARIANTS
```

Chapter3完成后才能显示完整链。

---

# 30. `object SUBJECT_04`

Chapter 04：

```text
OBJECT:
SUBJECT_04

TYPE:
SUBJECT CONTEXT

STATUS:
PARTIAL

SOURCE PACKAGE:
backup_20070823

ENVIRONMENT:
RENV_SUBJECT04_20160317

MEMORY:
ERROR

CONTINUITY:
FAILED
```

---

# 31. `object SUBJECT_04`不显示

禁止提前显示：

```text
林夏
Subject404
人格重建实验
```

玩家可能推断，但系统此时不直接给。

---

# 32. `object current_observer`

发现Calendar Session后：

```text
OBJECT:
CURRENT_OBSERVER

TYPE:
SESSION CONTEXT

STATUS:
ACTIVE

SOURCE:
CURRENT SESSION EVENT STORE

PERSISTENCE:
SESSION
```

Chapter4阶段：

```text
PERSISTENCE: SESSION
```

后面Chapter5逐渐变：

```text
PERSISTENCE: MODEL
```

---

# 33. `object`不存在ID

```text
Object not found.
```

不要故意恐怖化。

---

# 34. `environment.manifest`

Canonical全文：

```text
environment_id=RENV_SUBJECT04_20160317
subject_context=SUBJECT_04
display_profile=2007_LEGACY
source_package=backup_20070823
environment_mode=RECOVERY
access_mode=READ_ONLY
message_mapping=UNIFIED
calendar_mapping=MULTI_SOURCE
file_mapping=NORMALIZED
merge_policy=CONTINUITY
observer_context=ENABLED
```

---

# 35. `merge_policy=CONTINUITY`

Chapter4不解释。

如果玩家：

```text
object CONTINUITY
```

返回：

```text
Object not found.
Use "service status" for service information.
```

但Chapter4末才开放service详情。

---

# 36. `observer_context=ENABLED`

说明：

```text
Calendar记录玩家行为
```

不是隐藏监控。

---

# 37. `recovery.log`

完整建议：

```text
2016-03-17 03:17:02
RECOVERY START

2016-03-17 03:17:02
Target context: SUBJECT_04

2016-03-17 03:17:03
Source package mounted:
backup_20070823

2016-03-17 03:17:04
Indexing document objects...

2016-03-17 03:17:04
Indexing image objects...

2016-03-17 03:17:05
Mapping message sources...

2016-03-17 03:17:05
Mapping calendar sources...

2016-03-17 03:17:06
Normalizing display paths...

2016-03-17 03:17:06
Normalizing display timestamps...

2016-03-17 03:17:07
Building user shell...

2016-03-17 03:17:08
Building relationship index...

2016-03-17 03:17:09
Building memory graph...

2016-03-17 03:17:10
Memory consistency check failed.

2016-03-17 03:17:10
Primary conflict classes:
TEMPORAL
IDENTITY
SELF_REPORT

2016-03-17 03:17:11
Environment available with memory error.

RECOVERY COMPLETE
```

---

# 38. “Normalizing display timestamps”

必须谨慎理解。

它不是：

```text
篡改原始时间
```

而是：

```text
统一UI显示格式/映射事件
```

原始时间仍保存在Source metadata。

---

# 39. `recovery.log`帮助说明

玩家若执行：

```text
source SYSTEM\recovery.log
```

返回：

```text
SOURCE TYPE:
SYSTEM

CREATED:
2016-03-17

ORIGINAL 2007 SOURCE:
NO
```

---

# 40. `session.log`

完全动态。

头：

```text
SESSION ID:
CURRENT_OBSERVER

ENVIRONMENT:
RENV_SUBJECT04_20160317
```

事件：

```text
SESSION_START
SEARCH
PAGE_OPEN
PHOTO_VIEW
COMPARE
IDENTITY_RELATION
PROVENANCE_VIEW
DESKTOP_BOOT
APP_OPEN
FILE_OPEN
SOURCE_INSPECT
TERMINAL_COMMAND
```

---

# 41. `session.log`示例

```text
10:02:14 SESSION_START
10:05:31 SEARCH "林夏"
10:08:44 PAGE_OPEN linxia_home
10:15:02 PHOTO_VIEW photo17 count=1
10:21:16 PHOTO_VIEW photo17 count=2
10:34:55 COMPARE school_notice_v1 school_notice_v2
11:36:03 IDENTITY_RELATION Linxia Summer17 confidence=HIGH
12:08:11 PROVENANCE_VIEW DSC0017
12:41:08 DESKTOP_BOOT RENV_SUBJECT04_20160317
12:44:26 APP_OPEN terminal
12:45:02 TERMINAL_COMMAND "whoami"
```

实际必须动态生成。

---

# 42. session.log不能包含

```text
鼠标轨迹
键盘其他输入
现实浏览器动作
现实程序切换
现实文件路径
```

---

# 43. `memory.graph`

Chapter4初始：

```text
PERSONA MEMORY GRAPH
SUBJECT=04
STATUS=ERROR
```

直接 `type memory.graph`：

```text
Binary/indexed graph object.
Use "memory status".
```

避免把内部结构直接dump成巨量文本。

---

# 44. `memory status`

Canonical：

```text
PERSONA MEMORY GRAPH

SUBJECT:
04

STATUS:
ERROR

CONTINUITY:
FAILED

SOURCE COVERAGE:
PARTIAL

PRIMARY CONFLICT CLASSES:
TEMPORAL
IDENTITY
SELF_REPORT
```

---

# 45. `memory conflicts`

返回：

```text
TEMPORAL
Events associated with the same subject contain incompatible time claims.

IDENTITY
Multiple persistent identity profiles are associated with the same subject.

SELF_REPORT
Subject-authored statements conflict with externally observed source events.
```

---

# 46. `memory conflicts --known`

如果玩家已有对应知识：

```text
TEMPORAL
Known example:
2007-08-17 / 2007-08-18 photography event

IDENTITY
Known example:
Linxia / Summer17

SELF_REPORT
Known example:
"17号我没有出门"
```

注意：

最后一个只有玩家确实看过draft/cache才显示。

---

# 47. `memory conflicts --all`

Chapter4：

```text
ACCESS PARTIAL
```

不允许提前列出未来所有矛盾。

---

# 48. `memory source`

Chapter5才正式开放。

Chapter4：

```text
Source graph access restricted.
```

---

# 49. MEMORY ERROR的真正逻辑

ROOM内部目标不是：

```text
证明哪条是真的
```

而是：

```text
建立一个“足够连续”的人格模型
```

于是当：

```text
林夏说A
外部证据说B
匿名账号表现C
```

ROOM不是接受：

```text
人本来就矛盾
```

而是倾向：

```text
需要解释/填补/统一
```

这就是系统风险。

---

# 50. `memory resolve`

Chapter4禁止存在。

不要给玩家：

```text
手动修正人格记忆
```

Chapter5以后也应非常谨慎。

---

# 51. `mount raw`

条件：

```text
Raw source available
```

输入：

```text
mount raw
```

返回：

```text
Mounting raw recovered source view...

Mounted:
R:\RAW

Note:
Raw view preserves recovery package structure.
It is not a physical-disk interface.
```

---

# 52. Raw根目录

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

---

# 53. `dir R:\RAW\DOC`

示例：

```text
aa.txt
note3.txt
todo.txt
school1.doc
~tmp1
```

Recovery Shell则：

```text
0817.txt
todo.txt
school.doc
```

玩家亲眼看到：

```text
显示名/目录结构被整理过。
```

---

# 54. `source DOCUMENTS\0817.txt`

会指出：

```text
ORIGINAL PATH:
R:\RAW\DOC\note3.txt
```

这与 Raw View形成闭环。

---

# 55. `dir R:\RAW\qq`

```text
cache.dat
msg001.bin
msg002.bin
group.idx
```

并没有：

```text
周然.txt
顾言.txt
```

---

# 56. Messenger统一联系人由谁建立

`recovery.log`：

```text
Mapping message sources...
```

和：

```text
SourceMapper
```

共同解释。

---

# 57. `dir R:\RAW\iecache`

可见：

```text
linxia_home_01.cache
bluemoon_1847.cache
img17.tmp
```

用于解释：

```text
Gallery/Browser/Player里为什么会有网页资源。
```

---

# 58. `mount shell`

如果玩家想回：

```text
mount shell
```

返回：

```text
Active view:
R:\SUBJECT_04
```

不是必须切换物理挂载。

也可只是改变默认Prompt。

---

# 59. `mount`

无参数：

```text
Mounted views:

R:\SUBJECT_04   RECOVERY SHELL
R:\RAW          RAW SOURCE
```

后续Chapter5增加：

```text
R:\ROOM
```

---

# 60. `objects.idx`

直接type：

```text
Indexed object store.
Use "object <id>".
```

---

# 61. object命令支持别名

例如：

```text
object PHOTO17
object DSC0017
```

都可映射到：

```text
PHOTO17
```

---

# 62. `object LINXIA`

Chapter4：

```text
No direct object.

Related subject context:
SUBJECT_04
```

注意：

这已经暗示：

```text
ROOM不是简单按名字建Subject
```

---

# 63. `object Summer17`

```text
OBJECT:
IDENTITY_PROFILE_1847

TYPE:
IDENTITY

RELATED SUBJECT:
SUBJECT_04

SOURCE:
BlueMoon Archive
```

---

# 64. `object Linxia`

```text
OBJECT:
IDENTITY_PROFILE_1741

TYPE:
IDENTITY

RELATED SUBJECT:
SUBJECT_04

SOURCE:
BlueMoon / Personal Web
```

玩家会看到：

```text
两个Identity Profile都属于同一Subject。
```

---

# 65. 这与Chapter2呼应

玩家当时自己推：

```text
Linxia = Summer17
```

现在ROOM内部早就有：

```text
related subject context
```

但这不代表ROOM更早就“知道真相”。

只是：

```text
后来数据整合结果。
```

---

# 66. `object ZhouRan`

```text
TYPE:
ASSOCIATED PERSON

RELATED SUBJECT:
SUBJECT_04

STATUS:
REFERENCE ONLY
```

不要把周然也变成Subject。

---

# 67. `object GuYan`

同样：

```text
ASSOCIATED PERSON
```

后续研究者身份是另一层，不要Chapter4全揭。

---

# 68. `service status`

Chapter4前半：

```text
SERVICE ACCESS:
PARTIAL
```

返回：

```text
ROOM RECOVERY SERVICE
ACTIVE
```

Chapter4完成后升级：

```text
ROOM CONTINUITY SERVICE
AVAILABLE
```

---

# 69. Chapter 4末的 `service status`

```text
ROOM SERVICE STATUS

RECOVERY:
ACTIVE

ARCHIVE:
ACTIVE

CONTINUITY:
AVAILABLE

MEMORY GRAPH:
FAILED

OBSERVER CONTEXT:
ACTIVE
```

这是Chapter5入口。

---

# 70. `service list`

Chapter4末：

```text
archive
recovery
continuity
observer
```

但：

```text
continuity
observer
```

详情受限。

---

# 71. `service recovery`

```text
ROOM RECOVERY SERVICE

Purpose:
Build a navigable environment from recovered source objects.

Current environment:
RENV_SUBJECT04_20160317

Display profile:
2007_LEGACY

Merge policy:
CONTINUITY
```

---

# 72. `service archive`

```text
ROOM ARCHIVE SERVICE

Purpose:
Index source objects, captures, versions and provenance.

Status:
ACTIVE
```

这对应前三章玩家熟悉的ROOM Archive。

---

# 73. `service continuity`

Chapter4完成后：

```text
ROOM CONTINUITY SERVICE

STATUS:
AVAILABLE

SUBJECT:
04

MEMORY:
ERROR

RECONSTRUCTION:
AVAILABLE

Access:
PARTIAL
```

这就是 Chapter 5 入口。

---

# 74. 不要在这里解释全称

仍然只：

```text
ROOM
```

完整：

```text
Recursive Online Object Memory
```

留Chapter5。

---

# 75. `service observer`

Chapter4：

```text
OBSERVER CONTEXT SERVICE

STATUS:
ACTIVE

CONTEXT:
CURRENT_OBSERVER

SOURCE:
CURRENT SESSION

PERSISTENCE:
SESSION
```

---

# 76. Chapter5后Persistence变化

未来：

```text
PERSISTENCE:
MODEL
```

但本文件Chapter4段不能提前使用。

---

# 77. `service continuity --details`

Chapter4：

```text
ACCESS RESTRICTED
```

需要：

```text
Chapter 05 progression
```

---

# 78. Chapter5入口事件

当：

```text
Chapter4完成
```

且玩家：

```text
service status
```

或UI打开：

```text
View Service Status
```

触发：

```yaml
id: c05_entry_continuity_service
effects:
  unlock:
    - continuity_service
    - chapter05
```

---

# 79. Chapter 5 开场建议

Terminal：

```text
R:\SUBJECT_04> service continuity
```

输出：

```text
ROOM CONTINUITY SERVICE

SUBJECT:
04

MEMORY:
ERROR

CONTINUITY:
FAILED

RECONSTRUCTION:
AVAILABLE
```

然后：

```text
[additional service metadata available]
```

玩家输入：

```text
object continuity
```

或：

```text
service continuity --details
```

进入Chapter5。

---

# 80. Chapter 5第一次新命令

建议：

```text
service continuity --history
```

返回：

```text
ACCESS GRANTED
```

然后开始：

```text
2011
2012
2013
2014
2015
2016
...
```

这会进入 ROOM 项目历史。

本文件先只定义入口，不写完整内容。

---

# 81. Terminal错误返回风格

必须普通。

例如未知命令：

```text
Unknown command: xyz
Type "help" for available commands.
```

不存在文件：

```text
Object not found.
```

无权限：

```text
Access restricted.
```

---

# 82. 不要用恐怖错误

禁止：

```text
DO NOT LOOK
SHE IS WATCHING
ACCESS DENIED BY LINXIA
```

Terminal始终保持工程系统口吻。

---

# 83. `clear`

清屏。

不影响：

```text
history
```

---

# 84. `exit`

关闭Terminal窗口。

不退出Recovery。

---

# 85. `logout`

如果玩家尝试：

```text
Unknown command
```

或者未来可作为：

```text
alias to exit environment
```

但不需要。

---

# 86. `recover`

如果希望保留Chapter1概念：

可以支持：

```text
recover <object>
```

但Chapter4主线不需要。

建议暂时不列help。

以后可用于：

```text
恢复Deleted Fragment
```

---

# 87. `recover 0817`

若实现：

```text
Multiple objects match "0817".
Use object IDs.
```

这体现系统严谨。

---

# 88. 命令补全

可支持：

```text
Tab
```

提高可用性。

不影响剧情。

---

# 89. 命令历史键

```text
↑ / ↓
```

支持。

---

# 90. 玩家不用Terminal也能通关

必须保持。

Terminal所有核心信息必须有UI替代：

```text
environment.manifest
→ Settings / Recovery Information

source
→ Properties / Source

memory status
→ Recovery Diagnostics

session.log
→ Calendar Session

service status
→ Recovery Summary
```

Terminal是：

```text
更直接
更高密度
```

不是唯一通道。

---

# 91. 为什么仍要做Terminal

因为它让系统型玩家获得：

```text
“我绕过UI直接查底层”
```

的满足感。

同时主题上：

```text
UI会组织信息
Terminal则更接近对象关系
```

---

# 92. 但Terminal也不是绝对真相

非常重要。

Terminal输出仍然是：

```text
ROOM系统自己的元数据视图
```

它可以准确描述：

```text
ROOM怎么分类
```

但不能自动证明：

```text
ROOM的分类哲学就是客观现实
```

---

# 93. 例子：`IDENTITY`

ROOM把：

```text
Linxia
Summer17
```

归为：

```text
同一Subject
```

这是有充分证据的。

但未来ROOM把：

```text
Observer
Subject405
```

归为某种连续关系时：

玩家仍要问：

```text
这只是系统分类，还是“我真的变成了谁”？
```

Terminal语言不能等于上帝语言。

---

# 94. `memory`就是ROOM视角

ROOM说：

```text
CONTINUITY FAILED
```

不代表：

```text
林夏本人“失败”
```

只代表：

```text
系统的Continuity目标失败
```

这一点必须贯穿。

---

# 95. Internal Log语气

推荐：

```text
工程
简短
低情绪
```

避免：

```text
“我们不该继续”
“她醒了”
“系统有意识”
```

这些太戏剧化。

伦理冲突主要放：

```text
顾言notes
研究会议记录
版本规范
```

而不是基础日志。

---

# 96. 顾言相关系统痕迹

Chapter4可以少量出现：

```text
provenance_required=true
```

或者：

```text
source labels enabled
```

但不要写：

```text
GUYAN WAS HERE
```

后面通过研究日志确认他的角色。

---

# 97. `service.cfg`

Chapter4末：

```text
archive=enabled
recovery=enabled
continuity=standby
observer=enabled

source_labels=enabled
generated_content_labels=required
```

最后一行是顾言/Archive伦理的重要伏笔。

---

# 98. `generated_content_labels=required`

后来玩家会发现：

```text
有的界面虽然技术上标了Generated
但默认视觉层级不足
```

这就是团队内部伦理争议。

---

# 99. `service.cfg`来源

```text
SYSTEM
2016
```

不是顾言私人文件。

---

# 100. `memory.graph`冲突数量

建议：

```text
Conflict Count:
17
```

不作为谜题数字。

不要拿17去做密码。

---

# 101. Conflict 17不是“8月17预言”

只是：

```text
当前图谱中17个冲突节点
```

如果担心玩家误读：

可以改：

```text
19
```

推荐最终使用：

```text
19
```

避免“17”主题数字过密。

---

# 102. 推荐Memory输出

```text
CONFLICT COUNT:
19

PRIMARY:
TEMPORAL
IDENTITY
SELF_REPORT

SECONDARY:
MISSING_CONTEXT
SOURCE_UNCERTAINTY
```

后两个可以先不展开。

---

# 103. `memory conflicts missing_context`

Chapter4：

```text
No detailed access.
```

留Chapter5。

---

# 104. `object private_0817`

```text
TYPE:
WEB PAGE

SOURCE:
RECOVERED_BROWSER / SITE CACHE

AUTHOR:
SUBJECT_04

SOURCE TYPE:
ORIGINAL_PRIVATE

RECONSTRUCTION:
NO
```

玩家能验证：

```text
private.html不是ROOM生成。
```

---

# 105. `object diary_0817_reconstructed`

后续若玩家已见：

```text
TYPE:
TEXT

SOURCE TYPE:
RECONSTRUCTED

GENERATION:
x
```

证明：

```text
“我记得那里还有一个人”
```

这类文本不是林夏原话。

---

# 106. Terminal的来源意识训练

玩家最终应该形成习惯：

```text
看到东西
↓
source
↓
object
↓
再判断
```

这就是 ARCHIVIST 路线的行为基础。

---

# 107. 可统计Source Awareness

内部：

```text
source_checks
object_checks
raw_view_uses
generated_label_checks
```

后期用于：

```text
source_awareness score
```

---

# 108. 不要直接显示“ARCHIVIST分数”

这些都是隐藏行为指标。

---

# 109. Unknown对Terminal型玩家

第一App就是Terminal：

> 你不太信这个界面。

如果大量使用source：

> 你现在每次都会先看来源。

这句可以在Chapter5以后出现。

---

# 110. Unknown不能伪造Terminal输出

非常重要。

Unknown是Messenger/系统交互对象。

Terminal基础命令：

```text
不被Unknown篡改
```

否则玩家失去稳定取证工具。

---

# 111. 哪些系统层可以动态变化

允许：

```text
session.log
whoami
service status
CURRENT_OBSERVER
```

因为状态本来会变。

不允许悄悄改变：

```text
2007原始文件Source
Hash
Recovery Build日期
```

---

# 112. Terminal作为“可信工具”必须相对稳定

ROOM 404需要至少一个：

```text
较稳定的元数据视图
```

否则玩家无法推理。

Terminal与Provenance Viewer承担这个角色。

---

# 113. 但它仍可能暴露ROOM偏见

例如：

```text
SELF_REPORT CONFLICT
```

这是系统分类。

玩家可不同意。

稳定 ≠ 中立。

---

# 114. 终端首次使用建议流程

普通玩家：

```text
help
↓
whoami
↓
dir
↓
cd SYSTEM
↓
type environment.manifest
↓
type recovery.log
↓
memory status
```

这是非常自然的链。

---

# 115. 进阶流程

```text
source DOCUMENTS\0817.txt
source MSG:LEAF
source MSG:UNKNOWN
mount raw
dir R:\RAW
object SUBJECT_04
service status
```

---

# 116. Chapter4终端高潮

推荐顺序：

```text
memory status
↓
PERSONA MEMORY GRAPH / ERROR
↓
Calendar写入 TERMINAL_COMMAND memory status
↓
Unknown：“现在这也是记录的一部分。”
↓
service status
↓
ROOM CONTINUITY SERVICE / AVAILABLE
```

这就完成：

```text
Chapter4 → Chapter5
```

---

# 117. Chapter 5入口不应像“下一关按钮”

最好玩家自己：

```text
service status
```

看见：

```text
CONTINUITY AVAILABLE
```

然后输入：

```text
service continuity
```

自然进入。

---

# 118. UI玩家的等价入口

Recovery Summary：

```text
ROOM CONTINUITY SERVICE
AVAILABLE

[View Service]
```

功能完全一致。

---

# 119. Chapter5标题建议触发

玩家第一次：

```text
service continuity --details
```

或点击：

```text
View Service
```

出现：

```text
CHAPTER 05
系统知道
```

这比简单章节切换更自然。

---

# 120. Chapter5核心预告字段

Continuity Service界面可先展示：

```text
SUBJECT:
04

MEMORY:
ERROR

RECONSTRUCTION:
ACTIVE/AVAILABLE

OBSERVER CONTEXT:
ACTIVE
```

玩家会立刻问：

```text
为什么Observer也在Continuity里？
```

这就是下一章。

---

# 121. Chapter5真正的问题

前三章：

```text
系统在整理林夏
```

Chapter5：

> **系统什么时候开始整理玩家？**

---

# 122. `service observer` 与 Continuity关系

Chapter4暂时：

```text
Observer只是Session Context
```

Chapter5开始：

```text
Continuity Service将Observer Context纳入建模。
```

不要本章提前完整揭示。

---

# 123. Terminal事件定义

建议：

```text
TERMINAL_OPEN
TERMINAL_COMMAND
TERMINAL_SOURCE_CHECK
TERMINAL_OBJECT_CHECK
TERMINAL_RAW_MOUNT
TERMINAL_MEMORY_QUERY
TERMINAL_SERVICE_QUERY
```

---

# 124. 事件存储

必须统一进入：

```text
session_events
```

供：

```text
Calendar
session.log
ObserverModel
Unknown
```

使用。

---

# 125. 事件去噪

`dir`、`cd`可以记录在Terminal history。

但Calendar Session不必显示全部。

Calendar只显示高价值：

```text
memory status
source Unknown
mount raw
service continuity
```

或统一把Terminal命令折叠为：

```text
Terminal activity
```

推荐：

```text
重要命令单列
普通命令折叠
```

---

# 126. Unknown“你已经看了五次”的计数

不要从Terminal history计算。

统一从：

```text
session_events
```

取。

---

# 127. 命令解析实现建议

不需要Shell。

可以：

```ts
parseCommand(input)
```

分：

```text
command
args
flags
```

数据驱动匹配。

---

# 128. 命令返回建议

```ts
interface TerminalCommandResult {
  type: "text" | "table" | "error" | "event"
  lines: string[]
  eventId?: string
}
```

---

# 129. 不要执行用户任意代码

Terminal只是：

```text
游戏内命令解释器
```

不使用：

```text
eval
child_process
真实shell
```

---

# 130. 命令注册表

```ts
const commands = {
  help,
  dir,
  cd,
  type,
  source,
  object,
  whoami,
  history,
  memory,
  mount,
  service,
  clear,
  exit
}
```

---

# 131. Terminal虚拟路径

建议：

```text
R:\SUBJECT_04
R:\RAW
R:\SYSTEM
```

不要与真实系统：

```text
C:\
```

混淆。

---

# 132. 路径解析

支持：

```text
cd SYSTEM
cd ..
dir DOCUMENTS
type "My File.txt"
```

但不需要实现复杂Shell glob。

---

# 133. 命令大小写

不敏感：

```text
WHOAMI
whoami
WhoAmI
```

都可。

路径显示保持原格式。

---

# 134. 中文命令

不建议主版本支持：

```text
来源
对象
```

保持Terminal年代/工程感。

但Help说明用中文可在UI外层提供。

---

# 135. Command Suggestion

玩家输入：

```text
memry status
```

可返回：

```text
Unknown command: memry
Did you mean: memory?
```

提高可用性。

---

# 136. Terminal Hint

第一次打开30秒无输入：

```text
Type "help" for available commands.
```

仅此。

---

# 137. `service status`软提示

Chapter4完成后：

Recovery Tray显示：

```text
Service state changed.
```

Terminal再次打开：

```text
New service metadata available.
```

引导玩家：

```text
service status
```

---

# 138. 重要日志不要用“大反派语气”

例如不要：

```text
PERSONALITY ASSIMILATION INITIATED
OBSERVER CAPTURE COMPLETE
```

Chapter5也应尽量：

```text
普通研究工程语言
```

---

# 139. 推荐系统术语

可以：

```text
continuity
observer context
source coverage
reconstruction
identity relation
memory graph
confidence
generation
```

避免：

```text
soul
consciousness upload
resurrection
assimilation
```

---

# 140. 顾言伦理线的技术入口

Chapter5可通过：

```text
service continuity --history
```

发现早期配置：

```text
generated_content_labels=required
source_provenance=preserve
```

后来某版本：

```text
display_merge=enabled
```

这会自然引出团队争议。

---

# 141. 这也是ARCHIVIST路线基础

玩家如果习惯：

```text
source
object
raw
```

后期更容易找到：

```text
Original
Altered
Reconstructed
Generated
```

之间的真正边界。

---

# 142. Terminal UI视觉

建议：

```text
黑/深灰背景
灰白字
少量蓝灰状态
等宽字体
```

禁止：

```text
荧光绿Matrix
红色警告满屏
```

---

# 143. System logs视觉

可以：

```text
普通文本
```

不要把重要行染红。

玩家自己发现：

```text
Building user shell
Memory consistency check failed
```

更有力量。

---

# 144. `memory status`第一次的音效

无特殊音效。

最多：

```text
普通命令完成声
```

---

# 145. Chapter5入口的声音

也不必恐怖。

`service continuity`打开时：

```text
Recovery UI轻微层切换音
```

即可。

---

# 146. Terminal QA：核心命令

必须测试：

```text
help
dir
cd
type
source
object
whoami
history
memory status
memory conflicts
mount raw
service status
service recovery
service continuity
clear
exit
```

---

# 147. QA：`source`与Properties一致

例如：

```text
0817.txt
```

Properties显示：

```text
Origin backup_20070823
Original Path note3.txt
```

Terminal也必须一致。

---

# 148. QA：Unknown来源

Messenger Properties：

```text
CURRENT SESSION
```

Terminal：

```text
source MSG:UNKNOWN
```

必须一致。

---

# 149. QA：Session命令

执行：

```text
memory status
```

后：

```text
history
session.log
Calendar
```

三处一致。

---

# 150. QA：Build日期

所有：

```text
2016-03-17
```

统一。

---

# 151. QA：Anchor日期

所有：

```text
2007-08-18 03:17
```

统一。

不能与Build混。

---

# 152. QA：Subject04

Chapter4始终：

```text
SUBJECT_04
```

不出现：

```text
SUBJECT_404
```

---

# 153. QA：Observer

Chapter4始终：

```text
CURRENT_OBSERVER
```

不出现：

```text
405
```

---

# 154. QA：Raw View

玩家Resume游戏后：

```text
Raw mount状态
```

可以保存，也可以重新mount。

推荐：

```text
保存已解锁
不强制保持当前路径
```

---

# 155. QA：真实系统隔离

Terminal输入：

```text
dir C:\
```

必须只返回：

```text
Path unavailable
```

绝不触发真实文件操作。

---

# 156. QA：Unknown命令

输入：

```text
unknown
```

不能出现神秘彩蛋。

返回：

```text
Unknown command: unknown
```

Unknown属于Messenger/System interaction，不是Terminal幽灵。

---

# 157. QA：网络命令

输入：

```text
ping google.com
```

返回：

```text
Network commands are unavailable in recovery environment.
```

不要真的请求网络。

---

# 158. Chapter4完成后的Help变化

`help`新增：

```text
service     inspect ROOM service state
```

如果之前已经显示service，则：

```text
service continuity
```

现在从：

```text
restricted
```

变：

```text
available
```

---

# 159. Chapter5入口日志

当Continuity开放：

`service.cfg`状态：

```text
continuity=available
```

不是：

```text
standby
```

---

# 160. 为什么Continuity此时开放

剧情内部：

玩家完成：

```text
Identity
Image Provenance
Recovery Environment
Observer Context
```

ROOM拥有足够：

```text
Context
```

继续显示其Continuity层。

不是玩家“破解权限”。

---

# 161. 不要写成系统主动挑选玩家

更准确：

```text
玩家已经进入一个旧内部界面
而调查行为满足了显示相关对象的条件
```

避免“命定之人”。

---

# 162. Chapter5入口的一句系统文字

推荐：

```text
Additional continuity objects available.
```

而不是：

```text
YOU HAVE BEEN CHOSEN
```

---

# 163. `service continuity`最终Chapter4版本

```text
ROOM CONTINUITY SERVICE

STATUS:
AVAILABLE

SUBJECT:
04

SOURCE COVERAGE:
PARTIAL

MEMORY GRAPH:
ERROR

RECONSTRUCTION:
AVAILABLE

OBSERVER CONTEXT:
ACTIVE

Additional continuity objects available.
```

---

# 164. 玩家此时应产生的问题

```text
Continuity是什么意思？
为什么Memory Graph失败？
Reconstruction为什么还Available？
Observer Context为什么跟Subject04在同一个服务里？
ROOM到底在做什么？
```

完美进入 Chapter 5。

---

# 165. 下一份文档推荐

现在 Chapter4 四个内容模块已经齐了：

```text
17_DESKTOP_FILES_CONTENT.md
18_MESSENGER_SCRIPT.md
19_CALENDAR_AND_SESSION_LOGS.md
20_TERMINAL_SYSTEM_LOGS.md
```

下一步应该进入：

```text
21_CHAPTER_05_SCRIPT.md
```

主题：

```text
系统知道
```

重点：

```text
ROOM CONTINUITY SERVICE
ROOM全称
2011→2026项目历史
Subject04→404
Observer Model
Unknown来源
2026玩家行为模型
CURRENT_OBSERVER→Observer_405
```

但必须控制揭示顺序，不能一次把后台真相全部倒出来。

---

# 166. Chapter5建议分层揭示

建议：

```text
第一层：
Continuity Service

第二层：
Subject04长期被持续处理

第三层：
ROOM项目历史

第四层：
Unknown = Unresolved Persona接口

第五层：
Observer Context正在被建模

第六层：
Subject405注册可能性
```

最后才接：

```text
ROOM 404终局
```

---

# 167. Canonical Lock

以下锁定：

```text
Terminal是ROOM Recovery Console，不是真实Shell
Terminal只访问游戏VFS
Prompt为R:\SUBJECT_04>
source用于查显示对象来源
object用于查ROOM内部对象关系
whoami在Chapter4显示SUBJECT_04 + CURRENT_OBSERVER
mount raw挂载恢复包原始结构视图
environment.manifest包含merge_policy=CONTINUITY
recovery.log包含Building user shell
memory status揭示PERSONA MEMORY GRAPH
memory conflicts包含TEMPORAL / IDENTITY / SELF_REPORT
session.log与Calendar/Unknown共用Event Store
Chapter4不出现Subject404或405
service continuity是Chapter5入口
Terminal输出是ROOM系统视角，不是上帝真相
```

---

# 168. 禁止后续破坏

不要：

```text
让Terminal访问现实电脑
把Terminal做成黑客命令挑战
让Unknown篡改基础Source输出
让memory status变成“林夏灵魂状态”
让service continuity直接说“复活”
Chapter4提前显示Subject405
把Raw View等同物理硬盘完整镜像
```

---

# 169. 最终一句话

> Chapter 04 前半，玩家通过桌面认识“林夏”。
>
> Terminal出现以后，玩家开始认识：
>
> **ROOM是怎么把这些东西叫做“林夏”的。**
>
> 这两件事不是一回事。
>
> 而 Chapter 05 真正要追问的，就是：
>
> **当一个系统不再只是整理文件，而开始整理“一个人应该怎样连续存在”时，它究竟还在做档案，还是已经开始创造自己的版本？**
