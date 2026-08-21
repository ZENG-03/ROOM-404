import type { GameState, RouteId, SourceType } from "../game/types";

export type InvestigationNodeKind = "mainline" | "side";
export type InvestigationNodeStatus = "complete" | "available" | "locked";

export interface InvestigationNode {
  id: string;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  code: string;
  kind: InvestigationNodeKind;
  title: string;
  objective: string;
  routeId: RouteId;
  routePath: string;
  sourceType: SourceType;
  hint: string;
  reward: string;
  complete: (state: GameState) => boolean;
}

export interface InvestigationOperation {
  id: string;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  detail: string;
  complete: (state: GameState) => boolean;
}

export interface SideCase {
  id: string;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  premise: string;
  routeId: RouteId;
  routePath: string;
  unlockAfter: string;
  complete: (state: GameState) => boolean;
}

const hasEvidence = (state: GameState, ...ids: string[]) => ids.every((id) => state.evidenceIds.includes(id));
const hasVisited = (state: GameState, routeId: RouteId) => (state.visitCounts[routeId] ?? 0) > 0;

export const investigationNodes: InvestigationNode[] = [
  {
    id: "ch1_notice_original",
    chapter: 1,
    code: "01-A",
    kind: "mainline",
    title: "找到原始公告",
    objective: "确认 2007-08-17 活动记录最早出现在哪个快照。",
    routeId: "SCHOOL_NOTICE_V1",
    routePath: "/archive/20070815/nc2ms.edu/photo-event",
    sourceType: "ORIGINAL",
    hint: "先打开 2007-08-15 快照，记录页面上的活动日期和捕获时间。",
    reward: "原始公告快照",
    complete: (state) => state.viewedCaptures.includes("20070815"),
  },
  {
    id: "ch1_notice_revision",
    chapter: 1,
    code: "01-B",
    kind: "mainline",
    title: "比对修改快照",
    objective: "找出页面日期和快照时间之间的冲突。",
    routeId: "SCHOOL_NOTICE_V2",
    routePath: "/archive/20070819/nc2ms.edu/photo-event",
    sourceType: "ALTERED",
    hint: "两个快照都要保存，最后显示的日期不一定是最早的记录。",
    reward: "DATE CONFLICT 线索",
    complete: (state) => state.viewedCaptures.includes("20070815") && state.viewedCaptures.includes("20070819"),
  },
  {
    id: "ch1_private_record",
    chapter: 1,
    code: "01-C",
    kind: "mainline",
    title: "追踪旧城区记录",
    objective: "在日期冲突后，找到与活动有关的私有记录。",
    routeId: "LINXIA_0817_PRIVATE",
    routePath: "/site/2007/linxia/0817/private",
    sourceType: "RECOVERED",
    hint: "先完成日期判断，受限目录才会承认这次访问。",
    reward: "PRIVATE RECORD / 0817",
    complete: (state) => state.evidenceIds.includes("E014_private_0817"),
  },
  {
    id: "ch2_thread_fragments",
    chapter: 2,
    code: "02-A",
    kind: "mainline",
    title: "拼回 1847 帖子",
    objective: "从缓存碎片中恢复 BlueMoon 的原始讨论顺序。",
    routeId: "FORUM_THREAD_1847_FRAGMENTS",
    routePath: "/archive/forum/thread/1847/fragments",
    sourceType: "ARCHIVED",
    hint: "碎片的顺序比单句内容更重要，先把时间线拼完整。",
    reward: "THREAD 1847 / ASSEMBLED",
    complete: (state) => state.forumThread1847Assembled,
  },
  {
    id: "ch2_identity_clues",
    chapter: 2,
    code: "02-B",
    kind: "mainline",
    title: "收集独立身份线索",
    objective: "把语言、网页编辑、活动和相机线索分开记录。",
    routeId: "FORUM_USER_1847",
    routePath: "/forum/user/1847",
    sourceType: "ARCHIVED",
    hint: "账号关联度可以提高置信度，但不能单独证明现实身份。",
    reward: "4 条独立身份线索",
    complete: (state) => (state.identityClueIds ?? []).length >= 4,
  },
  {
    id: "ch2_session_boundary",
    chapter: 2,
    code: "02-C",
    kind: "mainline",
    title: "锁定 20:31 Session",
    objective: "确认 Summer17 仍在线，但不要把在线记录直接等同于身份。",
    routeId: "FORUM_SESSION_MATCH",
    routePath: "/archive/forum/session/match",
    sourceType: "SESSION",
    hint: "把‘什么时候在线’和‘这个账号是谁’拆成两个问题。",
    reward: "SUMMER17 / 20:31",
    complete: (state) => hasEvidence(state, "E021_summer17_thread_timestamp", "E022_summer17_session"),
  },
  {
    id: "ch3_original_chain",
    chapter: 3,
    code: "03-A",
    kind: "mainline",
    title: "固定 Photo17 原始链",
    objective: "确认摄影社副本中没有明确的第四个人。",
    routeId: "PHOTO17_CLUB_FILE",
    routePath: "/archive/photo-club/20070817/DSC0417",
    sourceType: "ORIGINAL",
    hint: "先验证摄影社文件的 Hash，再谈后来版本的差异。",
    reward: "ORIGINAL BYTE CHAIN",
    complete: (state) => state.photo17ClubHashVerified,
  },
  {
    id: "ch3_difference_map",
    chapter: 3,
    code: "03-B",
    kind: "mainline",
    title: "绘制版本差异",
    objective: "比较 2007 原始、恢复副本和后续重建版本。",
    routeId: "PHOTO17_COMPARE",
    routePath: "/photo/forensics/compare",
    sourceType: "RECOVERED",
    hint: "Hash 不同不等于局部篡改，先标注每一代来源。",
    reward: "VERSION DIFFERENCE MAP",
    complete: (state) => state.photo17DifferenceMapSeen && state.photo17ComparePairs.length >= 2,
  },
  {
    id: "ch3_session_history",
    chapter: 3,
    code: "03-C",
    kind: "mainline",
    title: "查看 Photo17 会话历史",
    objective: "确认当前照片是动态 Session 版本，而不是固定的后来事实。",
    routeId: "PHOTO17_SESSION_HISTORY",
    routePath: "/photo/forensics/DSC0417/session-history",
    sourceType: "SESSION",
    hint: "当前显示状态也属于来源链的一部分，需要单独标注。",
    reward: "SESSION VARIANT",
    complete: (state) => state.photo17SessionHistorySeen,
  },
  {
    id: "ch4_mount_shell",
    chapter: 4,
    code: "04-A",
    kind: "mainline",
    title: "启动 Recovery Shell",
    objective: "进入只读桌面，确认它是一个恢复环境。",
    routeId: "RECOVERY_DESKTOP",
    routePath: "/recovery/desktop",
    sourceType: "SYSTEM",
    hint: "桌面不是林夏现实电脑的直接镜像，先记录环境身份。",
    reward: "RECOVERY ENVIRONMENT",
    complete: (state) => state.recoveryDesktopEntered,
  },
  {
    id: "ch4_terminal_sources",
    chapter: 4,
    code: "04-B",
    kind: "mainline",
    title: "读取系统来源",
    objective: "通过 Terminal 读取 manifest、recovery.log 和 memory status。",
    routeId: "RECOVERY_DESKTOP",
    routePath: "/recovery/desktop",
    sourceType: "SYSTEM",
    hint: "从 help 开始，依次尝试 type environment.manifest、type recovery.log、memory status。",
    reward: "MAPPED SOURCE LOG",
    complete: (state) => state.recoveryManifestSeen && state.recoveryLogSeen && state.recoveryMemoryStatusSeen,
  },
  {
    id: "ch4_raw_boundary",
    chapter: 4,
    code: "04-C",
    kind: "mainline",
    title: "挂载 Raw View",
    objective: "比较原始目录和 Shell 映射，确认界面连续性是构建结果。",
    routeId: "RECOVERY_DESKTOP",
    routePath: "/recovery/desktop",
    sourceType: "RECOVERED",
    hint: "先读取 manifest 与 log，再使用 mount raw；不要把映射目录当作原始设备。",
    reward: "RAW / SHELL BOUNDARY",
    complete: (state) => state.recoveryRawViewSeen && state.recoveryUnknownSourceSeen,
  },
  {
    id: "ch5_history_layers",
    chapter: 5,
    code: "05-A",
    kind: "mainline",
    title: "展开 ROOM 历史层",
    objective: "查看关键年份，区分历史记录、重建对象和当前 Session。",
    routeId: "ROOM_HISTORY",
    routePath: "/service/history",
    sourceType: "SYSTEM",
    hint: "年份不是装饰，它们决定对象从 04 到 404 的迁移关系。",
    reward: "ROOM HISTORY MAP",
    complete: (state) => [2011, 2012, 2014, 2016, 2022, 2026].every((year) => state.roomHistoryYearsSeen.includes(year)),
  },
  {
    id: "ch5_persona_boundary",
    chapter: 5,
    code: "05-B",
    kind: "mainline",
    title: "拆分 Unknown 接口",
    objective: "确认 Unknown 是混合来源接口，而不是林夏的新身份。",
    routeId: "UNRESOLVED_PERSONA_OBJECT",
    routePath: "/object/UNRESOLVED_PERSONA",
    sourceType: "UNKNOWN",
    hint: "把 Subject migration 和 Unresolved Persona 分开检查。",
    reward: "IDENTITY STATUS / NONE",
    complete: (state) => state.subject404MigrationSeen && state.unresolvedPersonaSeen,
  },
  {
    id: "ch5_observer_model",
    chapter: 5,
    code: "05-C",
    kind: "mainline",
    title: "识别 Observer405",
    objective: "确认 405 是当前观察者模型，而不是已经成立的新 Subject。",
    routeId: "OBSERVER_CANDIDATE",
    routePath: "/service/observer/candidate",
    sourceType: "SESSION",
    hint: "需要先完成 ROOM、Unknown 和观察者推断，再查看 Candidate。",
    reward: "OBSERVER405 / FORMING",
    complete: (state) => state.observerModelSeen && state.observerInferenceCorrected && state.observer405Seen,
  },
  {
    id: "final_source_boundary",
    chapter: 6,
    code: "06-A",
    kind: "mainline",
    title: "固定最后可靠来源",
    objective: "确认 10:12 之后没有可靠现实来源，Generated 不能改写历史。",
    routeId: "FINAL_SOURCE_BOUNDARY",
    routePath: "/resolution/review/source-boundary",
    sourceType: "ORIGINAL",
    hint: "先看原始边界，再评价 Generated sample 的相似度。",
    reward: "10:12 SOURCE BOUNDARY",
    complete: (state) => state.finalGeneratedSourceChecked && state.finalSourceBoundarySeen,
  },
  {
    id: "final_observer_review",
    chapter: 6,
    code: "06-B",
    kind: "mainline",
    title: "完成 Observer Review",
    objective: "决定当前观察者记录应如何被保存和标注。",
    routeId: "FINAL_OBSERVER_REVIEW",
    routePath: "/resolution/review/observer",
    sourceType: "SESSION",
    hint: "观察者记录描述玩家行为，不等于玩家本人或林夏。",
    reward: "OBSERVER REVIEW",
    complete: (state) => state.finalObserverReviewDone && Boolean(state.finalUnknownChoice),
  },
  {
    id: "final_resolution",
    chapter: 6,
    code: "06-C",
    kind: "mainline",
    title: "提交 Resolution 政策",
    objective: "在保留来源边界的前提下，选择如何处理连续性模型。",
    routeId: "RESOLUTION_CENTER",
    routePath: "/resolution",
    sourceType: "SYSTEM",
    hint: "Resolution 改变模型和未来输出，不会删除已经记录的来源。",
    reward: "ENDING POLICY",
    complete: (state) => state.resolutionApplied,
  },
];

