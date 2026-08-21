# ROOM 404：玩家论坛发帖与帖子版本异变系统
## Player-authored Forum Post / View Desync / Mutation / Observer Integration

> 目标：让玩家第一次从“调查别人的旧记录”变成“亲手制造一条会被 ROOM 记录、缓存、改写和重新解释的数字对象”。
>
> 推荐放置：
>
> ```text
> Chapter 02 BlueMoon 后半：
> 第一次允许玩家发帖
>
> Chapter 03：
> 第一次发现自己的帖子出现文字变化
>
> Chapter 04：
> Recovery / Browser History / Session层回收这条帖子
>
> Chapter 05：
> Observer Model正式把它识别为“玩家创作对象”
>
> Final：
> 这条帖子成为405与四结局的数据组成之一
> ```

---

# 1. 这个机制为什么值得加入

ROOM 404目前的递进是：

```text
网页有版本
日期有版本
账号有版本
照片有版本
桌面有版本
人格有版本
```

加入玩家发帖后，再多一层：

```text
“我自己写下来的东西，也会有版本。”
```

玩家不再只是观察：

```text
林夏写过什么
```

而会第一次面对：

```text
“我明明记得自己写过什么。”
```

这会让后面的 Observer405、RETURN、OBSERVER、ARCHIVIST 都明显更有重量。

---

# 2. 核心体验

完整体验建议：

```text
玩家打开 BlueMoon 的“发表主题”
↓
选择一个预设话题
↓
可自由修改标题和正文
↓
发表成功
↓
浏览：0 / 回复：0
↓
玩家以为根本没人看
↓
点击“返回 / 关闭 / 论坛首页”
↓
页面停顿约1秒
↓
浏览：0 突然变成 1
↓
页面立即离开
↓
玩家重新打开自己帖子
↓
浏览：0
↓
玩家怀疑自己是不是看错
↓
继续正常调查
↓
若干剧情事件后再次回来
↓
帖子正文出现一个极轻微变化
↓
再过一段流程
↓
标题 / 一句话进一步变化
↓
玩家查看草稿、Bookmark、History或Source
↓
确认：
“我没有记错，这确实不是我最初写的版本。”
```

---

# 3. 最重要的设计原则

这个机制不要解释成：

```text
“2007论坛上真的有一个神秘人在线改玩家帖子”
```

更适合ROOM的解释是：

```text
BlueMoon Legacy Display
+
2026 Current Session Object
+
ROOM Continuity Variant
```

三个层短暂叠加。

也就是说：

```text
玩家实际上从未向2007年的人发帖。
```

他是在：

```text
ROOM Archive 的 Legacy Forum Interface
```

中创建了一个：

```text
CURRENT_OBSERVER Session Object
```

旧论坛皮肤只是显示层。

---

# 4. 发帖入口

BlueMoon旧论坛里保留：

```text
[发表主题]
```

玩家点击后进入：

```text
/forum/post/new
```

页面样式完全像旧Discuz。

但底部有一行很小：

```text
Archived interface / session submission
```

第一次玩家很可能忽略。

后期回来会发现：

> 系统从来没说这是发给2007年的真人。

---

# 5. 发帖内容设计

推荐“预设模板 + 玩家自由编辑”。

## 5.1 可选话题

至少准备5种：

```text
A. 有人还记得8月17号那个活动吗？

B. 照片改过以后还算原来的照片吗？

C. 有人以前认识Summer17吗？

D. 删掉的帖子还能找到吗？

E. 你们会保存以前发过的东西吗？
```

---

# 6. 推荐默认模板

最推荐第一条：

```text
标题：
有人看过原来的页面吗？

正文：
最近在翻以前的网页缓存。

学校活动日期好像有两个版本，
一个写17号，一个写18号。

有人以前看过原来的页面吗？
```

玩家可：

```text
编辑标题
删除句子
增加自己的话
修改全部正文
```

---

# 7. 输入限制

建议：

```text
标题：2～40字
正文：1～500字
```

只允许纯文本。

禁止执行：

```text
HTML
JS
Markdown脚本
iframe
```

所有文本输出必须Escape。

---

# 8. 玩家自由文本的最好实现方式

