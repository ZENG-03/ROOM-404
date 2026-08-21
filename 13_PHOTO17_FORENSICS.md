# ROOM 404：互联网失踪档案
# 13_PHOTO17_FORENSICS.md
## Chapter 03《不存在的人》照片取证系统 / Photo Provenance Canon

> 本文档定义 `Photo 17 / DSC0017.JPG` 的**唯一版本链 Canon**，并建立 Chapter 03 的照片取证机制。
>
> 本文档不是单纯的图片设定，而是：
>
> ```text
> 原始文件
> +
> 复制链
> +
> EXIF
> +
> Hash
> +
> 网页压缩
> +
> ROOM恢复
> +
> Reconstruction Generation
> +
> 玩家取证玩法
> ```
>
> 的综合设计文档。
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

---

# 0. Chapter 03 基础信息

```yaml
chapter_id: chapter_03
title_cn: 不存在的人
title_en: The Person Who Wasn't There
estimated_playtime: 30-45 min
recommended_first_read: 14000-22000 chars
anomaly_start: 2
anomaly_end: 3
unknown_stage: 2-3
core_object: DSC0017.JPG
```

本章核心问题：

```text
Photo 17里的人是谁？
```

玩家一开始以为问题是：

> “第四个人是谁？”

本章真正要把问题改成：

> **“这个人到底是在哪一个版本里第一次出现的？”**

---

# 1. 本章唯一硬结论

Chapter 03结束时，玩家必须确认：

```text
1. DSC0017.JPG原图拍摄于2007-08-17 18:42
2. 原图中没有“第四个人”
3. 2007-08-23存在一份复制/重编码副本
4. 该副本中仍然没有第四个人
5. 人形第一次出现于后来的ROOM重建版本
6. 后续ROOM版本反复继承该人形特征
7. 2026玩家看到的Photo17并不是固定原图，而是动态选择的重建版本
```

玩家仍然不知道：

```text
ROOM全称
为什么ROOM要重建林夏
顾言参与ROOM的完整过程
第四个人为何被系统“认定”为人物
Subject404
```

---

# 2. Photo 17 最终版本链

锁定：

```text
PHOTO17_ORIGINAL
2007-08-17 18:42
DSC0017.JPG
无第四人

↓ Copy

PHOTO17_CLUB_COPY
2007-08-17 19:06
原始字节复制
无第四人

↓ Recovery / Export

PHOTO17_20070823_COPY
2007-08-23 04:06
复制 / 重编码
无第四人

↓ Web derivative

PHOTO17_WEB
2007-08 / later archived
缩放压缩
无明确第四人

↓ ROOM Restore

PHOTO17_ROOM_RESTORE
2015
去噪 / 色彩恢复
无明显第四人

↓ Reconstruction

PHOTO17_RECON_V1
2016-08-17
首次出现远处人形伪影

↓ Recursive Reconstruction

PHOTO17_RECON_V2
2022
人形更明确

↓ Session Variant

PHOTO17_SESSION
2026
根据访问次数/状态选择V0/V1/V2
```

---

# 3. 最重要的逻辑

第四个人不是：

```text
2007年被删掉的人
```

而是：

> **后来系统在“修复缺失内容”时创造出来的人。**

这必须成为Chapter 3的最大认知翻转。

---

# 4. 文件命名 Canon

林夏使用：

```text
Sony Cyber-shot
```

真实相机默认原图文件命名：

```text
DSC00xxx.JPG
```

因此：

```text
DSC0017.JPG
```

是真实原始链的合理名称。

---

# 5. 禁止使用的“原图名称”

不要把2007真实相机原图命名成：

```text
IMG_20070817_1842.JPG
IMG_0817_017.JPG
20270817_photo17.jpg
```

这些更像：

```text
后期导出
手机
现代软件
ROOM内部重命名
```

反而可以作为：

```text
来源异常
```

使用。

---

# 6. 文件名本身就是取证线索

例如玩家发现：

```text
DSC0017.JPG
```

和：

```text
IMG_0817_017.jpg
```

两份“Photo17”。

系统不会直接告诉玩家哪份是真的。

玩家通过：

```text
相机命名逻辑
EXIF
Hash
创建链
```

判断。

---

# 7. 原图 PHOTO17_ORIGINAL

```yaml
object_id: photo17_original
filename: DSC0017.JPG
source_type: ORIGINAL
capture_time: 2007-08-17T18:42:16+08:00
camera: Sony Cyber-shot
generation: 0
```

画面：

```text
旧体育馆侧门
黄昏
门框
墙面
暗处
少量器材/结构
```

明确：

```text
没有第四个人
```

---

# 8. 原图EXIF建议

内部可用：

```text
DateTimeOriginal:
2007:08:17 18:42:16

Make:
SONY

Model:
DSC-Wxx（可后续确定具体虚构/兼容型号）

ExposureTime:
1/60

FNumber:
2.8

ISO:
200

Flash:
Off

Orientation:
1
```

不要塞：

```text
GPS
```

2007普通卡片机不应拥有现代手机式完整GPS信息。

---

# 9. EXIF真实性原则

不要让EXIF像：

```text
上帝日志
```

它也可以：

- 被复制
- 被删除
- 被重写
- 被软件保留
- 被网页压缩剥离

所以玩家必须学：

> **EXIF是来源之一，不是绝对真理。**

---

# 10. 原图Hash

建议内部用：

```text
SHA-256
```

UI可以显示缩写：

```text
SHA256:
91f6...2a0c
```

不必让玩家手算。

---

# 11. 为什么Hash重要

如果两个文件：

```text
Hash相同
```

说明：

```text
字节完全相同
```

如果：

```text
Hash不同
```

只说明：

```text
文件字节不同
```

不自动说明：

```text
有人P图
```

这是Chapter 3必须教给玩家的核心。