export const investigationOperations: InvestigationOperation[] = [
  { id: "operation:recovery-manifest", chapter: 4, label: "读取 environment.manifest", detail: "确认 Recovery Environment 的构建身份。", complete: (state) => state.recoveryManifestSeen },
  { id: "operation:recovery-log", chapter: 4, label: "读取 recovery.log", detail: "确认系统如何映射消息、日历和用户 Shell。", complete: (state) => state.recoveryLogSeen },
  { id: "operation:memory-status", chapter: 4, label: "检查 memory status", detail: "发现 Persona Memory Graph 的一致性错误。", complete: (state) => state.recoveryMemoryStatusSeen },
  { id: "operation:mount-raw", chapter: 4, label: "挂载 Raw View", detail: "把原始目录与可读 Shell 分开。", complete: (state) => state.recoveryRawViewSeen },
  { id: "operation:calendar-layers", chapter: 4, label: "比较三层日历", detail: "区分个人、恢复和当前 Session 日历。", complete: (state) => ["personal", "recovered", "session"].every((layer) => state.recoveryCalendarLayersSeen.includes(layer)) },
  { id: "operation:room-history", chapter: 5, label: "读取 ROOM 历史", detail: "查看对象命名和迁移的时间层。", complete: (state) => state.roomHistoryYearsSeen.length >= 6 },
];