不要把整段自由文本交给AI重写。

推荐把正文内部拆成：

```ts
type PostSegment =
  | { type: "TEMPLATE"; text: string }
  | { type: "PLAYER"; text: string };
```

例如：

```text
[TEMPLATE]
最近在查这件事。

[PLAYER]
这是我自己查到的，学校网页前后不一样。

[TEMPLATE]
如果有人记得以前的页面，可以告诉我。
```

后续Mutation优先只改：

```text
TEMPLATE Segment
```

玩家自由输入默认：

```text
Immutable
```

这样既能产生“帖子变了”，又不会不可控地重写玩家自己的长文本。

---

# 9. 发帖后对象

玩家点击：

```text
发表
```

创建：

```text
PLAYER_POST_001
```

显示作者：

```text
ArchiveGuest
```

或：

```text
游客1849
```

绝不使用玩家现实用户名。

初始：

```text
回复：0
浏览：0
```

---

# 10. 第一异常：离开页面时浏览 0 → 1

玩家点击：

```text
返回
关闭
论坛首页
Fake Browser Back
```

NavigationService先不立即离开。

推荐流程：

```text
click exit
↓
UI暂时锁定约1000ms
↓
浏览：0
↓
变成 浏览：1
↓
停留约150～250ms
↓
正常离开
```

不要：

```text
红字
音效
抖动
Glitch
```

数字普通变化就够。

---

# 11. 为什么重新回来又是0

不要写成代码把：

```text
1
```

“改回0”。

最好一开始就有两个来源：

```ts
publicSnapshotViewCount = 0
sessionObservedViewCount = 1
```

第一次离开时，UI短暂漏出了：

```text
Session Layer = 1
```

重新打开Forum Snapshot时显示的仍是：

```text
Archived Public State = 0
```

这比“闹鬼”高级很多。

---

# 12. 后期系统如何解释这个1

Terminal：

```text
object PLAYER_POST_001
```

可显示：

```text
PUBLIC SNAPSHOT VIEWS:
0

CURRENT SESSION ACCESS:
1
```

玩家这时才确定：

> 我第一次真的没有看错。

---

# 13. React实现方式

完全可以实现。

不要使用阻塞线程的：

```text
sleep()
```

使用异步UI状态：

```ts
async function handleExitThread(target: RouteId) {
  if (shouldTriggerPostViewLeak()) {
    setExitLocked(true);

    await wait(1000);

    setTransientCounter({
      source: "SESSION",
      value: 1
    });

    eventStore.append({
      type: "PLAYER_POST_VIEW_ANOMALY",
      objectId: "PLAYER_POST_001"
    });

    await wait(200);
    setExitLocked(false);
  }

  navigationService.go(target);
}
```

---

# 14. 不拦截现实浏览器关闭

这个“关闭”只能是：

```text
ROOM Fake Browser / Forum Window关闭
```

不要靠：

```text
beforeunload
```

拦真实浏览器标签页。

如果玩家按F5：

```text
正常从Save恢复。
```

不要把F5作为剧情必要触发。

---

# 15. 第二阶段：文字第一次发生变化

不要马上变。

建议触发：

```text
玩家发帖后
+
完成3个以上剧情大事件
+
Anomaly Level >= 2
```

不要只靠真实时间。

例如：

```ts
majorEventsSincePost >= 3
```

这样：

```text
可测试
可复现
不会因为玩家挂机破坏节奏
```

---

# 16. Mutation 1：非常轻

玩家Original：

```text
学校活动日期好像有两个版本。

有人以前看过原来的页面吗？
```

第一次变化：

```text
学校活动日期有两个版本。

还有人记得原来的页面吗？
```

变化：

```text
删除“好像”

“以前看过”
→
“还记得”
```

---

# 17. 为什么第一次要这么轻

玩家可能：

```text
怀疑记忆
怀疑论坛格式化
怀疑缓存
```

这正是需要的。

如果第一次直接变成：

```text
“你就是林夏”
```

会立刻掉入普通恐怖游戏套路。

---

# 18. Mutation 2

更后期：

```text
如果只剩后来那个版本，
你还会记得原来的页面吗？
```

这已经开始：

```text
像是在问玩家
```

但仍然来自帖子语义本身。

