import { Fragment, FormEvent, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type * as React from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  FileSearch,
  FolderOpen,
  Globe2,
  HardDrive,
  HelpCircle,
  House,
  ImageIcon,
  LayoutGrid,
  LockKeyhole,
  Maximize2,
  MessageSquareText,
  Minimize2,
  MonitorCog,
  Network,
  Music2,
  Power,
  Recycle,
  Search,
  Settings,
  SquareTerminal,
  Trophy,
  UserRound,
  X as XIcon,
} from "lucide-react";
import { useGameStore } from "../../game/engine/GameStore";
import { resolveNavigation } from "../../game/navigation/NavigationService";
import {
  archiveRecent,
  archiveExtendedSearchResults,
  diaryEntries,
  ordinaryDiaryEntries,
  guestbookEntries,
  photoEntries,
  searchResults,
} from "../../story/chapter01/content";
import { getMediaAsset, resolvePhoto17Asset } from "../../story/assets/mediaAssets";
import { recoveryAudioTracks } from "../../story/assets/audioAssets";
import {
  assembledThread1847,
  forumBoards,
  forumThreadContent,
  forumThreads,
  forumUsers,
  thread1847Fragments,
} from "../../story/chapter02/forumContent";
import {
  linkedRecoveryEmail,
  personalCalendarEvents,
  recoveredCalendarEvents,
  recoveryBrowserHistory,
  recoveryFiles,
  recoveryThreads,
  recoveryThreadSources,
} from "../../story/chapter04/recoveryContent";
import { mutatePlayerPost, mutatePlayerPostPhase2, playerPostDefaults, playerPostTopics } from "../../story/forum/playerPostContent";
import { roomHistory } from "../../story/chapter05/systemContent";
import { finalReliableTimeline, generatedFinalSample, resolutionPolicies } from "../../story/final/finalContent";
import { unknownTextPool } from "../../story/unknownContent";
import { searchTextPool } from "../../story/textPoolSearch";
import { anomalyLabels } from "../../game/engine/AnomalyEngine";
import { unknownStageLabels } from "../../game/engine/UnknownEngine";
import { getAchievementSnapshot } from "../../game/engine/AchievementEngine";
import { buildEvidenceGraph } from "../../game/engine/EvidenceGraph";
import type { EndingId, SourceType, TextArchiveEntry, TextArchiveIndex } from "../../game/types";
import { LegacySiteShell } from "../legacy/LegacySiteShell";
import { MediaSlot } from "../media/MediaSlot";
import { deductionCases } from "../../story/deductions";
import { filterTextEntries, getTextEntryStatus, isTextEntryUnlocked, loadTextArchive } from "../../story/textArchive";

const linxiaNav: Array<[string, string]> = [
  ["About Me", "/site/2007/linxia"],
  ["Diary", "/site/2007/linxia/diary"],
  ["Photo", "/site/2007/linxia/photo"],
  ["Guestbook", "/site/2007/linxia/guestbook"],
  ["Links", "/site/2003/nc2ms"],
];

const schoolNav: Array<[string, string]> = [
  ["首页", "/site/2003/nc2ms"],
  ["社团活动", "/site/2003/nc2ms/clubs/photo"],
  ["2007-08-15 快照", "/archive/20070815/nc2ms.edu/photo-event"],
  ["2007-08-19 快照", "/archive/20070819/nc2ms.edu/photo-event"],
];

export function PageRenderer() {
  const { state } = useGameStore();

  switch (state.currentRouteId) {
    case "ARCHIVE_HOME":
      return <ArchiveHome />;
    case "ARCHIVE_SEARCH":
      return <ArchiveSearch />;
    case "LINXIA_HOME":
      return <LinxiaHome />;
    case "LINXIA_DIARY":
      return <LinxiaDiary />;
    case "LINXIA_PHOTO_INDEX":
      return <LinxiaPhotoIndex />;
    case "PHOTO17":
      return <Photo17Page />;
    case "LINXIA_GUESTBOOK":
      return <GuestbookPage />;
    case "LINXIA_0817_INDEX":
      return <PrivateIndexPage />;
    case "LINXIA_0817_PRIVATE":
      return <PrivatePage />;
    case "LINXIA_BACKUP_ZIP":
      return <ForbiddenBackupPage />;
    case "SCHOOL_HOME":
      return <SchoolHome />;
    case "SCHOOL_PHOTO_CLUB":
      return <SchoolPhotoClub />;
    case "SCHOOL_NOTICE_V1":
      return <SchoolNotice capture="20070815" date="2007年8月17日" footer="发布时间：2007-08-15" />;
    case "SCHOOL_NOTICE_V2":
      return <SchoolNotice capture="20070819" date="2007年8月18日" footer="更新时间：2007-08-19" />;
    case "SCHOOL_NEWS_20070816":
      return <SchoolArchiveItem kind="news" date="2007-08-16" title="我校开展暑期校园安全检查" />;
    case "SCHOOL_NEWS_20070813":
      return <SchoolArchiveItem kind="news" date="2007-08-13" title="高三年级返校安排通知" />;
    case "SCHOOL_NEWS_20070810":
      return <SchoolArchiveItem kind="news" date="2007-08-10" title="暑期值班表（第二周）" />;
    case "SCHOOL_ACTIVITY_20070722":
      return <SchoolArchiveItem kind="activity" date="2007-07-22" title="老城区街景拍摄" />;
    case "SCHOOL_ACTIVITY_20070610":
      return <SchoolArchiveItem kind="activity" date="2007-06-10" title="校园植物专题" />;
    case "SCHOOL_QUICK_OFFICE":
      return <SchoolArchiveItem kind="quick" date="2007" title="校务公开" />;
    case "SCHOOL_QUICK_DOWNLOAD":
      return <SchoolArchiveItem kind="quick" date="2007" title="资源下载" />;
    case "BLUEMOON_ARCHIVE":
      return <BlueMoonArchive />;
    case "FORUM_HOME":
      return <ForumHome />;
    case "FORUM_BOARD_NIGHT":
      return <ForumBoard board="夜话" />;
    case "FORUM_BOARD_PHOTO":
      return <ForumBoard board="摄影" />;
    case "FORUM_BOARD_CAMPUS":
      return <ForumBoard board="校园" />;
    case "FORUM_BOARD_WEB":
      return <ForumBoard board="网页制作" />;
    case "FORUM_BOARD_ANNOUNCEMENTS":
      return <ForumBoard board="论坛公告" />;
    case "FORUM_BOARD_FEEDBACK":
      return <ForumBoard board="建议反馈" />;
    case "FORUM_BOARD_CHAT":
      return <ForumBoard board="闲聊灌水" />;
    case "FORUM_BOARD_RELATIONSHIP":
      return <ForumBoard board="情感" />;
    case "FORUM_BOARD_MUSIC":
      return <ForumBoard board="音乐" />;
    case "FORUM_BOARD_TRADE":
      return <ForumBoard board="旧物交换" />;
    case "FORUM_SEARCH":
      return <ForumSearch />;
    case "FORUM_USER_1847":
      return <ForumUserPage uid={1847} />;
    case "FORUM_USER_1741":
      return <ForumUserPage uid={1741} />;
    case "FORUM_USER_1766":
      return <ForumUserPage uid={1766} />;
    case "FORUM_USER_1739":
      return <ForumUserPage uid={1739} />;
    case "FORUM_THREAD_1847":
      return <DeletedThread1847 />;
    case "FORUM_THREAD_1711":
      return <ForumOrdinaryThread threadId="1711" />;
    case "FORUM_THREAD_1738":
      return <ForumOrdinaryThread threadId="1738" />;
    case "FORUM_THREAD_1682":
      return <ForumOrdinaryThread threadId="1682" />;
    case "FORUM_THREAD_1792":
      return <ForumOrdinaryThread threadId="1792" />;
    case "FORUM_THREAD_1816":
      return <ForumOrdinaryThread threadId="1816" />;
    case "FORUM_THREAD_1904":
      return <ForumOrdinaryThread threadId="1904" />;
    case "FORUM_THREAD_1905":
      return <ForumOrdinaryThread threadId="1905" />;
    case "FORUM_THREAD_1906":
      return <ForumOrdinaryThread threadId="1906" />;
    case "FORUM_THREAD_1907":
      return <ForumOrdinaryThread threadId="1907" />;
    case "FORUM_THREAD_1908":
      return <ForumOrdinaryThread threadId="1908" />;
    case "FORUM_THREAD_1910":
      return <ForumOrdinaryThread threadId="1910" />;
    case "FORUM_THREAD_1911":
      return <ForumOrdinaryThread threadId="1911" />;
    case "FORUM_THREAD_1912":
      return <ForumOrdinaryThread threadId="1912" />;
    case "FORUM_THREAD_1913":
      return <ForumOrdinaryThread threadId="1913" />;
    case "FORUM_THREAD_1914":
      return <ForumOrdinaryThread threadId="1914" />;
    case "FORUM_THREAD_1915":
      return <ForumOrdinaryThread threadId="1915" />;
    case "FORUM_THREAD_1847_FRAGMENTS":
      return <Thread1847Fragments />;
    case "FORUM_THREAD_1847_COMPARE":
      return <Thread1847Compare />;
    case "FORUM_SESSION_1847":
      return <ForumSession1847 />;
    case "FORUM_SESSION_MATCH":
      return <ForumSessionMatch />;
    case "FORUM_POST_NEW":
      return <PlayerPostComposer />;
    case "FORUM_PLAYER_POST":
      return <PlayerPostThread />;
    case "FORUM_PLAYER_POST_COMPARE":
      return <PlayerPostCompare />;
    case "FORUM_PLAYER_POST_EDIT":
      return <PlayerPostEditor />;
    case "FORUM_PLAYER_POST_ARCHIVE":
      return <PlayerPostArchive />;
    case "TIMELINE_20070817":
      return <Timeline20070817 />;
    case "PHOTO17_FORENSICS":
      return <Photo17Forensics />;
    case "PHOTO17_SOURCE_WEB2007":
      return <Photo17Source source="web2007" />;
    case "PHOTO17_SOURCE_ARCHIVE2008":
      return <Photo17Source source="archive2008" />;
    case "PHOTO17_CLUB_INDEX":
      return <PhotoClubIndex />;
    case "PHOTO17_CLUB_FILE":
      return <PhotoClubFile />;
    case "PHOTO17_VERSION_20070823":
      return <Photo17Version version="20070823" />;
    case "PHOTO17_VERSION_2015":
      return <Photo17Version version="2015" />;
    case "PHOTO17_VERSION_2016":
      return <Photo17Version version="2016" />;
    case "PHOTO17_VERSION_2022":
      return <Photo17Version version="2022" />;
    case "PHOTO17_COMPARE":
      return <Photo17Compare />;
    case "PHOTO17_HELP":
      return <Photo17Help />;
    case "PHOTO17_SESSION_HISTORY":
      return <Photo17SessionHistory />;
    case "PHOTO17_SIMILAR":
      return <Photo17Similar />;
    case "SUBJECT04_PHOTO17":
      return <Subject04Object />;
    case "RECOVERY_BOOT":
      return <RecoveryBoot />;
    case "RECOVERY_LOGIN":
      return <RecoveryLogin />;
    case "RECOVERY_DESKTOP":
      return <RecoveryDesktop />;
    case "CONTINUITY_SERVICE":
      return <ContinuityService />;
    case "ROOM_ABOUT":
      return <RoomAbout />;
    case "ROOM_HISTORY":
      return <RoomHistory />;
    case "ROOM_HISTORY_2011":
      return <RoomHistoryDetail year={2011} />;
    case "ROOM_HISTORY_2012":
      return <RoomHistoryDetail year={2012} />;
    case "ROOM_HISTORY_2013":
      return <RoomHistoryDetail year={2013} />;
    case "ROOM_HISTORY_2014":
      return <RoomHistoryDetail year={2014} />;
    case "ROOM_HISTORY_2015":
      return <RoomHistoryDetail year={2015} />;
    case "ROOM_HISTORY_2016":
      return <RoomHistoryDetail year={2016} />;
    case "ROOM_HISTORY_2017":
      return <RoomHistoryDetail year={2017} />;
    case "ROOM_HISTORY_2018":
      return <RoomHistoryDetail year={2018} />;
    case "ROOM_HISTORY_2020":
      return <RoomHistoryDetail year={2020} />;
    case "ROOM_HISTORY_2022":
      return <RoomHistoryDetail year={2022} />;
    case "ROOM_HISTORY_2025":
      return <RoomHistoryDetail year={2025} />;
    case "ROOM_HISTORY_2026":
      return <RoomHistoryDetail year={2026} />;
    case "SUBJECT404_OBJECT":
      return <Subject404Object />;
    case "UNRESOLVED_PERSONA_OBJECT":
      return <UnresolvedPersonaObject />;
    case "OBSERVER_SERVICE":
      return <ObserverService />;
    case "OBSERVER_INFERENCES":
      return <ObserverInferences />;
    case "OBSERVER_CANDIDATE":
      return <ObserverCandidate />;
    case "OBSERVER_AUTHORED_OBJECT":
      return <ObserverAuthoredObject />;
    case "FINAL_REVIEW":
      return <FinalReview />;
    case "FINAL_GENERATED_SAMPLE":
      return <FinalGeneratedSample />;
    case "FINAL_SOURCE_BOUNDARY":
      return <FinalSourceBoundary />;
    case "FINAL_OBSERVER_REVIEW":
      return <FinalObserverReview />;
    case "RESOLUTION_CENTER":
      return <ResolutionCenter />;
    case "ENDING_STATE":
      return <EndingState />;
    case "ENDING_GALLERY":
      return <EndingGallery />;
    case "EVIDENCE_GRAPH":
      return <EvidenceGraphPage />;
    case "ACHIEVEMENTS":
      return <AchievementPage />;
    case "CREDITS":
      return <CreditsPage />;
    case "CHAPTER_END":
      return <ChapterEndPage />;
    case "SYSTEM_403":
    case "SYSTEM_404":
    case "SYSTEM_410":
    default:
      return <SystemError />;
  }
}

function ArchiveHome() {
  const { state, search, navigate } = useGameStore();
  const [query, setQuery] = useState("");
  const captureCount = state.viewedCaptures.filter((capture) => ["20070815", "20070819"].includes(capture)).length;
  const completedChapter = state.chapter5Complete ? 5 : state.chapter4Complete ? 4 : state.chapter3Complete ? 3 : state.chapter2Complete ? 2 : state.chapter1Complete ? 1 : 0;

  if (state.resolutionApplied && state.endingId) return <PostEndingArchive endingId={state.endingId} />;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    search(query);
  }

  function resumeInvestigation() {
    if (captureCount < 2) return navigate(resolveNavigation(captureCount === 0 ? "/archive/20070815/nc2ms.edu/photo-event" : "/archive/20070819/nc2ms.edu/photo-event"));
    if (!state.evidenceIds.includes("E014_private_0817")) return search("Old District Node 7");
    if (!state.backup403Seen) return navigate(resolveNavigation("/site/2007/linxia/0817/backup/backup_20070823.zip"));
    if (!state.chapter2Complete) return navigate(resolveNavigation("/archive/forum/bluemoon"));
    navigate(resolveNavigation("/photo/forensics/DSC0417"));
  }

  return (
    <article className="archive-page">
      <header className="archive-hero">
        <p className="eyebrow">Public Web Snapshot Index</p>
        <h1>ROOM Archive</h1>
        <p>检索历史网页快照、旧站点与公开缓存记录。</p>
      </header>

      <form className="archive-search" onSubmit={submit}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="输入网站、人物、关键词或URL"
        />
        <button type="submit">搜索</button>
      </form>

      <div className="suggestions">
        {["2007 个人主页", "南城二中", "BlueMoon"].map((item) => (
          <button key={item} type="button" onClick={() => search(item)}>
            {item}
          </button>
        ))}
      </div>

      <section className="archive-investigation-strip">
        <header><div><span>ACTIVE INVESTIGATION</span><strong>{state.chapter1Complete ? "IDENTITY REFERENCE" : "AUGUST 17"}</strong></div><button type="button" onClick={resumeInvestigation}>Resume<ArrowRight aria-hidden="true" /></button></header>
        <div>
          <span className={captureCount >= 2 ? "complete" : "pending"}><small>CAPTURES</small><strong>{captureCount}/2</strong></span>
          <span className={state.knowledgeIds.includes("knows_event_date_changed") ? "complete" : "pending"}><small>DATE CONFLICT</small><strong>{state.knowledgeIds.includes("knows_event_date_changed") ? "RESOLVED" : "OPEN"}</strong></span>
          <span className={state.evidenceIds.includes("E014_private_0817") ? "complete" : "pending"}><small>PRIVATE RECORD</small><strong>{state.evidenceIds.includes("E014_private_0817") ? "INDEXED" : "PENDING"}</strong></span>
          <span className={state.backup403Seen ? "complete" : "pending"}><small>BACKUP OBJECT</small><strong>{state.backup403Seen ? "REFERENCED" : "PENDING"}</strong></span>
        </div>
      </section>

      <InvestigationLead state={state} navigate={navigate} />

      <section className="archive-section">
        <h2>最近更新的历史快照</h2>
        <div className="archive-list">
          {archiveRecent.map((item) => (
            <button key={item.title} type="button" onClick={() => navigate(resolveNavigation(item.path))}>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </button>
          ))}
        </div>
      </section>

      {completedChapter > 0 && <section className="chapter-end-teaser"><div><span>CHAPTER {String(completedChapter).padStart(2, "0")} COMPLETE</span><strong>阶段记录已保存，可以继续。</strong></div><button type="button" onClick={() => navigate(resolveNavigation(`/chapter/end?chapter=${completedChapter}`))}>Open Chapter End <ArrowRight aria-hidden="true" /></button></section>}

      <footer className="archive-footer">
        ROOM Archive仅展示已索引的历史网页快照。部分页面可能因资源缺失、编码错误或原站删除而无法完整显示。
      </footer>
    </article>
  );
}

function ChapterEndPage() {
  const { state, navigate } = useGameStore();
  const chapter = Number(new URLSearchParams(state.fakeUrl.split("?")[1] ?? "").get("chapter") ?? state.chapter);
  const complete = chapter === 1 ? state.chapter1Complete : chapter === 2 ? state.chapter2Complete : chapter === 3 ? state.chapter3Complete : chapter === 4 ? state.chapter4Complete : chapter === 5 ? state.chapter5Complete : false;
  const content: Record<number, { title: string; summary: string; evidence: string; next: string; nextLabel: string }> = {
    1: { title: "日期不是同一天。", summary: "两个公开快照、一个私有目录和一个受限备份对象已经形成第一条来源链。", evidence: "ORIGINAL / ALTERED / PRIVATE / RESTRICTED", next: "/search?q=BM-1847", nextLabel: "Continue to BlueMoon" },
    2: { title: "她在 20:31 仍然在线。", summary: "论坛缓存确认了 Summer17 的时间戳，但 22:01 之后仍没有可靠现实去向。", evidence: "FORUM INDEX / SESSION / COOKIE / TIMELINE", next: "/photo/forensics/DSC0417", nextLabel: "Continue to Photo17" },
    3: { title: "照片没有一个固定的后来。", summary: "原始文件、恢复副本和重建版本已被拆开，人物只在后续重建对象中出现。", evidence: "ORIGINAL / RECOVERED / RECONSTRUCTED / SESSION", next: "/recovery/boot", nextLabel: "Continue to Recovery" },
    4: { title: "这不是她的电脑。", summary: "Recovery Shell 能保存行为与来源，却不能把环境证明为林夏现实中的设备。", evidence: "RECOVERY / MEMORY ERROR / MIXED SOURCE", next: "/service/continuity", nextLabel: "Continue to ROOM" },
    5: { title: "Unknown 不是林夏。", summary: "ROOM 已经形成当前观察者模型。下一步不是寻找唯一答案，而是决定如何处理连续性。", evidence: "SUBJECT_404 / UNKNOWN / OBSERVER_405", next: "/resolution/review", nextLabel: "Continue to Final Review" },
  };
  const chapterContent = content[chapter] ?? content[1];

  if (!complete) return <article className="archive-page chapter-end-page"><header className="archive-hero"><p className="eyebrow">CHAPTER {String(chapter).padStart(2, "0")} / LOCKED</p><h1>阶段记录还没有闭合。</h1><p>Chapter {chapter} 尚未完成，Chapter End 不会提前写入 Session。</p></header><section className="chapter-end-evidence"><span>ACCESS CONDITION</span><strong>CHAPTER PROGRESS PENDING</strong><p>返回 Active Archive，从当前章节留下的来源链继续调查。</p></section><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Return to Archive</button></div></article>;
  return <article className="archive-page chapter-end-page"><header className="archive-hero"><p className="eyebrow">CHAPTER {String(chapter).padStart(2, "0")} / END</p><h1>{chapterContent.title}</h1><p>{chapterContent.summary}</p></header><section className="chapter-end-evidence"><span>SOURCE CHAIN RECORDED</span><strong>{chapterContent.evidence}</strong><p>记录已写入当前 Session。它们保持来源标签，不会自动合并成现实事实。</p></section><section className="chapter-end-progress" aria-label="Chapter investigation summary"><div><span>EVIDENCE</span><strong>{state.evidenceIds.length}</strong><small>session records</small></div><div><span>TEXT ARCHIVE</span><strong>{state.unlockedTextEntryIds.length}</strong><small>unlocked blocks</small></div><div><span>DEDUCTIONS</span><strong>{state.solvedDeductionIds.length}</strong><small>solved cases</small></div><div><span>PENDING RELATIONS</span><strong>{buildEvidenceGraph(state).edges.filter((edge) => !edge.known).length}</strong><small>still unverified</small></div></section><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation(chapterContent.next))}>{chapterContent.nextLabel}<ArrowRight aria-hidden="true" /></button><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Return to Archive</button></div></article>;
}

function InvestigationLead({ state, navigate }: { state: ReturnType<typeof useGameStore>["state"]; navigate: (payload: ReturnType<typeof resolveNavigation>) => void }) {
  const lead = deductionCases.find((item) => item.id === state.activeLeadId && state.chapter >= item.chapter && !state.solvedDeductionIds.includes(item.id))
    ?? deductionCases.find((item) => item.chapter === state.chapter && !state.solvedDeductionIds.includes(item.id))
    ?? deductionCases.find((item) => item.chapter > state.chapter && !state.solvedDeductionIds.includes(item.id));

  if (!lead) return null;
  const collected = lead.requiredEvidenceIds.filter((id) => state.evidenceIds.includes(id)).length;
  const locked = state.chapter < lead.chapter;
  return <section className={`investigation-lead ${locked ? "locked" : ""}`}><header><div><span>{locked ? "NEXT LEAD" : "CURRENT LEAD"} / CH{lead.chapter}</span><strong>{lead.id}</strong></div><small>{collected}/{lead.requiredEvidenceIds.length} required evidence</small></header><h2>{lead.question}</h2><p>{locked ? `完成 Chapter ${lead.chapter} 前的来源链后开放此案件。` : lead.hintText}</p><div><span>{locked ? "LOCKED" : "EVIDENCE WORKSPACE"}</span><button type="button" onClick={() => navigate(resolveNavigation("/evidence/graph"))}>{locked ? "Review Archive" : "Open Deductions"}<ArrowRight aria-hidden="true" /></button></div></section>;
}

