25_GITHUB_REFERENCE_AND_ACHIEVEMENT_SYSTEM.md
内容包含：

1. GitHub 项目研究总结
2. Lost-Hills-Web → ROOM 404 可借鉴系统
3. 南华中学 ARG → 关键词调查/旧网页考古系统
4. SudoShield Web OS → Recovery Desktop 架构借鉴
5. Awesome Web Desktops → UI参考方向
6. ROOM 404 架构升级方案
7. 成就系统设计原则
8. 成就触发机制
9. 成就数据结构
10. 隐藏成就设计
11. 成就与剧情、Evidence、PlayerKnowledge 联动
12. 网页端实现方案（React/Vue + LocalStorage/IndexedDB）
13. 成就页面 UI 设计
14. 类 ARG 游戏成就案例分析
15. ROOM 404 最终成就列表设计

---

```md
# 25_GITHUB_REFERENCE_AND_ACHIEVEMENT_SYSTEM.md

# ROOM 404
# GitHub参考项目分析 & Web ARG成就系统设计文档

Version:
v0.1

用途：
用于指导 ROOM 404 后续 Web ARG 架构升级。

---

# 目录

1. GitHub项目研究
2. 可借鉴系统拆解
3. ROOM 404架构融合方案
4. 成就系统设计理念
5. Achievement Engine设计
6. 成就UI设计
7. 成就列表
8. 隐藏成就
9. 数据结构
10. 开发优先级


---

# 01_GitHub项目研究


## 1. Lost-Hills-Web

定位：

> 一个伪装成真实政府网站的Web ARG项目。


核心特点：

- 网站本身就是故事
- 普通页面隐藏异常
- 公告成为剧情文本
- 历史页面形成时间线
- 用户通过搜索发现真相


---

## ROOM 404借鉴


当前BlueMoon：

玩家主动寻找：

```

帖子
照片
聊天
文件

```

升级后：

网页本身成为证据。


增加：

```

robots.txt

archive/

old/

backup/

admin/

deleted/

```

玩家输入：

```

linxia

DSC0417

18:42

Summer17

2007

```

得到不同结果。


---

# 新系统：

## Web Archaeology Engine


玩家行为：

```

浏览网页

↓

产生关键词

↓

搜索

↓

匹配隐藏资源

↓

解锁Evidence

```


例如：


玩家发现：

Photo17:

```

18:42

```

去学校官网搜索：

```

18:42

```


结果：

普通：

```

未找到结果

```

第二次：

```

Archive Snapshot Found

2007-08-17.html

```

---

# 2. 南华中学 ARG


定位：

伪学校官网ARG。


参考价值最高。


核心结构：

```

旧学校主页

↓

新闻公告

↓

留言板

↓

失物招领

↓

隐藏档案

↓

真相页面

```


---

# ROOM 404融合


增加：

## 南城二中旧站系统


URL:

```

