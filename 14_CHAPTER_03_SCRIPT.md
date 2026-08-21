# ROOM 404：互联网失踪档案
# 14_CHAPTER_03_SCRIPT.md
## Chapter 03《不存在的人》完整可玩脚本 / Playable Script Canon

> 本文档将 `13_PHOTO17_FORENSICS.md` 中的照片取证系统正式转化为：
>
> ```text
> 逐页面
> +
> 逐点击
> +
> 逐版本
> +
> 逐事件
> +
> 逐Flag
> +
> 逐证据
> +
> Sequence Break
> +
> Hint
> +
> Unknown Stage 3
> ```
>
> 的完整可开发脚本。
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

---

# 0. Chapter 基础信息

```yaml
chapter_id: chapter_03
title_cn: 不存在的人
title_en: The Person Who Wasn't There
estimated_playtime: 30-45 min
recommended_first_read: 14000-22000 chars
anomaly_start: 2
anomaly_end: 3
unknown_stage_start: 2
unknown_stage_end: 3
core_object: DSC0017.JPG
```

本章入口：

```text
backup_20070823.zip
403 Forbidden

Identity dependency:
RESOLVED

Additional source required:
IMAGE PROVENANCE

Referenced:
DSC0017.JPG
```

本章结束：

```text
PHOTO17 provenance resolved
↓
2007 Original: no fourth person
↓
2016 Reconstruction: first human-like artifact
↓
2022: artifact recursively reinforced
↓
2026 Session: dynamic reconstructed presentation
↓
SUBJECT_04 / PHOTO17
↓
Recovery Environment available
```

---

# 1. 本章唯一硬结论

玩家完成 Chapter 3 后必须能够确认：

> **Photo 17 中所谓“第四个人”并不存在于 2007 年原始照片中。**

准确说：

```text
2007 Original：
无第四人

2007 Club Copy：
无第四人

2007-08-23 Recovery Copy：
无第四人

2015 Restore：
无确认人形

2016 Reconstruction：
首次生成人形伪影

2022 Reconstruction：
伪影被递归强化

2026 Session：
根据玩家行为展示不同重建版本
```

本章绝不能确认：

```text
ROOM完整机构真相
顾言什么时候加入ROOM
Subject04到底是谁
林夏为何被选为样本
ROOM是否“有意识”
```

---

# 2. 本章玩家认知变化

Chapter 2结束：

```text
Summer17 = 林夏
↓
20:31仍在线
↓
22:01 Session End
```

Chapter 3开始：

```text
Photo17里似乎有第四个人
```

玩家的旧问题：

```text
“这个人是谁？”
```

本章结束后的正确问题：

```text
“这个人是从哪个版本开始出现的？”
```

这就是本章核心转向：

```text
人物推理
↓
来源推理
```

---

# 3. Chapter 03 页面总表

核心路由：

```text
/site/2007/linxia/0817/backup/backup_20070823.zip
│
└─ [Inspect Image Provenance]
        ↓
/photo/forensics/DSC0017
│
├─ /photo/forensics/DSC0017/source/current
├─ /photo/forensics/DSC0017/source/web2007
├─ /photo/forensics/DSC0017/source/archive2008
│
├─ /archive/photo-club/20070817/index
│   └─ /archive/photo-club/20070817/DSC0017
│
├─ /photo/forensics/DSC0017/version/20070823
├─ /photo/forensics/DSC0017/version/2015
├─ /photo/forensics/DSC0017/version/2016
├─ /photo/forensics/DSC0017/version/2022
├─ /photo/forensics/DSC0017/session-history
│
├─ /photo/forensics/compare
├─ /photo/forensics/help
├─ /photo/forensics/similar
│
└─ /system/object/SUBJECT_04_PHOTO17
```

章节结尾返回：

```text
backup_20070823.zip
```

并解锁：

```text
Open Recovery Environment
```

---

# 4. Chapter入口：backup状态变化

玩家结束 Chapter 2 后再次打开：

```text
backup_20070823.zip
```

显示：

```text
403 Forbidden

Identity dependency:
RESOLVED

User:
Summer17 / Linxia

Additional source required:
IMAGE PROVENANCE

Referenced object:
DSC0017.JPG
```

按钮：

```text
[Inspect Image Provenance]
```

---

# 5. 入口事件

```yaml
id: c03_start
type: OBJECT_INSPECT
target: DSC0017.JPG
conditions:
  chapter_02_complete: true
effects:
  chapter: 3
  unlock:
    - photo17_provenance_viewer
  autosave: true
```

---

# 6. Chapter标题出现时机

不要进入页面立刻显示。

先让玩家看到：

```text
Current Session Image
```

再点击：

```text
Compare with 2007 Web Copy
```

当第一次发现：

```text
当前版有人形
2007 Web版没有明确人形
```

时，

短暂出现：

```text
CHAPTER 03
不存在的人
```

约 1.5 秒。

---

# 7. Photo Provenance Viewer 首页

Route：

```text
/photo/forensics/DSC0017
```

标题：

```text
ROOM Image Provenance Viewer
```

顶部对象：

```text
Object:
DSC0017.JPG

Display Label:
Photo 17
```

三栏：

```text
左：
当前图片

中：
Version Graph

右：
Metadata / Source / Compare
```

---

# 8. Viewer首次状态

Version Graph只显示：

```text
[UNKNOWN SOURCE]
       ↓
[WEB COPY]
       ↓
[CURRENT SESSION]
```

其余节点：

```text
LOCKED
```

右侧：

```text
Current Display

Source:
Composite

Generation:
Unknown

Original Capture:
Unresolved
```

---

# 9. 玩家第一反应目标

让玩家产生：

> “等等，当前图片为什么写的是 Composite？”

不要主动弹教程。

---

# 10. Current Session图片

首次进入Chapter 3：

建议显示：

```text
SESSION_V2
```

