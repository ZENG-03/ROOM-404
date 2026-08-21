export type RouteId =
  | "ARCHIVE_HOME"
  | "ARCHIVE_SEARCH"
  | "LINXIA_HOME"
  | "LINXIA_DIARY"
  | "LINXIA_PHOTO_INDEX"
  | "PHOTO17"
  | "LINXIA_GUESTBOOK"
  | "LINXIA_0817_INDEX"
  | "LINXIA_0817_PRIVATE"
  | "LINXIA_BACKUP_ZIP"
  | "SCHOOL_HOME"
  | "SCHOOL_PHOTO_CLUB"
  | "SCHOOL_NOTICE_V1"
  | "SCHOOL_NOTICE_V2"
  | "SCHOOL_NEWS_20070816"
  | "SCHOOL_NEWS_20070813"
  | "SCHOOL_NEWS_20070810"
  | "SCHOOL_ACTIVITY_20070722"
  | "SCHOOL_ACTIVITY_20070610"
  | "SCHOOL_QUICK_OFFICE"
  | "SCHOOL_QUICK_DOWNLOAD"
  | "BLUEMOON_ARCHIVE"
  | "FORUM_HOME"
  | "FORUM_BOARD_NIGHT"
  | "FORUM_BOARD_PHOTO"
  | "FORUM_BOARD_CAMPUS"
  | "FORUM_BOARD_WEB"
  | "FORUM_BOARD_ANNOUNCEMENTS"
  | "FORUM_BOARD_FEEDBACK"
  | "FORUM_BOARD_CHAT"
  | "FORUM_BOARD_RELATIONSHIP"
  | "FORUM_BOARD_MUSIC"
  | "FORUM_BOARD_TRADE"
  | "FORUM_SEARCH"
  | "FORUM_USER_1847"
  | "FORUM_USER_1741"
  | "FORUM_USER_1766"
  | "FORUM_USER_1739"
  | "FORUM_THREAD_1847"
  | "FORUM_THREAD_1711"
  | "FORUM_THREAD_1738"
  | "FORUM_THREAD_1682"
  | "FORUM_THREAD_1792"
  | "FORUM_THREAD_1816"
  | "FORUM_THREAD_1904"
  | "FORUM_THREAD_1905"
  | "FORUM_THREAD_1906"
  | "FORUM_THREAD_1907"
  | "FORUM_THREAD_1908"
  | "FORUM_THREAD_1910"
  | "FORUM_THREAD_1911"
  | "FORUM_THREAD_1912"
  | "FORUM_THREAD_1913"
  | "FORUM_THREAD_1914"
  | "FORUM_THREAD_1915"
  | "FORUM_THREAD_1847_FRAGMENTS"
  | "FORUM_THREAD_1847_COMPARE"
  | "FORUM_SESSION_1847"
  | "FORUM_SESSION_MATCH"
  | "FORUM_POST_NEW"
  | "FORUM_PLAYER_POST"
  | "FORUM_PLAYER_POST_COMPARE"
  | "FORUM_PLAYER_POST_EDIT"
  | "FORUM_PLAYER_POST_ARCHIVE"
  | "TIMELINE_20070817"
  | "PHOTO17_FORENSICS"
  | "PHOTO17_SOURCE_WEB2007"
  | "PHOTO17_SOURCE_ARCHIVE2008"
  | "PHOTO17_CLUB_INDEX"
  | "PHOTO17_CLUB_FILE"
  | "PHOTO17_VERSION_20070823"
  | "PHOTO17_VERSION_2015"
  | "PHOTO17_VERSION_2016"
  | "PHOTO17_VERSION_2022"
  | "PHOTO17_COMPARE"
  | "PHOTO17_HELP"
  | "PHOTO17_SESSION_HISTORY"
  | "PHOTO17_SIMILAR"
  | "SUBJECT04_PHOTO17"
  | "RECOVERY_BOOT"
  | "RECOVERY_LOGIN"
  | "RECOVERY_DESKTOP"
  | "CONTINUITY_SERVICE"
  | "ROOM_ABOUT"
  | "ROOM_HISTORY"
  | "ROOM_HISTORY_2011"
  | "ROOM_HISTORY_2012"
  | "ROOM_HISTORY_2013"
  | "ROOM_HISTORY_2014"
  | "ROOM_HISTORY_2015"
  | "ROOM_HISTORY_2016"
  | "ROOM_HISTORY_2017"
  | "ROOM_HISTORY_2018"
  | "ROOM_HISTORY_2020"
  | "ROOM_HISTORY_2022"
  | "ROOM_HISTORY_2025"
  | "ROOM_HISTORY_2026"
  | "SUBJECT404_OBJECT"
  | "UNRESOLVED_PERSONA_OBJECT"
  | "OBSERVER_SERVICE"
  | "OBSERVER_INFERENCES"
  | "OBSERVER_CANDIDATE"
  | "OBSERVER_AUTHORED_OBJECT"
  | "FINAL_REVIEW"
  | "FINAL_GENERATED_SAMPLE"
  | "FINAL_SOURCE_BOUNDARY"
  | "FINAL_OBSERVER_REVIEW"
  | "RESOLUTION_CENTER"
  | "ENDING_STATE"
  | "ENDING_GALLERY"
  | "EVIDENCE_GRAPH"
  | "ACHIEVEMENTS"
  | "CREDITS"
  | "CHAPTER_END"
  | "SYSTEM_404"
  | "SYSTEM_403"
  | "SYSTEM_410";

