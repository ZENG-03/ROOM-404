# ROOM 404：互联网失踪档案
# 07_CHAPTER_01_SCRIPT.md
## Chapter 01《八月十七日》可玩脚本 / Playable Script Canon

> 本文档是 ROOM 404 第一章的**可直接开发脚本**。  
> 它不是纯剧情提纲，而是：
>
> ```text
> 页面
> +
> 路由
> +
> 玩家行为
> +
> 文本
> +
> 线索
> +
> 异常
> +
> 事件触发
> +
> 失败保护
> ```
>
> 的综合实现文档。
>
> 本章必须遵守：
>
> - `01_MASTER_TIMELINE.md`
> - `02_ROOM_TRUTH.md`
> - `03_LINXIA_CHARACTER.md`
> - `04_ZHOURAN_CHARACTER.md`
> - `05_GUYAN_CHARACTER.md`
> - `06_UNKNOWN_RULES.md`

---

# 0. Chapter 信息

```yaml
chapter_id: chapter_01
title_cn: 八月十七日
title_en: August 17
estimated_playtime: 15-25 min
recommended_first_read: 8000-12000 chars
anomaly_start: 0
anomaly_end: 1
unknown_max_messages: 3
```

---

# 1. 本章目标

玩家在第一章结束时，**不能知道林夏为什么失踪**。

玩家只应该确认一件事：

> **2007 年 8 月17日确实发生过一场摄影社活动，而且后来有人把公开记录修改成了 8 月18日。**

第一章正确结论：

```text
“日期被改过。”
```

错误但允许玩家产生的结论：

```text
“周然很可疑。”
“学校在掩盖什么。”
“顾言知道更多。”
“林夏自己也在撒谎。”
“Photo 17里好像多了一个人。”
```

本章绝不能直接揭示：

```text
ROOM全称
Subject 404
Subject 405
第四个人是重建伪影
顾言后来参与ROOM
林夏18日真正离开时间
```

---

# 2. 玩家体验曲线

本章节奏：

```text
正常
↓
怀旧
↓
调查兴趣
↓
轻微矛盾
↓
第一次“这不对”
↓
第一次异常
↓
第一次Unknown
↓
获得隐藏页
↓
章节结束
```

恐怖强度：

```text
0 0 0 1 1 2 2 3
```

不要突然爆到：

```text
8
```

---

# 3. 本章页面总表

建议第一章开放页面：

```text
/
│
├─ /search?q=林夏
│
├─ /archive/20070812/linxia-home.net/
│   ├─ /site/2007/linxia
│   ├─ /site/2007/linxia/diary
│   ├─ /site/2007/linxia/photo
│   ├─ /site/2007/linxia/photo/17
│   ├─ /site/2007/linxia/guestbook
│   └─ /site/2007/linxia/links
│
├─ /site/2003/nc2ms
│   ├─ /site/2003/nc2ms/news
│   ├─ /site/2003/nc2ms/clubs/photo
│   ├─ /site/2003/nc2ms/photo
│   └─ /site/2003/nc2ms/guestbook
│
├─ /archive/20070815/nc2ms.edu/photo-event
├─ /archive/20070819/nc2ms.edu/photo-event
│
├─ /system/404
│
└─ /site/2007/linxia/0817/private
```

第一章结束时新解锁：

```text
backup_20070823.zip
```

但不进入 Desktop。

---

# 4. 玩家主流程

推荐主路径：

```text
ROOM Archive
↓
搜索「林夏」
↓
林夏个人主页
↓
Diary
↓
Photo
↓
Photo 17
↓
Guestbook
↓
Links
↓
学校官网
↓
摄影社
↓
活动公告
↓
Archive旧版本
↓
发现17 / 18矛盾
↓
返回Photo 17
↓
Photo 17出现轻微变化
↓
Unknown第一次出现
↓
失效友情链接
↓
404
↓
玩家修改URL / 使用Archive建议
↓
进入 /0817/private
↓
确认“活动确实是17号”
↓
发现 backup_20070823.zip
↓
Chapter 1 END
```

---

# 5. 开场：ROOM Archive 首页

Route：

```text
/
```

页面名称：

```text
ROOM Archive
```

视觉：

```text
现代
冷灰
简洁
无故障
```

---

# 6. 首页 Header

```text
ROOM Archive

Public Web Snapshot Index
```

副标题：

> 检索历史网页快照、旧站点与公开缓存记录。

顶部导航：

```text
首页
搜索
最近收录
帮助
```

---

# 7. 首页搜索框

Placeholder：

```text
输入网站、人物、关键词或URL
```

按钮：

```text
搜索
```

默认推荐词：

```text
2007 个人主页
南城二中
BlueMoon
```

不要默认推荐：

```text
林夏
```

玩家应自己从“最近收录”里第一次看到她。

---

# 8. 首页最近收录

建议显示：

```text
最近更新的历史快照
```

列表：

### 1

```text
南城旧城区个人主页索引
最后快照：2008-02-14
```

### 2

```text
南城市立第二中学校园网（旧版）
最后快照：2008-06-01
```

### 3

```text
林夏の小窝
最后快照：2008-02-14
```

