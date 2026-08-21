# ROOM 404：互联网失踪档案
# 24_FULL_GAME_FLOW_AND_IMPLEMENTATION.md
## 01～23 文档汇总 / Full Game Flow & Implementation Blueprint

> 本文档不是新的剧情文档。
>
> 它的职责是把目前已经完成的 `01～23` 文档，从：
>
> ```text
> 世界观 / 人物 / 文本库 / 逐章脚本 / 系统设定
> ```
>
> 收束成真正可以进入 React + TypeScript 开发阶段的：
>
> ```text
> 单一开发蓝图
> ```
>
> 本文档负责统一：
>
> - 文档职责与替代关系
> - Canon冲突清理
> - 全游戏章节流程
> - 完整路由树
> - Route Registry
> - Chapter Gate / Unlock条件
> - Global State
> - Flag / PlayerKnowledge
> - Evidence Registry
> - Unknown Stage
> - Anomaly Level
> - Event Store
> - Observer Model
> - NavigationService
> - Save / IndexedDB
> - XState章节状态机
> - 数据目录
> - 页面开发顺序
> - MVP切片
> - QA与Canon Lint
>
> 从此以后：
>
> **剧情细节仍以01～23对应文档为准；开发结构优先以本文件为准。**

---

# 0. 先回答：原计划的五份旧文件还需不需要建立？

原计划：

```text
11_DESKTOP_FILES.md
12_MESSENGER_SCRIPT.md
13_SYSTEM_LOGS.md
14_ANOMALY_TEXT.md
15_ENDINGS.md
```

当前结论：

```text
不要按旧编号重新创建。
```

因为后续设计已经发生了结构升级。

---

## 0.1 `11_DESKTOP_FILES.md`

已经被：

```text
15_DESKTOP_RECOVERY_SYSTEM.md
17_DESKTOP_FILES_CONTENT.md
```

完整替代。

其中：

```text
15
→ 桌面系统结构 / VFS / Apps / Recovery逻辑

17
→ 实际可读文件内容库
```

所以：

```text
旧11不再需要。
```

---

## 0.2 `12_MESSENGER_SCRIPT.md`

已经被：

```text
18_MESSENGER_SCRIPT.md
```

完整替代。

并且新的18比旧计划更完整，因为它已经定义：

```text
IM Cache
Forum PM
Email Mapping
Current Session Unknown
Source Tags
```

所以：

```text
旧12不再需要。
```

---

## 0.3 `13_SYSTEM_LOGS.md`

已经被：

```text
19_CALENDAR_AND_SESSION_LOGS.md
20_TERMINAL_SYSTEM_LOGS.md
```

拆分替代。

其中：

```text
19
→ Observer Session Event Store / Calendar时间层

20
→ Terminal / environment.manifest / recovery.log /
   session.log / memory.graph / Continuity Service
```

这种拆分比旧13更合理。

所以：

```text
旧13不再需要。
```

---

## 0.4 `14_ANOMALY_TEXT.md`

这是唯一“概念上还有价值”的旧文件。

但目前相关内容已经分散在：

```text
06_UNKNOWN_RULES.md
07_CHAPTER_01_SCRIPT.md
12_CHAPTER_02_SCRIPT.md
14_CHAPTER_03_SCRIPT.md
16_CHAPTER_04_SCRIPT.md
21_CHAPTER_05_SCRIPT.md
23_FINAL_CHAPTER_SCRIPT.md
```

因此现在如果重新创建：

```text
14_ANOMALY_TEXT.md
```

会与现有：

```text
14_CHAPTER_03_SCRIPT.md
```

编号冲突。

### 最终建议

**现在不创建旧14。**

本文件先提供：

```text
Global Anomaly Registry
Unknown Stage Mapping
Anomaly Event结构
```

等真正开始做数据文件后，如果异常文本数量变大，再单独建立：

```text
25_ANOMALY_EVENT_CATALOG.md
```

它应是：

```text
纯实现数据目录
```

而不是新的剧情Canon。

---

## 0.5 `15_ENDINGS.md`

已经被：

```text
22_ROOM404_ENDINGS.md
23_FINAL_CHAPTER_SCRIPT.md
```

完整替代。

其中：

```text
22
→ 四结局系统逻辑 / 数据结果

23
→ 最终可玩流程
```

所以：

```text
旧15不再需要。
```

---

# 1. 当前文档体系的最终职责

当前建议正式认可的文档体系：

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
20_TERMINAL_SYSTEM_LOGS.md

21_CHAPTER_05_SCRIPT.md

22_ROOM404_ENDINGS.md
23_FINAL_CHAPTER_SCRIPT.md

24_FULL_GAME_FLOW_AND_IMPLEMENTATION.md
```

---

# 2. 01～23 文档角色分层

建议以后开发时不要把所有Markdown当同一优先级。

分成四层。

---

## 2.1 Tier A — Hard Canon

```text
01_MASTER_TIMELINE.md
02_ROOM_TRUTH.md
03_LINXIA_CHARACTER.md
04_ZHOURAN_CHARACTER.md
05_GUYAN_CHARACTER.md
06_UNKNOWN_RULES.md
22_ROOM404_ENDINGS.md
```

这里定义：

```text
绝不能被后续页面文本随意推翻的事实。
```

---

## 2.2 Tier B — Playable Canon

```text
07_CHAPTER_01_SCRIPT.md
12_CHAPTER_02_SCRIPT.md
14_CHAPTER_03_SCRIPT.md
16_CHAPTER_04_SCRIPT.md
21_CHAPTER_05_SCRIPT.md
23_FINAL_CHAPTER_SCRIPT.md
```

定义：

```text
玩家实际怎么走。
```

---

## 2.3 Tier C — Content Database

```text
08_2003_SCHOOL_CONTENT.md
09_2007_HOMEPAGE_CONTENT.md
10_BLUEMOON_FORUM.md
17_DESKTOP_FILES_CONTENT.md
18_MESSENGER_SCRIPT.md
19_CALENDAR_AND_SESSION_LOGS.md
20_TERMINAL_SYSTEM_LOGS.md
```

定义：

```text
页面里面到底有什么。
```

---

## 2.4 Tier D — Mechanic / System Canon

```text
13_PHOTO17_FORENSICS.md
15_DESKTOP_RECOVERY_SYSTEM.md
20_TERMINAL_SYSTEM_LOGS.md
24_FULL_GAME_FLOW_AND_IMPLEMENTATION.md
```

定义：

```text
程序为什么这样工作。
```

---

# 3. P0：进入编码前必须先做的 Canon Cleanup

现在不建议马上把所有Markdown自动转TS。

必须先修几处已经出现的连续性冲突。

这是：

```text
P0任务
```

---

## 3.1 Photo17 文件名冲突

目前部分后期文档把2007 Photo17写成：

```text
DSC0017.JPG
```

但前期最高Canon已经定义：

```text
2005年林夏最喜欢的一张照片
=
DSC0017.JPG

Summer17中的“17”
部分来源于这张2005照片编号
```

因此：

```text
2007旧体育馆 Photo17
```

不能再使用：

```text
DSC0017.JPG
```

### 最终开发Canon

建议锁为：

```text
PHOTO17 object_id:
PHOTO17

2007 original filename:
DSC0417.JPG
```

于是：

```text
2005 favorite photo:
DSC0017.JPG

2007 old gym Photo17:
DSC0417.JPG
```

---

## 3.2 需要修改的文档

至少检查：

```text
13_PHOTO17_FORENSICS.md
14_CHAPTER_03_SCRIPT.md
20_TERMINAL_SYSTEM_LOGS.md
23_FINAL_CHAPTER_SCRIPT.md
```

所有指：

```text
2007 Photo17
```

的 `DSC0017.JPG`

统一改：

```text
DSC0417.JPG
```

---

## 3.3 为什么程序Object ID不要跟着改

程序始终使用：

```ts
objectId: "PHOTO17"
```

文件名只是：

```text
metadata.filename
```

这样以后再调整Sony编号：

```text
不会影响剧情Flag和路由内部ID。
```

---

## 3.4 徐晓 / 许晓冲突

Hard Canon：

```text
徐晓
```

不是：

```text
许晓
```

需检查：

```text
08_2003_SCHOOL_CONTENT.md
17/18等涉及摄影社成员的后续文件
```

尤其：

```text
18_MESSENGER_SCRIPT.md
```

统一：

```text
徐晓
```

---

## 3.5 `/0817/private.html` 日期措辞

2007-08-17：

```text
学校正式公告尚未被改成18号
```

真正修改发生：

```text
2007-08-19 15:33
```

因此 private 页面不能在8月17写成：

```text
“今天活动是17号，不是18号，时间改一下”
```

像是页面已经发生修改。

正确方向：

```text
“他们说以后对外写18号。”
```

或：

```text
“周然说日期之后会改成18号。”
```

或完全：

```text
不提18号，只写删图/改说法压力。
```

---

## 3.6 22:01与22:16

这两个不是冲突。

锁定：

```text
22:01
BlueMoon Session End

22:16
林夏离开旧城区网吧
```

程序Timeline必须使用两个事件ID。

禁止合并：

```text
SESSION_END ≠ CAFE_EXIT
```

---

## 3.7 2014与2016 Photo17伪影

锁定：

```text
2014
ROOM内部Prototype首次出现human-like artifact
不属于玩家可访问/稳定保存版本