export type SourceType =
  | "ORIGINAL"
  | "RECOVERED"
  | "ALTERED"
  | "ARCHIVED"
  | "RECONSTRUCTED"
  | "GENERATED"
  | "SYSTEM"
  | "SESSION"
  | "PLAYER_SESSION_ORIGINAL"
  | "UNKNOWN";

export interface GameRoute {
  id: RouteId;
  path: string;
  title: string;
  aliases?: string[];
  sourceType: SourceType;
}

export interface GameEvent {
  id: string;
  type:
    | "PAGE_VISIT"
    | "SEARCH"
    | "PHOTO_VIEW"
    | "FRAGMENT_RECOVERED"
    | "THREAD_ASSEMBLED"
    | "SESSION_MATCH"
    | "OBJECT_INSPECT"
    | "PHOTO_COMPARE"
    | "TERMINAL_COMMAND"
    | "RECOVERY_APP_OPEN"
  | "SERVICE_INSPECT"
  | "INFERENCE_CORRECTED"
  | "INFERENCE_RESPONSE"
  | "FINAL_REVIEW"
  | "FINAL_GENERATED_DECISION"
  | "CREDITS_STARTED"
  | "NEW_GAME_PLUS_STARTED"
    | "CHECKPOINT_CREATED"
    | "CHECKPOINT_RESTORED"
    | "RESOLUTION_APPLIED"
    | "PLAYER_POST_CREATED"
    | "PLAYER_POST_VIEW_DESYNC"
    | "PLAYER_POST_MUTATION"
    | "PLAYER_POST_EDIT"
    | "PLAYER_POST_DELETE"
    | "PLAYER_POST_RESTORE_ORIGINAL"
    | "PLAYER_POST_PRESERVE_ORIGINAL"
    | "EVIDENCE_UNLOCK"
    | "TEXT_ARCHIVE_READ"
    | "DEDUCTION_ATTEMPT"
    | "DEDUCTION_SOLVED"
    | "CHAPTER_COMPLETE";
  createdAt: string;
  routeId?: RouteId;
  query?: string;
  target?: string;
}

export interface Evidence {
  id: string;
  title: string;
  sourceType: SourceType;
  summary: string;
  supports: string[];
}

export interface TextArchiveEntry {
  id: string;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  section: string;
  heading: string;
  body: string;
  lineStart: number;
  sourceType: SourceType;
  tags: string[];
  relatedEvidenceIds: string[];
  unlockCondition: string;
}

export interface TextArchiveIndex {
  sourceFile: string;
  lines: number;
  characters: number;
  entries: TextArchiveEntry[];
}

export interface DeductionAnswer {
  id: string;
  label: string;
  explanation: string;
}

export interface DeductionCase {
  id: string;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  question: string;
  candidateAnswers: DeductionAnswer[];
  correctAnswerId: string;
  requiredEvidenceIds: string[];
  contradictionEvidenceIds: string[];
  hintText: string;
  successKnowledgeIds: string[];
  unlockTextEntryIds: string[];
  nextRoute?: RouteId;
  partialFeedback: string;
}

export type AssetId =
  | "linxia_photo_02"
  | "linxia_photo_05"
  | "linxia_photo_08"
  | "linxia_photo_11"
  | "linxia_photo_13"
  | "photo17_web_v0"
  | "photo17_web_v1"
  | "photo17_web_v2"
  | "photo17_original"
  | "photo17_club_copy"
  | "photo17_backup_20070823"
  | "photo17_restore_2015"
  | "photo17_recon_2016"
  | "photo17_recon_2022"
  | "photo17_session";

export interface MediaAsset {
  id: AssetId;
  title: string;
  alt: string;
  sourceType: SourceType;
  expectedFile: string;
  candidates: string[];
  aspectRatio: string;
  notes?: string;
}