### 4

```text
BlueMoon Community
状态：部分损坏
```

玩家最容易点击：

```text
林夏の小窝
```

但也允许先搜索。

---

# 9. 首页底部

普通文本：

```text
ROOM Archive仅展示已索引的历史网页快照。
部分页面可能因资源缺失、编码错误或原站删除而无法完整显示。
```

版本：

```text
Archive Viewer 2.6.4
Index Build 2025.08
```

不要出现：

```text
ROOM 404
Subject
Recovery
```

---

# 10. 首页事件

```yaml
event:
  id: c01_visit_archive_home
  type: PAGE_VISIT
  once: true
```

Effects：

```text
chapter = 1
archive_home_seen = true
```

---

# 11. 搜索「林夏」

Route：

```text
/search?q=林夏
```

搜索结果：

```text
17 Results
```

这数字之后会变化。

---

# 12. 搜索结果列表

建议首屏显示：

### Result 01

```text
林夏の小窝
http://linxia-home.net/
Captured: 2008-02-14

☆ Welcome to Linxia's Home Page ☆
About / Diary / Photo / Guestbook / Links
```

### Result 02

```text
南城二中摄影社活动记录
nc2ms.edu/club/photo/
Captured: 2007-08-19
```

### Result 03

```text
BlueMoon - 用户资料：Linxia
Captured: 2009-01-17
Status: Partial
```

### Result 04

```text
留言板缓存 - Ran's Place
Captured: 2007-10-03
Status: Missing Resources
```

### Result 05

```text
林夏个人主页 - 旧快照
Captured: 2007-08-12
```

---

# 13. 搜索结果普通噪音

其余结果可填：

```text
同名用户
旧博客引用
摄影社名单
友情链接缓存
```

不要每一个都有效。

---

# 14. Search Event

```yaml
id: c01_search_linxia
type: SEARCH
query: 林夏
```

Effects：

```text
searched_linxia = true
```

---

# 15. 林夏个人主页

Route：

```text
/site/2007/linxia
```

UI目标：

```text
2006～2007个人主页真实感
```

宽度：

```text
800px左右
```

背景：

```text
淡蓝 / 白
```

顶部：

```text
☆ 林夏 の Home Page ☆
```

副标题：

```text
since 2006.02
```

---

# 16. 林夏主页导航

```text
[ About Me ]
[ Diary ]
[ Photo ]
[ Guestbook ]
[ Links ]
```

右侧小组件：

```text
Today: 12
Total: 18374
```

不要让计数器一开始异常。

---

# 17. 首页欢迎文字

玩家可见：

> 好久没改首页了。  
> 最近天气一直很热，电脑也很热，连这个页面看起来都很热。  
>   
> 相册那边加了几张学校附近拍的东西。  
> 如果打不开图就刷新一次，空间最近好像又不太稳定。  
>   
> —— Linxia

语言必须普通。

---

# 18. About Me

可直接在首页侧栏：

```text
Name：林夏
Birthday：04.12
Like：拍照 / 下雨 / 公交最后一排 / 旧网页
Don't Like：香菜 / 很吵的地方
Camera：Sony Cyber-shot
```

一句：

```text
“有时候不知道写什么，就拍照吧。”
```

---

# 19. 首页BGM

第一版可不自动播放。

显示：

```text
♪ BGM：Window Rain
[Play]
```

虚构音乐。

---

# 20. Last Updated

底部：

```text
Last Updated：2007.08.12
```

这是第一章重要信息。

玩家第一次不一定注意。

---

# 21. 林夏主页事件

```yaml
id: c01_visit_linxia_home
type: PAGE_VISIT
```

首次：

```text
linxia_home_seen = true
```

访问次数：

```text
linxia_home_visit_count += 1
```

---

# 22. Diary 页面

Route：

```text
/site/2007/linxia/diary
```

列表建议：

```text
2007.08.12  把页面改回去了
2007.08.09  公交车最后一排
2007.08.03  原图
2007.07.28  下雨
2007.07.14  好像什么都没做
```

第一章只开放：

```text
5篇
```

---

# 23. Diary 01《把页面改回去了》

日期：

```text
2007.08.12
```

正文：

> 前几天有人说上面的标题太小，顺手帮我改了一下。  
> 今天又改回来了。  
>   
> 不是不好看，就是看着很奇怪。  
>   
> 明明还是同一句话，换了字体、换了位置以后就感觉不是原来那个东西了。  
>   
> 可能只有我会在意这种事。  
>   
> 算了，反正已经改回来了 XD

用途：

```text
建立林夏“版本敏感”
```

不是主线线索。

---

# 24. Diary 02《公交车最后一排》

日期：

```text
2007.08.09
```

正文：

> 今天回来的时候坐最后一排。  
> 前面有人一直睡，司机刹车的时候差点从椅子上滑下去。  
>   
> 窗外经过老城区那边，很多店都关了。  
> 有一家照相馆的牌子还在，玻璃里面什么都没有。  
>   
> 本来想拍，后来车开太快。  
>   
> 下次吧。

用途：

```text
纯日常
```

不要硬藏密码。

---