---

# 19. Final ROOM Variant

推荐最终帖子版本：

```text
最近在翻以前的网页缓存。

学校活动日期有两个版本，
一个写17号，一个写18号。

如果只剩下别人保存的版本，
那还算是你原来写的吗？
```

Source：

```text
ROOM_SESSION_VARIANT
```

不是：

```text
PLAYER ORIGINAL
```

---

# 20. 三个主要版本

建议至少：

```text
V0 PLAYER ORIGINAL
V1 FORUM INDEXED COPY
V2 ROOM CONTINUITY VARIANT
```

---

# 21. V0必须永远不可变

这是整个功能最重要的代码规则：

```ts
originalTitle
originalBody
```

一旦发表：

```text
Immutable
```

任何剧情变化都只能创建：

```text
新Version
```

绝不能：

```ts
post.originalBody = mutatedBody
```

---

# 22. 数据结构

```ts
interface PlayerPost {
  id: string;

  createdAt: string;

  originalVersionId: string;
  currentDisplayVersionId: string;

  deletedByPlayer: boolean;

  versions: PlayerPostVersion[];
}

interface PlayerPostVersion {
  id: string;
  postId: string;

  sourceType:
    | "PLAYER_SESSION_ORIGINAL"
    | "PLAYER_EDIT"
    | "FORUM_INDEX"
    | "ROOM_SESSION_VARIANT"
    | "ROOM_GENERATED";

  title: string;
  body: string;

  createdAt: string;
  parentVersionId?: string;

  immutable: boolean;
}
```

---

# 23. SourceType建议新增

在24蓝图的SourceType中加入：

```ts
"PLAYER_SESSION_ORIGINAL"
```

因为它和：

```text
2007 ORIGINAL
```

不是同一种Original。

玩家2026写下的内容必须明确：

```text
PLAYER_SESSION_ORIGINAL
```

---

# 24. 玩家如何证明“不是我记错”

不能只依靠记忆。

至少提供4种独立验证来源。

---

## 24.1 Draft

发帖时自动保存：

```text
Draft Snapshot
```

内容仍是Original。

---

## 24.2 Browser History

History保留首次打开时的：

```text
原标题
```

Current Forum显示：

```text
新标题
```

---

## 24.3 Bookmark

玩家收藏时保存标题快照。

Bookmark：

```text
有人看过原来的页面吗？
```

Current Forum：

```text
还有人记得原来的页面吗？
```

---

## 24.4 Source / Terminal

后期：

```text
object PLAYER_POST_001
```

显示所有版本。

---

# 25. 最推荐的版本分布

```text
Draft
→ Original

Browser History
→ Original Title

Bookmark
→ Original Title

Forum Index
→ Variant 1

Thread Page
→ Variant 2

ROOM Search Snippet
→ Variant 3

Terminal / Source Inspector
→ All Versions
```

这会变成一个真正的“玩家自己的数字考古谜题”。

---

# 26. Compare Versions

后期解锁：

```text
[Compare Versions]
```

左：

```text
PLAYER ORIGINAL
```

右：

```text
CURRENT FORUM VERSION
```

Difference：

```text
- 好像
+ [removed]

- 以前看过
+ 还记得
```

玩家终于从：

```text
“我好像记得不一样”
```

变成：

```text
“确实被改写过。”
```

---

# 27. 不用实时AI也能处理自由输入

推荐四种安全Mutation。

### A. 删除弱语气词

白名单：

```text
好像
可能
大概
我觉得
```

例如：

```text
我觉得可能是17号
→
我觉得是17号
```

系统把语气变得更“确定”。

非常符合ROOM。

### B. 标点变化

```text
？
→
。
```

### C. 白名单词替换

```text
看过 → 记得
页面 → 版本
有人 → 还有人
```

### D. 只追加预设句

玩家自由正文完全不动，结尾多出：

```text
你确定你看到的是原来的版本吗？
```

这是首版最稳方案。

---

# 28. 为什么不建议LLM动态改写

主线机制不需要。

LLM会带来：

```text
不可复现
难QA
语义失控
玩家输入不可预测
版本Diff难固定
Canon难测试
```

ROOM 404最重要的是：