即玩家前面已经见过的人形较明显版本。

右侧：

```text
Display Source:
Dynamic Session Presentation
```

但：

```text
Parent Sources:
locked
```

---

# 11. Inspect Metadata

按钮：

```text
[Metadata]
```

显示：

```text
Displayed Resolution:
800×600

Original Capture Time:
Unknown

Camera:
Unknown

Source Count:
5

Render Mode:
Session Variant
```

玩家第一次明确知道：

```text
自己看到的不是“原始文件预览”
```

---

# 12. View Source Objects

按钮：

```text
Source Objects (2/5 available)
```

开放：

```text
WEB_2007
ARCHIVE_2008
```

锁定：

```text
PHOTO_CLUB_ORIGINAL
RECOVERED_20070823
ROOM_RECONSTRUCTION
```

---

# 13. WEB_2007 页面

Route：

```text
/photo/forensics/DSC0017/source/web2007
```

显示：

```text
Source:
linxia-home.net/photo/

Type:
WEB_DERIVATIVE

Resolution:
800×600

EXIF:
Stripped

Date:
Archived from 2007 source
```

图片：

```text
压缩
偏暗
无明确第四人
```

---

# 14. ARCHIVE_2008 页面

```text
Source:
2008-02-14 Archive Snapshot

Type:
ARCHIVED_DERIVATIVE

Resolution:
800×600

EXIF:
Unavailable
```

视觉与WEB接近。

无明确第四人。

---

# 15. 第一次Compare入口

两个页面都提供：

```text
[Compare with Current]
```

Route：

```text
/photo/forensics/compare?left=web2007&right=current
```

---

# 16. Compare UI

默认：

```text
Side by Side
```

工具：

```text
[Side by Side]
[Overlay]
[Zoom]
[Brightness]
[Metadata]
```

高级按钮暂时灰：

```text
Difference Map
Hash
```

后面解锁。

---

# 17. 第一次差异发现

玩家应清楚看到：

```text
Current：
门框暗处有较明确人形

WEB_2007：
只有压缩噪点
```

不要自动圈出来。

但玩家若停留 30 秒无操作：

Hint：

```text
Compare the dark area near the doorway.
```

---

# 18. 第一次差异Event

```yaml
id: c03_first_version_difference
conditions:
  compared:
    left: web2007
    right: current
effects:
  knows_photo17_versions_differ: true
  anomaly_level: 2
  autosave: true
```

同时：

```text
Chapter Title
```

可触发。

---

# 19. Unknown可选第一条

条件：

```text
knows_photo17_versions_differ
AND
unknown_stage >= 2
```

消息：

> 你终于开始看它从哪里来的了。

这条不是必发。

如果玩家之前Unknown互动少，可延后。

---

# 20. Viewer新增提示

发现差异后：

```text
Original Source:
UNRESOLVED

Possible archive reference:
PHOTO_CLUB_2007
```

按钮：

```text
[Search Source]
```

---

# 21. 搜索DSC0017.JPG

ROOM Search：

```text
DSC0017.JPG
```

结果：

### Result 1

```text
Photo Club File Index
2007-08-17

DSC0017.JPG
Copied: 19:06
```

### Result 2

```text
backup_20070823
Recovered object:
DSC0017.JPG
```

### Result 3

```text
ROOM Image Restore Object
Access restricted
```

玩家自然进入 Result 1。

---

# 22. Photo Club Index

Route：

```text
/archive/photo-club/20070817/index
```

页面：

```text
Recovered Directory Index

D:\PHOTO_CLUB\2007\0817_GYM\original\
```

文件：

```text
DSC0001.JPG
DSC0002.JPG
...
DSC0017.JPG
...
DSC0067.JPG
```

顶部：

```text
Copy operation:
2007-08-17 19:06

Operator:
GY

Files:
67
```

---

# 23. 这里的“Operator: GY”

会让玩家重新注意顾言。

但不要暗示犯罪。

只是：

```text
文件复制操作账号
```

---

# 24. 打开DSC0017

Route：

```text
/archive/photo-club/20070817/DSC0017
```

显示：

```text
Filename:
DSC0017.JPG

Source:
Photo Club PC

Copied:
2007-08-17 19:06

Capture metadata:
2007-08-17 18:42:16
```

图片：

```text
无第四人
```

---

# 25. Hash字段

初次：

```text
Camera/Card Hash:
91f6...2a0c

Club Copy Hash:
91f6...2a0c

Status:
MATCH
```

按钮：

```text
[What does this mean?]
```

可进Help。

---

# 26. Help：Hash

简洁说明：

> Hash相同表示两个文件的字节内容一致。  
> 在这个记录中，摄影社电脑上的副本与相机/存储卡记录一致。

然后：

> Hash不同并不自动意味着人为篡改。

先埋下一句。

---

# 27. Original确认Event

条件：

```text
club_copy_seen
AND
hash_match_seen
```

触发：

```yaml
id: c03_confirm_original_copy
effects:
  knows_photo17_original_no_fourth_person: true
  unlock:
    - E030_photo17_original_club_copy
    - hash_tools
```

---

# 28. UI变化

Version Graph：

```text
[PHOTO17_ORIGINAL]
      |
      v
[CLUB COPY 19:06]
```

从灰色变亮。

Current Session仍在另一边。

---

# 29. 关键玩家认知

现在玩家必须能判断：

```text
2007原始字节链中
没有第四人
```

游戏不要弹：

```text
“第四人是假的！”
```

只显示：

```text
Original Source Verified
```

---

# 30. 下一步：2007-08-23副本

Photo Club页下方 Related Objects：

```text
Recovered Copy:
backup_20070823
```

点击：

```text
/photo/forensics/DSC0017/version/20070823
```

---

# 31. 20070823页面

显示：