# 25. Diary 03《原图》

日期：

```text
2007.08.03
```

正文：

> 今天整理上学期的图，发现有一张被改过亮度以后直接盖掉了。  
>   
> 我知道其实也没什么区别。  
> 甚至改过以后比较好看。  
>   
> 但还是很不爽。  
>   
> 后来在旧文件夹里找到原来的了。  
>   
> 以后还是分开存吧。  
> original / edit / web  
>   
> 这样比较省事。

用途：

```text
重要主题伏笔
```

---

# 26. Diary 04《下雨》

纯普通日常。

建议 250～400字。

内容：

- 下雨
- 相机没带
- 周然借伞
- 顾言说网页图片路径坏了

用于建立三人普通关系。

---

# 27. Diary 05《好像什么都没做》

纯日常。

内容：

```text
暑假
高三
无聊
想出去拍东西
```

不要恐怖。

---

# 28. Diary 隐藏机制

第一章第一次访问：

只显示：

```text
08.12及更早
```

不要显示：

```text
08.17
```

后面玩家进入 private 后才知道：

```text
存在未公开草稿
```

---

# 29. Photo 页面

Route：

```text
/site/2007/linxia/photo
```

相册：

```text
学校
街道
雨天
随便拍
摄影社
```

缩略图总数可做：

```text
20～24张
```

实际首章可点：

```text
10张
```

---

# 30. 相册普通照片

建议：

### Photo 02

```text
空教室
```

Caption：

> 下午四点的教室。  
> 窗帘老是挡镜头。

### Photo 05

```text
公交站
```

Caption：

> 又晚点。

### Photo 08

```text
旧城区招牌
```

Caption：

> 这家店到底还开不开。

### Photo 11

```text
周然背影
```

Caption：

> 某人说一定要拍“活动感”。

### Photo 13

```text
顾言在弄电脑
```

Caption：

> 网站又坏了。

---

# 31. Photo 17

Route：

```text
/site/2007/linxia/photo/17
```

第一次访问：

显示：

```text
旧体育馆侧门
```

画面：

```text
普通
门
墙面
昏黄光
无明显人物
```

Caption：

> 门锁坏了三年好像也没人修。

页面元数据只显示：

```text
Photo 17
Category：摄影社
```

不要首访直接显示 EXIF。

---

# 32. Photo 17首次事件

```yaml
id: c01_photo17_first
type: PHOTO_VIEW
target: photo17
condition:
  visit_count: 1
```

Effects：

```text
photo17_seen = true
```

无异常。

---

# 33. Photo 17第二次访问

条件：

```text
photo17_visit_count == 2
```

变化必须非常轻。

建议：

```text
右后方门框边缘
出现一个很难确认的人形暗块
```

不要明显鬼脸。

页面不提示变化。

---

# 34. 第二次访问Event

```yaml
id: c01_photo17_second
condition:
  photo17_visit_count: 2
```

Effects：

```text
photo17_variant = 1
anomaly_level = 1
```

但Unknown暂时可不立刻出现。

---

# 35. Photo 17第三次访问

可以让人形：

```text
略清楚
```

但仍然：

```text
不能确定是不是人
```

玩家应该想：

> “我第一次是不是没注意？”

而不是：

> “鬼出现了。”

---

# 36. Photo 17查看原图按钮

前期按钮：

```text
查看原始文件信息
```

第一次点：

```text
403
Metadata unavailable in this snapshot.
```

提示：

```text
Try another capture.
```

这推动玩家学习Archive。

---

# 37. Guestbook 页面

Route：

```text
/site/2007/linxia/guestbook
```

建议显示：

```text
15～20条
```

其中：

```text
70%普通
20%人物
10%主线
```

---

# 38. 普通留言样例

### #183

```text
小叶
2007/08/10

首页背景终于不闪了……
```

林夏：

```text
之前那个我自己看久了都头痛 XD
```

---

### #180

```text
Ran
2007/08/07

你那个照片标题能不能写清楚点
```

林夏：

```text
不能
```

---

### #176

```text
GY
2007/08/03

web目录少一张图
```

林夏：

```text
晚点补
```

---

# 39. 主线留言：周然

一条看似普通：

```text
Ran
2007/08/11

17号那个活动别忘了
下午
```

林夏：

```text
知道了
```

这是第一份：

```text
17号证据
```

但玩家初看不一定重视。

---

# 40. Guestbook删除痕迹

底部或分页中出现：

```text
[该留言已被删除]
```

点击：

```text
404 / deleted entry
```

本章不恢复。

---

# 41. Links 页面

Route：

```text
/site/2007/linxia/links
```

内容：

```text
Ran's Place
南城二中
BlueMoon
摄影社旧页
雨天收集站
旧城区照片馆
```

其中：

```text
摄影社旧页
```

导向学校官网。

另一个失效链接：

```text
summer_backup
```

前期名称可不明显。

---

# 42. 南城二中旧官网

Route：

```text
/site/2003/nc2ms
```

实际上玩家看到的是：

```text
旧版校园网壳
```

顶部：

```text
南城市立第二中学
欢迎访问我校校园网
```

风格：

