import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
import type { ReactNode } from "react";
import type { EndingId, GameEvent, GameState, NavigatePayload, RouteId } from "../types";
import { calculateAnomalyLevel } from "./AnomalyEngine";
import { calculateUnknownStage } from "./UnknownEngine";
import { getNewAchievementIds } from "./AchievementEngine";
import { evaluateDeduction, getDeductionCase, getNextDeductionCaseId } from "../../story/deductions";
import { investigationNodes, investigationOperations, sideCases } from "../../story/investigation";

const SAVE_KEY = "room404.save.v1";

const initialState: GameState = {
  schemaVersion: 11,
  chapter: 1,
  currentRouteId: "ARCHIVE_HOME",
  fakeUrl: "/",
  searchQuery: "",
  unlockedTextEntryIds: [],
  readTextEntryIds: [],
  solvedDeductionIds: [],
  deductionAttempts: {},
  activeLeadId: "chapter1_date_conflict",
  investigationNodeIds: [],
  completedOperationIds: [],
  unlockedSideCaseIds: [],
  events: [],
  evidenceIds: [],
  knowledgeIds: [],
  visitCounts: {},
  photo17Visits: 0,
  viewedCaptures: [],
  backup403Seen: false,
  chapter1Complete: false,
  forumFragmentIds: [],
  forumQuotesSeen: false,
  forumThread1847Assembled: false,
  forumCookieMatchSeen: false,
  summer17ThreadIdsRead: [],
  identityClueIds: [],
  chapter2Complete: false,
  photo17ForensicsStarted: false,
  photo17ClubHashVerified: false,
  photo17DifferenceMapSeen: false,
  photo17SessionHistorySeen: false,
  photo17ComparePairs: [],
  chapter3Complete: false,
  recoveryBootComplete: false,
  recoveryDesktopEntered: false,
  recoveryOpenedAppIds: [],
  recoveryActiveApp: "",
  recoverySuspended: false,
  recoveryWindowMode: "normal",
  recoveryRestartCount: 0,
  recoveryFileIdsSeen: [],
  recoveryRecycleItemIdsSeen: [],
  recoveryPlayerTrackIdsPlayed: [],
  recoverySortPolicySeen: false,
  recoveryCalendarSessionSeen: false,
  recoveryInfoSeen: false,
  recoveryMessengerMappingSeen: false,
  recoveryMessageThreadIdsSeen: [],
  recoveryCalendarLayersSeen: [],
  recoveryManifestSeen: false,
  recoveryLogSeen: false,
  recoveryMemoryStatusSeen: false,
  recoveryRawViewSeen: false,
  recoveryUnknownSourceSeen: false,
  playerPostCreated: false,
  playerPostOriginalTitle: "",
  playerPostOriginalBody: "",
  playerPostViewDesyncSeen: false,
  playerPostMutationSeen: false,
  playerPostMutation2Seen: false,
  playerPostCompareSeen: false,
  playerPostEditedTitle: "",
  playerPostEditedBody: "",
  playerPostDisplayVersion: "original",
  playerPostDeleted: false,
  playerPostArchivedCopySeen: false,
  playerPostOriginalPreserved: false,
  playerPostRestoreOriginalSeen: false,
  chapter4Complete: false,
  continuityServiceStarted: false,
  roomFullNameSeen: false,
  roomHistoryYearsSeen: [],
  subject404MigrationSeen: false,
  unresolvedPersonaSeen: false,
  observerModelSeen: false,
  observerInferenceCorrected: false,
  observerInferenceChoice: "",
  observer405Seen: false,
  chapter5Complete: false,
  finalGeneratedSampleSeen: false,
  finalGeneratedDecision: "",
  finalGeneratedSourceChecked: false,
  finalSourceBoundarySeen: false,
  finalObserverReviewDone: false,
  finalObserverInferenceChoice: "",
  finalUnknownChoice: "",
  finalReviewComplete: false,
  finalCheckpointCreated: false,
  finalCheckpointCreatedAt: "",
  finalCheckpointRestoreCount: 0,
  selectedResolution: "",
  resolutionApplied: false,
  endingId: "",
  seenEndingIds: [],
  achievementsUnlocked: ["archive_beginner"],
  creditsSeen: false,
  newGamePlusCount: 0,
  anomalyLevel: 0,
  unknownStage: 0,
};

type Action =
  | { type: "NAVIGATE"; payload: NavigatePayload }
  | { type: "SEARCH"; query: string }
  | { type: "READ_TEXT_ENTRY"; entryId: string }
  | { type: "SUBMIT_DEDUCTION"; caseId: string; answerId: string; evidenceIds: string[] }
  | { type: "RECOVER_FORUM_FRAGMENT"; fragmentId: string }
  | { type: "MARK_FORUM_QUOTES_SEEN" }
  | { type: "ASSEMBLE_FORUM_THREAD_1847" }
  | { type: "MARK_FORUM_COOKIE_MATCH" }
  | { type: "START_PHOTO17_FORENSICS" }
  | { type: "COMPARE_PHOTO17"; pair: string }
  | { type: "VERIFY_PHOTO17_CLUB_HASH" }
  | { type: "MARK_PHOTO17_DIFFERENCE_MAP" }
  | { type: "MARK_PHOTO17_SESSION_HISTORY" }
  | { type: "CONTINUE_RECOVERY_BOOT" }
  | { type: "ENTER_RECOVERY_DESKTOP" }
  | { type: "OPEN_RECOVERY_APP"; appId: string }
  | { type: "READ_RECOVERY_FILE"; fileId: string }
  | { type: "MARK_RECOVERY_SORT_POLICY" }
  | { type: "READ_RECOVERY_RECYCLE_ITEM"; itemId: string }
  | { type: "PLAY_RECOVERY_TRACK"; trackId: string }
  | { type: "SUSPEND_RECOVERY" }
  | { type: "RESUME_RECOVERY" }
  | { type: "RESTART_RECOVERY_UI" }
  | { type: "SET_RECOVERY_WINDOW_MODE"; mode: "normal" | "minimized" | "maximized" }
  | { type: "MARK_RECOVERY_CALENDAR_SESSION" }
  | { type: "MARK_RECOVERY_INFO" }
  | { type: "MARK_RECOVERY_MESSENGER_MAPPING" }
  | { type: "READ_RECOVERY_MESSAGE"; threadId: string }
  | { type: "MARK_RECOVERY_CALENDAR_LAYER"; layer: "personal" | "recovered" | "session" }
  | { type: "CREATE_PLAYER_POST"; title: string; body: string }
  | { type: "MARK_PLAYER_POST_EXIT" }
  | { type: "VIEW_PLAYER_POST_MUTATION" }
  | { type: "VIEW_PLAYER_POST_MUTATION_2" }
  | { type: "COMPARE_PLAYER_POST" }
  | { type: "EDIT_PLAYER_POST"; title: string; body: string }
  | { type: "RESTORE_PLAYER_POST_ORIGINAL" }
  | { type: "PRESERVE_PLAYER_POST_ORIGINAL" }
  | { type: "DELETE_PLAYER_POST" }
  | { type: "VIEW_PLAYER_POST_ARCHIVE" }
  | { type: "RUN_RECOVERY_TERMINAL"; command: string }
  | { type: "START_CONTINUITY_SERVICE" }
  | { type: "INSPECT_ROOM_DEFINITION" }
  | { type: "VIEW_ROOM_HISTORY_YEAR"; year: number }
  | { type: "INSPECT_UNRESOLVED_PERSONA" }
  | { type: "INSPECT_OBSERVER_MODEL" }
  | { type: "CORRECT_OBSERVER_INFERENCE" }
  | { type: "SET_OBSERVER_INFERENCE"; choice: "agree" | "incorrect" | "unresolved" }
  | { type: "INSPECT_OBSERVER_CANDIDATE" }
  | { type: "START_FINAL_REVIEW" }
  | { type: "VIEW_FINAL_GENERATED_SAMPLE" }
  | { type: "SET_FINAL_GENERATED_DECISION"; decision: "accept" | "reject" }
  | { type: "CHECK_FINAL_GENERATED_SOURCE" }
  | { type: "VIEW_FINAL_SOURCE_BOUNDARY" }
  | { type: "COMPLETE_FINAL_OBSERVER_REVIEW"; choice: "agree" | "incorrect" | "unresolved" }
  | { type: "COMPLETE_FINAL_UNKNOWN_DIALOGUE"; choice: "known" | "uncertain" | "what" | "important" }
  | { type: "OPEN_RESOLUTION_CENTER" }
  | { type: "SELECT_RESOLUTION"; endingId: EndingId }
  | { type: "APPLY_RESOLUTION"; endingId: EndingId }
  | { type: "RESTORE_FINAL_CHECKPOINT" }
  | { type: "OPEN_CREDITS" }
  | { type: "START_NEW_GAME_PLUS"; mode: "clean" | "notes" }
  | { type: "RESET" };

interface GameStoreValue {
  state: GameState;
  saveStatus: "saving" | "saved" | "error";
  lastSavedAt: string;
  navigate: (payload: NavigatePayload) => void;
  search: (query: string) => void;
  readTextEntry: (entryId: string) => void;
  submitDeduction: (caseId: string, answerId: string, evidenceIds: string[]) => void;
  recoverForumFragment: (fragmentId: string) => void;
  markForumQuotesSeen: () => void;
  assembleForumThread1847: () => void;
  markForumCookieMatch: () => void;
  startPhoto17Forensics: () => void;
  comparePhoto17Versions: (pair: string) => void;
  verifyPhoto17ClubHash: () => void;
  markPhoto17DifferenceMap: () => void;
  markPhoto17SessionHistory: () => void;
  continueRecoveryBoot: () => void;
  enterRecoveryDesktop: () => void;
  openRecoveryApp: (appId: string) => void;
  readRecoveryFile: (fileId: string) => void;
  markRecoverySortPolicy: () => void;
  readRecoveryRecycleItem: (itemId: string) => void;
  playRecoveryTrack: (trackId: string) => void;
  suspendRecovery: () => void;
  resumeRecovery: () => void;
  restartRecoveryUi: () => void;
  setRecoveryWindowMode: (mode: "normal" | "minimized" | "maximized") => void;
  markRecoveryCalendarSession: () => void;
  markRecoveryInfo: () => void;
  markRecoveryMessengerMapping: () => void;
  readRecoveryMessage: (threadId: string) => void;
  markRecoveryCalendarLayer: (layer: "personal" | "recovered" | "session") => void;
  createPlayerPost: (title: string, body: string) => void;
  markPlayerPostExit: () => void;
  viewPlayerPostMutation: () => void;
  viewPlayerPostMutation2: () => void;
  comparePlayerPost: () => void;
  editPlayerPost: (title: string, body: string) => void;
  restorePlayerPostOriginal: () => void;
  preservePlayerPostOriginal: () => void;
  deletePlayerPost: () => void;
  viewPlayerPostArchive: () => void;
  runRecoveryTerminal: (command: string) => void;
  startContinuityService: () => void;
  inspectRoomDefinition: () => void;
  viewRoomHistoryYear: (year: number) => void;
  inspectUnresolvedPersona: () => void;
  inspectObserverModel: () => void;
  correctObserverInference: () => void;
  setObserverInference: (choice: "agree" | "incorrect" | "unresolved") => void;
  inspectObserverCandidate: () => void;
  startFinalReview: () => void;
  viewFinalGeneratedSample: () => void;
  setFinalGeneratedDecision: (decision: "accept" | "reject") => void;
  checkFinalGeneratedSource: () => void;
  viewFinalSourceBoundary: () => void;
  completeFinalObserverReview: (choice: "agree" | "incorrect" | "unresolved") => void;
  completeFinalUnknownDialogue: (choice: "known" | "uncertain" | "what" | "important") => void;
  openResolutionCenter: () => void;
  selectResolution: (endingId: EndingId) => void;
  applyResolution: (endingId: EndingId) => void;
  restoreFinalCheckpoint: () => void;
  openCredits: () => void;
  startNewGamePlus: (mode: "clean" | "notes") => void;
  reset: () => void;
}

