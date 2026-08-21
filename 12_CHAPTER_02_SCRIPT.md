# ROOM 404：互联网失踪档案
# 12_CHAPTER_02_SCRIPT.md
## Chapter 02《BlueMoon》完整可玩脚本 / Playable Script Canon

> 本文档将 `10_BLUEMOON_FORUM.md` 中的论坛世界正式转化为：
>
> ```text
> 逐页面
> +
> 逐点击
> +
> 逐事件
> +
> 逐Flag
> +
> 逐证据
> +
> 绕路保护
> +
> Unknown响应
> ```
>
> 的可开发脚本。
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

---

# 0. Chapter 基础信息

```yaml
chapter_id: chapter_02
title_cn: BlueMoon
title_en: BlueMoon
estimated_playtime: 25-40 min
recommended_first_read: 15000-22000 chars
anomaly_start: 1
anomaly_end: 2
unknown_stage_start: 1
unknown_stage_end: 2
```

本章入口：

```text
Chapter 1:
backup_20070823.zip
403 Forbidden

Reference:
BM-1847
```

本章结束：

```text
2007-08-17
20:31
Summer17发帖

↓ Identity Match

Summer17 = 林夏

↓ Timeline Update

22:01
林夏仍有可验证在线活动

↓ Conclusion

旧体育馆不是最后活动地点
```

---

# 1. 本章唯一硬结论

玩家完成 Chapter 2 后必须能够确认：

> **林夏在 2007 年 8 月17日离开旧体育馆之后，至少到 22:01 仍然存在可验证的网络活动。**

其中最重要的硬锚点：

```text
20:31
Summer17发布：
《如果一个人突然不再存在》
```

本章不得确认：

```text
她22:01以后具体去了哪里
她为何于18日离家
Photo17第四个人来源
ROOM真实用途
顾言与ROOM关系
Subject404
Subject405
```

---

# 2. 本章玩家认知变化

Chapter 1结束：

```text
林夏
↓
8月17日旧体育馆
↓
19:24离开
↓
未知
```

Chapter 2结束：

```text
林夏
↓
19:24离开旧体育馆
↓
20:17登录BlueMoon
↓
20:31发帖
↓
21:17回复
↓
22:01 Session结束
↓
未知
```

这不是增加一个小线索。

而是：

> **把整个案件“最后可靠时间”向后移动了约两个半小时。**

---

# 3. Chapter 2 页面总表

核心：

```text
/archive/object/backup_20070823.zip
│
└─ Reference: BM-1847
        ↓
/search?q=BM-1847
        ↓
/archive/20070817/bluemoon-forum.net/
│
├─ /forum
│  ├─ /forum/board/night
│  ├─ /forum/board/photo
│  ├─ /forum/board/campus
│  ├─ /forum/board/web
│  │
│  ├─ /forum/user/1847        Summer17
│  ├─ /forum/user/1741        Linxia
│  ├─ /forum/user/1766        Ran
│  └─ /forum/user/1739        GY
│
├─ /forum/search?q=Summer17
├─ /forum/search?q=原图
│
├─ /forum/thread/1847         deleted thread
├─ /forum/thread/1904         Linxia失踪讨论
│
├─ /archive/forum/thread/1847/fragments
├─ /archive/forum/thread/1847/compare
├─ /archive/forum/session/1847
├─ /archive/forum/session/match
│
└─ /timeline/2007-08-17
```

---

# 4. Chapter入口：403页面变化

Chapter 1结束后：

Route：

```text
/site/2007/linxia/0817/backup/backup_20070823.zip
```

状态：

```text
403 Forbidden
```

新增一行：

```text
Referenced identity:
BM-1847
```

下方：

```text
[Search Reference]
```

---

# 5. BM-1847 的设计

不要解释。

玩家只看到：

```text
BM-1847
```

含义：

```text
BM = BlueMoon
1847 = UID
```

但不直接展示。

玩家点击 Search Reference：

```text
/search?q=BM-1847
```

---

# 6. BM-1847搜索结果

ROOM Search：

```text
3 Results
```

### Result 1

```text
BlueMoon Community - User Archive

UID: 1847
Username: Summer17

Snapshot:
2007-08-17
```

### Result 2

```text
BlueMoon Session Metadata
UID 1847

Status:
Partial
```

### Result 3

```text
Referenced object:
backup_20070823.zip

Identity dependency unresolved
```

第一项最自然。

---

# 7. Chapter 2正式触发

```yaml
id: c02_start
type: SEARCH
condition:
  query: BM-1847
effects:
  chapter: 2
  unlock:
    - bluemoon_archive
    - user_1847
  autosave: true
```

---

# 8. Chapter标题出现方式

进入BlueMoon第一页后不要立刻大标题。

建议顶部Archive信息加载完：

```text
Snapshot recovered.
```

然后页面内容区域上方极短出现：

```text
CHAPTER 02
BlueMoon
```

1.5秒淡出。

---

# 9. BlueMoon Archive入口

Route：

```text
/archive/20070817/bluemoon-forum.net/
```

顶部 ROOM Archive Shell：

```text
Captured:
2007-08-17

Archive Status:
PARTIAL

Text:
86%

Images:
42%

Attachments:
13%
```

按钮：

```text
Open Archived Site
View Capture Information
Search Cached Data
```

---

# 10. Capture Information

玩家点开：

```text
Forum engine:
Unknown PHP forum

Encoding:
GBK

Last successful crawl:
2007-08-17 23:12

Database reconstruction:
Partial
```

注意：

```text
23:12是Archive crawl
```

不是林夏活动时间。

避免误解。

---

# 11. 论坛首页

Route：

```text
/forum
```

视觉：

```text
2007 Discuz-like
```

顶部：

```text
BlueMoon Community
蓝月社区

凌晨以后，也有人在线。
```

导航：

```text
论坛首页
搜索
会员
帮助
```

登录状态：

```text
游客
```

---

# 12. 论坛版块首页