```text
Filename:
DSC0017.JPG

Recovery Time:
2007-08-23 04:06

DateTimeOriginal:
2007-08-17 18:42:16

File Modified:
2007-08-23 04:06

Hash:
47ab...91d2

Original Hash Match:
NO
```

---

# 32. 这一步必须制造顾言嫌疑

因为玩家已知：

```text
顾言参与恢复
Hash不同
时间是8月23
```

右侧不要解释太多。

只显示事实。

---

# 33. Event：Hash Different

```yaml
id: c03_20070823_hash_diff
effects:
  saw_20070823_hash_difference: true
  belief:
    suspect_guyan: +1
```

Belief不显示。

---

# 34. 玩家可点击

```text
[Compare with Original]
```

打开：

```text
Original vs 20070823
```

高级工具：

```text
Difference Map
```

解锁。

---

# 35. Difference Map第一次使用

显示：

```text
Differences detected across entire image.
```

可视化：

```text
全图细碎像素差
```

而不是：

```text
只集中在人形区域
```

右侧分析：

```text
Pattern:
Global compression/re-encoding difference

Localized insertion:
Not detected
```

注意：

这是游戏内取证工具结论。

不是绝对法医证明。

---

# 36. Help：重编码

> JPEG重新保存、调整压缩质量或导出流程，都可能让整个文件的Hash发生变化。  
> 如果差异分布在整张图片，而不是集中于某个局部区域，更符合重新编码而不是单一区域插入。

玩家由此纠正：

```text
Hash不同 ≠ 一定P图
```

---

# 37. 20070823图像本身

视觉：

```text
与原图几乎一致
```

仍：

```text
无第四人
```

---

# 38. 8月23副本确认Event

```yaml
id: c03_20070823_no_artifact
conditions:
  compared_original_20070823: true
  difference_map_seen: true
effects:
  knows_20070823_copy_no_fourth_person: true
  knows_hash_difference_not_proof_of_edit: true
  unlock:
    - E031_photo17_recovered_copy
```

---

# 39. Unknown行为回应

若玩家之前高度怀疑顾言：

> 不同，不一定意味着被改成了你看到的那个样子。

这句可以出现一次。

---

# 40. Version Graph更新

现在：

```text
2007 ORIGINAL
├─ CLUB COPY
├─ WEB DERIVATIVE
└─ 20070823 RECOVERED COPY
```

三条都：

```text
NO HUMAN FIGURE
```

但UI不要直接写“NO HUMAN”。

可以图标：

```text
Feature status:
none confirmed
```

---

# 41. 下一步自动问题

Viewer顶部新增：

```text
Earliest version containing detected human-like feature:
UNRESOLVED
```

按钮：

```text
[Trace Later Processing]
```

---

# 42. 2015 Restore解锁

Route：

```text
/photo/forensics/DSC0017/version/2015
```

显示：

```text
ROOM Image Restore
Build: 2015.08

Mode:
RESTORE

Generation:
2

Parents:
WEB_2007
ARCHIVE_2008
RECOVERED_20070823
```

---

# 43. 第一次看到ROOM处理链

玩家此时应该意识：

```text
ROOM不仅展示网页
它还处理过历史图像
```

但仍不知道ROOM项目全貌。

---

# 44. 2015 Restore视觉

特点：

```text
暗部更亮
噪声更少
色彩略恢复
```

仍：

```text
没有明确第四人
```

---

# 45. Restore vs Original Compare

玩家可以：

```text
Overlay
```

发现：

```text
整体增强
```

不是：

```text
局部人物
```

---

# 46. Restore帮助

点击：

```text
What is Restore?
```

说明：

> Restore尝试增强或恢复已经存在于输入中的可见信息，例如亮度、噪声和压缩损失。

随后出现：

```text
See also:
Reconstruction
```

按钮锁定。

---

# 47. 2015 Event

```yaml
id: c03_restore_2015_seen
effects:
  knows_2015_restore_no_confirmed_human: true
  unlock:
    - reconstruction_help_preview
```

---

# 48. 2016 Reconstruction入口

2015页面底部：

```text
Next Derived Object:
2016-08-17

Process:
CONTEXT RECONSTRUCTION
```

按钮：

```text
[Open]
```

---

# 49. 第一次打开2016前确认框

不是安全警告。

只是Archive说明：

```text
This object was generated using inferred visual context.
It is not an original 2007 source.
```

按钮：

```text
[Continue]
```

这是游戏第一次很明确地教：

```text
Reconstruction ≠ Original
```

---

# 50. 2016 Reconstruction页面

Route：

```text
/photo/forensics/DSC0017/version/2016
```

Metadata：

```text
Date:
2016-08-17

Process:
CONTEXT RECONSTRUCTION

Generation:
3

Input:
2015 Restore
WEB_2007
Context Set:
PHOTO_CLUB
```

---

# 51. 2016 V1视觉

门框暗处出现：

```text
远处模糊人形
```

与Chapter 1的第二次Photo17一致。

无脸。

轮廓不稳定。

---

# 52. 关键对比

按钮：

```text
[Compare with 2015 Restore]
```

差异高度集中：

```text
门框附近
```

Difference Map：

```text
Localized structural addition detected
```

这是本章最强视觉证据之一。

---

# 53. 人形首次出现Event

```yaml
id: c03_human_first_seen_2016
conditions:
  viewed_2016_reconstruction: true
  compared_2015_2016: true
effects:
  knows_human_first_appears_in_reconstruction: true
  unlock:
    - E034_2016_artifact
  autosave: true
```

---

# 54. Reconstruction Log

按钮：

```text
[View Process Log]
```

显示：

```text
Feature:
vertical structure

Candidates:
human
doorway
shadow

Human probability:
0.41

Action:
retain contextual feature
```

注意：

```text
0.41
```

不代表：

```text
41%真的有人
```

只是内部候选概率。

---

# 55. 玩家应产生的疑问