---

# 12. 19:06 CLUB COPY

顾言在：

```text
2007-08-17 19:06
```

将SD卡内容复制到摄影社电脑：

```text
D:\PHOTO_CLUB\2007\0817_GYM\original\
```

Photo17：

```text
DSC0017.JPG
```

---

# 13. CLUB COPY性质

如果是纯文件复制：

```text
字节一致
Hash一致
```

因此：

```text
PHOTO17_ORIGINAL
=
PHOTO17_CLUB_COPY
```

只是：

```text
存储位置不同
```

---

# 14. 这份副本是关键

因为：

```text
相机SD卡原件后来可能不可得
```

但顾言的19:06副本：

```text
保留了原始字节
```

因此它成为后期最可靠的原图来源之一。

---

# 15. 玩家何时获得CLUB COPY

Chapter 3中不要直接给完整文件。

先通过：

```text
Archive Evidence
```

看到：

```text
Source:
Photo Club PC
Copied:
19:06
Hash:
matches camera record
```

后期才下载/查看原图。

---

# 16. 2007-08-23 COPY

```yaml
object_id: photo17_20070823_copy
filename: DSC0017.JPG
created_in_backup: true
source_type: RECOVERED
modified_at: 2007-08-23T04:06:00+08:00
generation: 0
```

这份：

```text
不是原始字节完全复制
```

因为恢复工具/导出流程：

```text
可能重新写入JPEG
```

所以：

```text
Hash不同
```

---

# 17. 这会制造玩家误导

玩家会看到：

```text
拍摄：
8月17日

修改：
8月23日
```

非常容易产生：

```text
“顾言在8月23日P了图”
```

这正是Chapter 3中期的合理误导。

---

# 18. 但8月23版本仍没有第四个人

锁死：

```text
PHOTO17_20070823_COPY:
NO FOURTH PERSON
```

这非常重要。

因为：

```text
顾言不能成为第四人伪影制造者
```

---

# 19. 为什么modified_at会变

可能原因：

```text
恢复
复制
导出
JPEG重编码
文件系统时间重写
```

玩家必须通过：

```text
像素对比
视觉内容
Source Log
```

判断。

---

# 20. 2007 WEB VERSION

林夏个人主页或社团网页使用：

```text
缩小后的JPEG
```

可能：

```text
800×600
质量70～80
EXIF剥离
```

文件名：

```text
photo17.jpg
```

或：

```text
p17.jpg
```

---

# 21. WEB版画质

由于：

```text
缩放
压缩
JPEG artifacts
暗部色块
```

门框附近可能出现：

```text
类似人形的噪点
```

但这仍然：

```text
不能构成真正第四人
```

---

# 22. 重要区别

WEB版可能：

```text
看起来像有东西
```

但只是：

```text
压缩噪声
```

ROOM后来可能将这些噪声误判为：

```text
“需要保留的结构”
```

这成为伪影来源之一。

---

# 23. 2008 Archive Snapshot

Web Archive抓到：

```text
低质量web图
```

不是原始DSC文件。

因此：

```text
Archive网页里看到的Photo17
≠
原始相机文件
```

这是玩家必须学会的。

---

# 24. Chapter 1玩家看到的Photo17是什么

不是直接：

```text
PHOTO17_ORIGINAL
```

而是：

```text
ROOM Archive在2026生成的展示版本
```

其源：

```text
历史web快照
+
后期ROOM版本选择
```

所以会发生：

```text
访问次数越多
人形越明显
```

---

# 25. 玩家第一章被“骗”的方式

不是游戏作弊。

而是：

```text
玩家误以为页面里的图片就是2007原图
```

实际上页面只写：

```text
Photo17
```

并没有承诺：

```text
Original File
```

这是公平误导。

---

# 26. 2015 ROOM RESTORE

```yaml
object_id: photo17_room_restore
year: 2015
source_type: RECONSTRUCTED
generation: 1
```

处理：

```text
去噪
锐化
亮度恢复
色彩重建
```

输入主要来自：

```text
2007 web derivative
+
2008 snapshot
+
2007 recovered copy metadata
```

---

# 27. 2015版本仍无明确第四人

门框暗区可能：

```text
出现纹理增强
```

但人眼不应明确认为：

```text
有人
```

---

# 28. 2016 RECON V1

时间：

```text
2016-08-17
```

系统开始：

```text
Image Completion / Context Reconstruction
```

不只是修复像素。

它试图回答：

> “缺失/模糊区域最可能是什么？”

---

# 29. 为什么会生成人形

输入中存在：

```text
JPEG块
门框
阴影
附近照片里有人
活动参与者语义
摄影社环境
```

模型推断：

```text
可能存在人物
```

然后生成：

```text
远处模糊人形
```

---

# 30. 这不是模型“看到隐藏的人”

而是：

> **模型用“最合理的东西”填了一个它认为不完整的区域。**

这是ROOM核心错误。

---

# 31. V1人形规范

视觉：

```text
非常远
无脸
无明确服装
近似纵向暗块
可能只是人
也可能不是
```

不能：

```text
清晰角色
可识别五官
```

---

# 32. 2016 V1内部标签

系统内部：

```text
human_probability: 0.41
```

低于正常确认阈值。

但重建引擎仍保存：

```text
feature_map
```

这就是后续问题。

---

# 33. 递归污染开始

下一次重建不是：

```text
Original → New
```

而是：

```text
Original
+
Previous Reconstruction
→ New
```

于是：

```text
V1的人形
```

成为：

```text
下一次的输入证据
```

---

# 34. 2022 RECON V2

```yaml
object_id: photo17_recon_v2
year: 2022
source_type: RECONSTRUCTED
generation: 7
```

系统：

```text
保留先前feature
增加结构连续性
```

结果：

```text
人形更加清楚
```

---

# 35. V2视觉规范