```text
站务
├─ 论坛公告
└─ 建议反馈

生活
├─ 闲聊灌水
├─ 校园
├─ 夜话
└─ 情感

兴趣
├─ 摄影
├─ 音乐
├─ 网页制作
└─ 旧物交换
```

---

# 13. 首页普通在线信息

底部：

```text
当前在线：32
会员：7
游客：25
```

在线会员列表：

```text
night_train
leaf
northwind
cameraKid
...
```

不要显示：

```text
Summer17
```

因为这是Archive页面而非实时2007直播。

---

# 14. 首页热门主题

```text
[闲聊] 今天南城又下雨了吗
[夜话] 凌晨两点有人吗
[摄影] 卡片机夜景怎么拍
[校园] 高三什么时候返校
[网页] 免费空间哪个好
```

玩家可以随便逛。

---

# 15. 首次论坛事件

```yaml
id: c02_forum_home_seen
type: PAGE_VISIT
effects:
  bluemoon_seen: true
```

不触发Unknown。

让玩家先熟悉论坛。

---

# 16. 用户1847入口

右上Archive栏：

```text
Referenced User:
UID 1847
```

按钮：

```text
Open Profile
```

路线：

```text
/forum/user/1847
```

---

# 17. Summer17 Profile第一次显示

```text
用户名：Summer17
UID：1847

注册时间：
2006-10-12

帖子：
83

精华：
0

最后登录：
2007-08-17 22:01

个人主页：
未填写

所在地：
未填写

性别：
保密
```

头像：

```text
默认BlueMoon月亮头像
```

签名：

```text
—
```

---

# 18. 玩家第一次看到22:01

重要：

此时玩家还不知道Summer17就是林夏。

所以：

```text
22:01
```

只是一个普通匿名用户的登录时间。

不要高亮。

---

# 19. Profile按钮

```text
查看主题
查看回复
搜索该用户
查看Archive Metadata
```

Archive Metadata初期：

```text
Some fields unavailable.
```

Cookie Hash暂时锁住。

---

# 20. 查看Summer17主题

Route：

```text
/forum/search?author=1847
```

显示：

```text
29 indexed topics
54 cached replies
```

其中可见标题：

```text
主页到底要不要关
照片改过以后还算原来那张吗
你们会留聊天记录吗
如果别人一直说你是那样的人
有没有人也不喜欢合照
删掉以后会后悔吗
卡片机夜景怎么拍
17路今天又没来
```

以及：

```text
[Deleted]
如果一个人突然不再存在
```

但删帖行一开始位于：

```text
第二页/靠后
```

不要首屏巨大红字。

---

# 21. 玩家自由阅读阶段

推荐玩家至少读：

```text
3～5个普通帖
```

但不强制。

系统内部记录：

```text
summer17_posts_read
```

达到3：

```text
identity_language_hint = true
```

---

# 22. 普通帖页面规则

每页必须有：

```text
楼主
注册时间
帖子数
楼层
时间
引用
签名
```

尽量像旧论坛。

---

# 23. 《主页到底要不要关》

Route：

```text
/forum/thread/1711
```

正文按 `10_BLUEMOON_FORUM.md`。

此帖阅读后：

```yaml
event:
  id: c02_read_homepage_delete
effects:
  identity_clue_language += 1
```

---

# 24. 《照片改过以后还算原来那张吗》

Route：

```text
/forum/thread/1738
```

重点：

Summer17：

> 比如只是调亮一点。  
> 内容没变。  
> 但是原来的被盖掉了。  
> 你们会觉得有区别吗？

GY：

> 有区别。

Summer17：

> 你不要来。

这会引起玩家警觉：

```text
GY似乎认识Summer17？
```

---

# 25. 玩家点击GY

Route：

```text
/forum/user/1739
```

Profile：

```text
用户名：GY
UID：1739
```

公开资料很少。

论坛风格：

```text
网页制作 / 摄影
```

本章不要解释：

```text
他是否知道Summer17身份
```

---

# 26. 《如果别人一直说你是那样的人》

Route：

```text
/forum/thread/1682
```

用于与林夏公开Diary：

```text
2007-06-03《今天很烦》
```

形成文本对照。

如果玩家已看过Diary：

Archive侧栏显示：

```text
Possible textual relation detected.
```

不要说：

```text
Same Author
```

---

# 27. 文本关系Event

```yaml
id: c02_language_crossmatch
conditions:
  read_thread_1682: true
  read_diary_20070603: true
effects:
  identity_clue_language: true
  evidence_partial:
    - summer17_language_match
```

---

# 28. 如果玩家没读过旧Diary

ROOM Search可提供：

```text
Related archived text:
linxia-home.net / 2007.06.03
```

点击回个人主页。

鼓励跨站调查。

---

# 29. Forum Archaeology引导

玩家第一次点击：

```text
[Deleted] 如果一个人突然不再存在
```

Route：

```text
/forum/thread/1847
```

页面正文：

```text
指定主题不存在或已被删除。
```

但ROOM Archive外框出现：

```text
Archived fragments detected:
4
```

按钮：

```text
Recover Fragments
```

这是Chapter 2主要新玩法正式出现。

---

# 30. Deleted Thread首次信息

ROOM Archive：

```text
Thread ID:
1847_0817

Author:
Summer17

Created:
2007-08-17 20:31

State:
Hidden / Deleted

Recovery:
Partial
```

注意：

第一次就可看到：

```text
20:31
```

但玩家还未确认作者身份。

---

# 31. 玩家第一次心理诱导

标题：

```text
如果一个人突然不再存在
```

日期：

```text
2007-08-17 20:31
```

结合失踪案，

自然会认为：

```text
像失踪预告
```

不要用音乐强化。

让玩家自己误读。

---

# 32. Recover Fragments界面

Route：

```text
/archive/forum/thread/1847/fragments
```

显示：

```text
Recovered Sources:

[1] Forum Search Index
[2] RSS Feed Cache
[3] Reply Quote Cache
[4] User Subscription Cache
```

每个单独打开。

---

# 33. Fragment 1：Forum Search Index

