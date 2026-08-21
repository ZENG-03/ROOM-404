import { useMemo, useState } from "react";
import { Brain, CheckCheck, Database, ListChecks, RotateCcw, Search, X } from "lucide-react";
import type { Evidence, SourceType } from "../../game/types";
import { useGameStore } from "../../game/engine/GameStore";
import { allEvidence } from "../../story/evidenceRegistry";

const knowledgeLabels: Record<string, string> = {
  knows_event_date_changed: "活动日期被改过",
  knows_linxia_attended_event: "林夏确实去了旧体育馆",
  knows_zhouran_requested_delete: "周然要求删除照片",
  knows_guyan_has_originals: "顾言保存过原图",
  identity_clue_language_overlap: "Summer17 与林夏存在语言重叠",
  identity_clue_original_edit_web: "Summer17 提到 original / edit / web",
  knows_thread_not_explicit_farewell: "删帖不是明确告别",
  thread1847_full_seen: "Thread 1847 已恢复正文",
  knows_summer17_is_linxia: "Summer17 与 Linxia 存在高置信关联",
  knows_linxia_online_2031: "林夏 20:31 仍有可验证网络活动",
  knows_gym_not_timeline_endpoint: "旧体育馆不再是时间线终点",
  knows_photo17_versions_differ: "Photo17 的当前版与 2007 网页版不同",
  knows_photo17_original_no_fourth_person: "2007 原始字节链中无明确第四人",
  saw_20070823_hash_difference: "2007-08-23 副本 Hash 不同",
  knows_20070823_copy_no_fourth_person: "2007-08-23 副本中无明确第四人",
  knows_hash_difference_not_proof_of_edit: "Hash 不同不等于局部篡改",
  knows_2015_restore_no_confirmed_human: "2015 Restore 无确认人形",
  knows_human_first_appears_in_reconstruction: "人形最早出现在 2016 重建版",
  knows_reconstruction_uses_previous_generation: "重建版本会递归成为后续输入",
  knows_current_photo_is_dynamic_session_variant: "当前 Photo17 是动态会话版本",
  knows_photo_club_copy_was_intended: "林夏原本计划保留摄影社原图链",
  knows_desktop_is_recovery_shell: "当前桌面是后来的 Recovery Shell",
  knows_calendar_contains_observer_data: "日历包含当前观察者的 Session 数据",
  knows_messenger_is_aggregated_view: "Messenger 是多来源统一查看器",
  knows_environment_manifest: "环境 manifest 记录了 2016 Recovery 配置",
  knows_ui_continuity_is_constructed: "用户桌面连续性由 Recovery 系统构建",
  knows_memory_error_is_persona_graph: "MEMORY ERROR 指向 Persona Memory Graph",
  knows_raw_directory_differs_from_shell: "原始目录与 Recovery Shell 结构不同",
  knows_unknown_not_original_contact: "Unknown 不是 2007 原始联系人",
  knows_self_report_can_conflict_with_sources: "真实恢复文件中的自述仍可能与其他来源冲突",
  knows_unsent_mail_is_not_farewell: "未发送邮件明确不是“最后的话”",
  knows_recovery_names_are_mapped: "Recovery Shell 的目录与名称经过系统映射",
  knows_generated_summary_is_not_source: "Generated Summary 不是原始来源",
  knows_sort_order_is_interpretation: "相关度排序本身也是系统解释",
  knows_messenger_conflict_is_ambiguous: "消息缓存中的“改动”对象仍有歧义",
  knows_group_cache_confirms_event: "群聊确认 8月17日旧体育馆活动",
  knows_linked_email_is_distinct_source: "关联邮件是独立 EMAIL_CACHE 来源",
  knows_calendar_personal_layer: "日历包含 2007 个人事件层",
  knows_calendar_recovery_layer: "日历包含后来恢复事件层",
  knows_calendar_session_layer: "Session 日历与 Event Store 同源",
  knows_0317_is_recovery_anchor: "03:17 是恢复任务调度锚点",
  knows_calendar_absence_is_not_fact: "日历空白不等于现实中无活动",
  knows_player_post_original_is_immutable: "玩家发帖原文作为不可变 Session 对象保存",
  knows_session_view_is_not_archive_view: "Session 查看数不会回写归档论坛",
  knows_player_post_mutation_creates_version: "论坛变异会创建新版本而非覆盖原文",
  knows_player_post_versions_are_distinct: "玩家主题的三个版本来源彼此独立",
  knows_player_can_restore_original_view: "玩家可以恢复原文显示但不会删除派生版本",
  knows_deletion_does_not_erase_archive: "删除活动主题不会抹去归档副本",
  knows_player_authored_text_entered_room_graph: "玩家创作文本已进入 Observer 对象图",
  knows_room_full_name: "ROOM = Recursive Online Object Memory",
  knows_room_began_as_archive_research: "ROOM 始于数字档案研究",
  knows_subject04_is_linxia_context: "Subject04 是林夏相关数据语境",
  knows_subject04_to_404: "Subject04 在迁移中变为 Subject404",
  knows_404_name_is_migration_artifact: "404 是命名空间迁移编号",
  knows_generated_labels_are_required: "生成对象必须保留来源标签",
  knows_generated_fit_not_history: "高连续性匹配不等于历史事实",
  knows_reconstruction_can_continue_without_review: "重建任务可在无人复核时继续",
  knows_modern_archive_is_later_frontend: "当前 Archive 是后期重建界面",
  knows_default_subject_not_personal_selection: "默认 Subject404 不是对玩家的特别选择",
  knows_current_observer_attached_to_subject_context: "当前观察者会话附着于 Subject404 语境",
  knows_unknown_is_unresolved_persona: "Unknown 是 UNRESOLVED_PERSONA 接口",
  knows_unknown_uses_mixed_sources: "Unknown 使用混合来源输出",
  knows_observer_model_tracks_game_behavior: "Observer Model 只记录 ROOM 内行为",
  knows_observer_model_can_be_wrong: "Observer 推断可以出错并被纠正",
  knows_observer_model_is_forming: "当前观察者模型正在形成",
  knows_current_observer_model_is_forming: "Observer405 正在形成",
  knows_405_is_observer_model_id: "405 是观察者模型编号",
  knows_observer_is_not_yet_subject: "Observer405 尚未成为 Subject405",
  knows_generated_can_be_high_fit: "生成内容可以高度相似但不是历史证据",
  knows_linxia_fate_unresolved: "林夏在 10:12 后的真实去向没有可靠来源",
  knows_observer405_not_self: "Observer405 是关于玩家的记录，不是玩家本人",
  knows_resolution_affects_models_not_reality: "Resolution 改变模型状态，不改变现实历史",
  knows_source_archive_preserved: "所有 Resolution 都保留 Source Archive",
};