可以看出：

```text
肩
头部轮廓
站姿
```

但仍：

```text
无可识别面孔
```

---

# 36. 为什么Generation=7

不是必须精确模拟每一代。

意义：

```text
它已经被系统反复重建多次
```

玩家后期看到：

```text
GEN: 7
```

会第一次理解：

> 这不是一次修改，而是一条长期迭代链。

---

# 37. 2026 SESSION版本

```yaml
object_id: photo17_session
year: 2026
source_type: SYSTEM_VIEW
```

它不是固定图片。

根据：

```text
visit_count
anomaly_level
knowledge
```

选择：

```text
V0
V1
V2
```

---

# 38. Chapter 1版本映射

第一次：

```text
PHOTO17_SESSION_V0
```

接近：

```text
web / restored
```

第二次：

```text
PHOTO17_SESSION_V1
```

加入：

```text
远处模糊人形
```

第三次：

```text
PHOTO17_SESSION_V2
```

更加明显。

---

# 39. 这不是图片自己变化

幕后：

```text
NavigationService
+
AnomalyEngine
+
PhotoVersionResolver
```

选择不同版本。

---

# 40. PhotoVersionResolver建议

```ts
function resolvePhoto17Version(state) {
  if (state.chapter < 3) {
    if (state.photo17Visits <= 1) return "session_v0";
    if (state.photo17Visits === 2) return "session_v1";
    return "session_v2";
  }

  if (state.playerKnowledge.has("photo17_original_found")) {
    return state.selectedPhotoVersion;
  }

  return "session_v2";
}
```

Chapter 3之后：

```text
玩家获得版本选择权
```

这是重要成长。

---

# 41. Chapter 3入口

Chapter 2末尾：

```text
backup_20070823.zip
403

Identity dependency:
RESOLVED

Additional source required:
IMAGE PROVENANCE

Referenced:
DSC0017.JPG
```

按钮：

```text
Inspect Image Provenance
```

---

# 42. 第一页面：Photo Provenance Viewer

Route：

```text
/photo/forensics/DSC0017
```

UI：

```text
ROOM Image Provenance Viewer
```

左：

```text
图片
```

右：

```text
版本链
元数据
Hash
Source
```

---

# 43. 初始版本链只显示三项

```text
UNKNOWN SOURCE
↓
WEB COPY
↓
CURRENT VIEW
```

锁住：

```text
原始链
```

玩家需要逐步恢复。

---

# 44. 当前View

玩家打开时显示：

```text
SESSION VERSION
```

右侧：

```text
Source:
Composite

Generation:
Unknown
```

这第一次明确告诉玩家：

```text
当前看到的并不一定是单一文件
```

---

# 45. 玩家第一目标

不是：

```text
找第四个人
```

系统任务也不要写成任务。

自然问题：

```text
这个版本从哪来的？
```

---

# 46. Inspect Metadata

玩家点：

```text
Metadata
```

看到：

```text
Displayed Image:
800×600

Original Capture:
Unknown

Source:
Multiple archived objects
```

非常可疑。

---

# 47. “View Source Objects”

按钮：

```text
Source Objects: 5
```

但只有：

```text
2 unlocked
```

先显示：

```text
WEB_2007
ARCHIVE_2008
```

---

# 48. WEB_2007

页面：

```text
Resolution:
800×600

EXIF:
Stripped

Source:
linxia-home.net/photo/
```

图中：

```text
无明确第四人
```

但暗处噪点较重。

---

# 49. ARCHIVE_2008

网页快照版。

与WEB_2007几乎一样。

Hash不同：

```text
Archive wrapper / image encoding
```

但视觉相同。

---

# 50. 玩家第一次对比

工具：

```text
Overlay
Blink Compare
Difference Map
Zoom 200%
```

Chapter 3开始真正让玩家“取证”。

---

# 51. Compare不应太专业到吓退玩家

默认只给：

```text
Side by Side
Overlay slider
```

高级：

```text
Hash
EXIF
Difference
```

可选。

---

# 52. 玩家会发现

当前SESSION版：

```text
门框处有明显人形
```

WEB_2007：

```text
没有
```

这是本章第一冲击。

---

# 53. Event

```yaml
id: c03_first_version_difference
conditions:
  compared:
    - session
    - web2007
effects:
  knows_photo17_versions_differ: true
```

---

# 54. Unknown回应可选

Stage2：

> 你终于开始看它从哪里来的了。

这句可以。

不要：

```text
“你发现真相了”
```

---

# 55. 下一步：寻找原图

Provenance Viewer显示：

```text
Original Source:
Missing
```

但下方：

```text
Possible reference:
PHOTO_CLUB_2007
```

玩家点击：

```text
Search Archive
```

---

# 56. 搜索摄影社原始文件

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
```

### Result 2

```text
backup_20070823
DSC0017.JPG
```

### Result 3

```text
ROOM Reconstruction Object
Restricted
```

---

# 57. Photo Club File Index

Route：

```text
/archive/photo-club/20070817/index
```

显示：

```text
D:\PHOTO_CLUB\2007\0817_GYM\original\
```

文件：

```text
DSC0001.JPG
...
DSC0017.JPG
...
DSC0067.JPG
```

时间：

```text
Copied:
2007-08-17 19:06
```

---

# 58. 为什么67张很重要

与Master Timeline一致：

```text
17:11–18:47
约67张照片
```

说明：

```text
这个目录是完整活动副本
```

---

# 59. 原图访问权限

DSC0017：

```text
Preview available
Original bytes restricted
```

原因：

```text
当前Archive只持有校验记录/低级预览
```

后续通过：

```text
backup引用
```

解锁完整版本。

---

# 60. Hash Comparison

Photo Club Index：

```text
Camera/Card record hash:
91f6...2a0c