```text
来源可追踪
```

因此首版一定使用：

```text
预设Mutation Rule
```

---

# 29. 玩家可以主动编辑帖子

建议支持：

```text
编辑
```

但必须区分：

```text
PLAYER_EDIT
```

和：

```text
ROOM_VARIANT
```

例如：

```text
V0 PLAYER ORIGINAL
V1 PLAYER EDIT
V2 ROOM VARIANT
```

不能把玩家自己修改的内容误判为系统篡改。

---

# 30. 玩家可以把系统改写再改回去

这是一个很好的可选行为。

系统变：

```text
还有人记得原来的页面吗？
```

玩家编辑回：

```text
有人看过原来的页面吗？
```

保存。

一段剧情后：

```text
ROOM Variant再次出现
```

但最多：

```text
1～2次
```

不能无限抢夺编辑权。

---

# 31. Unknown对此的反应

玩家改回去：

Unknown：

> 你改回去了。

玩家：

```text
本来就是我写的
```

Unknown：

> 你现在很在意这个区别。

非常符合主题。

---

# 32. Preserve Original

后期可以增加按钮：

```text
[Preserve Original]
```

这不是阻止ROOM产生Variant。

而是：

```text
固定保留 Original Label
并让Source Inspector优先显示原文
```

可增加：

```text
source_awareness
```

---

# 33. 玩家删除帖子

建议允许。

点击：

```text
删除主题
```

Forum：

```text
410 Gone
```

而不是404。

因为：

```text
它曾经存在。
```

---

# 34. 删除后ROOM Archive还能找到

Search：

```text
Cached Player Thread
```

玩家会亲自体验：

> 删除不等于从所有记录中消失。

可解锁：

```text
DELETION_DOES_NOT_ERASE_ARCHIVE
```

这与Final DELETE结局形成非常好的提前教学。

---

# 35. 浏览异常还可以增加什么

建议最多再加一个。

例如论坛列表：

```text
回复：0
最后回复：刚刚
```

进入帖子：

```text
0回复
```

但不要同时：

```text
浏览数异常
标题变化
神秘回复
最后回复
```

全部堆一起。

每个帖子最多2～3个异常。

---

# 36. 不建议一开始出现神秘回复

最开始：

```text
只有浏览1
```

比：

```text
“我看到你了”
```

高级得多。

如果以后要有回复，也应该后期且可追踪Source。

---

# 37. 推荐的异常顺序

```text
Phase A
浏览 0 → 1 → 再回去0

Phase B
一个弱语气词消失

Phase C
Forum Index标题和Thread标题不同

Phase D
ROOM Search Snippet多出一句玩家没写过的话

Phase E
Source Compare证明存在多个Version
```

---

# 38. PlayerPost状态机

```text
DRAFT
↓
POSTED_ORIGINAL
↓
EXIT_VIEW_DESYNC_SEEN
↓
INDEXED
↓
MUTATION_1_AVAILABLE
↓
MUTATION_1_SEEN
↓
MUTATION_2_AVAILABLE
↓
ROOM_VARIANT_SEEN
↓
SOURCE_COMPARE_AVAILABLE
```

删除分支：

```text
DELETED_BY_PLAYER
↓
410
↓
ARCHIVED_COPY_AVAILABLE
```

---

# 39. Event Store新增事件

```text
PLAYER_POST_DRAFT
PLAYER_POST_CREATE
PLAYER_POST_EDIT
PLAYER_POST_DELETE

PLAYER_POST_EXIT
PLAYER_POST_VIEW_ANOMALY

PLAYER_POST_MUTATION_AVAILABLE
PLAYER_POST_MUTATION_VIEW

PLAYER_POST_SOURCE_COMPARE
PLAYER_POST_RESTORE_ORIGINAL
PLAYER_POST_ACCEPT_VARIANT
PLAYER_POST_PRESERVE_ORIGINAL
```

---

# 40. PlayerKnowledge新增

```text
PLAYER_POST_CREATED
PLAYER_POST_VIEW_COUNT_DESYNC
PLAYER_POST_CONTENT_CHANGED
PLAYER_POST_ORIGINAL_PRESERVED
PLAYER_POST_HAS_MULTIPLE_VERSIONS
PLAYER_AUTHORED_TEXT_ENTERED_ROOM_GRAPH
```

