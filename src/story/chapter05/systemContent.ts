import type { Evidence, RouteId } from "../../game/types";

export interface RoomHistoryEntry {
  year: number;
  date: string;
  title: string;
  summary: string;
  details: string[];
  routeId?: RouteId;
  sourceLabel: string;
}

export const roomHistory: RoomHistoryEntry[] = [
  { year: 2011, date: "2011-03-12", title: "Personal Digital Archive Research", summary: "Cross-source indexing, version tracking and timeline reconstruction begin.", details: ["Subject 04 corpus imported: 2011-05-04", "Sources: Personal Web / Forum / Messenger / Email / Photo / Recovered Drive", "Contributor record: G.Y. / archival source provider"], routeId: "ROOM_HISTORY_2011", sourceLabel: "PROJECT RECORD" },
  { year: 2012, date: "2012-04-08", title: "ROOM naming adopted", summary: "Recursive Online Object Memory receives its formal project name.", details: ["Identity Graph enabled", "Temporal Reconciliation enabled", "Reconstruction Layer enabled", "Linxia / Summer17 / linxia_0412 / LX17 mapped toward SUBJECT_04"], routeId: "ROOM_HISTORY_2012", sourceLabel: "PROJECT RECORD" },
  { year: 2013, date: "2013-08-17", title: "Holistic Subject Validation", summary: "Generated bridge events and dialogue candidates enter continuity tests.", details: ["generated_content_labels=required", "source_provenance=preserve", "Generated objects must remain labeled."], routeId: "ROOM_HISTORY_2013", sourceLabel: "INTERNAL HISTORY" },
  { year: 2014, date: "2014-03-17", title: "Visual Reconstruction Experiment", summary: "A human-like artifact appears in an internal PHOTO17 prototype.", details: ["Subject: 04", "Object: PHOTO17", "Artifact class: human-like", "Persistence: prototype only", "Public object: NO"], routeId: "ROOM_HISTORY_2014", sourceLabel: "INTERNAL TEST" },
  { year: 2015, date: "2015-08-23", title: "Persona Continuity Model", summary: "Behavioral, linguistic and relational continuity is modeled across missing records.", details: ["Source package imported: backup_20070823", "High-weight anchor: 2007-08-18 03:17", "Generated dialogue remains GENERATED."], routeId: "ROOM_HISTORY_2015", sourceLabel: "MODEL HISTORY" },
  { year: 2016, date: "2016-03-17", title: "Recovery Environment", summary: "The interactive SUBJECT_04 Recovery Shell is built.", details: ["Build: RENV_SUBJECT04_20160317", "Display profile: 2007-Legacy", "Merge policy: Continuity", "First preserved user-facing PHOTO17 human-like reconstruction"], routeId: "ROOM_HISTORY_2016", sourceLabel: "BUILD RECORD" },
  { year: 2017, date: "2017-09-02", title: "Continuity ethics review", summary: "Generated moral-state outputs trigger an internal provenance dispute.", details: ["Continuity fit: high", "Historical source: none", "G.Y. withdraws from active review."], routeId: "ROOM_HISTORY_2017", sourceLabel: "REVIEW RECORD" },
  { year: 2018, date: "2018-03-17", title: "Automated maintenance", summary: "Scheduled reconstruction and indexing continue without active review.", details: ["Archive tasks: active", "Continuity tasks: active", "Human review: unavailable"], routeId: "ROOM_HISTORY_2018", sourceLabel: "MAINTENANCE LOG" },
  { year: 2020, date: "2020-03-17", title: "Modern Archive frontend", summary: "Mass re-indexing produces the modern ROOM Archive interface.", details: ["Public snapshot viewer prototype", "Legacy route aliases retained"], routeId: "ROOM_HISTORY_2020", sourceLabel: "BUILD RECORD" },
  { year: 2022, date: "2022-08-17", title: "Legacy namespace migration", summary: "SUBJECT_04 is remapped to SUBJECT_404.", details: ["Legacy: 04", "Namespace: 4xx", "Mapped: 404", "Rule: legacy_subject_id + 400", "Status: SUCCESS"], routeId: "ROOM_HISTORY_2022", sourceLabel: "MIGRATION LOG" },
  { year: 2025, date: "2025-08-23", title: "Internal Archive deployment", summary: "The archive opens with Subject404 as its default context.", details: ["default_subject=404", "Internal authentication state: stale"], routeId: "ROOM_HISTORY_2025", sourceLabel: "DEPLOYMENT LOG" },
  { year: 2026, date: "2026 / CURRENT", title: "Current Observer Session", summary: "The current ROOM session is attached to Subject404 context.", details: ["Session: ACTIVE", "Observer: CURRENT_OBSERVER", "Subject context: 404", "Observer context: ACTIVE"], routeId: "ROOM_HISTORY_2026", sourceLabel: "CURRENT SESSION" },
];

