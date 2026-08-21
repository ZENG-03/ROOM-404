import type { Evidence, RouteId } from "../../game/types";

export interface ForumUser {
  uid: number;
  username: string;
  registeredAt: string;
  posts: number;
  lastLogin?: string;
  signature?: string;
  homepage?: string;
  note?: string;
}

export interface ForumThreadSummary {
  id: string;
  routeId: RouteId;
  board: string;
  title: string;
  authorUid: number;
  createdAt: string;
  status: "ACTIVE" | "DELETED" | "CORRUPTED";
  excerpt: string;
}

export interface ForumReply {
  author: string;
  createdAt: string;
  body: string;
}

export interface ForumThreadContent {
  lines: string[];
  replies: ForumReply[];
}

export interface ForumFragment {
  id: string;
  source: string;
  completeness: string;
  content: string;
}

export const forumUsers: Record<number, ForumUser> = {
  1847: {
    uid: 1847,
    username: "Summer17",
    registeredAt: "2006-10-12",
    posts: 83,
    lastLogin: "2007-08-17 22:01",
    signature: "—",
    note: "所在地、性别、个人主页均未填写。",
  },
  1741: {
    uid: 1741,
    username: "Linxia",
    registeredAt: "2006-10-09",
    posts: 12,
    lastLogin: "2007-08-12 21:44",
    homepage: "http://linxia-home.net/",
    note: "公开账号，发帖礼貌且少。",
  },
  1766: {
    uid: 1766,
    username: "Ran",
    registeredAt: "2006-10-10",
    posts: 118,
    lastLogin: "2007-08-19 13:02",
    note: "常见于校园、闲聊、摄影版。",
  },
  1739: {
    uid: 1739,
    username: "GY",
    registeredAt: "2006-10-09",
    posts: 31,
    lastLogin: "2007-08-18 17:21",
    note: "网页制作 / 摄影器材。公开资料很少。",
  },
};

export const forumBoards = [
  {
    group: "站务",
    boards: [
      ["论坛公告", "版规、维护、站点公告"],
      ["建议反馈", "站务建议与问题反馈"],
    ],
  },
  {
    group: "生活",
    boards: [
      ["闲聊灌水", "今天南城又下雨了吗"],
      ["校园", "高三是不是快返校了"],
      ["夜话", "夜里不想睡的时候来这里说"],
      ["情感", "不一定要认真回答"],
    ],
  },
  {
    group: "兴趣",
    boards: [
      ["摄影", "卡片机夜景怎么拍"],
      ["音乐", "求一首歌"],
      ["网页制作", "免费空间哪个好"],
      ["旧物交换", "出一个128M U盘"],
    ],
  },
];