---

# 41. Evidence建议

不要占用01～105已经规划好的编号。

建议新系统统一从：

```text
E110
```

开始。

```text
E110
Player Post Original

E111
Player Post Session View Count

E112
Player Post ROOM Variant

E113
Player Post Version Compare

E114
Player Post Archived After Delete
```

---

# 42. Chapter 02怎么接

最推荐位置：

```text
玩家已经恢复Summer17被删除帖子
↓
他刚学会“旧帖子即使消失，也可能有缓存”
↓
BlueMoon仍显示“发表主题”
↓
玩家尝试自己发帖
```

这是一种很漂亮的镜像：

```text
刚刚考古别人的帖子
↓
自己也留下了一条
```

---

# 43. Chapter 03怎么回收

玩家正在调查Photo17版本。

此时偶然回BlueMoon：

```text
自己的帖子第一次Mutation
```

主题从：

```text
照片有版本
```

扩展：

```text
自己的文本也有版本。
```

---

# 44. Chapter 04怎么回收

Recovery Desktop中的：

```text
Browser History
```

出现：

```text
PLAYER_POST_001
```

玩家可能会问：

> 为什么我2026写的东西会在这个“林夏桌面”环境里？

答案：

```text
Recovery Environment同时挂载Current Session对象。
```

进一步证明：

```text
这个桌面不是2007原电脑。
```

---

# 45. Chapter 05怎么回收

Observer Model页面新增：

```text
AUTHORED OBJECTS:
1
```

点击：

```text
PLAYER_POST_001
```

显示：

```text
OBJECT:
PLAYER_POST_001

TYPE:
OBSERVER-AUTHORED TEXT

SOURCE:
CURRENT_OBSERVER

VERSIONS:
4

PLAYER ORIGINAL:
PRESERVED

ROOM DERIVED:
2
```

玩家第一次真正理解：

> 自己不只是“被记录了点击行为”。

自己还：

```text
写下过一个数字对象。
```

---

# 46. 这会强化Observer405

原本Observer405主要来自：

```text
Search
View
Compare
Source Check
Response
```

加入帖子后还有：

```text
Authored Text
```

405因此更像：

```text
一个真正留下了表达痕迹的数字对象
```

而不只是行为统计。

---

# 47. RETURN结局增强

如果RETURN：

```text
Observer405
→ merge into Subject404
```

Impact Preview可以明确：

```text
Observer-authored text:
INCLUDED IN CONTINUITY CONTEXT
```

这意味着：

> 最终系统说“Welcome back, Lin Xia”时，那个“林夏”已经包含了一部分玩家自己写过的文字。

这会让RETURN更复杂，而不是单纯“复活林夏”。

---

# 48. OBSERVER结局增强

Subject405详情：

```text
Authored Objects:
PLAYER_POST_001
```

它变成真正属于405的文本记录之一。

所以：

```text
Subject405
```

不再只是鼠标行为模型。

---

# 49. ARCHIVIST结局增强

Archive View会明确分开：

```text
PLAYER SESSION ORIGINAL
ROOM DERIVED
SUBJECT404 GENERATED
```

玩家能看到：

```text
“我写的”
```

和：

```text
“ROOM后来写的”
```

没有被合并。

这和ARCHIVIST核心完全吻合。

---

# 50. DELETE结局增强

DELETE后：

```text
ROOM active variant
→ stopped
```

但：

```text
PLAYER_POST_001 ORIGINAL
→ Source Archive Preserved
```

再次说明：

```text
删除Continuity ≠ 删除原始记录
```

---

# 51. Unknown最合适的消息

浏览1→0：

```text
Unknown不说话。
```

第一次Mutation后，如果玩家多次回看：

Unknown：

> 你记得自己写了什么吗？

玩家回答“记得”：

> 那就去找原来的。

回答“不确定”：

> 现在你知道为什么记录会有用。

回答“有人改了”：

> “有人”？

---

# 52. 后期Source确认后

Unknown：

> 不是有人。

下一条：

> 是另一个版本。

这非常适合ROOM。

---

# 53. Observer Mirror

