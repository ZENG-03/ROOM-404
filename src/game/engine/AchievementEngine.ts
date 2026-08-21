import type { GameState } from "../types";

export type AchievementCategory = "Investigation" | "Web Archaeology" | "Photo Forensics" | "System" | "Observer";

export interface AchievementDefinition {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  hidden?: boolean;
  reward: string;
  condition: (state: GameState) => boolean;
}

const hasEvent = (state: GameState, type: string, target?: string) => state.events.some((event) => event.type === type && (!target || event.target === target));

export const achievementDefinitions: AchievementDefinition[] = [
  {
    id: "archive_beginner",
    title: "Archive Beginner",
    description: "你发现了网页留下的痕迹。",
    category: "Investigation",
    reward: "Evidence Attached",
    condition: (state) => state.currentRouteId === "ARCHIVE_HOME" || (state.visitCounts.ARCHIVE_HOME ?? 0) > 0,
  },
  {
    id: "old_internet_explorer",
    title: "Old Internet Explorer",
    description: "访问三个不再出现在普通导航里的旧链接。",
    category: "Web Archaeology",
    reward: "Hidden URL trail recorded",
    condition: (state) => ["LINXIA_0817_INDEX", "LINXIA_0817_PRIVATE", "LINXIA_BACKUP_ZIP", "SCHOOL_NOTICE_V1", "SCHOOL_NOTICE_V2"].filter((route) => (state.visitCounts[route as keyof typeof state.visitCounts] ?? 0) > 0).length >= 3,
  },
  {
    id: "the_original",
    title: "The Original",
    description: "查看 DSC0417 的摄影社原始副本。",
    category: "Photo Forensics",
    reward: "E030 / ORIGINAL source attached",
    condition: (state) => state.evidenceIds.includes("E030_photo17_original_club_copy"),
  },
  {
    id: "false_reconstruction",
    title: "False Reconstruction",
    description: "比较 2015 Restore、2016 Reconstruction 和 2022 Reconstruction。",
    category: "Photo Forensics",
    reward: "Three-generation comparison recorded",
    condition: (state) => ["2015:2016", "2016:2022"].every((pair) => state.photo17ComparePairs.includes(pair)) && state.knowledgeIds.includes("knows_photo17_versions_differ"),
  },
  {
    id: "welcome_back",
    title: "Welcome Back",
    description: "第一次进入 Recovery Desktop。",
    category: "System",
    reward: "Recovery Shell mounted",
    condition: (state) => state.recoveryDesktopEntered,
  },
  {
    id: "something_is_wrong",
    title: "Something Is Wrong",
    description: "第一次查看 MEMORY ERROR 指向的 Persona Memory Graph。",
    category: "System",
    reward: "Memory graph anomaly attached",
    condition: (state) => state.recoveryMemoryStatusSeen,
  },
  {
    id: "observer_detected",
    title: "Observer Detected",
    description: "在 Recovery Terminal 中执行 whoami。",
    category: "Observer",
    reward: "Observer behavior recorded",
    condition: (state) => hasEvent(state, "TERMINAL_COMMAND", "whoami"),
  },
  {
    id: "night_shift_visitor",
    title: "夜班访客",
    description: "在凌晨访问 BlueMoon。",
    category: "Web Archaeology",
    hidden: true,
    reward: "Guest_0001 trace",
    condition: (state) => state.events.some((event) => event.routeId === "FORUM_HOME" && [0, 1, 2, 3, 4].includes(new Date(event.createdAt).getHours())),
  },
  {
    id: "deletion_attempt",
    title: "删除者",
    description: "删除玩家主题后，再打开它留下的归档副本。",
    category: "System",
    hidden: true,
    reward: "Deletion Attempt recorded",
    condition: (state) => state.playerPostDeleted && state.playerPostArchivedCopySeen,
  },
  {
    id: "the_skeptic",
    title: "不相信的人",
    description: "拒绝 Observer 的身份推断，并完成 RETURN Resolution。",
    category: "Observer",
    hidden: true,
    reward: "Observer inference rejected",
    condition: (state) => state.resolutionApplied && state.endingId === "RETURN" && state.finalObserverInferenceChoice === "incorrect",
  },
  {
    id: "the_archivist",
    title: "档案管理员",
    description: "完成 ARCHIVIST Resolution，保留来源之间的差异。",
    category: "Observer",
    hidden: true,
    reward: "All source states preserved separately",
    condition: (state) => state.resolutionApplied && state.endingId === "ARCHIVIST",
  },
  {
    id: "observer_405",
    title: "第405个观察者",
    description: "发现 Observer405 正在形成。",
    category: "Observer",
    hidden: true,
    reward: "Subject405 candidate attached",
    condition: (state) => state.observer405Seen || state.endingId === "OBSERVER",
  },
];

export function getAchievementSnapshot(state: GameState) {
  const unlocked = new Set(state.achievementsUnlocked ?? []);
  return achievementDefinitions.map((definition) => ({
    ...definition,
    unlocked: unlocked.has(definition.id) || definition.condition(state),
  }));
}

export function getNewAchievementIds(state: GameState): string[] {
  const unlocked = new Set(state.achievementsUnlocked ?? []);
  return achievementDefinitions.filter((definition) => !unlocked.has(definition.id) && definition.condition(state)).map((definition) => definition.id);
}