```text
如果一个账号删掉以后，
大家慢慢忘了这个账号是谁……
```

Completeness：

```text
18%
```

---

# 34. Fragment 2：RSS

```text
……可是如果留下来的东西
全都不是自己想留下的呢？
```

Completeness：

```text
31%
```

---

# 35. Fragment 3：Reply Quote

```text
不是说现实里真的消失。
```

这是第一次弱化：

```text
自杀/失踪预告
```

---

# 36. Fragment 4：Subscription Cache

只恢复：

```text
Summer17
2007-08-17 20:31
```

再次确认时间戳。

---

# 37. Fragment Recovery Flag

每开一个：

```text
thread1847_fragment_count += 1
```

达到3：

```text
unlock quoted replies
```

达到4：

```text
unlock reconstructed view
```

这里的“reconstructed view”必须指：

```text
Archive拼接恢复
```

不是ROOM生成文本。

UI应写：

```text
Assemble Recovered Text
```

不要写：

```text
AI Reconstruct
```

---

# 38. 恢复引用回复

进入：

```text
/forum/thread/1847?view=quotes
```

显示残存楼层。

其中最重要：

`leaf`
20:41：

> 你这是准备注销号吗？

Summer17
20:43：

> 没有啦，我不是要跑路 XD

---

# 39. 关键认知纠正

玩家看到：

```text
我不是要跑路 XD
```

应理解：

```text
标题不能直接当失踪预告
```

Flag：

```yaml
id: c02_not_suicide_note_hint
effects:
  knows_thread_not_explicit_farewell: true
```

注意命名：

```text
不是明确告别
```

而不是：

```text
证明她绝无失踪意图
```

---

# 40. 完整帖子解锁

条件：

```text
thread1847_fragment_count >= 4
AND
quotes_seen >= 2
```

按钮：

```text
Assemble Recovered Text
```

Route：

```text
/archive/forum/thread/1847/assembled
```

---

# 41. 完整帖子正文

严格使用：

> 如果一个账号删掉以后，大家慢慢忘了这个账号是谁，那个人在网上是不是就等于没存在过？  
>   
> 不是说现实里真的消失。  
>   
> 就是突然想到。  
>   
> 比如以前写过很多东西，后来自己删掉了一部分，别人又记得另外一部分。  
>   
> 再过几年以后，剩下来的那些东西是不是就会变成“这个人原来就是这样”。  
>   
> 可是如果留下来的东西全都不是自己想留下的呢？  
>   
> 那算谁的？  
>   
> 我不知道。  
>   
> 今天有点烦，当我半夜发神经吧。

底部：

```text
Recovery confidence:
High

Generated text:
0%
```

这一行后期非常重要。

玩家第一次接触：

```text
Generated text
```

但只是Archive来源说明。

不要解释ROOM。

---

# 42. 恢复楼层

完整可恢复：

```text
20:36 northwind
20:38 Summer17
20:41 leaf
20:43 Summer17
20:49 night_train
20:52 Summer17
21:03 cameraKid
21:05 Summer17
21:17 Summer17
```

---

# 43. 21:17最后回复

> 算了，过两天我大概自己就觉得这个问题很蠢。

这是强信息：

```text
她在表达未来时间感
```

但不要程序直接判断。

Evidence可保存：

```text
E024_summer17_last_reply
```

---

# 44. 删除原因调查

帖头：

```text
Why is this thread missing?
```

按钮：

```text
View State History
```

---

# 45. Thread State History

Route：

```text
/archive/forum/thread/1847/compare
```

状态：

```text
2007-08-17
ACTIVE

2007-08-21
HIDDEN

2009-01-17
CORRUPTED
```

点击2007-08-21：

```text
Moderation metadata available
```

---

# 46. Moderator Log

```text
Action:
Hide Thread

Actor:
Moderator

Reason:
Personal information / ongoing missing-person discussion

Date:
2007-08-21
```

结论：

```text
不是林夏自己删帖
```

Flag：

```text
knows_thread_hidden_by_moderator
```

---

# 47. 玩家可能误读的纠正

Chapter 2要连续纠正两次：

```text
第一次：
标题像失踪预告

↓ 全文

并不是明确预告

第二次：
删帖像林夏销毁记录

↓ Moderator Log

并不是她删的
```

培养玩家：

> **不要只看状态，要查来源。**

---

# 48. 进入身份调查阶段

此时玩家知道：

```text
Summer17发帖
```

但还不知道：

```text
Summer17=林夏
```

Archive侧栏可出现：

```text
Related Identity Data Available
```

按钮：

```text
Compare Users
```

---

# 49. Compare Users第一页

Route：

```text
/archive/forum/session/match
```

候选：

```text
UID1741 Linxia
UID1847 Summer17
```

第一层比较：

```text
Language pattern:
Possible

Topics:
Possible overlap

Device:
Unavailable

Identity confidence:
Low
```

---

# 50. 玩家需要自己收集匹配项

界面列：

```text
[ ] Language
[ ] Event detail
[ ] Camera detail
[ ] Archive cookie
[ ] Local page phrase
```

不要做成RPG勾任务感太强。

可以放：

```text
Evidence Relation
```

里自动添加。

---

# 51. Evidence A：语言

读够：

```text
Summer17 3篇
林夏Diary 2篇
```

解锁：

```text
Phrasing overlap detected
```

示例：

```text
其实
算了
XD
= =
```

Confidence：

```text
LOW
```

---

# 52. Evidence B：标题修改事件

Summer17帖：

> 有人老把我写的标题改得像学校文件。

对应：

```text
林夏 / 周然 5月文案冲突
```

Confidence：

```text
MEDIUM
```

---

# 53. Evidence C：Camera

Summer17：

```text
Sony小卡片机
```

林夏About：

```text
Sony Cyber-shot
```

Confidence：

```text
LOW
```

---

# 54. Evidence D：original/edit/web

Summer17某回复：

> 我现在都分 original / edit / web

林夏Diary《原图》：

```text
original / edit / web
```