2016
第一个稳定、持久化、可进入版本链的Reconstruction V1
```

因此 Chapter3 中：

```text
“你现在找到的最早版本”
=
2016
```

仍成立。

---

## 3.8 Subject ID版本

锁定：

```text
2011～2016:
SUBJECT_04

2022 migration:
SUBJECT_04 → SUBJECT_404

2016 Recovery Legacy Shell:
仍显示SUBJECT_04

2026 Continuity Service:
显示SUBJECT_404
```

这是设计，不是Bug。

---

# 4. 一句话完整游戏结构

```text
现代Archive
↓
2007个人网页
↓
2003/2007学校旧站
↓
BlueMoon论坛
↓
照片Provenance
↓
Recovery Desktop
↓
System / Continuity
↓
Observer Model
↓
Resolution
```

玩家学习过程：

```text
网页有版本
↓
日期有版本
↓
账号有版本
↓
照片有版本
↓
桌面有版本
↓
人格有版本
↓
玩家自己也可以被系统做成版本
```

---

# 5. 完整章节结构

正式章节：

```text
CHAPTER_01
《八月十七日》

CHAPTER_02
《BlueMoon》

CHAPTER_03
《不存在的人》

CHAPTER_04
《恢复》

CHAPTER_05
《系统知道》

FINAL
《ROOM 404》
```

---

# 6. Chapter 01 — 八月十七日

入口：

```text
2026 ROOM Archive
```

目标：

```text
发现林夏
发现个人主页
发现摄影社活动
发现8月17 / 8月18矛盾
```

玩家最终认知：

```text
官方Archived页面不是绝对真相。
```

关键知识：

```text
knows_event_date_changed
```

核心证据：

```text
E001
E002
E003
E004
E005
E014
E015
```

Chapter End Hook：

```text
backup_20070823.zip
403
Referenced identity:
BM-1847
```

---

# 7. Chapter 02 — BlueMoon

目标：

```text
查BM-1847
找到Summer17
```

最终确认：

```text
Summer17 = 林夏
```

并延长最后在线时间：

```text
19:24
↓
20:17 login
↓
20:31 thread
↓
21:17 reply
↓
22:01 session end
```

关键知识：

```text
knows_summer17_is_linxia
knows_linxia_online_2031
knows_gym_not_last_location
knows_thread_not_suicide_note
```

Chapter End：

```text
Identity dependency:
RESOLVED

IMAGE PROVENANCE:
REQUIRED
```

---

# 8. Chapter 03 — 不存在的人

核心对象：

```text
PHOTO17
```

最终开发文件名：

```text
DSC0417.JPG
```

玩家学习：

```text
Current Display
≠
Original Source
```

版本链：

```text
2007 ORIGINAL
↓
Club Copy
↓
2007 Recovery
↓
Web Derivative
↓
2015 Restore
↓
2016 Reconstruction
↓
2022 Recursive Reconstruction
↓
2026 Session Variant
```

核心认知：

```text
第四个人不在2007原图。
```

关键知识：

```text
knows_photo17_original_no_fourth_person
knows_human_first_appears_in_reconstruction
knows_reconstruction_uses_previous_generation
knows_current_photo_is_dynamic_session_variant
```

Chapter End：

```text
Image provenance:
RESOLVED

Recovery environment:
AVAILABLE
```

---

# 9. Chapter 04 — 恢复

玩家进入：

```text
RENV_SUBJECT04_20160317
```

初始错误认知：

```text
“这是林夏2007电脑。”
```

最终正确认知：

```text
“这是2016 ROOM Recovery Shell。”
```

主要App：

```text
Files
Gallery
Messenger
Calendar
Browser
Player
Recycle Bin
Settings
Terminal
```

核心机制：

```text
不同来源
↓
统一UI
↓
制造连续性
```

关键认知：

```text
knows_desktop_is_recovery_shell
knows_messenger_is_aggregated_view
knows_calendar_contains_observer_data
knows_memory_error_is_persona_graph
knows_ui_continuity_is_constructed
```

Chapter End：

```text
ROOM CONTINUITY SERVICE
AVAILABLE
```

---

# 10. Chapter 05 — 系统知道

玩家开始调查：

```text
ROOM本身
```

核心揭示：

```text
ROOM
=
Recursive Online Object Memory
```

历史：

```text
2011 Subject04
2012 ROOM
2013 Generation
2014 internal artifact
2015 Persona Continuity
2016 Recovery
2017 Gu withdrawal
2018 automated maintenance
2020 modern Archive
2022 04→404
2025 default_subject=404
2026 Current Observer
```

Unknown：

```text
UNRESOLVED_PERSONA
```

Observer：

```text
CURRENT_OBSERVER
↓
OBSERVER_405
```

关键认知：

```text
knows_room_full_name
knows_subject04_to_404
knows_unknown_is_unresolved_persona
knows_observer_model_tracks_game_behavior
knows_observer_model_can_be_wrong
knows_405_is_observer_model_id
```

Chapter End：

```text
Multiple Resolution Paths Available
```

---

# 11. Final — ROOM 404

必须完成：

```text
Generated Linxia Final Test
↓
Source Check
↓
Last Reliable Real-World Source
↓
2007-08-18 10:12
↓
NO RELIABLE SOURCE
↓
Observer405 Final Review
↓
Resolution
```

Resolution：

```text
DELETE
RETURN
OBSERVER
ARCHIVIST
```

---

# 12. 完整顶层状态机

建议使用：

```text
XState
```

只管理：

```text
大型剧情阶段
```

不要把每个按钮都做State。

---

## 12.1 顶层

```ts
type GamePhase =
  | "CH01"
  | "CH02"
  | "CH03"
  | "CH04"
  | "CH05"
  | "FINAL"
  | "ENDING";
```

---

## 12.2 XState建议

```text
game
├── chapter01
├── chapter02
├── chapter03
├── chapter04
├── chapter05
├── final
└── ending
```

每章内部只管理：

```text
ENTRY
EXPLORE
CORE_DISCOVERY
RESOLVED
```

而不是：

```text
点击A
点击B
点击C
```

---

# 13. Global Route Architecture

建议真实React Router地址和玩家看到的Fake URL分离。

例如：

真实路由：

```text
/game/site/linxia/photo/17
```

BrowserShell显示：

```text
http://linxia-home.net/photo/17.html
```

这样：

```text
真实React Routing
```

不会被旧网页URL限制。

---

# 14. RouteRegistry数据结构

```ts
interface GameRoute {
  id: RouteId;

  internalPath: string;

  displayUrl?: string;

  chapter: number | "final";

  exists: (ctx: NavigationContext) => boolean;

  unlocked: (ctx: NavigationContext) => boolean;

  renderState?: (ctx: NavigationContext) => string;

  aliases?: string[];

  onVisit?: EventId[];
}
```

---

# 15. Canonical Route IDs

不要在程序逻辑里使用字符串URL判断。

使用：

```text
ARCHIVE_HOME
ARCHIVE_SEARCH
LINXIA_HOME
LINXIA_DIARY
LINXIA_PHOTO
PHOTO17
SCHOOL_HOME
SCHOOL_PHOTO_CLUB
BLUEMOON_HOME
SUMMER17_PROFILE
THREAD_1847
PHOTO17_FORENSICS
RECOVERY_DESKTOP
CONTINUITY_SERVICE
OBSERVER_SERVICE
RESOLUTION
```

---

# 16. 全游戏主路由树

```text
/
└── ROOM Archive
    ├── /search
    │
    ├── /site/2007/linxia
    │   ├── /about
    │   ├── /diary
    │   ├── /photo
    │   │   └── /17
    │   ├── /guestbook
    │   ├── /links
    │   └── /0817/private
    │
    ├── /site/2003/nc2ms
    │   ├── /news
    │   ├── /photo
    │   ├── /clubs/photo
    │   ├── /guestbook
    │   └── /download
    │
    ├── /archive/:captureId/:target
    │
    ├── /forum
    │   ├── /board/:boardId
    │   ├── /user/:uid
    │   ├── /thread/:threadId
    │   ├── /search
    │   └── /archive/:object
    │
    ├── /photo/forensics/:objectId
    │   ├── /source/:version
    │   ├── /version/:version
    │   ├── /compare
    │   ├── /similar
    │   └── /session-history
    │
    ├── /recovery
    │   ├── /boot
    │   ├── /login
    │   └── /desktop
    │
    ├── /service
    │   ├── /room
    │   ├── /continuity
    │   ├── /history/:year
    │   └── /observer
    │
    └── /resolution
```

---

# 17. Canonical显示URL

### 2026

```text
room-archive.local/
room-archive.local/search?q=...
```

建议使用：

```text
虚构域名
```

不要真实注册域名依赖。

---

### 林夏

```text
linxia-home.net/
linxia-home.net/diary/
linxia-home.net/photo/
linxia-home.net/photo/17.html
```

---

### 学校

```text
nc2ms.edu/
nc2ms.edu/club/photo/
```

---

### BlueMoon

```text
bluemoon-forum.net/
bluemoon-forum.net/thread/1847
```

---

# 18. Route Alias原则

现在01～23文档中存在：

```text
/site/2007/linxia
/linxia-home.net/
/archive/...
```

多个表示方式。

开发时：

```text
不要删除文本中的旧显示URL
```

但程序内部统一：

```text
Route ID
```

例如：

```ts
PHOTO17:
{
  internalPath: "/game/site/2007/linxia/photo/17",
  displayUrl: "http://linxia-home.net/photo/17.html",
  aliases: [
    "/site/2007/linxia/photo/17",
    "/linxia-home.net/photo/17"
  ]
}
```

---

# 19. NavigationService

所有：

```text
链接点击
地址栏输入
Back
Forward
Refresh
搜索结果
```

必须经过：

```text
NavigationService
```

不能直接：

```ts
navigate(url)
```

---

# 20. NavigationService流程

```text
Input
↓
Normalize URL
↓
Resolve Route ID
↓
Route Exists?
↓ no
ErrorResolver → 404/410/etc