```text
0.41这么低为什么还保留？
```

很好。

下一步是：

```text
2022递归
```

---

# 56. Reconstruction Help解锁

页面解释：

> Reconstruction在输入数据不足或结构模糊时，可能依据其他图像、上下文和先前生成结果推测缺失内容。

最重要一句：

> 推测结果可能成为后续处理的输入。

这句几乎就是Chapter 3核心。

---

# 57. 2022入口

Process Log底部：

```text
Derived generations:
4
5
6
7
```

仅展示：

```text
Generation 7 / 2022
```

中间几代不必都做图片。

---

# 58. 2022页面

Route：

```text
/photo/forensics/DSC0017/version/2022
```

显示：

```text
Generation:
7

Source:
Previous Reconstruction
+
Archive Sources

Feature Persistence:
HIGH

Consistency:
0.86
```

---

# 59. 2022 V2视觉

人形：

```text
头
肩
站姿
```

更加明确。

仍：

```text
无可辨认脸
```

---

# 60. 玩家Compare：2016 vs 2022

显示：

```text
Human-like feature becomes more structurally consistent.
```

右侧：

```text
Previous generation used as input:
YES
```

---

# 61. 递归污染Event

```yaml
id: c03_recursive_reconstruction_confirmed
conditions:
  compared_2016_2022: true
  previous_generation_seen: true
effects:
  knows_reconstruction_uses_previous_generation: true
  unlock:
    - E032_reconstruction_recursion
    - E035_feature_persistence
  anomaly_level: 3
```

---

# 62. Unknown Stage 3主消息

触发：

```text
knows_human_first_appears_in_reconstruction
AND
knows_reconstruction_uses_previous_generation
```

Unknown：

> 你一直在问那个人是谁。  
> 你还没问过他是什么时候开始存在的。

这是Chapter 3核心Unknown台词。

---

# 63. 玩家回复“2016”

Unknown：

> 这是你现在找到的最早版本。

保持谨慎。

---

# 64. 回复“他不存在”

Unknown：

> 在哪一个版本里？

这句非常重要。

---

# 65. 回复“假的”

Unknown：

> 这个词太简单了。

可选第二句：

> 它确实存在于后来的文件里。

不要再展开。

---

# 66. 回复“ROOM做的”

Unknown：

> 你还不知道ROOM是什么。

这句有一点Meta压迫。

但只在玩家确实输入ROOM。

---

# 67. Similar Features入口

2022页面：

```text
Similar reconstructed features detected:
4
```

按钮：

```text
[View Similar]
```

Route：

```text
/photo/forensics/similar
```

---

# 68. Similar页面

显示：

```text
Photo03
Photo08
Photo17
Photo21
```

每张：

```text
Original:
no confirmed human

Later reconstruction:
human-like feature
```

相似度：

```text
0.62
0.71
0.89
0.68
```

---

# 69. 玩家可能误以为

```text
同一个真实人在四张照片里
```

不要立刻纠正。

点开技术信息：

```text
Feature source:
shared reconstruction embedding
```

这句话Chapter 3可部分开放。

---

# 70. Similar Event

```yaml
id: c03_similar_artifacts_seen
effects:
  knows_artifact_pattern_not_single_photo: true
  unlock:
    - E036_similar_reconstruction_features
```

---

# 71. 第四人称呼出现

UI本身不要写：

```text
Fourth Person
```

内部：

```text
Human-like Feature
```

“第四个人”可以来自：

```text
玩家笔记
后续论坛
调查者称呼
```

避免系统先替玩家命名。

---

# 72. 2026 Session入口

当：

```text
2016
2022
```

都看过，

Version Graph最右侧：

```text
CURRENT SESSION
```

从锁定变开放。

按钮：

```text
[Inspect Session History]
```

---

# 73. Session History

Route：

```text
/photo/forensics/DSC0017/session-history
```

显示：

```text
Session Object:
Photo17

2026 Session History
```

日志：

```text
PHOTO_VIEW
count=1
variant=restore

PHOTO_VIEW
count=2
variant=recon_v1

PHOTO_VIEW
count=3
variant=recon_v2
```

如果玩家实际只看2次：

```text
只显示实际发生过的
```

不要伪造第三次。

---

# 74. Session历史必须完全对应玩家实际行为

这是重要开发要求。

系统内部：

```text
event log
```

直接生成。

不能：

```text
写死3次
```

---

# 75. 玩家第一次意识到

Chapter 1：

```text
图真的变过
```

而且：

```text
不是自己记错
```

这会形成非常强的回溯冲击。

---

# 76. Session History字段

每项：

```text
timestamp_in_session
page
visit_count
selected_variant
reason
```

reason前期可：

```text
state-based presentation
```

不要暴露完整算法。

---

# 77. Current Session Metadata

显示：

```text
Source Type:
SYSTEM_VIEW

Original:
NO

Reconstructed:
YES

Presentation:
DYNAMIC
```

这是第一次系统明确承认：

```text
当前展示图不是原始证据
```

---

# 78. Session Variant Event

```yaml
id: c03_session_variant_discovered
conditions:
  session_history_seen: true
effects:
  knows_current_photo_is_dynamic_session_variant: true
  unlock:
    - E033_photo17_session_variant_log
```

---

# 79. Unknown行为型消息

如果玩家Chapter1曾多次回Photo17：

> 你不是记错了。  
> 它确实换过。

这句可用，但只出现一次。

更克制版本：

> 你第一次看到的版本已经不在当前页面上了。

推荐后一版。

---

# 80. Session历史后Photo页面变化

Chapter 3完成前：

林夏个人主页的Photo17页面新增：

```text
[View Provenance]
```

图片默认：

```text
保持当前版本
```

不要再自动升级。

---

# 81. 玩家获得版本选择权

Provenance Viewer顶部：

```text
Select Version
```

可选择：