export const sideCases: SideCase[] = [
  { id: "side:guestbook-echo", chapter: 1, title: "留言板上的回声", premise: "一条没有署名的留言重复使用了主页里的措辞。", routeId: "LINXIA_GUESTBOOK", routePath: "/site/2007/linxia/guestbook", unlockAfter: "ch1_notice_revision", complete: (state) => hasVisited(state, "LINXIA_GUESTBOOK") },
  { id: "side:forum-edit-language", chapter: 2, title: "谁在替谁编辑网页", premise: "一个普通论坛主题里出现了 original / edit / web 的异常组合。", routeId: "FORUM_THREAD_1738", routePath: "/forum/thread/1738", unlockAfter: "ch2_thread_fragments", complete: (state) => hasVisited(state, "FORUM_THREAD_1738") },
  { id: "side:photo-club-index", chapter: 3, title: "摄影社的备份索引", premise: "摄影社目录保留了一条没有进入公开网页的文件记录。", routeId: "PHOTO17_CLUB_INDEX", routePath: "/archive/photo-club/20070817/index", unlockAfter: "ch3_original_chain", complete: (state) => hasVisited(state, "PHOTO17_CLUB_INDEX") },
  { id: "side:recycle-bin", chapter: 4, title: "回收站没有解释删除", premise: "被删除的对象说明了系统保留了什么，却没有说明为什么删除。", routeId: "RECOVERY_DESKTOP", routePath: "/recovery/desktop", unlockAfter: "ch4_mount_shell", complete: (state) => state.recoveryRecycleItemIdsSeen.length > 0 },
  { id: "side:history-2013", chapter: 5, title: "2013 的生成标签", premise: "ROOM 历史中唯一明确标注 Generated 的年份，可能改变你的分类方式。", routeId: "ROOM_HISTORY_2013", routePath: "/service/history/2013", unlockAfter: "ch5_history_layers", complete: (state) => state.roomHistoryYearsSeen.includes(2013) },
  { id: "side:authored-object", chapter: 6, title: "玩家留下的对象", premise: "你写下的文字也进入了当前 Session 的图谱。", routeId: "OBSERVER_AUTHORED_OBJECT", routePath: "/service/observer/object/PLAYER_POST_001", unlockAfter: "ch5_observer_model", complete: (state) => state.playerPostCreated && hasVisited(state, "OBSERVER_AUTHORED_OBJECT") },
];