const GameStoreContext = createContext<GameStoreValue | undefined>(undefined);

function reducer(state: GameState, action: Action): GameState {
  const next = reconcileInvestigationProgress(reduceState(state, action));
  const anomalyLevel = calculateAnomalyLevel(next);
  const unknownStage = calculateUnknownStage(next, anomalyLevel);
  const achievementIds = addUniqueMany(next.achievementsUnlocked ?? [], getNewAchievementIds(next));
  const hasAchievementChanges = achievementIds.length !== (next.achievementsUnlocked ?? []).length;
  if (next.anomalyLevel === anomalyLevel && next.unknownStage === unknownStage && !hasAchievementChanges) return next;
  return { ...next, anomalyLevel, unknownStage, achievementsUnlocked: achievementIds };
}

function reconcileInvestigationProgress(state: GameState): GameState {
  let next = state;
  const completedNodeIds = investigationNodes.filter((node) => node.complete(state)).map((node) => node.id);
  const newlyCompletedNodeIds = completedNodeIds.filter((id) => !(state.investigationNodeIds ?? []).includes(id));

  if (newlyCompletedNodeIds.length > 0) {
    next = {
      ...next,
      investigationNodeIds: addUniqueMany(next.investigationNodeIds ?? [], newlyCompletedNodeIds),
      events: [
        ...next.events,
        ...newlyCompletedNodeIds.map((id) => {
          const node = investigationNodes.find((item) => item.id === id);
          return makeEvent("INVESTIGATION_NODE_COMPLETE", {
            routeId: node?.routeId ?? "ARCHIVE_HOME",
            target: id,
          });
        }),
      ],
    };
  }

  const knownNodeIds = new Set([...(next.investigationNodeIds ?? []), ...completedNodeIds]);
  const unlockedSideCaseIds = sideCases
    .filter((item) => knownNodeIds.has(item.unlockAfter) || next.chapter > item.chapter)
    .map((item) => item.id);
  const newlyUnlockedSideCaseIds = unlockedSideCaseIds.filter((id) => !(state.unlockedSideCaseIds ?? []).includes(id));

  if (newlyUnlockedSideCaseIds.length > 0) {
    next = {
      ...next,
      unlockedSideCaseIds: addUniqueMany(next.unlockedSideCaseIds ?? [], newlyUnlockedSideCaseIds),
      events: [
        ...next.events,
        ...newlyUnlockedSideCaseIds.map((id) => {
          const sideCase = sideCases.find((item) => item.id === id);
          return makeEvent("SIDE_CASE_UNLOCK", {
            routeId: sideCase?.routeId ?? "ARCHIVE_HOME",
            target: id,
          });
        }),
      ],
    };
  }

  const completedOperationIds = investigationOperations.filter((operation) => operation.complete(state)).map((operation) => operation.id);
  const newlyCompletedOperationIds = completedOperationIds.filter((id) => !(state.completedOperationIds ?? []).includes(id));

  if (newlyCompletedOperationIds.length > 0) {
    next = {
      ...next,
      completedOperationIds: addUniqueMany(next.completedOperationIds ?? [], newlyCompletedOperationIds),
      events: [
        ...next.events,
        ...newlyCompletedOperationIds.map((id) => makeEvent("SYSTEM_OPERATION", {
          routeId: id.startsWith("operation:recovery") || id.startsWith("operation:memory") || id.startsWith("operation:mount") || id.startsWith("operation:calendar") ? "RECOVERY_DESKTOP" : "ROOM_HISTORY",
          target: id,
        })),
      ],
    };
  }

  return next;
}