这一条非常强。

Confidence：

```text
HIGH
```

---

# 55. Evidence E：Cookie Hash

Cookie不是玩家真实浏览器Cookie。

明确页眉：

```text
Archived Browser Session Metadata
Source: 2007 Forum Cache
```

Linxia：

```text
Device Cookie:
B7-41-A9-23
```

Summer17：

```text
Device Cookie:
B7-41-A9-23
```

同时：

```text
UA signature:
same
```

---

# 56. Cookie Hash如何解锁

不要一开始开放。

条件：

```text
identity_clue_count >= 3
```

然后 Archive提示：

```text
Archived session relation available.
```

点击：

```text
View Session Metadata
```

---

# 57. Session Metadata页面

Route：

```text
/archive/forum/session/1847
```

显示：

```text
UID:
1847

Session Start:
2007-08-17 20:17

Last Activity:
2007-08-17 22:01

Network:
Public Network

Device Cookie:
B7-41-A9-23
```

下方：

```text
Related Archived Sessions:
UID1741
```

---

# 58. 点击UID1741 Relation

显示：

```text
UID1741 Linxia

Device Cookie:
B7-41-A9-23

Previous matching sessions:
11
```

这几乎是硬证据。

---

# 59. Identity Match事件

```yaml
id: c02_identity_match
conditions:
  identity_clue_count: ">=3"
  cookie_match_seen: true
effects:
  knows_summer17_is_linxia: true
  unlock:
    - E023_summer17_identity
  autosave: true
```

---

# 60. Identity UI

ROOM Archive右侧：

```text
Identity Relation

Linxia
UID1741

↕

Summer17
UID1847

Confidence:
HIGH
```

小字：

```text
Identity relation inferred from archived source data.
```

不要：

```text
100% confirmed
```

因为最终Desktop才有更硬本地凭据。

---

# 61. 核心翻转触发

条件：

```text
knows_summer17_is_linxia
AND
thread1847_full_seen
```

系统发现：

```text
2007-08-17 20:31
```

属于林夏。

Event：

```yaml
id: c02_linxia_online_2031
effects:
  knows_linxia_online_2031: true
  knows_gym_not_timeline_endpoint: true
  unlock:
    - E021_summer17_thread_timestamp
    - E022_summer17_session
```

---

# 62. 不要弹“重大线索”

Instead：

ROOM Archive顶部：

```text
Timeline relation updated.
```

右侧出现：

```text
2007-08-17
```

一个小时间轴图标。

---

# 63. 点击Timeline

Route：

```text
/timeline/2007-08-17
```

旧版：

```text
16:19 到达旧体育馆
18:42 Photo17
19:24 离开旧体育馆
```

更新后：

```text
16:19 到达旧体育馆
18:42 Photo17
19:24 离开旧体育馆
20:17 BlueMoon Login
20:31 Thread Created
21:17 Forum Reply
22:01 Session End
```

---

# 64. 时间轴来源标签

每条：

```text
Source
Confidence
```

例如：

```text
20:31
BlueMoon Thread Created

Sources:
Forum Index
RSS Cache
Reply Archive

Confidence:
High
```

---

# 65. 玩家此时必须意识到

> **周然和旧体育馆不再是时间线终点。**

不要直接：

```text
周然洗白
```

他依然：

```text
撒谎
改日期
删留言
```

只是：

```text
失踪时间边界改变
```

---

# 66. Unknown Stage 2第一条

条件：

```text
knows_linxia_online_2031 = true
```

且：

```text
unknown_stage < 2
```

通知：

```text
Unknown
1条新消息
```

内容：

> 你之前把最后一页停在了19:24。

非常克制。

---

# 67. Unknown回复选项/关键词

支持：

```text
什么意思
20:31
林夏
周然
你怎么知道
```

---

# 68. 回复“什么意思”

> 你那时候没有更晚的记录。

这句话非常关键。

不是：

```text
你推理错了
```

而是：

```text
你当时证据不够
```

---

# 69. 回复“20:31”

> 现在你有了一个更晚的时间。

---

# 70. 回复“林夏”

> 你现在愿意把Summer17也算作她了。

暗示：

```text
身份归属本身是一种判断
```

---

# 71. 回复“周然”

若：

```text
player_focus_zhouran >= HIGH
```

则：

> 你很想让周然成为答案。

否则：

> 他已经不是你时间线的终点了。

---

# 72. 回复“你怎么知道”

> 因为你刚刚改了自己的时间线。

很好。

---

# 73. Unknown Stage2行为分析

本章Unknown第一次可以依据玩家习惯变化。

Archive-Oriented：

> 你更相信时间戳。

Character-Oriented：

> 你更愿意相信她自己写的。

System-Oriented：

> 你终于找到一条你觉得不会说谎的日志。

随后可选追加：

> 但日志也有来源。

Completion-Oriented：

> 你不喜欢留下空白。

这句非常重要。

---

# 74. Unknown消息频率

Chapter 2：

```text
必要主消息：1
可选行为消息：1～2
```

总计：

```text
最多3～4条
```

不要刷屏。

---

# 75. Linxia失踪讨论帖入口

当：

```text
thread1847_full_seen
```

后，

BlueMoon Search推荐：

```text
相关主题：
有人认识Linxia吗？
```

Route：

```text
/forum/thread/1904
```

---

# 76. 《有人认识Linxia吗？》

日期：

```text
2007-08-21
```

正文：

> 以前摄影版那个Linxia是不是南城二中的？  
> 听说最近在找人，不知道是不是同一个。

回复需要表现：

```text
网络传言迅速形成
```

---

# 77. 关键回复

匿名：

> 听说最后是跟社团的人吵架。

来源：

```text
传言
```

不是事实。

---

# 78. 18号污染

另一个用户：

> 学校活动不是18号吗？

这句话让玩家看到：

```text
学校修改后的记录
已经开始进入民间讨论
```

---

# 79. northwind回复

> 我怎么记得之前写的是17？

玩家如果Chapter1已发现版本差异：