↓ yes
Unlocked?
↓ no
403

↓ yes
Story Override?
↓
Anomaly Override?
↓
Log Navigation Event
↓
Resolve Render State
↓
Navigate
```

---

# 21. Error语义

必须严格：

```text
404
不存在 / 未归档 / 当前索引无对象

403
对象存在，但权限/依赖未满足

410
曾存在，后被删除

Archive Missing
Archive未捕获

Corrupted
数据本身损坏
```

---

# 22. Program Error与Game Error分离

真实React异常：

```text
Unexpected application error.
Progress preserved.
Reload.
```

绝不能伪装：

```text
404
MEMORY ERROR
Corrupted
```

---

# 23. Chapter Unlock Registry

建议：

```ts
interface ChapterGate {
  id: string;
  requiredKnowledge: KnowledgeId[];
  requiredEvidence?: EvidenceId[];
  condition?: (state: GameState) => boolean;
}
```

---

# 24. Chapter 01完成条件

不要要求玩家看完全部页面。

最低：

```text
HAS(E001)
HAS(E002)
HAS_KNOWLEDGE(EVENT_DATE_CHANGED)
```

推荐：

```ts
chapter01Complete =
  knowledge.has("EVENT_DATE_CHANGED") &&
  evidence.has("E001") &&
  evidence.has("E002");
```

---

# 25. Chapter 02入口

```text
chapter01Complete
AND
backup_20070823_discovered
```

BlueMoon可以通过：

```text
BM-1847
```

自然解锁。

---

# 26. Chapter 02完成条件

```text
SUMMER17_IS_LINXIA
LINXIA_ONLINE_2031
```

推荐：

```ts
knowledge.has("SUMMER17_IS_LINXIA")
&&
knowledge.has("LINXIA_ONLINE_2031")
```

完成后：

```text
identityDependencyResolved=true
```

---

# 27. Chapter 03入口

```text
identityDependencyResolved
```

Backup状态：

```text
IMAGE PROVENANCE REQUIRED
```

---

# 28. Chapter 03完成条件

```text
PHOTO17_ORIGINAL_NO_FOURTH
HUMAN_FIRST_IN_RECONSTRUCTION
RECONSTRUCTION_RECURSIVE
SESSION_VARIANT_DYNAMIC
```

然后：

```text
imageProvenanceResolved=true
```

---

# 29. Chapter 04入口

```text
identityDependencyResolved
&&
imageProvenanceResolved
```

---

# 30. Chapter 04完成条件

```text
DESKTOP_IS_RECOVERY_SHELL
CALENDAR_HAS_OBSERVER
MEMORY_IS_PERSONA_GRAPH
UI_CONTINUITY_CONSTRUCTED
```

然后：

```text
continuityServiceAvailable=true
```

---

# 31. Chapter 05入口

```text
continuityServiceAvailable
```

---

# 32. Chapter 05完成条件

```text
ROOM_FULL_NAME
SUBJECT04_TO_404
UNKNOWN_IS_UNRESOLVED_PERSONA
OBSERVER_MODEL_ACTIVE
OBSERVER_MODEL_CAN_BE_WRONG
OBSERVER405_FORMING
```

---

# 33. Final入口

```text
chapter05Complete
```

---

# 34. Final Resolution开放条件

```text
GENERATED_FINAL_SAMPLE_SEEN
REAL_WORLD_SOURCE_BOUNDARY_SEEN
OBSERVER_FINAL_REVIEW_DONE
```

---

# 35. Global State不要使用几百个Boolean

推荐：

```ts
interface GameState {
  version: number;

  phase: GamePhase;

  knowledge: Set<KnowledgeId>;
  evidence: Set<EvidenceId>;

  counters: Record<CounterId, number>;
  beliefs: Record<BeliefId, number>;

  unlocks: Set<UnlockId>;

  anomaly: AnomalyState;
  unknown: UnknownState;
  observer: ObserverState;

  browser: BrowserState;
  desktop: DesktopState;

  ending?: EndingState;
}
```

---

# 36. 为什么Knowledge使用Set

不要：

```ts
knowsA: true,
knowsB: false,
knowsC: true
```

会很快失控。

建议：

```ts
knowledge.has("EVENT_DATE_CHANGED")
```

---

# 37. Knowledge ID命名

全部大写：

```text
EVENT_DATE_CHANGED
SUMMER17_IS_LINXIA
LINXIA_ONLINE_2031
THREAD_NOT_SUICIDE_NOTE
PHOTO17_ORIGINAL_NO_FOURTH
HUMAN_FIRST_IN_RECONSTRUCTION
RECONSTRUCTION_RECURSIVE
DESKTOP_IS_RECOVERY_SHELL
MEMORY_IS_PERSONA_GRAPH
ROOM_FULL_NAME
UNKNOWN_IS_UNRESOLVED_PERSONA
OBSERVER405_IS_MODEL
LINXIA_FATE_UNRESOLVED
```

---

# 38. Knowledge ≠ Evidence

Evidence：

```text
玩家获得了一个对象。
```

Knowledge：

```text
玩家理解了对象之间的关系。
```

例如：

```text
E001
学校17号公告

E002
学校18号公告
```

同时获得后：

```text
EVENT_DATE_CHANGED
```

这是Knowledge。

---

# 39. Evidence Registry

程序建议：

```ts
interface Evidence {
  id: EvidenceId;
  title: string;
  chapter: number | "final";

  sourceType: SourceType;

  objectIds: string[];

  reliability: Reliability;

  unlockKnowledge?: KnowledgeId[];

  relatedEvidence?: EvidenceId[];
}
```

---

# 40. SourceType统一枚举

```ts
type SourceType =
  | "ORIGINAL"
  | "RECOVERED"
  | "ALTERED"
  | "WEB_DERIVATIVE"
  | "ARCHIVED"
  | "RECONSTRUCTED"
  | "GENERATED"
  | "SYSTEM"
  | "SESSION"
  | "UNKNOWN";
```

---

# 41. Reliability不要叫Truth Score

建议：

```ts
type Reliability =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "NOT_VALID_FOR_ORIGINAL_EVENT"
  | "UNKNOWN";
```

---

# 42. Chapter 01 Evidence

Canonical：

```text
E001
学校原始公告（17号）

E002
学校修改公告（18号）

E003
Guestbook 17号留言

E004
Photo17 Web版

E005
Diary《原图》

E014
/0817/private.html

E015
backup_20070823.zip 存在记录
```

E006～E013如尚未稳定命名：

```text
先保留，不急着在代码中创建空对象。
```

---

# 43. Chapter 02 Evidence

```text
E020
Summer17 Identity Relation

E021
20:31 Thread Timestamp

E022
20:17–22:01 Session Log

E023
Cookie Relation

E024
21:17 Last Reply

E025
Moderator Hide Log

E026
Forum Date Memory Pollution

E027
Node7 Browser Cache
```

---

# 44. Chapter 03 Evidence

```text
E030
Photo17 Original / Club Copy

E031
2007-08-23 Recovered Copy

E032
Reconstruction Recursion

E033
Session Variant Log

E034
2016 Reconstruction Artifact

E035
2022 Feature Persistence

E036
Similar Reconstruction Features
```

---

# 45. Chapter 04 Core Evidence

```text
E040
backup_20070823 Source Package

E041
Recovery Build 2016-03-17

E042
Messenger Source Mapping

E043
Calendar Current Observer Events

E044
environment.manifest

E045
recovery.log

E046
Persona Memory Graph Error

E047
Raw Directory vs Recovery Shell

E048
Unknown Current Session Source
```

---

# 46. Chapter 04 Files Evidence

```text
E050
draft_0818

E051
mail_unsent_0203

E052
Raw Name Mapping

E053
Generated Summary Example

E054
Relevance Sort Policy
```

---

# 47. Chapter 04 Messenger Evidence

```text
E060
Zhou Chat 0816

E061
Gu Original Copy Chat

E062
Linked Email 22:41

E063
Messenger Source Mapping

E064
Unknown No-2007 Source

E065
Group Chat 0814
```

---

# 48. Chapter 04 Calendar Evidence

```text
E070
Calendar Personal 2007

E071
Recovery Build 2016

E072
Current Observer Session

E073
Session Terminal Command

E074
Anchor 03:17
```

---

# 49. Chapter 05 Evidence

```text
E080
ROOM Full Name

E081
Subject04 2011 Import

E082
ROOM Naming 2012

E083
2014 Reconstruction Prototype Artifact

E084
Persona Continuity Model

E085
2017 Generated Forgiveness Review

E086
Subject04 → 404 Migration

E087
default_subject=404

E088
UNRESOLVED_PERSONA

E089
Observer Model

E090
Observer Inference Correction

E091
Observer405 Candidate
```

---

# 50. Final Evidence

```text
E100
Generated Final Linxia Sample

E101
Final Real-World Source Boundary

E102
Observer405 Final Inference

E103
Resolution Impact Preview