export interface PhotoEntry {
  id: string;
  title: string;
  caption: string;
  assetId: AssetId;
  routePath?: string;
}

export interface GameState {
  schemaVersion: number;
  chapter: 1 | 2 | 3 | 4 | 5 | 6;
  currentRouteId: RouteId;
  fakeUrl: string;
  searchQuery: string;
  unlockedTextEntryIds: string[];
  readTextEntryIds: string[];
  solvedDeductionIds: string[];
  deductionAttempts: Record<string, number>;
  activeLeadId: string;
  events: GameEvent[];
  evidenceIds: string[];
  knowledgeIds: string[];
  visitCounts: Partial<Record<RouteId, number>>;
  photo17Visits: number;
  viewedCaptures: string[];
  backup403Seen: boolean;
  chapter1Complete: boolean;
  forumFragmentIds: string[];
  forumQuotesSeen: boolean;
  forumThread1847Assembled: boolean;
  forumCookieMatchSeen: boolean;
  summer17ThreadIdsRead: string[];
  identityClueIds: string[];
  chapter2Complete: boolean;
  photo17ForensicsStarted: boolean;
  photo17ClubHashVerified: boolean;
  photo17DifferenceMapSeen: boolean;
  photo17SessionHistorySeen: boolean;
  photo17ComparePairs: string[];
  chapter3Complete: boolean;
  recoveryBootComplete: boolean;
  recoveryDesktopEntered: boolean;
  recoveryOpenedAppIds: string[];
  recoveryActiveApp: string;
  recoverySuspended: boolean;
  recoveryWindowMode: "normal" | "minimized" | "maximized";
  recoveryRestartCount: number;
  recoveryFileIdsSeen: string[];
  recoveryRecycleItemIdsSeen: string[];
  recoveryPlayerTrackIdsPlayed: string[];
  recoverySortPolicySeen: boolean;
  recoveryCalendarSessionSeen: boolean;
  recoveryInfoSeen: boolean;
  recoveryMessengerMappingSeen: boolean;
  recoveryMessageThreadIdsSeen: string[];
  recoveryCalendarLayersSeen: string[];
  recoveryManifestSeen: boolean;
  recoveryLogSeen: boolean;
  recoveryMemoryStatusSeen: boolean;
  recoveryRawViewSeen: boolean;
  recoveryUnknownSourceSeen: boolean;
  playerPostCreated: boolean;
  playerPostOriginalTitle: string;
  playerPostOriginalBody: string;
  playerPostViewDesyncSeen: boolean;
  playerPostMutationSeen: boolean;
  playerPostMutation2Seen: boolean;
  playerPostCompareSeen: boolean;
  playerPostEditedTitle: string;
  playerPostEditedBody: string;
  playerPostDisplayVersion: "original" | "player_edit" | "mutation_1" | "mutation_2";
  playerPostDeleted: boolean;
  playerPostArchivedCopySeen: boolean;
  playerPostOriginalPreserved: boolean;
  playerPostRestoreOriginalSeen: boolean;
  chapter4Complete: boolean;
  continuityServiceStarted: boolean;
  roomFullNameSeen: boolean;
  roomHistoryYearsSeen: number[];
  subject404MigrationSeen: boolean;
  unresolvedPersonaSeen: boolean;
  observerModelSeen: boolean;
  observerInferenceCorrected: boolean;
  observerInferenceChoice: "agree" | "incorrect" | "unresolved" | "";
  observer405Seen: boolean;
  chapter5Complete: boolean;
  finalGeneratedSampleSeen: boolean;
  finalGeneratedDecision: "accept" | "reject" | "";
  finalGeneratedSourceChecked: boolean;
  finalSourceBoundarySeen: boolean;
  finalObserverReviewDone: boolean;
  finalObserverInferenceChoice: "agree" | "incorrect" | "unresolved" | "";
  finalUnknownChoice: "known" | "uncertain" | "what" | "important" | "";
  finalReviewComplete: boolean;
  finalCheckpointCreated: boolean;
  finalCheckpointCreatedAt: string;
  finalCheckpointRestoreCount: number;
  selectedResolution: EndingId | "";
  resolutionApplied: boolean;
  endingId: EndingId | "";
  seenEndingIds: EndingId[];
  achievementsUnlocked: string[];
  creditsSeen: boolean;
  newGamePlusCount: number;
  anomalyLevel: 0 | 1 | 2 | 3 | 4 | 5;
  unknownStage: 0 | 1 | 2 | 3 | 4 | 5;
}

export type EndingId = "DELETE" | "RETURN" | "OBSERVER" | "ARCHIVIST";

export interface NavigatePayload {
  routeId: RouteId;
  fakeUrl: string;
  query?: string;
}
