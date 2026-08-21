# ROOM 404：互联网失踪档案
# 17_DESKTOP_FILES_CONTENT.md
## Chapter 04 桌面文件完整内容库 / Desktop Files Content Database

> 本文档负责补齐 `backup_20070823` 与 `ROOM Recovery Environment` 中玩家可直接打开的文件内容。
>
> 核心原则：
>
> ```text
> 文件内容可以是真实2007数据
> Recovery桌面本身则是2016以后构造的容器
> ```
>
> 所以每个文件都必须带有：
>
> ```text
> 内容
> 来源
> 原始时间
> 恢复时间
> 完整度
> 是否重建
> ```
>
> 玩家第一遍主要读“内容”。
>
> 深挖时才看“来源”。

---

# 0. 文件系统总体结构

Recovery Shell 显示：

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
├── notes/
├── drafts/
└── temp/
```

Raw View中不完全如此。

Recovery Shell 是后期整理结果。

---

# 1. 文件字段规范

```yaml
id:
display_name:
origin:
origin_time:
recovered_at:
source_type:
integrity:
reconstruction:
body:
```

source_type允许：

```text
ORIGINAL
RECOVERED
ALTERED
RECONSTRUCTED
GENERATED
SYSTEM
UNKNOWN
```

---

# 2. todo.txt

```yaml
id: file_todo_20070816
display_name: todo.txt
origin: backup_20070823
origin_time: 2007-08-16
source_type: RECOVERED
integrity: 1.0
reconstruction: none
```

正文：

```text
相机充电
把照片分一下
还周然那本书
问顾言网页空间
打印报名表
买空白光盘
把上个月的图刻一份
整理相册
17号活动
回来以后洗头

照片先别删
```

用途：

```text
80%普通生活
20%轻线索
```

不要把最后一行高亮。

---

# 3. todo.txt Source面板

```text
SOURCE TYPE:
RECOVERED_FILE

ORIGIN:
backup_20070823

RECONSTRUCTION:
NO

INTEGRITY:
100%
```

---

# 4. photo_list.txt

```yaml
id: file_photo_list_0817
origin_time: 2007-08-17 23:4x
source_type: RECOVERED
integrity: 0.96
```

正文：

```text
0817 gym

67 photos

web：
先选10-12张
不要设备间那几张

original：
顾言那边有

edit：
亮度可能要调
侧门那张太暗

不要直接覆盖
```

用途：

```text
证明林夏认同保留原图
强化67张照片
```

---

# 5. 0817.txt

```yaml
id: file_0817_note
origin_time: 2007-08-17 23:52
source_type: RECOVERED
integrity: 1.0
```

正文：

> 17号。  
>   
> 下午去体育馆。  
>   
> 一开始没什么。  
> 陈海还是一直拍人，周然一直催时间。  
> 顾言比我们早到。  
>   
> 设备间那些图不发可以。  
> 但为什么一定要删。  
>   
> 周然说意思一样。  
>   
> 我现在最烦这句话。  
>   
> 顾言那边有原来的。  
>   
> 明天再说。

---

# 6. 0817.txt 与 private.html 的关系

两者都来自林夏。

但不是同一份文本。

private.html更像：

```text
写给“可能没有人看”的完整叙述
```

0817.txt更像：

```text
本地整理用速记
```

不要让两者逐句一致。

---

# 7. diary.txt

定位：

```text
本地Diary索引 / 草稿入口
```

正文：

```text
[2007.07.28] 下雨
[2007.08.03] 原图
[2007.08.09] 公交车最后一排
[2007.08.12] 把页面改回去了

[drafts]
draft_0816
draft_0817
draft_0818
```

点击draft：

```text
部分不可恢复
```

---

# 8. draft_0816.txt

```yaml
id: file_draft_0816
source_type: RECOVERED
integrity: 0.72
```

正文：

> 明天去旧体育馆。  
>   
> 其实有点不想去。  
>   
> 不是因为活动。  
>   
> 最近跟某人说话太累。  
>   
> 每次我说“不是这个意思”，最后都会变成解释我为什么会这样想。  
>   
> 算了。  
>   
> 去拍照应该会好一点。

---

# 9. draft_0817.txt

```yaml
id: file_draft_0817
source_type: RECOVERED
integrity: 0.61
```

正文碎片：

```text
今天活动是17号。

...

原图先留着。

...

不是一定要发。

...

我就是不喜欢别人替我决定
什么算“没发生”。
```

这与private.html呼应。

---

# 10. draft_0818.txt

```yaml
id: file_draft_0818
source_type: RECOVERED
integrity: 0.38
```

正文：

```text
17号我没有出门。

...

写成这样以后看起来居然也挺像真的。

...