Club Copy hash:
91f6...2a0c
```

显示：

```text
MATCH
```

玩家学会：

```text
19:06副本与相机原始记录一致
```

---

# 61. Club Copy预览

画面：

```text
无第四人
```

这是第一个真正高置信度“无第四人”版本。

---

# 62. Evidence

```text
E030 Photo17 Club Copy
```

知识：

```text
knows_photo17_original_has_no_fourth_person
```

虽然严格说是：

```text
原始字节一致副本
```

所以足以当原图。

---

# 63. 玩家此时会怀疑

> 那第四个人是谁加进去的？

很好。

下一步：

```text
8月23副本
```

---

# 64. backup_20070823引用

回：

```text
backup
```

现在Photo provenance依赖满足一部分。

允许预览：

```text
Recovered File Metadata
```

---

# 65. 8月23副本页面

Route：

```text
/photo/forensics/DSC0017?version=20070823
```

显示：

```text
Filename:
DSC0017.JPG

Recovered:
2007-08-23 04:06

Original EXIF Date:
2007-08-17 18:42:16

Hash:
47ab...91d2

Hash Match Original:
NO
```

---

# 66. 这里故意制造嫌疑

玩家看到：

```text
Hash不同
8月23修改
顾言参与恢复
```

会怀疑：

```text
顾言改过图
```

这是Chapter 3中段主要红鲱鱼。

---

# 67. Difference Compare

将：

```text
Club Copy
```

和：

```text
20070823 Copy
```

对比。

工具结果：

```text
Global JPEG difference
No localized object insertion detected
```

简单UI：

```text
Differences distributed across entire image.
```

说明：

```text
像重编码
```

而不是：

```text
只在人物区域被P
```

---

# 68. Pixel差异教学

如果重编码：

```text
全图都有轻微差异
```

如果局部P图：

```text
特定区域差异明显
```

这是很好的可视化谜题。

---

# 69. 结论

2007-08-23：

```text
虽然Hash不同
但画面仍无第四人
```

因此：

```text
modified_at ≠ evidence of fabrication
```

这是本章重要教学。

---

# 70. Evidence

```text
E031 Photo17 2007-08-23 Recovered Copy
```

Flag：

```text
knows_20070823_copy_no_fourth_person
```

---

# 71. 顾言嫌疑暂时下降

不能自动：

```text
顾言清白
```

只说明：

```text
8月23副本不是第四人来源
```

---

# 72. 玩家下一问题

既然：

```text
2007原始
2007-08-23副本
```

都没有人，

那么：

> **人第一次出现在哪？**

这就是本章核心取证Puzzle 2。

---

# 73. Version History解锁

Provenance Viewer新增：

```text
Later Processing
```

版本：

```text
2015 Restore
2016 Reconstruction
2022 Reconstruction
2026 Session
```

其中：

```text
2016+
```

最初权限部分锁。

---

# 74. 2015 ROOM RESTORE页面

Route：

```text
/photo/forensics/DSC0017?version=2015
```

UI仍不解释ROOM全称。

只写：

```text
ROOM Image Restore
Build 2015.08
```

处理：

```text
noise reduction
contrast recovery
color estimation
```

---

# 75. 2015版本视觉

仍：

```text
没有明确第四人
```

门框暗部：

```text
纹理比原图更亮
```

---

# 76. 玩家可Compare

```text
2007 Web
vs
2015 Restore
```

Difference：

```text
整图
暗部增强
```

正常修复。

---

# 77. 2015版本Metadata

```text
Source:
WEB_2007
ARCHIVE_2008
RECOVERED_20070823

Mode:
RESTORE

Generation:
2
```

这里第一次出现：

```text
Generation
```

但不解释太多。

---

# 78. 2016 Reconstruction

Route：

```text
/photo/forensics/DSC0017?version=2016
```

状态：

```text
Partially restricted
```

玩家满足：

```text
compared_2015_restore = true
```

后开放。

---

# 79. 2016 metadata

```text
Process:
CONTEXT RECONSTRUCTION

Date:
2016-08-17

Generation:
3

Input:
2015 Restore
WEB_2007
Context Set: PHOTO_CLUB
```

这是第一次明确：

```text
不是Restore
而是Reconstruction
```

---

# 80. Restore vs Reconstruction

UI帮助：

```text
RESTORE
Attempts to recover visible information.

RECONSTRUCTION
May infer missing or ambiguous content.
```

这一行非常关键。

---

# 81. 玩家打开2016 V1

第一次真正看到：

```text
远处模糊人形
```

位置与Chapter1第二次看到一致。

---

# 82. 关键Event

```yaml
id: c03_first_human_artifact
conditions:
  viewed_2016_recon: true
  knows_20070823_copy_no_fourth_person: true
effects:
  knows_human_first_appears_after_2015: true
```

---

# 83. 玩家可能得出

```text
ROOM加的人
```

但还不知道：

```text
为什么
```

---

# 84. Reconstruction Log Fragment

可查看：

```text
Feature detected:
vertical structure

Candidate:
human / doorway / shadow

Human probability:
0.41

Action:
retain contextual feature
```

这是一条非常关键的技术证据。

---

# 85. “retain contextual feature”

玩家以后会发现：

```text
这是递归污染起点
```

---

# 86. 2022 V2

解锁条件：

```text
2016 log_seen
```

显示：

```text
Generation:
7
```

画面：

```text
人形更明确
```

---

# 87. 2022 Metadata

```text
Source:
Previous Reconstruction
+
Archive Sources

Consistency:
0.86

