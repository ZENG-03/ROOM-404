import type { GameState } from "../types";

export type AnomalyLevel = 0 | 1 | 2 | 3 | 4 | 5;

export function calculateAnomalyLevel(state: GameState): AnomalyLevel {
  let level: AnomalyLevel = 0;

  if (state.photo17Visits >= 2 || state.backup403Seen || state.viewedCaptures.length >= 2) level = 1;
  if (state.chapter >= 2 || state.forumThread1847Assembled || state.forumCookieMatchSeen) level = 2;
  if (state.chapter >= 3 || state.photo17DifferenceMapSeen || state.photo17SessionHistorySeen) level = 3;
  if (state.chapter >= 4 || state.recoveryMemoryStatusSeen || state.recoveryUnknownSourceSeen) level = 4;
  if (state.chapter >= 5 || state.observerModelSeen || state.finalReviewComplete) level = 5;

  return level;
}

export const anomalyLabels: Record<AnomalyLevel, string> = {
  0: "NONE",
  1: "INDEX DRIFT",
  2: "TEMPORAL OVERLAP",
  3: "RECONSTRUCTION LEAK",
  4: "PERSONA GRAPH ERROR",
  5: "OBSERVER MIRROR",
};