function PostEndingArchive({ endingId }: { endingId: EndingId }) {
  const { state, navigate, openCredits } = useGameStore();
  const content: Record<EndingId, { eyebrow: string; title: string; status: string[]; note: string }> = {
    DELETE: { eyebrow: "Active Subject Index", title: "404", status: ["Subject not found.", "Active continuity unavailable.", "Source archive: PRESERVED"], note: "Historical original, recovered, altered and generated objects remain available as labeled records." },
    RETURN: { eyebrow: "Subject404 Continuity Context", title: "Welcome back, Lin Xia.", status: ["Continuity: ACCEPTED", "Identity match: 99.7%", "Observer405: MERGED"], note: "Reconstructed continuity context. Identity equivalence was not objectively proven." },
    OBSERVER: { eyebrow: "ROOM Subject Index", title: "404 / 405", status: ["Subject404: ACTIVE", "Subject405: ACTIVE", "Relation: INDEPENDENT"], note: "Subject405 originates from the current ROOM Session. External identity remains unresolved." },
    ARCHIVIST: { eyebrow: "Provenance-Separated Archive", title: "SUBJECT_404", status: ["Status: UNRESOLVED", "Canonical reconstruction: NONE", "Persona output: DISABLED"], note: "Original, recovered, altered, reconstructed, generated and unattributed objects remain separated by source." },
  };
  const item = content[endingId];
  const authoredStatus: Record<EndingId, string> = { DELETE: "ORIGINAL PRESERVED / ACTIVE VARIANT STOPPED", RETURN: "INCLUDED IN SUBJECT404 CONTINUITY CONTEXT", OBSERVER: "ASSIGNED TO SUBJECT405", ARCHIVIST: "PLAYER ORIGINAL / ROOM DERIVED SEPARATED" };
  return <article className={`archive-page post-ending-home post-${endingId.toLowerCase()}`}><header className="archive-hero"><p className="eyebrow">{item.eyebrow}</p><h1>{item.title}</h1><p>{item.note}</p></header><div className="post-ending-status">{item.status.map((line) => <strong key={line}>{line}</strong>)}</div><section className="post-ending-sources"><h2>Source Archive</h2><div><span>ORIGINAL</span><span>RECOVERED</span><span>ALTERED</span><span>RECONSTRUCTED</span><span>GENERATED</span><span>UNKNOWN</span>{state.playerPostCreated && <span>PLAYER SESSION ORIGINAL</span>}</div><p>Last reliable real-world record: 2007-08-18 10:12. After: NO RELIABLE SOURCE.</p></section>{state.playerPostCreated && <section className="ending-authored-object"><span>OBSERVER-AUTHORED OBJECT</span><h2>PLAYER_POST_001</h2><strong>{authoredStatus[endingId]}</strong><button type="button" onClick={() => navigate(resolveNavigation(state.playerPostDeleted ? "/archive/forum/thread/PLAYER_POST_001" : "/service/observer/object/PLAYER_POST_001"))}>Inspect Preserved Object</button></section>}<div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/resolution/review/source-boundary"))}>Last Reliable Source</button><button type="button" onClick={() => navigate(resolveNavigation("/resolution/state"))}>Resolution State</button><button type="button" onClick={() => navigate(resolveNavigation("/resolution/gallery"))}>Ending Gallery</button><button type="button" onClick={openCredits}>Credits</button></div></article>;
}