Feature Persistence:
High
```

这里玩家会第一次意识：

```text
系统把自己的旧版本作为输入
```

---

# 88. 关键Compare

2016 V1：

```text
模糊人形
```

2022 V2：

```text
更清晰
```

但：

```text
2007 Original无
```

因果链很清楚。

---

# 89. Recursion Evidence

```text
E032 Reconstruction Recursion
```

Flag：

```text
knows_reconstruction_uses_previous_generation
```

---

# 90. Unknown Stage3进入条件

```text
knows_human_first_appears_after_2015
AND
knows_reconstruction_uses_previous_generation
```

Unknown：

> 你一直在问那个人是谁。  
> 你还没问过他是什么时候开始存在的。

这是Chapter 3最核心Unknown台词。

---

# 91. 玩家回复“2016”

Unknown：

> 这是你现在找到的最早版本。

注意：

```text
不替玩家断言绝对最早
```

---

# 92. 回复“他不存在”

Unknown：

> 在哪一个版本里？

非常ROOM。

---

# 93. 回复“假的”

Unknown：

> 这个词太简单了。

然后：

> 它确实存在于后来的文件里。

这句话很好。

---

# 94. “假的”主题复杂化

第四人：

```text
不是2007事实
```

但：

```text
作为2016以后数字对象
它确实存在
```

玩家必须理解：

> “不存在于原事件” 与 “不存在于任何记录” 是两回事。

---

# 95. 2026 SESSION来源揭露

当玩家完成：

```text
2007
2015
2016
2022
```

Version Viewer显示：

```text
CURRENT SESSION
```

Source：

```text
Dynamic Presentation
```

规则：

```text
Variant selected by session state.
```

---

# 96. 玩家发现第一章图片为什么变化

UI：

```text
Session Variant History

View #1 → Restore Variant
View #2 → Reconstruction V1
View #3 → Reconstruction V2
```

这是第一次直接承认：

```text
系统根据访问次数换了图
```

---

# 97. 这会让玩家重新理解Unknown

Unknown说过：

```text
你又回去了
```

现在玩家知道：

```text
系统确实在记录访问次数
```

不需要现实隐私。

---

# 98. Session History Evidence

```text
E033 Photo17 Session Variant Log
```

内容：

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

---

# 99. 玩家此时可能感到被操纵

这正是目的。

但系统并没有：

```text
伪造2007原始记录
```

它只是：

```text
展示了不同来源层
```

却没有一开始明确说明。

伦理问题由此开始。

---

# 100. 本章核心Puzzle 1：原图识别

目标：

```text
判断哪个版本最接近原始
```

工具：

```text
file naming
hash
EXIF
copy log
```

---

# 101. Puzzle 1正确链

```text
DSC0017.JPG
Camera record
↓
19:06 Club Copy
Hash Match
↓
Original bytes confirmed
```

---

# 102. Puzzle 2：8月23是否被P

玩家看：

```text
Hash不同
modified date
```

容易怀疑。

解决：

```text
全图JPEG diff
Source log
no localized insertion
```

结论：

```text
重编码，不是人形植入
```

---

# 103. Puzzle 3：第四人第一次出现

玩家逐版本比较：

```text
2007 Original
2007 Copy
2015 Restore
2016 Recon
2022 Recon
```

结论：

```text
2016 Reconstruction
```

---

# 104. Puzzle 4：为什么越来越清楚

查看：

```text
Generation
Input Sources
Feature Persistence
```

结论：

```text
Previous Reconstruction成为下一代输入
```

---

# 105. Puzzle 5：为什么第一章图片会变化

查看：

```text
2026 Session Variant Log
```

结论：

```text
动态展示
```

---

# 106. Chapter 3主线流程

推荐：

```text
Chapter2 backup403
↓
IMAGE PROVENANCE
↓
Photo17 Viewer
↓
Current Session vs Web2007
↓
发现版本不同
↓
搜索DSC0017
↓
Photo Club Index
↓
19:06 Hash Match
↓
确认原图无第四人
↓
8月23 recovered copy
↓
Hash不同
↓
怀疑顾言
↓
JPEG Diff
↓
排除局部插入
↓
2015 Restore
↓
2016 Reconstruction
↓
第一次人形
↓
2022 Generation7
↓
递归污染
↓
2026 Session Log
↓
发现系统根据访问次数换图
↓
Unknown Stage3
↓
Chapter End
```

---

# 107. 本章不要立刻解释ROOM是什么

页面可以出现：

```text
ROOM Image Restore
ROOM Reconstruction
```

但不展开全称。

玩家此时只知道：

```text
ROOM不是单纯Archive前端
```

---

# 108. Chapter标题出现

建议当玩家第一次Compare：

```text
WEB_2007
vs
SESSION_CURRENT
```

看到：

```text
人形只在当前版存在
```

后，

淡出：

```text
CHAPTER 03
不存在的人
```

---

# 109. “不存在的人”不是字面超自然

后期玩家会理解：

```text
这个人不存在于2007现实
```

但：

```text
存在于后来的数字版本
```

标题因此双重成立。

---

# 110. Photo 03/08/17/21第四人分布

Master Timeline设定：

```text
后来ROOM重建中
多个照片出现类似人形
```

本章可以在支线里发现：

```text
Photo03
Photo08
Photo21
```

也有相似轮廓。

玩家一度可能认为：

```text
真的有第四个人被所有照片抹掉
```

---

# 111. 但这些也都是后期重建版

原图中：

```text
没有固定第四人
```

这进一步证明：

```text
不是单张P图
而是模型模式
```

---

# 112. “第四个人”称呼来源

玩家/论坛后期调查者可以称：

```text
第四个人
```

系统内部称：

```text
human-like reconstruction artifact
```

顾言从不主动叫：

```text
第四个人
```

---

# 113. Chapter 3支线：第四人跨照片

页面：

```text
Similar Features Detected
```

列：

```text
Photo03
Photo08
Photo17
Photo21
```

相似度：

```text
0.62
0.71
0.89
0.68
```

玩家可能误以为：

```text
同一个人
```

---

# 114. 后期揭示

其实：

```text
系统使用相似feature embedding
```

所以不同照片生成：

```text
类似轮廓
```

不是：

```text
同一个真实人物
```

---

# 115. 第四人不能有明确身份

禁止：

```text
第四人=某个同学
第四人=顾言
第四人=未来玩家
第四人=林夏自己
```

Canon：

```text
不是真实2007人物
```

---

# 116. 第四人的视觉设计

必须：

```text
模糊
中性
不具标志性
```

不能：

```text
戴独特帽子
穿固定红衣
有可识别脸
```

否则玩家会自然去找“谁”。

而Chapter 3真正要让问题从：

```text
who
```

转为：

```text
when / source
```

---

# 117. Hash UI设计

普通玩家：

```text
MATCH
DIFFERENT
```

高级玩家展开：

```text
SHA-256
```

避免门槛太高。

---

# 118. EXIF UI设计

默认显示：

```text
Capture Time
Camera
Resolution
```

Advanced：

```text
完整EXIF
```

---

# 119. Difference Map

推荐：

```text
热区显示
```

但不要颜色太“黑客”。

可以：

```text
灰阶差异
```

或：

```text
透明叠层
```

---

# 120. 不建议让玩家手动Photoshop

可以借鉴JS Paint概念，

但首版只需：

```text
zoom
overlay
brightness
contrast
difference
```

足够。

---

# 121. “亮度拉高发现鬼脸”禁止

太传统。

亮度工具应该：

```text
帮助看清纹理/人形差异
```

但核心结论仍来自：

```text
版本链
```

---

# 122. 本章Evidence列表

```text
E030 Photo17 Original/Club Copy
E031 2007-08-23 Recovered Copy
E032 Reconstruction Generation Chain
E033 Session Variant Log
E034 2016 Artifact Log
E035 2022 Feature Persistence
E036 Photo03/08/21 Similar Reconstruction
```

---

# 123. PlayerKnowledge

```ts
knows_photo17_original_no_fourth_person
knows_20070823_copy_no_fourth_person
knows_hash_difference_not_proof_of_edit
knows_human_first_appears_in_reconstruction
knows_reconstruction_uses_previous_generation
knows_current_photo_is_dynamic_session_variant
knows_fourth_person_not_2007_original
```

---

# 124. 本章Belief

可暗中追踪：

```text
suspect_guyan
trust_metadata
trust_visual
trust_archive
trust_room
```

---

# 125. 如果玩家高度怀疑顾言

当8月23Hash不同：

Unknown不要马上替他洗白。

可以：

> 你终于找到了一个不同的Hash。

等玩家自己对比。

---

# 126. 如果玩家确认是重编码

Unknown：

> 不同，不一定意味着被改成了你看到的那个样子。

很好。

---

# 127. 如果玩家高度相信“眼见为实”

Unknown：

> 你第一次看到的也不是原图。

非常适合。

---

# 128. 如果玩家反复看第四人

Unknown：

> 你一直在看他。  
> 你有没有看过没有他的版本？

这句可以作为Hint。

---

# 129. 本章重要伦理提示

ROOM展示：

```text
SESSION_CURRENT
```

时没有在第一章明显标明：

```text
RECONSTRUCTED
```

这就是：

```text
系统设计缺陷/伦理问题
```

不是：

```text
恶意鬼故事
```

---

# 130. 玩家此时会第一次不信任ROOM Archive

Chapter 1：

```text
Archive是工具
```

Chapter 2：

```text
Archive能帮找真相
```

Chapter 3：

```text
Archive自己也在改变展示内容
```

信任结构开始崩塌。

---

# 131. 本章结束条件

最低：

```text
knows_photo17_original_no_fourth_person
AND
knows_human_first_appears_in_reconstruction
AND
knows_reconstruction_uses_previous_generation
```

推荐：

```text
knows_current_photo_is_dynamic_session_variant
```

---

# 132. Chapter End 页面

Provenance Viewer最终显示：

```text
PROVENANCE SUMMARY