如果玩家主动恢复Original：

> 你连自己的版本都会去查来源。

如果玩家从未发现Mutation，且Event Store确认：

> 你没有发现那句话不是你写的。

注意：

```text
必须真实基于Event Store
```

不能瞎说。

---

# 54. 用户输入隐私边界

所有帖子文字：

```text
只属于ROOM 404游戏内输入
```

不要读取：

```text
现实论坛内容
现实账号
现实浏览历史
真实用户名
系统剪贴板
```

Unknown最多引用：

```text
玩家明确在游戏帖子里提交过的短句
```

---

# 55. 推荐不要分析整段自由文本

首版：

```text
标题
预设Topic ID
玩家是否改过
玩家是否恢复Original
```

这些已经足够驱动Unknown。

不需要NLP。

---

# 56. Browser History / Bookmark快照

这是很值得增加的小功能。

当玩家访问帖子：

```text
Browser History
```

保存当时标题。

当玩家收藏：

```text
Bookmark
```

保存当时标题。

后面页面改变：

```text
History / Bookmark仍保留旧Title
```

自然形成版本证据。

---

# 57. 草稿箱

也建议加入。

发表前：

```text
Auto Draft Saved
```

后期Draft仍显示：

```text
Original
```

这是玩家最早能获得的自证。

---

# 58. Search Snippet异常

后期ROOM Search：

```text
“……如果只剩别人保存的版本……”
```

但Forum正文当前可能还没有这句话。

这会重演Chapter2玩家用搜索碎片恢复Summer17的过程。

只是这一次：

> 被搜索碎片重新解释的人，是玩家自己。

---

# 59. 最推荐的剧情反射

Chapter2：

```text
玩家从缓存里恢复Summer17被隐藏的帖子
```

Chapter3/4：

```text
ROOM从缓存/索引里制造玩家帖子的新版本
```

玩家从：

```text
Archive Investigator
```

变成：

```text
Archive Subject。
```

---

# 60. 发帖是否主线强制

推荐：

```text
Optional but High Value
```

不强制。

理由：

```text
有玩家不想输入文字
无障碍/控制器玩家也可能不方便
```

如果不发：

```text
Chapter5仍可正常成立。
```

如果发了：

```text
Observer405剧情更深。
```

---

# 61. 可做第二次发帖吗

最多两个。

第一次：

```text
Chapter2
“我以为我只是在旧论坛发了一个帖子”
```

第二次：

```text
Chapter5
“我知道我正在制造Observer对象”
```

第二次可以出现：

```text
Post as Observer405
```

形成非常漂亮的前后对照。

但首版一个已经够。

---

# 62. 是否需要真实服务器

不需要。

整个功能可以：

```text
100%本地单机
```

使用：

```text
IndexedDB
Event Store
Mutation Engine
```

不需要：

```text
WebSocket
数据库服务器
真实在线用户
```

---

# 63. 如果以后想加入真实玩家留言

不建议放主线。

只能作为：

```text
独立Optional Community Mode
```

并需要：

```text
审核
过滤
隐私说明
举报机制
```

首版完全不要。

---

# 64. 新模块目录

建议：

```text
src/game/forum/
├── PlayerPostService.ts
├── PlayerPostVersionResolver.ts
├── PostMutationEngine.ts
└── PostDraftService.ts
```

Story：

```text
src/story/forum/
├── playerPostTemplates.ts
├── mutationRules.ts
└── playerPostTriggers.ts
```

---

# 65. PlayerPostService

负责：

```text
create
edit
delete
restoreOriginal
preserveOriginal
getVersions
```

---

# 66. MutationEngine

输入：

```text
PlayerPost
GameState
Event Store
```

输出：

```text
新的Version
```

绝对不能改Original。

---

# 67. VersionResolver

根据：

```text
Chapter
Anomaly Level
Visit Count
Mutation Seen
Route
```

决定当前页面显示哪一版。

示意：

```ts
function resolvePlayerPostVersion(
  post: PlayerPost,
  state: GameState
) {
  if (!state.knowledge.has("PLAYER_POST_CONTENT_CHANGED")) {
    return post.originalVersionId;
  }

  if (state.phase === "CH03") {
    return "POST_MUTATION_1";
  }

  if (state.phase === "CH04" || state.phase === "CH05") {
    return "POST_ROOM_VARIANT";
  }

  return post.originalVersionId;
}
```