```text
IE6
蓝色链接
table布局
```

---

# 43. 学校首页普通内容

栏目：

```text
校园新闻
教学动态
德育工作
社团活动
校园风采
下载中心
```

公告：

```text
暑期值班安排
高三返校通知
校园设施维修
摄影社暑期活动
```

---

# 44. 摄影社页面

Route：

```text
/site/2003/nc2ms/clubs/photo
```

页面标题：

```text
影像兴趣小组 / 摄影社
```

成员：

```text
指导老师：许立群
成员：周然、林夏、顾言、陈海、许晓
```

介绍：

> 摄影社以校园活动记录、城市影像采集与网页作品展示为主要内容。

---

# 45. 摄影社活动记录

列表：

```text
2007-08-18  暑期旧体育馆采风
2007-07-22  老城区街景拍摄
2007-06-10  校园植物专题
```

此时玩家第一次看到：

```text
8月18日
```

与Guestbook中的：

```text
17号
```

产生轻微冲突。

---

# 46. 当前公告页面

Route：

```text
/archive/20070819/nc2ms.edu/photo-event
```

内容：

```text
摄影社暑期旧体育馆采风活动

活动日期：
2007年8月18日

集合时间：
下午4时

集合地点：
旧体育馆侧门
```

底部：

```text
更新时间：2007-08-19
```

---

# 47. Archive Timeline 控件

页面顶部显示：

```text
Captured:
2007-08-15
2007-08-19
```

默认当前：

```text
2007-08-19
```

玩家可点击：

```text
2007-08-15
```

---

# 48. 旧版本公告

Route：

```text
/archive/20070815/nc2ms.edu/photo-event
```

内容几乎一样。

唯一关键差异：

```text
活动日期：
2007年8月17日
```

底部：

```text
发布时间：2007-08-15
```

这就是第一章第一次硬证据。

---

# 49. 页面差异提示

不要自动高亮“17”。

如果玩家点：

```text
Compare Captures
```

才显示：

```diff
- 2007年8月17日
+ 2007年8月18日
```

Archive可显示：

```text
1 textual difference detected.
```

---

# 50. 关键Event：日期矛盾

```yaml
id: c01_date_mismatch_found
conditions:
  viewed_capture_0815: true
  viewed_capture_0819: true
effects:
  evidence_unlock:
    - E001_school_original_notice
    - E002_school_modified_notice
  knowledge:
    - knows_event_date_changed
```

---

# 51. Evidence UI 提示

不要弹：

```text
恭喜获得证据！
```

而是在Archive侧栏：

```text
Version difference saved.
```

玩家可以点：

```text
查看差异
```

---

# 52. 玩家此时应产生的问题

```text
是谁改的？
为什么改？
活动到底是哪天？
林夏到底去没去？
```

游戏不要回答。

---

# 53. 返回林夏Diary后的变化

如果：

```text
knows_event_date_changed = true
```

Diary页面搜索或页脚出现：

```text
1 draft entry unavailable
```

文字很小。

这暗示：

```text
存在未公开内容
```

---

# 54. Search再次搜“林夏 8月17”

如果玩家这样搜索：

显示新结果：

```text
18 Results
```

注意：

原本是17。

新增结果：

```text
Cached fragment:
“17号我没有出门。”
Source unavailable
```

但点击：

```text
404
```

这句话先出现，但来源不明。

---

# 55. “17号我没有出门”

这句话是：

```text
林夏后改Diary草稿
```

但第一章只让玩家看到碎片。

不能直接判断：

```text
真/假
```

---

# 56. Search结果数异常

第一次：

```text
17 Results
```

日期矛盾后：

```text
18 Results
```

新增：

```text
Cached fragment
```

这是第一章第一处“系统层微异常”。

但仍可解释：

```text
索引更新
```

---

# 57. Unknown第一次触发

推荐条件：

```text
anomaly_level >= 1
AND
knows_event_date_changed = true
AND
photo17_visit_count >= 2
```

延迟：

```text
玩家离开Photo或Archive后
```

出现通知：

```text
Unknown
1条新消息
```

---

# 58. Unknown第一条

打开Messenger / notification：

> 你看到了。

只有这一句。

时间戳：

```text
当前Session时间
```

头像：

```text
灰色默认头像
```

---

# 59. 玩家回复

第一章不需要复杂自由生成。

可支持关键词：

```text
你是谁
什么
林夏
17号
```

响应：

如果“你是谁”：

> Unknown.

如果“什么”：

> 那个不同的版本。

如果“林夏”：

> 你在找她。

如果“17号”：

> 你已经找到两个17号了。

最后一句只在玩家真的存在两个17相关证据时使用。

---

# 60. Unknown第一阶段结束

Unknown不要继续聊。

显示：

```text
离线
```

---

# 61. Photo17再次查看

如果玩家在日期矛盾后回到Photo17：

第三次访问触发：

```text
photo17_variant = 2
```

暗处人形更明确一点。

这一次可以显示：

```text
Image dimensions:
800×600
```

但仍不显示完整EXIF。

---

# 62. Unknown第二条

条件：

```text
photo17_visit_count >= 3
AND
unknown_first_seen = true
```