function reduceState(state: GameState, action: Action): GameState {
  if (action.type === "RESET") {
    return initialState;
  }

  if (action.type === "OPEN_CREDITS") {
    if (!state.resolutionApplied || !state.endingId) return state;
    return {
      ...state,
      currentRouteId: "CREDITS",
      fakeUrl: "/credits",
      creditsSeen: true,
      events: [...state.events, makeEvent("CREDITS_STARTED", { routeId: "CREDITS", target: state.endingId })],
    };
  }

  if (action.type === "START_NEW_GAME_PLUS") {
    if (!state.resolutionApplied || !state.endingId) return state;
    const carriedNotes = action.mode === "notes"
      ? {
        evidenceIds: state.evidenceIds,
        knowledgeIds: state.knowledgeIds,
        unlockedTextEntryIds: state.unlockedTextEntryIds,
        readTextEntryIds: state.readTextEntryIds,
        solvedDeductionIds: state.solvedDeductionIds,
        deductionAttempts: state.deductionAttempts,
        investigationNodeIds: state.investigationNodeIds,
        completedOperationIds: state.completedOperationIds,
        unlockedSideCaseIds: state.unlockedSideCaseIds,
      }
      : {
        evidenceIds: initialState.evidenceIds,
        knowledgeIds: initialState.knowledgeIds,
        unlockedTextEntryIds: initialState.unlockedTextEntryIds,
        readTextEntryIds: initialState.readTextEntryIds,
        solvedDeductionIds: initialState.solvedDeductionIds,
        deductionAttempts: initialState.deductionAttempts,
        investigationNodeIds: initialState.investigationNodeIds,
        completedOperationIds: initialState.completedOperationIds,
        unlockedSideCaseIds: initialState.unlockedSideCaseIds,
      };
    return {
      ...initialState,
      ...carriedNotes,
      seenEndingIds: state.seenEndingIds,
      achievementsUnlocked: state.achievementsUnlocked,
      newGamePlusCount: state.newGamePlusCount + 1,
      events: [makeEvent("NEW_GAME_PLUS_STARTED", { routeId: "ARCHIVE_HOME", target: `${action.mode}_run_${state.newGamePlusCount + 1}` })],
    };
  }

  if (action.type === "NAVIGATE" && action.payload.routeId === "LINXIA_0817_PRIVATE" && !state.knowledgeIds.includes("knows_event_date_changed")) {
    return {
      ...state,
      currentRouteId: "SYSTEM_403",
      fakeUrl: action.payload.fakeUrl,
      events: [
        ...state.events,
        makeEvent("PAGE_VISIT", { routeId: "SYSTEM_403", target: action.payload.fakeUrl }),
      ],
    };
  }

  if (action.type === "SEARCH") {
    const query = action.query.trim();
    const isBlueMoonReference = query.toUpperCase() === "BM-1847";
    const event = makeEvent("SEARCH", {
      query,
      routeId: "ARCHIVE_SEARCH",
    });

    return applyRouteEffects(
      {
        ...state,
        currentRouteId: "ARCHIVE_SEARCH",
        fakeUrl: query ? `/search?q=${encodeURIComponent(query)}` : "/search",
        searchQuery: query,
        chapter: isBlueMoonReference && state.chapter < 2 ? 2 : state.chapter,
        events: [...state.events, event],
      },
      "ARCHIVE_SEARCH",
    );
  }

  if (action.type === "READ_TEXT_ENTRY") {
    if (state.readTextEntryIds.includes(action.entryId)) return state;
    return {
      ...state,
      unlockedTextEntryIds: addUnique(state.unlockedTextEntryIds, action.entryId),
      readTextEntryIds: addUnique(state.readTextEntryIds, action.entryId),
      events: [
        ...state.events,
        makeEvent("TEXT_ARCHIVE_READ", {
          routeId: "ARCHIVE_SEARCH",
          target: action.entryId,
        }),
      ],
    };
  }

  if (action.type === "SUBMIT_DEDUCTION") {
    const caseDef = getDeductionCase(action.caseId);
    if (!caseDef || state.chapter < caseDef.chapter || state.solvedDeductionIds.includes(caseDef.id)) return state;

    const status = evaluateDeduction(caseDef, action.answerId, action.evidenceIds);
    const attempts = {
      ...state.deductionAttempts,
      [caseDef.id]: (state.deductionAttempts[caseDef.id] ?? 0) + 1,
    };
    const eventType = status === "correct" ? "DEDUCTION_SOLVED" : "DEDUCTION_ATTEMPT";
    const event = makeEvent(eventType, {
      routeId: state.currentRouteId,
      target: `${caseDef.id}:${action.answerId}:${status}`,
    });
    const nextState: GameState = {
      ...state,
      deductionAttempts: attempts,
      events: [...state.events, event],
    };

    if (status !== "correct") return nextState;

    return {
      ...nextState,
      solvedDeductionIds: addUnique(nextState.solvedDeductionIds, caseDef.id),
      unlockedTextEntryIds: addUniqueMany(nextState.unlockedTextEntryIds, caseDef.unlockTextEntryIds),
      knowledgeIds: addUniqueMany(nextState.knowledgeIds, caseDef.successKnowledgeIds),
      activeLeadId: getNextDeductionCaseId(caseDef.id, nextState.solvedDeductionIds),
    };
  }

  if (action.type === "RECOVER_FORUM_FRAGMENT") {
    return {
      ...state,
      chapter: state.chapter < 2 ? 2 : state.chapter,
      forumFragmentIds: addUnique(state.forumFragmentIds, action.fragmentId),
      events: [
        ...state.events,
        makeEvent("FRAGMENT_RECOVERED", {
          routeId: "FORUM_THREAD_1847_FRAGMENTS",
          target: action.fragmentId,
        }),
      ],
    };
  }

  if (action.type === "MARK_FORUM_QUOTES_SEEN") {
    return {
      ...state,
      chapter: state.chapter < 2 ? 2 : state.chapter,
      forumQuotesSeen: true,
      knowledgeIds: addUnique(state.knowledgeIds, "knows_thread_not_explicit_farewell"),
    };
  }

  if (action.type === "ASSEMBLE_FORUM_THREAD_1847") {
    return applyChapter2Completion({
      ...state,
      chapter: state.chapter < 2 ? 2 : state.chapter,
      forumThread1847Assembled: true,
      knowledgeIds: addUnique(state.knowledgeIds, "thread1847_full_seen"),
      events: [
        ...state.events,
        makeEvent("THREAD_ASSEMBLED", {
          routeId: "FORUM_THREAD_1847_FRAGMENTS",
          target: "thread1847",
        }),
      ],
    });
  }

  if (action.type === "MARK_FORUM_COOKIE_MATCH") {
    if ((state.identityClueIds ?? []).length < 4) {
      return state;
    }

    return applyChapter2Completion({
      ...state,
      chapter: state.chapter < 2 ? 2 : state.chapter,
      forumCookieMatchSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E023_summer17_identity"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_summer17_is_linxia"),
      events: [
        ...state.events,
        makeEvent("SESSION_MATCH", {
          routeId: "FORUM_SESSION_MATCH",
          target: "UID1847_UID1741",
        }),
      ],
    });
  }

  if (action.type === "START_PHOTO17_FORENSICS") {
    if (!state.chapter2Complete) {
      return state;
    }

    return {
      ...state,
      chapter: 3,
      photo17ForensicsStarted: true,
      currentRouteId: "PHOTO17_FORENSICS",
      fakeUrl: "/photo/forensics/DSC0417",
      events: [
        ...state.events,
        makeEvent("OBJECT_INSPECT", {
          routeId: "PHOTO17_FORENSICS",
          target: "DSC0417.JPG",
        }),
      ],
    };
  }

  if (action.type === "COMPARE_PHOTO17") {
    if (!state.photo17ForensicsStarted) {
      return state;
    }

    let next: GameState = {
      ...state,
      photo17ComparePairs: addUnique(state.photo17ComparePairs ?? [], action.pair),
      events: [
        ...state.events,
        makeEvent("PHOTO_COMPARE", {
          routeId: "PHOTO17_COMPARE",
          target: action.pair,
        }),
      ],
    };

    if (action.pair === "web2007:current") {
      next = {
        ...next,
        knowledgeIds: addUnique(next.knowledgeIds, "knows_photo17_versions_differ"),
      };
    }

    if (action.pair === "original:20070823") {
      next = {
        ...next,
        knowledgeIds: addUnique(next.knowledgeIds, "saw_20070823_hash_difference"),
      };
    }

    if (action.pair === "2015:2016") {
      next = {
        ...next,
        evidenceIds: addUnique(next.evidenceIds, "E034_2016_artifact"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_human_first_appears_in_reconstruction"),
      };
    }

    if (action.pair === "2016:2022") {
      next = {
        ...next,
        evidenceIds: addUniqueMany(next.evidenceIds, ["E032_reconstruction_recursion", "E035_feature_persistence"]),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_reconstruction_uses_previous_generation"),
      };
    }

    return applyChapter3Completion(next);
  }

  if (action.type === "VERIFY_PHOTO17_CLUB_HASH") {
    if (!state.photo17ForensicsStarted || (state.visitCounts.PHOTO17_CLUB_FILE ?? 0) === 0) {
      return state;
    }

    return applyChapter3Completion({
      ...state,
      photo17ClubHashVerified: true,
      evidenceIds: addUnique(state.evidenceIds, "E030_photo17_original_club_copy"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_photo17_original_no_fourth_person"),
      events: [
        ...state.events,
        makeEvent("EVIDENCE_UNLOCK", {
          routeId: "PHOTO17_CLUB_FILE",
          target: "E030_photo17_original_club_copy",
        }),
      ],
    });
  }

  if (action.type === "MARK_PHOTO17_DIFFERENCE_MAP") {
    if (!state.photo17ComparePairs.includes("original:20070823")) {
      return state;
    }

    return applyChapter3Completion({
      ...state,
      photo17DifferenceMapSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E031_photo17_recovered_copy"),
      knowledgeIds: addUniqueMany(state.knowledgeIds, [
        "knows_20070823_copy_no_fourth_person",
        "knows_hash_difference_not_proof_of_edit",
      ]),
    });
  }

  if (action.type === "MARK_PHOTO17_SESSION_HISTORY") {
    return applyChapter3Completion({
      ...state,
      photo17SessionHistorySeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E033_photo17_session_variant_log"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_current_photo_is_dynamic_session_variant"),
    });
  }

  if (action.type === "CONTINUE_RECOVERY_BOOT") {
    if (!state.chapter3Complete) return state;
    return {
      ...state,
      chapter: 4,
      recoveryBootComplete: true,
      currentRouteId: "RECOVERY_LOGIN",
      fakeUrl: "/recovery/login",
      events: [...state.events, makeEvent("PAGE_VISIT", { routeId: "RECOVERY_LOGIN", target: "memory_error_seen" })],
    };
  }

  if (action.type === "ENTER_RECOVERY_DESKTOP") {
    if (!state.recoveryBootComplete) return state;
    return {
      ...state,
      chapter: 4,
      recoveryDesktopEntered: true,
      recoveryActiveApp: "desktop",
      currentRouteId: "RECOVERY_DESKTOP",
      fakeUrl: "/recovery/desktop",
      events: [...state.events, makeEvent("PAGE_VISIT", { routeId: "RECOVERY_DESKTOP", target: "recovery_shell_entered" })],
    };
  }

  if (action.type === "OPEN_RECOVERY_APP") {
    if (!state.recoveryDesktopEntered || state.recoverySuspended) return state;
    const isRawView = action.appId === "raw" && state.recoveryRawViewSeen;
    return {
      ...state,
      recoveryActiveApp: action.appId,
      recoveryWindowMode: "normal",
      recoveryOpenedAppIds: addUnique(state.recoveryOpenedAppIds ?? [], action.appId),
      evidenceIds: isRawView ? addUnique(state.evidenceIds, "E052_raw_name_mapping") : state.evidenceIds,
      knowledgeIds: isRawView ? addUnique(state.knowledgeIds, "knows_recovery_names_are_mapped") : state.knowledgeIds,
      events: [...state.events, makeEvent("RECOVERY_APP_OPEN", { routeId: "RECOVERY_DESKTOP", target: action.appId })],
    };
  }

  if (action.type === "READ_RECOVERY_FILE") {
    const knowledgeByFile: Record<string, string[]> = {
      "photo_list.txt": ["knows_photo_club_copy_was_intended"],
      "draft_0818.txt": ["knows_self_report_can_conflict_with_sources"],
      "summary_0817.txt": ["knows_generated_summary_is_not_source"],
    };
    const evidenceByFile: Record<string, string> = {
      "draft_0818.txt": "E050_draft_0818_self_report",
      "summary_0817.txt": "E053_generated_summary_example",
    };
    const evidenceId = evidenceByFile[action.fileId];
    return applyChapter4Completion({
      ...state,
      recoveryFileIdsSeen: addUnique(state.recoveryFileIdsSeen ?? [], action.fileId),
      evidenceIds: evidenceId ? addUnique(state.evidenceIds, evidenceId) : state.evidenceIds,
      knowledgeIds: addUniqueMany(state.knowledgeIds, knowledgeByFile[action.fileId] ?? []),
    });
  }

  if (action.type === "MARK_RECOVERY_SORT_POLICY") {
    return {
      ...state,
      recoverySortPolicySeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E054_relevance_sort_policy"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_sort_order_is_interpretation"),
    };
  }

  if (action.type === "READ_RECOVERY_RECYCLE_ITEM") {
    const isMail = action.itemId === "mail_unsent.eml";
    return {
      ...state,
      recoveryRecycleItemIdsSeen: addUnique(state.recoveryRecycleItemIdsSeen ?? [], action.itemId),
      evidenceIds: isMail ? addUnique(state.evidenceIds, "E051_mail_unsent_0203") : state.evidenceIds,
      knowledgeIds: isMail ? addUnique(state.knowledgeIds, "knows_unsent_mail_is_not_farewell") : state.knowledgeIds,
    };
  }

  if (action.type === "PLAY_RECOVERY_TRACK") {
    return {
      ...state,
      recoveryPlayerTrackIdsPlayed: addUnique(state.recoveryPlayerTrackIdsPlayed ?? [], action.trackId),
      events: [...state.events, makeEvent("RECOVERY_APP_OPEN", { routeId: "RECOVERY_DESKTOP", target: `player:${action.trackId}` })],
    };
  }

  if (action.type === "SUSPEND_RECOVERY") {
    if (!state.recoveryDesktopEntered) return state;
    return { ...state, recoverySuspended: true, recoveryWindowMode: "minimized", events: [...state.events, makeEvent("RECOVERY_APP_OPEN", { routeId: "RECOVERY_DESKTOP", target: "environment:suspend" })] };
  }

  if (action.type === "RESUME_RECOVERY") {
    if (!state.recoveryDesktopEntered) return state;
    return { ...state, recoverySuspended: false, recoveryWindowMode: "normal", events: [...state.events, makeEvent("RECOVERY_APP_OPEN", { routeId: "RECOVERY_DESKTOP", target: "environment:resume" })] };
  }

  if (action.type === "RESTART_RECOVERY_UI") {
    if (!state.recoveryDesktopEntered) return state;
    return { ...state, recoverySuspended: false, recoveryActiveApp: "desktop", recoveryWindowMode: "normal", recoveryRestartCount: state.recoveryRestartCount + 1, events: [...state.events, makeEvent("RECOVERY_APP_OPEN", { routeId: "RECOVERY_DESKTOP", target: "environment:restart_ui_only" })] };
  }

  if (action.type === "SET_RECOVERY_WINDOW_MODE") {
    if (!state.recoveryDesktopEntered || state.recoverySuspended) return state;
    return { ...state, recoveryWindowMode: action.mode };
  }

  if (action.type === "MARK_RECOVERY_CALENDAR_SESSION") {
    return applyChapter4Completion({
      ...state,
      recoveryCalendarSessionSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E043_calendar_observer_events"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_calendar_contains_observer_data"),
    });
  }

  if (action.type === "MARK_RECOVERY_INFO") {
    return applyChapter4Completion({
      ...state,
      recoveryInfoSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E041_recovery_environment_build"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_desktop_is_recovery_shell"),
    });
  }

  if (action.type === "MARK_RECOVERY_MESSENGER_MAPPING") {
    return applyChapter4Completion({
      ...state,
      recoveryMessengerMappingSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E042_messenger_source_mapping"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_messenger_is_aggregated_view"),
    });
  }

  if (action.type === "READ_RECOVERY_MESSAGE") {
    const evidenceByThread: Record<string, string[]> = {
      周然: ["E060_zhou_cache_conflict"],
      顾言: ["E061_guyan_original_confirmation", "E064_linked_email_cache"],
      摄影社群: ["E062_group_event_message"],
      leaf: ["E063_forum_pm_mapping"],
      night_train: ["E063_forum_pm_mapping"],
      Unknown: ["E048_unknown_current_session_source"],
    };
    const knowledgeByThread: Record<string, string[]> = {
      周然: ["knows_messenger_conflict_is_ambiguous"],
      顾言: ["knows_guyan_has_originals", "knows_linked_email_is_distinct_source"],
      摄影社群: ["knows_group_cache_confirms_event"],
      leaf: ["knows_messenger_is_aggregated_view"],
      night_train: ["knows_messenger_is_aggregated_view"],
      Unknown: ["knows_unknown_not_original_contact"],
    };
    return applyChapter4Completion({
      ...state,
      recoveryMessageThreadIdsSeen: addUnique(state.recoveryMessageThreadIdsSeen ?? [], action.threadId),
      recoveryUnknownSourceSeen: action.threadId === "Unknown" ? true : state.recoveryUnknownSourceSeen,
      evidenceIds: addUniqueMany(state.evidenceIds, evidenceByThread[action.threadId] ?? []),
      knowledgeIds: addUniqueMany(state.knowledgeIds, knowledgeByThread[action.threadId] ?? []),
    });
  }

  if (action.type === "MARK_RECOVERY_CALENDAR_LAYER") {
    const evidenceByLayer = { personal: "E070_personal_calendar", recovered: "E071_recovery_calendar_layer", session: "E072_session_calendar_layer" } as const;
    const knowledgeByLayer = { personal: "knows_calendar_personal_layer", recovered: "knows_calendar_recovery_layer", session: "knows_calendar_session_layer" } as const;
    const isSession = action.layer === "session";
    return applyChapter4Completion({
      ...state,
      recoveryCalendarLayersSeen: addUnique(state.recoveryCalendarLayersSeen ?? [], action.layer),
      recoveryCalendarSessionSeen: isSession ? true : state.recoveryCalendarSessionSeen,
      evidenceIds: addUniqueMany(state.evidenceIds, [evidenceByLayer[action.layer], ...(action.layer === "recovered" ? ["E073_recovery_anchor_0317"] : []), ...(action.layer === "personal" ? ["E074_calendar_empty_0818"] : [])]),
      knowledgeIds: addUniqueMany(state.knowledgeIds, [knowledgeByLayer[action.layer], ...(action.layer === "session" ? ["knows_calendar_contains_observer_data"] : []), ...(action.layer === "recovered" ? ["knows_0317_is_recovery_anchor"] : []), ...(action.layer === "personal" ? ["knows_calendar_absence_is_not_fact"] : [])]),
    });
  }

  if (action.type === "RUN_RECOVERY_TERMINAL") {
    const command = action.command.trim().toLowerCase();
    let next: GameState = {
      ...state,
      events: [...state.events, makeEvent("TERMINAL_COMMAND", { routeId: "RECOVERY_DESKTOP", target: command })],
    };

    if (command === "type environment.manifest") {
      next = {
        ...next,
        recoveryManifestSeen: true,
        evidenceIds: addUnique(next.evidenceIds, "E044_environment_manifest"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_environment_manifest"),
      };
    }
    if (command === "type recovery.log") {
      next = {
        ...next,
        recoveryLogSeen: true,
        evidenceIds: addUnique(next.evidenceIds, "E045_recovery_log"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_ui_continuity_is_constructed"),
      };
    }
    if (command === "memory status") {
      next = {
        ...next,
        recoveryMemoryStatusSeen: true,
        evidenceIds: addUnique(next.evidenceIds, "E046_persona_memory_graph"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_memory_error_is_persona_graph"),
      };
    }
    if (command === "mount raw" && next.recoveryManifestSeen && next.recoveryLogSeen) {
      next = {
        ...next,
        recoveryRawViewSeen: true,
        evidenceIds: addUniqueMany(next.evidenceIds, ["E047_raw_vs_shell", "E052_raw_name_mapping"]),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_raw_directory_differs_from_shell", "knows_recovery_names_are_mapped"]),
      };
    }
    if (command === "source msg:leaf:0003" || command === "source msg:leaf" || command === "source msg:night_train") {
      next = {
        ...next,
        recoveryMessengerMappingSeen: true,
        evidenceIds: addUnique(next.evidenceIds, "E042_messenger_source_mapping"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_messenger_is_aggregated_view"),
      };
    }
    if (command === "source msg:guyan") {
      next = {
        ...next,
        recoveryMessageThreadIdsSeen: addUnique(next.recoveryMessageThreadIdsSeen ?? [], "顾言"),
        evidenceIds: addUniqueMany(next.evidenceIds, ["E061_guyan_original_confirmation", "E064_linked_email_cache"]),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_guyan_has_originals", "knows_linked_email_is_distinct_source"]),
      };
    }
    if (command === "source calendar:2007") {
      next = {
        ...next,
        recoveryCalendarLayersSeen: addUnique(next.recoveryCalendarLayersSeen ?? [], "personal"),
        evidenceIds: addUniqueMany(next.evidenceIds, ["E070_personal_calendar", "E074_calendar_empty_0818"]),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_calendar_personal_layer", "knows_calendar_absence_is_not_fact"]),
      };
    }
    if (command === "source calendar:session") {
      next = {
        ...next,
        recoveryCalendarSessionSeen: true,
        recoveryCalendarLayersSeen: addUnique(next.recoveryCalendarLayersSeen ?? [], "session"),
        evidenceIds: addUniqueMany(next.evidenceIds, ["E043_calendar_observer_events", "E072_session_calendar_layer"]),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_calendar_contains_observer_data", "knows_calendar_session_layer"]),
      };
    }
    if (command === "object player_post_001" && next.playerPostCreated) {
      next = {
        ...next,
        playerPostCompareSeen: next.playerPostMutationSeen ? true : next.playerPostCompareSeen,
        evidenceIds: next.playerPostMutationSeen ? addUnique(next.evidenceIds, "E113_player_post_compare") : next.evidenceIds,
        knowledgeIds: addUnique(next.knowledgeIds, "knows_player_authored_text_entered_room_graph"),
      };
    }
    if (command === "source msg:unknown") {
      next = {
        ...next,
        recoveryUnknownSourceSeen: true,
        evidenceIds: addUnique(next.evidenceIds, "E048_unknown_current_session_source"),
        knowledgeIds: addUnique(next.knowledgeIds, "knows_unknown_not_original_contact"),
      };
    }

    if (command === "service continuity" || command === "service continuity --details") {
      if (!state.chapter4Complete) return state;
      next = {
        ...next,
        chapter: 5,
        continuityServiceStarted: true,
        currentRouteId: "CONTINUITY_SERVICE",
        fakeUrl: "/service/continuity",
      };
    }
    if (command === "service room") {
      next = inspectRoomDefinition(next);
    }
    if (command === "service continuity --history") {
      next = { ...next, currentRouteId: "ROOM_HISTORY", fakeUrl: "/service/history" };
    }
    if (command === "service unresolved" || command === "object unknown") {
      next = inspectUnresolvedPersona(next);
    }
    if (command === "service observer --details") {
      next = inspectObserverModel(next);
    }
    if (command === "object subject_404" && next.continuityServiceStarted) {
      next = {
        ...next,
        subject404MigrationSeen: true,
        currentRouteId: "SUBJECT404_OBJECT",
        fakeUrl: "/object/SUBJECT_404",
        evidenceIds: addUnique(next.evidenceIds, "E086_subject04_to_404"),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_subject04_to_404", "knows_404_name_is_migration_artifact"]),
      };
    }
    if ((command === "object current_observer" || command === "object observer_405") && isObserverCandidateAvailable(next)) {
      next = {
        ...next,
        observer405Seen: true,
        currentRouteId: "OBSERVER_CANDIDATE",
        fakeUrl: "/service/observer/candidate",
        evidenceIds: addUnique(next.evidenceIds, "E091_observer_405_candidate"),
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_405_is_observer_model_id", "knows_observer_is_not_yet_subject"]),
      };
    }
    if (command === "resolution status" && next.chapter5Complete) {
      next = { ...next, chapter: 6, currentRouteId: "FINAL_REVIEW", fakeUrl: "/resolution/review" };
    }

    return applyChapter5Completion(applyChapter4Completion(next));
  }

  if (action.type === "START_CONTINUITY_SERVICE") {
    if (!state.chapter4Complete) return state;
    return {
      ...state,
      chapter: 5,
      continuityServiceStarted: true,
      currentRouteId: "CONTINUITY_SERVICE",
      fakeUrl: "/service/continuity",
      events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "CONTINUITY_SERVICE", target: "continuity" })],
    };
  }

  if (action.type === "INSPECT_ROOM_DEFINITION") {
    return applyChapter5Completion(inspectRoomDefinition(state));
  }

  if (action.type === "VIEW_ROOM_HISTORY_YEAR") {
    if (!state.continuityServiceStarted) return state;
    const evidenceByYear: Partial<Record<number, string>> = {
      2011: "E081_subject04_2011_import",
      2012: "E082_room_naming_2012",
      2013: "E092_generated_label_policy",
      2014: "E083_2014_reconstruction_artifact",
      2015: "E084_persona_continuity_model",
      2016: "E084_persona_continuity_model",
      2017: "E085_generated_ethics_review",
      2018: "E093_automated_maintenance",
      2020: "E094_modern_archive_frontend",
      2022: "E086_subject04_to_404",
      2025: "E087_default_subject_404",
      2026: "E095_current_observer_attachment",
    };
    const evidenceId = evidenceByYear[action.year];
    let next: GameState = {
      ...state,
      roomHistoryYearsSeen: addUnique(state.roomHistoryYearsSeen ?? [], action.year),
      evidenceIds: evidenceId ? addUnique(state.evidenceIds, evidenceId) : state.evidenceIds,
      events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "ROOM_HISTORY", target: `history_${action.year}` })],
    };
    if (action.year === 2011) {
      next = { ...next, knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_room_began_as_archive_research", "knows_subject04_is_linxia_context"]) };
    }
    if (action.year === 2022) {
      next = {
        ...next,
        subject404MigrationSeen: true,
        knowledgeIds: addUniqueMany(next.knowledgeIds, ["knows_subject04_to_404", "knows_404_name_is_migration_artifact"]),
      };
    }
    if (action.year === 2013) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_generated_labels_are_required") };
    }
    if (action.year === 2015) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_ui_continuity_is_constructed") };
    }
    if (action.year === 2017) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_generated_fit_not_history") };
    }
    if (action.year === 2018) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_reconstruction_can_continue_without_review") };
    }
    if (action.year === 2020) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_modern_archive_is_later_frontend") };
    }
    if (action.year === 2025) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_default_subject_not_personal_selection") };
    }
    if (action.year === 2026) {
      next = { ...next, knowledgeIds: addUnique(next.knowledgeIds, "knows_current_observer_attached_to_subject_context") };
    }
    return applyChapter5Completion(next);
  }

  if (action.type === "INSPECT_UNRESOLVED_PERSONA") {
    return applyChapter5Completion(inspectUnresolvedPersona(state));
  }

  if (action.type === "INSPECT_OBSERVER_MODEL") {
    return applyChapter5Completion(inspectObserverModel(state));
  }

  if (action.type === "CORRECT_OBSERVER_INFERENCE") {
    if (!state.observerModelSeen) return state;
    return applyChapter5Completion({
      ...state,
      observerInferenceCorrected: true,
      observerInferenceChoice: "incorrect",
      evidenceIds: addUnique(state.evidenceIds, "E090_observer_inference_correction"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_observer_model_can_be_wrong"),
      events: [...state.events, makeEvent("INFERENCE_CORRECTED", { routeId: "OBSERVER_INFERENCES", target: "zhou_suspicion" })],
    });
  }

  if (action.type === "SET_OBSERVER_INFERENCE") {
    if (!state.observerModelSeen) return state;
    if (action.choice === "incorrect") {
      return applyChapter5Completion({
        ...state,
        observerInferenceCorrected: true,
        observerInferenceChoice: action.choice,
        evidenceIds: addUnique(state.evidenceIds, "E090_observer_inference_correction"),
        knowledgeIds: addUnique(state.knowledgeIds, "knows_observer_model_can_be_wrong"),
        events: [...state.events, makeEvent("INFERENCE_RESPONSE", { routeId: "OBSERVER_INFERENCES", target: action.choice })],
      });
    }
    return applyChapter5Completion({
      ...state,
      observerInferenceChoice: action.choice,
      events: [...state.events, makeEvent("INFERENCE_RESPONSE", { routeId: "OBSERVER_INFERENCES", target: action.choice })],
    });
  }

  if (action.type === "INSPECT_OBSERVER_CANDIDATE") {
    if (!isObserverCandidateAvailable(state)) return state;
    return applyChapter5Completion({
      ...state,
      observer405Seen: true,
      evidenceIds: addUnique(state.evidenceIds, "E091_observer_405_candidate"),
      knowledgeIds: addUniqueMany(state.knowledgeIds, ["knows_405_is_observer_model_id", "knows_observer_is_not_yet_subject", "knows_current_observer_model_is_forming"]),
      events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "OBSERVER_CANDIDATE", target: "observer_405" })],
    });
  }

  if (action.type === "START_FINAL_REVIEW") {
    if (!state.chapter5Complete) return state;
    return {
      ...state,
      chapter: 6,
      currentRouteId: "FINAL_REVIEW",
      fakeUrl: "/resolution/review",
      events: [...state.events, makeEvent("FINAL_REVIEW", { routeId: "FINAL_REVIEW", target: "started" })],
    };
  }

  if (action.type === "VIEW_FINAL_GENERATED_SAMPLE") {
    if (!state.chapter5Complete) return state;
    return applyFinalReviewCompletion({
      ...state,
      chapter: 6,
      finalGeneratedSampleSeen: true,
      currentRouteId: "FINAL_GENERATED_SAMPLE",
      fakeUrl: "/resolution/review/generated",
      evidenceIds: addUnique(state.evidenceIds, "E100_generated_final_sample"),
    });
  }

  if (action.type === "SET_FINAL_GENERATED_DECISION") {
    if (!state.finalGeneratedSampleSeen || state.finalGeneratedSourceChecked) return state;
    return {
      ...state,
      finalGeneratedDecision: action.decision,
      events: [...state.events, makeEvent("FINAL_GENERATED_DECISION", { routeId: "FINAL_GENERATED_SAMPLE", target: action.decision })],
    };
  }

  if (action.type === "CHECK_FINAL_GENERATED_SOURCE") {
    if (!state.finalGeneratedSampleSeen || !state.finalGeneratedDecision) return state;
    return applyFinalReviewCompletion({
      ...state,
      finalGeneratedSourceChecked: true,
      knowledgeIds: addUnique(state.knowledgeIds, "knows_generated_can_be_high_fit"),
    });
  }

  if (action.type === "VIEW_FINAL_SOURCE_BOUNDARY") {
    if (!state.finalGeneratedSourceChecked) return state;
    return applyFinalReviewCompletion({
      ...state,
      finalSourceBoundarySeen: true,
      currentRouteId: "FINAL_SOURCE_BOUNDARY",
      fakeUrl: "/resolution/review/source-boundary",
      evidenceIds: addUnique(state.evidenceIds, "E101_real_world_source_boundary"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_linxia_fate_unresolved"),
    });
  }

  if (action.type === "COMPLETE_FINAL_OBSERVER_REVIEW") {
    if (!state.finalSourceBoundarySeen) return state;
    return applyFinalReviewCompletion({
      ...state,
      finalObserverReviewDone: true,
      finalObserverInferenceChoice: action.choice,
      evidenceIds: addUnique(state.evidenceIds, "E102_observer405_final_inference"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_observer405_not_self"),
      events: [...state.events, makeEvent("FINAL_REVIEW", { routeId: "FINAL_OBSERVER_REVIEW", target: action.choice })],
    });
  }

  if (action.type === "COMPLETE_FINAL_UNKNOWN_DIALOGUE") {
    if (!state.finalObserverReviewDone) return state;
    return applyFinalReviewCompletion({
      ...state,
      finalUnknownChoice: action.choice,
      events: [...state.events, makeEvent("FINAL_REVIEW", { routeId: "FINAL_OBSERVER_REVIEW", target: `unknown:${action.choice}` })],
    });
  }

  if (action.type === "OPEN_RESOLUTION_CENTER") {
    if (!state.finalReviewComplete || !state.finalUnknownChoice || state.resolutionApplied) return state;
    return createFinalCheckpoint({
      ...state,
      currentRouteId: "RESOLUTION_CENTER",
      fakeUrl: "/resolution",
    });
  }

  if (action.type === "SELECT_RESOLUTION") {
    if (state.resolutionApplied || !state.finalReviewComplete || (action.endingId === "ARCHIVIST" && !isArchivistAvailable(state))) return state;
    return {
      ...state,
      selectedResolution: action.endingId,
      currentRouteId: "RESOLUTION_CENTER",
      fakeUrl: "/resolution",
      evidenceIds: addUnique(state.evidenceIds, "E103_resolution_impact_preview"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_resolution_affects_models_not_reality"),
    };
  }

  if (action.type === "APPLY_RESOLUTION") {
    if (state.resolutionApplied || !state.finalReviewComplete || state.selectedResolution !== action.endingId || (action.endingId === "ARCHIVIST" && !isArchivistAvailable(state))) return state;
    const checkpointState = createFinalCheckpoint(state);
    return {
      ...checkpointState,
      chapter: 6,
      resolutionApplied: true,
      endingId: action.endingId,
      seenEndingIds: addUnique(checkpointState.seenEndingIds ?? [], action.endingId),
      currentRouteId: "ENDING_STATE",
      fakeUrl: "/resolution/state",
      evidenceIds: addUnique(checkpointState.evidenceIds, "E105_final_resolution_record"),
      knowledgeIds: addUniqueMany(checkpointState.knowledgeIds, ["knows_source_archive_preserved", "knows_resolution_affects_models_not_reality"]),
      events: [...checkpointState.events, makeEvent("RESOLUTION_APPLIED", { routeId: "ENDING_STATE", target: action.endingId })],
    };
  }

  if (action.type === "RESTORE_FINAL_CHECKPOINT") {
    if (!state.finalCheckpointCreated || !state.resolutionApplied) return state;
    return {
      ...state,
      selectedResolution: "",
      resolutionApplied: false,
      endingId: "",
      finalCheckpointRestoreCount: state.finalCheckpointRestoreCount + 1,
      currentRouteId: "RESOLUTION_CENTER",
      fakeUrl: "/resolution",
      events: [...state.events, makeEvent("CHECKPOINT_RESTORED", { routeId: "RESOLUTION_CENTER", target: "FINAL_CHECKPOINT" })],
    };
  }

  if (action.type === "CREATE_PLAYER_POST") {
    if (state.playerPostCreated || state.chapter < 2) return state;
    return {
      ...state,
      playerPostCreated: true,
      playerPostOriginalTitle: action.title,
      playerPostOriginalBody: action.body,
      playerPostDisplayVersion: "original",
      currentRouteId: "FORUM_PLAYER_POST",
      fakeUrl: "/forum/thread/PLAYER_POST_001",
      evidenceIds: addUnique(state.evidenceIds, "E110_player_post_original"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_player_post_original_is_immutable"),
      events: [...state.events, makeEvent("PLAYER_POST_CREATED", { routeId: "FORUM_PLAYER_POST", target: "PLAYER_POST_001" })],
    };
  }

  if (action.type === "MARK_PLAYER_POST_EXIT") {
    if (!state.playerPostCreated) return state;
    return {
      ...state,
      playerPostViewDesyncSeen: true,
      evidenceIds: addUnique(state.evidenceIds, "E111_player_post_view_desync"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_session_view_is_not_archive_view"),
      events: [...state.events, makeEvent("PLAYER_POST_VIEW_DESYNC", { routeId: "FORUM_PLAYER_POST", target: "session_view_1_archive_view_0" })],
    };
  }

  if (action.type === "VIEW_PLAYER_POST_MUTATION") {
    if (!state.playerPostCreated || state.chapter < 3) return state;
    return {
      ...state,
      playerPostMutationSeen: true,
      playerPostDisplayVersion: "mutation_1",
      evidenceIds: addUnique(state.evidenceIds, "E112_player_post_variant"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_player_post_mutation_creates_version"),
      events: [...state.events, makeEvent("PLAYER_POST_MUTATION", { routeId: "FORUM_PLAYER_POST", target: "ROOM_SESSION_VARIANT_001" })],
    };
  }

  if (action.type === "VIEW_PLAYER_POST_MUTATION_2") {
    if (!state.playerPostMutationSeen || state.chapter < 4 || state.playerPostDeleted) return state;
    return {
      ...state,
      playerPostMutation2Seen: true,
      playerPostDisplayVersion: "mutation_2",
      events: [...state.events, makeEvent("PLAYER_POST_MUTATION", { routeId: "FORUM_PLAYER_POST", target: "ROOM_SESSION_VARIANT_002" })],
    };
  }

  if (action.type === "COMPARE_PLAYER_POST") {
    if (!state.playerPostMutationSeen) return state;
    return {
      ...state,
      playerPostCompareSeen: true,
      currentRouteId: "FORUM_PLAYER_POST_COMPARE",
      fakeUrl: "/forum/thread/PLAYER_POST_001/compare",
      evidenceIds: addUnique(state.evidenceIds, "E113_player_post_compare"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_player_post_versions_are_distinct"),
    };
  }

  if (action.type === "EDIT_PLAYER_POST") {
    if (!state.playerPostCreated || state.playerPostDeleted || action.title.trim().length < 2 || action.title.trim().length > 40 || action.body.trim().length < 1 || action.body.trim().length > 500) return state;
    return {
      ...state,
      playerPostEditedTitle: action.title.trim(),
      playerPostEditedBody: action.body.trim(),
      playerPostDisplayVersion: "player_edit",
      currentRouteId: "FORUM_PLAYER_POST",
      fakeUrl: "/forum/thread/PLAYER_POST_001",
      events: [...state.events, makeEvent("PLAYER_POST_EDIT", { routeId: "FORUM_PLAYER_POST", target: "PLAYER_EDIT_001" })],
    };
  }

  if (action.type === "RESTORE_PLAYER_POST_ORIGINAL") {
    if (!state.playerPostCreated || state.playerPostDeleted) return state;
    return {
      ...state,
      playerPostDisplayVersion: "original",
      playerPostRestoreOriginalSeen: true,
      knowledgeIds: addUnique(state.knowledgeIds, "knows_player_can_restore_original_view"),
      events: [...state.events, makeEvent("PLAYER_POST_RESTORE_ORIGINAL", { routeId: "FORUM_PLAYER_POST", target: "PLAYER_ORIGINAL" })],
    };
  }

  if (action.type === "PRESERVE_PLAYER_POST_ORIGINAL") {
    if (!state.playerPostCreated) return state;
    return {
      ...state,
      playerPostOriginalPreserved: true,
      knowledgeIds: addUnique(state.knowledgeIds, "knows_player_post_original_is_immutable"),
      events: [...state.events, makeEvent("PLAYER_POST_PRESERVE_ORIGINAL", { routeId: "FORUM_PLAYER_POST_COMPARE", target: "PLAYER_ORIGINAL" })],
    };
  }

  if (action.type === "DELETE_PLAYER_POST") {
    if (!state.playerPostCreated || state.playerPostDeleted) return state;
    return {
      ...state,
      playerPostDeleted: true,
      currentRouteId: "FORUM_PLAYER_POST",
      fakeUrl: "/forum/thread/PLAYER_POST_001",
      knowledgeIds: addUnique(state.knowledgeIds, "knows_deletion_does_not_erase_archive"),
      events: [...state.events, makeEvent("PLAYER_POST_DELETE", { routeId: "FORUM_PLAYER_POST", target: "410_GONE" })],
    };
  }

  if (action.type === "VIEW_PLAYER_POST_ARCHIVE") {
    if (!state.playerPostDeleted) return state;
    return {
      ...state,
      playerPostArchivedCopySeen: true,
      currentRouteId: "FORUM_PLAYER_POST_ARCHIVE",
      fakeUrl: "/archive/forum/thread/PLAYER_POST_001",
      evidenceIds: addUnique(state.evidenceIds, "E114_player_post_archived_after_delete"),
      knowledgeIds: addUnique(state.knowledgeIds, "knows_deletion_does_not_erase_archive"),
      events: [...state.events, makeEvent("EVIDENCE_UNLOCK", { routeId: "FORUM_PLAYER_POST_ARCHIVE", target: "E114_player_post_archived_after_delete" })],
    };
  }

  const next = applyRouteEffects(
    {
      ...state,
      currentRouteId: action.payload.routeId,
      fakeUrl: action.payload.fakeUrl,
      searchQuery: action.payload.query ?? state.searchQuery,
    },
    action.payload.routeId,
  );

  return next;
}

function applyRouteEffects(state: GameState, routeId: RouteId): GameState {
  const nextVisitCounts = {
    ...state.visitCounts,
    [routeId]: (state.visitCounts[routeId] ?? 0) + 1,
  };

  let next: GameState = {
    ...state,
    visitCounts: nextVisitCounts,
    events: [
      ...state.events,
      makeEvent("PAGE_VISIT", {
        routeId,
      }),
    ],
  };

  if (routeId === "CONTINUITY_SERVICE" && state.chapter4Complete) {
    next = { ...next, chapter: 5, continuityServiceStarted: true };
  }

  if (routeId === "FINAL_REVIEW" && state.chapter5Complete) {
    next = { ...next, chapter: 6 };
  }

  if (routeId === "RESOLUTION_CENTER" && state.finalReviewComplete && !state.resolutionApplied) {
    next = createFinalCheckpoint(next);
  }

  if (routeId === "CREDITS" && state.resolutionApplied && state.endingId) {
    next = { ...next, creditsSeen: true };
  }

  if (routeId === "FORUM_PLAYER_POST_ARCHIVE" && state.playerPostDeleted) {
    next = {
      ...next,
      playerPostArchivedCopySeen: true,
      evidenceIds: addUnique(next.evidenceIds, "E114_player_post_archived_after_delete"),
      knowledgeIds: addUnique(next.knowledgeIds, "knows_deletion_does_not_erase_archive"),
    };
  }

  if (routeId === "OBSERVER_AUTHORED_OBJECT" && state.playerPostCreated) {
    next = {
      ...next,
      knowledgeIds: addUnique(next.knowledgeIds, "knows_player_authored_text_entered_room_graph"),
    };
  }

  if (routeId === "PHOTO17") {
    const visits = state.photo17Visits + 1;
    next = {
      ...next,
      photo17Visits: visits,
      events: [
        ...next.events,
        makeEvent("PHOTO_VIEW", {
          routeId,
          target: "photo17",
        }),
      ],
    };
  }

  if (routeId === "SCHOOL_NOTICE_V1") {
    next = {
      ...next,
      viewedCaptures: addUnique(next.viewedCaptures, "20070815"),
    };
  }

  if (routeId === "SCHOOL_NOTICE_V2") {
    next = {
      ...next,
      viewedCaptures: addUnique(next.viewedCaptures, "20070819"),
    };
  }

  if (routeId === "LINXIA_0817_PRIVATE") {
    next = {
      ...next,
      evidenceIds: addUnique(next.evidenceIds, "E014_private_0817"),
      knowledgeIds: addUniqueMany(next.knowledgeIds, [
        "knows_linxia_attended_event",
        "knows_zhouran_requested_delete",
        "knows_guyan_has_originals",
      ]),
      events: [
        ...next.events,
        makeEvent("EVIDENCE_UNLOCK", {
          routeId,
          target: "E014_private_0817",
        }),
      ],
    };
  }

  if (routeId === "LINXIA_BACKUP_ZIP") {
    next = {
      ...next,
      backup403Seen: true,
    };
  }

  if (routeId === "PHOTO17_VERSION_2015" && next.photo17ForensicsStarted) {
    next = {
      ...next,
      knowledgeIds: addUnique(next.knowledgeIds, "knows_2015_restore_no_confirmed_human"),
    };
  }

  if (
    routeId === "BLUEMOON_ARCHIVE" ||
    routeId === "FORUM_HOME" ||
    routeId === "FORUM_USER_1847" ||
    routeId === "FORUM_THREAD_1847" ||
    routeId === "FORUM_THREAD_1847_FRAGMENTS" ||
    routeId === "FORUM_SESSION_1847" ||
    routeId === "FORUM_SESSION_MATCH"
  ) {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
    };
  }

  if (routeId === "FORUM_THREAD_1738") {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
      identityClueIds: addUnique(next.identityClueIds ?? [], "original_edit_web"),
      knowledgeIds: addUnique(next.knowledgeIds, "identity_clue_original_edit_web"),
    };
  }

  if (routeId === "FORUM_THREAD_1711") {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
      summer17ThreadIdsRead: addUnique(next.summer17ThreadIdsRead ?? [], "1711"),
      identityClueIds: addUnique(next.identityClueIds ?? [], "language"),
    };
  }

  if (routeId === "FORUM_THREAD_1738") {
    next = {
      ...next,
      summer17ThreadIdsRead: addUnique(next.summer17ThreadIdsRead ?? [], "1738"),
    };
  }

  if (routeId === "FORUM_THREAD_1682") {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
      summer17ThreadIdsRead: addUnique(next.summer17ThreadIdsRead ?? [], "1682"),
    };
  }

  if (routeId === "FORUM_THREAD_1792") {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
      summer17ThreadIdsRead: addUnique(next.summer17ThreadIdsRead ?? [], "1792"),
    };
  }

  if (routeId === "FORUM_THREAD_1816") {
    next = {
      ...next,
      chapter: next.chapter < 2 ? 2 : next.chapter,
      summer17ThreadIdsRead: addUnique(next.summer17ThreadIdsRead ?? [], "1816"),
      identityClueIds: addUnique(next.identityClueIds ?? [], "camera"),
    };
  }

  if (
    (next.visitCounts.FORUM_THREAD_1682 ?? 0) > 0 &&
    (next.visitCounts.LINXIA_DIARY ?? 0) > 0
  ) {
    next = {
      ...next,
      identityClueIds: addUnique(next.identityClueIds ?? [], "event_language_crossmatch"),
      knowledgeIds: addUnique(next.knowledgeIds, "identity_clue_language_overlap"),
    };
  }

  if (next.viewedCaptures.includes("20070815") && next.viewedCaptures.includes("20070819")) {
    next = {
      ...next,
      evidenceIds: addUniqueMany(next.evidenceIds, [
        "E001_school_original_notice",
        "E002_school_modified_notice",
      ]),
      knowledgeIds: addUnique(next.knowledgeIds, "knows_event_date_changed"),
    };
  }

  if (
    next.knowledgeIds.includes("knows_event_date_changed") &&
    next.evidenceIds.includes("E014_private_0817") &&
    next.backup403Seen &&
    !next.chapter1Complete
  ) {
    next = {
      ...next,
      chapter1Complete: true,
      events: [
        ...next.events,
        makeEvent("CHAPTER_COMPLETE", {
          routeId,
          target: "chapter_01",
        }),
      ],
    };
  }

  return applyFinalReviewCompletion(applyChapter5Completion(applyChapter4Completion(applyChapter3Completion(applyChapter2Completion(next)))));
}

function inspectRoomDefinition(state: GameState): GameState {
  if (!state.continuityServiceStarted) return state;
  return {
    ...state,
    roomFullNameSeen: true,
    currentRouteId: "ROOM_ABOUT",
    fakeUrl: "/service/room",
    evidenceIds: addUnique(state.evidenceIds, "E080_room_full_name"),
    knowledgeIds: addUnique(state.knowledgeIds, "knows_room_full_name"),
    events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "ROOM_ABOUT", target: "room_definition" })],
  };
}