```text
Original
Web
20070823
2015
2016
2022
Session
```

这是玩家能力成长。

---

# 82. 这个设计意义

前两章：

```text
系统替玩家选版本
```

Chapter 3后：

```text
玩家自己选版本
```

非常符合主题。

---

# 83. Source Reliability页面

可选：

```text
[Source Reliability]
```

显示：

```text
2007 Original / Club Copy:
Very High for original visual content

20070823 Recovery:
High

Web2007:
Medium

Archive2008:
Medium

2015 Restore:
Low for pixel-level truth

2016+ Reconstruction:
Not valid as evidence of 2007 visual content
```

不要写：

```text
Truth Score 100%
```

---

# 84. 玩家必须学会

不是：

```text
“高分=真”
```

而是：

```text
不同来源适合回答不同问题
```

例如：

2016 Recon可回答：

```text
ROOM后来生成了什么
```

不能回答：

```text
2007原图有什么
```

---

# 85. Chapter 3主线最低路径

```text
backup403
↓
Provenance Viewer
↓
Current vs Web
↓
Search DSC0017
↓
Club Copy
↓
Hash Match
↓
20070823
↓
Diff Map
↓
2015 Restore
↓
2016 Recon
↓
2022 Recon
↓
Recursion
↓
Session History
↓
Chapter End
```

---

# 86. 允许先搜原图

玩家如果直接从地址栏/ROOM Search：

```text
DSC0017.JPG
```

可以先进入Photo Club Index。

Sequence Break允许。

然后回Viewer：

```text
Original Source自动关联
```

---

# 87. 如果玩家一上来就打开2016 URL

若状态未解锁：

```text
403
Derived object exists.
Source chain unresolved.
```

不是404。

告诉玩家：

```text
它确实存在
```

但不能直接跳过取证链。

---

# 88. 2022 URL同理

```text
403
Previous generations required.
```

---

# 89. 如果玩家直接猜SUBJECT_04

```text
403
Object reference exists.
Provenance unresolved.
```

不剧透内容。

---

# 90. Hint系统：找原图

Hint 1：

```text
The displayed image is a derivative.
```

Hint 2：

```text
Search the original filename.
```

Hint 3：

```text
DSC0017.JPG appears in the 2007 Photo Club index.
```

---

# 91. Hint系统：8月23误导

如果玩家卡住：

```text
Hash differs.
```

Hint 1：

```text
Different hash does not identify the type of change.
```

Hint 2：

```text
Compare where the pixels differ.
```

Hint 3：

```text
The differences are distributed across the image.
```

---

# 92. Hint系统：人形起源

Hint 1：

```text
Compare the earliest versions first.
```

Hint 2：

```text
2015 and 2016 use different processing modes.
```

Hint 3：

```text
The human-like feature first becomes localized in the 2016 reconstruction.
```

---

# 93. Hint系统：递归强化

Hint 1：

```text
Check the parents of Generation 7.
```

Hint 2：

```text
A previous reconstruction is listed as an input.
```

---

# 94. 如果玩家完全不懂EXIF

默认UI只显示：

```text
Captured
Modified
Camera
```

鼠标悬停：

```text
Captured = DateTimeOriginal
Modified = file system / export time
```

降低门槛。

---

# 95. 如果玩家懂取证

Advanced Metadata：

```text
Make
Model
Exposure
ISO
Orientation
JFIF
Quantization
Encoding
```

可以额外看。

但主线不依赖。

---

# 96. EXIF不一致支线

Web版：

```text
EXIF stripped
```

20070823：

```text
DateTimeOriginal retained
```

这可以作为：

```text
恢复工具保留部分元数据
```

的合理细节。

---

# 97. 不要用真实复杂密码学作为谜题

Hash只是：

```text
比较工具
```

玩家不用：

```text
手动算SHA
```

---

# 98. Chapter 3事件总表

核心事件：

```text
c03_start
c03_first_version_difference
c03_confirm_original_copy
c03_20070823_hash_diff
c03_20070823_no_artifact
c03_restore_2015_seen
c03_human_first_seen_2016
c03_recursive_reconstruction_confirmed
c03_similar_artifacts_seen
c03_session_variant_discovered
c03_subject04_reference
c03_complete
```

---

# 99. c03_subject04_reference

触发条件：

```text
knows_photo17_original_no_fourth_person
AND
knows_human_first_appears_in_reconstruction
AND
knows_reconstruction_uses_previous_generation
```

Version Graph底部新增：

```text
Associated Reconstruction Object:
SUBJECT_04 / PHOTO17
```

---

# 100. SUBJECT_04页面

Route：

```text
/system/object/SUBJECT_04_PHOTO17
```

显示：

```text
Object:
SUBJECT_04 / PHOTO17

Type:
Reconstruction Reference

Created:
Restricted

Associated Environment:
backup_20070823

Access:
403
```

玩家第一次见：

```text
SUBJECT_04
```

---

# 101. 不要解释Subject 04

不要提示：

```text
林夏=Subject04
```

尽管玩家可能猜到。

Chapter 4/5再确认。

---

# 102. SUBJECT_04对象页面异常程度

非常冷静。

像数据库：

```text
ID
Type
Association
Access
```

不要：

```text
红屏
警报
```

---

# 103. 点击Associated Environment

回：

```text
backup_20070823.zip
```

这次状态改变。

---

# 104. backup最终解锁

显示：

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

按钮：

```text
[Open Recovery Environment]
```

注意：

```text
现在可以打开
```

这是Chapter1埋下的长期奖励。

---

# 105. Chapter结束条件

最低：

```text
knows_photo17_original_no_fourth_person
AND
knows_human_first_appears_in_reconstruction
AND
knows_reconstruction_uses_previous_generation
```

推荐强制：

```text
session_history_seen
```

因为这能解释Chapter1图片变化。

建议最终实际完成条件：