2007 ORIGINAL
No human figure

2007 RECOVERED COPY
No human figure

2015 RESTORE
No confirmed human figure

2016 RECONSTRUCTION
Human-like feature introduced

2022 RECONSTRUCTION
Feature reinforced

2026 SESSION
Dynamic reconstruction variant
```

下方：

```text
Original event evidence:
UNCHANGED

Reconstruction history:
CONTAMINATED
```

“CONTAMINATED”可以使用。

---

# 133. 不要写

```text
“第四个人是假的。”
```

更准确：

```text
No evidence of the figure in original 2007 source.
```

这保持档案语气。

---

# 134. Chapter 3最后Unknown

> 现在你知道他不是从照片里消失的。  
>   
> 他是后来才进去的。

这是可以稍微文学一点的高潮句。

但建议只在玩家已经完成所有硬证据后出现。

---

# 135. 另一版更克制

> 原图里没有他。

停顿。

> 后来的版本有。

更符合Unknown。

推荐使用后者。

---

# 136. Chapter 3结束钩子

Version Chain最底部出现：

```text
ROOM Reconstruction Project

Object:
SUBJECT_04 / PHOTO17

Access:
Restricted
```

这是第一次出现：

```text
SUBJECT_04
```

不要解释。

---

# 137. 玩家点击SUBJECT_04

```text
403
```

提示：

```text
Environment reconstruction available through associated backup.
```

关联：

```text
backup_20070823.zip
```

这终于把玩家带回：

```text
Chapter 1章尾的backup
```

---

# 138. Chapter 4入口

backup页面：

```text
Identity dependency:
RESOLVED

Image provenance:
RESOLVED