这句强化：

```text
当时也有人注意到
```

---

# 80. 论坛记忆污染Evidence

保存：

```text
E025_forum_date_memory_pollution
```

知识：

```text
knows_official_record_influenced_forum_memory
```

---

# 81. 本章不是只解决Summer17

它还完成第二个教学：

> **公开记录不仅能记录记忆，还能反过来塑造记忆。**

---

# 82. 網吧线索解锁

条件：

```text
knows_summer17_is_linxia
AND
session1847_seen
```

Session Metadata：

```text
Network:
Public Network
```

展开：

```text
Origin Cluster:
Nancheng Old District
Node:
7
```

---

# 83. 玩家搜索Node 7

ROOM Search：

```text
Old District Public Network Node 7
```

结果：

```text
Browser cache fragment
Archive status: Partial
```

Route：

```text
/archive/network/node7/20070817
```

---

# 84. Node7页面

显示：

```text
Public terminal browser cache
2007-08-17
```

记录：

```text
20:15 bluemoon-forum.net/login
20:31 bluemoon-forum.net/thread/new
20:58 linxia-home.net/
21:04 linxia-home.net/0817/private.html
21:17 bluemoon-forum.net/thread/1847
```

不要显示全部私人浏览内容。

只展示与当前故事相关缓存。

---

# 85. Node7的重要性

它完成两件事：

```text
1. Summer17活动来自旧城区公共网络
2. 21:04访问private.html与林夏隐藏页时间一致
```

这进一步增强：

```text
Summer17 = 林夏
```

---

# 86. Node7不能定位具体人脸

不要：

```text
网吧高清监控
```

第一版只：

```text
网络缓存
```

后续若有现场记录另说。

---

# 87. Node7事件

```yaml
id: c02_node7_seen
effects:
  knows_public_network_origin: true
  knows_private_page_access_2104: true
```

---

# 88. Chapter 2最终时间线

完整到：

```text
16:19
旧体育馆

18:42
Photo17

19:24
离开旧体育馆

20:17
BlueMoon Login

20:31
发帖

20:43
“我不是要跑路 XD”

21:04
访问 /0817/private.html

21:17
继续回帖

22:01
Session End
```

---

# 89. 本章不显示23:18回家

虽然Canonical知道：

```text
林夏23:18回家
```

但玩家此时没有可靠证据。

所以：

```text
不放
```

这是非常重要的“作者知道 ≠ 玩家知道”。

---

# 90. Chapter End条件

最低通关：

```text
knows_summer17_is_linxia
AND
knows_linxia_online_2031
AND
thread1847_full_seen
```

推荐额外：

```text
session1847_seen
```

但不强制Node7。

---

# 91. Chapter End 页面

玩家回ROOM Archive。

右侧：

```text
TIMELINE UPDATED
```

状态：

```text
Last confirmed online activity:
2007-08-17 22:01
```

下方：

```text
Previous endpoint:
19:24

New endpoint:
22:01
```

---

# 92. 不建议写

```text
“Previous assumption invalidated.”
```

如果想更克制：

```text
Timeline extended.
```

更像档案工具。

---

# 93. Chapter 2结尾钩子

`backup_20070823.zip`页面再次访问：

```text
403 Forbidden
```

但新增：

```text
Identity dependency:
RESOLVED

UID1847
Summer17
Linxia

Additional source required.
```

这告诉玩家：

```text
你解开了一层
但还不够
```

---

# 94. Additional Source

显示：

```text
PHOTO SOURCE REFERENCE
```

或者：

```text
Image provenance required
```

为Chapter 3：

```text
Photo17 Forensics
```

做入口。

---

# 95. 推荐Chapter3入口

backup403页面：

```text
Referenced Object:
DSC0017.JPG
```

玩家：

```text
Photo17？
```

进入：

```text
13_PHOTO17_FORENSICS.md
```

---

# 96. Chapter 2完整主路径

```text
backup403
↓
BM-1847
↓
BlueMoon
↓
Summer17 Profile
↓
普通帖
↓
语言相似
↓
Deleted Thread
↓
Fragments
↓
“不是现实里真的消失”
↓
“我不是要跑路 XD”
↓
完整帖子
↓
Moderator Log
↓
身份比较
↓
original/edit/web
↓
Cookie Hash
↓
Summer17 = 林夏
↓
20:31成为林夏事件
↓
Timeline延长
↓
Session 22:01
↓
Unknown Stage2
↓
Node7
↓
backup403更新
↓
Chapter End
```

---

# 97. 允许自由顺序

玩家可以：

```text
先身份
后帖子
```

或：

```text
先帖子
后身份
```

都成立。

触发采用：

```text
状态条件
```

而非：

```text
固定剧情步骤
```

---

# 98. 如果玩家先看到20:31帖子

此时：

```text
Summer17身份未知
```

只保存：

```text
knows_summer17_posted_2031
```

等身份确认后：

```text
自动升级为
knows_linxia_online_2031
```

---

# 99. 如果玩家先确认Summer17身份

再进入删帖：

立刻：

```text
20:31具有重大意义
```

但不要自动跳Timeline。

玩家仍需：

```text
恢复至少部分正文
```

证明帖子确实是当晚活动。

---

# 100. 如果玩家完全不读普通帖子

身份线可能缺少语言证据。

Fallback：

Cookie Hash + original/edit/web + event detail

仍可达到：

```text
High
```

所以不强制玩家读大量文本。

---

# 101. 如果玩家不回林夏主页对照

ROOM Archive Relation工具可以直接展示：

```text
Archived phrase match
```

并提供：

```text
Open source page
```

玩家可选择是否回看。

---

# 102. 如果玩家不懂Cookie Hash

UI说明：

```text
This value identifies an archived 2007 browser session.
It does not refer to your current browser.
```

很重要。

---

# 103. 如果玩家误以为Cookie=同一个人绝对证明

Archive提示：

```text
Shared device does not prove identity by itself.
```

这体现严谨。

只有结合：

```text
语言
事件
本地短语
```