```text
以上三项
+
knows_current_photo_is_dynamic_session_variant
```

---

# 106. Chapter End页面

不弹：

```text
Chapter Complete
```

Provenance Viewer显示：

```text
PROVENANCE SUMMARY
```

内容：

```text
2007 ORIGINAL
No confirmed human figure

2007 RECOVERY
No confirmed human figure

2015 RESTORE
No confirmed human figure

2016 RECONSTRUCTION
Human-like feature introduced

2022 RECONSTRUCTION
Feature reinforced

2026 SESSION
Dynamic reconstructed presentation
```

下方：

```text
Original-event source chain:
VERIFIED

Reconstruction chain:
CONTAMINATED
```

---

# 107. Chapter 3最终Unknown

推荐：

> 原图里没有他。  
> 后来的版本有。

足够。

不要继续解释。

---

# 108. 玩家若回复“所以是假的”

Unknown：

> 你又在选一个比较方便的词。

这个有一点锋利。

但符合Stage3。

---

# 109. 玩家若回复“是ROOM生成的”

Unknown：

> 这是你现在能证明的部分。

很克制。

---

# 110. 玩家若问“为什么要加人”

Unknown：

> 你还没看到那个系统为什么需要完整。

这句可作为Chapter4伏笔。

但不要太早揭示“人格完整”。

---

# 111. Chapter 3结尾转场

玩家点：

```text
Open Recovery Environment
```

屏幕：

```text
ROOM Recovery

Preparing archived environment...
```

进度：

```text
USER PROFILE
DOCUMENTS
PHOTO
MESSENGER CACHE
CALENDAR
DELETED FILES
MEMORY
```

到：

```text
MEMORY
```

显示：

```text
ERROR
```

然后：

```text
Continue
```

这里可以作为Chapter 4开头，不在Chapter3深入。

---

# 112. 本章不直接进入Desktop

建议Chapter3结束在：

```text
Recovery Environment Ready
```

玩家下一章点击：

```text
Start Recovery
```

再真正进入桌面。

这样章节边界更清晰。

---

# 113. 本章音频设计

Viewer：

```text
无BGM
```

Compare：

```text
非常轻的工具交互音
```

2016人形首次出现：

```text
不加恐怖音
```

这是关键。

让视觉差异自己说话。

---

# 114. 2022页面音频

仍无特殊音效。

最多：

```text
普通加载完成声
```

---

# 115. Session History页面

可有：

```text
很轻的日志滚动声
```

不要“系统警报”。

---

# 116. Unknown通知

保持：

```text
普通消息音
```

越普通越不舒服。

---

# 117. 本章异常预算

允许：

```text
1. Session动态图版本
2. Unknown Stage3
3. SUBJECT_04引用
```

不要：

```text
图片自己眨眼
人物转头
照片里的人越来越靠近到脸前
```

太恐怖游戏套路。

---

# 118. 当前图变化上限

Chapter 1：

```text
V0 → V1 → V2
```

Chapter 3之后：

```text
不再自动升级
```

玩家已获得版本工具。

---

# 119. 本章第一章回溯奖励

如果玩家Chapter1只看Photo17一次：

Session History只有：

```text
count=1
variant=restore
```

则不会得到：

```text
“你确实看到它变过”
```

的回溯。

但主线仍成立。

---

# 120. 如果玩家Chapter1看了3次

完整：

```text
restore
recon_v1
recon_v2
```

会得到最强体验。

这种差异允许存在。

---

# 121. 玩家行为应该影响体验，不影响事实

这是ROOM 404重要原则。

事实：

```text
第四人是重建伪影
```

无论玩家此前看几次都一样。

体验：

```text
是否亲眼经历动态变化
```

可以不同。

---

# 122. Similar Photos是否主线强制

不强制。

属于：

```text
P1支线
```

主线只需要Photo17。

---

# 123. Similar Photos的奖励

发现后：

Unknown可说：

> 你开始找“同一个人”了。

然后不解释。

这会让玩家意识自己仍在：

```text
把模式当人物
```

---

# 124. 如果玩家坚持寻找人物身份

ROOM Search可以返回：

```text
No verified person match.
```

不要生成假候选名单。

---

# 125. 如果玩家搜索“第四个人”

本章后半：

ROOM Search第一次新增结果：

```text
No indexed 2007 subject corresponds to this label.
```

很冷静。

---

# 126. 如果玩家搜索“human_probability 0.41”

返回：

```text
Reconstruction Process Log
```

技术型玩家可直达日志。

---

# 127. 如果玩家搜索“SUBJECT_04”太早

返回：

```text
1 restricted object
```

403。

让聪明玩家知道：

```text
这个东西确实存在
```

但不剧透。

---

# 128. Chapter 3 Search Echo

Unknown可根据玩家搜索：

若频繁：

```text
第四个人
```

说：

> 你给他名字以后，他就更像一个人了。

这句很强。

但建议：

```text
只在Stage3且搜>=3次
```

---

# 129. Search Echo另一条

玩家频繁搜：

```text
顾言
```

Unknown：

> 你找到的是一个不同的文件。  
> 不是一个不同的人。

这条较隐晦。

---

# 130. 顾言误导控制

Chapter3中可展示：

```text
Operator: GY
Recovery: 2007-08-23
Hash Different
```

但随后通过取证自然纠正。

不要加：

```text
顾言秘密邮件
```

那留后面。

---

# 131. 玩家应在本章学会的四条规则

```text
1. 当前展示不一定是原始文件
2. Hash不同不等于人为P图
3. Restore与Reconstruction不是一回事
4. 后一代重建可以污染下一代重建
```

---

# 132. 第五条隐藏规则

> **系统自己产生的结果，也可能变成系统下一次判断的“证据”。**

这是ROOM最危险的地方。

---

# 133. 章节主题层级

表层：

```text
第四个人是谁？
```

中层：