Recovery environment:
AVAILABLE
```

按钮：

```text
Open Recovery Environment
```

下一章：

```text
恢复
```

进入假桌面。

---

# 139. 这条长线很重要

Chapter 1：

```text
发现backup
但打不开
```

Chapter 2：

```text
解决身份引用
```

Chapter 3：

```text
解决图片来源
```

Chapter 4：

```text
终于进入backup
```

玩家会觉得：

```text
自己真正“挣到了”这个桌面
```

而不是剧情随便丢给他。

---

# 140. Chapter 3字数预算

建议：

| 模块 | 字数 |
|---|---:|
| Provenance UI | 1,500 |
| 原图/EXIF/Hash说明 | 2,000 |
| 2007副本 | 1,500 |
| 8月23副本 | 2,000 |
| 2015 Restore | 1,500 |
| 2016 Reconstruction | 2,000 |
| 2022递归链 | 2,000 |
| Session Log | 1,500 |
| Similar Photos | 1,500 |
| Unknown | 500 |
| Help/取证说明 | 1,000 |
| **总计** | **约17,000** |

深度探索：

```text
22,000～26,000字
```

---

# 141. 视觉资产需求

必须制作：

```text
Photo17_original
Photo17_web
Photo17_20070823
Photo17_restore_2015
Photo17_recon_v1
Photo17_recon_v2
```

至少：

```text
6张同构图版本
```

---

# 142. 版本制作原则

所有版本：

```text
构图必须完全一致
```

区别：

```text
压缩
亮度
噪点
细节
人形
```

不能：

```text
相机角度变化
门位置变化
```

否则像重新生成不同照片。

---

# 143. 2007 Original视觉

```text
自然噪声
偏暗
低动态范围
2007卡片机感
```

不要故意做VHS。

---

# 144. Web版

```text
更糊
JPEG块明显
尺寸更小
```

---

# 145. 2007-08-23

与原图：

```text
视觉近似
```

仅：

```text
重编码损失
```

---

# 146. 2015 Restore

```text
更亮
更干净
暗部被提起
```

但不应“过度AI”。

---

# 147. 2016 V1

人形：

```text
10～20%可确认感
```

---

# 148. 2022 V2

人形：

```text
50～70%可确认感
```

仍无脸。

---

# 149. 2026 Session

根据：

```text
用户状态
```

展示V1/V2。

Chapter3开始后，玩家可手动切版本。

---

# 150. 相似照片资产

Photo03/08/21：

只需：

```text
后期重建版出现类似人形轮廓
```

原图无。

不要做得比Photo17更强。

---

# 151. Photo17为何成为核心

因为：

```text
它的构图空白
暗部
门框
```

最容易产生：

```text
人形补全
```

并且：

```text
时间18:42
```

处于争执前后关键窗口。

所以ROOM给它更高权重。

---

# 152. 但不要让18:42变神秘数字

只是：

```text
拍摄时间
```

不是密码。

---

# 153. 原图来源可靠性分级

推荐：

```text
Camera/Club Hash Match:
VERY HIGH

2007-08-23 Recovered:
HIGH

2007 Web:
MEDIUM

2008 Archive:
MEDIUM

2015 Restore:
LOW for pixel truth

2016+ Reconstruction:
NOT VALID for original event content
```

---

# 154. 玩家可以查看“Reliability”

但用：

```text
Source Reliability
```

而不是：

```text
真假评分
```

---

# 155. 关键开发数据结构

```ts
interface PhotoVersion {
  id: string
  objectId: string

  filename: string
  date: string

  sourceType:
    | "ORIGINAL"
    | "COPY"
    | "RECOVERED"
    | "WEB_DERIVATIVE"
    | "RESTORED"
    | "RECONSTRUCTED"
    | "SESSION"

  generation: number

  hash?: string
  exif?: Record<string, string>

  parents: string[]

  containsFourthFigure: boolean
}
```

---

# 156. Version Graph

```ts
PHOTO17_ORIGINAL
  ├─ PHOTO17_CLUB_COPY
  └─ PHOTO17_WEB
        └─ ARCHIVE_2008
             └─ ROOM_RESTORE_2015
                  └─ RECON_V1_2016
                       └─ ...
                            └─ RECON_V2_2022
                                 └─ SESSION_2026

PHOTO17_20070823_COPY
  └─ metadata/context input into ROOM