export const forumThreadContent: Record<string, ForumThreadContent> = {
  "1711": {
    lines: ["最近突然觉得个人主页挺麻烦的。", "写点什么第二天就有人来问。", "不写又觉得空着很浪费。", "想关掉，过一会又觉得以后可能会后悔。", "有人关过自己的主页吗？"],
    replies: [
      { author: "northwind", createdAt: "2007-06-21 00:20", body: "关就关啊，备份一下。" },
      { author: "Summer17", createdAt: "2007-06-21 00:23", body: "备份以后不还是留着。" },
      { author: "leaf", createdAt: "2007-06-21 00:27", body: "那你到底想不想删 XD" },
      { author: "Summer17", createdAt: "2007-06-21 00:29", body: "我也不知道。" },
    ],
  },
  "1738": {
    lines: ["比如只是调亮一点。", "内容没变。", "但是原来的被盖掉了。", "你们会觉得有区别吗？", "我现在都分 original / edit / web。"],
    replies: [
      { author: "cameraKid", createdAt: "2007-07-05 23:53", body: "没区别吧，看起来更好就行。" },
      { author: "Summer17", createdAt: "2007-07-05 23:56", body: "我就是知道会有人这么说 = =" },
      { author: "GY", createdAt: "2007-07-06 00:02", body: "有区别。" },
      { author: "Summer17", createdAt: "2007-07-06 00:04", body: "你不要来。" },
    ],
  },
  "1682": {
    lines: ["如果别人一直说你是因为某个原因才做一件事。", "你说不是。", "但是大家都觉得那个原因“比较说得通”。", "说久了是不是最后就没人管你自己怎么想了。"],
    replies: [
      { author: "leaf", createdAt: "2007-06-03 23:16", body: "那你说清楚啊。" },
      { author: "Summer17", createdAt: "2007-06-03 23:19", body: "如果说了他们还是觉得自己那个版本比较合理呢。" },
    ],
  },
  "1792": {
    lines: ["突然发现以前聊天记录还在。", "看起来很奇怪。", "有些话完全不记得自己说过。", "但是窗口里就是自己的名字。"],
    replies: [
      { author: "night_train", createdAt: "2007-07-18 01:09", body: "黑历史哈哈哈。" },
      { author: "Summer17", createdAt: "2007-07-18 01:10", body: "很多。" },
    ],
  },
  "1816": {
    lines: ["Sony 的小卡片机夜景真的很难拍。", "闪光灯一开人就像被贴到背景上。", "不开又全糊。", "有人知道怎么让它别那么自作主张吗？"],
    replies: [
      { author: "cameraKid", createdAt: "2007-08-02 22:23", body: "调夜景模式，手别抖。" },
      { author: "Summer17", createdAt: "2007-08-02 22:25", body: "它没有我想要的那个夜景。算了。" },
    ],
  },
  "1904": {
    lines: ["有人认识 Linxia 吗？她主页怎么打不开了？摄影社那边有人知道吗？"],
    replies: [
      { author: "Ran", createdAt: "2007-08-21 19:49", body: "活动是18号。" },
      { author: "leaf", createdAt: "2007-08-21 19:51", body: "不是17吗？" },
      { author: "MoonAdmin", createdAt: "2007-08-21 20:02", body: "请不要发布现实联系方式。" },
    ],
  },
  "1905": {
    lines: ["暑假想去旧体育馆拍点东西。", "侧门现在还能进吗？", "上次经过的时候看见锁好像坏了，但是里面贴了施工通知。"],
    replies: [
      { author: "leaf", createdAt: "2007-07-24 18:04", body: "白天应该有人在，别从侧门进。" },
      { author: "Ran", createdAt: "2007-07-24 18:11", body: "那边不是给学生进去的地方。" },
      { author: "GY", createdAt: "2007-07-24 18:26", body: "如果是拍摄活动，先问老师。" },
      { author: "Summer17", createdAt: "2007-07-24 18:41", body: "知道了。只是想拍外面。" },
    ],
  },
  "1906": {
    lines: ["你们会不会把旧照片刻光盘？", "最近整理上学期的图，网页上的压缩版看着还行，但是原图还是想留一份。", "就是不知道以后还能不能找到能读光盘的电脑。"],
    replies: [
      { author: "GY", createdAt: "2007-06-07 21:19", body: "原图、修改版、网页版分开存。文件名别覆盖。" },
      { author: "night_train", createdAt: "2007-06-07 21:26", body: "光盘比硬盘可靠？我怎么觉得都不可靠。" },
      { author: "Summer17", createdAt: "2007-06-07 21:33", body: "至少不会因为网页路径写错就看不到。" },
      { author: "GY", createdAt: "2007-06-07 21:38", body: "路径可以修，覆盖掉的文件不行。" },
    ],
  },
  "1907": {
    lines: ["网页在我电脑上看字体是正常的，传到空间以后全变成方框。", "编码已经改过两次了，还是不行。", "是不是服务器那边默认 GBK？"],
    replies: [
      { author: "GY", createdAt: "2007-04-22 16:03", body: "先把页面和文件都存成同一种编码。不要只改浏览器。" },
      { author: "old_web", createdAt: "2007-04-22 16:18", body: "老空间经常这样，刷新不一定有用。" },
      { author: "Linxia", createdAt: "2007-04-22 16:31", body: "我这里标题还是方框。" },
      { author: "GY", createdAt: "2007-04-22 16:46", body: "我晚上去改。先别再上传新版。" },
    ],
  },
  "1908": {
    lines: ["下雨天想找几首不太吵的歌。", "不要那种一听就知道是在下雨的，最好是坐公交车最后一排可以听的。"],
    replies: [
      { author: "night_train", createdAt: "2007-05-13 00:18", body: "先说你喜欢什么类型，不然推荐会变成歌单大战。" },
      { author: "Summer17", createdAt: "2007-05-13 00:24", body: "没有特别喜欢的。只要不要太吵。" },
      { author: "Linxia", createdAt: "2007-05-13 00:31", body: "我有一首，但是歌名是乱码。" },
      { author: "night_train", createdAt: "2007-05-13 00:36", body: "那你发出来我也不知道是什么。" },
    ],
  },
  "1910": {
    lines: ["本周六凌晨论坛会做一次数据库维护。", "维护期间可能看不到旧主题，已经收藏的链接先不要反复刷新。"],
    replies: [
      { author: "MoonAdmin", createdAt: "2007-08-09 18:02", body: "预计半小时，恢复后会保留主题编号。" },
      { author: "GY", createdAt: "2007-08-09 18:17", body: "图片附件也会一起恢复吗？" },
      { author: "MoonAdmin", createdAt: "2007-08-09 18:22", body: "附件索引另算，不能保证全部回来。" },
    ],
  },
  "1911": {
    lines: ["个人主页的备份入口能不能放明显一点？", "每次改完才发现没有留原来的版本。"],
    replies: [
      { author: "Ran", createdAt: "2007-07-11 21:05", body: "你可以自己压缩一份放本地。" },
      { author: "Summer17", createdAt: "2007-07-11 21:09", body: "本地文件也会忘记放在哪里。" },
      { author: "GY", createdAt: "2007-07-11 21:14", body: "那就别覆盖原文件，名字加 edit。" },
    ],
  },
  "1912": {
    lines: ["今天南城又下雨了吗？", "我从学校出来的时候还没下，坐到车站已经全湿了。"],
    replies: [
      { author: "leaf", createdAt: "2007-07-29 17:40", body: "老城区那边下得很大，车站顶棚漏水。" },
      { author: "night_train", createdAt: "2007-07-29 17:46", body: "公交最后一排今天应该没人坐。" },
      { author: "Summer17", createdAt: "2007-07-29 17:53", body: "有人坐，而且鞋已经没救了。" },
    ],
  },
  "1913": {
    lines: ["如果总是想起同一个人，是因为那个人很重要吗？", "还是只是因为最近刚好总看到和她有关的东西。"],
    replies: [
      { author: "northwind", createdAt: "2007-06-15 00:12", body: "不一定，可能只是记忆还没换到下一页。" },
      { author: "Summer17", createdAt: "2007-06-15 00:19", body: "下一页也会保留上一页吗？" },
    ],
  },
  "1914": {
    lines: ["有没有适合坐公交听的歌？", "不要太吵，也不要歌词一直重复同一句。"],
    replies: [
      { author: "night_train", createdAt: "2007-05-15 23:08", body: "你这个条件最后会只剩下纯音乐。" },
      { author: "Linxia", createdAt: "2007-05-15 23:16", body: "纯音乐也可以，车窗声音太大了。" },
      { author: "night_train", createdAt: "2007-05-15 23:23", body: "那就听雨，不用找歌。" },
    ],
  },
  "1915": {
    lines: ["出一个 128M U 盘，读写正常，送一根短延长线。", "想换一张空白光盘或者两节相机电池。"],
    replies: [
      { author: "cameraKid", createdAt: "2007-08-01 19:02", body: "电池是 AA 还是专用电池？" },
      { author: "GY", createdAt: "2007-08-01 19:12", body: "如果没人换，U盘我收。" },
      { author: "Ran", createdAt: "2007-08-01 19:19", body: "别在帖子里留手机号，私信。" },
    ],
  },
};