function inspectUnresolvedPersona(state: GameState): GameState {
  if (!state.continuityServiceStarted) return state;
  return {
    ...state,
    unresolvedPersonaSeen: true,
    currentRouteId: "UNRESOLVED_PERSONA_OBJECT",
    fakeUrl: "/object/UNRESOLVED_PERSONA",
    evidenceIds: addUnique(state.evidenceIds, "E088_unresolved_persona"),
    knowledgeIds: addUniqueMany(state.knowledgeIds, ["knows_unknown_is_unresolved_persona", "knows_unknown_uses_mixed_sources"]),
    events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "UNRESOLVED_PERSONA_OBJECT", target: "unresolved_persona" })],
  };
}

function inspectObserverModel(state: GameState): GameState {
  if (!state.continuityServiceStarted) return state;
  return {
    ...state,
    observerModelSeen: true,
    currentRouteId: "OBSERVER_SERVICE",
    fakeUrl: "/service/observer",
    evidenceIds: addUnique(state.evidenceIds, "E089_observer_model"),
    knowledgeIds: addUniqueMany(state.knowledgeIds, ["knows_observer_model_tracks_game_behavior", "knows_observer_model_is_forming"]),
    events: [...state.events, makeEvent("SERVICE_INSPECT", { routeId: "OBSERVER_SERVICE", target: "current_observer" })],
  };
}