消息：

> 你又回去了。

如果玩家没有回Photo17，不触发。

---

# 63. 玩家不回Photo17怎么办

不影响主线。

继续：

```text
Links
学校
404
private
```

Unknown第二条可永远不出现。

---

# 64. 失效友情链接

在 Linxia Links 页面：

```text
summer_backup
```

显示：

```text
http://linxia-home.net/old/summer/
```

点击：

```text
404
```

---

# 65. 404页面

Route：

```text
/system/404
```

第一层：

```text
404
Page Not Found

The requested page was not found in this capture.
```

按钮：

```text
返回
查看相邻快照
修改URL
```

---

# 66. 404底部提示

如果：

```text
knows_event_date_changed = true
```

底部增加：

```text
Archived parent directory available.
```

点击：

```text
/site/2007/linxia/0817/
```

目录列表权限受限。

---

# 67. 地址栏谜题

玩家可以：

```text
手动把 /old/summer/
改为 /0817/
```

或者通过：

```text
查看父目录
```

引导。

不要强制要求玩家猜神秘数字。

因为：

```text
0817已经是本章核心信息
```

---

# 68. /0817 目录

Route：

```text
/site/2007/linxia/0817/
```

显示：

```text
Index of /0817/

private.html
photo_note.txt
backup/
```

其中：

```text
backup/
403
```

---

# 69. private.html

Route：

```text
/site/2007/linxia/0817/private
```

视觉：

```text
无完整CSS
白底黑字
像未公开草稿
```

页面顶部：

```text
untitled
```

无导航。

---

# 70. private.html 正文

这是第一章核心玩家文本。

建议正文：

> 本来不想写这个。  
>   
> 今天活动是17号，不是18号。  
>   
> 我知道写这种话看起来很像我又在跟谁较劲，但反正这个页面也没人会看到。  
>   
> 下午去了旧体育馆。  
> 一开始其实挺正常的。顾言先到，周然后来才来。陈海还是一样什么都拍。  
>   
> 后来我们进了侧面的设备间。那边本来就不该进去。  
> 周然看到照片以后说那几张别发。  
>   
> 我说不发可以。  
>   
> 他又说那干脆删了。  
>   
> 我不知道为什么听到这句话就特别烦。  
>   
> 可能因为最近已经不是第一次了。标题改一下，文字改一下，时间改一下，反正“意思一样”。  
>   
> 可是一样不一样又不是他说了算。  
>   
> 我知道我也有点故意。  
>   
> 后来就吵起来了。  
>   
> 照片顾言那边有原来的。  
> 先别删。  
>   
> 明天再说吧。

注意：

这里明确：

```text
活动是17号
林夏确实去了
周然要求删照片
顾言有原图
```

但没有：

```text
林夏之后去哪
ROOM
第四个人
```

---

# 71. private.html 页脚

很小：

```text
saved: 2007-08-17 21:04
```

重要时间。

---

# 72. private.html Event

```yaml
id: c01_private_page_found
type: PAGE_VISIT
effects:
  evidence_unlock:
    - E014_private_0817
  knowledge:
    - knows_linxia_attended_event
    - knows_zhouran_requested_delete
    - knows_guyan_has_originals
```

---

# 73. 本章真正的推理落点

此时玩家知道：

```text
1. 学校早期公告是17号
2. 后来变成18号
3. 林夏自己写过“活动是17号”
4. 林夏确实去了旧体育馆
5. 周然要求删部分照片
6. 顾言保存了原图
```

足以得出：

> **日期被人为改过。**

但仍不知道：

```text
为什么林夏后来失踪
```

---

# 74. private页面中的隐藏链接

HTML底部注释或普通文本：

```text
backup copy:
../backup/backup_20070823.zip
```

此时点击：

```text
403 Forbidden
```

---

# 75. backup_20070823.zip

Route：

```text
/site/2007/linxia/0817/backup/backup_20070823.zip
```

第一章：

```text
403
```

页面信息：

```text
File exists.
Access restricted.
```

这是非常重要的区别：

```text
不是404
```

---

# 76. 403页面

```text
403 Forbidden

This archived object exists,
but is not available in the current access level.
```

下方：

```text
Object:
backup_20070823.zip

Size:
Unknown

Capture:
Partial
```

---

# 77. Unknown第三条

条件：

```text
private_page_found = true
AND
backup403_seen = true
```

消息：

> 原来的还在吗？

这句话必须出现得非常克制。

它同时像：

```text
林夏
顾言
ROOM
```

非常适合作为第一章最后一句Unknown。

---

# 78. 玩家回复“什么原来的”

Unknown：

> 你会找到的。

这句略像谜语人。

更推荐：

> 不是网页版本。

更具体。

---

# 79. 第一章结束触发

条件：

```text
knows_event_date_changed
AND
private_page_found
AND
backup403_seen
```

不要求：

```text
必须看三次Photo17
```

避免卡关。

---

# 80. 章节结束表现

玩家返回 ROOM Archive。

页面顶部出现：

```text
Archive Session Updated
```

搜索：

```text
林夏
```

仍显示：