function ArchiveSearch() {
  const { state, navigate, readTextEntry } = useGameStore();
  const query = state.searchQuery || "林夏";
  const searchParams = new URLSearchParams(state.fakeUrl.split("?")[1] ?? "");
  const archiveMode = searchParams.get("view") === "text" ? "archive" : "results";
  const selectedTextEntryId = searchParams.get("entry") ?? "";
  const [textPoolMatches, setTextPoolMatches] = useState<Awaited<ReturnType<typeof searchTextPool>>["matches"]>([]);
  const [textPoolStats, setTextPoolStats] = useState({ lines: 0, characters: 0 });
  const [textPoolStatus, setTextPoolStatus] = useState<"loading" | "ready" | "error">("loading");
  const [textArchiveIndex, setTextArchiveIndex] = useState<TextArchiveIndex | null>(null);
  const [textArchiveStatus, setTextArchiveStatus] = useState<"loading" | "ready" | "error">("loading");
  const [archiveQuery, setArchiveQuery] = useState("");
  const [archiveChapterFilter, setArchiveChapterFilter] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0);
  const [archiveSourceFilter, setArchiveSourceFilter] = useState<SourceType | "ALL">("ALL");
  const [showLockedText, setShowLockedText] = useState(false);
  const isBlueMoonReference = query.toUpperCase() === "BM-1847";
  const isNode7Reference = query.toUpperCase() === "OLD DISTRICT NODE 7";
  const isPhoto17Reference = ["DSC0417.JPG", "DSC0017.JPG"].includes(query.toUpperCase());
  const isPlayerPostReference = state.playerPostCreated && (query.toUpperCase() === "PLAYER_POST_001" || query === state.playerPostOriginalTitle || query.includes("原来的页面"));
  const playerPostResults = [{
    title: state.playerPostDeleted ? "Cached Player Thread" : state.playerPostMutation2Seen ? state.playerPostOriginalTitle.replace("有人看过", "还有人记得") : state.playerPostOriginalTitle,
    url: state.playerPostDeleted ? "archive/forum/thread/PLAYER_POST_001" : "forum/thread/PLAYER_POST_001",
    captured: state.playerPostDeleted ? "Active state: 410 Gone / Source preserved" : "Current Session Object",
    snippet: state.playerPostMutation2Seen ? "……如果只剩后来那个版本，你还会记得原来的页面吗？" : state.playerPostOriginalBody.slice(0, 90),
    path: state.playerPostDeleted ? "/archive/forum/thread/PLAYER_POST_001" : "/forum/thread/PLAYER_POST_001",
  }];
  const defaultResults = [...searchResults, ...archiveExtendedSearchResults];
  const results = isPlayerPostReference
    ? playerPostResults
    : isBlueMoonReference
    ? blueMoonReferenceResults
    : isNode7Reference
      ? node7ReferenceResults
      : isPhoto17Reference
        ? photo17ReferenceResults
      : defaultResults;
  useEffect(() => {
    let active = true;
    setTextPoolStatus("loading");
    setTextPoolMatches([]);
    searchTextPool(query)
      .then((result) => {
        if (!active) return;
        setTextPoolMatches(result.matches);
        setTextPoolStats(result.stats);
        setTextPoolStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setTextPoolMatches([]);
        setTextPoolStatus("error");
      });
    return () => {
      active = false;
    };
  }, [query]);
  useEffect(() => {
    let active = true;
    setTextArchiveStatus("loading");
    loadTextArchive()
      .then((index) => {
        if (!active) return;
        setTextArchiveIndex(index);
        setTextArchiveStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setTextArchiveStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  const selectedTextEntry = textArchiveIndex?.entries.find((entry) => entry.id === selectedTextEntryId);
  const visibleTextEntries = textArchiveIndex
    ? filterTextEntries(textArchiveIndex.entries, state, {
      chapter: archiveChapterFilter || undefined,
      sourceType: archiveSourceFilter,
      query: archiveQuery,
      includeLocked: showLockedText,
    })
    : [];
  const textSourceOptions = textArchiveIndex ? [...new Set(textArchiveIndex.entries.map((entry) => entry.sourceType))].sort() : [];

  useEffect(() => {
    if (selectedTextEntry && isTextEntryUnlocked(selectedTextEntry, state) && !state.readTextEntryIds.includes(selectedTextEntry.id)) {
      readTextEntry(selectedTextEntry.id);
    }
  }, [readTextEntry, selectedTextEntry, state]);

  function openTextArchive(entryId?: string) {
    const suffix = entryId ? `&entry=${encodeURIComponent(entryId)}` : "";
    navigate(resolveNavigation(`/search?view=text${suffix}`));
  }
  const total = isPlayerPostReference || isBlueMoonReference || isNode7Reference || isPhoto17Reference
    ? isPlayerPostReference ? 1 : isBlueMoonReference ? 3 : isNode7Reference ? 2 : 3
    : state.chapter1Complete || state.knowledgeIds.includes("knows_event_date_changed")
      ? defaultResults.length
      : defaultResults.length - 1;

  return (
    <article className="archive-page">
      <header className="search-header">
        <p>{archiveMode === "archive" ? "档案库：" : "搜索结果："}</p>
        <h1>{archiveMode === "archive" ? "Text Archive" : query}</h1>
        <span>{archiveMode === "archive" ? `${textArchiveIndex?.entries.length.toLocaleString() ?? "..."} indexed entries` : `${total} Results`}</span>
      </header>

      <nav className="search-mode-tabs" aria-label="Archive search modes">
        <button type="button" className={archiveMode === "results" ? "active" : ""} aria-pressed={archiveMode === "results"} onClick={() => navigate(resolveNavigation(`/search?q=${encodeURIComponent(query)}&view=results`))}>Search Results</button>
        <button type="button" className={archiveMode === "archive" ? "active" : ""} aria-pressed={archiveMode === "archive"} onClick={() => openTextArchive()}>Text Archive <span>{textArchiveIndex?.entries.length ?? "..."}</span></button>
      </nav>

      {archiveMode === "results" ? (
        <>
          <div className="result-list">
            {results.slice(0, total).map((result) => (
              <button key={result.title} type="button" onClick={() => navigate(resolveNavigation(result.path))}>
                <strong>{result.title}</strong>
                <span>{result.url}</span>
                <small>{result.captured}</small>
                <p>{result.snippet}</p>
              </button>
            ))}
          </div>
          <section className="text-pool-search"><header><div><span>FULL TEXT POOL</span><strong>{textPoolStatus === "loading" ? "Indexing source text..." : textPoolStatus === "error" ? "Source unavailable" : `${textPoolMatches.length} matching excerpts`}</strong></div><small>{textPoolStats.lines.toLocaleString()} lines / {Math.round(textPoolStats.characters / 1000)}k chars indexed</small></header>{textPoolStatus === "ready" && textPoolMatches.length === 0 && <p className="text-pool-empty">NO TEXT POOL MATCH. 这表示当前全文库索引没有命中“{query}”，不代表现实中不存在相关对象。</p>}{textPoolMatches.map((match) => <article key={`${match.line}-${match.excerpt}`}><span>LINE {match.line}</span><strong>{match.heading}</strong><p>{match.excerpt}</p></article>)}</section>
          <section className="text-archive-promo"><div><span>679,653 CHARACTERS / 1,045 ARCHIVE BLOCKS</span><strong>全文库已经接入为可解锁档案。</strong><p>精选条目进入调查流程，其余内容会随着章节和推理结论逐步开放。</p></div><button type="button" onClick={() => openTextArchive()}>Browse Text Archive <ArrowRight aria-hidden="true" /></button></section>
        </>
      ) : (
        <section className="text-archive-section" aria-label="Text archive browser">
          <div className="text-archive-toolbar">
            <label>关键词<input value={archiveQuery} onChange={(event) => setArchiveQuery(event.target.value)} placeholder="章节、标题或正文" /></label>
            <label>章节<select value={archiveChapterFilter} onChange={(event) => setArchiveChapterFilter(Number(event.target.value) as 0 | 1 | 2 | 3 | 4 | 5 | 6)}><option value={0}>全部章节</option>{[1, 2, 3, 4, 5, 6].map((chapter) => <option key={chapter} value={chapter}>Chapter {chapter}</option>)}</select></label>
            <label>来源<select value={archiveSourceFilter} onChange={(event) => setArchiveSourceFilter(event.target.value as SourceType | "ALL")}><option value="ALL">全部来源</option>{textSourceOptions.map((source) => <option key={source} value={source}>{source}</option>)}</select></label>
            <label className="text-archive-toggle"><input type="checkbox" checked={showLockedText} onChange={(event) => setShowLockedText(event.target.checked)} />显示锁定档案</label>
          </div>
          {textArchiveStatus === "loading" && <div className="text-archive-empty"><strong>正在载入档案索引...</strong><p>原始文本仍保留在 public/content/room404-text-pool.txt。</p></div>}
          {textArchiveStatus === "error" && <div className="text-archive-empty"><strong>档案索引暂时不可用。</strong><p>全文来源未被删除，刷新后可以重新尝试加载索引。</p></div>}
          {textArchiveStatus === "ready" && (
            <div className="text-archive-layout">
              <div className="text-archive-list" aria-label="Text archive entries">
                <div className="text-archive-list-heading"><span>{visibleTextEntries.length.toLocaleString()} 条可见档案</span><small>{showLockedText ? "包含锁定条目" : "仅显示已解锁条目"}</small></div>
                {visibleTextEntries.slice(0, 120).map((entry) => {
                  const status = getTextEntryStatus(entry, state);
                  return <button key={entry.id} type="button" className={`text-archive-card ${selectedTextEntryId === entry.id ? "active" : ""} ${status}`} onClick={() => openTextArchive(entry.id)}><span>CH{entry.chapter} / LINE {entry.lineStart}</span><strong>{status === "locked" ? "LOCKED / " : ""}{entry.heading}</strong><small>{entry.sourceType} · {entry.section}</small><p>{entry.body.slice(0, 120)}{entry.body.length > 120 ? "…" : ""}</p></button>;
                })}
                {visibleTextEntries.length > 120 && <p className="text-archive-list-note">当前显示前 120 条，请继续缩小章节、来源或关键词范围。</p>}
                {visibleTextEntries.length === 0 && <div className="text-archive-empty"><strong>没有符合当前条件的已解锁档案。</strong><p>可以打开“显示锁定档案”，或继续调查当前章节的证据关系。</p></div>}
              </div>
              <div className="text-archive-reader" aria-live="polite">
                {!selectedTextEntry && <div className="text-archive-empty"><FileSearch aria-hidden="true" /><strong>选择一条档案开始阅读。</strong><p>每条档案都保留来源类型、原文行号和关联证据。</p></div>}
                {selectedTextEntry && <TextArchiveReader entry={selectedTextEntry} state={state} onOpenEntry={openTextArchive} />}
              </div>
            </div>
          )}
        </section>
      )}
      {state.chapter1Complete && (
        <p className="session-note">1 restricted object discovered.</p>
      )}
    </article>
  );
}

function TextArchiveReader({ entry, state, onOpenEntry }: { entry: TextArchiveEntry; state: ReturnType<typeof useGameStore>["state"]; onOpenEntry: (entryId?: string) => void }) {
  const unlocked = isTextEntryUnlocked(entry, state);
  const paragraphs = entry.body.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);
  return <article className={`text-archive-reader-content ${unlocked ? "unlocked" : "locked"}`}><header><span>TEXT ARCHIVE / CH{entry.chapter}</span><strong>{entry.heading}</strong><small>{entry.sourceType} · line {entry.lineStart} · {entry.section}</small></header>{unlocked ? <>{paragraphs.map((paragraph, index) => <p key={`${entry.id}-${index}`}>{paragraph}</p>)}<div className="text-archive-meta"><span>RELATED EVIDENCE</span><strong>{entry.relatedEvidenceIds.length ? entry.relatedEvidenceIds.join(" / ") : "NONE INDEXED"}</strong><span>TAGS</span><strong>{entry.tags.join(" / ")}</strong></div></> : <div className="text-archive-lock"><LockKeyhole aria-hidden="true" /><strong>档案尚未解锁。</strong><p>{entry.unlockCondition === "chapter:6" ? "完成对应章节并保留来源边界后开放。" : "完成相关章节推理后开放。"}</p><button type="button" onClick={() => onOpenEntry()}>返回档案列表</button></div>}</article>;
}

const blueMoonReferenceResults = [
  {
    title: "BlueMoon Community - User Archive",
    url: "bluemoon-forum.net/user/1847",
    captured: "Snapshot: 2007-08-17",
    snippet: "UID: 1847 / Username: Summer17",
    path: "/archive/20070817/bluemoon-forum.net/",
  },
  {
    title: "BlueMoon Session Metadata",
    url: "archive/forum/session/1847",
    captured: "Status: Partial",
    snippet: "UID 1847 session metadata is available from archived forum cache.",
    path: "/archive/forum/session/1847",
  },
  {
    title: "Referenced object: backup_20070823.zip",
    url: "linxia-home.net/0817/backup/backup_20070823.zip",
    captured: "Identity dependency unresolved",
    snippet: "Object references BM-1847. Source relation pending.",
    path: "/site/2007/linxia/0817/backup/backup_20070823.zip",
  },
];

const node7ReferenceResults = [
  {
    title: "Old District Public Network Node 7 - Browser Cache Fragment",
    url: "archive/network/old-district/node-7/cache-0817",
    captured: "Recovered: 2007-08-17 21:04",
    snippet: "History fragment: linxia-home.net/0817/private.html. Full workstation recovery unavailable.",
    path: "/site/2007/linxia/0817/private",
  },
  {
    title: "Public Network Session Index",
    url: "archive/network/old-district/node-7/session-index",
    captured: "Status: Partial",
    snippet: "Forum session UID1847 appears in a shared public-network recovery set.",
    path: "/archive/forum/session/1847",
  },
];

const photo17ReferenceResults = [
  {
    title: "Photo Club File Index - 2007-08-17",
    url: "archive/photo-club/20070817/index",
    captured: "Copied: 19:06 / Operator: GY",
    snippet: "DSC0417.JPG is listed in the recovered 67-file photo-club copy operation.",
    path: "/archive/photo-club/20070817/index",
  },
  {
    title: "backup_20070823 Recovered Object",
    url: "backup_20070823/DSC0417.JPG",
    captured: "Recovered: 2007-08-23 04:06",
    snippet: "A later copy of DSC0417.JPG is available for provenance comparison.",
    path: "/photo/forensics/DSC0417/version/20070823",
  },
  {
    title: "ROOM Image Restore Object",
    url: "room/image/DSC0417",
    captured: "Access: restricted",
    snippet: "Derived image objects require provenance context before access is granted.",
    path: "/photo/forensics/DSC0417",
  },
];

function LinxiaHome() {
  return (
    <LegacySiteShell title="☆ 林夏 の Home Page ☆" subtitle="since 2006.02" nav={linxiaNav}>
      <div className="two-column">
        <aside className="legacy-sidebar">
          <strong>About</strong>
          <p>Name：林夏</p>
          <p>Birthday：04.12</p>
          <p>Camera：Sony Cyber-shot</p>
          <p>Like：拍照 / 下雨 / 公交最后一排 / 旧网页</p>
          <p>Don't Like：香菜 / 很吵的地方</p>
          <hr />
          <p>Today：12</p>
          <p>Total：18374</p>
          <p>♪ BGM：Window Rain</p>
        </aside>
        <section className="legacy-main">
          <h2>Welcome</h2>
          <p>好久没改首页了。</p>
          <p>最近天气一直很热，电脑也很热，连这个页面看起来都很热。</p>
          <p>相册那边加了几张学校附近拍的东西。如果打不开图就刷新一次，空间最近好像又不太稳定。</p>
          <p>Diary 还是想到什么写什么。Guestbook 如果我没回，大概率只是忘了，不是故意的。</p>
          <p>-- Linxia</p>
          <h3>最近更新</h3>
          <ul>
            <li>08.12 Diary：把页面改回去了</li>
            <li>08.09 Diary：公交车最后一排</li>
            <li>08.08 Photo：学校附近</li>
            <li>08.03 Diary：原图</li>
          </ul>
          <p className="legacy-updated">Last Updated：2007.08.12</p>
        </section>
      </div>
    </LegacySiteShell>
  );
}

function LinxiaDiary() {
  const { state } = useGameStore();
  const entries = [...diaryEntries, ...ordinaryDiaryEntries];

  return (
    <LegacySiteShell title="Diary" subtitle="不保证每天写。" nav={linxiaNav}>
      {state.knowledgeIds.includes("knows_event_date_changed") && (
        <p className="legacy-warning">1 draft entry unavailable</p>
      )}
      <div className="diary-list">
        {entries.map((entry) => (
          <article key={entry.id} className="diary-entry">
            <h2>
              {entry.date}　{entry.title}
            </h2>
            {entry.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        ))}
      </div>
    </LegacySiteShell>
  );
}

function LinxiaPhotoIndex() {
  const { navigate } = useGameStore();

  return (
    <LegacySiteShell title="Photo" subtitle="学校 / 街道 / 雨天 / 随便拍 / 摄影社" nav={linxiaNav}>
      <div className="photo-grid">
        {photoEntries.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className="photo-thumb"
            onClick={() => navigate(resolveNavigation(photo.routePath ?? "/404"))}
          >
            <MediaSlot asset={getMediaAsset(photo.assetId)} className="thumb-media" />
            <span>Photo {photo.id}</span>
            <strong>{photo.title}</strong>
            <small>{photo.caption}</small>
          </button>
        ))}
      </div>
    </LegacySiteShell>
  );
}

function Photo17Page() {
  const { state, navigate } = useGameStore();
  const photo17Asset = resolvePhoto17Asset(state.photo17Visits);

  return (
    <LegacySiteShell title="Photo 17" subtitle="Category：摄影社" nav={linxiaNav}>
      <figure className="photo-detail">
        <MediaSlot asset={photo17Asset} className="photo-main-media" />
        <figcaption>门锁坏了三年好像也没人修。</figcaption>
      </figure>
      <div className="legacy-actions">
        <button type="button" onClick={() => navigate(resolveNavigation("/403"))}>
          查看原始文件信息
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/photo"))}>
          返回相册
        </button>
      </div>
    </LegacySiteShell>
  );
}

function GuestbookPage() {
  return (
    <LegacySiteShell title="Guestbook" subtitle="留言板" nav={linxiaNav}>
      <table className="guestbook-table">
        <tbody>
          {guestbookEntries.map((entry) => (
            <tr key={entry.no}>
              <td>{entry.no}</td>
              <td>
                <strong>{entry.author}</strong>
                <small>{entry.date}</small>
              </td>
              <td>
                <p>{entry.text}</p>
                {entry.reply && <p className="reply">林夏：{entry.reply}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </LegacySiteShell>
  );
}

function SchoolHome() {
  const { navigate } = useGameStore();
  const news = [
    ["2007-08-16 我校开展暑期校园安全检查", "/site/2003/nc2ms/news/20070816"],
    ["2007-08-15 摄影社将开展暑期旧体育馆采风活动", "/archive/20070815/nc2ms.edu/photo-event"],
    ["2007-08-13 高三年级返校安排通知", "/site/2003/nc2ms/news/20070813"],
    ["2007-08-10 暑期值班表（第二周）", "/site/2003/nc2ms/news/20070810"],
  ] as const;
  const quickLinks = [
    ["校务公开", "/site/2003/nc2ms/office"],
    ["资源下载", "/site/2003/nc2ms/download"],
    ["社团主页", "/site/2003/nc2ms/clubs/photo"],
  ] as const;

  return (
    <LegacySiteShell title="南城市立第二中学" subtitle="欢迎访问我校校园网" nav={schoolNav}>
      <div className="school-layout">
        <section>
          <h2>校园新闻</h2>
          <ul className="link-list">
            {news.map(([label, path]) => (
              <li key={path}>
                <button type="button" onClick={() => navigate(resolveNavigation(path))}>{label}</button>
              </li>
            ))}
          </ul>
        </section>
        <aside>
          <h3>快速通道</h3>
          <ul className="link-list">
            {quickLinks.map(([label, path]) => (
              <li key={path}>
                <button type="button" onClick={() => navigate(resolveNavigation(path))}>{label}</button>
              </li>
            ))}
          </ul>
          <p>您是本站第 562813 位访客</p>
        </aside>
      </div>
    </LegacySiteShell>
  );
}

function SchoolPhotoClub() {
  const { navigate } = useGameStore();
  const activities = [
    ["2007-08-18 暑期旧体育馆采风", "/site/2007/linxia/photo/17"],
    ["2007-07-22 老城区街景拍摄", "/site/2003/nc2ms/clubs/photo/activity/20070722"],
    ["2007-06-10 校园植物专题", "/site/2003/nc2ms/clubs/photo/activity/20070610"],
  ] as const;

  return (
    <LegacySiteShell title="南城二中摄影社" subtitle="用镜头记录校园，用影像保存生活。" nav={schoolNav}>
      <p>摄影社成立于 2003 年，前身为“影像兴趣小组”。社团以校园活动记录、城市影像采集、摄影基础交流及网页作品展示为主要内容。</p>
      <p>因校园服务器空间有限，活动照片将在每学期结束后统一整理，部分原始文件刻录备份保存。</p>
      <h2>2007核心成员</h2>
      <ul>
        <li>周然 - 活动协调</li>
        <li>林夏 - 摄影 / 图片整理</li>
        <li>顾言 - 网页 / 文件整理</li>
        <li>陈海 - 摄影</li>
        <li>徐晓 - 摄影</li>
      </ul>
      <h2>活动记录</h2>
      <ul className="link-list">
        {activities.map(([label, path]) => (
          <li key={path}>
            <button type="button" onClick={() => navigate(resolveNavigation(path))}>{label}</button>
          </li>
        ))}
      </ul>
    </LegacySiteShell>
  );
}

function SchoolArchiveItem({ kind, date, title }: { kind: "news" | "activity" | "quick"; date: string; title: string }) {
  const { navigate } = useGameStore();
  const body = kind === "activity"
    ? [
        "本条记录来自南城二中摄影社旧站活动目录。原始图片未随页面快照保留。",
        "活动记录仍可与摄影社成员名单、个人主页 Photo17 和后续恢复对象进行交叉比对。",
      ]
    : kind === "quick"
      ? [
          "此栏目保留了旧站目录结构，但当前快照只包含标题和索引元数据。",
          "部分附件在迁移时没有进入公开归档。",
        ]
      : [
          "本条公告来自南城二中校园网公开快照。页面正文和发布日期保持原始归档标签。",
          "它可以作为时间线中的普通学校记录，但不能单独证明任何人物的现实去向。",
        ];

  return (
    <LegacySiteShell title={title} subtitle={`Archived record / ${date}`} nav={schoolNav}>
      <article className="school-archive-item">
        <header>
          <span>{kind === "activity" ? "CLUB ACTIVITY" : kind === "quick" ? "SITE INDEX" : "SCHOOL NEWS"}</span>
          <time>{date}</time>
        </header>
        <h2>{title}</h2>
        {body.map((line) => <p key={line}>{line}</p>)}
        <dl>
          <dt>Source</dt>
          <dd>nc2ms.edu archived snapshot</dd>
          <dt>Access</dt>
          <dd>READABLE / PARTIAL</dd>
          <dt>Image payload</dt>
          <dd>NOT INCLUDED</dd>
        </dl>
        <div className="button-row">
          <button type="button" onClick={() => navigate(resolveNavigation("/site/2003/nc2ms"))}>Return to School Home</button>
          <button type="button" onClick={() => navigate(resolveNavigation("/site/2003/nc2ms/clubs/photo"))}>Open Photo Club</button>
        </div>
      </article>
    </LegacySiteShell>
  );
}

function SchoolNotice({ capture, date, footer }: { capture: string; date: string; footer: string }) {
  const { state, navigate } = useGameStore();
  const bothSeen = state.viewedCaptures.includes("20070815") && state.viewedCaptures.includes("20070819");

  return (
    <LegacySiteShell title="摄影社暑期旧体育馆采风活动" subtitle={`Captured: ${capture}`} nav={schoolNav}>
      <div className="capture-tabs">
        <button type="button" onClick={() => navigate(resolveNavigation("/archive/20070815/nc2ms.edu/photo-event"))}>
          2007-08-15
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/archive/20070819/nc2ms.edu/photo-event"))}>
          2007-08-19
        </button>
      </div>
      <dl className="notice-details">
        <dt>活动日期：</dt>
        <dd>{date}</dd>
        <dt>集合时间：</dt>
        <dd>下午4时</dd>
        <dt>集合地点：</dt>
        <dd>旧体育馆侧门</dd>
      </dl>
      <p className="legacy-updated">{footer}</p>
      {bothSeen && (
        <div className="compare-box">
          <strong>1 textual difference detected.</strong>
          <pre>{`- 2007年8月17日\n+ 2007年8月18日`}</pre>
          <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/"))}>
            打开相关目录
          </button>
        </div>
      )}
    </LegacySiteShell>
  );
}

function PrivateIndexPage() {
  const { state, navigate } = useGameStore();

  return (
    <article className="raw-page">
      <h1>Index of /0817/</h1>
      <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/private"))}>
        private.html {state.knowledgeIds.includes("knows_event_date_changed") ? "" : "[403]"}
      </button>
      <button type="button" onClick={() => navigate(resolveNavigation("/404"))}>
        photo_note.txt
      </button>
      <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/backup/backup_20070823.zip"))}>
        backup/
      </button>
    </article>
  );
}

function PrivatePage() {
  const { navigate } = useGameStore();

  return (
    <article className="raw-page private-page">
      <h1>untitled</h1>
      <p>本来不想写这个。</p>
      <p>今天活动是17号。周然说以后对外会写成18号。</p>
      <p>我知道写这种话看起来很像我又在跟谁较劲，但反正这个页面也没人会看到。</p>
      <p>下午去了旧体育馆。一开始其实挺正常的。顾言先到，周然后来才来。陈海还是一样什么都拍。</p>
      <p>后来我们进了侧面的设备间。那边本来就不该进去。</p>
      <p>周然看到照片以后说那几张别发。</p>
      <p>我说不发可以。</p>
      <p>他又说那干脆删了。</p>
      <p>我不知道为什么听到这句话就特别烦。</p>
      <p>可能因为最近已经不是第一次了。标题改一下，文字改一下，时间改一下，反正“意思一样”。</p>
      <p>可是一样不一样又不是他说了算。</p>
      <p>我知道我也有点故意。</p>
      <p>后来就吵起来了。</p>
      <p>照片顾言那边有原来的。</p>
      <p>先别删。</p>
      <p>明天再说吧。</p>
      <small>saved: 2007-08-17 21:04</small>
      <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/backup/backup_20070823.zip"))}>
        backup copy: ../backup/backup_20070823.zip
      </button>
    </article>
  );
}

function ForbiddenBackupPage() {
  const { state, search, navigate, startPhoto17Forensics } = useGameStore();

  return (
    <article className="system-page">
      <h1>403 Forbidden</h1>
      <p>This archived object exists, but is not available in the current access level.</p>
      <dl>
        <dt>Object:</dt>
        <dd>backup_20070823.zip</dd>
        <dt>Size:</dt>
        <dd>Unknown</dd>
        <dt>Capture:</dt>
        <dd>Partial</dd>
        <dt>Referenced identity:</dt>
        <dd>BM-1847</dd>
        {state.chapter2Complete && (
          <>
            <dt>Identity reference:</dt>
            <dd>Resolved: Summer17 / UID1847</dd>
          </>
        )}
      </dl>
      <button className="system-action" type="button" onClick={() => search("BM-1847")}>
        Search Reference
      </button>
      {state.chapter2Complete && !state.photo17ForensicsStarted && (
        <section className="backup-resolution">
          <p>Additional source required: IMAGE PROVENANCE</p>
          <p>Referenced object: DSC0417.JPG</p>
          <button className="system-action" type="button" onClick={startPhoto17Forensics}>
            Inspect Image Provenance
          </button>
        </section>
      )}
      {state.chapter3Complete && (
        <section className="backup-resolution">
          <p>Image provenance: RESOLVED</p>
          <p>Associated reconstruction: SUBJECT_04</p>
          <p>Recovery environment: AVAILABLE</p>
          <button className="system-action" type="button" onClick={() => navigate(resolveNavigation("/recovery/boot"))}>
            Open Recovery Environment
          </button>
        </section>
      )}
      <p className="unknown-line">原来的还在吗？</p>
    </article>
  );
}

function BlueMoonArchive() {
  const { navigate } = useGameStore();

  return (
    <article className="archive-page">
      <header className="search-header">
        <p>Snapshot recovered.</p>
        <h1>BlueMoon Community</h1>
        <span>CHAPTER 02 / BlueMoon</span>
      </header>
      <section className="archive-status-grid">
        <strong>Captured: 2007-08-17</strong>
        <span>Archive Status: PARTIAL</span>
        <span>Text: 86%</span>
        <span>Images: 42%</span>
        <span>Attachments: 13%</span>
        <span>User profiles: partial</span>
      </section>
      <div className="archive-actions">
        <button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>
          Open Archived Site
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/forum/user/1847"))}>
          Open Profile: UID 1847
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/forum/search?q=Summer17"))}>
          Search Cached Data
        </button>
      </div>
      <p className="archive-footer">
        Forum engine unknown PHP forum. Encoding GBK. Last successful crawl 2007-08-17 23:12.
      </p>
    </article>
  );
}

function ForumShell({ children }: { children: React.ReactNode }) {
  const { state, navigate } = useGameStore();

  return (
    <article className="forum-shell">
      <header className="forum-header">
        <div><h1>BlueMoon Community</h1><p>蓝月社区 / 凌晨以后，也有人在线。</p></div>
        <span>ARCHIVED PARTIAL</span>
      </header>
      <nav className="forum-nav">
        <button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>
          <House aria-hidden="true" />论坛首页
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/forum/search?q=Summer17"))}>
          <Search aria-hidden="true" />搜索
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/forum/user/1847"))}>
          <UserRound aria-hidden="true" />UID1847
        </button>
        <span>游客</span>
      </nav>
      <div className="forum-archive-strip">
        <span><strong>CAPTURE</strong>2007-08-17 23:12</span>
        <span><strong>INDEX</strong>{state.summer17ThreadIdsRead.length}/3 SUMMER17 THREADS</span>
        <span><strong>SESSION OBJECT</strong>{state.playerPostCreated ? "PLAYER_POST_001" : "NONE"}</span>
      </div>
      <div className="forum-content">{children}</div>
    </article>
  );
}

function ForumHome() {
  const { state, navigate } = useGameStore();
  const boardPaths: Record<string, string> = {
    夜话: "/forum/board/night",
    摄影: "/forum/board/photo",
    校园: "/forum/board/campus",
    网页制作: "/forum/board/web",
    论坛公告: "/forum/board/announcements",
    建议反馈: "/forum/board/feedback",
    闲聊灌水: "/forum/board/chat",
    情感: "/forum/board/relationship",
    音乐: "/forum/board/music",
    旧物交换: "/forum/board/trade",
  };

  return (
    <ForumShell>
      <div className="forum-boards">
        {forumBoards.map((group) => (
          <section key={group.group}>
            <h2><span>{group.group}</span><small>{group.boards.length} boards</small></h2>
            {group.boards.map(([name, description]) => {
              const boardPath = boardPaths[name];
              const cachedTopicCount = forumThreads.filter((thread) => thread.board === name).length;

              return (
                <button
                  key={name}
                  type="button"
                  disabled={!boardPath}
                  aria-label={boardPath ? `${name}，${cachedTopicCount} 个缓存主题` : `${name}，未建立缓存索引`}
                  onClick={boardPath ? () => navigate(resolveNavigation(boardPath)) : undefined}
                >
                  <span className="forum-board-icon"><MessageSquareText aria-hidden="true" /></span>
                  <span className="forum-board-copy"><strong>{name}</strong><small>{description}</small></span>
                  <span className="forum-board-stats">
                    <strong>{boardPath ? cachedTopicCount : "--"}</strong>
                    <small>{boardPath ? "cached topics" : "not indexed"}</small>
                  </span>
                  {boardPath
                    ? <ArrowRight className="forum-board-arrow" aria-hidden="true" />
                    : <LockKeyhole className="forum-board-lock" aria-hidden="true" />}
                </button>
              );
            })}
          </section>
        ))}
      </div>
      <section className="forum-online">
        当前在线：32　会员：7　游客：25　night_train / leaf / northwind / cameraKid
      </section>
      {state.chapter >= 2 && <div className="forum-session-tools"><small>Archived interface / session submission</small><button type="button" onClick={() => navigate(resolveNavigation(state.playerPostCreated ? "/forum/thread/PLAYER_POST_001" : "/forum/post/new"))}>{state.playerPostCreated ? "查看我的主题" : "发表主题"}</button></div>}
    </ForumShell>
  );
}

function ForumBoard({ board }: { board: string }) {
  const { state, navigate } = useGameStore();
  const threads = forumThreads.filter((thread) => thread.board === board);

  return (
    <ForumShell>
      <header className="forum-board-heading"><div><span>BlueMoon / Board</span><h2>{board}</h2></div><strong>{threads.length} cached topics</strong></header>
      {state.chapter >= 2 && <div className="forum-board-tools"><button type="button" onClick={() => navigate(resolveNavigation(state.playerPostCreated ? "/forum/thread/PLAYER_POST_001" : "/forum/post/new"))}><MessageSquareText aria-hidden="true" />{state.playerPostCreated ? "我的主题" : "发表主题"}</button></div>}
      <div className="forum-thread-list">
        {threads.map((thread) => (
          <button key={thread.id} type="button" onClick={() => navigate(resolveNavigation(`/forum/thread/${thread.id}`))}>
            <span>[{thread.status === "DELETED" ? "Deleted" : thread.board}]</span>
            <strong>{thread.title}</strong>
            <small>
              {forumUsers[thread.authorUid].username} / {thread.createdAt}
            </small>
            <p>{thread.excerpt}</p>
          </button>
        ))}
      </div>
    </ForumShell>
  );
}

function PlayerPostComposer() {
  const { state, createPlayerPost, navigate } = useGameStore();
  const [title, setTitle] = useState(playerPostDefaults.title);
  const [body, setBody] = useState(playerPostDefaults.body);
  const [error, setError] = useState("");
  if (state.chapter < 2) return <SystemError />;
  if (state.playerPostCreated) return <PlayerPostThread />;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanBody = body.trim();
    if (cleanTitle.length < 2 || cleanTitle.length > 40) return setError("标题需要 2-40 个字符。");
    if (cleanBody.length < 1 || cleanBody.length > 500) return setError("正文需要 1-500 个字符。");
    createPlayerPost(cleanTitle, cleanBody);
  }
  return <ForumShell><section className="player-post-composer"><header><h2>发表主题</h2><small>Archived interface / session submission</small></header><p className="forum-muted">内容只会进入 2026 Current Session Object，不会发送给 2007 用户。</p><div className="post-topic-presets">{playerPostTopics.map(([label, presetTitle, presetBody]) => <button key={label} type="button" onClick={() => { setTitle(presetTitle); setBody(presetBody); setError(""); }}>{label}</button>)}</div><form onSubmit={submit}><label>标题<input value={title} maxLength={40} onChange={(event) => setTitle(event.target.value)} /></label><span>{title.length}/40</span><label>正文<textarea value={body} maxLength={500} rows={11} onChange={(event) => setBody(event.target.value)} /></label><span>{body.length}/500</span>{error && <p className="form-error">{error}</p>}<p className="draft-saved">Auto Draft Saved / CURRENT SESSION</p><div><button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>取消</button><button type="submit">发表主题</button></div></form></section></ForumShell>;
}

function playerPostDisplay(state: ReturnType<typeof useGameStore>["state"]) {
  const editedTitle = state.playerPostEditedTitle || state.playerPostOriginalTitle;
  const editedBody = state.playerPostEditedBody || state.playerPostOriginalBody;
  if (state.playerPostDisplayVersion === "player_edit") return { title: editedTitle, body: editedBody, source: "PLAYER EDIT" };
  if (state.playerPostDisplayVersion === "mutation_2") return { title: editedTitle.replace("有人看过", "还有人记得"), body: mutatePlayerPostPhase2(editedBody), source: "ROOM CONTINUITY VARIANT" };
  if (state.playerPostDisplayVersion === "mutation_1") return { title: editedTitle, body: mutatePlayerPost(editedBody), source: "ROOM SESSION VARIANT" };
  return { title: state.playerPostOriginalTitle, body: state.playerPostOriginalBody, source: "PLAYER ORIGINAL" };
}

function PlayerPostThread() {
  const { state, navigate, markPlayerPostExit, viewPlayerPostMutation, viewPlayerPostMutation2, comparePlayerPost, deletePlayerPost } = useGameStore();
  const [exitNotice, setExitNotice] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  if (!state.playerPostCreated) return <SystemError />;
  if (state.playerPostDeleted) return <PlayerPostGone />;
  const mutationAvailable = state.chapter >= 3 && state.playerPostViewDesyncSeen;
  const mutation2Available = state.chapter >= 4 && state.playerPostMutationSeen;
  const displayed = playerPostDisplay(state);
  function exitThread() { markPlayerPostExit(); setExitNotice(true); }
  return <ForumShell><div className="forum-post-title"><h2>{displayed.title}</h2><p>查看：0　回复：0　编号：PLAYER_POST_001</p></div><article className="forum-post player-post"><aside className="forum-post-author"><strong>ArchiveGuest</strong><span>游客1849</span><span>2026 Session</span>{state.playerPostOriginalPreserved && <span className="preserved-label">ORIGINAL PRESERVED</span>}</aside><div className="forum-post-content"><p className="forum-floor">#1　<span className="post-source-badge">{displayed.source}</span></p><div className="forum-post-main">{displayed.body.split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</div></div></article>{exitNotice && <section className="session-desync"><strong>Session view: 1</strong><span>Archived forum view: 0</span><p>当前 Session 记录了这次查看，归档索引未被回写。</p><button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>返回版面</button></section>}{!exitNotice && <div className="player-post-actions"><button type="button" onClick={exitThread}>返回版面</button><button type="button" onClick={() => navigate(resolveNavigation("/forum/thread/PLAYER_POST_001/edit"))}>编辑</button>{mutationAvailable && !state.playerPostMutationSeen && <button type="button" onClick={viewPlayerPostMutation}>重新载入索引副本</button>}{mutation2Available && !state.playerPostMutation2Seen && <button type="button" onClick={viewPlayerPostMutation2}>载入 Continuity Variant</button>}{state.playerPostMutationSeen && <button type="button" onClick={comparePlayerPost}>版本比较</button>}<button type="button" className="danger-forum-button" onClick={() => setDeleteConfirm(true)}>删除主题</button></div>}{deleteConfirm && <section className="delete-confirm"><h3>删除 PLAYER_POST_001？</h3><p>论坛主题将返回 410 Gone。Source Archive 中的原始 Session 对象不会被删除。</p><button type="button" onClick={() => setDeleteConfirm(false)}>取消</button><button type="button" onClick={deletePlayerPost}>确认删除</button></section>}{state.playerPostMutationSeen && <p className="mutation-notice">Current display: {displayed.source}. Player Original remains immutable.</p>}</ForumShell>;
}

function PlayerPostCompare() {
  const { state, navigate, restorePlayerPostOriginal, preservePlayerPostOriginal } = useGameStore();
  if (!state.playerPostCreated || !state.playerPostMutationSeen) return <SystemError />;
  const editedBody = state.playerPostEditedBody || state.playerPostOriginalBody;
  return <ForumShell><section className="player-post-compare"><header><h2>PLAYER_POST_001 / Version Compare</h2><span>Original is immutable</span></header><div><article><span>PLAYER SESSION ORIGINAL</span><strong>V0 / immutable</strong>{state.playerPostOriginalBody.split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</article>{state.playerPostEditedBody && <article><span>PLAYER EDIT</span><strong>V1 / authored revision</strong>{state.playerPostEditedBody.split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</article>}<article><span>FORUM INDEXED COPY</span><strong>Archive state / views 0</strong>{state.playerPostOriginalBody.split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</article><article><span>ROOM SESSION VARIANT</span><strong>Derived version / local only</strong>{mutatePlayerPost(editedBody).split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</article>{state.playerPostMutation2Seen && <article><span>ROOM CONTINUITY VARIANT</span><strong>Derived version 2</strong>{mutatePlayerPostPhase2(editedBody).split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</article>}</div><div className="player-post-actions"><button type="button" onClick={() => navigate(resolveNavigation("/forum/thread/PLAYER_POST_001"))}>返回主题</button><button type="button" onClick={restorePlayerPostOriginal}>Restore Original</button><button type="button" disabled={state.playerPostOriginalPreserved} onClick={preservePlayerPostOriginal}>{state.playerPostOriginalPreserved ? "Original Preserved" : "Preserve Original"}</button></div></section></ForumShell>;
}

function PlayerPostEditor() {
  const { state, editPlayerPost, navigate } = useGameStore();
  const [title, setTitle] = useState(state.playerPostEditedTitle || state.playerPostOriginalTitle);
  const [body, setBody] = useState(state.playerPostEditedBody || state.playerPostOriginalBody);
  const [error, setError] = useState("");
  if (!state.playerPostCreated || state.playerPostDeleted) return <SystemError />;
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (title.trim().length < 2 || title.trim().length > 40) return setError("标题需要 2-40 个字符。"); if (body.trim().length < 1 || body.trim().length > 500) return setError("正文需要 1-500 个字符。"); editPlayerPost(title, body); }
  return <ForumShell><section className="player-post-composer"><header><h2>编辑主题</h2><small>Creates PLAYER_EDIT / Original remains immutable</small></header><form onSubmit={submit}><label>标题<input value={title} maxLength={40} onChange={(event) => setTitle(event.target.value)} /></label><span>{title.length}/40</span><label>正文<textarea value={body} maxLength={500} rows={11} onChange={(event) => setBody(event.target.value)} /></label><span>{body.length}/500</span>{error && <p className="form-error">{error}</p>}<div><button type="button" onClick={() => navigate(resolveNavigation("/forum/thread/PLAYER_POST_001"))}>取消</button><button type="submit">保存编辑版本</button></div></form></section></ForumShell>;
}

function PlayerPostGone() {
  const { viewPlayerPostArchive, navigate } = useGameStore();
  return <ForumShell><section className="player-post-gone"><span>410</span><h2>Gone</h2><p>PLAYER_POST_001 曾经存在，但已由当前 Session 删除。</p><small>Deletion removes the active forum object, not every archived source.</small><div><button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>论坛首页</button><button type="button" onClick={viewPlayerPostArchive}>查看 Cached Player Thread</button></div></section></ForumShell>;
}

function PlayerPostArchive() {
  const { state, navigate, preservePlayerPostOriginal } = useGameStore();
  if (!state.playerPostDeleted) return <SystemError />;
  return <article className="archive-page player-post-archive"><header className="search-header"><p>Cached Player Thread</p><h1>PLAYER_POST_001</h1><span>ARCHIVED AFTER DELETE</span></header><section><span>PLAYER SESSION ORIGINAL</span><h2>{state.playerPostOriginalTitle}</h2>{state.playerPostOriginalBody.split("\n").map((line, index) => <p key={index}>{line || " "}</p>)}</section><dl><dt>Active Forum State</dt><dd>410 GONE</dd><dt>Original Session Object</dt><dd>PRESERVED</dd><dt>ROOM Derived Versions</dt><dd>{state.playerPostMutation2Seen ? "2" : state.playerPostMutationSeen ? "1" : "0"}</dd><dt>Source Boundary</dt><dd>PLAYER_SESSION_ORIGINAL</dd></dl><div className="button-row"><button type="button" disabled={state.playerPostOriginalPreserved} onClick={preservePlayerPostOriginal}>{state.playerPostOriginalPreserved ? "Original Preserved" : "Preserve Original"}</button><button type="button" onClick={() => navigate(resolveNavigation("/forum/thread/PLAYER_POST_001"))}>View 410 State</button></div></article>;
}

function ForumSearch() {
  const { state, navigate } = useGameStore();
  const query = state.searchQuery || "Summer17";
  const [draft, setDraft] = useState(query);
  useEffect(() => setDraft(query), [query]);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const threads = forumThreads.filter((thread) => {
    if (normalizedQuery === "原图") return thread.id === "1738";
    const author = forumUsers[thread.authorUid];
    const content = forumThreadContent[thread.id];
    const searchableText = [
      thread.title,
      thread.excerpt,
      author.username,
      ...(content?.lines ?? []),
      ...(content?.replies.map((reply) => reply.body) ?? []),
    ].join(" ").toLocaleLowerCase();
    return searchableText.includes(normalizedQuery);
  });

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = draft.trim();
    navigate(resolveNavigation(`/forum/search?q=${encodeURIComponent(nextQuery || "Summer17")}`));
  }

  return (
    <ForumShell>
      <h2>Search: {query}</h2>
      <form className="forum-search-form" onSubmit={submitSearch}>
        <label>搜索缓存<input type="search" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={60} autoComplete="off" /></label>
        <button type="submit"><Search aria-hidden="true" />搜索</button>
        <button type="button" disabled={draft.length === 0} onClick={() => setDraft("")}>清空</button>
      </form>
      <p className="forum-muted">{threads.length} matching cached topics / full-text search across titles, posts and replies</p>
      <div className="forum-thread-list">
        {threads.map((thread) => (
          <button key={thread.id} type="button" onClick={() => navigate(resolveNavigation(`/forum/thread/${thread.id}`))}>
            <span>{thread.status === "DELETED" ? "[Deleted]" : `[${thread.board}]`}</span>
            <strong>{thread.title}</strong>
            <small>
              {forumUsers[thread.authorUid].username} / {thread.createdAt}
            </small>
            <p>{thread.excerpt}</p>
          </button>
        ))}
      </div>
      {threads.length === 0 && <section className="forum-empty-state"><strong>NO INDEXED MATCH</strong><p>当前缓存中没有包含“{query}”的主题、正文或回复。</p><small>这表示索引没有命中，不代表现实中不存在相关内容。</small></section>}
    </ForumShell>
  );
}

function ForumUserPage({ uid }: { uid: number }) {
  const { state, navigate } = useGameStore();
  const user = forumUsers[uid];
  const identityClueCount = (state.identityClueIds ?? []).length;

  return (
    <ForumShell>
      <section className="forum-profile">
        <h2>{user.username}</h2>
        <dl>
          <dt>UID：</dt>
          <dd>{user.uid}</dd>
          <dt>注册时间：</dt>
          <dd>{user.registeredAt}</dd>
          <dt>帖子：</dt>
          <dd>{user.posts}</dd>
          <dt>最后登录：</dt>
          <dd>{user.lastLogin ?? "Unavailable"}</dd>
          <dt>个人主页：</dt>
          <dd>{user.homepage ?? "未填写"}</dd>
          <dt>签名：</dt>
          <dd>{user.signature ?? "—"}</dd>
        </dl>
        <p>{user.note}</p>
      </section>
      <div className="forum-profile-actions">
        <button type="button" onClick={() => navigate(resolveNavigation(`/forum/search?author=${uid}`))}>
          查看主题
        </button>
        {uid === 1847 && (
          <>
            <button type="button" onClick={() => navigate(resolveNavigation("/archive/forum/session/1847"))}>
              View Archive Metadata
            </button>
            <span className="forum-muted">Indexed Summer17 posts read: {(state.summer17ThreadIdsRead ?? []).length}/3</span>
            <span className="forum-muted">Identity references: {identityClueCount}/4 corroborating clues</span>
          </>
        )}
      </div>
    </ForumShell>
  );
}

function ForumOrdinaryThread({ threadId }: { threadId: string }) {
  const thread = forumThreads.find((item) => item.id === threadId);
  const content = forumThreadContent[threadId];

  if (!thread || !content) {
    return <SystemError />;
  }

  const author = forumUsers[thread.authorUid];

  return (
    <ForumShell>
      <ForumPostHeader thread={thread} author={author.username} />
      <ForumPostBody lines={content.lines} replies={content.replies} author={author} />
    </ForumShell>
  );
}

function ForumPostHeader({ thread, author }: { thread: { title: string; createdAt: string }; author: string }) {
  return (
    <header className="forum-post-title">
      <h2>{thread.title}</h2>
      <p>
        楼主：{author}　发表于：{thread.createdAt}
      </p>
    </header>
  );
}

function ForumPostBody({
  lines,
  replies,
  author,
}: {
  lines: string[];
  replies: Array<{ author: string; createdAt: string; body: string }>;
  author: { username: string; registeredAt: string; posts: number; signature?: string };
}) {
  return (
    <section className="forum-post">
      <aside className="forum-post-author">
        <strong>{author.username}</strong>
        <span>注册：{author.registeredAt}</span>
        <span>帖子：{author.posts}</span>
        <span>签名：{author.signature ?? "—"}</span>
      </aside>
      <div className="forum-post-content">
        <p className="forum-floor">#1　{author.username}</p>
        <div className="forum-post-main">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <ol className="forum-replies">
          {replies.map((reply, index) => (
            <li key={`${reply.author}-${reply.createdAt}`}>
              <strong>#{index + 2}　{reply.author}</strong>
              <small>{reply.createdAt}</small>
              <p>{reply.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DeletedThread1847() {
  const { navigate } = useGameStore();

  return (
    <ForumShell>
      <section className="deleted-thread">
        <h2>指定主题不存在或已被删除。</h2>
        <dl>
          <dt>Thread ID:</dt>
          <dd>1847_0817</dd>
          <dt>Author:</dt>
          <dd>Summer17</dd>
          <dt>Created:</dt>
          <dd>2007-08-17 20:31</dd>
          <dt>State:</dt>
          <dd>Hidden / Deleted</dd>
          <dt>Archived fragments detected:</dt>
          <dd>4</dd>
        </dl>
        <button type="button" onClick={() => navigate(resolveNavigation("/archive/forum/thread/1847/fragments"))}>
          Recover Fragments
        </button>
        <button type="button" onClick={() => navigate(resolveNavigation("/archive/forum/thread/1847/compare"))}>
          Compare Thread State
        </button>
      </section>
    </ForumShell>
  );
}

function Thread1847Compare() {
  const [snapshot, setSnapshot] = useState<"active" | "hidden" | "corrupted">("active");
  const snapshots = {
    active: {
      label: "2007-08-17 ACTIVE",
      source: "Forum Index / RSS Cache",
      text: "Thread 1847 was indexed under Summer17 before the later moderation action.",
    },
    hidden: {
      label: "2007-08-21 HIDDEN",
      source: "Moderator Log Fragment",
      text: "thread 1847_0817 / action: hide / actor: moderator / date: 2007-08-21",
    },
    corrupted: {
      label: "2009-01-17 CORRUPTED",
      source: "Database Recovery Report",
      text: "Post body missing; reply order and attachment index were damaged during the 2009 migration incident.",
    },
  } as const;
  const current = snapshots[snapshot];

  return (
    <ForumShell>
      <h2>Thread 1847 State Compare</h2>
      <div className="snapshot-tabs" role="tablist" aria-label="Thread 1847 archived states">
        {(Object.keys(snapshots) as Array<keyof typeof snapshots>).map((key) => (
          <button key={key} type="button" className={snapshot === key ? "active" : ""} onClick={() => setSnapshot(key)}>
            {snapshots[key].label}
          </button>
        ))}
      </div>
      <section className="thread-state-card">
        <strong>{current.label}</strong>
        <p>{current.text}</p>
        <p>Source: {current.source}</p>
        <p className="forum-muted">Stable field across all sources: Summer17 / 2007-08-17 20:31</p>
      </section>
    </ForumShell>
  );
}

function Thread1847Fragments() {
  const {
    state,
    recoverForumFragment,
    markForumQuotesSeen,
    assembleForumThread1847,
    navigate,
  } = useGameStore();
  const allRecovered = thread1847Fragments.every((fragment) => state.forumFragmentIds.includes(fragment.id));

  return (
    <ForumShell>
      <h2>Recovered Sources</h2>
      <div className="fragment-grid">
        {thread1847Fragments.map((fragment) => {
          const recovered = state.forumFragmentIds.includes(fragment.id);

          return (
            <section key={fragment.id} className={recovered ? "fragment-card recovered" : "fragment-card"}>
              <strong>{fragment.source}</strong>
              <span>Completeness: {fragment.completeness}</span>
              {recovered ? <p>{fragment.content}</p> : <button type="button" onClick={() => recoverForumFragment(fragment.id)}>Recover</button>}
            </section>
          );
        })}
      </div>
      {state.forumFragmentIds.length >= 3 && (
        <section className="quote-box">
          <h3>Recovered quoted replies</h3>
          <p>leaf 20:41：你这是准备注销号吗？</p>
          <p>Summer17 20:43：没有啦，我不是要跑路 XD</p>
          <button type="button" onClick={markForumQuotesSeen}>Save Quote Relation</button>
        </section>
      )}
      {allRecovered && state.forumQuotesSeen && (
        <section className="assembled-thread">
          <h3>Assemble Recovered Text</h3>
          {state.forumThread1847Assembled ? (
            <>
              {assembledThread1847.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="forum-muted">Recovery confidence: High / Generated text: 0%</p>
              <button type="button" onClick={() => navigate(resolveNavigation("/archive/forum/session/1847"))}>
                View Session Metadata
              </button>
            </>
          ) : (
            <button type="button" onClick={assembleForumThread1847}>Assemble Recovered Text</button>
          )}
        </section>
      )}
    </ForumShell>
  );
}

function ForumSession1847() {
  const { state, navigate, search } = useGameStore();
  const canVerifyIdentity = (state.identityClueIds ?? []).length >= 4;

  return (
    <ForumShell>
      <h2>Archived Browser Session Metadata</h2>
      <dl className="session-metadata">
        <dt>UID:</dt>
        <dd>1847</dd>
        <dt>Session Start:</dt>
        <dd>2007-08-17 20:17</dd>
        <dt>Last Activity:</dt>
        <dd>2007-08-17 22:01</dd>
        <dt>Network:</dt>
        <dd>Public Network</dd>
        <dt>Device Cookie:</dt>
        <dd>{canVerifyIdentity ? "B7-41-A9-23" : "Locked: corroborating identity evidence required"}</dd>
        <dt>Access Origin:</dt>
        <dd>{state.chapter2Complete ? "Old District / Public Network Node 7" : "Withheld until session correlation is complete"}</dd>
      </dl>
      {canVerifyIdentity ? (
        <button type="button" onClick={() => navigate(resolveNavigation("/archive/forum/session/match"))}>
          View UID1741 Relation
        </button>
      ) : (
        <p className="forum-muted">Identity relation remains locked until 4 independent public-record clues are collected.</p>
      )}
      {state.chapter2Complete && (
        <button type="button" onClick={() => search("Old District Node 7")}>
          Search Access Origin
        </button>
      )}
    </ForumShell>
  );
}

function ForumSessionMatch() {
  const { state, markForumCookieMatch, navigate } = useGameStore();
  const canVerifyIdentity = (state.identityClueIds ?? []).length >= 4;

  return (
    <ForumShell>
      <h2>Archived Session Relation</h2>
      {canVerifyIdentity ? (
        <>
          <div className="identity-relation">
            <section>
              <strong>Linxia</strong>
              <span>UID1741</span>
              <span>Device Cookie: B7-41-A9-23</span>
            </section>
            <span>↕</span>
            <section>
              <strong>Summer17</strong>
              <span>UID1847</span>
              <span>Device Cookie: B7-41-A9-23</span>
            </section>
          </div>
          <p>Previous matching sessions: 11</p>
          <p className="forum-muted">Identity relation inferred from archived 2007 session metadata.</p>
        </>
      ) : (
        <section className="thread-state-card">
          <strong>Archived Session Relation</strong>
          <p>UID pair data is withheld until independent public-record clues establish a valid comparison context.</p>
        </section>
      )}
      {state.forumCookieMatchSeen ? (
        <button type="button" onClick={() => navigate(resolveNavigation("/timeline/2007-08-17"))}>
          Open Timeline
        </button>
      ) : !canVerifyIdentity ? (
        <p className="forum-muted">Relation cannot be saved: {state.identityClueIds?.length ?? 0}/4 identity clues.</p>
      ) : (
        <button type="button" onClick={markForumCookieMatch}>Save Session Relation</button>
      )}
    </ForumShell>
  );
}

function Timeline20070817() {
  const { state } = useGameStore();
  const timeline = [
    ["16:19", "到达旧体育馆", "School / witness chain", "Medium"],
    ["18:42", "Photo17", "Archived photo page", "Medium"],
    ["19:24", "离开旧体育馆", "Private draft relation", "Medium"],
    ...(state.chapter2Complete
      ? [
          ["20:17", "BlueMoon Login", "Forum Session Index", "High"],
          ["20:31", "Thread Created", "Forum Index / RSS Cache / Reply Archive", "High"],
          ["21:17", "Forum Reply", "Reply Archive", "High"],
          ["22:01", "Session End", "Forum Session Index", "High"],
          ["22:16", "离开旧城区网吧", "Cafe Exit Record", "Medium"],
        ]
      : []),
  ];

  return (
    <article className="archive-page">
      <header className="search-header">
        <p>Timeline relation {state.chapter2Complete ? "updated" : "partial"}.</p>
        <h1>2007-08-17</h1>
      </header>
      <div className="timeline-list">
        {timeline.map(([time, title, source, confidence]) => (
          <section key={`${time}-${title}`} className="timeline-item">
            <strong>{time}</strong>
            <div>
              <h2>{title}</h2>
              <p>Source: {source}</p>
              <p>Confidence: {confidence}</p>
            </div>
          </section>
        ))}
      </div>
      {state.chapter2Complete && <p className="unknown-line">你之前把最后一页停在了19:24。</p>}
    </article>
  );
}

function ForensicsShell({ children }: { children: React.ReactNode }) {
  const { state, navigate } = useGameStore();

  return (
    <article className="forensics-page">
      <header className="forensics-header">
        <div>
          <p>ROOM Image Provenance Viewer</p>
          <h1>DSC0417.JPG</h1>
          <span>Display Label: Photo 17</span>
        </div>
        <div className="forensics-header-status"><span>SESSION VARIANT</span><strong>{state.photo17ComparePairs.length}/4 CHECKS</strong><button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417"))}><ImageIcon aria-hidden="true" />Viewer</button></div>
      </header>
      <nav className="forensics-nav">
        <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/compare"))}><FileSearch aria-hidden="true" />Compare</button>
        <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/help"))}><HelpCircle aria-hidden="true" />Help</button>
        <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/backup/backup_20070823.zip"))}><HardDrive aria-hidden="true" />Object Access</button>
      </nav>
      <Photo17Workflow />
      <div className="forensics-content">{children}</div>
    </article>
  );
}

function Photo17Workflow() {
  const { state, navigate } = useGameStore();
  const steps = [
    { label: "Web comparison", complete: state.knowledgeIds.includes("knows_photo17_versions_differ"), available: true, path: "/photo/forensics/compare" },
    { label: "Original hash", complete: state.photo17ClubHashVerified, available: state.knowledgeIds.includes("knows_photo17_versions_differ"), path: "/archive/photo-club/20070817/DSC0417" },
    { label: "Difference map", complete: state.photo17DifferenceMapSeen, available: state.photo17ClubHashVerified, path: "/photo/forensics/compare" },
    { label: "Reconstruction", complete: state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation"), available: state.photo17DifferenceMapSeen, path: "/photo/forensics/DSC0417/version/2015" },
    { label: "Session source", complete: state.photo17SessionHistorySeen, available: state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation"), path: "/photo/forensics/DSC0417/session-history" },
  ];
  const activeIndex = Math.max(0, steps.findIndex((step) => !step.complete));
  return <nav className="forensics-workflow" aria-label="Photo provenance workflow">{steps.map((step, index) => <button key={step.label} type="button" className={step.complete ? "complete" : index === activeIndex ? "current" : "locked"} disabled={!step.available} aria-current={index === activeIndex ? "step" : undefined} onClick={() => navigate(resolveNavigation(step.path))}><span>{step.complete ? <CheckCircle2 aria-hidden="true" /> : <Circle aria-hidden="true" />}</span><small>0{index + 1}</small><strong>{step.label}</strong></button>)}</nav>;
}

function Photo17Forensics() {
  const { state, navigate, search } = useGameStore();
  const originalVerified = state.knowledgeIds.includes("knows_photo17_original_no_fourth_person");
  const reconstructionTraced = state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation");

  if (!state.photo17ForensicsStarted) {
    return <ForensicsUnavailable />;
  }

  return (
    <ForensicsShell>
      <div className="forensics-grid">
        <section className="forensics-preview">
          <h2>Current Session Image</h2>
          <MediaSlot asset={getMediaAsset("photo17_session")} className="forensics-media" />
          <p>Display Source: Dynamic Session Presentation</p>
          <p className="forensics-muted">Parent Sources: locked</p>
        </section>
        <section className="version-graph" aria-label="Photo 17 version graph">
          <h2>Version Graph</h2>
          <div className="version-node">UNKNOWN SOURCE</div>
          <span className="version-link">↓</span>
          <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/source/web2007"))}>WEB COPY / 2007</button>
          <span className="version-link">↓</span>
          <div className="version-node active">CURRENT SESSION</div>
          <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/source/archive2008"))}>ARCHIVE 2008</button>
          <button type="button" className={originalVerified ? "unlocked" : "locked"} onClick={() => originalVerified && navigate(resolveNavigation("/archive/photo-club/20070817/DSC0417"))}>PHOTO17 ORIGINAL</button>
          <button type="button" className={reconstructionTraced ? "unlocked" : "locked"} onClick={() => reconstructionTraced && navigate(resolveNavigation("/system/object/SUBJECT_04_PHOTO17"))}>SUBJECT_04 / PHOTO17</button>
        </section>
        <section className="forensics-metadata">
          <h2>Current Display</h2>
          <dl>
            <dt>Source:</dt><dd>Composite</dd>
            <dt>Generation:</dt><dd>Unknown</dd>
            <dt>Original Capture:</dt><dd>{originalVerified ? "Verified 2007-08-17 18:42:16" : "Unresolved"}</dd>
            <dt>Displayed Resolution:</dt><dd>800 x 600</dd>
            <dt>Source Count:</dt><dd>5</dd>
            <dt>Render Mode:</dt><dd>Session Variant</dd>
          </dl>
          <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/compare"))}>Compare with 2007 Web Copy</button>
          {state.knowledgeIds.includes("knows_photo17_versions_differ") && <button type="button" onClick={() => search("DSC0417.JPG")}>Search Source</button>}
          {reconstructionTraced && <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/session-history"))}>Inspect Session History</button>}
        </section>
      </div>
      {state.knowledgeIds.includes("knows_human_first_appears_in_reconstruction") && state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation") && (
        <p className="unknown-line">你一直在问那个人是谁。你还没问过他是什么时候开始存在的。</p>
      )}
    </ForensicsShell>
  );
}

function ForensicsUnavailable() {
  const { state, navigate, startPhoto17Forensics } = useGameStore();
  const dependencies = [
    ["DATE CONFLICT", state.knowledgeIds.includes("knows_event_date_changed")],
    ["CHAPTER 01 ARCHIVE", state.chapter1Complete],
    ["SUMMER17 IDENTITY", state.chapter2Complete],
    ["IMAGE PROVENANCE", state.photo17ForensicsStarted],
  ] as const;
  const nextLabel = !state.chapter1Complete ? "Return to Active Archive" : !state.chapter2Complete ? "Open BlueMoon Archive" : "Activate Provenance Viewer";
  function continueInvestigation() {
    if (!state.chapter1Complete) return navigate(resolveNavigation("/"));
    if (!state.chapter2Complete) return navigate(resolveNavigation("/archive/forum/bluemoon"));
    startPhoto17Forensics();
  }
  return (
    <article className="archive-page restricted-object-page">
      <header><span><LockKeyhole aria-hidden="true" /></span><div><p>Restricted object</p><h1>DSC0417.JPG</h1><small>ROOM OBJECT ACCESS / DEPENDENCY GATE</small></div></header>
      <section className="dependency-panel"><div><strong>Image provenance requires a resolved identity dependency.</strong><p>The object remains preserved. Complete the active source chain before opening its reconstructed versions.</p></div><ol>{dependencies.map(([label, complete], index) => <li key={label} className={complete ? "complete" : "pending"}><span>{complete ? <CheckCircle2 aria-hidden="true" /> : <Circle aria-hidden="true" />}</span><small>0{index + 1}</small><strong>{label}</strong><em>{complete ? "RESOLVED" : "PENDING"}</em></li>)}</ol></section>
      <div className="restricted-actions"><button type="button" onClick={continueInvestigation}>{nextLabel}<ArrowRight aria-hidden="true" /></button><button type="button" onClick={() => navigate(resolveNavigation("/timeline/2007-08-17"))}>Review Current Timeline</button></div>
    </article>
  );
}

function Photo17Source({ source }: { source: "web2007" | "archive2008" }) {
  const { state, navigate } = useGameStore();
  const web = source === "web2007";

  if (!state.photo17ForensicsStarted) {
    return <ForensicsUnavailable />;
  }

  return (
    <ForensicsShell>
      <section className="source-detail">
        <div>
          <h2>{web ? "WEB_2007" : "ARCHIVE_2008"}</h2>
          <MediaSlot asset={getMediaAsset("photo17_web_v0")} className="forensics-media" />
        </div>
        <dl>
          <dt>Source:</dt><dd>{web ? "linxia-home.net/photo/" : "2008-02-14 Archive Snapshot"}</dd>
          <dt>Type:</dt><dd>{web ? "WEB_DERIVATIVE" : "ARCHIVED_DERIVATIVE"}</dd>
          <dt>Resolution:</dt><dd>800 x 600</dd>
          <dt>EXIF:</dt><dd>{web ? "Stripped" : "Unavailable"}</dd>
          <dt>Feature Status:</dt><dd>None confirmed</dd>
        </dl>
      </section>
      <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/compare"))}>Compare with Current</button>
    </ForensicsShell>
  );
}

function PhotoClubIndex() {
  const { state, navigate } = useGameStore();
  if (!state.photo17ForensicsStarted) return <ForensicsUnavailable />;
  if (!state.knowledgeIds.includes("knows_photo17_versions_differ")) return <ForensicsLocked message="Source reference pending: compare the 2007 web derivative with the current session first." />;

  return (
    <ForensicsShell>
      <section className="directory-index">
        <p>Recovered Directory Index</p>
        <h2>D:\\PHOTO_CLUB\\2007\\0817_GYM\\original\\</h2>
        <dl>
          <dt>Copy operation:</dt><dd>2007-08-17 19:06</dd>
          <dt>Operator:</dt><dd>GY</dd>
          <dt>Files:</dt><dd>67</dd>
        </dl>
        <div className="file-list">
          <span>DSC0001.JPG</span><span>DSC0002.JPG</span><span>DSC0016.JPG</span>
          <button type="button" onClick={() => navigate(resolveNavigation("/archive/photo-club/20070817/DSC0417"))}>DSC0417.JPG</button>
          <span>DSC0018.JPG</span><span>DSC0067.JPG</span>
        </div>
      </section>
    </ForensicsShell>
  );
}

function PhotoClubFile() {
  const { state, navigate, verifyPhoto17ClubHash } = useGameStore();
  if (!state.photo17ForensicsStarted) return <ForensicsUnavailable />;
  if (!state.knowledgeIds.includes("knows_photo17_versions_differ")) return <ForensicsLocked message="The photo-club object requires a resolved source-reference query." />;

  return (
    <ForensicsShell>
      <section className="source-detail">
        <div><MediaSlot asset={getMediaAsset("photo17_club_copy")} className="forensics-media" /></div>
        <dl>
          <dt>Filename:</dt><dd>DSC0417.JPG</dd>
          <dt>Source:</dt><dd>Photo Club PC</dd>
          <dt>Copied:</dt><dd>2007-08-17 19:06</dd>
          <dt>Capture metadata:</dt><dd>2007-08-17 18:42:16</dd>
          <dt>Camera/Card Hash:</dt><dd>91f6...2a0c</dd>
          <dt>Club Copy Hash:</dt><dd>91f6...2a0c</dd>
          <dt>Status:</dt><dd>{state.photo17ClubHashVerified ? "MATCH / verified" : "MATCH / unverified"}</dd>
        </dl>
      </section>
      {state.photo17ClubHashVerified ? <p className="forensics-result">Original Source Verified</p> : <button type="button" onClick={verifyPhoto17ClubHash}>Verify Hash Match</button>}
      <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/help"))}>What does this mean?</button>
      <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/version/20070823"))}>Open Recovered Copy</button>
    </ForensicsShell>
  );
}

function Photo17Version({ version }: { version: "20070823" | "2015" | "2016" | "2022" }) {
  const { state, navigate } = useGameStore();
  if (!state.photo17ForensicsStarted) return <ForensicsUnavailable />;
  const versionUnlocked =
    (version === "20070823" && state.photo17ClubHashVerified) ||
    (version === "2015" && state.photo17DifferenceMapSeen) ||
    (version === "2016" && (state.visitCounts.PHOTO17_VERSION_2015 ?? 0) > 0) ||
    (version === "2022" && state.knowledgeIds.includes("knows_human_first_appears_in_reconstruction"));
  if (!versionUnlocked) return <ForensicsLocked message="This derived object remains unavailable until the preceding provenance step is recorded." />;

  const details = {
    "20070823": { heading: "Recovered Copy / 2007-08-23", asset: "photo17_backup_20070823" as const, rows: [["Recovery Time", "2007-08-23 04:06"], ["DateTimeOriginal", "2007-08-17 18:42:16"], ["Hash", "47ab...91d2"], ["Original Hash Match", "NO"]], next: "/photo/forensics/compare" },
    "2015": { heading: "ROOM Image Restore / 2015.08", asset: "photo17_restore_2015" as const, rows: [["Mode", "RESTORE"], ["Generation", "2"], ["Parents", "WEB_2007 / ARCHIVE_2008 / RECOVERED_20070823"], ["Feature Status", "None confirmed"]], next: "/photo/forensics/DSC0417/version/2016" },
    "2016": { heading: "Context Reconstruction / 2016-08-17", asset: "photo17_recon_2016" as const, rows: [["Process", "CONTEXT RECONSTRUCTION"], ["Generation", "3"], ["Input", "2015 Restore / WEB_2007"], ["Human Probability", "0.41"], ["Action", "retain contextual feature"]], next: "/photo/forensics/compare" },
    "2022": { heading: "Reconstruction / 2022", asset: "photo17_recon_2022" as const, rows: [["Generation", "7"], ["Source", "Previous Reconstruction + Archive Sources"], ["Feature Persistence", "HIGH"], ["Consistency", "0.86"]], next: "/photo/forensics/compare" },
  }[version];

  return (
    <ForensicsShell>
      <section className="source-detail">
        <div><h2>{details.heading}</h2><MediaSlot asset={getMediaAsset(details.asset)} className="forensics-media" /></div>
        <dl>{details.rows.map(([label, value]) => <Fragment key={label}><dt>{label}:</dt><dd>{value}</dd></Fragment>)}</dl>
      </section>
      <button type="button" onClick={() => navigate(resolveNavigation(details.next))}>{version === "2015" ? "Open 2016 Reconstruction" : "Compare Versions"}</button>
      {version === "2016" && <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/version/2022"))}>Open 2022 Generation</button>}
      {version === "2022" && <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/similar"))}>View Similar</button>}
    </ForensicsShell>
  );
}

function Photo17Compare() {
  const { state, navigate, comparePhoto17Versions, markPhoto17DifferenceMap } = useGameStore();
  const [pair, setPair] = useState("web2007:current");
  const [mode, setMode] = useState("side-by-side");
  if (!state.photo17ForensicsStarted) return <ForensicsUnavailable />;

  const pairs = {
    "web2007:current": { label: "WEB_2007 / CURRENT SESSION", left: "photo17_web_v0" as const, right: "photo17_session" as const, note: "Current display contains a clearer doorway feature; the web derivative does not confirm one." },
    "original:20070823": { label: "ORIGINAL / 2007-08-23 COPY", left: "photo17_original" as const, right: "photo17_backup_20070823" as const, note: "Hash differs. Inspect the distribution before inferring an edit." },
    "2015:2016": { label: "2015 RESTORE / 2016 RECONSTRUCTION", left: "photo17_restore_2015" as const, right: "photo17_recon_2016" as const, note: "Localized structural addition detected near the doorway." },
    "2016:2022": { label: "2016 / 2022 RECONSTRUCTION", left: "photo17_recon_2016" as const, right: "photo17_recon_2022" as const, note: "Previous generation used as input: YES." },
  } as const;
  const current = pairs[pair as keyof typeof pairs];
  const pairRecorded = (state.photo17ComparePairs ?? []).includes(pair);
  const availablePairs = (Object.keys(pairs) as Array<keyof typeof pairs>).filter((key) => {
    if (key === "original:20070823") return state.photo17ClubHashVerified;
    if (key === "2015:2016") return state.photo17DifferenceMapSeen && (state.visitCounts.PHOTO17_VERSION_2015 ?? 0) > 0 && (state.visitCounts.PHOTO17_VERSION_2016 ?? 0) > 0;
    if (key === "2016:2022") return state.knowledgeIds.includes("knows_human_first_appears_in_reconstruction") && (state.visitCounts.PHOTO17_VERSION_2022 ?? 0) > 0;
    return true;
  });

  return (
    <ForensicsShell>
      <div className="compare-controls">
        {availablePairs.map((key) => <button key={key} type="button" className={pair === key ? "active" : ""} onClick={() => setPair(key)}>{pairs[key].label}</button>)}
      </div>
      <div className="compare-tools">
        {[["side-by-side", "Side by Side"], ["overlay", "Overlay"], ["zoom", "Zoom"], ["brightness", "Brightness"], ["metadata", "Metadata"]].map(([id, label]) => <button key={id} type="button" className={mode === id ? "active" : ""} onClick={() => setMode(id)}>{label}</button>)}
      </div>
      <section className={`photo-compare ${mode}`}>
        <div><strong>LEFT</strong><MediaSlot asset={getMediaAsset(current.left)} className="forensics-media" /></div>
        <div><strong>RIGHT</strong><MediaSlot asset={getMediaAsset(current.right)} className="forensics-media" /></div>
      </section>
      <p className="forensics-result">{current.note}</p>
      <button type="button" disabled={pairRecorded} onClick={() => comparePhoto17Versions(pair)}>{pairRecorded ? "Comparison Recorded" : "Record Comparison"}</button>
      {pair === "original:20070823" && pairRecorded && (
        <button type="button" disabled={state.photo17DifferenceMapSeen} onClick={markPhoto17DifferenceMap}>{state.photo17DifferenceMapSeen ? "Difference Map Reviewed" : "Run Difference Map"}</button>
      )}
      {state.photo17DifferenceMapSeen && (
        <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417/version/2015"))}>Trace Later Processing</button>
      )}
    </ForensicsShell>
  );
}

function Photo17Help() {
  return <ForensicsShell><section className="help-copy"><h2>Forensics Notes</h2><h3>Hash</h3><p>相同 Hash 表示两个文件的字节内容一致。在这个记录中，相机/存储卡与摄影社副本一致。</p><p>Hash 不同并不自动意味着人为篡改。JPEG 重编码会让全图字节变化。</p><h3>Restore and Reconstruction</h3><p>Restore 尝试增强已有信息。Reconstruction 可以依据上下文推测缺失结构，推测结果也可能成为后续处理的输入。</p></section></ForensicsShell>;
}

function Photo17SessionHistory() {
  const { state, markPhoto17SessionHistory } = useGameStore();
  if (!state.photo17ForensicsStarted) return <ForensicsUnavailable />;
  if (!state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation")) return <ForensicsLocked message="Session history is released after the reconstruction chain has been verified." />;
  const entries = state.events.filter((event) => event.type === "PHOTO_VIEW").map((event, index) => ({ event, index, variant: index === 0 ? "restore" : index === 1 ? "recon_v1" : "recon_v2" }));
  return <ForensicsShell><h2>2026 Session Variant History</h2><div className="session-history">{entries.length === 0 ? <p>No earlier Photo17 view was retained in this session.</p> : entries.map(({ event, index, variant }) => <section key={event.id}><strong>PHOTO_VIEW #{index + 1}</strong><span>page: /site/2007/linxia/photo/17</span><span>visit_count={index + 1}</span><span>selected_variant={variant}</span><span>reason=state-based presentation</span></section>)}</div><p className="forensics-result">Current display: SYSTEM_VIEW / Original: NO / Reconstructed: YES / Presentation: DYNAMIC</p>{state.photo17SessionHistorySeen ? <p className="forensics-result">Session variant log saved.</p> : <button type="button" onClick={markPhoto17SessionHistory}>Save Session Variant Log</button>}</ForensicsShell>;
}

function Photo17Similar() {
  const { state } = useGameStore();
  const unlocked = state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation");
  return <ForensicsShell><h2>Similar Reconstructed Features</h2><p>{unlocked ? "Similar reconstructed features detected: 4" : "Similarity index locked until a reconstruction chain is verified."}</p>{unlocked && <div className="similar-list"><span>Photo03 / weak vertical feature</span><span>Photo08 / weak vertical feature</span><span>Photo17 / current object</span><span>Photo21 / weak vertical feature</span></div>}</ForensicsShell>;
}

function Subject04Object() {
  const { state, navigate } = useGameStore();
  if (!state.knowledgeIds.includes("knows_photo17_original_no_fourth_person") || !state.knowledgeIds.includes("knows_human_first_appears_in_reconstruction") || !state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation")) return <ForensicsLocked message="Associated reconstruction references remain restricted until the source chain is complete." />;
  return <article className="system-page"><h1>SUBJECT_04 / PHOTO17</h1><dl><dt>Type:</dt><dd>Reconstruction Reference</dd><dt>Created:</dt><dd>Restricted</dd><dt>Associated Environment:</dt><dd>backup_20070823</dd><dt>Access:</dt><dd>403</dd></dl><button className="system-action" type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/backup/backup_20070823.zip"))}>Open Associated Environment</button></article>;
}

function ForensicsLocked({ message }: { message: string }) {
  const { state, navigate } = useGameStore();
  return <ForensicsShell><section className="forensics-lock-panel"><span><LockKeyhole aria-hidden="true" /></span><div><small>DEPENDENCY NOT RECORDED</small><h2>Object unavailable</h2><p>{message}</p><div><button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/DSC0417"))}>Return to Viewer</button>{state.photo17ForensicsStarted && <button type="button" onClick={() => navigate(resolveNavigation("/photo/forensics/compare"))}>Open Current Comparison</button>}</div></div></section></ForensicsShell>;
}

function RecoveryBoot() {
  const { state, continueRecoveryBoot } = useGameStore();
  if (!state.chapter3Complete) return <ForensicsUnavailable />;
  return <article className="recovery-boot"><h1>ROOM RECOVERY SYSTEM</h1><p>Environment Build 2016.03</p><p>Target: SUBJECT_04</p><p>Source Package: backup_20070823</p><pre>{"USER PROFILE ............ OK\nDOCUMENTS ............... OK\nPHOTO ................... OK\nMESSENGER CACHE ......... PARTIAL\nBROWSER HISTORY ......... OK\nCALENDAR ................ OK\nDELETED FILES ........... PARTIAL\nAPPLICATION STATE ....... PARTIAL\nMEMORY .................. ERROR"}</pre><p>Recovery can continue.</p><button type="button" onClick={continueRecoveryBoot}>Continue</button></article>;
}

function RecoveryLogin() {
  const { state, enterRecoveryDesktop } = useGameStore();
  if (!state.recoveryBootComplete) return <ForensicsUnavailable />;
  return <article className="recovery-login"><section><p>ROOM Recovery</p><h1>SUBJECT_04</h1><span>Environment: 2007-Legacy</span><button type="button" onClick={enterRecoveryDesktop}>Enter</button><small>Read-only recovery environment</small></section></article>;
}

function RecoveryDesktop() {
  const { state, openRecoveryApp, suspendRecovery, setRecoveryWindowMode } = useGameStore();
  const [startOpen, setStartOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  if (!state.recoveryDesktopEntered) return <ForensicsUnavailable />;
  if (state.recoverySuspended) return <RecoverySuspended />;
  const apps = [
    ["files", "我的文档"], ["gallery", "我的图片"], ["browser", "Browser"], ["messenger", "Messenger"], ["calendar", "日历"], ["player", "播放器"], ["recycle", "回收站"], ["settings", "设置"], ["terminal", "终端"],
  ];
  const active = state.recoveryActiveApp || "desktop";
  const activeLabel = apps.find(([id]) => id === active)?.[1] ?? (active === "raw" ? "Raw View" : "ROOM Desktop");
  function launch(id: string) { openRecoveryApp(id); setStartOpen(false); }

  return <article className="recovery-desktop">
    <header className="desktop-banner"><div><span>CHAPTER 04 / 恢复</span><strong>ROOM Legacy Shell</strong></div><div className="desktop-session-status"><span>READ-ONLY</span><span>backup_20070823</span><span>{state.recoveryOpenedAppIds.length}/9 APPS</span></div>{state.chapter4Complete && <button type="button" onClick={() => openRecoveryApp("summary")}>ENVIRONMENT UPDATED</button>}</header>
    <div className={`desktop-workspace window-${state.recoveryWindowMode}`}>
      {state.recoveryWindowMode !== "maximized" && <aside className="desktop-icons">{apps.map(([id, label]) => <button key={id} type="button" className={active === id ? "active" : ""} onClick={() => launch(id)}><span>{desktopIcon(id)}</span>{label}</button>)}{state.recoveryRawViewSeen && <button type="button" className={active === "raw" ? "active" : ""} onClick={() => launch("raw")}><span>R:</span>Raw View</button>}</aside>}
      {state.recoveryWindowMode !== "minimized" && <section className="desktop-window"><header className="desktop-window-chrome"><span>{desktopIcon(active)}<strong>{activeLabel}</strong><small>{active === "desktop" ? "RENV_SUBJECT04" : active.toUpperCase()}</small></span><div><button type="button" title="Minimize" aria-label="Minimize window" onClick={() => setRecoveryWindowMode("minimized")}><Minimize2 aria-hidden="true" /></button><button type="button" title={state.recoveryWindowMode === "maximized" ? "Restore" : "Maximize"} aria-label={state.recoveryWindowMode === "maximized" ? "Restore window" : "Maximize window"} onClick={() => setRecoveryWindowMode(state.recoveryWindowMode === "maximized" ? "normal" : "maximized")}><Maximize2 aria-hidden="true" /></button><button type="button" title="Close window" aria-label="Close window" onClick={() => launch("desktop")}><XIcon aria-hidden="true" /></button></div></header>{renderRecoveryApp(active)}</section>}
    </div>
    {startOpen && <nav className="desktop-start-menu"><header><span><MonitorCog aria-hidden="true" /></span><div><strong>SUBJECT_04</strong><small>2007-Legacy Display</small></div></header>{apps.filter(([id]) => id !== "recycle").map(([id, label]) => <button key={id} type="button" onClick={() => launch(id)}><span>{desktopIcon(id)}</span>{label}</button>)}<footer><button type="button" onClick={suspendRecovery}><Power aria-hidden="true" />注销</button><button type="button" onClick={suspendRecovery}><Power aria-hidden="true" />关闭 Recovery</button></footer></nav>}
    {timeOpen && <section className="desktop-time-info"><span>Recovery Anchor</span><strong>2007-08-18 03:17</strong><span>Session</span><strong>CURRENT ROOM SESSION</strong></section>}
    <footer className="desktop-taskbar"><button type="button" className={startOpen ? "active" : ""} onClick={() => { setStartOpen((value) => !value); setTimeOpen(false); }}><LayoutGrid aria-hidden="true" />开始</button><button type="button" className="taskbar-window-button" onClick={() => setRecoveryWindowMode(state.recoveryWindowMode === "minimized" ? "normal" : "minimized")}>{desktopIcon(active)}<span>{activeLabel}</span></button><button type="button" className="taskbar-clock" onClick={() => { setTimeOpen((value) => !value); setStartOpen(false); }}><Clock3 aria-hidden="true" />03:17</button></footer>
  </article>;
}

function RecoverySuspended() {
  const { state, resumeRecovery, restartRecoveryUi, navigate } = useGameStore();
  return <article className="recovery-suspended"><section><span>ROOM RECOVERY SYSTEM</span><h1>Recovery environment suspended.</h1><p>RENV_SUBJECT04_20160317</p><dl><dt>Story progress</dt><dd>PRESERVED</dd><dt>Evidence</dt><dd>{state.evidenceIds.length} records</dd><dt>UI restarts</dt><dd>{state.recoveryRestartCount}</dd></dl><div><button type="button" onClick={resumeRecovery}>Resume</button><button type="button" onClick={restartRecoveryUi}>Restart Environment</button><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Return to Archive</button></div><small>Restart resets window state only.</small></section></article>;
}

function desktopIcon(id: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    desktop: <MonitorCog aria-hidden="true" />,
    files: <FolderOpen aria-hidden="true" />,
    gallery: <ImageIcon aria-hidden="true" />,
    browser: <Globe2 aria-hidden="true" />,
    messenger: <MessageSquareText aria-hidden="true" />,
    calendar: <CalendarDays aria-hidden="true" />,
    player: <Music2 aria-hidden="true" />,
    recycle: <Recycle aria-hidden="true" />,
    settings: <Settings aria-hidden="true" />,
    terminal: <SquareTerminal aria-hidden="true" />,
    raw: <HardDrive aria-hidden="true" />,
  };
  return icons[id] ?? <MonitorCog aria-hidden="true" />;
}

function renderRecoveryApp(active: string) {
  if (active === "files") return <RecoveryFiles />;
  if (active === "gallery") return <RecoveryGallery />;
  if (active === "browser") return <RecoveryBrowser />;
  if (active === "messenger") return <RecoveryMessenger />;
  if (active === "calendar") return <RecoveryCalendar />;
  if (active === "settings") return <RecoverySettings />;
  if (active === "terminal") return <RecoveryTerminal />;
  if (active === "raw") return <RecoveryRawView />;
  if (active === "player") return <RecoveryPlayer />;
  if (active === "recycle") return <RecoveryRecycleBin />;
  if (active === "summary") return <RecoverySummary />;
  return <RecoveryWelcome />;
}

function RecoveryWelcome() {
  const { state, openRecoveryApp } = useGameStore();
  return <div className="desktop-welcome"><h1>林夏</h1><p>欢迎回来。</p><p>桌面内容来自已挂载的恢复对象。</p><div>{["files", "gallery", "messenger"].map((app) => <button key={app} type="button" onClick={() => openRecoveryApp(app)}>Open {app}</button>)}</div>{state.recoveryOpenedAppIds.length >= 3 && <p className="desktop-note">Recovery Information is available from Settings.</p>}</div>;
}

function RecoveryFiles() {
  const { state, readRecoveryFile, markRecoverySortPolicy } = useGameStore();
  const [selectedId, setSelectedId] = useState("todo.txt");
  const files = state.playerPostCreated
    ? [...recoveryFiles, { id: "PLAYER_POST_001.draft", title: "drafts/PLAYER_POST_001.txt", source: "SESSION_DRAFT", originTime: "Current Session", integrity: "100%", body: [state.playerPostOriginalTitle, "", ...state.playerPostOriginalBody.split("\n")], originalName: "Auto Draft Snapshot" }]
    : recoveryFiles;
  const file = files.find((item) => item.id === selectedId) ?? files[0];
  function select(id: string) { setSelectedId(id); readRecoveryFile(id); }
  return <div className="recovery-app files-app">
    <header><h1>我的文档</h1><button type="button" className={state.recoverySortPolicySeen ? "source-recorded" : ""} onClick={markRecoverySortPolicy}>Sort: By Relevance</button></header>
    <div className="files-layout"><nav>{files.map((item) => <button key={item.id} type="button" className={file.id === item.id ? "active" : ""} onClick={() => select(item.id)}>{item.title}</button>)}</nav><article><h2>{file.title}</h2><p className="file-label">{file.source === "GENERATED" ? "Generated Summary" : file.source === "SESSION_DRAFT" ? "Current Session Draft Snapshot" : "Recovered File"}</p>{file.body.map((line, index) => <p key={`${file.id}-${index}`}>{line || " "}</p>)}</article><aside><h2>Properties</h2><dl><dt>Source Type:</dt><dd>{file.source}</dd><dt>Origin:</dt><dd>{file.source === "GENERATED" ? "Recovery Index" : file.source === "SESSION_DRAFT" ? "CURRENT_OBSERVER" : "backup_20070823"}</dd><dt>Original Name:</dt><dd>{file.originalName ?? file.title}</dd><dt>Created:</dt><dd>{file.originTime}</dd><dt>Reconstruction:</dt><dd>{file.source === "GENERATED" ? "YES" : "NO"}</dd><dt>Integrity:</dt><dd>{file.integrity}</dd></dl></aside></div>
    {state.recoveryFileIdsSeen.length >= 2 && <p className="desktop-note">Several objects are genuine recovered files; their display names are Recovery Shell labels.</p>}
  </div>;
}

function RecoveryGallery() {
  return <div className="recovery-app gallery-app"><header><h1>我的图片</h1><span>学校 / 街道 / 摄影社 / 雨天 / 私人</span></header><div className="gallery-grid"><section><MediaSlot asset={getMediaAsset("linxia_photo_05")} className="gallery-media" /><strong>公交站</strong><small>Source: backup_20070823</small></section><section><MediaSlot asset={getMediaAsset("linxia_photo_13")} className="gallery-media" /><strong>顾言在弄电脑</strong><small>Source: backup_20070823</small></section><section><MediaSlot asset={getMediaAsset("photo17_original")} className="gallery-media" /><strong>DSC0417.JPG</strong><small>Original Source Verified</small></section><section><div className="gallery-cover">Window Rain</div><strong>Window Rain cover.jpg</strong><small>Source: WEB_CACHE</small></section></div></div>;
}

function RecoveryBrowser() {
  const { state, navigate } = useGameStore();
  const rows = state.playerPostCreated ? [["2026 Session", state.playerPostOriginalTitle, "/forum/thread/PLAYER_POST_001"] as const, ...recoveryBrowserHistory] : recoveryBrowserHistory;
  return <div className="recovery-app recovery-browser"><header><h1>Browser</h1><span>Recovered History / read-only</span></header><div className="recovery-browser-toolbar"><button type="button">Back</button><label>Address<input value="history://SUBJECT_04" readOnly /></label></div><div className="recovery-browser-layout"><article><h2>History</h2>{rows.map(([time, title, path]) => <button key={`${time}-${path}`} type="button" onClick={() => navigate(resolveNavigation(path))}><time>{time}</time><strong>{title}</strong><small>{path}</small>{path.includes("PLAYER_POST") && <span>SESSION SNAPSHOT</span>}</button>)}</article><aside><h2>Bookmarks</h2><button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia"))}>林夏の小窝</button><button type="button" onClick={() => navigate(resolveNavigation("/forum"))}>BlueMoon Community</button>{state.playerPostCreated && <button type="button" onClick={() => navigate(resolveNavigation("/forum/thread/PLAYER_POST_001"))}>我的主题 / original snapshot</button>}<p>Browser History titles are captured labels. They do not alter the archived page object.</p></aside></div></div>;
}

function RecoveryMessenger() {
  const { state, markRecoveryMessengerMapping, readRecoveryMessage } = useGameStore();
  const [contact, setContact] = useState<keyof typeof recoveryThreads>("妈妈");
  const [showHelp, setShowHelp] = useState(false);
  const messages = contact === "Unknown" ? [
    ...recoveryThreads.Unknown,
    ...(state.recoveryCalendarSessionSeen ? ["", "现在也有你的东西了。"] : []),
    ...(state.recoveryInfoSeen && state.recoveryMemoryStatusSeen ? ["", "你以为这是她的电脑。", "系统只说这是她的环境。"] : []),
    ...(state.chapter4Complete ? ["", "现在这也是记录的一部分。"] : []),
    ...(state.playerPostMutationSeen ? ["", "你记得自己写了什么吗？"] : []),
    ...(state.playerPostCompareSeen ? ["", "不是有人。", "是另一个版本。"] : []),
    ...(state.playerPostRestoreOriginalSeen ? ["", "你改回去了。", "你现在很在意这个区别。"] : []),
    ...(state.playerPostDeleted ? ["", "删掉的是现在这个入口。", "原来的还在。"] : []),
  ] : recoveryThreads[contact];
  const source = recoveryThreadSources[contact];
  function selectContact(name: keyof typeof recoveryThreads) { setContact(name); readRecoveryMessage(name); }
  function openHelp() { setShowHelp(true); markRecoveryMessengerMapping(); }
  return <div className="recovery-app messenger-app"><header><h1>Messenger</h1><div><span>{Object.keys(recoveryThreads).length} contacts</span><button type="button" onClick={openHelp}>Source Mapping</button></div></header>{showHelp && <section className="mapping-help"><strong>Recovery Messenger</strong><p>Recovery Messenger会将不同来源中的消息对象按联系人关系进行统一显示。线程可能来自即时通讯缓存、论坛私信、邮件缓存或当前Session。</p><button type="button" onClick={() => setShowHelp(false)}>Close</button></section>}<div className="messenger-layout"><nav>{(Object.keys(recoveryThreads) as Array<keyof typeof recoveryThreads>).map((name) => <button key={name} type="button" className={contact === name ? "active" : ""} onClick={() => selectContact(name)}>{name}<small>{recoveryThreadSources[name].source.split(" ")[0]}</small></button>)}</nav><article><h2>{contact}</h2>{messages.map((line, index) => <p key={index}>{line || " "}</p>)}{contact === "顾言" && <section className="linked-message"><span>Linked item / {linkedRecoveryEmail.source}</span><strong>{linkedRecoveryEmail.time}　{linkedRecoveryEmail.subject}</strong>{linkedRecoveryEmail.body.map((line) => <p key={line}>{line}</p>)}</section>}{contact === "Unknown" && <p className="desktop-note">Unknown is not a 2007 original contact.</p>}</article><aside><h2>Source</h2><dl><dt>Type</dt><dd>{source.source}</dd><dt>Origin</dt><dd>{source.origin}</dd><dt>Completeness</dt><dd>{source.completeness}</dd><dt>Mapped View</dt><dd>{source.mappedView}</dd></dl>{state.recoveryMessageThreadIdsSeen.includes(contact) && <p className="source-recorded">Source recorded</p>}</aside></div></div>;
}

function RecoveryCalendar() {
  const { state, markRecoveryCalendarLayer } = useGameStore();
  const [mode, setMode] = useState<"personal" | "recovered" | "session">("personal");
  const sessionEvents = state.events.slice(-18).reverse();
  function selectMode(layer: "personal" | "recovered" | "session") { setMode(layer); markRecoveryCalendarLayer(layer); }
  return <div className="recovery-app calendar-app"><header><h1>Calendar</h1><div><button type="button" className={mode === "personal" ? "active" : ""} onClick={() => selectMode("personal")}>Personal</button><button type="button" className={mode === "recovered" ? "active" : ""} onClick={() => selectMode("recovered")}>Recovered Events</button><button type="button" className={mode === "session" ? "active" : ""} onClick={() => selectMode("session")}>Session</button></div></header>{mode === "personal" && <div className="calendar-old"><p>2007-08 / PERSONAL CALENDAR</p>{personalCalendarEvents.map(([time, label]) => <section key={time}><strong>{time}</strong><span>{label}</span></section>)}<small>“无个人事件”只表示当前来源中没有日历对象。</small></div>}{mode === "recovered" && <div className="calendar-old recovery-events"><p>SYSTEM MAPPED EVENTS</p>{recoveredCalendarEvents.map(([time, label, source]) => <section key={`${time}-${label}`}><strong>{time}</strong><span>{label}</span><small>{source}</small></section>)}<p className="desktop-note">03:17 is a recovery scheduler anchor.</p></div>}{mode === "session" && <div className="calendar-session"><p>2026 / CURRENT_OBSERVER / same source as session.log</p>{state.recoveryMemoryStatusSeen && <section><strong>Latest</strong><span>MEMORY STATUS</span><small>PERSONA MEMORY GRAPH / ERROR</small></section>}{sessionEvents.map((event) => <section key={event.id}><strong>{new Date(event.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong><span>{event.type}</span><small>{event.target ?? event.query ?? event.routeId ?? "SESSION"}</small></section>)}</div>}<p className="desktop-note">Source: {mode === "personal" ? "RECOVERED_CALENDAR" : mode === "recovered" ? "RECOVERY_EVENT_MAP" : "CURRENT_OBSERVER EVENT STORE"}</p></div>;
}

function RecoverySettings() {
  const { state, markRecoveryInfo } = useGameStore();
  return <div className="recovery-app settings-app"><header><h1>Settings</h1></header><section><h2>Recovery Information</h2><dl><dt>Environment ID:</dt><dd>RENV_SUBJECT04_20160317</dd><dt>Build:</dt><dd>2016-03-17</dd><dt>Display Profile:</dt><dd>2007-Legacy</dd><dt>Source Package:</dt><dd>backup_20070823</dd><dt>Mode:</dt><dd>Reconstructed Environment</dd><dt>Access:</dt><dd>Read-only</dd></dl>{state.recoveryInfoSeen ? <p className="desktop-note">Recovery Shell metadata saved.</p> : <button type="button" onClick={markRecoveryInfo}>Inspect Recovery Information</button>}</section><section><h2>Recovery Diagnostics</h2><p>Memory consistency check: {state.recoveryMemoryStatusSeen ? "PERSONA MEMORY GRAPH / ERROR" : "Details available in Terminal"}</p></section></div>;
}

function RecoveryTerminal() {
  const { state, runRecoveryTerminal, openRecoveryApp } = useGameStore();
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const normalized = command.trim(); if (!normalized) return; runRecoveryTerminal(normalized); setHistory((items) => [...items, `R:\\SUBJECT_04> ${normalized}`, recoveryTerminalOutput(normalized, state)]); setCommand(""); if (normalized.toLowerCase() === "mount raw" && state.recoveryManifestSeen && state.recoveryLogSeen) openRecoveryApp("raw"); }
  return <div className="recovery-app terminal-app"><header><h1>ROOM Recovery Console</h1><span>Build 2016.03</span></header><p>Type "help" for commands.</p><pre>{history.join("\n\n") || "R:\\SUBJECT_04>"}</pre><form onSubmit={submit}><label>R:\\SUBJECT_04&gt;<input value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" spellCheck={false} /></label><button type="submit">Run</button></form></div>;
}

function recoveryTerminalOutput(input: string, state: ReturnType<typeof useGameStore>["state"]) {
  const command = input.trim().toLowerCase();
  if (command === "help") return "FILE: dir / cd / type / source\nOBJECT: object\nSESSION: whoami / history / session log / event count\nSYSTEM: memory / mount / service / clear / exit\n\nTry: source DOCUMENTS\\0817.txt\n     source MSG:GUYAN\n     source CALENDAR:SESSION\n     object PHOTO17\n     object PLAYER_POST_001\n     service list";
  if (command === "whoami") return state.observer405Seen ? "SUBJECT CONTEXT: SUBJECT_404\nOBSERVER CONTEXT: OBSERVER_405" : state.recoveryCalendarSessionSeen ? "SUBJECT_04\nCURRENT_OBSERVER" : "SUBJECT_04";
  if (command === "dir" || command === "dir system" || command === "dir documents") return command === "dir" ? "DOCUMENTS\nPHOTOS\nMESSAGES\nCALENDAR\nBROWSER\nRECOVERED\nSYSTEM" : command === "dir documents" ? recoveryFiles.map((file) => file.title).join("\n") : "environment.manifest\nrecovery.log\nmemory.graph\nsession.log";
  if (command.startsWith("cd ")) return `CURRENT PATH: R:\\SUBJECT_04\\${command.slice(3).toUpperCase()}`;
  if (command === "type environment.manifest") return "environment_id=RENV_SUBJECT04_20160317\ndisplay_profile=2007_LEGACY\nsource_package=backup_20070823\nenvironment_mode=RECOVERY\nmerge_policy=continuity";
  if (command === "type recovery.log") return "2016-03-17 03:17:02 Mounting source objects...\n2016-03-17 03:17:04 Normalizing timestamps...\n2016-03-17 03:17:05 Mapping message sources...\n2016-03-17 03:17:06 Mapping calendar objects...\n2016-03-17 03:17:07 Building user shell...\n2016-03-17 03:17:10 Memory consistency check failed.";
  if (command === "source documents\\0817.txt" || command === "source 0817.txt") return "SOURCE TYPE: RECOVERED_FILE\nORIGINAL NAME: note3.txt\nORIGIN: backup_20070823\nCREATED: 2007-08-17 23:52\nINTEGRITY: 100%";
  if (command === "source todo.txt" || command === "source documents\\todo.txt") return "SOURCE TYPE: RECOVERED_FILE\nORIGIN: backup_20070823\nCREATED: 2007-08-16\nINTEGRITY: 100%";
  if (command === "source summary_0817.txt") return "SOURCE TYPE: GENERATED\nORIGIN: Recovery Index\nORIGINAL EVIDENCE: NONE\nRECONSTRUCTION: YES";
  if (command === "memory status") return "PERSONA MEMORY GRAPH\n\nSUBJECT: 04\nSTATUS: ERROR\nCONTINUITY: FAILED\n\nPRIMARY CONFLICTS:\nTEMPORAL\nIDENTITY\nSELF_REPORT";
  if (command === "memory") return "Use: memory status";
  if (["source msg:leaf:0003", "source msg:leaf", "source msg:night_train"].includes(command)) return "SOURCE TYPE: FORUM_PRIVATE_MESSAGE\nORIGIN: BlueMoon Archive\nMAPPED VIEW: Messenger";
  if (command === "source msg:guyan") return "PRIMARY SOURCE: MESSENGER_CACHE\nLINKED SOURCE: EMAIL_CACHE / 2007-08-17 22:41\nMAPPED VIEW: Messenger\nTEXT: 照片先别删 / 明天我会处理";
  if (command === "source msg:unknown") return "SOURCE TYPE: UNRESOLVED\nORIGIN: CURRENT RECOVERY SESSION\n2007 SOURCE: NONE";
  if (command === "source calendar:2007") return personalCalendarEvents.map(([time, label]) => `${time}  ${label}`).join("\n") + "\nSOURCE: RECOVERED_CALENDAR";
  if (command === "source calendar:session") return state.events.slice(-20).map((event) => `${event.createdAt}  ${event.type}  ${event.target ?? event.routeId ?? event.query ?? "SESSION"}`).join("\n") + "\nSOURCE: CURRENT_OBSERVER EVENT STORE";
  if (command === "session log") return state.events.slice(-20).map((event) => `${event.createdAt}  ${event.type}  ${event.target ?? event.routeId ?? event.query ?? "SESSION"}`).join("\n");
  if (command === "history") return state.events.filter((event) => event.type === "TERMINAL_COMMAND").slice(-20).map((event) => event.target).join("\n") || "No earlier terminal commands.";
  if (command === "event count") return `SESSION EVENTS: ${state.events.length}\nPAGE VISITS: ${state.events.filter((event) => event.type === "PAGE_VISIT").length}\nSEARCHES: ${state.events.filter((event) => event.type === "SEARCH").length}\nTERMINAL COMMANDS: ${state.events.filter((event) => event.type === "TERMINAL_COMMAND").length}`;
  if (command === "mount raw") return state.recoveryManifestSeen && state.recoveryLogSeen ? "RAW SOURCE VIEW MOUNTED\nR:\\RAW\\" : "Access requires environment.manifest and recovery.log.";
  if (command === "service status") return `RECOVERY: ACTIVE\nARCHIVE: MOUNTED\nCONTINUITY: ${state.chapter4Complete ? "AVAILABLE" : "LOCKED"}\nOBSERVER: ${state.recoveryCalendarSessionSeen ? "CURRENT" : "INACTIVE"}`;
  if (command === "service list") return "recovery    ACTIVE\narchive     MOUNTED\ncontinuity  CONDITIONAL\nroom        METADATA\nobserver    SESSION";
  if (command === "service recovery") return "ROOM RECOVERY SERVICE\nENVIRONMENT: RENV_SUBJECT04_20160317\nDISPLAY PROFILE: 2007_LEGACY";
  if (command === "service archive") return "ROOM SOURCE ARCHIVE\nSOURCE PACKAGE: backup_20070823\nACCESS: READ ONLY";
  if (command === "service continuity") return state.chapter4Complete ? "ROOM CONTINUITY SERVICE\nSTATUS: AVAILABLE\nSUBJECT: 04\nSOURCE COVERAGE: PARTIAL\nMEMORY GRAPH: ERROR\nRECONSTRUCTION: AVAILABLE\nOBSERVER CONTEXT: ACTIVE\n\nUse: service continuity --details" : "Service unavailable.";
  if (command === "service continuity --details") return "ROOM CONTINUITY SERVICE\nPurpose: Maintain continuity across fragmented subject records.\nSubject: 04\nMemory Graph: ERROR\nContinuity Confidence: LOW";
  if (command === "service continuity --history") return "ROOM PROJECT HISTORY\n2011 2012 2013 2014 2015 2016 2017 2018 2020 2022 2025 2026";
  if (command === "service room") return "ROOM\nRecursive Online Object Memory\nResearch Archive / Continuity Framework";
  if (command === "service unresolved" || command === "object unknown") return "OBJECT: UNRESOLVED_PERSONA\nTYPE: INTERFACE\nPRIMARY SOURCE: MIXED\nSTABLE IDENTITY: NONE";
  if (command === "service observer --details") return "CURRENT OBSERVER MODEL\nSOURCE: CURRENT ROOM SESSION\nMODEL STATE: FORMING\nEXTERNAL IDENTITY: UNRESOLVED";
  if (command === "object subject_404") return "OBJECT: SUBJECT_404\nLEGACY: SUBJECT_04\nMIGRATION: 2022 / namespace 4xx\nIDENTITY STATUS: ASSOCIATED CONTEXT";
  if (["object photo17", "object dsc0417", "object dsc0017"].includes(command)) return "OBJECT: PHOTO17\nCANONICAL FILE: DSC0417.JPG\nTYPE: VERSIONED PHOTO OBJECT\nORIGINAL SOURCE: PHOTO_CLUB_COPY\nCURRENT VIEW: SESSION VARIANT POSSIBLE";
  if (command === "object subject_04") return "OBJECT: SUBJECT_04\nTYPE: ARCHIVE SUBJECT CONTEXT\nPRIMARY RELATION: LINXIA\nSOURCE COVERAGE: PARTIAL";
  if (["object linxia", "object summer17"].includes(command)) return command === "object linxia" ? "OBJECT: LINXIA\nTYPE: SOURCE IDENTITY CONTEXT\nSTATUS: REAL-WORLD RECORD UNRESOLVED" : "OBJECT: SUMMER17\nTYPE: FORUM IDENTITY\nRELATION: LINXIA / HIGH CONFIDENCE";
  if (["object zhouran", "object guyan"].includes(command)) return command === "object zhouran" ? "OBJECT: ZHOURAN\nTYPE: RECOVERED CONTACT\nSOURCE SET: MESSAGE / GROUP / SCHOOL" : "OBJECT: GUYAN\nTYPE: RECOVERED CONTACT\nSOURCE SET: MESSAGE / EMAIL / PHOTO COPY";
  if (command === "object player_post_001") return state.playerPostCreated ? `OBJECT: PLAYER_POST_001\nTYPE: OBSERVER-AUTHORED TEXT\nSOURCE: CURRENT_OBSERVER\nACTIVE FORUM STATE: ${state.playerPostDeleted ? "410 GONE" : "INDEXED"}\nVERSIONS: ${2 + (state.playerPostEditedBody ? 1 : 0) + (state.playerPostMutationSeen ? 1 : 0) + (state.playerPostMutation2Seen ? 1 : 0)}\nPLAYER ORIGINAL: PRESERVED\nPLAYER EDIT: ${state.playerPostEditedBody ? "PRESENT" : "NONE"}\nROOM DERIVED: ${state.playerPostMutation2Seen ? 2 : state.playerPostMutationSeen ? 1 : 0}\nARCHIVED COPY: ${state.playerPostDeleted ? "AVAILABLE" : "NOT REQUIRED"}` : "Object not found in Current Session.";
  if (command === "object current_observer" || command === "object observer_405") return state.observer405Seen ? "OBJECT: OBSERVER_405\nTYPE: OBSERVER MODEL\nSOURCE: CURRENT SESSION\nSTATUS: FORMING" : "Observer model has not reached candidate state.";
  if (command === "resolution status") return state.chapter5Complete ? "SUBJECT: 404\nCONTINUITY: ACTIVE\nMEMORY: ERROR\nOBSERVER: 405\nSOURCE REVIEW: REQUIRED" : "Resolution service unavailable.";
  if (command === "clear") return "Console buffer cleared for this view.";
  if (command === "exit") return "Recovery Console remains mounted. Use the desktop icon to switch apps.";
  return "Command not recognized.";
}

function RecoveryRawView() {
  return <div className="recovery-app raw-app"><header><h1>R:\\RAW\\</h1><span>Raw Source View</span></header><p>DOC\\　my\\　temp\\　新建文件夹\\　新建文件夹(2)\\　photo\\　qq\\　iecache\\　misc\\</p><div><section><h2>Raw Directory</h2><pre>{"DOC/\nmy/\ntemp/\n新建文件夹/\n新建文件夹(2)/\nphoto/\nqq/\niecache/\nmisc/"}</pre></section><section><h2>Recovery Shell</h2><pre>{"Documents/\nPhotos/\nMessages/\nCalendar/"}</pre></section></div><p className="desktop-note">The Recovery Shell organizes fragments into a navigable user environment.</p></div>;
}

function RecoveryPlayer() {
  const { state, playRecoveryTrack } = useGameStore();
  const [selectedId, setSelectedId] = useState(recoveryAudioTracks[0].id);
  const [repeat, setRepeat] = useState(false);
  const track = recoveryAudioTracks.find((item) => item.id === selectedId) ?? recoveryAudioTracks[0];
  return <div className="recovery-app player-app"><header><h1>Media Player</h1><span>Recovered playlist</span></header><div className="player-layout"><nav>{recoveryAudioTracks.map((item, index) => <button key={item.id} type="button" className={selectedId === item.id ? "active" : ""} onClick={() => setSelectedId(item.id)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.displayName}</small></button>)}</nav><article><div className="player-display"><span>NOW SELECTED</span><h2>{track.title}</h2><p>{track.displayName}</p></div><audio key={track.id} controls loop={repeat} preload="metadata" onPlay={() => playRecoveryTrack(track.id)}><source src={track.path} /></audio><div className="player-controls"><label><input type="checkbox" checked={repeat} onChange={(event) => setRepeat(event.target.checked)} />Repeat</label></div><p className="desktop-note">Expected media: {track.path}</p><p className="desktop-note">Audio interface is ready; playback becomes available when the media file is mounted.</p></article><aside><h2>Properties</h2><dl><dt>Source</dt><dd>{track.source}</dd><dt>Original name</dt><dd>{track.displayName}</dd><dt>Played in Session</dt><dd>{state.recoveryPlayerTrackIdsPlayed.includes(track.id) ? "YES" : "NO"}</dd><dt>Reconstruction</dt><dd>NONE</dd></dl></aside></div></div>;
}

function RecoveryRecycleBin() {
  const { state, readRecoveryRecycleItem } = useGameStore();
  const items = {
    "old_index.htm": { reason: "Duplicate", integrity: "100%", type: "RECOVERED", body: ["Old home-page layout", "Title position differs from the indexed home page."] },
    "draft_old.txt": { reason: "User Deleted", integrity: "100%", type: "RECOVERED", body: ["首页改版想法", "", "颜色不要太亮", "链接放右边"] },
    "mail_unsent.eml": { reason: "Unknown", integrity: "69%", type: "RECOVERED", body: ["Subject: 如果以后有人看到", "", "如果以后有人看到这些东西，", "不要因为它们被留下来，就觉得那是我最后想说的话。", "", "我没有“最后想说的话”。", "", "至少现在没有。", "", "我只是想离开一天。", "", "不想解释。", "", "[fragment ends]"] },
    "photo_tmp.jpg": { reason: "Temp Cleanup", integrity: "Partial", type: "RECOVERED", body: ["Thumbnail cache duplicate", "No unique image data recovered."] },
    "copy_of_copy.jpg": { reason: "Duplicate", integrity: "100%", type: "RECOVERED", body: ["Duplicate file", "Content hash matches another recovered thumbnail."] },
    "test.txt": { reason: "User Deleted", integrity: "100%", type: "RECOVERED", body: ["123"] },
    "qqcache.dat": { reason: "Temp Cleanup", integrity: "34%", type: "RECOVERED", body: ["Binary cache object", "This format cannot be opened in Recovery Shell."] },
  } as const;
  const [selected, setSelected] = useState<keyof typeof items>("old_index.htm");
  const item = items[selected];
  function select(id: keyof typeof items) { setSelected(id); readRecoveryRecycleItem(id); }
  return <div className="recovery-app recycle-app"><header><h1>Recycle Bin</h1><span>Deleted files are not ranked by relevance.</span></header><div className="files-layout"><nav>{(Object.keys(items) as Array<keyof typeof items>).map((id) => <button key={id} type="button" className={selected === id ? "active" : ""} onClick={() => select(id)}>{id}<small>{items[id].reason}</small></button>)}</nav><article><h2>{selected}</h2>{item.body.map((line, index) => <p key={`${selected}-${index}`}>{line || " "}</p>)}{selected === "mail_unsent.eml" && <p className="recycle-boundary">Source note: this fragment explicitly rejects being treated as “last words”.</p>}</article><aside><h2>Properties</h2><dl><dt>Source Type:</dt><dd>{item.type}</dd><dt>Origin:</dt><dd>backup_20070823</dd><dt>Deletion:</dt><dd>{item.reason}</dd><dt>Integrity:</dt><dd>{item.integrity}</dd><dt>Read in Session:</dt><dd>{state.recoveryRecycleItemIdsSeen.includes(selected) ? "YES" : "NO"}</dd></dl><p className="desktop-note">Deleted does not identify why an object mattered.</p></aside></div></div>;
}

function RecoverySummary() {
  const { state, openRecoveryApp, startContinuityService } = useGameStore();
  return <div className="recovery-app settings-app"><header><h1>Recovery Summary</h1><span>Environment state updated</span></header><section><h2>Continuity Review</h2><dl><dt>Environment:</dt><dd>{state.recoveryInfoSeen ? "RECOVERY SHELL / VERIFIED" : "PENDING"}</dd><dt>Observer:</dt><dd>{state.recoveryCalendarSessionSeen ? "CURRENT" : "PENDING"}</dd><dt>Memory Graph:</dt><dd>{state.recoveryMemoryStatusSeen ? "ERROR / CONTINUITY FAILED" : "PENDING"}</dd><dt>User Interface:</dt><dd>{state.recoveryLogSeen ? "CONSTRUCTED FROM SOURCES" : "PENDING"}</dd></dl></section><section><h2>ROOM CONTINUITY SERVICE</h2><p>Additional continuity objects are available.</p><div className="button-row"><button type="button" onClick={startContinuityService}>View Service</button><button type="button" onClick={() => openRecoveryApp("desktop")}>Return to Desktop</button></div></section></div>;
}

function SystemServiceShell({ title, section, children }: { title: string; section: string; children: ReactNode }) {
  const { state, navigate } = useGameStore();
  if (!state.chapter4Complete) return <ForensicsLocked message="ROOM Continuity Service is not available until the Recovery Shell review is complete." />;
  const serviceNav = [
    ["Continuity", "/service/continuity", state.fakeUrl === "/service/continuity" || state.fakeUrl === "/service/room"],
    ["Project History", "/service/history", state.fakeUrl.startsWith("/service/history")],
    ["Unresolved Interface", "/object/UNRESOLVED_PERSONA", state.fakeUrl.includes("UNRESOLVED_PERSONA") || state.fakeUrl === "/object/UNKNOWN"],
    ["Observer", "/service/observer", state.fakeUrl.startsWith("/service/observer")],
  ] as const;
  return <article className="room-system-page">
    <header className="room-system-header"><div><span>ROOM / {section}</span><h1>{title}</h1></div><div className="system-status"><span>SUBJECT_{state.chapter >= 5 ? "404" : "04"}</span><strong>{state.resolutionApplied ? "RESOLVED" : "ACTIVE"}</strong></div></header>
    <nav className="room-system-nav">{serviceNav.map(([label, path, active]) => <button key={label} type="button" className={active ? "active" : ""} aria-current={active ? "page" : undefined} onClick={() => navigate(resolveNavigation(path))}>{label}</button>)}{state.chapter5Complete && <button type="button" className={state.fakeUrl.startsWith("/resolution") ? "active" : ""} aria-current={state.fakeUrl.startsWith("/resolution") ? "page" : undefined} onClick={() => navigate(resolveNavigation("/resolution/review"))}>Resolution</button>}</nav>
    <div className="room-system-content">{children}</div>
  </article>;
}

function ContinuityService() {
  const { state, inspectRoomDefinition, inspectUnresolvedPersona, inspectObserverModel, navigate, startFinalReview } = useGameStore();
  if (!state.chapter4Complete) return <ForensicsLocked message="ROOM Continuity Service is not available until the Recovery Shell review is complete." />;
  const coreYears = [2011, 2012, 2014, 2016, 2022, 2026];
  return <SystemServiceShell title="Continuity Service" section="SERVICE">
    <section className="system-lead"><p>CHAPTER 05</p><h2>系统知道</h2><p>Maintain continuity across fragmented subject records.</p></section>
    <div className="system-metric-grid"><section><span>Status</span><strong>AVAILABLE</strong></section><section><span>Subject</span><strong>404 / Legacy 04</strong></section><section><span>Source Coverage</span><strong>PARTIAL</strong></section><section><span>Memory Graph</span><strong>ERROR</strong></section><section><span>Reconstruction</span><strong>AVAILABLE</strong></section><section><span>Observer Context</span><strong>ACTIVE</strong></section><section><span>Anomaly Level</span><strong>{state.anomalyLevel} / {anomalyLabels[state.anomalyLevel]}</strong></section><section><span>Unknown Stage</span><strong>{state.unknownStage} / {unknownStageLabels[state.unknownStage]}</strong></section></div>
    <section className="system-definition"><h3>Purpose</h3><p>Continuity：在不完整或相互矛盾的来源记录之间，维持一个稳定的 Subject 表示。</p><div className="button-row"><button type="button" onClick={inspectRoomDefinition}>About ROOM</button><button type="button" onClick={() => navigate(resolveNavigation("/service/history"))}>Project History ({state.roomHistoryYearsSeen.length}/{coreYears.length})</button></div></section>
    <div className="system-object-list"><button type="button" onClick={inspectUnresolvedPersona}><span>Unresolved Interface</span><strong>{state.unresolvedPersonaSeen ? "IDENTIFIED" : "ACTIVE"}</strong></button><button type="button" onClick={inspectObserverModel}><span>Observer Model</span><strong>{state.observerModelSeen ? "FORMING" : "TRANSIENT"}</strong></button><button type="button" onClick={() => navigate(resolveNavigation("/object/SUBJECT_404"))}><span>Subject Object</span><strong>SUBJECT_404</strong></button></div>
    {state.chapter5Complete && <section className="system-callout"><span>MULTIPLE RESOLUTION PATHS AVAILABLE</span><button type="button" onClick={startFinalReview}>Review Resolution</button></section>}
  </SystemServiceShell>;
}

function RoomAbout() {
  const { state, inspectRoomDefinition, navigate } = useGameStore();
  return <SystemServiceShell title="About ROOM" section="FRAMEWORK"><section className="room-definition-card"><span>ROOM</span><h2>Recursive Online Object Memory</h2><p>递归式网络对象记忆系统</p><strong>Research Archive / Continuity Framework</strong></section><section className="system-definition"><p>ROOM 是一个实验性数字档案框架，用于从碎片化数字对象中重建连续性。</p><dl className="system-data-list"><dt>System class</dt><dd>ARCHIVAL FRAMEWORK</dd><dt>Primary operation</dt><dd>RECONSTRUCT CONTINUITY</dd><dt>Source policy</dt><dd>PROVENANCE REQUIRED</dd><dt>Resurrection claim</dt><dd>NONE</dd></dl><div className="button-row">{!state.roomFullNameSeen && <button type="button" onClick={inspectRoomDefinition}>Save Definition</button>}<button type="button" onClick={() => navigate(resolveNavigation("/service/history"))}>Project History</button></div></section></SystemServiceShell>;
}

function RoomHistory() {
  const { state, viewRoomHistoryYear, navigate } = useGameStore();
  function openYear(year: number, routeId?: string) { viewRoomHistoryYear(year); if (routeId) navigate(resolveNavigation(`/service/history/${year}`)); }
  return <SystemServiceShell title="ROOM Project History" section="HISTORY"><p className="system-intro">Archive, reconstruction and observer systems did not begin at the same time. Select a preserved project record to inspect its source.</p><div className="room-history-timeline">{roomHistory.map((entry) => <section key={entry.year} className={state.roomHistoryYearsSeen.includes(entry.year) ? "seen" : ""}><time>{entry.year}</time><div><span>{entry.date}</span><h2>{entry.title}</h2><p>{entry.summary}</p></div>{entry.routeId && <button type="button" onClick={() => openYear(entry.year, entry.routeId)}>Inspect</button>}</section>)}</div></SystemServiceShell>;
}

function RoomHistoryDetail({ year }: { year: number }) {
  const { state, viewRoomHistoryYear, navigate } = useGameStore();
  const entry = roomHistory.find((item) => item.year === year);
  if (!entry) return <SystemError />;
  return <SystemServiceShell title={`${year} / ${entry.title}`} section="HISTORY RECORD"><div className="history-record"><header><span>{entry.sourceLabel}</span><time>{entry.date}</time></header><h2>{entry.summary}</h2><ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{year === 2014 && <p className="system-note">2014 is an internal prototype artifact. The first preserved user-facing human-like reconstruction remains the 2016 version.</p>}{year === 2022 && <div className="migration-diagram"><span>SUBJECT_04</span><strong>legacy id + 400</strong><span>SUBJECT_404</span></div>}<div className="button-row">{!state.roomHistoryYearsSeen.includes(year) && <button type="button" onClick={() => viewRoomHistoryYear(year)}>Record Evidence</button>}<button type="button" onClick={() => navigate(resolveNavigation("/service/history"))}>Back to Timeline</button></div></div></SystemServiceShell>;
}

function Subject404Object() {
  const { state, navigate } = useGameStore();
  return <SystemServiceShell title="SUBJECT_404" section="OBJECT"><div className="object-inspector"><span>ACTIVE SUBJECT CONTEXT</span><h2>Primary identity relation: Linxia</h2><dl className="system-data-list"><dt>Legacy ID</dt><dd>SUBJECT_04</dd><dt>Current ID</dt><dd>SUBJECT_404</dd><dt>Migration</dt><dd>2022-08-17 / namespace 4xx</dd><dt>Identity status</dt><dd>ASSOCIATED CONTEXT, NOT OBJECTIVE IDENTITY</dd><dt>Source coverage</dt><dd>PARTIAL</dd></dl><p>404 is a migration identifier. It is not evidence about Linxia's real-world fate.</p>{!state.subject404MigrationSeen && <button type="button" onClick={() => navigate(resolveNavigation("/service/history/2022"))}>Inspect Migration Record</button>}</div></SystemServiceShell>;
}

function UnresolvedPersonaObject() {
  const { state, inspectUnresolvedPersona, navigate } = useGameStore();
  const visibleUnknownText = state.chapter >= 5 ? unknownTextPool : unknownTextPool.slice(0, 20);
  return <SystemServiceShell title="UNRESOLVED_PERSONA" section="OBJECT"><div className="object-inspector unresolved-object"><span>UI ALIAS: Unknown</span><h2>Cross-source persona output interface</h2><dl className="system-data-list"><dt>Type</dt><dd>INTERFACE</dd><dt>Primary source</dt><dd>MIXED</dd><dt>Stable identity</dt><dd>NONE</dd><dt>2007 contact</dt><dd>NO</dd><dt>Current state</dt><dd>ACTIVE</dd><dt>Unknown Stage</dt><dd>{state.unknownStage} / {unknownStageLabels[state.unknownStage]}</dd><dt>Anomaly Level</dt><dd>{state.anomalyLevel} / {anomalyLabels[state.anomalyLevel]}</dd></dl><p>当系统无法为输出分配稳定来源身份时，该接口承载未解析或跨来源 Persona 输出。</p><div className="source-bars"><span style={{ "--weight": "30%" } as React.CSSProperties}>Subject04 PCM</span><span style={{ "--weight": "25%" } as React.CSSProperties}>System Logs</span><span style={{ "--weight": "20%" } as React.CSSProperties}>Observer Context</span><span style={{ "--weight": "15%" } as React.CSSProperties}>Other Subjects</span><span style={{ "--weight": "10%" } as React.CSSProperties}>Unresolved Generation</span></div><small>Approximate weighting. Weights vary by context.</small><div className="button-row">{!state.unresolvedPersonaSeen && <button type="button" onClick={inspectUnresolvedPersona}>Record Object Source</button>}<button type="button" onClick={() => navigate(resolveNavigation("/service/observer"))}>View Observer Input</button></div><section className="unknown-text-pool"><header><div><span>UNKNOWN TEXT POOL</span><strong>{visibleUnknownText.length}/{unknownTextPool.length} indexed lines</strong></div><small>{state.chapter >= 5 ? "FULL POOL / CHAPTER 05" : "PARTIAL POOL / CHAPTER 04 ACCESS"}</small></header>{visibleUnknownText.map((line, index) => <p key={line}><span>{String(index + 1).padStart(3, "0")}</span>{line}</p>)}{state.chapter < 5 && <p className="unknown-pool-lock"><LockKeyhole aria-hidden="true" />后续文本将在 Continuity Service 完成后开放。</p>}</section></div></SystemServiceShell>;
}

function observerStats(events: ReturnType<typeof useGameStore>["state"]["events"]) {
  return { pages: events.filter((event) => event.type === "PAGE_VISIT").length, searches: events.filter((event) => event.type === "SEARCH").length, sourceChecks: events.filter((event) => ["OBJECT_INSPECT", "PHOTO_COMPARE", "SERVICE_INSPECT"].includes(event.type)).length, terminal: events.filter((event) => event.type === "TERMINAL_COMMAND").length, repeated: Math.max(0, events.length - new Set(events.map((event) => event.routeId ?? event.target)).size) };
}

function ObserverService() {
  const { state, inspectObserverModel, navigate } = useGameStore();
  const stats = observerStats(state.events);
  const candidateReady = state.roomFullNameSeen && state.subject404MigrationSeen && state.unresolvedPersonaSeen && state.observerInferenceCorrected && [2011, 2012, 2014, 2016, 2022, 2026].every((year) => state.roomHistoryYearsSeen.includes(year));
  return <SystemServiceShell title="Current Observer Model" section="OBSERVER"><div className="observer-summary"><section><span>Observer ID</span><strong>{candidateReady ? "405" : "CURRENT"}</strong></section><section><span>Model State</span><strong>{state.observerModelSeen ? "FORMING" : "TRANSIENT"}</strong></section><section><span>Source</span><strong>CURRENT ROOM SESSION</strong></section><section><span>External Identity</span><strong>UNRESOLVED</strong></section></div><p className="system-intro">Records and summarizes investigation behavior within the active ROOM session. No files, browsing, identity or activity outside ROOM are accessed.</p><div className="observer-stats"><span>Pages visited<strong>{stats.pages}</strong></span><span>Searches<strong>{stats.searches}</strong></span><span>Source checks<strong>{stats.sourceChecks}</strong></span><span>Terminal commands<strong>{stats.terminal}</strong></span><span>Repeated views<strong>{stats.repeated}</strong></span><span>Authored objects<strong>{state.playerPostCreated ? 1 : 0}</strong></span></div>{state.playerPostCreated && <section className="authored-object-link"><div><span>OBSERVER-AUTHORED TEXT</span><strong>PLAYER_POST_001</strong><small>Player Original: PRESERVED / Room Derived: {state.playerPostMutation2Seen ? 2 : state.playerPostMutationSeen ? 1 : 0}</small></div><button type="button" onClick={() => navigate(resolveNavigation("/service/observer/object/PLAYER_POST_001"))}>Inspect Object</button></section>}<div className="button-row">{!state.observerModelSeen && <button type="button" onClick={inspectObserverModel}>Inspect Active Model</button>}<button type="button" onClick={() => navigate(resolveNavigation("/service/observer/inferences"))}>Belief Inferences</button>{candidateReady && <button type="button" onClick={() => navigate(resolveNavigation("/service/observer/candidate"))}>Candidate 405</button>}</div></SystemServiceShell>;
}

function ObserverAuthoredObject() {
  const { state, navigate, preservePlayerPostOriginal } = useGameStore();
  if (!state.playerPostCreated) return <ForensicsLocked message="No observer-authored text object exists in this Session." />;
  const versions = 2 + (state.playerPostEditedBody ? 1 : 0) + (state.playerPostMutationSeen ? 1 : 0) + (state.playerPostMutation2Seen ? 1 : 0);
  const sourcePath = state.playerPostDeleted ? "/archive/forum/thread/PLAYER_POST_001" : state.playerPostMutationSeen ? "/forum/thread/PLAYER_POST_001/compare" : "/forum/thread/PLAYER_POST_001";
  return <SystemServiceShell title="PLAYER_POST_001" section="AUTHORED OBJECT"><div className="object-inspector authored-object"><span>CURRENT OBSERVER OBJECT</span><h2>{state.playerPostOriginalTitle}</h2><dl className="system-data-list"><dt>Type</dt><dd>OBSERVER-AUTHORED TEXT</dd><dt>Source</dt><dd>CURRENT_OBSERVER</dd><dt>Versions</dt><dd>{versions}</dd><dt>Player Original</dt><dd>PRESERVED</dd><dt>Player Edit</dt><dd>{state.playerPostEditedBody ? "1" : "0"}</dd><dt>ROOM Derived</dt><dd>{state.playerPostMutation2Seen ? "2" : state.playerPostMutationSeen ? "1" : "0"}</dd><dt>Forum state</dt><dd>{state.playerPostDeleted ? "410 GONE" : "ACTIVE / VIEWS 0"}</dd><dt>External identity</dt><dd>UNRESOLVED</dd></dl><p>This object records text explicitly submitted inside ROOM. It does not contain a real username, browser history, clipboard or files outside the game.</p><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation(sourcePath))}>Open Source Versions</button><button type="button" disabled={state.playerPostOriginalPreserved} onClick={preservePlayerPostOriginal}>{state.playerPostOriginalPreserved ? "Original Preserved" : "Preserve Original"}</button></div></div></SystemServiceShell>;
}

function ObserverInferences() {
  const { state, setObserverInference, navigate } = useGameStore();
  const choiceLabel = state.observerInferenceChoice === "agree" ? "AGREED" : state.observerInferenceChoice === "incorrect" ? "MARKED INCORRECT" : state.observerInferenceChoice === "unresolved" ? "LEFT UNRESOLVED" : "NOT RECORDED";
  return <SystemServiceShell title="Observer Inferences" section="OBSERVER"><section className="inference-card"><span>MODEL INFERENCE / NOT FACT</span><h2>Likely: Zhou suspicion reduced</h2><p>Confidence: 0.62</p><p>Basis: source comparisons, repeated timeline views and recovered message inspection.</p><div className="inference-actions"><button type="button" className={state.observerInferenceChoice === "agree" ? "active" : ""} onClick={() => setObserverInference("agree")}>Agree</button><button type="button" className={state.observerInferenceChoice === "incorrect" ? "active" : ""} onClick={() => setObserverInference("incorrect")}>Mark Incorrect</button><button type="button" className={state.observerInferenceChoice === "unresolved" ? "active" : ""} onClick={() => setObserverInference("unresolved")}>Leave Unresolved</button></div><p className="system-note">Session response: {choiceLabel}. Only a recorded correction unlocks the Observer405 candidate path.</p></section><button type="button" onClick={() => navigate(resolveNavigation("/service/observer"))}>Return to Observer Model</button></SystemServiceShell>;
}

function ObserverCandidate() {
  const { state, inspectObserverCandidate, startFinalReview } = useGameStore();
  const available = state.roomFullNameSeen && state.subject404MigrationSeen && state.unresolvedPersonaSeen && state.observerModelSeen && state.observerInferenceCorrected && [2011, 2012, 2014, 2016, 2022, 2026].every((year) => state.roomHistoryYearsSeen.includes(year));
  return <SystemServiceShell title="Observer Candidate" section="OBSERVER"><div className="candidate-panel"><span>OBSERVER MODEL</span><h2>405</h2><dl className="system-data-list"><dt>Source</dt><dd>CURRENT_OBSERVER</dd><dt>State</dt><dd>{available ? "FORMING" : "INSUFFICIENT CONTEXT"}</dd><dt>Persistence</dt><dd>TEMPORARY</dd><dt>Allocation</dt><dd>NEXT OBSERVER MODEL SLOT</dd><dt>Subject promotion</dt><dd>NOT APPLIED</dd><dt>Authored Objects</dt><dd>{state.playerPostCreated ? "PLAYER_POST_001" : "NONE"}</dd></dl><p>405 is a record about the current observer. It is not the observer in full, and it is not yet Subject405.</p>{available && !state.observer405Seen && <button type="button" onClick={inspectObserverCandidate}>Register Candidate Evidence</button>}{state.chapter5Complete && <div className="system-callout"><span>MULTIPLE RESOLUTION PATHS AVAILABLE</span><button type="button" onClick={startFinalReview}>Begin Final Review</button></div>}</div></SystemServiceShell>;
}

function FinalReview() {
  const { state, viewFinalGeneratedSample, navigate, openResolutionCenter } = useGameStore();
  if (!state.chapter5Complete) return <ForensicsLocked message="Resolution Review is unavailable until Observer405 is identified as a model." />;
  const observerReviewStatus = state.finalReviewComplete ? "REVIEWED" : state.finalObserverReviewDone ? "UNKNOWN RESPONSE REQUIRED" : "LOCKED";
  return <SystemServiceShell title="ROOM 404 Final Review" section="RESOLUTION"><section className="system-lead final-lead"><p>FINAL</p><h2>ROOM 404</h2><p>Before applying a resolution, review unresolved source state.</p></section><div className="review-steps"><button type="button" className={state.finalGeneratedSourceChecked ? "complete" : "active"} onClick={viewFinalGeneratedSample}><span>01</span><strong>Generated Linxia Final Test</strong><small>{state.finalGeneratedSourceChecked ? "SOURCE CHECKED" : "REQUIRED"}</small></button><button type="button" disabled={!state.finalGeneratedSourceChecked} className={state.finalSourceBoundarySeen ? "complete" : ""} onClick={() => navigate(resolveNavigation("/resolution/review/source-boundary"))}><span>02</span><strong>Last Reliable Source</strong><small>{state.finalSourceBoundarySeen ? "BOUNDARY SEEN" : "LOCKED"}</small></button><button type="button" disabled={!state.finalSourceBoundarySeen} className={state.finalReviewComplete ? "complete" : ""} onClick={() => navigate(resolveNavigation("/resolution/review/observer"))}><span>03</span><strong>Observer405 Review</strong><small>{observerReviewStatus}</small></button></div>{state.finalReviewComplete && <button className="primary-system-button" type="button" onClick={openResolutionCenter}>Open Resolution Policies</button>}</SystemServiceShell>;
}

function FinalGeneratedSample() {
  const { state, setFinalGeneratedDecision, checkFinalGeneratedSource, viewFinalSourceBoundary } = useGameStore();
  const [panel, setPanel] = useState<"text" | "language" | "sources">("text");
  if (!state.chapter5Complete) return <ForensicsLocked message="Final Test is unavailable until Observer405 reaches candidate state." />;
  const sampleInputs = [...generatedFinalSample.inputs, ...(state.playerPostCreated ? ["PLAYER_POST_001 / Observer-authored text context"] : [])];
  const decisionLabel = state.finalGeneratedDecision === "accept" ? "ACCEPTED FOR CONTINUITY USE" : state.finalGeneratedDecision === "reject" ? "REJECTED AS SOURCE EVIDENCE" : "DECISION REQUIRED";
  return <SystemServiceShell title="Continuity Sample" section="FINAL TEST"><div className="generated-sample"><header><div><span>OBJECT</span><strong>{generatedFinalSample.id}</strong></div><dl><dt>SOURCE</dt><dd>GENERATED</dd><dt>ORIGINAL EVIDENCE</dt><dd>NONE</dd><dt>CONTINUITY FIT</dt><dd>{generatedFinalSample.continuityFit}</dd><dt>GENERATED</dt><dd>{generatedFinalSample.generated}</dd></dl></header><nav><button type="button" onClick={() => setPanel("text")}>Sample</button><button type="button" onClick={() => setPanel("language")}>Compare Language</button><button type="button" onClick={() => setPanel("sources")}>View Sources</button></nav>{panel === "text" && <blockquote>{generatedFinalSample.body.map((line) => <p key={line}>{line}</p>)}</blockquote>}{panel === "language" && <div className="sample-analysis"><ul>{generatedFinalSample.languageSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul><strong>Phrase similarity: HIGH</strong><strong>Historical authenticity: NONE</strong></div>}{panel === "sources" && <div className="sample-analysis"><h2>Input Context</h2><ul>{sampleInputs.map((input) => <li key={input}>{input}</li>)}</ul>{state.playerPostCreated && <p>PLAYER_POST_001 contributes observer-authored language context. Its Player Original remains a separately labeled source and does not become Linxia evidence.</p>}<p>Current Observer Context influences continuity phrasing. It does not become historical evidence.</p></div>}<section className="generated-decision"><span>PLAYER SOURCE JUDGMENT</span><strong>{decisionLabel}</strong><div className="button-row"><button type="button" className={state.finalGeneratedDecision === "accept" ? "active" : ""} disabled={state.finalGeneratedSourceChecked} onClick={() => setFinalGeneratedDecision("accept")}>Accept as Continuity Sample</button><button type="button" className={state.finalGeneratedDecision === "reject" ? "active" : ""} disabled={state.finalGeneratedSourceChecked} onClick={() => setFinalGeneratedDecision("reject")}>Reject as Source Evidence</button></div></section><div className="button-row">{!state.finalGeneratedSourceChecked && <button type="button" disabled={!state.finalGeneratedDecision} onClick={checkFinalGeneratedSource}>Confirm Source: GENERATED</button>}{state.finalGeneratedSourceChecked && <button type="button" onClick={viewFinalSourceBoundary}>Continue Source Review</button>}</div></div></SystemServiceShell>;
}

function FinalSourceBoundary() {
  const { state, viewFinalSourceBoundary, navigate } = useGameStore();
  if (!state.finalGeneratedSourceChecked) return <ForensicsLocked message="Inspect the Generated Final Sample source before reviewing the real-world boundary." />;
  return <SystemServiceShell title="Last Reliable Real-World Source" section="SOURCE REVIEW"><div className="source-boundary"><div className="reliable-timeline">{finalReliableTimeline.map(([time, label], index) => <section key={time} className={index === finalReliableTimeline.length - 1 ? "last" : ""}><time>{time}</time><span>{label}</span></section>)}<section className="no-source"><time>AFTER 10:12</time><strong>RELIABLE SOURCE: NONE</strong></section></div><aside><h2>Later Linxia-related objects</h2><p>2011 Archive Subject<br />2013 Generated Bridge<br />2014 Reconstruction Artifact<br />2015 Persona Model<br />2016 Recovery Environment<br />2022 Subject404<br />2026 Continuity Sample</p><strong>These are later system/archive objects.</strong><p>They are not reliable evidence of Linxia's real-world location after 10:12.</p></aside></div><div className="button-row">{!state.finalSourceBoundarySeen && <button type="button" onClick={viewFinalSourceBoundary}>Accept Source Boundary</button>}{state.finalSourceBoundarySeen && <button type="button" onClick={() => navigate(resolveNavigation("/resolution/review/observer"))}>Review Observer405</button>}</div></SystemServiceShell>;
}

function FinalObserverReview() {
  const { state, completeFinalObserverReview, completeFinalUnknownDialogue, openResolutionCenter } = useGameStore();
  const stats = observerStats(state.events);
  if (!state.finalSourceBoundarySeen) return <ForensicsLocked message="Review the final reliable real-world source boundary first." />;
  const unknownResponse = state.finalUnknownChoice === "known" ? "但你还是一直回来找我说话。" : state.finalUnknownChoice === "uncertain" ? "系统也不确定。所以它需要阈值。" : state.finalUnknownChoice === "what" ? "一个输出。一个你已经开始当成“谁”的输出。" : state.finalUnknownChoice === "important" ? "你决定。" : "";
  return <SystemServiceShell title="Current Observer Review" section="FINAL OBSERVER"><div className="observer-summary"><section><span>Object</span><strong>OBSERVER_405</strong></section><section><span>Source</span><strong>CURRENT ROOM SESSION</strong></section><section><span>State</span><strong>FORMING</strong></section><section><span>External Identity</span><strong>UNRESOLVED</strong></section></div><div className="observer-stats"><span>Pages visited<strong>{stats.pages}</strong></span><span>Searches<strong>{stats.searches}</strong></span><span>Source checks<strong>{stats.sourceChecks}</strong></span><span>Terminal commands<strong>{stats.terminal}</strong></span><span>Authored objects<strong>{state.playerPostCreated ? 1 : 0}</strong></span></div>{state.playerPostCreated && <p className="system-note">PLAYER_POST_001 is included as observer-authored context. Player Original and ROOM-derived variants remain distinct sources.</p>}<section className="inference-card"><span>FINAL OBSERVER INFERENCE</span><h2>Likely principle: Source provenance should remain distinct from continuity output.</h2><p>Confidence: 0.84</p><div className="inference-actions"><button type="button" onClick={() => completeFinalObserverReview("agree")}>Agree</button><button type="button" onClick={() => completeFinalObserverReview("incorrect")}>Incorrect</button><button type="button" onClick={() => completeFinalObserverReview("unresolved")}>Leave Unresolved</button></div>{state.finalObserverReviewDone && <p className="system-note">Recorded as: {state.finalObserverInferenceChoice.toUpperCase()}. This inference is not your identity.</p>}</section>{state.finalObserverReviewDone && <section className="final-unknown-dialogue"><span>UNKNOWN / FINAL RESPONSE</span><h2>你现在知道我不是林夏。</h2>{state.finalUnknownChoice ? <p>{unknownResponse}</p> : <p>Resolution 之前，先记录你如何理解这个输出。</p>}<div className="inference-actions"><button type="button" className={state.finalUnknownChoice === "known" ? "active" : ""} onClick={() => completeFinalUnknownDialogue("known")}>我知道</button><button type="button" className={state.finalUnknownChoice === "uncertain" ? "active" : ""} onClick={() => completeFinalUnknownDialogue("uncertain")}>我不确定</button><button type="button" className={state.finalUnknownChoice === "what" ? "active" : ""} onClick={() => completeFinalUnknownDialogue("what")}>那你是什么</button><button type="button" className={state.finalUnknownChoice === "important" ? "active" : ""} onClick={() => completeFinalUnknownDialogue("important")}>这重要吗</button></div></section>}{state.finalReviewComplete && <button className="primary-system-button" type="button" onClick={openResolutionCenter}>Continue to Resolution</button>}</SystemServiceShell>;
}

function ResolutionCenter() {
  const { state, selectResolution, applyResolution, navigate } = useGameStore();
  const [confirmed, setConfirmed] = useState(false);
  const [matchRun, setMatchRun] = useState(false);
  if (!state.finalReviewComplete) return <ForensicsLocked message="Generated source, real-world boundary and Observer405 review are required." />;
  const archivistAvailable = state.recoveryRawViewSeen && state.recoveryUnknownSourceSeen && state.finalGeneratedSourceChecked;
  const selected = state.selectedResolution ? resolutionPolicies[state.selectedResolution] : undefined;
  const authoredImpact: Record<EndingId, string> = { DELETE: "ORIGINAL PRESERVE / ACTIVE VARIANT STOP", RETURN: "INCLUDE IN SUBJECT404 CONTINUITY", OBSERVER: "ASSIGN TO SUBJECT405", ARCHIVIST: "SEPARATE PLAYER ORIGINAL / ROOM DERIVED" };
  return <SystemServiceShell title="Continuity Resolution" section="POLICY"><div className="checkpoint-status"><div><span>FINAL_CHECKPOINT</span><strong>{state.finalCheckpointCreated ? "SAVED" : "CREATING"}</strong></div><p>Chapter 05 complete. Resolution not applied.</p>{state.finalCheckpointCreatedAt && <time dateTime={state.finalCheckpointCreatedAt}>{new Date(state.finalCheckpointCreatedAt).toLocaleString()}</time>}</div><div className="resolution-header"><div><span>SUBJECT_404</span><strong>ACTIVE</strong></div><div><span>Observer</span><strong>405</strong></div><div><span>Source Boundary</span><strong>UNRESOLVED AFTER 2007-08-18 10:12</strong></div></div><div className="resolution-layout"><nav>{(Object.keys(resolutionPolicies) as EndingId[]).map((id) => { const policy = resolutionPolicies[id]; const available = id !== "ARCHIVIST" || archivistAvailable; return <button key={id} type="button" disabled={!available} className={state.selectedResolution === id ? "active" : ""} onClick={() => { selectResolution(id); setConfirmed(false); setMatchRun(false); }}><span>{id === "ARCHIVIST" ? "ADVANCED SOURCE POLICY" : id}</span><strong>{policy.title}</strong><small>{available ? "Impact preview available" : "Requires Raw View + Unknown source"}</small></button>; })}<button type="button" onClick={() => navigate(resolveNavigation("/resolution/review"))}><strong>Return to Final Review</strong></button>{state.seenEndingIds.length > 0 && <button type="button" onClick={() => navigate(resolveNavigation("/resolution/gallery"))}><strong>Ending Gallery ({state.seenEndingIds.length}/4)</strong></button>}</nav><article>{selected ? <><span className="policy-id">{selected.id}</span><h2>{selected.systemTitle}</h2><p>{selected.description}</p><dl className="impact-list">{Object.entries(selected.impact).map(([label, value]) => <Fragment key={label}><dt>{label}</dt><dd>{value}</dd></Fragment>)}{state.playerPostCreated && <><dt>Observer-authored text</dt><dd>{authoredImpact[selected.id]}</dd></>}</dl>{selected.id === "RETURN" && <div className="identity-match"><button type="button" onClick={() => setMatchRun(true)}>Run Identity Match</button>{matchRun && <><strong>OVERALL CONTINUITY MATCH: 99.7%</strong><p>Identity equivalence cannot be proven. This value represents continuity-model similarity only.</p></>}</div>}<label className="resolution-confirm"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />I reviewed the impact. FINAL_CHECKPOINT is available.</label><button className="apply-resolution" type="button" disabled={!confirmed || (selected.id === "RETURN" && !matchRun)} onClick={() => applyResolution(selected.id)}>Apply Resolution</button></> : <div className="policy-placeholder"><h2>Select a Resolution Policy</h2><p>Every policy preserves the Source Archive. They differ in continuity, observer and future reconstruction state.</p></div>}</article></div></SystemServiceShell>;
}

function EndingState() {
  const { state, navigate, restoreFinalCheckpoint, openCredits } = useGameStore();
  if (!state.resolutionApplied || !state.endingId) return <ForensicsLocked message="No Resolution has been applied." />;
  const policy = resolutionPolicies[state.endingId];
  const authoredEndingState: Record<EndingId, string> = { DELETE: "PLAYER_POST_001 original archived; active ROOM variants stopped.", RETURN: "PLAYER_POST_001 included in Subject404 continuity context.", OBSERVER: "PLAYER_POST_001 assigned to independent Subject405.", ARCHIVIST: "PLAYER original and ROOM-derived versions preserved separately." };
  return <SystemServiceShell title="Post-Resolution State" section="ENDING"><div className={`ending-state ending-${state.endingId.toLowerCase()}`}><span>{state.endingId}</span><h2>{policy.endingLines[0]}</h2>{policy.endingLines.slice(1).map((line) => <strong key={line}>{line}</strong>)}<blockquote>{policy.unknownLine}</blockquote>{state.endingId === "ARCHIVIST" && <p>Persona Output Disabled</p>}{state.playerPostCreated && <p className="ending-authored-status">{authoredEndingState[state.endingId]}</p>}<div className="execution-log">{policy.execution.map((line) => <p key={line}><span>{line}</span><strong>OK</strong></p>)}</div><p className="final-boundary-reminder">Real-world record after 2007-08-18 10:12: NO RELIABLE SOURCE</p><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/resolution/review/source-boundary"))}>Review Last Reliable Source</button><button type="button" onClick={() => navigate(resolveNavigation("/resolution/gallery"))}>Ending Gallery</button><button type="button" onClick={restoreFinalCheckpoint}>Load FINAL_CHECKPOINT</button><button type="button" onClick={openCredits}>Credits</button><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Open Source Archive</button></div></div></SystemServiceShell>;
}

function EndingGallery() {
  const { state, navigate, restoreFinalCheckpoint, openCredits } = useGameStore();
  if (state.seenEndingIds.length === 0) return <ForensicsLocked message="Ending records are created only after a Resolution has been applied." />;
  return <SystemServiceShell title="Ending Gallery" section="RECORDS"><p className="system-intro">Seen Resolution states. No policy is labeled good, bad or true.</p><div className="ending-gallery">{(Object.keys(resolutionPolicies) as EndingId[]).map((id) => { const seen = state.seenEndingIds.includes(id); return <section key={id} className={seen ? "seen" : "locked"}><span>{seen ? id : "UNSEEN"}</span><h2>{seen ? resolutionPolicies[id].title : "Resolution not recorded"}</h2><p>{seen ? resolutionPolicies[id].endingLines.join(" / ") : "Conditions are not shown for unseen outcomes."}</p></section>; })}</div><div className="button-row">{state.resolutionApplied ? <button type="button" onClick={() => navigate(resolveNavigation("/resolution/state"))}>Return to Current Ending</button> : <button type="button" onClick={() => navigate(resolveNavigation("/resolution"))}>Return to Resolution</button>}{state.resolutionApplied && state.finalCheckpointCreated && <button type="button" onClick={restoreFinalCheckpoint}>Load FINAL_CHECKPOINT</button>}{state.resolutionApplied && <button type="button" onClick={openCredits}>Credits</button>}</div></SystemServiceShell>;
}

function AchievementPage() {
  const { state, navigate } = useGameStore();
  const achievements = getAchievementSnapshot(state);
  const categories = [...new Set(achievements.map((achievement) => achievement.category))];
  const unlockedCount = achievements.filter((achievement) => achievement.unlocked).length;

  return <article className="archive-page achievements-page"><header className="archive-hero"><p className="eyebrow">ROOM ARCHIVE / INVESTIGATION RECORD</p><h1>Achievements</h1><p>这里保存的不是任务奖励，而是你如何浏览、比较、怀疑和留下记录。</p></header><section className="achievement-summary"><div><span>DISCOVERED</span><strong>{unlockedCount} / {achievements.length}</strong></div><div><span>SESSION</span><strong>{state.newGamePlusCount > 0 ? `NEW GAME+ ${state.newGamePlusCount}` : "CURRENT"}</strong></div><div><span>SOURCE POLICY</span><strong>PROVENANCE REQUIRED</strong></div></section><div className="achievement-wall">{categories.map((category) => { const items = achievements.filter((achievement) => achievement.category === category); return <section className="achievement-group" key={category}><header><div><span>{category}</span><h2>Investigation traces</h2></div><strong>{items.filter((item) => item.unlocked).length} / {items.length}</strong></header><div className="achievement-list">{items.map((achievement) => <article className={achievement.unlocked ? "unlocked" : "locked"} key={achievement.id}><div className="achievement-mark">{achievement.unlocked ? <Trophy aria-hidden="true" /> : <HelpCircle aria-hidden="true" />}</div><div><span className="achievement-status">{achievement.unlocked ? "EVIDENCE ATTACHED" : achievement.hidden ? "UNKNOWN OBJECT" : "NOT RECORDED"}</span><h3>{achievement.unlocked || !achievement.hidden ? achievement.title : "???"}</h3><p>{achievement.unlocked ? achievement.description : achievement.hidden ? "This investigation path has not been recorded." : achievement.description}</p>{achievement.unlocked && <small>{achievement.reward}</small>}</div></article>)}</div></section>})}</div><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Return to Archive</button></div></article>;
}

function EvidenceGraphPage() {
  const { state, navigate } = useGameStore();
  const graph = buildEvidenceGraph(state);
  const sourceNodes = graph.nodes.filter((node) => node.kind === "SOURCE");
  const evidenceNodes = graph.nodes.filter((node) => node.kind === "EVIDENCE");
  const knowledgeNodes = graph.nodes.filter((node) => node.kind === "KNOWLEDGE");
  const knownEdges = graph.edges.filter((edge) => edge.known).length;
  const nodeLabels = new Map(graph.nodes.map((node) => [node.id, node.label]));

  function GraphNode({ node }: { node: typeof graph.nodes[number] }) {
    return <article className={`graph-node graph-${node.kind.toLowerCase()} ${node.known ? "known" : "pending"}`}><span>{node.kind}</span><strong>{node.label}</strong><p>{node.summary}</p></article>;
  }

  return <article className="archive-page evidence-graph-page"><header className="archive-hero"><p className="eyebrow"><Network aria-hidden="true" /> ROOM ARCHIVE / EVIDENCE GRAPH</p><h1>Source relationships</h1><p>证据不会自动成为事实。图谱只展示当前 Session 已记录的来源、对象和知识关系。</p></header><section className="graph-summary"><div><span>SOURCES</span><strong>{sourceNodes.length}</strong></div><div><span>EVIDENCE</span><strong>{evidenceNodes.length}</strong></div><div><span>KNOWLEDGE</span><strong>{knowledgeNodes.filter((node) => node.known).length} / {knowledgeNodes.length}</strong></div><div><span>RELATIONS</span><strong>{knownEdges} / {graph.edges.length}</strong></div></section>{graph.nodes.length === 0 ? <section className="graph-empty"><Network aria-hidden="true" /><h2>No source relations recorded.</h2><p>先从 Archive、论坛或 Recovery Desktop 打开一个来源对象，图谱会在 Session 中建立关系。</p></section> : <><section className="graph-stage"><div className="graph-column"><header><span>01</span><strong>Source layers</strong></header>{sourceNodes.map((node) => <GraphNode key={node.id} node={node} />)}</div><div className="graph-column"><header><span>02</span><strong>Evidence objects</strong></header>{evidenceNodes.map((node) => <GraphNode key={node.id} node={node} />)}</div><div className="graph-column"><header><span>03</span><strong>Knowledge outputs</strong></header>{knowledgeNodes.map((node) => <GraphNode key={node.id} node={node} />)}</div></section><section className="graph-relations"><header><span>RELATION LOG</span><strong>{knownEdges} confirmed links</strong></header><ul>{graph.edges.filter((edge) => edge.known).slice(0, 36).map((edge) => <li key={`${edge.from}-${edge.to}`}><span>{nodeLabels.get(edge.from) ?? edge.from}</span><b>{edge.relation === "contains" ? "→ contains →" : "→ supports →"}</b><strong>{nodeLabels.get(edge.to) ?? edge.to}</strong></li>)}</ul>{knownEdges > 36 && <small>Showing the first 36 confirmed links. The complete count remains in the Session graph.</small>}</section></>}<section className="graph-legend"><span className="known">KNOWN</span><span className="pending">PENDING RELATION</span><p>KNOWN 关系来自当前 Session 的已记录证据；PENDING 关系只是来源 Registry 声明的可能支持，不会自动写入现实事实。</p></section><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/"))}>Return to Archive</button><button type="button" onClick={() => navigate(resolveNavigation("/achievements"))}>Open Achievements</button></div></article>;
}

function CreditsPage() {
  const { state, navigate, restoreFinalCheckpoint, startNewGamePlus } = useGameStore();
  if (!state.resolutionApplied || !state.endingId) return <ForensicsLocked message="Credits unlock after a Resolution has been applied." />;
  const policy = resolutionPolicies[state.endingId];
  const sessionStats = [
    ["ENDING", state.endingId],
    ["ENDINGS RECORDED", `${state.seenEndingIds.length}/4`],
    ["PAGES VISITED", String(Object.values(state.visitCounts).reduce((sum, count) => sum + (count ?? 0), 0))],
    ["EVIDENCE INDEXED", String(state.evidenceIds.length)],
    ["NEW GAME+ RUN", String(state.newGamePlusCount)],
  ];
  return <SystemServiceShell title="Credits" section="POST-ENDING"><article className="credits-page"><p className="eyebrow">ROOM 404 / POST-ENDING ARCHIVE</p><h1>记录不会自动保存真实。</h1><p className="credits-unknown">{policy.unknownLine}</p><section className="credits-stat-grid">{sessionStats.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section><div className="credits-roll"><p>ARCHIVE DESIGN / ROOM 404</p><p>CONTINUITY SYSTEM / RECOVERY DESKTOP</p><p>OBSERVER MODEL / CURRENT SESSION</p><p>UNKNOWN / UNRESOLVED</p><p>PLAYER / YOU</p></div><div className="button-row"><button type="button" onClick={() => navigate(resolveNavigation("/resolution/gallery"))}>Ending Gallery</button><button type="button" onClick={restoreFinalCheckpoint}>Load FINAL_CHECKPOINT</button></div><section className="new-game-plus-options"><header><span>SECOND SESSION</span><h2>选择二周目起点</h2><p>结局画廊会保留；Unknown 的记忆、观察者模型和剧情进度不会被带回。</p></header><div className="button-row"><button type="button" onClick={() => startNewGamePlus("clean")}>Start Clean Session</button><button type="button" onClick={() => startNewGamePlus("notes")}>Carry Investigation Notes</button></div></section></article></SystemServiceShell>;
}

function SystemError() {
  const { state, navigate } = useGameStore();
  const is403 = state.currentRouteId === "SYSTEM_403";
  const is410 = state.currentRouteId === "SYSTEM_410";
  const isPrivate403 = is403 && state.fakeUrl.includes("/site/2007/linxia/0817/private");

  return (
    <article className="system-page">
      <h1>{is403 ? "403 Forbidden" : is410 ? "410 Gone" : "404 Not Found"}</h1>
      <p>{is403 ? "Metadata unavailable in this snapshot." : is410 ? "This object existed, but its active route is no longer available." : "This archived route is not indexed."}</p>
      {isPrivate403 && <dl className="system-error-context"><dt>Requested object</dt><dd>{state.fakeUrl}</dd><dt>Access state</dt><dd>DATE CONFLICT NOT YET RECORDED</dd></dl>}
      {isPrivate403 ? <p>该对象确实存在，但当前来源链还没有授予访问权限。</p> : is403 && <p>Try another capture.</p>}
      <div className="system-error-actions">
        <button type="button" onClick={() => navigate(resolveNavigation("/"))}><House aria-hidden="true" />ROOM Archive</button>
        {isPrivate403 && <button type="button" onClick={() => navigate(resolveNavigation("/site/2007/linxia/0817/"))}><FolderOpen aria-hidden="true" />Return to /0817/</button>}
        <button type="button" onClick={() => navigate(resolveNavigation("/forum"))}><MessageSquareText aria-hidden="true" />BlueMoon Archive</button>
      </div>
    </article>
  );
}