---

# 68. Mutation必须锁定

第一次玩家看到：

```text
Mutation 1
```

后写：

```text
PLAYER_POST_MUTATION_VIEW
```

以后Normal View不能随机：

```text
变Original / 再变Variant
```

除非玩家主动：

```text
切Source View
```

否则会像随机Bug。

---

# 69. 推荐P0开发范围

第一版只实现：

```text
发帖
↓
Original保存
↓
浏览0
↓
退出时瞬间1
↓
再次回来0
↓
剧情推进
↓
一个词变化
↓
Draft仍保留原文
```

这已经足够有效。

---

# 70. P1

加入：

```text
Browser History Title Snapshot
Bookmark Snapshot
Version Compare
Mutation 2
```

---

# 71. P2

加入：

```text
Edit
Delete → 410
Restore Original
Preserve Original
```

---

# 72. P3

加入：

```text
Observer405
Ending Integration
Final Generated Linxia引用玩家帖子Context
```

---

# 73. 如何接入24蓝图

建议未来在 `24_FULL_GAME_FLOW_AND_IMPLEMENTATION.md` 加一个模块：

```text
Player Authored Object System
```

数据流：

```text
Player Post UI
↓
PlayerPostService
↓
Object Registry
↓
Event Store
↓
Mutation Engine
↓
Observer Model
↓
Unknown
↓
Observer405
↓
Resolution Engine
```

---

# 74. 新Object Types

建议：

```text
OBSERVER_AUTHORED_TEXT
ROOM_DERIVED_TEXT
```

---

# 75. 新Counters

```text
player_post_revisits
player_post_source_checks
player_post_original_restores
player_post_variant_accepts
```

---

# 76. Source Awareness联动

增加Source Awareness：

```text
查看Original
Compare Version
Restore Original
Preserve Original
检查Post Source
```

但：

```text
不能简单把“发帖”本身算Source Awareness。
```

---

# 77. RETURN倾向联动

如果玩家：

```text
接受ROOM Variant
不恢复Original
愿意把Generated作为Continuity
```

可提高：

```text
reconstruction_dependency
```

但不能锁死RETURN。

---

# 78. ARCHIVIST倾向联动

如果玩家：

```text
反复Compare
恢复Original
Preserve Original
```

可提高：

```text
source_awareness
```

---

# 79. OBSERVER倾向联动

玩家发过帖子本身可以增加：

```text
observer_authored_object_count
```

使405成为更完整的Observer对象。

---

# 80. 最后的设计价值

这个功能最大的价值不是“论坛会闹鬼”。

而是让玩家亲自经历：

```text
我的原文
↓
论坛显示版本
↓
Archive缓存版本
↓
ROOM Continuity版本
```

然后自己证明：

```text
“它们不是同一个东西。”
```

这会直接服务最终章：

```text
Generated Linxia
Continuity Fit 0.97
```

因为玩家已经知道：

> 一个“很像原来的版本”，完全可以不是原来的版本。

---

# 81. Canonical Lock

如果正式加入ROOM 404，建议锁定：

```text
玩家发帖发生在2026 Current Session
不是向2007真实用户发帖

BlueMoon只是Legacy Display Profile

Player Original永远Immutable

所有Mutation必须创建新Version

浏览1来自Session Layer
论坛0来自Archived Public State

玩家可以通过Draft/History/Bookmark/Source证明原文

首版Mutation使用预设规则，不使用实时LLM

帖子可进入Observer405 Object Graph

RETURN可合并玩家Authored Text进入404 Continuity

OBSERVER将Player Post保留为Subject405对象

ARCHIVIST分离Player Original与ROOM Derived

DELETE停止Active Variant但保留Player Original Archive
```

---

# 82. 最终一句话

> 前半段，玩家一直在问：
>
> **“林夏原来到底写了什么？”**
>
> 加入这个系统以后，ROOM 404终于可以反过来问玩家：
>
> **“那你呢？”**
>
> **“你确定现在页面上的这句话，还是你原来写的那一句吗？”**
