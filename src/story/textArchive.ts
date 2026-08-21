import type { GameState, SourceType, TextArchiveEntry, TextArchiveIndex } from "../game/types";

let indexPromise: Promise<TextArchiveIndex> | null = null;

export function loadTextArchive(): Promise<TextArchiveIndex> {
  if (!indexPromise) {
    indexPromise = fetch(`${import.meta.env.BASE_URL}content/room404-text-index.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Text archive index request failed: ${response.status}`);
        return response.json() as Promise<TextArchiveIndex>;
      });
  }
  return indexPromise;
}

export function requiredChapter(entry: TextArchiveEntry): number {
  const match = entry.unlockCondition.match(/chapter:(\d+)/);
  return match ? Number(match[1]) : entry.chapter;
}

export function isTextEntryUnlocked(entry: TextArchiveEntry, state: GameState): boolean {
  if (state.unlockedTextEntryIds.includes(entry.id) || state.readTextEntryIds.includes(entry.id)) return true;
  if (entry.tags.includes("core")) return state.chapter >= requiredChapter(entry);
  const deductionKey = entry.chapter === 6 ? "final_source_boundary" : `chapter${entry.chapter}_`;
  return entry.unlockCondition.startsWith("deduction:") && state.solvedDeductionIds.some((id) => id === deductionKey || id.startsWith(deductionKey));
}

export function getTextEntryStatus(entry: TextArchiveEntry, state: GameState): "locked" | "unread" | "read" {
  if (!isTextEntryUnlocked(entry, state)) return "locked";
  return state.readTextEntryIds.includes(entry.id) ? "read" : "unread";
}

export function filterTextEntries(
  entries: TextArchiveEntry[],
  state: GameState,
  options: { chapter?: number; sourceType?: SourceType | "ALL"; query?: string; includeLocked?: boolean },
): TextArchiveEntry[] {
  const normalizedQuery = options.query?.trim().toLocaleLowerCase() ?? "";
  return entries.filter((entry) => {
    if (options.chapter && entry.chapter !== options.chapter) return false;
    if (options.sourceType && options.sourceType !== "ALL" && entry.sourceType !== options.sourceType) return false;
    if (!options.includeLocked && !isTextEntryUnlocked(entry, state)) return false;
    if (!normalizedQuery) return true;
    return `${entry.heading} ${entry.section} ${entry.body} ${entry.tags.join(" ")}`.toLocaleLowerCase().includes(normalizedQuery);
  });
}

export function getTextEntryById(entries: TextArchiveEntry[], entryId: string): TextArchiveEntry | undefined {
  return entries.find((entry) => entry.id === entryId);
}