export const forumThreads: ForumThreadSummary[] = [
  {
    id: "1711",
    routeId: "FORUM_THREAD_1711",
    board: "夜话",
    title: "主页到底要不要关",
    authorUid: 1847,
    createdAt: "2007-06-21 00:14",
    status: "ACTIVE",
    excerpt: "最近突然觉得个人主页挺麻烦的。",
  },
  {
    id: "1738",
    routeId: "FORUM_THREAD_1738",
    board: "摄影",
    title: "照片改过以后还算原来那张吗",
    authorUid: 1847,
    createdAt: "2007-07-05 23:48",
    status: "ACTIVE",
    excerpt: "比如只是调亮一点。内容没变。但是原来的被盖掉了。",
  },
  {
    id: "1682",
    routeId: "FORUM_THREAD_1682",
    board: "夜话",
    title: "如果别人一直说你是那样的人",
    authorUid: 1847,
    createdAt: "2007-06-03 23:11",
    status: "ACTIVE",
    excerpt: "如果别人一直说你是因为某个原因才做一件事。",
  },
  {
    id: "1792",
    routeId: "FORUM_THREAD_1792",
    board: "夜话",
    title: "你们会留聊天记录吗",
    authorUid: 1847,
    createdAt: "2007-07-18 01:02",
    status: "ACTIVE",
    excerpt: "突然发现以前聊天记录还在。看起来很奇怪。",
  },
  {
    id: "1816",
    routeId: "FORUM_THREAD_1816",
    board: "摄影",
    title: "卡片机夜景怎么拍",
    authorUid: 1847,
    createdAt: "2007-08-02 22:16",
    status: "ACTIVE",
    excerpt: "Sony 的小卡片机夜景真的很难拍。",
  },
  {
    id: "1847",
    routeId: "FORUM_THREAD_1847",
    board: "夜话",
    title: "如果一个人突然不再存在",
    authorUid: 1847,
    createdAt: "2007-08-17 20:31",
    status: "DELETED",
    excerpt: "指定主题不存在或已被删除。Capture fragment available.",
  },
  {
    id: "1904",
    routeId: "FORUM_THREAD_1904",
    board: "校园",
    title: "有人认识Linxia吗？",
    authorUid: 1766,
    createdAt: "2007-08-21 19:42",
    status: "ACTIVE",
    excerpt: "她主页怎么打不开了？摄影社那边有人知道吗？",
  },
  {
    id: "1905",
    routeId: "FORUM_THREAD_1905",
    board: "校园",
    title: "旧体育馆现在还能进吗",
    authorUid: 1766,
    createdAt: "2007-07-24 17:58",
    status: "ACTIVE",
    excerpt: "暑假想去旧体育馆拍点东西。侧门现在还能进吗？",
  },
  {
    id: "1906",
    routeId: "FORUM_THREAD_1906",
    board: "摄影",
    title: "你们会不会把旧照片刻光盘",
    authorUid: 1847,
    createdAt: "2007-06-07 21:12",
    status: "ACTIVE",
    excerpt: "原图、修改版、网页版分开存。文件名别覆盖。",
  },
  {
    id: "1907",
    routeId: "FORUM_THREAD_1907",
    board: "网页制作",
    title: "网页字体显示乱码",
    authorUid: 1739,
    createdAt: "2007-04-22 15:56",
    status: "ACTIVE",
    excerpt: "网页在我电脑上看字体是正常的，传到空间以后全变成方框。",
  },
  {
    id: "1908",
    routeId: "FORUM_THREAD_1908",
    board: "夜话",
    title: "推荐几首雨天听的歌",
    authorUid: 1741,
    createdAt: "2007-05-13 00:12",
    status: "ACTIVE",
    excerpt: "坐公交车最后一排可以听的，不要太吵。",
  },
  { id: "1910", routeId: "FORUM_THREAD_1910", board: "论坛公告", title: "本周论坛维护通知", authorUid: 1766, createdAt: "2007-08-09 17:55", status: "ACTIVE", excerpt: "本周六凌晨论坛会做一次数据库维护。" },
  { id: "1911", routeId: "FORUM_THREAD_1911", board: "建议反馈", title: "建议把个人主页备份入口放明显一点", authorUid: 1847, createdAt: "2007-07-11 20:58", status: "ACTIVE", excerpt: "每次改完才发现没有留原来的版本。" },
  { id: "1912", routeId: "FORUM_THREAD_1912", board: "闲聊灌水", title: "今天南城又下雨了吗", authorUid: 1847, createdAt: "2007-07-29 17:35", status: "ACTIVE", excerpt: "我从学校出来的时候还没下，坐到车站已经全湿了。" },
  { id: "1913", routeId: "FORUM_THREAD_1913", board: "情感", title: "如果总是想起同一个人", authorUid: 1847, createdAt: "2007-06-15 00:07", status: "ACTIVE", excerpt: "如果总是想起同一个人，是因为那个人很重要吗？" },
  { id: "1914", routeId: "FORUM_THREAD_1914", board: "音乐", title: "有没有适合坐公交听的歌", authorUid: 1847, createdAt: "2007-05-15 23:01", status: "ACTIVE", excerpt: "不要太吵，也不要歌词一直重复同一句。" },
  { id: "1915", routeId: "FORUM_THREAD_1915", board: "旧物交换", title: "出一个128M U盘", authorUid: 1739, createdAt: "2007-08-01 18:56", status: "ACTIVE", excerpt: "想换一张空白光盘或者两节相机电池。" },
];