function isObserverCandidateAvailable(state: GameState): boolean {
  const requiredYears = [2011, 2012, 2014, 2016, 2022, 2026];
  return state.roomFullNameSeen &&
    requiredYears.every((year) => (state.roomHistoryYearsSeen ?? []).includes(year)) &&
    state.subject404MigrationSeen &&
    state.unresolvedPersonaSeen &&
    state.observerModelSeen &&
    state.observerInferenceCorrected;
}

function isArchivistAvailable(state: GameState): boolean {
  return state.recoveryRawViewSeen && state.recoveryUnknownSourceSeen && state.finalGeneratedSourceChecked;
}

function applyChapter5Completion(state: GameState): GameState {
  const completed = state.roomFullNameSeen &&
    state.subject404MigrationSeen &&
    state.unresolvedPersonaSeen &&
    state.observerModelSeen &&
    state.observerInferenceCorrected &&
    state.observer405Seen;

  if (completed && !state.chapter5Complete) {
    return {
      ...state,
      chapter: 5,
      chapter5Complete: true,
      events: [...state.events, makeEvent("CHAPTER_COMPLETE", { routeId: "OBSERVER_CANDIDATE", target: "chapter_05" })],
    };
  }
  return state;
}

function applyFinalReviewCompletion(state: GameState): GameState {
  const completed = state.finalGeneratedSampleSeen &&
    state.finalGeneratedSourceChecked &&
    state.finalSourceBoundarySeen &&
    state.finalObserverReviewDone &&
    Boolean(state.finalUnknownChoice);
  return completed ? { ...state, finalReviewComplete: true } : state;
}