E104
Identity Match 99.7

E105
Final Resolution Record
```

---

# 51. Evidence ID的实现规则

在代码里只用：

```text
E001
E002
...
```

不要同时存在：

```text
E001
E001_school_original_notice
```

这种双ID。

描述名应该是：

```ts
{
  id: "E001",
  key: "school_original_notice"
}
```

---

# 52. PlayerKnowledge核心表

建议按章。

---

## CH01

```text
EVENT_DATE_CHANGED
PHOTO17_SEEN
PRIVATE_0817_EXISTS
BACKUP_20070823_EXISTS
```

---

## CH02

```text
SUMMER17_IS_LINXIA
LINXIA_ONLINE_2031
LINXIA_SESSION_END_2201
GYM_NOT_LAST_LOCATION
THREAD_NOT_SUICIDE_NOTE
FORUM_MEMORY_POLLUTED
```

---

## CH03

```text
PHOTO17_ORIGINAL_NO_FOURTH
RECOVERED_COPY_NO_FOURTH
HASH_DIFF_NOT_EDIT_PROOF
HUMAN_FIRST_IN_RECONSTRUCTION
RECONSTRUCTION_RECURSIVE
SESSION_VARIANT_DYNAMIC
FOURTH_PERSON_NOT_2007_REAL
```

---

## CH04

```text
BACKUP_IS_REAL_SOURCE
SHELL_BUILD_2016
MESSENGER_IS_AGGREGATED
CALENDAR_HAS_OBSERVER
UNKNOWN_NOT_2007_CONTACT
DESKTOP_IS_RECOVERY_SHELL
MEMORY_IS_PERSONA_GRAPH
UI_CONTINUITY_CONSTRUCTED
RAW_DIFFERS_FROM_SHELL
```

---

## CH05

```text
ROOM_FULL_NAME
ROOM_ARCHIVE_RESEARCH_ORIGIN
SUBJECT04_IS_LINXIA_CONTEXT
SUBJECT04_TO_404
404_IS_MIGRATION_ID
UNKNOWN_IS_UNRESOLVED_PERSONA
UNKNOWN_USES_MIXED_SOURCES
OBSERVER_MODEL_ACTIVE
OBSERVER_MODEL_CAN_BE_WRONG
OBSERVER405_IS_MODEL
OBSERVER405_NOT_YET_SUBJECT
```

---

## FINAL

```text
GENERATED_CAN_BE_HIGH_FIT
LINXIA_FATE_UNRESOLVED
OBSERVER405_NOT_SELF
RESOLUTION_AFFECTS_MODELS_NOT_REALITY
SOURCE_ARCHIVE_PRESERVED
```

---

# 53. Knowledge Unlock Engine

不要散落：

```ts
if (e1 && e2) ...
```

建议：

```ts
const knowledgeRules: KnowledgeRule[] = [
  {
    id: "EVENT_DATE_CHANGED",
    requiresEvidence: ["E001", "E002"]
  },
  {
    id: "SUMMER17_IS_LINXIA",
    requiresEvidence: ["E020", "E023"]
  }
];
```

统一：

```text
KnowledgeResolver
```

运行。

---

# 54. Event Store是全游戏最重要的数据层

必须从项目第一天就做。

因为它同时服务：

```text
剧情Trigger
Calendar
session.log
Unknown
Observer Model
Save
Ending Stats
```

---

# 55. Event Store数据结构

```ts
interface GameEvent {
  id: string;

  type: EventType;

  timestamp: string;
  sessionId: string;

  chapter: GamePhase;

  routeId?: RouteId;
  objectId?: string;

  data?: Record<string, string | number | boolean>;

  source: "PLAYER" | "SYSTEM";
}
```

---

# 56. Event Type核心枚举

```text
SESSION_START
SESSION_RESUME

NAVIGATE
PAGE_VISIT
SEARCH
REFRESH
BACK
FORWARD
NAVIGATION_ERROR

EVIDENCE_OPEN
EVIDENCE_UNLOCK
KNOWLEDGE_UNLOCK

PHOTO_VIEW
PHOTO_COMPARE

THREAD_OPEN
PROFILE_OPEN

APP_OPEN
FILE_OPEN
MESSAGE_VIEW
CALENDAR_VIEW
SOURCE_INSPECT

TERMINAL_OPEN
TERMINAL_COMMAND
TERMINAL_SOURCE_CHECK
TERMINAL_OBJECT_CHECK
TERMINAL_RAW_MOUNT

UNKNOWN_OPEN
UNKNOWN_MESSAGE
UNKNOWN_RESPONSE

OBSERVER_INFERENCE
OBSERVER_INFERENCE_REJECT

RESOLUTION_PREVIEW
RESOLUTION_APPLY

ENDING_REACHED
```

---

# 57. 哪些行为不要记录

不要：

```text
每次mouse move
hover
滚动1px
按键
现实窗口focus
```

Event Store只记录：

```text
有叙事意义的操作。
```

---

# 58. Event Store与Calendar

Calendar Session Provider：

```ts
sessionEvents
  .filter(isCalendarVisibleEvent)
  .map(toCalendarEvent)
```

不要另建：

```text
calendar_events_2026
```

重复数据。

---

# 59. Event Store与Terminal

`session.log`：

```text
实时格式化Event Store。
```

Terminal history：

```text
过滤 TERMINAL_COMMAND。
```

---

# 60. Event Store与Unknown

Unknown可以查询：

```text
count(PHOTO_VIEW, PHOTO17)
last(SEARCH)
mostVisitedRoute
sourceCheckCount
```

---

# 61. Unknown绝不读取现实信息

ObserverService的数据源严格：

```text
GameEvent[]
```

没有：

```text
window.navigator data
filesystem
clipboard
camera
microphone
browser external history
```

---

# 62. Unknown Stage

06文档锁定：

```text
Stage 0 — SILENT
Stage 1 — OBSERVER
Stage 2 — FAMILIAR
Stage 3 — PRESSURE
Stage 4 — CONTRADICTION
Stage 5 — MIRROR
Final — ENDING
```

---

# 63. Unknown Stage与章节建议映射

```text
CH01
Stage 0 → 1

CH02
Stage 1 → 2

CH03
Stage 2 → 3

CH04
Stage 3 → 4

CH05
Stage 4 → 5

FINAL
Stage 5 → ENDING
```

---

# 64. Anomaly Level

建议统一：

```text
0 NORMAL
1 SUBTLE
2 NOTICEABLE
3 SYSTEMIC
4 OBSERVER_AWARE
5 MIRROR
6 RESOLUTION
```

---

# 65. Anomaly Level 0

```text
正常Archive
普通2007网页
Unknown SILENT
```

---

# 66. Level 1

允许：

```text
日期轻微矛盾
Photo17 revisit差异非常轻
Unknown第一次观察性消息
```

---

# 67. Level 2

允许：

```text
论坛时间线开始推翻旧认知
Unknown知道已完成的游戏内行为
Search Echo少量出现
```

---

# 68. Level 3

允许：

```text
Photo版本明显变化
Reconstruction来源暴露
Recovery环境出现
Unknown开始Identity pressure
```

---

# 69. Level 4

允许：

```text
Calendar出现CURRENT_OBSERVER
Unknown出现在Recovery Messenger
whoami出现Observer Context
```

---

# 70. Level 5

允许：

```text
ROOM Continuity
Observer Model
Unknown身份混合
405 Candidate
```

---

# 71. Level 6

只在：

```text
Final Resolution
```

使用。

不是：

```text
更强Glitch。
```

而是：

```text
系统状态真正改变。
```

---

# 72. Anomaly不等于视觉故障

核心分配：

```text
70%
信息/状态异常

20%
UI层关系异常

10%
视觉变化
```

不要反过来。

---

# 73. 建议未来拆 `25_ANOMALY_EVENT_CATALOG.md`

如果实现阶段Unknown/Anomaly超过：

```text
100条Trigger
```

再拆。

内容结构：

```yaml
id:
chapter:
minAnomaly:
maxAnomaly:
conditions:
cooldown:
once:
medium:
text:
effects:
```

---

# 74. Unknown Message Trigger结构

```ts
interface UnknownTrigger {
  id: string;

  minStage: number;
  maxStage?: number;

  requiresKnowledge?: KnowledgeId[];
  requiresEvents?: EventPredicate[];

  investigationPattern?: InvestigationPattern;

  once: boolean;
  cooldown?: number;

  priority: number;

  messageId: string;
}
```

---

# 75. Unknown文本不要直接写在React组件

建议：

```text
story/unknown/messages.ts
story/unknown/triggers.ts
```

---

# 76. Unknown文本固定池

v1：

```text
不接实时LLM。
```

关键原因：

```text
剧情可测试
Source可追踪
不会误泄漏身份逻辑
不会出现不符合Canon的“灵魂AI”台词
```

---

# 77. Observer Model

初期不需要AI。

只做：

```text
统计 + 规则推断。
```

---

# 78. Investigation Pattern计算

建议：

```ts
archiveScore =
  sourceChecks * 2 +
  compareCount +
  rawViewCount * 3;

characterScore =
  messageViews +
  diaryViews * 2;

systemScore =
  terminalCommands +
  systemPageViews * 2;

completionScore =
  uniqueRoutesVisited +
  optionalEvidenceCount;

contrarianScore =
  inferenceRejects * 3 +
  systemPromptRechecks;