才High Confidence。

---

# 104. 如果玩家卡在删帖恢复

三级提示：

### Hint 1

```text
Quoted text may survive after a thread is removed.
```

### Hint 2

在回复页面高亮：

```text
[引用]
```

### Hint 3

Archive按钮：

```text
Search Quoted Fragments
```

不要自动拼全文。

---

# 105. 如果玩家卡在Summer17身份

提示顺序：

### Hint 1

```text
Compare writing patterns.
```

### Hint 2

```text
Search both users for “原图”.
```

### Hint 3

```text
Archived session relation available.
```

---

# 106. 如果玩家卡在20:31意义

不要直接说：

```text
这证明林夏还活着
```

Archive可提示：

```text
This event occurs after 19:24.
```

足够。

---

# 107. 本章Search行为

ROOM Search记录：

```text
BM-1847
Summer17
Linxia
20:31
17号
原图
```

Unknown Stage2可引用。

---

# 108. Search Echo例子

玩家多次搜：

```text
周然
```

Unknown：

> 你还是在找周然。

玩家多次搜：

```text
Summer17 林夏
```

Unknown：

> 你已经知道你在比较谁了。

---

# 109. 本章404/410/403用法

404：

```text
从未抓到 / 不存在
```

410：

```text
论坛主题曾存在但已删除
```

403：

```text
backup存在但未授权
```

Chapter 2应让玩家真正学会：

```text
状态码是信息
```

---

# 110. 论坛删帖应该用410还是原论坛错误页？

两层：

原论坛内部：

```text
主题不存在或已删除
```

ROOM Archive外层：

```text
410 Gone
Archived traces exist.
```

非常合理。

---

# 111. 本章异常预算

最多：

```text
1. Unknown Stage2行为分析
2. 搜索结果关联动态更新
3. Identity关系UI自动生成
```

不要：

```text
论坛头像变鬼脸
楼层突然出现2026玩家名字
```

太早。

---

# 112. 本章视觉异常

几乎没有。

论坛本身必须始终：

```text
像普通旧论坛
```

真正的不安来自：

```text
内容关系
```

---

# 113. 本章音频

BlueMoon：

```text
无BGM
```

只用：

```text
点击
页面加载
普通通知
```

恢复Fragment：

```text
轻微Archive工具音
```

不要恐怖低频。

---

# 114. Fragment恢复UI

建议像：

```text
文本取证工具
```

而不是：

```text
黑客终端
```

例如：

```text
Source 1 / 4
Integrity 62%
```

---

# 115. 论坛旧网真实性

必须保留：

```text
楼层
沙发
签名档
注册时间
在线状态
积分
```

但不要所有字段都能点。

---

# 116. 本章文本阅读密度

玩家首周目：

```text
15k～22k字
```

不要求全看。

深度探索：

```text
28k～32k
```

---

# 117. 普通帖的重要性

必须让玩家在Summer17中看到：

```text
公交
相机
网页
失眠
无聊
朋友
```

否则：

```text
“匿名账号=谜题账号”
```

太明显。

---

# 118. Summer17的身份感

玩家理想体验：

早期：

```text
这个人说话有点像林夏
```

中期：

```text
是不是同一个人？
```

后期：

```text
基本就是她
```

最终：

```text
账号不同不等于人物不同
```

---

# 119. Linxia/Summer17视觉对比

Linxia：

```text
有头像
有主页
资料完整
```

Summer17：

```text
默认头像
资料空
```

这本身就是：

```text
公开人格 vs 匿名人格
```

---

# 120. 身份确认不要自动合并Profile

即使确认：

论坛仍保留：

```text
两个账号
```

ROOM侧栏加：

```text
Related Identity
```

不要把两者UI直接合成一个。

因为主题就是：

> **同一个人也可以有多个数字版本。**

---

# 121. Timeline来源颜色/样式

不要用鲜红嫌疑颜色。

只分类：

```text
Official
Personal
Forum
Archive
System
```

视觉中性。

---

# 122. 证据编号建议

```text
E020 Summer17 Identity Relation
E021 20:31 Thread Timestamp
E022 20:17–22:01 Session Log
E023 Cookie Relation
E024 21:17 Last Reply
E025 Moderator Hide Log
E026 Forum Date Memory Pollution
E027 Node7 Browser Cache
```

---

# 123. PlayerKnowledge更新

```ts
knows_summer17_is_linxia
knows_summer17_posted_2031
knows_linxia_online_2031
knows_session_until_2201
knows_thread_not_explicit_farewell
knows_thread_hidden_by_moderator
knows_official_record_influenced_forum
knows_public_network_origin
knows_private_page_access_2104
```

---

# 124. Belief系统建议

本章可暗中统计：

```text
suspect_zhouran
trust_guyan
trust_archive
trust_personal_text
trust_metadata
```

Unknown只用作回应。

不显示数值。

---

# 125. 如果玩家仍高度怀疑周然

这是允许的。

因为：

```text
20:31并不能证明周然完全无关
```

Unknown也不能说：

```text
你错了
```

只能：

> 你的时间线已经变了。

---

# 126. 如果玩家认为Summer17比Linxia更真实

游戏不要纠正。

Unknown可以：

> 你觉得匿名的时候比较真。

再：

> 为什么？

如果自由输入不做，就到这里。

---

# 127. 如果玩家认为公开账号才是真的

Unknown：

> 那你为什么还在看Summer17？

非常简洁。

---

# 128. 本章主题问题

表层：

> **Summer17是谁？**

第二层：

> **匿名账号是不是更接近真实的人？**

深层：

> **你凭什么决定哪一种表达才是“真正的林夏”？**

---

# 129. 本章与ROOM后期呼应

玩家此时正在：

```text
把Linxia
+
Summer17
↓
识别为同一个人
```

未来ROOM会进一步：

```text
把所有版本
强制合成一个Persona
```

玩家现在的操作其实是：

```text
ROOM逻辑的温和前身
```

---

# 130. 但玩家此时做的是合理调查

区别：