[http://nczx.edu.cn](http://nczx.edu.cn)

```


页面：


```

首页

学校简介

校园新闻

学生作品

留言板

校友论坛

下载中心

隐藏目录

```


---

# 关键词解锁系统


例：


玩家输入：

```

林夏

```


普通结果：

```

没有找到相关内容

```


拥有：

Evidence:

```

E-LX-001

```

后：


显示：

```

Archived Result:

2007摄影社名单

```


---

# 3. SudoShield Web OS


定位：

浏览器Web OS。


核心：

- Window Manager
- File System
- Terminal
- App生命周期


---

# ROOM 404融合


Recovery Desktop升级：

从：

```

几个按钮

```

变成：

真正电脑。


---

目录：

```

C:\

├ Desktop

├ My Documents

├ Pictures

├ Messenger

├ Calendar

├ Temp

├ Recycle Bin

└ System

```


---

玩家可以：

复制

删除

恢复

查看属性

搜索


---

# 4. Awesome Web Desktops


作用：

参考：

- Windows 98
- XP
- Classic Mac


用于：

Recovery Desktop UI


---

# ROOM 404最终架构


```

```
            ROOM404 CORE


                

  Web Browser Layer

         |
```

---

|          |           |

School     BlueMoon   Recovery OS

|          |           |

Evidence  Knowledge   Filesystem

```
         |

      Story Engine
```

```


---

# 02_新增系统设计


# Web Evidence Graph


所有网页对象进入：

Evidence Graph。


例如：


```

DSC0417.JPG

```
  |

  |
```

BlueMoon帖子

```
  |

  |
```

Linxia Diary

```
  |

  |
```

Recovery File

```


玩家不是：

点击剧情。


而是：

建立关系。


---

# 03_成就系统设计


## 设计目标


ROOM404不应该使用普通：

```

完成任务

收集10个物品

```


应该奖励：

调查行为。


---

# Achievement分类


## A. Investigation


调查类。


例如：


### 第一条记录

条件：

打开第一个Archive页面


奖励：

```

Achievement:

Archive Beginner

你发现了网页留下的痕迹。

```



---

## B. Web Archaeology


网页考古。


### 旧链接收藏者


条件：

访问3个隐藏URL


奖励：

```

Old Internet Explorer

```

---

## C. Photo Forensics


照片取证。


### 原始文件

条件：

查看：

DSC0417 Original


奖励：

```

The Original

你相信第一份记录。

```


---

### 不存在的人


条件：

比较：

2007

2016

2022

三个版本


奖励：

```

False Reconstruction

```

---

## D. System


系统类。


### 第一次启动


条件：

进入Recovery Desktop


奖励：

```

Welcome Back

```

---

### MEMORY ERROR


条件：

第一次看到：

```

MEMORY ERROR

```


奖励：

```

Something Is Wrong

```


---

# E. Observer


最终系统。


## CURRENT_OBSERVER


条件：

玩家查看：

```

whoami

```


奖励：

```

Observer Detected

```


---

# 04_隐藏成就


隐藏成就不能显示。


只显示：

```

???

```



---

# Hidden_001


## 夜班访客


条件：

凌晨0点以后进入BlueMoon


效果：

论坛出现：

```

Guest_0001

```


---

# Hidden_002


## 删除者


条件：

删除Recovery文件


但是恢复。


效果：

系统记录：

```

Deletion Attempt

````


---

# Hidden_003


## 不相信的人


条件：

拒绝所有异常解释。


完成：

RETURN结局。


---

# Hidden_004


## 档案管理员


条件：

收集全部Source。


对应：

ARCHIVIST结局。


---

# Hidden_005


## 第405个观察者


条件：

发现：

Observer405。


对应：

OBSERVER结局。


---

# 05_成就数据结构


achievement.json


```json
{
"id":"photo_original",

"name":"The Original",

"description":"查看DSC0417原始文件",

"type":"photo",

"condition":

{
"event":

"VIEW_PHOTO_ORIGINAL"

},

"reward":

{
"unlock":

"archive_badge"

}

}

````

---

# 06_Event驱动

所有成就监听Event。

例如：

玩家打开照片：

发送：

```
PHOTO_VIEW
```

Achievement Engine:

检测：

```
photo_original

```

完成。

---

# 07_UI设计

## Achievement页面

不要做游戏菜单。

做成：

档案墙。

布局：

```

ROOM ARCHIVE


[已发现]


★★★★★


Archive Beginner


----------------


[隐藏]


?


?


?


```

---

# 已解锁

显示：

```
Evidence Attached
```

未解锁：

```
Unknown Object
```

---

# 08_成就与剧情关联

成就不是奖励。

而是：

玩家调查轨迹。

例如：

玩家获得：

```
False Reconstruction

```

代表：

玩家相信：

照片被修改。

如果没有：

最终：

Observer路线概率降低。

---

# 09_开发顺序

## MVP

第一阶段：

完成：

```
Achievement Engine

Event Bus

LocalStorage存档

```

---

第二阶段：

加入：

```
Photo Achievement

Forum Achievement

Desktop Achievement

```

---

第三阶段：

加入：

```
Hidden Achievement

Ending Achievement

```

---

# 最终目标

ROOM404不是：

```
寻找答案
```

而是：

```
记录玩家如何寻找答案。


每一次点击，

每一次怀疑，

每一次删除，

都会成为系统的一部分。

```

END

```

---

这个文档建议放在：

```

ROOM404/
│
├ docs/
│
├ 24_FULL_GAME_FLOW_AND_IMPLEMENTATION.md
│
└ 25_GITHUB_REFERENCE_AND_ACHIEVEMENT_SYSTEM.md

```

下一步我建议继续补：

**`26_EVIDENCE_GRAPH_AND_EVENT_ENGINE.md`**

因为目前 ROOM 404 已经有：
- 文件系统
- 论坛系统
- 图片取证
- 成就系统

缺少最后一个核心：

> “玩家任何行为如何影响世界状态”。

这个会决定它是否只是一个网页解谜，还是一个真正的 Web ARG。
```