```

最后：

```text
取最高或Top2。
```

---

# 79. 不使用人格标签

UI写：

```text
Investigation Pattern
```

不是：

```text
Your Personality
```

---

# 80. Belief State

可以保留：

```ts
beliefs: {
  suspectZhou: number;
  trustGu: number;
  trustRoom: number;
  trustGenerated: number;
}
```

范围：

```text
-1 → +1
```

只用于：

```text
Unknown变体
Observer inference
```

不决定Hard Truth。

---

# 81. Browser State

```ts
interface BrowserState {
  currentRouteId: RouteId;

  history: RouteId[];
  historyIndex: number;

  searchHistory: SearchRecord[];

  refreshCounts: Record<RouteId, number>;

  visitCounts: Record<RouteId, number>;
}
```

---

# 82. Back / Forward

CH01～CH03：

```text
基本正常
```

高Anomaly以后可以：

```text
Story Override
```

但任何Override：

```text
必须由明确Event记录。
```

---

# 83. Refresh

Photo17 Session Variant使用：

```text
visitCount
```

不是：

```text
随机。
```

同存档同状态：

```text
可复现。
```

---

# 84. Photo17 Resolver

最终对象名：

```text
PHOTO17
```

最终原文件：

```text
DSC0417.JPG
```

建议：

```ts
resolvePhoto17Version(state)
```

返回：

```text
WEB_2007
RESTORE_2015
RECON_2016
RECON_2022
ORIGINAL_2007
```

---

# 85. 桌面VFS

使用：

```text
Dexie / IndexedDB
```

但VFS节点：

```text
数据来自游戏JSON
```

不是用户真实文件。

---

# 86. VFS结构

```ts
interface VfsNode {
  id: string;

  name: string;
  originalName?: string;

  type: "file" | "folder" | "virtual";

  parentId?: string;

  contentId?: string;

  sourceType: SourceType;
  originObjectId?: string;

  originalPath?: string;

  createdAt?: string;
  modifiedAt?: string;
  recoveredAt?: string;

  integrity?: number;

  reconstructionGeneration?: number;

  hidden?: boolean;
  locked?: boolean;
}
```

---

# 87. Recovery Shell与Raw View

使用两个View：

```text
SHELL
RAW
```

但两者引用：

```text
同一底层Object Registry。
```

这样：

```text
source DOCUMENTS\0817.txt
```

能够指向：

```text
RAW\DOC\note3.txt
```

---

# 88. Object Registry

全游戏建议建立：

```text
objects/
```

每个数字对象都有统一Object ID。

例如：

```text
OBJ_SCHOOL_NOTICE_V1
OBJ_SCHOOL_NOTICE_V2
OBJ_PHOTO17
OBJ_THREAD_1847
OBJ_BACKUP_20070823
OBJ_ENV_SUBJECT04
OBJ_UNKNOWN
OBJ_SUBJECT404
OBJ_OBSERVER405
```

---

# 89. Object与Evidence区别

Object：

```text
世界里的东西。
```

Evidence：

```text
玩家把某Object纳入调查后的“证据条目”。
```

同一Object可以：

```text
支撑多个Knowledge。
```

---

# 90. Content Registry

建议：

```ts
interface StoryObject {
  id: ObjectId;

  title: string;

  sourceType: SourceType;

  createdAt?: string;
  modifiedAt?: string;

  provenanceParents?: ObjectId[];

  contentId?: string;

  routeId?: RouteId;

  metadata?: Record<string, unknown>;
}
```

---

# 91. 文件目录最终建议

```text
src/
├── app/
│
├── components/
│   ├── browser/
│   ├── archive/
│   ├── desktop/
│   ├── forensic/
│   └── system/
│
├── apps/
│   ├── Files/
│   ├── Gallery/
│   ├── Messenger/
│   ├── Calendar/
│   ├── Browser/
│   ├── Player/
│   ├── RecycleBin/
│   ├── Settings/
│   └── Terminal/
│
├── game/
│   ├── engine/
│   │   ├── GameEngine.ts
│   │   ├── TriggerEngine.ts
│   │   ├── KnowledgeResolver.ts
│   │   ├── EvidenceEngine.ts
│   │   ├── AnomalyEngine.ts
│   │   ├── UnknownEngine.ts
│   │   ├── ObserverEngine.ts
│   │   ├── ResolutionEngine.ts
│   │   └── SaveEngine.ts
│   │
│   ├── navigation/
│   │   ├── NavigationService.ts
│   │   ├── RouteRegistry.ts
│   │   └── ErrorResolver.ts
│   │
│   ├── state/
│   │   ├── gameMachine.ts
│   │   └── selectors.ts
│   │
│   └── recovery/
│       ├── EnvironmentBuilder.ts
│       ├── SourceMapper.ts
│       ├── MemoryGraph.ts
│       └── VfsResolver.ts
│
├── story/
│   ├── chapters/
│   ├── objects/
│   ├── evidence/
│   ├── knowledge/
│   ├── unknown/
│   ├── dialogue/
│   ├── timeline/
│   └── endings/
│
├── stores/
│   ├── gameStore.ts
│   ├── browserStore.ts
│   ├── desktopStore.ts
│   └── uiStore.ts
│
└── database/
    ├── db.ts
    ├── migrations.ts
    └── schema.ts
```

---

# 92. 技术栈最终建议

```text
React
TypeScript
Vite
React Router
Zustand
XState
Dexie / IndexedDB
Motion
FlexSearch
```

后续：

```text
Webamp
PDF.js
Tone.js
JS Paint思路
```

按需要接。

---

# 93. Zustand与XState职责分离

XState：

```text
大剧情状态
章节Gate
Resolution
```

Zustand：

```text
UI
Browser
Window
Selected Object
暂存交互状态
```

Dexie：

```text
持久化
Game Events
Save
VFS State
```

---

# 94. 数据库Schema

建议至少：

```text
saves
events
evidence
knowledge
browser_history
desktop_state
unknown_history
observer_state
ending_history
```

---

# 95. Dexie建议

```ts
class RoomDb extends Dexie {
  saves!: Table<SaveRecord>;
  events!: Table<GameEvent>;
  endings!: Table<EndingRecord>;
}
```

其他游戏状态：

```text
可整体JSON存SaveRecord
```

不要过度关系数据库化。

---

# 96. Save Record

```ts
interface SaveRecord {
  id: string;

  schemaVersion: number;

  createdAt: string;
  updatedAt: string;

  phase: GamePhase;

  gameState: SerializedGameState;

  checkpointType:
    | "AUTO"
    | "MANUAL"
    | "FINAL_CHECKPOINT";
}
```

---

# 97. Save必须版本化

从第一天：

```text
schemaVersion
```

不要等后面。

因为游戏状态非常复杂。

---

# 98. Save Migration

```ts
migrateSave(save)
```

支持：

```text
v1 → v2 → v3
```

特别是：

```text
Evidence ID改名
Knowledge ID改名
```

以后一定会发生。

---

# 99. Autosave策略

不要每点击一次写盘。

建议：

```text
关键事件后
500～1000ms debounce
```

---

# 100. Autosave节点

全局：

```text
Chapter Entry
Knowledge Unlock
Major Evidence
Anomaly Stage Change
Recovery Boot
Observer Model Change
Resolution Preview
Resolution Apply
Ending
```

---

# 101. Final Checkpoint

独立：

```text
FINAL_CHECKPOINT
```

必须在：

```text
任何Resolution真正执行前
```

保存。

---

# 102. Reset

Reset必须：

```text
真正删除当前Session Observer状态。
```

不能像恐怖游戏：

```text
“删了它还记得。”
```

除非以后明确做独立Meta Mode。

---

# 103. New Game+

保留：

```text
Ending Gallery
Achievements
可选Player Notes
```

不保留：

```text
Unknown memory
Observer Model
StoryKnowledge
```

---

# 104. 页面数据不要写死在组件

错误：

```tsx
<p>17号我没有出门。</p>
```

正确：

```tsx
const entry = contentRegistry.get("DIARY_0818_DRAFT");
```

---

# 105. Story Content建议JSON/TS

例如：

```ts
export const diary0818 = {
  id: "DIARY_0818_DRAFT",
  sourceType: "RECOVERED",
  text: [
    "17号我没有出门。",
    "...",
  ]
};
```

---

# 106. Markdown如何进入程序

不要运行时直接解析01～23全部Markdown。

建议流程：

```text
设计Markdown
↓
人工锁Canon
↓
提取为结构化TS/JSON
↓
程序运行结构化数据
```

Markdown继续：

```text
作为设计源。
```

---

# 107. 为什么不能直接Markdown驱动整个游戏

因为：

```text
Trigger
Source
Evidence
Object Relation
Route
Unlock
```

必须结构化。

Markdown适合：

```text
作者阅读
```

不适合：

```text
运行时逻辑。
```

---

# 108. Story Data目录建议

```text
src/story/data/
├── chapters.ts
├── routes.ts
├── objects.ts
├── evidence.ts
├── knowledgeRules.ts
├── triggers.ts
├── unknownMessages.ts
├── anomalyEvents.ts
├── timeline.ts
└── resolutions.ts
```

---

# 109. Chapter Config

```ts
interface ChapterConfig {
  id: GamePhase;

  title: string;

  entryGate: Gate;

  completeGate: Gate;

  defaultAnomalyLevel: number;