玩家：

```text
建立关系
保留来源
```

ROOM：

```text
合并差异
生成缺失
```

这一区别后期非常重要。

---

# 131. 本章最后的心理状态

不是：

```text
“我找到了真相”
```

而是：

```text
“原来我之前连时间线边界都找错了。”
```

---

# 132. 本章最后一个普通页面

建议让玩家在结束前再次回到：

```text
Summer17 Profile
```

现在同样的：

```text
Last Login:
2007-08-17 22:01
```

已经完全不同。

这种“同一页面、认知改变”的效果比页面变形更高级。

---

# 133. 可选高价值设计

第一次看Summer17 Profile：

玩家不重视：

```text
22:01
```

身份确认后再次看：

Archive自动在右边新增：

```text
Related identity:
Linxia
```

但正文完全没变。

玩家自己意识：

> “这个时间我第一次就看到了。”

非常适合ROOM 404。

---

# 134. Unknown可以回应这个回看

条件：

```text
summer17_profile_visit_count >= 2
AND
knows_summer17_is_linxia
```

消息：

> 它第一次就在这里。

这句话非常好。

仅出现一次。

---

# 135. 本章Autosave点

```text
BM-1847解锁
第一次打开Summer17
删帖首次发现
完整帖子恢复
Cookie关系发现
身份High
20:31升级为林夏事件
Timeline更新
Chapter End
```

---

# 136. 状态保存

刷新后：

```text
fragment recovery进度保留
已读帖子保留
identity clue保留
Unknown once消息不重复
```

---

# 137. Back/Forward

Chapter 2仍保持：

```text
正常浏览器规则
```

不要提前做：

```text
Forward幽灵页面
Back错误历史
```

这些留Chapter4以后。

---

# 138. URL手输

允许：

```text
/forum/user/1847
/forum/thread/1847
```

如果玩家猜中：

```text
直接打开
```

不阻止。

因为这些不是剧情“权限门”。

---

# 139. Session Metadata直接手输

如果未获得关系：

```text
403
Archived metadata restricted until identity relation is established.
```

也可以：

```text
Preview available
```

但不显示Cookie。

---

# 140. Sequence Break原则

玩家可以早看：

```text
22:01
20:31
```

但必须：

```text
完成身份关联
```

才能把这些事件加入林夏时间线。

这很好地把：

```text
“信息存在”
```

和：

```text
“玩家理解信息”
```

分开。

---

# 141. Chapter 2 QA路径 A

标准：

```text
BM1847
→ Profile
→ 普通帖
→ Deleted Thread
→ Fragments
→ Full Thread
→ Identity
→ Cookie
→ Timeline
```

必须通。

---

# 142. QA路径 B

身份优先：

```text
Profile
→ Search原图
→ Linxia对照
→ Cookie
→ Identity
→ Deleted Thread
→ 20:31
```

必须通。

---

# 143. QA路径 C

删帖优先：

```text
Deleted Thread
→ Full Recovery
→ Moderator Log
→ Profile
→ Identity
```

必须通。

---

# 144. QA路径 D

极简玩家：

```text
BM1847
→ Profile
→ Deleted Thread
→ Archive提示
→ Identity Relation
→ Timeline
```

也要能完成。

---

# 145. QA：帖子恢复

确认：

```text
Fragment顺序任意
```

不会因为先后不同导致：

```text
全文无法解锁
```

---

# 146. QA：身份关系

确认：

```text
语言证据不是强制唯一条件
```

至少有多个组合可达High。

---

# 147. QA：20:31来源

需要测试：

```text
Forum Thread
RSS
Session
```

全部显示一致时间。

---

# 148. QA：时区

2007所有论坛时间统一：

```text
南城本地时间
UTC+8
```

不要出现浏览器UTC换算错位。

---

# 149. QA：22:01

Session End不是：

```text
林夏离开网吧时间
```

只表示：

```text
论坛Session结束
```

UI需写：

```text
Session End
```

而不是：

```text
User Left
```

---

# 150. QA：21:04与21:17

玩家可能问：

```text
怎么21:04在主页，21:17又在论坛？
```

解释：

```text
浏览器多标签/多窗口
```

正常。

---

# 151. QA：Summer17最后登录

Profile：

```text
22:01
```

Session：

```text
22:01
```

必须一致。

---

# 152. QA：帖子删除

删除时间：

```text
2007-08-21
```

不能写成：

```text
8月17日晚被林夏删除
```

---

# 153. QA：Linxia公开账号

最后已知公开账号登录：

```text
2007-08-12
```

不能与Summer17混淆。

---

# 154. 本章开发目录建议

```text
story/chapter02/
├── chapter02.ts
├── forumBoards.ts
├── forumUsers.ts
├── forumThreads.ts
├── archiveFragments.ts
├── sessionMetadata.ts
├── identityRelations.ts
├── timelineEvents.ts
└── unknownMessages.ts
```

---

# 155. Forum user JSON示例

```ts
{
  uid: 1847,
  username: "Summer17",
  registeredAt: "2006-10-12",
  posts: 83,
  lastLogin: "2007-08-17T22:01:00+08:00",
  avatar: "default_moon_02",
  homepage: null,
  location: null
}
```

---

# 156. Thread 1847数据示例

```ts
{
  id: "thread_1847_0817",
  authorUid: 1847,
  title: "如果一个人突然不再存在",
  createdAt: "2007-08-17T20:31:00+08:00",
  status: "HIDDEN",
  sourceType: "ORIGINAL_FORUM_POST",
  archiveFragments: [
    "forum_index",
    "rss",
    "reply_quote",
    "subscription_cache"
  ]
}
```

---

# 157. Identity Relation示例

```ts
{
  sourceUser: 1741,
  targetUser: 1847,
  clues: {
    language: true,
    eventDetail: true,
    camera: false,
    phraseMatch: true,
    cookieMatch: true
  },
  confidence: "HIGH"
}
```

---

# 158. Timeline Event示例