```text
18 Results
```

但底部出现一条新状态：

```text
1 restricted object discovered.
```

---

# 81. Chapter End 页面

不要传统：

```text
Chapter 1 Complete!
```

可以显示：

```text
SESSION NOTE

2007-08-17
conflicting records detected

1 restricted object pending
```

然后：

```text
[继续调查]
```

下一章后续开发时启用。

---

# 82. 第一章标题出现时机

建议不是开头。

在玩家第一次确认：

```text
17 / 18差异
```

后，

屏幕短暂在Archive侧栏显示：

```text
CHAPTER 01
AUGUST 17
```

非常克制。

---

# 83. 玩家走错路设计

ROOM 404不能依赖唯一点击顺序。

以下页面可以任意先后：

```text
Diary
Photo
Guestbook
Links
学校官网
```

主线只需要满足：

```text
关键状态
```

---

# 84. 如果玩家先去学校官网

可以先看到：

```text
18号
```

之后去Guestbook看到：

```text
17号那个活动
```

产生同样矛盾。

---

# 85. 如果玩家先查Archive

可以直接看到：

```text
15号版本 vs 19号版本
```

也允许。

不要阻止聪明玩家。

---

# 86. 如果玩家完全不看Guestbook

仍可通过：

```text
Archive版本差异
```

进入下一步。

Guestbook只是辅助确认。

---

# 87. 如果玩家完全不看Photo17

第一章仍可通关。

但：

```text
Unknown第一条可以延迟
Photo17异常线留到第二章
```

这样系统更自由。

---

# 88. 如果玩家没发现Archive Timeline

提供三级软提示。

### Hint 1

搜索结果摘要：

```text
2 captures available
```

### Hint 2

页面顶部：

```text
Earlier capture available
```

### Hint 3

玩家停留太久：

Archive侧栏出现：

```text
Compare versions
```

不要弹教程。

---

# 89. 如果玩家没想到改URL

404页提供：

```text
Parent Directory
```

不要让主线依赖真正的URL猜谜。

URL修改是：

```text
奖励聪明玩家
```

不是硬门槛。

---

# 90. 如果玩家一直搜索“17号”

ROOM Search可逐步给出：

```text
学校公告
Guestbook缓存
Diary fragment
```

把玩家拉回主线。

---

# 91. 第一章证据列表

建议：

```text
E001 学校原始公告（17号）
E002 学校修改公告（18号）
E003 Guestbook 17号留言
E004 Photo17 网页版
E005 Diary《原图》
E014 /0817/private.html
E015 backup_20070823.zip存在记录
```

其中：

```text
E001 + E002 + E014
```

是核心。

---

# 92. 玩家知识Flags

```ts
knows_event_date_changed
knows_linxia_attended_event
knows_zhouran_requested_delete
knows_guyan_has_originals
knows_backup_exists
noticed_photo17_change
```

---

# 93. 不要直接给“嫌疑值”

禁止：

```text
周然嫌疑度 +20
```

玩家自己判断。

---

# 94. 第一章UI异常预算

本章最多使用：

```text
1. 搜索结果17→18
2. Photo17轻变化
3. Unknown
4. 404父目录提示
```

不要再加：

```text
屏幕闪烁
窗口乱动
鼠标自己移动
```

---

# 95. 第一章音频

正常：

```text
鼠标点击
旧网页按钮
很轻的电脑风扇
```

个人主页可选BGM：

```text
Window Rain
```

第一次Unknown通知：

```text
非常普通的消息提示音
```

不要恐怖音效。

---

# 96. Photo17音频

无特殊声音。

这很重要。

如果突然：

```text
低频轰鸣
```

会直接告诉玩家：

```text
这里恐怖
```

不要。

---

# 97. Archive差异音效

普通：

```text
轻提示音
```

像软件工具。

---

# 98. Unknown提示音

第一次：

```text
和普通聊天提示完全一样
```

不要特殊。

---

# 99. 页面视觉真实性

2007个人主页：

```text
不要现代卡片UI
```

使用：

- table
- 小图标
- 旧GIF
- 蓝色超链接
- 访问计数
- 800px布局

---

# 100. 学校官网真实性

需要：

```text
大量真正无关内容
```

例如：

- 值班表
- 高三返校
- 校园设施
- 教师培训
- 社团通知

如果首页只有剧情线索：

```text
会显得像谜题网页
```

---

# 101. 第一章文本量预算

建议：

| 内容 | 字符/字数目标 |
|---|---:|
| ROOM Archive | 800 |
| Search结果 | 1,000 |
| 林夏主页 | 800 |
| Diary 5篇 | 2,500～3,500 |
| Photo Caption | 600～900 |
| Guestbook | 1,500～2,000 |
| 学校官网 | 1,500～2,500 |
| 摄影社 | 800～1,200 |
| Archive版本 | 600 |
| private.html | 700～1,000 |
| Error页/UI | 500 |
| Unknown | 200～400 |
| **总量** | **约11,000～15,000** |

后续可以加普通环境文本扩充到：

```text
18,000～22,000
```

---

# 102. 第一章普通环境文本扩展

可后续补：