const identityClueLabels: Record<string, string> = {
  language: "语言习惯与主页讨论重合",
  event_language_crossmatch: "同日文本关系：谁在替她解释",
  original_edit_web: "原图 / 修改版 / 网页版本习惯",
  camera: "Sony 小卡片机使用记录",
};

type WorkspaceTab = "evidence" | "knowledge" | "progress";

interface EvidencePanelProps {
  open: boolean;
  onClose: () => void;
}

export function EvidencePanel({ open, onClose }: EvidencePanelProps) {
  const { state, reset } = useGameStore();
  const [tab, setTab] = useState<WorkspaceTab>("evidence");
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceType | "ALL">("ALL");
  const [acknowledgedEvidenceIds, setAcknowledgedEvidenceIds] = useState(() => state.evidenceIds);
  const [onlyNew, setOnlyNew] = useState(false);
  const [resetPending, setResetPending] = useState(false);

  const evidence = state.evidenceIds.map((id) => allEvidence[id]).filter((item): item is Evidence => Boolean(item));
  const newEvidenceIds = state.evidenceIds.filter((id) => !acknowledgedEvidenceIds.includes(id));
  const sourceOptions = [...new Set(evidence.map((item) => item.sourceType))];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredEvidence = useMemo(() => evidence.filter((item) => {
    if (sourceFilter !== "ALL" && item.sourceType !== sourceFilter) return false;
    if (onlyNew && !newEvidenceIds.includes(item.id)) return false;
    if (!normalizedQuery) return true;
    return `${item.title} ${item.summary} ${item.sourceType}`.toLocaleLowerCase().includes(normalizedQuery);
  }), [evidence, sourceFilter, onlyNew, newEvidenceIds, normalizedQuery]);
  const filteredKnowledge = state.knowledgeIds.filter((id) => !normalizedQuery || (knowledgeLabels[id] ?? id).toLocaleLowerCase().includes(normalizedQuery));

  const sessionLabel = state.resolutionApplied
    ? `${state.endingId} Recorded`
    : state.chapter === 6
      ? "FINAL Review"
      : state.chapter5Complete
        ? "CH05 Updated"
        : state.chapter === 5
          ? "CH05 Active"
          : state.chapter4Complete
            ? "CH04 Updated"
            : state.chapter === 4
              ? "CH04 Active"
              : state.chapter3Complete
                ? "CH03 Updated"
                : state.chapter === 3
                  ? "CH03 Active"
                  : state.chapter2Complete
                    ? "CH02 Updated"
                    : state.chapter === 2
                      ? "CH02 Active"
                      : state.chapter1Complete
                        ? "CH01 Updated"
                        : "CH01 Active";

  function confirmReset() {
    reset();
    setAcknowledgedEvidenceIds([]);
    setResetPending(false);
  }

  return (
    <aside className={`evidence-panel ${open ? "open" : ""}`} aria-label="Evidence workspace" aria-hidden={!open} inert={!open}>
      <header className="panel-heading">
        <div>
          <p>Current Session</p>
          <strong>{sessionLabel}</strong>
        </div>
        <button className="panel-close-button" type="button" title="Close" aria-label="Close evidence workspace" onClick={onClose}><X aria-hidden="true" /></button>
      </header>

      <nav className="workspace-tabs" aria-label="Session workspace views">
        <button type="button" className={tab === "evidence" ? "active" : ""} aria-pressed={tab === "evidence"} onClick={() => setTab("evidence")}><Database aria-hidden="true" /><span>Evidence</span><small>{state.evidenceIds.length}</small></button>
        <button type="button" className={tab === "knowledge" ? "active" : ""} aria-pressed={tab === "knowledge"} onClick={() => setTab("knowledge")}><Brain aria-hidden="true" /><span>Knowledge</span><small>{state.knowledgeIds.length}</small></button>
        <button type="button" className={tab === "progress" ? "active" : ""} aria-pressed={tab === "progress"} onClick={() => setTab("progress")}><ListChecks aria-hidden="true" /><span>Progress</span><small>CH{String(state.chapter).padStart(2, "0")}</small></button>
      </nav>

      {(tab === "evidence" || tab === "knowledge") && (
        <div className="workspace-search">
          <Search aria-hidden="true" />
          <input aria-label={`Search ${tab}`} value={query} placeholder={`Search ${tab}`} onChange={(event) => setQuery(event.target.value)} />
          {query && <button type="button" title="Clear search" aria-label="Clear search" onClick={() => setQuery("")}><X aria-hidden="true" /></button>}
        </div>
      )}

      <div className="workspace-scroll">
        {tab === "evidence" && (
          <section className="workspace-view" aria-label="Evidence records">
            <div className="evidence-controls">
              <label>Source<select value={sourceFilter} onChange={(event) => setSourceFilter(event.target.value as SourceType | "ALL")}><option value="ALL">All sources</option>{sourceOptions.map((source) => <option key={source} value={source}>{source}</option>)}</select></label>
              <button type="button" className={onlyNew ? "active" : ""} disabled={newEvidenceIds.length === 0} aria-pressed={onlyNew} onClick={() => setOnlyNew((value) => !value)}>New {newEvidenceIds.length}</button>
              <button type="button" title="Mark all evidence reviewed" aria-label="Mark all evidence reviewed" disabled={newEvidenceIds.length === 0} onClick={() => { setAcknowledgedEvidenceIds(state.evidenceIds); setOnlyNew(false); }}><CheckCheck aria-hidden="true" /></button>
            </div>
            {filteredEvidence.length === 0 ? <p className="workspace-empty">No evidence matches this view.</p> : <ul className="evidence-list">{filteredEvidence.map((item) => <li key={item.id} className={newEvidenceIds.includes(item.id) ? "new" : ""} data-source={item.sourceType}><span>{item.sourceType}{newEvidenceIds.includes(item.id) && <small>NEW</small>}</span><strong>{item.title}</strong><p>{item.summary}</p></li>)}</ul>}
          </section>
        )}

        {tab === "knowledge" && (
          <section className="workspace-view" aria-label="Established knowledge">
            <p className="workspace-summary">{filteredKnowledge.length} established conclusions</p>
            {filteredKnowledge.length === 0 ? <p className="workspace-empty">No knowledge matches this search.</p> : <ul className="knowledge-list">{filteredKnowledge.map((id) => <li key={id}>{knowledgeLabels[id] ?? id}</li>)}</ul>}
          </section>
        )}

        {tab === "progress" && (
          <section className="workspace-view progress-view" aria-label="Investigation progress">
            <div className="session-snapshot"><span>Current route</span><strong>{state.fakeUrl}</strong><span>Archive events</span><strong>{state.events.length}</strong></div>

            {state.chapter === 2 && <ProgressGroup title="Identity Check" summary={`Summer17 / Linxia: ${state.identityClueIds.length}/4 independent clues`} items={state.identityClueIds.map((id) => identityClueLabels[id] ?? id)} />}
            {state.chapter === 3 && <ProgressGroup title="Provenance" summary={`Comparisons: ${state.photo17ComparePairs.length}/4`} items={[`Original hash: ${state.photo17ClubHashVerified ? "verified" : "pending"}`, `Difference map: ${state.photo17DifferenceMapSeen ? "reviewed" : "pending"}`, `Session log: ${state.photo17SessionHistorySeen ? "saved" : "pending"}`]} />}
            {state.chapter === 4 && <ProgressGroup title="Recovery" summary={`Apps opened: ${state.recoveryOpenedAppIds.length}/9`} items={[`Environment build: ${state.recoveryInfoSeen ? "verified" : "pending"}`, `Observer calendar: ${state.recoveryCalendarSessionSeen ? "seen" : "pending"}`, `Memory graph: ${state.recoveryMemoryStatusSeen ? "inspected" : "pending"}`, `Raw source view: ${state.recoveryRawViewSeen ? "mounted" : "optional"}`, `Unknown source: ${state.recoveryUnknownSourceSeen ? "verified" : "pending"}`, `Unknown stage: ${state.unknownStage}`, `Anomaly level: ${state.anomalyLevel}`, `Source files: ${state.recoveryFileIdsSeen.length} read`, `Deleted objects: ${state.recoveryRecycleItemIdsSeen.length} inspected`, `Recovered audio: ${state.recoveryPlayerTrackIdsPlayed.length} played`]} />}
            {state.playerPostCreated && <ProgressGroup title="Session Post" items={["Original: preserved", `View desync: ${state.playerPostViewDesyncSeen ? "recorded" : "pending"}`, `Session variant: ${state.playerPostMutationSeen ? "seen" : "not indexed"}`, `Continuity variant: ${state.playerPostMutation2Seen ? "seen" : "not generated"}`, `Forum state: ${state.playerPostDeleted ? "410 gone / archive retained" : "active"}`]} />}
            {state.chapter === 5 && <ProgressGroup title="Continuity" summary={`Core history: ${state.roomHistoryYearsSeen.filter((year) => [2011, 2012, 2014, 2016, 2022, 2026].includes(year)).length}/6`} items={[`ROOM definition: ${state.roomFullNameSeen ? "verified" : "pending"}`, `04 → 404 migration: ${state.subject404MigrationSeen ? "verified" : "pending"}`, `Unknown interface: ${state.unresolvedPersonaSeen ? "identified" : "pending"}`, `Unknown stage: ${state.unknownStage}`, `Anomaly level: ${state.anomalyLevel}`, `Observer inference: ${state.observerInferenceCorrected ? "corrected" : "pending"}`, `Observer405: ${state.observer405Seen ? "forming" : "pending"}`]} />}
            {state.chapter === 6 && <ProgressGroup title="Final Review" items={[`Generated source: ${state.finalGeneratedSourceChecked ? "checked" : "pending"}`, `10:12 boundary: ${state.finalSourceBoundarySeen ? "verified" : "pending"}`, `Observer review: ${state.finalObserverReviewDone ? "complete" : "pending"}`, `FINAL_CHECKPOINT: ${state.finalCheckpointCreated ? `saved / restored ${state.finalCheckpointRestoreCount}` : "pending"}`, `Endings seen: ${state.seenEndingIds.length}/4`, `Resolution: ${state.resolutionApplied ? state.endingId : "not applied"}`]} />}
            {state.chapter === 1 && <ProgressGroup title="Archive Investigation" summary={`${state.evidenceIds.length} evidence records`} items={[`Photo17 views: ${state.photo17Visits}`, `Archive captures: ${state.viewedCaptures.length}/2`, `Date conflict: ${state.chapter1Complete ? "resolved" : "investigating"}`]} />}
          </section>
        )}
      </div>

      <footer className="workspace-footer">
        {resetPending ? <div className="reset-confirm" role="alertdialog" aria-label="Reset session confirmation"><p>Erase this investigation session?</p><button type="button" onClick={() => setResetPending(false)}>Cancel</button><button type="button" className="danger" onClick={confirmReset}>Reset</button></div> : <button className="reset-session-button" type="button" onClick={() => setResetPending(true)}><RotateCcw aria-hidden="true" /><span>Reset Session</span></button>}
      </footer>
    </aside>
  );
}

function ProgressGroup({ title, summary, items }: { title: string; summary?: string; items: string[] }) {
  return <section className="progress-group"><h2>{title}</h2>{summary && <p className="identity-progress">{summary}</p>}<ul className="knowledge-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}