```ts
{
  id: "linxia_bluemoon_thread_2031",
  person: "linxia",
  time: "2007-08-17T20:31:00+08:00",
  sourceIds: [
    "thread_1847_0817",
    "rss_cache_1847",
    "forum_index_1847"
  ],
  confidence: "HIGH"
}
```

---

# 159. Unknown Trigger示例

```yaml
id: unknown_c02_timeline_extended

conditions:
  knows_linxia_online_2031: true

once: true
priority: 100

message:
  text: "你之前把最后一页停在了19:24。"
```

---

# 160. 第二条可选Unknown Trigger

```yaml
id: unknown_c02_profile_return

conditions:
  knows_summer17_is_linxia: true
  summer17_profile_visit_count: ">=2"

once: true

message:
  text: "它第一次就在这里。"
```

---

# 161. 第三条行为型Trigger

```yaml
id: unknown_c02_zhouran_focus

conditions:
  suspect_zhouran: ">=high"
  knows_linxia_online_2031: true

once: true

message:
  text: "你很想让周然成为答案。"
```

---

# 162. 本章错误页面规则

Forum dead link：

```text
原论坛error
+
ROOM Archive status
```

例如：

```text
指定主题不存在或已删除。

Archive:
410 Gone
4 fragments available.
```

---

# 163. 本章程序ErrorBoundary

真实程序错误：

```text
Unexpected application error.
Reload page.
Progress preserved.
```

绝不能伪装成：

```text
BlueMoon删帖
```

---

# 164. 可选Achievement

后期：

```text
《另一个名字》
确认Summer17关系

《不是最后一页》
更新19:24→22:01时间线

《引用还在》
通过quote恢复删帖

《第一次就在这里》
在身份确认后回看Profile
```

不影响主线。

---

# 165. Chapter 2文本资产清单

必须：

```text
BlueMoon首页
4个版块
Summer17 Profile
Linxia Profile
GY Profile
Ran Profile
普通帖子10+
Summer17帖子6+
Thread1847全文
Thread1847回复
Thread1904失踪讨论
Moderator Log
Archive Fragment页面
Session Metadata
Identity Relation
Node7 Cache
Unknown Stage2文本
```

---

# 166. 图片资产

```text
BlueMoon Logo
默认月亮头像
Linxia低清头像
Ran头像
GY默认/简单头像
普通论坛用户头像10个
```

全部：

```text
低清
旧网
```

不要现代精美角色头像。

---

# 167. Chapter 2完成时玩家应该知道的“事实”

```text
Summer17很可能就是林夏
20:31帖子属于林夏
22:01前存在论坛Session
帖子不是简单遗书
帖子不是林夏自己删除
论坛对18号的记忆受到官网影响
```

---

# 168. 玩家仍然可以不确定的事

```text
Summer17是不是她“更真实”的一面
顾言是否早就知道Summer17
林夏为什么去旧城区网吧
她为什么22:01后停止活动
她是否计划第二天离开
```

这些留下。

---

# 169. 本章对人物的重新排列

Chapter 1：

```text
周然非常可疑
顾言像重要证人
林夏像失踪中心
```

Chapter 2结束：

```text
周然仍有问题，但不再垄断时间线
顾言似乎知道匿名账号一些事情
林夏开始主动拥有多个数字身份
```

故事复杂度上升。

---

# 170. 本章必须避免的套路

不要：

```text
Summer17发恐怖倒计时
神秘网友约林夏午夜见面
版主其实是凶手
论坛里出现未来玩家留言
帖子标题自动变成玩家名字
```

都太早、太类型化。

---

# 171. Chapter 2核心台词组

Summer17：

> “没有啦，我不是要跑路 XD”

Unknown：

> “你之前把最后一页停在了19:24。”

Archive：

```text
Timeline extended.
```

三者共同完成：

```text
玩家旧判断崩塌
```

---

# 172. 本章最终镜像

Chapter 1：

```text
玩家寻找“原来的版本”
```

Chapter 2：

```text
玩家寻找“原来的身份”
```

但最后发现：

> **身份并没有一个简单的“原版”。**

Linxia是林夏。

Summer17也是林夏。

---

# 173. Chapter 3接口

backup403更新：

```text
Identity dependency:
RESOLVED

Additional source required:
IMAGE PROVENANCE

Referenced:
DSC0017.JPG
```

Route：

```text
/photo/forensics/DSC0017
```

下一章主题：

```text
Photo17
原图
修改时间
网页压缩版
ROOM恢复版
“第四个人”
```

---

# 174. Chapter 3的认知问题

Chapter 2结束：

```text
一个人可以有多个账号
```

Chapter 3将问：

```text
一张照片也可以有多个“版本”吗？
```

自然承接。

---

# 175. 文档状态

```text
STATUS:
PLAYABLE SCRIPT v0.1
```

已锁定：

```text
Chapter 2入口 BM-1847
BlueMoon自由探索
Summer17 Profile
删帖考古
Thread1847恢复流程
20:31硬证据
“我不是要跑路 XD”
Moderator隐藏原因
Summer17身份多证据确认
Cookie Hash仅为2007归档数据
22:01 Session End
Unknown Stage2
Timeline 19:24→22:01
backup下一层锁指向Photo17 provenance
```

---

# 176. 下一阶段建议

正式进入：

```text
13_PHOTO17_FORENSICS.md
```

建议先做成：

```text
Chapter 3内容数据库 + 取证机制
```

重点固定：

```text
DSC0017.JPG
原始hash
2007-08-17 18:42
2007-08-23副本
网页压缩版
2015恢复版
2016重建版
2022重建版
2026动态版本
```

然后再写：

```text
14_CHAPTER_03_SCRIPT.md
```

---

# 177. 最终一句话

> Chapter 1 让玩家发现：  
> **同一件事可以有两个日期。**
>
> Chapter 2 则让玩家发现：  
> **同一个人也可以有两个名字。**
>
> 而真正重要的不是选出“哪一个才是真的”。  
>   
> 是学会看清——  
> **每一个版本究竟来自哪里。**