```text
学校公告8条
Guestbook 20条
Photo Caption 20条
Diary完整5篇
友情链接介绍
Archive Help
```

这些不需要都含线索。

---

# 103. 第一章核心谜题

不是：

```text
找密码
```

而是：

```text
比较版本
```

Puzzle：

```text
当前公告：18号
旧快照：17号
林夏隐藏页：17号
```

结论：

```text
记录被修改
```

---

# 104. 第一章“假谜题”

玩家可能会尝试：

```text
18374访问量
04.12生日
Photo17
03:17
```

不要都变密码。

系统应该允许：

```text
没有意义
```

这是很重要的ARG设计原则。

---

# 105. 搜索生日

玩家搜：

```text
0412
```

只显示：

```text
普通生日资料
```

不要奖励。

---

# 106. 搜索18374

无结果：

```text
0 Results
```

---

# 107. 搜索03:17

第一章：

```text
0 Results
```

暂时不使用。

这样后期03:17出现时更有力量。

---

# 108. 第一章对周然的误导

玩家得到：

```text
周然要求删图
周然日期说法有问题
```

这足够。

不要加：

```text
威胁短信
跟踪照片
阴暗独白
```

会过度指向。

---

# 109. 第一章对顾言的轻伏笔

只表现：

```text
他保存原图
```

玩家此时应该觉得：

```text
顾言可能是重要证人
```

不是嫌疑人。

---

# 110. 第一章对林夏的复杂化

玩家最初：

```text
失踪女孩
```

到结尾：

```text
她自己也有隐藏页面
而且主动记录了另一个版本
```

让玩家意识：

```text
林夏不是被动受害者
```

---

# 111. 第一章Unknown的作用

只完成一件事：

> **让玩家意识到，这个Archive站可能也在记录自己的调查行为。**

不要解释：

```text
为什么
```

---

# 112. 第一章的最后情绪

不是：

```text
恐惧高潮
```

而应该是：

```text
“等等……这东西还在？”
```

看到：

```text
backup_20070823.zip
403
```

玩家自然想：

```text
下一章我要打开它
```

---

# 113. 第一章结束后的玩家问题

理想情况下，玩家脑中有：

```text
为什么日期被改？
周然为什么要删照片？
林夏为什么自己写隐藏页？
顾言那里的原图是什么？
backup_20070823是什么？
Photo17里那个东西刚才就在吗？
Unknown是谁？
```

这就是成功。

---

# 114. Chapter 2衔接

下一章建议：

```text
《BlueMoon》
```

入口不是立刻破解backup。

而是：

```text
寻找访问backup所需的旧账号/权限线索
↓
进入BlueMoon
↓
发现Summer17
```

这样不会过早进入Desktop。

---

# 115. Chapter 2第一目标

玩家需要知道：

```text
Summer17 = 林夏
```

并找到：

```text
8月17日20:31论坛活动
```

从而推翻：

```text
“林夏在体育馆后立刻失踪”
```

---

# 116. 技术实现：Route状态

建议：

```ts
routeState = {
  "/site/2007/linxia/photo/17": {
    variants: [
      "photo17_v0",
      "photo17_v1",
      "photo17_v2"
    ]
  },

  "/site/2007/linxia/diary": {
    draftHintVisible:
      knows_event_date_changed
  }
}
```

---

# 117. Trigger示例：搜索结果变化

```yaml
id: c01_search_result_18

conditions:
  knows_event_date_changed: true

effects:
  set:
    search_linxia_result_count: 18
  unlock:
    - cached_diary_0817_fragment
```

---

# 118. Trigger示例：Unknown

```yaml
id: c01_unknown_001

conditions:
  anomaly_level: ">=1"
  knows_event_date_changed: true
  photo17_visit_count: ">=2"

once: true
priority: 100

effects:
  - SEND_MESSAGE:
      sender: unknown
      text: "你看到了。"
```

---

# 119. Trigger示例：Private

```yaml
id: c01_unlock_0817_parent

conditions:
  visited_404_from_summer_backup: true
  knows_event_date_changed: true

effects:
  - UNLOCK_ROUTE:
      route: "/site/2007/linxia/0817/"
```

---

# 120. Save点

自动保存：

```text
第一次搜索林夏
第一次发现17/18差异
第一次Unknown消息
进入private
发现backup403
```

---

# 121. 第一章Debug Flags

开发阶段建议显示：

```text
DEBUG:
chapter=1
anomaly=1
photo17Visits=3
dateMismatch=true
privateFound=true
backupSeen=true
unknownMessages=2
```

Release隐藏。

---

# 122. 第一章QA测试路径

必须测试：

### 路径A

```text
搜索
→ 林夏
→ Guestbook
→ 学校
→ Archive
→ private
```

### 路径B

```text
学校
→ Archive
→ 林夏
→ Links
→ private
```

### 路径C

```text
Photo17反复看
→ Unknown
→ Search
→ Archive
→ private
```

### 路径D

```text
几乎不看Photo
→ Archive
→ private
```

全部能完成。

---

# 123. QA：刷新测试

刷新页面：

```text
访问次数应保持
关键Flag应保持
```