  unknownStage: number;
}
```

---

# 110. Trigger Engine

所有：

```text
玩家操作
```

发生后：

```text
Event Store
↓
Trigger Engine
↓
KnowledgeResolver
↓
UnknownEngine
↓
AnomalyEngine
↓
ChapterMachine
```

---

# 111. Trigger优先顺序

推荐：

```text
1. Hard Story State
2. Knowledge Unlock
3. Chapter Gate
4. Anomaly
5. Unknown
6. Cosmetic
```

防止：

```text
Unknown消息抢在核心页面更新前弹出。
```

---

# 112. Source Awareness

这是ARCHIVIST路线最重要隐藏指标。

不要简单：

```text
+1 查来源
```

建议：

```text
source check
raw view
compare provenance
reject source-equivalent generated content
```

综合。

---

# 113. Source Awareness建议范围

```text
0.0 → 1.0
```

动态计算：

```ts
score =
  weightedSourceActions /
  possibleRelevantSourceActions;
```

不要让Completionism自动等于Source Awareness。

---

# 114. ARCHIVIST解锁

不要靠一个隐藏文件。

推荐：

```text
sourceAwareness >= 0.65
```

并满足：

```text
RAW_VIEW_SEEN
UNKNOWN_SOURCE_CHECKED
GENERATED_MORAL_STATEMENT_SEEN
GENERATED_VS_ORIGINAL_UNDERSTOOD
```

---

# 115. Ending Engine

数据驱动：

```ts
const resolutions = {
  DELETE: {...},
  RETURN: {...},
  OBSERVER: {...},
  ARCHIVIST: {...}
};
```

---

# 116. Resolution必须是Atomic Transaction

```text
BEGIN
↓
Apply Subject State
Apply Observer State
Apply Unknown State
Apply Service State
Write Ending
↓
COMMIT
```

失败：

```text
ROLLBACK
```

---

# 117. 四结局数据结果

DELETE：

```text
404 active continuity deleted
sources preserved
405 archived
```

RETURN：

```text
405 merged into 404
404 continuity accepted
```

OBSERVER：

```text
405 → Subject405
404 remains independent
```

ARCHIVIST：

```text
404 frozen unresolved
405 archived
canonical merge disabled
```

---

# 118. 页面开发顺序：不要按章节一次做完

正确顺序应该先做：

```text
Engine
↓
UI基础
↓
Vertical Slice
↓
内容扩展
```

---

# 119. Phase 0 — Project Foundation

先完成：

```text
Vite + React + TS
Router
Zustand
XState
Dexie
GameEvent
SaveEngine
RouteRegistry
NavigationService
```

此时：

```text
没有剧情也没关系。
```

---

# 120. Phase 1 — Browser Vertical Slice

只做：

```text
ROOM Archive
Search
Linxia Home
School V1
School V2
Compare
404/403
```

目标：

```text
Chapter1核心闭环跑通。
```

---

# 121. MVP-0 成功标准

玩家可以：

```text
Search 林夏
↓
打开主页
↓
打开学校公告
↓
比较17/18
↓
获得EVENT_DATE_CHANGED
↓
保存
↓
刷新
↓
进度还在
```

这就是第一个真正MVP。

---

# 122. Phase 2 — Browser Archaeology

加入：

```text
Guestbook
Diary
Photo17 Session Variant
Archive Capture
BlueMoon
Forum Search
Thread Recovery
```

完成：

```text
CH01 + CH02
```

---

# 123. MVP-1

完整：

```text
Chapter1
Chapter2
```

时长：

```text
40～60min
```

核心验证：

```text
Web ARG玩法本身好不好玩。
```

---

# 124. Phase 3 — Provenance Tool

做：

```text
Photo Provenance Viewer
Version Graph
Compare
Overlay
Difference Map
Hash
EXIF
```

不要先做桌面。

---

# 125. MVP-2

```text
Chapter3完整
```

成功标准：

玩家能自己推：

```text
第四个人第一次出现在Reconstruction。
```

不靠角色告诉。

---

# 126. Phase 4 — Recovery Desktop Skeleton

先做：

```text
Desktop
Window Manager
Taskbar
Start Menu
Files
Messenger
Calendar
Settings
Terminal
```

此时内容可以：

```text
每个App只有1～2条。
```

---

# 127. MVP-3

只做Chapter4最小闭环：

```text
Boot
↓
Desktop
↓
0817.txt
↓
Messenger source mapping
↓
Calendar Session
↓
Settings Build 2016
↓
memory status
↓
Recovery Shell认知完成
```

---

# 128. Phase 5 — Desktop Content Expansion

再加入：

```text
17完整Files
18完整Messenger
19 Calendar
20 Terminal
Gallery
Recycle Bin
Player
Browser
Raw View
```

---

# 129. MVP-4

```text
Chapter4完整
```

玩家停留：

```text
45～60min
```

仍觉得内容自然。

---

# 130. Phase 6 — ROOM System

做：

```text
Continuity UI
Project History
Subject IDs
UNRESOLVED_PERSONA
Observer Model
Inference
405
```

---

# 131. MVP-5

```text
Chapter5完整
```

成功标准：

玩家理解：

```text
系统知道行为
≠
系统知道人的全部。
```

---

# 132. Phase 7 — Final Resolution

做：

```text
Final Generated Sample
10:12 Source Boundary
Observer Review
Impact Preview
Resolution Engine
4 Endings
Ending Gallery
```

---

# 133. MVP-6 / Content Complete

这才是：

```text
完整首周目。
```

---

# 134. 推荐真实开发顺序

```text
01 Engine Foundation
02 BrowserShell
03 Chapter1 Vertical Slice
04 Save/Event
05 Chapter2
06 Photo Forensics
07 Desktop Window System
08 Chapter4 Core
09 Chapter4 Content
10 Terminal
11 Continuity
12 Observer
13 Final Resolution
14 Polish
```

---

# 135. 不建议的开发顺序

不要：

```text
先把23份文档所有文字全部塞进去
↓
最后再写Engine
```

会非常痛苦。

---

# 136. 第一个真正要编码的数据

建议先写：

```text
RouteRegistry
Event Store
Knowledge
Evidence
```

而不是：

```text
Unknown聊天。
```

---

# 137. MVP文件树

最初：

```text
src/
├── game/
├── story/
├── components/
└── pages/
```

不要第一天就建100个空目录。

---

# 138. P0代码任务

```text
GameEvent定义
EventStore
SaveEngine
RouteRegistry
NavigationService
EvidenceRegistry
KnowledgeResolver
```

---

# 139. P1代码任务

```text
BrowserShell
FakeAddressBar
ArchivePage
SearchPage
OldWebPage
ErrorPage
ComparePage
```

---

# 140. P2代码任务

```text
UnknownEngine
AnomalyEngine
ObserverEngine
```

---

# 141. P3

```text
Desktop
Apps
Terminal
```

---

# 142. P4

```text
Resolution
Ending
```

---

# 143. Full Route List：开发优先级P0

```text
ARCHIVE_HOME
ARCHIVE_SEARCH

LINXIA_HOME
LINXIA_DIARY
LINXIA_PHOTO_INDEX
PHOTO17
LINXIA_GUESTBOOK

SCHOOL_HOME
SCHOOL_PHOTO_CLUB
SCHOOL_NOTICE_V1
SCHOOL_NOTICE_V2