function createFinalCheckpoint(state: GameState): GameState {
  if (state.finalCheckpointCreated) return state;
  const createdAt = new Date().toISOString();
  return {
    ...state,
    finalCheckpointCreated: true,
    finalCheckpointCreatedAt: createdAt,
    events: [...state.events, makeEvent("CHECKPOINT_CREATED", { routeId: "RESOLUTION_CENTER", target: "FINAL_CHECKPOINT" })],
  };
}

function applyChapter4Completion(state: GameState): GameState {
  const completed =
    state.recoveryDesktopEntered &&
    state.knowledgeIds.includes("knows_desktop_is_recovery_shell") &&
    state.knowledgeIds.includes("knows_calendar_contains_observer_data") &&
    state.knowledgeIds.includes("knows_memory_error_is_persona_graph") &&
    state.knowledgeIds.includes("knows_ui_continuity_is_constructed");

  if (completed && !state.chapter4Complete) {
    return {
      ...state,
      chapter: 4,
      chapter4Complete: true,
      events: [...state.events, makeEvent("CHAPTER_COMPLETE", { routeId: "RECOVERY_DESKTOP", target: "chapter_04" })],
    };
  }

  return state;
}

function applyChapter3Completion(state: GameState): GameState {
  const completed =
    state.photo17ForensicsStarted &&
    state.knowledgeIds.includes("knows_photo17_original_no_fourth_person") &&
    state.knowledgeIds.includes("knows_human_first_appears_in_reconstruction") &&
    state.knowledgeIds.includes("knows_reconstruction_uses_previous_generation") &&
    state.knowledgeIds.includes("knows_current_photo_is_dynamic_session_variant");

  if (completed && !state.chapter3Complete) {
    return {
      ...state,
      chapter: 3,
      chapter3Complete: true,
      events: [
        ...state.events,
        makeEvent("CHAPTER_COMPLETE", {
          routeId: "PHOTO17_FORENSICS",
          target: "chapter_03",
        }),
      ],
    };
  }

  return state;
}

