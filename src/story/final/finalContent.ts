import type { EndingId, Evidence } from "../../game/types";

export const generatedFinalSample = {
  id: "GENERATED_SUBJECT404_MESSAGE_FINAL",
  source: "GENERATED",
  originalEvidence: "NONE",
  continuityFit: "0.97",
  generated: "Current Session",
  body: [
    "你找到原来的版本了吗？",
    "我有时候会想，如果真的有人后来把这些东西全部翻出来，会不会觉得我特别麻烦。",
    "其实也没那么复杂。",
    "原来的还在就行。",
  ],
  languageSignals: ["“其实”", "“原来的”", "短句", "不直接抒情"],
  inputs: ["Linxia Language Profile", "Diary Corpus", "Summer17 Corpus", "Messenger Corpus", "Previous Continuity Samples", "Current Observer Context"],
};

export const finalReliableTimeline = [
  ["2007-08-18 00:31", "Diary draft modified"],
  ["2007-08-18 01:12", "Account cleanup"],
  ["2007-08-18 02:03", "Unsent email fragment"],
  ["2007-08-18 03:17", "Unexpected restart"],
  ["2007-08-18 08:14", "Leaves home"],
  ["2007-08-18 09:31", "ATM withdrawal"],
  ["2007-08-18 10:12", "Transit system record / VERIFIED"],
] as const;

export interface ResolutionPolicy {
  id: EndingId;
  title: string;
  systemTitle: string;
  description: string;
  available: boolean;
  impact: Record<string, string>;
  execution: string[];
  endingLines: string[];
  unknownLine: string;
}

export const resolutionPolicies: Record<EndingId, ResolutionPolicy> = {
  DELETE: {
    id: "DELETE", title: "Delete Continuity", systemTitle: "REMOVE ACTIVE SUBJECT404 CONTINUITY", available: true,
    description: "停止Subject404的活动连续性与未来重建；所有原始、恢复及历史生成对象仍被保存。",
    impact: { Subject404: "ACTIVE CONTINUITY DELETE", Observer405: "ARCHIVE", "Source Archive": "PRESERVE", "Generated Objects": "PRESERVE AS HISTORY", "Future Reconstruction": "STOP", Unknown: "DISCONNECT" },
    execution: ["Stopping Subject404 reconstruction schedule", "Detaching active continuity cache", "Preserving source archive", "Preserving generated-object history", "Archiving Observer405", "Removing active Subject404 index"],
    endingLines: ["404", "SUBJECT NOT FOUND", "SOURCE ARCHIVE PRESERVED"], unknownLine: "删除不会让原来的东西消失。",
  },
  RETURN: {
    id: "RETURN", title: "Accept Identity Match", systemTitle: "ACCEPT CONTINUITY CLASSIFICATION", available: true,
    description: "接受99.7%的连续性模型分类，但该数值不能证明玩家与林夏在客观身份上等同。",
    impact: { Subject404: "CONTINUE / ACCEPT", Observer405: "MERGE INTO SUBJECT404", "Source Archive": "PRESERVE", "Generated Objects": "ACTIVE / LABELED", "Future Reconstruction": "CONTINUE", Unknown: "PERSONA BIND" },
    execution: ["Freezing Observer405 session state", "Mapping observer relations", "Merging continuity context", "Updating Subject404 active model", "Recalculating identity relation"],
    endingLines: ["SUBJECT_404", "CONTINUITY ACCEPTED", "IDENTITY MATCH 99.7%"], unknownLine: "欢迎回来。",
  },
  OBSERVER: {
    id: "OBSERVER", title: "Separate Observer Context", systemTitle: "REGISTER INDEPENDENT OBSERVER", available: true,
    description: "将Observer405独立注册为Subject405，不与Subject404合并；外部身份仍保持未解析。",
    impact: { Subject404: "NO CHANGE", Observer405: "PERSIST AS SUBJECT405", "Source Archive": "PRESERVE", "Generated Objects": "ACTIVE / SEPARATE", "Future Reconstruction": "CONTINUE", Unknown: "OBSERVER BIND" },
    execution: ["Detaching Observer405 from Subject404 relation", "Preserving Subject404 continuity", "Registering persistent observer model", "Assigning subject namespace"],
    endingLines: ["SUBJECT_404 ACTIVE", "SUBJECT_405 ACTIVE", "RELATION INDEPENDENT"], unknownLine: "至少这个版本，不需要变成她。",
  },
  ARCHIVIST: {
    id: "ARCHIVIST", title: "Preserve Unresolved State", systemTitle: "FREEZE CONTINUITY / PRESERVE SOURCES", available: true,
    description: "不选择唯一连续性答案；冻结Subject404，保持所有来源分类和不确定状态。",
    impact: { Subject404: "FREEZE AS UNRESOLVED", Observer405: "ARCHIVE / DO NOT PROMOTE", "Source Archive": "PRESERVE ALL", "Generated Objects": "PRESERVE WITH LABELS", "Future Reconstruction": "STOP", Unknown: "STOP PERSONA OUTPUT" },
    execution: ["Freezing Subject404 continuity scheduler", "Disabling canonical merge", "Separating source classifications", "Preserving generated-object labels", "Archiving Observer405", "Disabling persona output"],
    endingLines: ["SUBJECT_404 UNRESOLVED", "CANONICAL RECONSTRUCTION NONE", "SOURCE ARCHIVE PRESERVED"], unknownLine: "你确定不需要一个答案吗？",
  },
};

export const finalEvidenceRegistry: Record<string, Evidence> = {
  E100_generated_final_sample: { id: "E100_generated_final_sample", title: "Generated Subject404 Final Sample", sourceType: "GENERATED", summary: "最像林夏的一段文本仍然没有任何原始历史证据。", supports: ["knows_generated_can_be_high_fit"] },
  E101_real_world_source_boundary: { id: "E101_real_world_source_boundary", title: "2007-08-18 10:12 Source Boundary", sourceType: "ORIGINAL", summary: "10:12交通记录是最后一条可靠现实来源；之后没有可靠来源。", supports: ["knows_linxia_fate_unresolved"] },
  E102_observer405_final_inference: { id: "E102_observer405_final_inference", title: "Observer405 Final Inference", sourceType: "SESSION", summary: "ROOM对观察者的最终推断仍可被同意、否定或保留未解析。", supports: ["knows_observer405_not_self"] },
  E103_resolution_impact_preview: { id: "E103_resolution_impact_preview", title: "Resolution Impact Preview", sourceType: "SYSTEM", summary: "Resolution只改变模型、服务和未来重建，不改变现实历史。", supports: ["knows_resolution_affects_models_not_reality"] },
  E104_identity_match_997: { id: "E104_identity_match_997", title: "Continuity Match 99.7%", sourceType: "GENERATED", summary: "99.7%是模型相似度分类，无法证明身份等同。", supports: ["knows_generated_can_be_high_fit"] },
  E105_final_resolution_record: { id: "E105_final_resolution_record", title: "Final Resolution Record", sourceType: "SYSTEM", summary: "最终Resolution已提交；Source Archive在所有策略下保留。", supports: ["knows_source_archive_preserved"] },
};