SYSTEM_404
SYSTEM_403
SYSTEM_410
```

---

# 144. P1 Routes

```text
BLUEMOON_HOME
BLUEMOON_SEARCH
SUMMER17_PROFILE
LINXIA_FORUM_PROFILE
THREAD_1847
THREAD_FRAGMENTS
FORUM_SESSION
NODE7_CACHE
```

---

# 145. P2 Routes

```text
PHOTO17_FORENSICS
PHOTO17_ORIGINAL
PHOTO17_RECOVERED
PHOTO17_RESTORE
PHOTO17_RECON2016
PHOTO17_RECON2022
PHOTO17_COMPARE
PHOTO17_SESSION_HISTORY
```

---

# 146. P3 Routes

```text
RECOVERY_BOOT
RECOVERY_LOGIN
RECOVERY_DESKTOP
```

Apps不是Router页面也可以：

```text
在Desktop内部Window Manager管理。
```

---

# 147. P4 Routes

```text
ROOM_SERVICE
CONTINUITY_SERVICE
ROOM_HISTORY
OBSERVER_SERVICE
SUBJECT404
UNRESOLVED_PERSONA
```

---

# 148. P5 Routes

```text
FINAL_REVIEW
RESOLUTION
POST_ENDING_ARCHIVE
ENDING_GALLERY
```

---

# 149. 页面组件复用

不要每个2007页面写独立CSS。

建立：

```text
LegacySiteShell
LegacyTableLayout
LegacyNav
GuestbookTable
PhotoAlbumGrid
ForumShell
ArchiveShell
```

然后内容数据驱动。

---

# 150. 2003/2007旧网页必须是真的布局区别

不要：

```text
现代卡片UI + 黄色滤镜。
```

结构就要旧：

```text
table
fixed width
small fonts
gif
blue links
```

---

# 151. Modern ROOM UI

统一：

```text
冷灰
中性
高信息密度
```

不使用：

```text
红色恐怖UI
```

除非极少状态。

---

# 152. Recovery Legacy UI

建议：

```text
2007 shell
```

但不1:1复制Microsoft商标。

---

# 153. 浏览器地址栏是玩法

FakeAddressBar：

```text
玩家可以输入虚构URL
```

解析：

```text
RouteRegistry aliases
```

---

# 154. 搜索也是玩法

SearchEngine不需要后端。

使用：

```text
FlexSearch
```

索引：

```text
pages
documents
threads
metadata
```

---

# 155. Search Result也依赖Game State

例如：

```text
同一个关键词
```

CH01和CH02：

```text
结果可以不同。
```

实现：

```text
index tags + unlock predicates
```

---

# 156. Search Echo

不是修改真实Search Index。

可以：

```text
AnomalyEngine插入一个State-dependent Suggestion。
```

---

# 157. 403/404/410是RouteState

不要创建：

```text
真的HTTP请求失败
```

内部：

```text
ErrorResolver
```

决定。

---

# 158. Photo Compare工具

开发顺序：

```text
Side by Side
Overlay
Zoom
Brightness
Difference
Hash
EXIF
```

先简单后高级。

---

# 159. Difference Map

可以预生成：

```text
difference mask image
```

首版不必浏览器实时像素分析。

这样：

```text
稳定
好测试
```

---

# 160. Hash

剧情Hash使用：

```text
固定metadata字符串
```

不需要客户端真的重新算图片文件Hash。

---

# 161. 为什么

图片经过构建工具：

```text
可能重新编码
```

导致真实Hash变化。

所以游戏展示Hash：

```text
属于Story Metadata。
```

---

# 162. EXIF同理

用：

```text
Story Metadata
```

不要依赖浏览器读取Asset EXIF。

---

# 163. Terminal实现

绝不能：

```text
调用真实Shell。
```

只是：

```text
CommandRegistry。
```

---

# 164. Terminal Command Parser

支持：

```text
command
argument
--flag
```

足够。

不做：

```text
pipe
redirect
script
```

---

# 165. Terminal数据源

全部来自：

```text
Object Registry
Event Store
Recovery State
```

因此：

```text
source
object
memory
service
```

输出可复现。

---

# 166. Observer Model实现

v1规则引擎足够。

不要AI API依赖。

---

# 167. Unknown实现

v1：

```text
Trigger + Message Pool
```

不要LLM。

---

# 168. 为什么不需要AI API

这款游戏核心是：

```text
精确来源
可重复推理
稳定时间线
```

实时模型反而容易：

```text
破坏Canon。
```

---

# 169. 后续如果接模型

只能用在：

```text
非关键自由输入paraphrase
可选Unknown聊天
```

并且：

```text
关键事实必须由固定检索上下文限制。
```

首版完全不需要。

---

# 170. Save与Observer必须分开理解

Observer：

```text
游戏世界中的模型。
```

Save：

```text
程序进度。
```

Reset Save：

```text
Observer也重置。
```

不要让程序存档机制偷偷成为剧情。

---

# 171. Anomaly Engine

输入：

```text
Game State
Visit Count
Knowledge
Unknown Stage
```

输出：

```text
render variant
UI text override
route override
suggestion
notification
```

---

# 172. Anomaly Engine禁止输出

不要：

```text
Hard Evidence修改
Original Source内容修改
Canonical Timestamp修改
```

只允许：

```text
展示层 / Reconstruction / Session层。
```

---

# 173. Hard Evidence Guard

建议所有Object有：

```ts
immutableCanon: boolean
```

例如：

```text
PHOTO17_ORIGINAL
school_notice_v1
BlueMoon 20:31 RSS
```

Anomaly Engine：

```text
不能覆盖。
```

---

# 174. Provenance是整个游戏的通用机制

Chapter3后：

```text
View Source
```

应该成为很多对象的通用按钮。

而不是只Photo17有。

---

# 175. Source Inspector组件

统一：

```text
Source Type
Original Path
Created
Modified
Recovered
Generation
Parents
Reliability
```

不同对象按需显示。

---

# 176. Evidence Board是否需要

可选。

不建议首版做复杂：

```text
自由拖线白板
```

先做：

```text
Evidence Relation Viewer
```

系统自动显示已确认关系。

---

# 177. 为什么

核心玩法已经：

```text
搜索
版本
Source
系统层
```

再加复杂侦探板会过载。

---

# 178. Timeline组件

重要。

建议：

```text
Chapter2后逐渐开放。
```

但区分：

```text
Verified
Claimed
Generated
```

不能混。

---

# 179. Timeline Item

```ts
interface TimelineItem {
  id: string;

  time: string;

  label: string;

  sourceIds: ObjectId[];

  status:
    | "VERIFIED"
    | "CLAIMED"
    | "ALTERED"
    | "RECONSTRUCTED"
    | "GENERATED"
    | "UNRESOLVED";
}
```

---

# 180. 最终10:12

Timeline必须：

```text
10:12 VERIFIED
↓
UNRESOLVED
```

不能自动补线。

---

# 181. QA体系从一开始就做

建议建立：

```text
Story QA
State QA
Route QA
Source QA
Save QA
Ending QA
```

---

# 182. Canon Lint脚本

非常建议写：

```text
scripts/canon-lint.ts
```

检测：

```text
角色名字
日期
Object ID
Evidence ID
文件名
Subject ID
```

---

# 183. Canon Lint规则示例

检测：

```text
许晓
```

直接报：

```text
Use 徐晓
```

检测：

```text
2007 Photo17 + DSC0017
```

报：

```text
PHOTO17 original filename must be DSC0417.JPG
```

---

# 184. 时间Lint

检查：

```text
20:31
22:01
22:16
22:41
23:18
```

不能跨文档错位。

---

# 185. Subject Lint

检查：

```text
SUBJECT_04
```

不能在：

```text
2025 modern service
```

错误使用。

同理：

```text
SUBJECT_404
```

不能出现在：

```text
2016 Recovery prompt
```

---

# 186. Source Lint

所有Generated对象必须：

```text
sourceType=GENERATED
```

RETURN以后也不能变。

---

# 187. Unknown Lint

Unknown关键消息不能包含：

```text
现实设备信息
真实用户名
现实位置
```

---

# 188. Ending Lint

DELETE：

```text
sourceArchivePreserved必须true
```

ARCHIVIST：

```text
futureReconstruction必须false
```

RETURN：

```text
generated Source标签必须保留
```

OBSERVER：

```text
externalIdentity=UNRESOLVED
```

---

# 189. Route QA

对所有Route：

```text
exists
unlocked
403
404
410
```

至少有单元测试。

---

# 190. Navigation测试例

```text
CH01直接输入 /service/continuity
→ 404 or no indexed route

CH04已发现系统对象
→ 403

