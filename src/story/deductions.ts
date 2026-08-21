import type { DeductionCase } from "../game/types";

export type DeductionEvaluationStatus = "correct" | "partial" | "incorrect" | "incomplete";

export function evaluateDeduction(caseDef: DeductionCase, answerId: string, evidenceIds: string[]): DeductionEvaluationStatus {
  const selected = [...new Set(evidenceIds)];
  if (selected.length < 2 || selected.length > 4) return "incomplete";
  const missingRequired = caseDef.requiredEvidenceIds.some((id) => !selected.includes(id));
  if (answerId === caseDef.correctAnswerId && !missingRequired) return "correct";
  if (answerId === caseDef.correctAnswerId && missingRequired) return "partial";
  return "incorrect";
}

export const deductionCases: DeductionCase[] = [
  {
    id: "chapter1_date_conflict",
    chapter: 1,
    question: "学校公告的两个日期，哪一个结论最符合当前来源链？",
    candidateAnswers: [
      { id: "public_date_is_truth", label: "18号才是活动真实日期", explanation: "后续快照显示18号，但它没有解释更早的原始公告。" },
      { id: "date_was_changed", label: "原始活动是17号，18号是后续改写", explanation: "原始公告、修改快照和发布时间共同构成日期冲突。" },
      { id: "both_dates_are_fake", label: "两个日期都不能使用", explanation: "来源存在冲突，但原始快照仍然是可记录的来源。" },
    ],
    correctAnswerId: "date_was_changed",
    requiredEvidenceIds: ["E001_school_original_notice", "E002_school_modified_notice"],
    contradictionEvidenceIds: [],
    hintText: "先比较两份公告的发布时间与更新时间，不要只看页面上最后显示的日期。",
    successKnowledgeIds: ["knows_event_date_changed"],
    unlockTextEntryIds: ["text-diary-2007-08-03-1345"],
    nextRoute: "ARCHIVE_SEARCH",
    partialFeedback: "你已经看到日期冲突，但还没有把原始快照和后续改写放进同一个时间顺序。",
  },
  {
    id: "chapter2_session_boundary",
    chapter: 2,
    question: "Summer17 的 Session 能证明什么，不能证明什么？",
    candidateAnswers: [
      { id: "session_proves_identity", label: "Session 直接证明 Summer17 就是林夏", explanation: "账号活动与身份关系有关，但账号本身不是现实身份的充分证明。" },
      { id: "session_proves_online", label: "它确认20:31仍在线，但身份关联仍需独立来源", explanation: "时间戳和 Session 证明在线活动，身份需要语言、主页或 Cookie 等关系。" },
      { id: "session_is_generated", label: "Session 是 ROOM 生成的内容", explanation: "当前对象来自论坛归档和 Session 缓存，不能直接归入 Generated。" },
    ],
    correctAnswerId: "session_proves_online",
    requiredEvidenceIds: ["E021_summer17_thread_timestamp", "E022_summer17_session"],
    contradictionEvidenceIds: [],
    hintText: "把‘什么时候在线’和‘这个账号是谁’拆成两个不同的问题。",
    successKnowledgeIds: ["knows_linxia_online_2031"],
    unlockTextEntryIds: ["text-deleted-thread-thread-1847-0817-2755"],
    nextRoute: "FORUM_SESSION_MATCH",
    partialFeedback: "时间关系已经成立，但身份关系还不能只依靠账号名或一次 Session。",
  },
  {
    id: "chapter3_reconstruction_boundary",
    chapter: 3,
    question: "Photo17 的‘人形特征’最早属于哪一层来源？",
    candidateAnswers: [
      { id: "original_contains_person", label: "2007 原始文件里已经有明确第四人", explanation: "原始链和摄影社副本都没有明确第四人。" },
      { id: "reconstruction_introduces_feature", label: "人形特征首次出现在2016重建版本", explanation: "2015 Restore 没有确认人形，2016 Reconstruction 才出现结构性增量。" },
      { id: "session_created_feature", label: "2026 Session 首次生成了人形特征", explanation: "会话版本会改变展示状态，但重建记录早于当前 Session。" },
    ],
    correctAnswerId: "reconstruction_introduces_feature",
    requiredEvidenceIds: ["E030_photo17_original_club_copy", "E031_photo17_recovered_copy", "E034_2016_artifact"],
    contradictionEvidenceIds: [],
    hintText: "按 Original → Recovered → Reconstructed 的来源层级排列，而不是按画面像不像来判断。",
    successKnowledgeIds: ["knows_human_first_appears_in_reconstruction"],
    unlockTextEntryIds: ["text-photo17-recon-2016-4052"],
    nextRoute: "PHOTO17_COMPARE",
    partialFeedback: "你找到了差异，但还需要确定差异首次出现的版本层级。",
  },
  {
    id: "chapter4_recovery_shell",
    chapter: 4,
    question: "Recovery Desktop 应该被归类为什么？",
    candidateAnswers: [
      { id: "linxia_physical_device", label: "林夏当年实际使用的电脑", explanation: "Display Profile 和 Recovery Build 都指向后来构建的环境。" },
      { id: "recovered_shell", label: "根据多来源整理出的 Recovery Shell", explanation: "Raw Directory、manifest 和 Session 层共同说明这是系统构建的可读环境。" },
      { id: "pure_generated_story", label: "完全由 Generated 文本生成的故事页面", explanation: "Recovery 包含恢复文件和来源对象，不能整体归为 Generated。" },
    ],
    correctAnswerId: "recovered_shell",
    requiredEvidenceIds: ["E041_recovery_environment_build", "E043_calendar_observer_events", "E047_raw_vs_shell"],
    contradictionEvidenceIds: [],
    hintText: "注意‘设备’与‘环境’的差别：一个是现实硬件，一个是系统整理后的可读界面。",
    successKnowledgeIds: ["knows_desktop_is_recovery_shell"],
    unlockTextEntryIds: ["text-普通文件-014-4197"],
    nextRoute: "RECOVERY_DESKTOP",
    partialFeedback: "你已经看见恢复来源，但还没有说明 Shell 如何重新组织 Raw Directory。",
  },
  {
    id: "chapter5_unknown_boundary",
    chapter: 5,
    question: "ROOM、Unknown 和 Observer405 三者的关系是什么？",
    candidateAnswers: [
      { id: "unknown_is_linxia", label: "Unknown 是林夏被系统恢复后的新名字", explanation: "Unknown 的稳定身份明确为 NONE，不能直接等同于林夏。" },
      { id: "system_has_layers", label: "ROOM 是档案系统，Unknown 是未解析接口，Observer405 是当前观察者模型", explanation: "三者分别属于系统、混合输出和当前 Session 层。" },
      { id: "observer_is_subject", label: "Observer405 已经成为新的 Subject", explanation: "Observer405 仍处于 forming 状态，尚未完成 Subject promotion。" },
    ],
    correctAnswerId: "system_has_layers",
    requiredEvidenceIds: ["E080_room_full_name", "E088_unresolved_persona", "E089_observer_model"],
    contradictionEvidenceIds: [],
    hintText: "把名称、输出接口和当前观察者分开看，连续性不等于身份等同。",
    successKnowledgeIds: ["knows_room_full_name", "knows_unknown_is_unresolved_persona", "knows_observer_model_tracks_game_behavior"],
    unlockTextEntryIds: ["text-unknown文本池-5825"],
    nextRoute: "OBSERVER_SERVICE",
    partialFeedback: "你已经识别出其中一层，但还需要把系统、Unknown 和观察者分别归位。",
  },
  {
    id: "final_source_boundary",
    chapter: 6,
    question: "Final Resolution 应该依据什么边界做决定？",
    candidateAnswers: [
      { id: "generated_is_history", label: "高连续性 Generated 文本可以当作历史事实", explanation: "相似度和语言匹配不能替代原始来源。" },
      { id: "source_boundary_first", label: "保留10:12之前的可靠来源，并把之后的内容按模型层分类", explanation: "Resolution 改变的是模型和未来重建，不会重写现实历史。" },
      { id: "delete_all", label: "删除所有冲突对象才能得到真相", explanation: "所有策略都保留 Source Archive，删除活动连续性不等于删除来源。" },
    ],
    correctAnswerId: "source_boundary_first",
    requiredEvidenceIds: ["E100_generated_final_sample", "E101_real_world_source_boundary", "E103_resolution_impact_preview"],
    contradictionEvidenceIds: [],
    hintText: "先锁定最后可靠现实记录，再判断 Generated、Observer 和 Resolution 的作用范围。",
    successKnowledgeIds: ["knows_linxia_fate_unresolved", "knows_generated_fit_not_history", "knows_resolution_affects_models_not_reality"],
    unlockTextEntryIds: ["text-final-chapter与四结局-5883"],
    nextRoute: "RESOLUTION_CENTER",
    partialFeedback: "你已经触及来源边界，但还需要把历史事实、模型输出和政策影响分开。",
  },
];

export function getDeductionCase(caseId: string): DeductionCase | undefined {
  return deductionCases.find((item) => item.id === caseId);
}
export function getNextDeductionCaseId(caseId: string, solvedIds: string[] = []): string {
  const currentIndex = deductionCases.findIndex((item) => item.id === caseId);
  const candidates = currentIndex >= 0 ? deductionCases.slice(currentIndex + 1) : deductionCases;
  return candidates.find((item) => !solvedIds.includes(item.id))?.id ?? "";
}