算了。
```

这一份是非常重要的林夏“主动制造错误记录”证据。

Chapter 4初版可先隐藏后半句。

---

# 11. draft_0818 Source

```text
SOURCE TYPE:
RECOVERED_FILE

CREATED:
2007-08-18 00:31

RECONSTRUCTION:
NO
```

这里非常重要：

```text
这是林夏真实写过的假话
不是ROOM生成
```

---

# 12. unsent.txt

```yaml
id: file_unsent_txt
origin_time: 2007-08-18 01:4x
source_type: RECOVERED
integrity: 0.84
```

正文：

> 如果以后有人看到这些东西，  
> 大概又会觉得我当时一定在想什么特别严重的事。  
>   
> 其实没有。  
>   
> 我只是很烦。  
>   
> 有些东西删了以后别人会自己补一个原因。  
>   
> 不删又会有人觉得留下来的就是答案。  
>   
> 先存着。  
>   
> 不发。

---

# 13. mail_unsent.eml

位于 Recycle Bin / Deleted Files。

```yaml
id: mail_unsent_0203
origin_time: 2007-08-18 02:03
source_type: RECOVERED
integrity: 0.69
```

Subject：

```text
如果以后有人看到
```

正文恢复：

> 如果以后有人看到这些东西，  
> 不要因为它们被留下来，就觉得那是我最后想说的话。  
>   
> 我没有“最后想说的话”。  
>   
> 至少现在没有。  
>   
> 我只是想离开一天。  
>   
> 不想解释。

最后：

```text
[fragment missing]
```

---

# 14. mail_unsent的意义

锁死：

```text
不是遗书
```

它甚至主动否定：

```text
“最后的话”
```

但仍透露：

```text
她确实想暂时离开熟悉环境
```

不要把“离开一天”扩成永久计划。

---

# 15. school.doc

```yaml
id: file_school_doc
source_type: RECOVERED
integrity: 1.0
```

内容：

```text
摄影社暑期活动

地点：
旧体育馆

日期：
8月17日

集合：
16:00

参与：
周然
林夏
顾言
陈海

备注：
许晓不来
```

下方：

```text
网页文案另改。
```

这是私人工作文档，不是正式公告。

---

# 16. school.doc的作用

再次证明：

```text
内部计划就是17号
```

但Chapter1已经足够确认。

这里只是世界一致性。

---

# 17. links.txt

内容：

```text
BlueMoon
http://bluemoon-forum.net/

学校
http://nc2ms.edu/

雨天收集站
http://rainbox.example/

旧城区照片馆
http://oldphoto.example/

Ran
http://ran-place.net/

GY test
http://...
```

纯环境。

---

# 18. music.txt

正文：

```text
Window Rain
track02
untitled
公交窗户录音
下雨
```

备注：

```text
网页BGM别忘了压小一点
```

---

# 19. notes/ 目录

```text
notes/
├── bus.txt
├── camera.txt
├── html.txt
├── ideas.txt
└── class.txt
```

---

# 20. bus.txt

```text
17路最近老晚点
31路最后一排窗户右边反光比较少
老城区晚上六点以后灯会亮
```

纯人物习惯。

---

# 21. camera.txt

```text
ISO高了真的很丑
夜景还是放东西上拍
不要老信自动模式
电池又不够
```

普通。

---

# 22. html.txt

```text
主页想改：
导航不要动
Diary宽一点
相册不要自动缩图
背景继续用原来的
```

后面：

```text
顾言说table早该换
不换
```

---

# 23. ideas.txt

```text
想拍：
雨后的学校
公交末班
旧体育馆里面
空的照相馆
站台最后一班车以后
```

这不是预知失踪。

只是摄影题材。

---

# 24. class.txt

普通：

```text
返校27号
英语作业
数学卷子
班主任说要交照片
```

---

# 25. temp/ 目录

```text
temp/
├── note1.txt
├── newfile.txt
├── test.txt
├── ~school.tmp
├── photo_tmp.jpg
├── index_old.htm
└── index_old2.htm
```

---

# 26. note1.txt

正文：

```text
买电池
```

必须保留这种无意义内容。

---

# 27. newfile.txt

空文件。

---

# 28. test.txt

```text
123
```

---

# 29. index_old.htm

旧首页版本。

可看到：

```text
标题位置不同
```

与Diary《把页面改回去了》呼应。

---

# 30. index_old2.htm

另一个失败布局。

林夏注释：

```html
<!-- 太丑了 -->
```

纯人物感。

---

# 31. Raw View中的文件映射

Recovery Shell：

```text
My Documents/todo.txt
```

Raw可能来自：

```text
R:\RAW\DOC\aa.txt
```

Recovery把它映射成：

```text
todo.txt
```

原因：

```text
文件内容/历史路径/索引识别
```

这体现UI重组。

---

# 32. 环境中的真实“新建文件夹”

Raw：

```text
新建文件夹
新建文件夹(2)
新建文件夹(3)
```

Recovery Shell却把其中内容拆入：

```text
Photos
Documents
Browser History
```

这很重要。

---

# 33. 文件Properties统一字段

```text
Name
Original Name
Origin Path
Source Type
Created
Modified
Recovered
Integrity
Reconstruction
```

---

# 34. 一个被重命名的例子

Recovery：

```text
0817.txt
```

Raw：

```text
note3.txt
```

但内容索引和历史记录推断为：

```text
0817
```

Source面板必须写：

```text
Display Name:
0817.txt