CH05
→ available
```

具体按Route exposure策略。

---

# 191. Sequence Break测试

每章至少测试：

```text
标准路径
技术型捷径
人物型路径
Source型路径
```

---

# 192. 不要求玩家按作者顺序点击

这是ARG可信度核心。

所以：

```text
Gate使用Knowledge
```

而不是：

```text
questStep === 12
```

---

# 193. Soft Guidance

卡住时：

```text
Search suggestion
Related Object
Archive reference
Unknown低强度提示
```

不要：

```text
任务箭头。
```

---

# 194. Hint系统

每个主线Puzzle：

```text
Hint1
Hint2
Hint3
```

逐渐具体。

---

# 195. Hint也记录Event吗

可以：

```text
HINT_USED
```

但：

```text
不要影响结局价值判断。
```

---

# 196. Accessibility

必须考虑：

```text
旧网页字体缩放
高对比
减少动画
无声音线索必需
键盘操作
Photo Difference辅助模式
```

---

# 197. Photo谜题不能只靠颜色

Difference可：

```text
轮廓高亮
文字说明
```

支持色觉差异。

---

# 198. Glitch Reduction

设置：

```text
Reduce visual anomalies
```

只减少：

```text
视觉变化
```

不删除：

```text
剧情信息。
```

---

# 199. Performance

预加载：

```text
当前章节必要图片
```

不要一次：

```text
加载所有2007照片。
```

---

# 200. 图片版本资源命名

建议：

```text
photo17_original_2007.jpg
photo17_web_2007.jpg
photo17_recovered_20070823.jpg
photo17_restore_2015.jpg
photo17_recon_2016.jpg
photo17_recon_2022.jpg
```

metadata.filename：

```text
DSC0417.JPG
```

Asset filename与故事文件名分离。

---

# 201. 旧网页Asset命名

不要依赖：

```text
中文路径
```

程序Asset：

```text
school_photo_001.jpg
```

页面显示可以：

```text
photo001.jpg
```

---

# 202. Content Build Pipeline

未来可以写：

```text
scripts/build-story-data.ts
```

把：

```text
作者维护JSON/YAML
```

验证后生成：

```text
TS Registry
```

---

# 203. 不建议自动从Markdown解析剧情

Markdown结构经常：

```text
为人类阅读优化
```

不是Schema。

---

# 204. 目前第一轮代码开发前的任务表

### P0 Canon

```text
修Photo17文件名
修徐晓
修private日期措辞
检查2014/2016说明
```

### P0 Engine

```text
RouteRegistry
EventStore
KnowledgeResolver
EvidenceRegistry
SaveEngine
```

### P0 UI

```text
BrowserShell
ArchiveHome
Search
OldSiteShell
ErrorPage
```

---

# 205. 第一个Sprint建议

目标：

```text
CH01核心Vertical Slice
```

只实现：

```text
Archive Home
Search
Linxia Home
School V1/V2
Compare
Evidence
Knowledge
Save
```

不要：

```text
Unknown
Photo17变化
BlueMoon
```

先验证基础架构。

---

# 206. Sprint 2

加入：

```text
Guestbook
Diary
Photo17
Unknown Stage1
Backup403
```

CH01完整。

---

# 207. Sprint 3

```text
BlueMoon
Forum search
Thread fragments
Session timeline
```

CH02完整。

---

# 208. Sprint 4

```text
Photo Forensics
```

CH03完整。

---

# 209. Sprint 5

```text
Window Manager
Files
Messenger
Calendar
```

CH04 Core。

---

# 210. Sprint 6

```text
Terminal
Raw
Memory
Desktop content
```

CH04完整。

---

# 211. Sprint 7

```text
ROOM History
Unknown Persona
Observer
405
```

CH05。

---

# 212. Sprint 8

```text
Resolution
4 Endings
Credits
Ending Gallery
```

Content Complete。

---

# 213. Definition of Done — Chapter

每章完成不等于：

```text
页面做出来。
```

必须：

```text
标准路径可通
Sequence Break可通
Save/Resume可通
Hard Evidence一致
Unknown不阻塞
Hint可用
Route errors正确
```

---

# 214. Definition of Done — Full Game

至少：

```text
Clean Save从Archive开始
↓
无需开发者Console
↓
完整走到四个基本Resolution
```

并且：

```text
无Hard Lock
无状态丢失
无Source冲突
```

---

# 215. Full Game QA的五条黄金测试

### Test 1

玩家完全不理Unknown：

```text
能通关。
```

### Test 2

玩家不使用Terminal：

```text
能通关。
```

### Test 3

玩家大量Sequence Break：

```text
不会破坏剧情。
```

### Test 4

玩家刷新/退出/Resume：

```text
Session与Save一致。
```

### Test 5

玩家查所有Source：

```text
没有Canon矛盾。
```

---

# 216. 游戏真正不可妥协的五个系统

如果开发时间不足，也不能砍：

```text
1. NavigationService
2. Event Store
3. Evidence/Knowledge分离
4. Source/Provenance
5. Save/Resume
```

---

# 217. 可以后砍的东西

时间不够时：

```text
播放器
复杂Recycle Bin
JS Paint
复杂Evidence Board
音频彩蛋
大量Similar Photos
```

都可以延后。

---

# 218. 不能为了范围砍掉的Chapter3

Photo Provenance是：

```text
整个ROOM主题的教学关。
```

必须保留。

---

# 219. 不能为了范围砍掉Calendar2026

这是：

```text
Observer Model成立的第一现场证明。
```

必须保留。

---

# 220. 不能砍Generated Final Test

这是：

```text
四结局价值选择成立的前提。
```

---

# 221. 最终MVP版本建议

如果希望先做一个能发布试玩的版本：

```text
Demo v0.1
=
Chapter 01
+
Chapter 02前半
```

结束在：

```text
Summer17出现
```

---

# 222. 更好的公开Demo

推荐：

```text
Chapter01完整
```

30分钟左右。

结尾：

```text
BM-1847
backup403
```

非常适合：

```text
Steam Demo / itch.io Demo
```

---

# 223. Internal Alpha

```text
CH01～CH03
```

用于验证：

```text
ARG / Provenance玩法是否成立。
```

---

# 224. Beta

```text
CH01～CH05
```

结局暂时：

```text
Resolution unavailable
```

也可测试。

---

# 225. Release Candidate

```text
Final + Endings
```

---

# 226. 当前内容完成度评估

从设计文档层面：

```text
世界观：
高

主线：
已闭合

角色：
核心三人+Unknown已够

章节：
完整

终局：
完整

内容库：
Chapter4仍可继续扩写普通文本

技术蓝图：
本文件补齐后可进入开发
```

---

# 227. 接下来不应该继续“加剧情”

目前最容易犯的错误：

```text
继续加Chapter6
继续加新人物
继续加幕后组织
继续加更多真相
```

不建议。

主线已经足够。

---

# 228. 接下来应该做什么

顺序：

```text
1. Canon Cleanup
2. Story Data Schema
3. RouteRegistry
4. Event Store
5. Save Engine
6. Chapter1 Vertical Slice
```

---

# 229. 后续文档优先级

如果继续补设计文件：

第一优先：

```text
25_ANOMALY_EVENT_CATALOG.md
```

只在：

```text
开始实现Unknown/Anomaly
```

时需要。

第二：

```text
26_STORY_DATA_SCHEMA.md
```

如果准备把Markdown转JSON/TS。

第三：

```text
27_CHAPTER01_IMPLEMENTATION_TASKS.md
```

如果准备正式开工。

---

# 230. 我更推荐下一份直接做什么

如果准备开始编码：

不要先写25。

直接建立：

```text
26_STORY_DATA_SCHEMA.md
```

把：

```text
Route
Object
Evidence
Knowledge
Event
Trigger
Message
Resolution
```

所有Schema锁死。

然后：

```text
开始Chapter1。
```

---

# 231. 最终开发原则

整个 ROOM 404 的实现必须永远遵守：

### 规则一

```text
内容和来源分开。
```

### 规则二

```text
Evidence和Knowledge分开。
```

### 规则三

```text
UI连续性不是事实连续性。
```

### 规则四

```text
Unknown永远不能代替Hard Evidence。
```

### 规则五

```text
Observer只看游戏内行为。
```

### 规则六

```text
Generated永远保留Generated身份。
```

### 规则七

```text
没有可靠来源，就允许它保持空白。
```

---

# 232. Final Architecture Summary

```text
                    ┌──────────────────┐
                    │   Player Input   │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ NavigationService│
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   Event Store    │
                    └────────┬─────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
┌─────────▼────────┐ ┌───────▼────────┐ ┌──────▼─────────┐
│ KnowledgeResolver│ │ Trigger Engine  │ │ Observer Engine│
└─────────┬────────┘ └───────┬────────┘ └──────┬─────────┘
          │                  │                  │
          │          ┌───────▼────────┐         │
          │          │ Anomaly Engine │         │
          │          └───────┬────────┘         │
          │                  │                  │
          │          ┌───────▼────────┐         │
          │          │ Unknown Engine │◄────────┘
          │          └────────────────┘
          │
┌─────────▼────────┐
│ Chapter XState   │
└─────────┬────────┘
          │
┌─────────▼────────┐
│ Route / UI State │
└──────────────────┘
```

---

# 233. Data Architecture Summary

```text
StoryObject
↓
Source / Provenance

StoryObject
↓
Evidence

Evidence Relations
↓
PlayerKnowledge

GameEvent
↓
Trigger / Observer / Calendar / Session Log

PlayerKnowledge
+
GameEvent
+
Anomaly
↓
Unknown

Final Knowledge
+
Observer
↓
Resolution Engine
```

---

# 234. Full Game Flow Summary

```text
ROOM Archive
│
├─ 林夏主页
│  └─ “普通旧网页”
│
├─ 学校Archive
│  └─ 17 → 18
│
├─ BlueMoon
│  └─ Summer17 = 林夏
│
├─ Photo17
│  └─ 人不是被删，是被重建出来
│
├─ Recovery Desktop
│  └─ 完整桌面本身也是后期构造
│
├─ ROOM Continuity
│  └─ Subject04 → 404
│
├─ Observer Model
│  └─ Observer405
│
└─ Resolution
   ├─ DELETE
   ├─ RETURN
   ├─ OBSERVER
   └─ ARCHIVIST
```

---

# 235. 最后的工程判断

目前：

```text
01～23
```

已经足以支持：

```text
完整游戏开发。
```

不需要再回头补：

```text
旧11
旧12
旧13
旧14
旧15
```

造成重复。

现在真正缺的已经不是：

```text
更多剧情文档
```

而是：

```text
把Canon转换成稳定的数据结构和Engine。
```

---

# 236. Canonical Lock

从本文件开始锁定：

```text
旧11/12/13/15不再建立
旧14异常文本不再使用旧编号
如需异常目录，未来创建25_ANOMALY_EVENT_CATALOG.md

2007 Photo17实现文件名使用DSC0417.JPG
DSC0017.JPG保留给2005 favorite photo
摄影社成员统一徐晓
2007-08-19才真正修改学校日期
22:01 Session End与22:16 Cafe Exit分离
2014 artifact为内部Prototype
2016为第一稳定可访问Reconstruction
程序逻辑使用Object ID，不依赖显示文件名
Evidence ID只保留E###单一形式
Knowledge使用Set而不是大量Boolean
所有关键行为进入统一Event Store
Calendar/session.log/Unknown/Observer共享Event Store
Unknown首版不接实时LLM
Terminal不接真实Shell
Resolution使用Atomic Transaction
```

---

# 237. 下一步

如果现在开始真正开发，最合理的下一动作不是继续扩剧情。

而是：

```text
先完成Canon Cleanup
↓
建立26_STORY_DATA_SCHEMA.md
↓
把Chapter1的Route/Object/Evidence/Knowledge/Event转换成第一批TS数据
↓
正式开始Browser Vertical Slice
```

---

# 238. 最终一句话

> 到目前为止，ROOM 404 的故事已经不缺“内容”。
>
> 它现在最需要的是一套足够稳定的工程结构，让玩家每一次：
>
> **搜索、点击、回看、比较、怀疑、确认、拒绝确认**
>
> 都能够留下可追踪的状态，
>
> 并最终让系统真正做到：
>
> **不是替玩家讲一个故事。**
>
> **而是根据玩家实际走过的路径，把这个故事一点一点重新组织给他看。**
