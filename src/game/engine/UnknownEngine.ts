import type { GameState } from "../types";
import { calculateAnomalyLevel, type AnomalyLevel } from "./AnomalyEngine";

export type UnknownStage = 0 | 1 | 2 | 3 | 4 | 5;

export function calculateUnknownStage(state: GameState, anomalyLevel = calculateAnomalyLevel(state)): UnknownStage {
  if (anomalyLevel === 0) return 0;
  if (state.resolutionApplied || state.finalReviewComplete || state.observerModelSeen) return 5;
  if (state.chapter >= 4 || state.recoveryMemoryStatusSeen || state.recoveryUnknownSourceSeen) return 4;
  if (state.chapter >= 3 || state.photo17SessionHistorySeen) return 3;
  if (state.chapter >= 2 || state.forumCookieMatchSeen) return 2;
  return 1;
}

export const unknownStageLabels: Record<UnknownStage, string> = {
  0: "SILENT",
  1: "OBSERVER",
  2: "FAMILIAR",
  3: "PRESSURE",
  4: "CONTRADICTION",
  5: "MIRROR",
};

export function getUnknownStageSnapshot(state: GameState): { stage: UnknownStage; label: string; anomalyLevel: AnomalyLevel } {
  const anomalyLevel = calculateAnomalyLevel(state);
  const stage = calculateUnknownStage(state, anomalyLevel);
  return { stage, label: unknownStageLabels[stage], anomalyLevel };
}