Original Name:
note3.txt
```

这会进一步打破：

```text
“桌面原样恢复”
```

---

# 35. 文件 Integrity

建议只内部和高级UI显示。

```text
1.00
0.84
0.61
```

不要当：

```text
真实性评分
```

只是：

```text
恢复完整度
```

---

# 36. Reconstructed文件

Chapter4只使用少量。

例如：

```text
summary_0817.txt
```

Source：

```text
RECONSTRUCTED
```

正文：

> 林夏于8月17日下午参加旧体育馆摄影活动，与周然发生争执后离开。

这句话“正确但过于整齐”。

玩家应发现：

```text
不是林夏写的
```

---

# 37. summary_0817.txt为什么存在

它是：

```text
ROOM为了Recovery环境方便浏览生成的摘要
```

而不是原文件。

---

# 38. summary_0817.txt标签

如果玩家打开：

页面顶部必须有：

```text
Generated Summary
```

不能故意假装原件。

这能体现ROOM不是每次都恶意隐瞒。

---

# 39. 但为什么仍危险

因为：

```text
它和真实文件放在同一个“我的文档”里
```

用户可能自然赋予同等权重。

这就是UI伦理问题。

---

# 40. Generated摘要语言

应该：

```text
太完整
太中性
太确定
```

例如：

> 林夏因与周然在照片删除问题上发生争执，对活动记录的修改产生不满。

真实林夏不会这样写。

---

# 41. 文件排序问题

Recovery默认排序：

```text
By Relevance
```

而不是：

```text
By Original Folder
```

这很重要。

Settings后可切：

```text
Original Order
```

玩家会发现结构完全不同。

---

# 42. By Relevance就是另一种“叙事”

系统把最相关的文件放前面。

玩家自然觉得：

```text
这些最重要
```

但“重要性”是系统判断。

---

# 43. 文件搜索

可搜：

```text
17号
原图
周然
顾言
删除
```

搜索结果按：

```text
Recovery Index
```

排序。

---

# 44. 搜“林夏”

不应返回：

```text
所有文件
```

因为她不会在自己文件里频繁写名字。

这也是现实感。

---

# 45. 搜“ROOM”

真实2007文件：

```text
0 results
```

SYSTEM文件：

```text
environment.manifest
recovery.log
```

后期出现。

---

# 46. 搜“404”

Chapter4：

```text
0或极少系统结果
```

Subject04阶段还没变404。

---

# 47. Deleted Files

建议：

```text
old_index.htm
draft_old.txt
mail_unsent.eml
photo_tmp.jpg
copy_of_copy.jpg
qqcache.dat
```

---

# 48. deleted ≠ intentionally erased evidence

每个需要：

```text
deletion_reason
```

可能：

```text
User Deleted
Temp Cleanup
Duplicate
Unknown
```

---

# 49. draft_old.txt

普通旧草稿：

```text
首页改版想法
```

没有案件秘密。

这是为了打破：

```text
“垃圾桶里必有真相”
```

---

# 50. copy_of_copy.jpg

只是重复文件。

---

# 51. qqcache.dat

不能直接打开。

Recovery Parser：

```text
Mapped into Messenger
```

这进一步证明Messenger是Viewer。

---

# 52. Desktop Files关键证据

建议：

```text
E050 draft_0818
E051 mail_unsent_0203
E052 raw_name_mapping
E053 generated_summary_example
E054 relevance_sort_policy
```

---

# 53. 本文件内容比例

```text
65%普通生活
20%人物塑造
10%来源机制
5%主线
```

---

# 54. Canonical Lock

以下锁定：

```text
0817.txt是真实恢复文件
draft_0818中“17号我没有出门”是真实林夏写的假话
mail_unsent不是遗书
todo/photo_list保留普通生活感
Raw目录比Recovery目录混乱
Recovery可重命名/映射文件显示名
Generated Summary必须明确标记Generated
Deleted Files不是秘密集中地
```

---

# 55. 最终一句话

> 玩家在桌面里看到的“文件夹结构”，本身就是 ROOM 对林夏留下的数据做出的第一层解释。
>
> 文件可能是真的。
>
> 但：
>
> **它为什么被放在这里、叫什么、排在第几个，本身也已经是一次叙述。**