export const chapter05EvidenceRegistry: Record<string, Evidence> = {
  E080_room_full_name: { id: "E080_room_full_name", title: "ROOM Full Name", sourceType: "SYSTEM", summary: "ROOM 的正式全称是 Recursive Online Object Memory。", supports: ["knows_room_full_name"] },
  E081_subject04_2011_import: { id: "E081_subject04_2011_import", title: "Subject04 2011 Import", sourceType: "SYSTEM", summary: "林夏相关数字对象在2011年作为 Subject04 语料进入档案研究。", supports: ["knows_room_began_as_archive_research", "knows_subject04_is_linxia_context"] },
  E082_room_naming_2012: { id: "E082_room_naming_2012", title: "ROOM Naming 2012", sourceType: "SYSTEM", summary: "项目在2012年采用 ROOM 名称并开始构建身份关系图。", supports: ["knows_room_full_name"] },
  E083_2014_reconstruction_artifact: { id: "E083_2014_reconstruction_artifact", title: "2014 Reconstruction Prototype Artifact", sourceType: "RECONSTRUCTED", summary: "2014内部原型已产生人形伪影；2016才是首个保留下来的用户可见版本。", supports: ["knows_reconstruction_uses_previous_generation"] },
  E084_persona_continuity_model: { id: "E084_persona_continuity_model", title: "Persona Continuity Model", sourceType: "SYSTEM", summary: "ROOM会在记录缺失时维持行为、语言和关系上的人物连续性。", supports: ["knows_ui_continuity_is_constructed"] },
  E085_generated_ethics_review: { id: "E085_generated_ethics_review", title: "2017 Generated Output Review", sourceType: "SYSTEM", summary: "高连续性匹配的生成表达曾被误放入人物连续性视图，引发来源伦理争议。", supports: ["knows_generated_fit_not_history"] },
  E086_subject04_to_404: { id: "E086_subject04_to_404", title: "Subject04 → Subject404 Migration", sourceType: "SYSTEM", summary: "404源于2022年的普通命名空间迁移规则，并非林夏身份变化。", supports: ["knows_subject04_to_404", "knows_404_name_is_migration_artifact"] },
  E087_default_subject_404: { id: "E087_default_subject_404", title: "default_subject=404", sourceType: "SYSTEM", summary: "2025内部Archive将404设为默认对象，玩家并非被特别选中。", supports: ["knows_404_name_is_migration_artifact"] },
  E088_unresolved_persona: { id: "E088_unresolved_persona", title: "UNRESOLVED_PERSONA", sourceType: "SYSTEM", summary: "Unknown是承载跨来源、未解析Persona输出的接口，不是林夏本人。", supports: ["knows_unknown_is_unresolved_persona", "knows_unknown_uses_mixed_sources"] },
  E089_observer_model: { id: "E089_observer_model", title: "Current Observer Model", sourceType: "SESSION", summary: "Observer Model只汇总玩家在当前ROOM会话中的调查行为。", supports: ["knows_observer_model_tracks_game_behavior", "knows_observer_model_is_forming"] },
  E090_observer_inference_correction: { id: "E090_observer_inference_correction", title: "Observer Inference Correction", sourceType: "SESSION", summary: "玩家可以否定ROOM的行为推断，证明模型并不等同于本人。", supports: ["knows_observer_model_can_be_wrong"] },
  E091_observer_405_candidate: { id: "E091_observer_405_candidate", title: "Observer 405 Candidate", sourceType: "SESSION", summary: "405是当前观察者行为模型的编号，尚未注册为Subject。", supports: ["knows_405_is_observer_model_id", "knows_observer_is_not_yet_subject"] },
  E092_generated_label_policy: { id: "E092_generated_label_policy", title: "Generated Label Policy", sourceType: "GENERATED", summary: "2013连续性测试要求生成桥接事件保留GENERATED标签与来源链。", supports: ["knows_generated_labels_are_required"] },
  E093_automated_maintenance: { id: "E093_automated_maintenance", title: "Automated Maintenance", sourceType: "SYSTEM", summary: "2018年后，重建与索引任务在没有人工复核的情况下仍会继续。", supports: ["knows_reconstruction_can_continue_without_review"] },
  E094_modern_archive_frontend: { id: "E094_modern_archive_frontend", title: "Modern Archive Frontend", sourceType: "SYSTEM", summary: "当前Archive界面来自2020年的重新索引，并非原始年代的网站。", supports: ["knows_modern_archive_is_later_frontend"] },
  E095_current_observer_attachment: { id: "E095_current_observer_attachment", title: "Current Observer Attachment", sourceType: "SESSION", summary: "2026当前会话只是附着在Subject404上下文中的观察者记录。", supports: ["knows_current_observer_attached_to_subject_context"] },
};