```

---

# 157. 不要把版本链做成纯线性

很重要。

真实应该是：

```text
多个来源汇合
```

这比：

```text
A→B→C
```

更像真正数字档案。

---

# 158. UI可以显示DAG

简单：

```text
节点
箭头
```

不需要复杂图编辑器。

---

# 159. 版本Graph的视觉意义

玩家会第一次看到：

```text
2026当前图
其实有很多“父对象”
```

这为ROOM后期人格模型：

```text
多来源人格
```

做视觉预演。

---

# 160. Photo Forensics Help

必须有一页帮助：

```text
What is Hash?
What is EXIF?
What is a Derived Image?
What is Reconstruction?
```

语言简洁。

---

# 161. Hash帮助文案

> Hash可以用于判断两个文件的字节内容是否完全一致。  
> Hash不同并不自动意味着图像被人为篡改；重新保存、压缩或修改元数据都可能改变文件内容。

---

# 162. EXIF帮助文案

> EXIF是相机或图像软件写入文件的元数据。  
> 它可以帮助判断拍摄时间与设备信息，但也可能在复制、导出或编辑时丢失或被改写。

---

# 163. Reconstruction帮助

> Reconstruction并不保证只恢复原始像素。  
> 当输入数据不足时，系统可能依据上下文推测缺失内容。

这句是大伏笔。

---

# 164. Chapter 3中的程序提示不要过度教学

玩家若懂：

```text
可直接看数据
```

玩家不懂：

```text
Help可点
```

不要强制弹教程框。

---

# 165. 取证谜题公平性

所有结论必须可从：

```text
游戏内工具
```

完成。

不要求玩家：

```text
外部下载图片
用真实ExifTool
用Photoshop
查真实Sony型号
```

可以奖励懂行玩家，但不能依赖。

---

# 166. 本章实际开发优先级

P0：

```text
Photo Provenance Viewer
Version List
Side by Side Compare
Original Club Copy
20070823 Copy
2015
2016
2022
Session History
```

P1：

```text
Hash UI
EXIF UI
Difference Map
Similar Photos
Unknown
```

P2：

```text
高级Metadata
导出报告
隐藏日志
```

---

# 167. QA路径A

标准：

```text
Session
→ Web
→ Original
→ 20070823
→ 2015
→ 2016
→ 2022
→ Session Log
```

必须通。

---

# 168. QA路径B

先搜DSC0017：

```text
Original
→ 20070823
→ Current
→ 2016
```

也通。

---

# 169. QA路径C

玩家高度怀疑顾言：

```text
20070823
→ Hash Different
→ Diff Map
→ Source Log
```

能自己纠正。

---

# 170. QA：Hash

Original / Club：

```text
MATCH
```

20070823：

```text
DIFFERENT
```

不能搞错。

---

# 171. QA：第四人出现版本

严格：

```text
2007 Original: NO
2007 Club: NO
2007-08-23: NO
2007 Web: NO confirmed
2015: NO confirmed
2016: YES artifact
2022: YES stronger
2026: dynamic
```

---

# 172. QA：EXIF

2007 Original：

```text
18:42:16
```

20070823副本：

```text
EXIF OriginalDate仍可保留18:42:16
文件系统modified不同
```

这要区分：

```text
File Modified
vs
DateTimeOriginal
```

---

# 173. QA：时间区

统一：

```text
UTC+8
```

---

# 174. QA：生成标签

2016以后必须：

```text
source_type = RECONSTRUCTED
```

但第一章UI曾隐藏/弱化该来源。

Chapter3必须能追溯。

---

# 175. QA：Current Session

玩家刷新后：

```text
session variant log保留
```

但不继续无限升级人形。

最大：

```text
V2
```

Chapter3后玩家手动选择。

---

# 176. Chapter 3结束后的系统变化

Photo页面新增：

```text
View Provenance
```

所有重要照片都可用。

这让：

```text
取证系统从一次谜题变成长期工具
```

很重要。

---

# 177. 后续玩家可以检查其他照片

并发现：

```text
有的只是一张普通原图
有的有重建版本
```

不是每张都异常。

---

# 178. 防止“所有图片都不可信”

玩家最终应该学：

```text
来源决定用途
```

而不是：

```text
所有东西都是假的
```

这两者完全不同。

---

# 179. Chapter 3对ROOM的第一次真正质疑

问题不是：

```text
ROOM会不会造假
```

而是：

> **ROOM是否把“推测”展示得太像“恢复结果”？**

这是后续伦理冲突的入口。

---

# 180. 顾言在本章的作用

玩家看到：

```text
8月23
顾言
Hash不同
```

会怀疑。

最终发现：

```text
第四人不是他加的
```

但不要提前告诉：

```text
他后来参与ROOM
```

Chapter4/5再说。

---

# 181. 周然在本章退居次要

不需要继续堆周然线索。

这样故事自然：

```text
从人际嫌疑
↓
转向数字来源
```

---

# 182. 林夏在本章的“缺席”

很重要。

她几乎不新增说话。

本章主要调查：

```text
关于她的一张照片
```

这让玩家体验：

> **一个人不说话以后，系统和其他人开始替她解释。**

---

# 183. Chapter 3最终主题

Chapter1：

```text
记录可以被改日期
```

Chapter2：

```text
身份可以分成多个账号
```

Chapter3：

```text
图像可以产生多个现实版本
```

一步步推进：

```text
事实
身份
感知
```

---

# 184. 最终核心句

Unknown：

> 原图里没有他。  
> 后来的版本有。

Archive：

```text
Human-like feature introduced:
2016 Reconstruction
```

玩家结论：

> “第四个人不是被删掉的。  
> 是被补出来的。”

这是Chapter3收束。

---

# 185. Canonical Lock

以下锁定：

```text
Photo17真实原始文件名为DSC0017.JPG
拍摄时间2007-08-17 18:42:16
原图无第四人
19:06顾言复制完整原始文件，Hash匹配
8月23恢复副本Hash不同但仍无第四人
Web版本为低质量衍生图
2015 ROOM Restore无明确第四人
2016 Reconstruction首次产生人形伪影
2022后人形因递归重建更清晰
2026 Photo17页面动态选择重建版本
第四个人不是2007真实人物
Hash不同不等于人为伪造
EXIF不是绝对真相
```

---

# 186. 禁止后续破坏

不要：

```text
后面又证明原图其实有人
让顾言在8月23把人P进去
让第四人变成真实失踪者
让第四人成为未来玩家穿越
让Sony原图突然使用现代IMG命名
让EXIF直接写ROOM信息
```

---

# 187. 下一步文档

建议下一份：

```text
14_CHAPTER_03_SCRIPT.md
```

将本文件转为：

```text
逐页面
逐点击
逐触发
```

的完整Chapter3可玩脚本。

之后：

```text
15_DESKTOP_RECOVERY_SYSTEM.md
```

正式建立Chapter4的：

```text
Recovery
Fake Desktop
Files
Messenger
Calendar
Recycle Bin
Webamp
Terminal
```

---

# 188. 文档状态

```text
STATUS:
FORENSICS CANON + CHAPTER FRAMEWORK v0.1
```

---

# 189. 最终一句话

> 玩家一开始以为，Photo 17 的问题是：
>
> **“照片里多出来的那个人是谁？”**
>
> Chapter 3结束时，他应该明白真正的问题其实是：
>
> **“为什么一个从未出现在原图里的人，会在一次又一次‘修复’之后，变得比原来的噪点还要真实？”**
