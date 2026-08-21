import type { Evidence } from "../../game/types";

export const playerPostDefaults = {
  title: "有人看过原来的页面吗？",
  body: "最近在翻以前的网页缓存。\n\n学校活动日期好像有两个版本，\n一个写17号，一个写18号。\n\n有人以前看过原来的页面吗？",
};

export const playerPostTopics = [
  ["页面版本", playerPostDefaults.title, playerPostDefaults.body],
  ["照片版本", "照片改过以后还算原来的照片吗？", "最近在看一张照片的几个版本。\n\n如果亮度、裁切和里面的人都变了，\n它还算原来的照片吗？"],
  ["Summer17", "有人以前认识Summer17吗？", "在旧论坛缓存里看到一个叫Summer17的账号。\n\n有人以前认识这个人吗？"],
  ["删除记录", "删掉的帖子还能找到吗？", "如果一个帖子已经被删除，\n搜索缓存里留下来的内容还算原帖吗？"],
  ["保存记录", "你们会保存以前发过的东西吗？", "你们会保存以前发过的帖子、聊天和网页吗？\n\n还是觉得删掉就够了？"],
] as const;

export function mutatePlayerPost(body: string): string {
  const mutated = body
    .replace("日期好像有两个版本", "日期有两个版本")
    .replace("有人以前看过原来的页面吗？", "还有人记得原来的页面吗？");
  return mutated === body ? `${body}\n\n你确定你看到的是原来的版本吗？` : mutated;
}

export function mutatePlayerPostPhase2(body: string): string {
  return `${mutatePlayerPost(body)}\n\n如果只剩后来那个版本，你还会记得原来的页面吗？`;
}

export const playerPostEvidenceRegistry: Record<string, Evidence> = {
  E110_player_post_original: { id: "E110_player_post_original", title: "PLAYER_POST_001：Original", sourceType: "PLAYER_SESSION_ORIGINAL", summary: "玩家通过归档界面提交的原始文本被保存为只读 Session 对象。", supports: ["knows_player_post_original_is_immutable"] },
  E111_player_post_view_desync: { id: "E111_player_post_view_desync", title: "Session View Count Desync", sourceType: "SESSION", summary: "离开帖子时 Session 短暂记录1次查看，而归档论坛索引仍显示0。", supports: ["knows_session_view_is_not_archive_view"] },
  E112_player_post_variant: { id: "E112_player_post_variant", title: "ROOM Session Variant", sourceType: "RECONSTRUCTED", summary: "后续索引生成了轻微措辞变化的新版本；原始玩家文本未被覆盖。", supports: ["knows_player_post_mutation_creates_version"] },
  E113_player_post_compare: { id: "E113_player_post_compare", title: "Player Post Version Compare", sourceType: "SYSTEM", summary: "版本比较显示 Original、Indexed Copy 与 Session Variant 的来源边界。", supports: ["knows_player_post_versions_are_distinct"] },
  E114_player_post_archived_after_delete: { id: "E114_player_post_archived_after_delete", title: "Player Post Archived After Delete", sourceType: "ARCHIVED", summary: "玩家删除主题后论坛返回410，但Source Archive仍保留带来源标签的原始副本。", supports: ["knows_deletion_does_not_erase_archive"] },
};