export const thread1847Fragments: ForumFragment[] = [
  {
    id: "search_index",
    source: "Forum Search Index",
    completeness: "18%",
    content: "如果一个账号删掉以后，大家慢慢忘了这个账号是谁……",
  },
  {
    id: "rss_cache",
    source: "RSS Feed Cache",
    completeness: "31%",
    content: "……可是如果留下来的东西全都不是自己想留下的呢？",
  },
  {
    id: "reply_quote",
    source: "Reply Quote Cache",
    completeness: "24%",
    content: "不是说现实里真的消失。",
  },
  {
    id: "subscription_cache",
    source: "User Subscription Cache",
    completeness: "17%",
    content: "Summer17 / 2007-08-17 20:31",
  },
];

export const assembledThread1847 = [
  "如果一个账号删掉以后，大家慢慢忘了这个账号是谁，那个人在网上是不是就等于没存在过？",
  "不是说现实里真的消失。",
  "就是突然想到。",
  "比如以前写过很多东西，后来自己删掉了一部分，别人又记得另外一部分。",
  "再过几年以后，剩下来的那些东西是不是就会变成“这个人原来就是这样”。",
  "可是如果留下来的东西全都不是自己想留下的呢？",
  "那算谁的？",
  "我不知道。",
  "今天有点烦，当我半夜发神经吧。",
];

export const chapter02EvidenceRegistry: Record<string, Evidence> = {
  E021_summer17_thread_timestamp: {
    id: "E021_summer17_thread_timestamp",
    title: "Summer17 发帖时间：2007-08-17 20:31",
    sourceType: "RECOVERED",
    summary: "Thread 1847 的时间戳来自 Forum Index、RSS Cache 与 Reply Archive。",
    supports: ["knows_linxia_online_2031"],
  },
  E022_summer17_session: {
    id: "E022_summer17_session",
    title: "Summer17 Session：20:17-22:01",
    sourceType: "RECOVERED",
    summary: "Archived Forum Session Index 显示 UID1847 在 2007-08-17 20:17 登录，22:01 结束。",
    supports: ["knows_linxia_online_2031", "knows_gym_not_timeline_endpoint"],
  },
  E023_summer17_identity: {
    id: "E023_summer17_identity",
    title: "Summer17 与 Linxia 的归档会话关联",
    sourceType: "RECOVERED",
    summary: "UID1847 与 UID1741 共享 Device Cookie B7-41-A9-23，且存在 11 次历史匹配。",
    supports: ["knows_summer17_is_linxia"],
  },
};