但不能：

```text
每次浏览器刷新都重复Unknown once消息
```

---

# 124. QA：Back测试

Back：

```text
应正常返回
```

第一章不要做：

```text
Back异常跳转
```

这种机制留中后期。

---

# 125. QA：真实404与剧情404

无效React route：

```text
真实程序404
```

应由App正常处理。

剧情内：

```text
/system/404
```

由NavigationService生成。

不要混淆。

---

# 126. QA：URL手输

玩家输入：

```text
/site/2007/linxia/0817/private
```

如果尚未解锁：

建议：

```text
403
```

而不是404。

这奖励玩家猜中：

```text
页面确实存在
```

但不让他们完全跳过状态。

---

# 127. 是否允许高手Sequence Break

可以有限允许。

如果玩家直接输入：

```text
/0817/private
```

可以显示：

```text
403
```

等发现：

```text
17/18日期差异
```

之后自动开放。

避免主线被完全跳过。

---

# 128. 本章Achievements可选

第一版可不做。

后续：

```text
《旧版本》
第一次使用Compare Captures

《你又回来了》
触发Unknown第二条

《没有意义》
搜索一个纯红鲱鱼数字
```

不要影响剧情。

---

# 129. 第一章开发优先级

P0：

```text
ROOM Archive首页
Search
林夏主页
Diary
Photo17
学校公告
Archive版本差异
404
private
403 backup
```

P1：

```text
Guestbook
Links
Unknown
Photo17 Variant
```

P2：

```text
更多普通网页
BGM
Archive帮助
彩蛋
```

---

# 130. 第一章素材需求

图片：

```text
林夏主页小头像
Photo缩略图10～20张
Photo17 v0
Photo17 v1
Photo17 v2
学校logo
摄影社普通照片
```

UI：

```text
旧网页GIF
访问计数器
IE时代小图标
Archive现代UI
Messenger灰色头像
```

音频：

```text
Window Rain
普通通知音
网页点击
```

---

# 131. Photo17三版本制作规范

必须：

```text
构图完全一致
```

差异只在：

```text
门框暗处
```

v0：

```text
无人物
```

v1：

```text
像压缩噪点形成的人形
```

v2：

```text
轮廓更明确
但仍无法识别
```

不要：

```text
人脸
眼睛
笑容
```

---

# 132. 第一章玩家可见“真相层”

只到：

```text
ALTERED
```

即：

```text
原始公告
修改公告
隐藏页
```

不要出现：

```text
RECONSTRUCTED
GENERATED
```

这些词留后面。

---

# 133. 第一章主题句

表层主题：

> **哪一天才是真的？**

深层主题：

> **一件事被改写以后，后来的人还会记得原来的版本吗？**

---

# 134. 第一章核心情绪句

林夏：

> “一样不一样又不是他说了算。”

这句应成为玩家第一次真正记住林夏的句子。

---

# 135. 第一章周然核心句

从旧留言或聊天中：

> “意思又没变。”

与林夏形成对照。

---

# 136. 第一章顾言核心句

> “原来的还在。”

非常短。

后期会不断回响。

---

# 137. 第一章Unknown核心句

> “原来的还在吗？”

它把顾言/林夏/ROOM三条语言线第一次混合。

---

# 138. 第一章最终镜像

真实人物：

顾言：

```text
原来的还在。
```

Unknown：

```text
原来的还在吗？
```

玩家：

```text
开始寻找“原来的版本”
```

这就是整个游戏主循环第一次完整建立。

---

# 139. 第一章最终开发判定

完成标准不是：

```text
所有页面都很多字
```

而是：

玩家完整经历：

```text
普通Archive
↓
旧网页
↓
人物生活
↓
时间矛盾
↓
版本比较
↓
系统轻微异常
↓
隐藏页
↓
受限备份
```

并自然产生：

```text
继续调查欲望
```

---

# 140. 文档状态

```text
STATUS:
PLAYABLE SCRIPT v0.1
```

已锁定：

```text
Chapter标题《八月十七日》
核心结论：日期被改过
private.html核心内容
Unknown首章最多3条
backup_20070823.zip作为章尾钩子
Photo17只做轻异常
第一章不揭示ROOM真相
```

可继续补：

```text
Diary五篇全文
Guestbook 20条全文
学校公告8条全文
Photo Caption 20条全文
Archive Help全文
Search普通结果
Unknown关键词回复
```

---

# 141. 下一步正文制作建议

在进入 Chapter 2 前，建议先继续制作：

```text
08_2003_SCHOOL_CONTENT.md
09_2007_HOMEPAGE_CONTENT.md
```

把本章两个最大的“文本世界”补完整。

优先顺序：

```text
09_2007_HOMEPAGE_CONTENT.md
↓
08_2003_SCHOOL_CONTENT.md
↓
10_BLUEMOON_FORUM.md
```

这样第一章就能从脚本变成真正可以塞进程序的数据。

---

# 142. 最终一句话

> 第一章结束时，玩家不应该觉得自己找到了林夏。  
> 他只应该第一次意识到：  
> **自己现在看到的网页，并不一定是当年真正留下来的那个版本。**