```text
第四个人何时出现？
```

深层：

```text
机器生成的错误，在被重复引用后会不会变成事实？
```

---

# 134. 与Chapter1呼应

Chapter1：

```text
18号错误记录
```

被重复引用后：

```text
人开始真的记成18号
```

Chapter3：

```text
2016错误人形
```

被重复输入后：

```text
系统越来越确定“那里有人”
```

这是同一个主题的：

```text
人类版
+
机器版
```

---

# 135. 与Chapter2呼应

Chapter2：

```text
同一个人有多个账号
```

Chapter3：

```text
同一张照片有多个版本
```

玩家逐步学：

```text
对象 ≠ 单一表示
```

---

# 136. Chapter 4衔接

Chapter3最后：

```text
Recovery Environment Available
```

Chapter4开始：

```text
恢复
```

玩家进入：

```text
仿2007桌面
```

看似终于接近“真实林夏”。

但实际：

```text
桌面本身也是后期重建环境
```

这会继续深化：

```text
版本问题
```

---

# 137. Chapter 3 Autosave点

```text
进入Provenance Viewer
首次发现Current/Web差异
确认Club Copy Hash Match
20070823 Difference Map完成
打开2016 Reconstruction
确认递归Generation
查看Session History
SUBJECT_04出现
Recovery Environment解锁
```

---

# 138. 刷新规则

刷新：

```text
Compare状态保留
已解锁版本保留
版本选择保留
```

Unknown once消息不重复。

---

# 139. Back规则

Chapter3仍：

```text
正常Back
```

不要让浏览器历史开始失控。

Chapter4/5再做。

---

# 140. Compare状态恢复

如果玩家刷新Compare页面：

```text
leftVersion
rightVersion
mode
zoom
```

可保留。

增强工具真实感。

---

# 141. QA路径 A：标准路径

```text
Current
→ Web
→ Compare
→ Search DSC0017
→ Club Copy
→ Hash
→ 20070823
→ Diff
→ 2015
→ 2016
→ 2022
→ Session
→ SUBJECT_04
```

必须通。

---

# 142. QA路径 B：原图优先

```text
Search DSC0017
→ Club Copy
→ Current
→ 20070823
→ 2016
→ 2022
```

必须通。

---

# 143. QA路径 C：顾言怀疑路径

```text
20070823
→ Hash Different
→ 搜索GY
→ 返回
→ Diff Map
→ 纠正
```

不会卡。

---

# 144. QA路径 D：技术玩家

直接：

```text
Advanced Metadata
Hash
Version Graph
Parents
Generation
```

可快速得出结论。

系统不强制读Help。

---

# 145. QA路径 E：非技术玩家

只用：

```text
图片对比
MATCH / DIFFERENT
Compare
Help
```

也能完成。

---

# 146. QA：版本链

严格测试：

```text
Original:
no person

Club:
no person

20070823:
no person

Web:
no confirmed

2015:
no confirmed

2016:
V1

2022:
V2

Session:
based on player history
```

---

# 147. QA：文件名

原图：

```text
DSC0017.JPG
```

不能在任何2007原始节点变成：

```text
IMG_
```

---

# 148. QA：时间

Original：

```text
2007-08-17 18:42:16
```

Club Copy：

```text
2007-08-17 19:06
```

Recovery：

```text
2007-08-23 04:06
```

全部UTC+8。

---

# 149. QA：Hash

Original/Club：

```text
MATCH
```

20070823：

```text
DIFFERENT
```

2015+：

```text
DIFFERENT
```

当然。

---

# 150. QA：Session Log

只能显示：

```text
玩家实际发生过的Photo View
```

不能假造访问次数。

---

# 151. QA：Unknown“你第一次看到的版本”

仅在：

```text
photo17_visit_count >= 2
```

时才可用。

---

# 152. QA：Subject04

只有：

```text
核心三项知识Flag完成
```

后正式出现在Version Graph。

直接URL猜测则403。

---

# 153. QA：Recovery Environment

只有：

```text
chapter2 identity resolved
chapter3 provenance resolved
```

才能显示：

```text
AVAILABLE
```

---

# 154. 程序数据结构建议

```text
story/chapter03/
├── chapter03.ts
├── photoVersions.ts
├── provenanceGraph.ts
├── metadata.ts
├── hashRecords.ts
├── compareRules.ts
├── reconstructionLogs.ts
├── sessionVariantResolver.ts
├── chapter03Triggers.ts
└── unknownMessages.ts
```

---

# 155. Version State建议

```ts
interface Chapter03State {
  unlockedVersions: string[]
  viewedVersions: string[]
  comparisons: string[]
  helpTopicsSeen: string[]

  originalVerified: boolean
  recoveredCopyChecked: boolean
  artifactFirstGenerationKnown: boolean
  recursionKnown: boolean
  sessionVariantKnown: boolean
}
```

---

# 156. Compare记录

```ts
interface PhotoComparison {
  left: string
  right: string
  modesSeen: ("side" | "overlay" | "difference")[]
}
```

---

# 157. Provenance Graph节点

```ts
interface ProvenanceNode {
  id: string
  label: string
  sourceType: string
  parents: string[]
  locked: boolean
  generation?: number
}
```

---

# 158. 事件触发示例：Original

```yaml
id: c03_original_verified

conditions:
  club_copy_seen: true
  hash_match_seen: true

once: true

effects:
  - SET_KNOWLEDGE:
      photo17_original_no_fourth_person: true
  - UNLOCK_EVIDENCE:
      E030
```

---

# 159. 事件触发示例：Reconstruction

```yaml
id: c03_reconstruction_origin

conditions:
  compare_2015_2016: true
  view_reconstruction_log: true

effects:
  - SET_KNOWLEDGE:
      human_first_appears_in_reconstruction: true
```

---

# 160. 事件触发示例：Recursion