export function getInvestigationNodeStatus(node: InvestigationNode, state: GameState): InvestigationNodeStatus {
  if (node.complete(state)) return "complete";
  if (state.chapter < node.chapter) return "locked";

  if (node.kind === "mainline") {
    const chapterNodes = investigationNodes.filter((candidate) => candidate.kind === "mainline" && candidate.chapter === node.chapter);
    const currentIndex = chapterNodes.findIndex((candidate) => candidate.id === node.id);
    const previousNode = currentIndex > 0 ? chapterNodes[currentIndex - 1] : undefined;
    if (previousNode && !previousNode.complete(state)) return "locked";
  }

  return "available";
}

export function getUnlockedSideCases(state: GameState): SideCase[] {
  const completed = new Set([
    ...(state.investigationNodeIds ?? []),
    ...investigationNodes.filter((node) => node.complete(state)).map((node) => node.id),
  ]);
  return sideCases.filter((item) => completed.has(item.unlockAfter) || state.chapter > item.chapter);
}

export function getInvestigationProgress(state: GameState) {
  const completedNodes = investigationNodes.filter((node) => node.complete(state));
  const availableNodes = investigationNodes.filter((node) => getInvestigationNodeStatus(node, state) === "available");
  const activeNode = availableNodes.find((node) => node.kind === "mainline") ?? investigationNodes.find((node) => node.chapter > state.chapter && node.kind === "mainline");
  const unlockedSides = getUnlockedSideCases(state);
  return {
    completedNodes,
    availableNodes,
    activeNode,
    unlockedSides,
    totalNodes: investigationNodes.length,
    totalOperations: investigationOperations.length,
    completedOperations: investigationOperations.filter((operation) => operation.complete(state)),
  };
}