function applyChapter2Completion(state: GameState): GameState {
  if (
    state.forumThread1847Assembled &&
    state.forumCookieMatchSeen &&
    (state.identityClueIds ?? []).length >= 4 &&
    !state.chapter2Complete
  ) {
    return {
      ...state,
      evidenceIds: addUniqueMany(state.evidenceIds, [
        "E021_summer17_thread_timestamp",
        "E022_summer17_session",
      ]),
      knowledgeIds: addUniqueMany(state.knowledgeIds, [
        "knows_linxia_online_2031",
        "knows_gym_not_timeline_endpoint",
      ]),
      chapter2Complete: true,
      events: [
        ...state.events,
        makeEvent("CHAPTER_COMPLETE", {
          routeId: "TIMELINE_20070817",
          target: "chapter_02",
        }),
      ],
    };
  }

  return state;
}

function makeEvent(type: GameEvent["type"], partial: Partial<GameEvent>): GameEvent {
  const id = `${type.toLowerCase()}_${Date.now()}_${Math.random().toString(16).slice(2)}`;

  return {
    id,
    type,
    createdAt: new Date().toISOString(),
    ...partial,
  };
}

function addUnique<T>(items: T[], item: T): T[] {
  return items.includes(item) ? items : [...items, item];
}

function addUniqueMany<T>(items: T[], incoming: T[]): T[] {
  return incoming.reduce((acc, item) => addUnique(acc, item), items);
}