```yaml
id: c03_recursion

conditions:
  compare_2016_2022: true
  generation_parent_seen: true

effects:
  - SET_KNOWLEDGE:
      reconstruction_uses_previous_generation: true
```

---

# 161. 事件触发示例：Session

```yaml
id: c03_session_dynamic

conditions:
  session_history_seen: true

effects:
  - SET_KNOWLEDGE:
      current_photo_is_dynamic_session_variant: true
```

---

# 162. Chapter完成事件

```yaml
id: c03_complete

conditions:
  photo17_original_no_fourth_person: true
  human_first_appears_in_reconstruction: true
  reconstruction_uses_previous_generation: true
  current_photo_is_dynamic_session_variant: true

effects:
  - unlock: SUBJECT_04_PHOTO17
  - unlock: recovery_environment
  - chapter_complete: 3
  - autosave: true
```

---

# 163. 真实程序错误

真实程序异常仍必须：

```text
Unexpected application error
Progress preserved
Reload
```

不能伪装：

```text
Corrupted Image
```

除非是剧情对象明确走游戏内ErrorRoute。

---

# 164. 图片加载失败的剧情表现

如果是剧情：

```text
Archive Image Missing
```

由数据状态控制。

不能依赖真的让图片404。

---

# 165. 性能要求

Photo17多版本：

```text
预加载缩略图
主图按需加载
```

避免版本切换时卡顿。

如果用户网络慢：

```text
使用正常加载占位
```

不要把慢加载误做恐怖。

---

# 166. Compare图片必须像同一张照片

这是美术QA最重要一条。

必须：

```text
同构图
同透视
同对象
```

否则玩家不会相信：

```text
这是版本差异
```

---

# 167. 不要把V1/V2做成重新生成的不同人物

人形位置、比例、朝向必须高度一致。

只允许：

```text
清晰度
结构稳定性
```

变化。

---

# 168. 20070823视觉差异

必须非常轻。

不能：

```text
颜色大变
裁切改变
```

否则不符合：

```text
普通JPEG重编码
```

---

# 169. 2015 Restore视觉差异

可以：

```text
暗部提亮
去噪
色彩稍稳定
```

但不能直接出现人形。

---

# 170. 2016 V1视觉目标

玩家应感觉：

> “这个轮廓开始像人。”

而不是：

> “那就是一个人。”

---

# 171. 2022 V2视觉目标

玩家：

> “系统已经把它当人了。”

但仍不知道：

```text
是谁
```

而这正是重点：

```text
系统不需要知道是谁，也能把结构强化成人。
```

---

# 172. Chapter 3角色存在感

林夏：

```text
几乎缺席
```

周然：

```text
极低
```

顾言：

```text
通过文件操作痕迹存在
```

Unknown：

```text
少量
```

真正主角：

```text
文件本身
```

---

# 173. 这样做的意义

前三章形成不同调查对象：

```text
Chapter1：
网页

Chapter2：
账号

Chapter3：
文件
```

不断扩展“数字考古”玩法。

---

# 174. Chapter 3结束后的玩家信任状态

理想：

```text
更信任来源链
更不信任单一展示
```

而不是：

```text
什么都不信
```

这是非常重要的区别。

---

# 175. 本章禁止的结论

不要让玩家以为：

```text
只要是ROOM生成的就完全没价值
```

ROOM重建版本仍可告诉玩家：

```text
ROOM后来做了什么
```

只是不能证明：

```text
2007发生了什么
```

---

# 176. Chapter 3主题句

可以内部作为编剧锚点：

> **“一个错误如果被下一次修复当成输入，它就不再只是错误，而会开始拥有历史。”**

这句不一定直接给玩家。

---

# 177. Chapter 3最终玩家问题

结束时脑中应该有：

```text
ROOM到底是什么？
为什么它会重建林夏的照片？
SUBJECT_04是什么？
为什么这些图要反复重建？
为什么Session要故意给我看不同版本？
backup里还有什么？
```

完美进入Chapter4。

---

# 178. 下一章入口文案

Recovery页面：

```text
Associated Environment Found

backup_20070823

Recoverable Components:

USER PROFILE
DOCUMENTS
PHOTO
MESSENGER CACHE
BROWSER HISTORY
CALENDAR
DELETED FILES
MEMORY
```

按钮：

```text
[Begin Recovery]
```

---

# 179. MEMORY状态

开Chapter4时：

```text
MEMORY
ERROR
```

不要Chapter3解释。

这会成为下一章重要钩子。

---

# 180. 下一份文档建议

正式进入：

```text
15_DESKTOP_RECOVERY_SYSTEM.md
```

先设计Chapter4的系统层：

```text
Recovery流程
Boot
Login
Desktop
Window Manager
File System
Messenger
Calendar
Gallery
Recycle Bin
Webamp
Terminal
```

然后：

```text
16_CHAPTER_04_SCRIPT.md
```

再写逐页面/逐文件/逐触发脚本。

---

# 181. 文档状态

```text
STATUS:
PLAYABLE SCRIPT v0.1
```

已锁定：

```text
Chapter3从IMAGE PROVENANCE入口开始
Current Session先于Original
原图通过DSC0017+Club Hash确认
8月23副本Hash不同但非局部插入
2015 Restore无第四人
2016 Reconstruction首次出现人形
2022递归强化
2026 Session记录真实玩家Photo View次数
Unknown进入Stage3
Subject04只作为受限引用出现
Chapter结束解锁Recovery Environment
```

---

# 182. 最终一句话

> Chapter 3 最重要的不是证明：
>
> **“照片是假的。”**
>
> 而是让玩家真正理解：
>
> **同一张照片，可以同时存在一个适合证明2007发生了什么的版本，和一个只适合证明ROOM后来做了什么的版本。**
>
> 从这一章开始，玩家真正需要调查的已经不再只是“内容”。  
>   
> 而是——  
> **来源。**