function loadSave(): GameState {
  const raw = localStorage.getItem(SAVE_KEY);

  if (!raw) {
    return initialState;
  }

  try {
    const save = JSON.parse(raw) as Partial<GameState>;
    if (![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(save.schemaVersion ?? 0)) {
      return initialState;
    }

    const hydrated: GameState = {
      ...initialState,
      ...save,
      schemaVersion: 11,
      unlockedTextEntryIds: save.unlockedTextEntryIds ?? [],
      readTextEntryIds: save.readTextEntryIds ?? [],
      solvedDeductionIds: save.solvedDeductionIds ?? [],
      deductionAttempts: save.deductionAttempts ?? {},
      activeLeadId: save.activeLeadId ?? "chapter1_date_conflict",
      investigationNodeIds: save.investigationNodeIds ?? [],
      completedOperationIds: save.completedOperationIds ?? [],
      unlockedSideCaseIds: save.unlockedSideCaseIds ?? [],
      visitCounts: save.visitCounts ?? {},
      events: save.events ?? [],
      evidenceIds: save.evidenceIds ?? [],
      knowledgeIds: save.knowledgeIds ?? [],
      viewedCaptures: save.viewedCaptures ?? [],
      forumFragmentIds: save.forumFragmentIds ?? [],
      summer17ThreadIdsRead: save.summer17ThreadIdsRead ?? [],
      identityClueIds: save.identityClueIds ?? [],
      photo17ComparePairs: save.photo17ComparePairs ?? [],
      recoveryOpenedAppIds: save.recoveryOpenedAppIds ?? [],
      recoveryFileIdsSeen: save.recoveryFileIdsSeen ?? [],
      recoveryRecycleItemIdsSeen: save.recoveryRecycleItemIdsSeen ?? [],
      recoveryPlayerTrackIdsPlayed: save.recoveryPlayerTrackIdsPlayed ?? [],
      recoveryMessageThreadIdsSeen: save.recoveryMessageThreadIdsSeen ?? [],
      recoveryCalendarLayersSeen: save.recoveryCalendarLayersSeen ?? [],
      roomHistoryYearsSeen: save.roomHistoryYearsSeen ?? [],
      seenEndingIds: save.seenEndingIds ?? [],
      achievementsUnlocked: save.achievementsUnlocked ?? [],
    };
    const progressed = reconcileInvestigationProgress(hydrated);
    const anomalyLevel = calculateAnomalyLevel(progressed);
    return { ...progressed, anomalyLevel, unknownStage: calculateUnknownStage(progressed, anomalyLevel) };
  } catch {
    return initialState;
  }
}

export function GameStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, loadSave);
  const [saveStatus, setSaveStatus] = useState<"saving" | "saved" | "error">("saved");
  const [lastSavedAt, setLastSavedAt] = useState("");

  useEffect(() => {
    setSaveStatus("saving");
    const handle = window.setTimeout(() => {
      try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        setLastSavedAt(new Date().toISOString());
        setSaveStatus("saved");
      } catch {
        setSaveStatus("error");
      }
    }, 350);

    return () => window.clearTimeout(handle);
  }, [state]);

  const navigate = useCallback((payload: NavigatePayload) => {
    dispatch({ type: "NAVIGATE", payload });
  }, []);

  const search = useCallback((query: string) => {
    dispatch({ type: "SEARCH", query });
  }, []);

  const readTextEntry = useCallback((entryId: string) => {
    dispatch({ type: "READ_TEXT_ENTRY", entryId });
  }, []);

  const submitDeduction = useCallback((caseId: string, answerId: string, evidenceIds: string[]) => {
    dispatch({ type: "SUBMIT_DEDUCTION", caseId, answerId, evidenceIds });
  }, []);

  const recoverForumFragment = useCallback((fragmentId: string) => {
    dispatch({ type: "RECOVER_FORUM_FRAGMENT", fragmentId });
  }, []);

  const markForumQuotesSeen = useCallback(() => {
    dispatch({ type: "MARK_FORUM_QUOTES_SEEN" });
  }, []);

  const assembleForumThread1847 = useCallback(() => {
    dispatch({ type: "ASSEMBLE_FORUM_THREAD_1847" });
  }, []);

  const markForumCookieMatch = useCallback(() => {
    dispatch({ type: "MARK_FORUM_COOKIE_MATCH" });
  }, []);

  const startPhoto17Forensics = useCallback(() => {
    dispatch({ type: "START_PHOTO17_FORENSICS" });
  }, []);

  const comparePhoto17Versions = useCallback((pair: string) => {
    dispatch({ type: "COMPARE_PHOTO17", pair });
  }, []);

  const verifyPhoto17ClubHash = useCallback(() => {
    dispatch({ type: "VERIFY_PHOTO17_CLUB_HASH" });
  }, []);

  const markPhoto17DifferenceMap = useCallback(() => {
    dispatch({ type: "MARK_PHOTO17_DIFFERENCE_MAP" });
  }, []);

  const markPhoto17SessionHistory = useCallback(() => {
    dispatch({ type: "MARK_PHOTO17_SESSION_HISTORY" });
  }, []);

  const continueRecoveryBoot = useCallback(() => {
    dispatch({ type: "CONTINUE_RECOVERY_BOOT" });
  }, []);

  const enterRecoveryDesktop = useCallback(() => {
    dispatch({ type: "ENTER_RECOVERY_DESKTOP" });
  }, []);

  const openRecoveryApp = useCallback((appId: string) => {
    dispatch({ type: "OPEN_RECOVERY_APP", appId });
  }, []);

  const readRecoveryFile = useCallback((fileId: string) => {
    dispatch({ type: "READ_RECOVERY_FILE", fileId });
  }, []);

  const markRecoverySortPolicy = useCallback(() => dispatch({ type: "MARK_RECOVERY_SORT_POLICY" }), []);
  const readRecoveryRecycleItem = useCallback((itemId: string) => dispatch({ type: "READ_RECOVERY_RECYCLE_ITEM", itemId }), []);
  const playRecoveryTrack = useCallback((trackId: string) => dispatch({ type: "PLAY_RECOVERY_TRACK", trackId }), []);
  const suspendRecovery = useCallback(() => dispatch({ type: "SUSPEND_RECOVERY" }), []);
  const resumeRecovery = useCallback(() => dispatch({ type: "RESUME_RECOVERY" }), []);
  const restartRecoveryUi = useCallback(() => dispatch({ type: "RESTART_RECOVERY_UI" }), []);
  const setRecoveryWindowMode = useCallback((mode: "normal" | "minimized" | "maximized") => dispatch({ type: "SET_RECOVERY_WINDOW_MODE", mode }), []);

  const markRecoveryCalendarSession = useCallback(() => {
    dispatch({ type: "MARK_RECOVERY_CALENDAR_SESSION" });
  }, []);

  const markRecoveryInfo = useCallback(() => {
    dispatch({ type: "MARK_RECOVERY_INFO" });
  }, []);

  const markRecoveryMessengerMapping = useCallback(() => {
    dispatch({ type: "MARK_RECOVERY_MESSENGER_MAPPING" });
  }, []);

  const readRecoveryMessage = useCallback((threadId: string) => dispatch({ type: "READ_RECOVERY_MESSAGE", threadId }), []);
  const markRecoveryCalendarLayer = useCallback((layer: "personal" | "recovered" | "session") => dispatch({ type: "MARK_RECOVERY_CALENDAR_LAYER", layer }), []);
  const createPlayerPost = useCallback((title: string, body: string) => dispatch({ type: "CREATE_PLAYER_POST", title, body }), []);
  const markPlayerPostExit = useCallback(() => dispatch({ type: "MARK_PLAYER_POST_EXIT" }), []);
  const viewPlayerPostMutation = useCallback(() => dispatch({ type: "VIEW_PLAYER_POST_MUTATION" }), []);
  const viewPlayerPostMutation2 = useCallback(() => dispatch({ type: "VIEW_PLAYER_POST_MUTATION_2" }), []);
  const comparePlayerPost = useCallback(() => dispatch({ type: "COMPARE_PLAYER_POST" }), []);
  const editPlayerPost = useCallback((title: string, body: string) => dispatch({ type: "EDIT_PLAYER_POST", title, body }), []);
  const restorePlayerPostOriginal = useCallback(() => dispatch({ type: "RESTORE_PLAYER_POST_ORIGINAL" }), []);
  const preservePlayerPostOriginal = useCallback(() => dispatch({ type: "PRESERVE_PLAYER_POST_ORIGINAL" }), []);
  const deletePlayerPost = useCallback(() => dispatch({ type: "DELETE_PLAYER_POST" }), []);
  const viewPlayerPostArchive = useCallback(() => dispatch({ type: "VIEW_PLAYER_POST_ARCHIVE" }), []);

  const runRecoveryTerminal = useCallback((command: string) => {
    dispatch({ type: "RUN_RECOVERY_TERMINAL", command });
  }, []);

  const startContinuityService = useCallback(() => dispatch({ type: "START_CONTINUITY_SERVICE" }), []);
  const inspectRoomDefinition = useCallback(() => dispatch({ type: "INSPECT_ROOM_DEFINITION" }), []);
  const viewRoomHistoryYear = useCallback((year: number) => dispatch({ type: "VIEW_ROOM_HISTORY_YEAR", year }), []);
  const inspectUnresolvedPersona = useCallback(() => dispatch({ type: "INSPECT_UNRESOLVED_PERSONA" }), []);
  const inspectObserverModel = useCallback(() => dispatch({ type: "INSPECT_OBSERVER_MODEL" }), []);
  const correctObserverInference = useCallback(() => dispatch({ type: "CORRECT_OBSERVER_INFERENCE" }), []);
  const setObserverInference = useCallback((choice: "agree" | "incorrect" | "unresolved") => dispatch({ type: "SET_OBSERVER_INFERENCE", choice }), []);
  const inspectObserverCandidate = useCallback(() => dispatch({ type: "INSPECT_OBSERVER_CANDIDATE" }), []);
  const startFinalReview = useCallback(() => dispatch({ type: "START_FINAL_REVIEW" }), []);
  const viewFinalGeneratedSample = useCallback(() => dispatch({ type: "VIEW_FINAL_GENERATED_SAMPLE" }), []);
  const setFinalGeneratedDecision = useCallback((decision: "accept" | "reject") => dispatch({ type: "SET_FINAL_GENERATED_DECISION", decision }), []);
  const checkFinalGeneratedSource = useCallback(() => dispatch({ type: "CHECK_FINAL_GENERATED_SOURCE" }), []);
  const viewFinalSourceBoundary = useCallback(() => dispatch({ type: "VIEW_FINAL_SOURCE_BOUNDARY" }), []);
  const completeFinalObserverReview = useCallback((choice: "agree" | "incorrect" | "unresolved") => dispatch({ type: "COMPLETE_FINAL_OBSERVER_REVIEW", choice }), []);
  const completeFinalUnknownDialogue = useCallback((choice: "known" | "uncertain" | "what" | "important") => dispatch({ type: "COMPLETE_FINAL_UNKNOWN_DIALOGUE", choice }), []);
  const openResolutionCenter = useCallback(() => dispatch({ type: "OPEN_RESOLUTION_CENTER" }), []);
  const selectResolution = useCallback((endingId: EndingId) => dispatch({ type: "SELECT_RESOLUTION", endingId }), []);
  const applyResolution = useCallback((endingId: EndingId) => dispatch({ type: "APPLY_RESOLUTION", endingId }), []);
  const restoreFinalCheckpoint = useCallback(() => dispatch({ type: "RESTORE_FINAL_CHECKPOINT" }), []);
  const openCredits = useCallback(() => dispatch({ type: "OPEN_CREDITS" }), []);
  const startNewGamePlus = useCallback((mode: "clean" | "notes") => dispatch({ type: "START_NEW_GAME_PLUS", mode }), []);

  const reset = useCallback(() => {
    localStorage.removeItem(SAVE_KEY);
    dispatch({ type: "RESET" });
  }, []);

  const value = useMemo(
    () => ({
      state,
      saveStatus,
      lastSavedAt,
      navigate,
      search,
      readTextEntry,
      submitDeduction,
      recoverForumFragment,
      markForumQuotesSeen,
      assembleForumThread1847,
      markForumCookieMatch,
      startPhoto17Forensics,
      comparePhoto17Versions,
      verifyPhoto17ClubHash,
      markPhoto17DifferenceMap,
      markPhoto17SessionHistory,
      continueRecoveryBoot,
      enterRecoveryDesktop,
      openRecoveryApp,
      readRecoveryFile,
      markRecoverySortPolicy,
      readRecoveryRecycleItem,
      playRecoveryTrack,
      suspendRecovery,
      resumeRecovery,
      restartRecoveryUi,
      setRecoveryWindowMode,
      markRecoveryCalendarSession,
      markRecoveryInfo,
      markRecoveryMessengerMapping,
      readRecoveryMessage,
      markRecoveryCalendarLayer,
      createPlayerPost,
      markPlayerPostExit,
      viewPlayerPostMutation,
      viewPlayerPostMutation2,
      comparePlayerPost,
      editPlayerPost,
      restorePlayerPostOriginal,
      preservePlayerPostOriginal,
      deletePlayerPost,
      viewPlayerPostArchive,
      runRecoveryTerminal,
      startContinuityService,
      inspectRoomDefinition,
      viewRoomHistoryYear,
      inspectUnresolvedPersona,
      inspectObserverModel,
      correctObserverInference,
      setObserverInference,
      inspectObserverCandidate,
      startFinalReview,
      viewFinalGeneratedSample,
      setFinalGeneratedDecision,
      checkFinalGeneratedSource,
      viewFinalSourceBoundary,
      completeFinalObserverReview,
      completeFinalUnknownDialogue,
      openResolutionCenter,
      selectResolution,
      applyResolution,
      restoreFinalCheckpoint,
      openCredits,
      startNewGamePlus,
      reset,
    }),
    [
      assembleForumThread1847,
      markForumCookieMatch,
      startPhoto17Forensics,
      comparePhoto17Versions,
      verifyPhoto17ClubHash,
      markPhoto17DifferenceMap,
      markPhoto17SessionHistory,
      continueRecoveryBoot,
      enterRecoveryDesktop,
      openRecoveryApp,
      readRecoveryFile,
      markRecoverySortPolicy,
      readRecoveryRecycleItem,
      playRecoveryTrack,
      suspendRecovery,
      resumeRecovery,
      restartRecoveryUi,
      setRecoveryWindowMode,
      markRecoveryCalendarSession,
      markRecoveryInfo,
      markRecoveryMessengerMapping,
      readRecoveryMessage,
      markRecoveryCalendarLayer,
      createPlayerPost,
      markPlayerPostExit,
      viewPlayerPostMutation,
      viewPlayerPostMutation2,
      comparePlayerPost,
      editPlayerPost,
      restorePlayerPostOriginal,
      preservePlayerPostOriginal,
      deletePlayerPost,
      viewPlayerPostArchive,
      runRecoveryTerminal,
      startContinuityService,
      inspectRoomDefinition,
      viewRoomHistoryYear,
      inspectUnresolvedPersona,
      inspectObserverModel,
      correctObserverInference,
      inspectObserverCandidate,
      startFinalReview,
      viewFinalGeneratedSample,
      checkFinalGeneratedSource,
      viewFinalSourceBoundary,
      completeFinalObserverReview,
      openResolutionCenter,
      selectResolution,
      applyResolution,
      restoreFinalCheckpoint,
      openCredits,
      startNewGamePlus,
      markForumQuotesSeen,
      navigate,
      recoverForumFragment,
      reset,
      saveStatus,
      search,
      readTextEntry,
      submitDeduction,
      state,
      lastSavedAt,
    ],
  );

  return <GameStoreContext.Provider value={value}>{children}</GameStoreContext.Provider>;
}

export function useGameStore() {
  const context = useContext(GameStoreContext);

  if (!context) {
    throw new Error("useGameStore must be used inside GameStoreProvider");
  }

  return context;
}
