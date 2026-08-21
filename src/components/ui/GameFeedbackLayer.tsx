import { useEffect, useRef, useState } from "react";
import { ArchiveRestore, Check, Database, Flag, Trophy, X } from "lucide-react";
import { useGameStore } from "../../game/engine/GameStore";
import { allEvidence } from "../../story/evidenceRegistry";
import { achievementDefinitions } from "../../game/engine/AchievementEngine";

interface GameNotice {
  id: string;
  kind: "evidence" | "chapter" | "checkpoint" | "achievement";
  eyebrow: string;
  title: string;
  detail: string;
}

export function GameFeedbackLayer() {
  const { state } = useGameStore();
  const previousEvidenceRef = useRef(state.evidenceIds);
  const previousEventCountRef = useRef(state.events.length);
  const previousAchievementRef = useRef(state.achievementsUnlocked ?? []);
  const [notice, setNotice] = useState<GameNotice | null>(null);

  useEffect(() => {
    const previousEvidence = previousEvidenceRef.current;
    const newEvidenceIds = state.evidenceIds.filter((id) => !previousEvidence.includes(id));
    const newEvents = state.events.slice(previousEventCountRef.current);
    const chapterEvent = [...newEvents].reverse().find((event) => event.type === "CHAPTER_COMPLETE");
    const checkpointEvent = [...newEvents].reverse().find((event) => event.type === "CHECKPOINT_CREATED" || event.type === "CHECKPOINT_RESTORED");
    const evidence = newEvidenceIds.length > 0 ? allEvidence[newEvidenceIds[newEvidenceIds.length - 1]] : undefined;
    const newAchievementId = (state.achievementsUnlocked ?? []).find((id) => !previousAchievementRef.current.includes(id));
    const achievement = achievementDefinitions.find((item) => item.id === newAchievementId);

    if (chapterEvent) {
      const chapter = chapterEvent.target?.replace("chapter_", "CHAPTER ").replace("05", "05") ?? "CHAPTER";
      setNotice({ id: chapterEvent.id, kind: "chapter", eyebrow: "Archive progress", title: `${chapter.toUpperCase()} COMPLETE`, detail: "New investigation context is now available." });
    } else if (checkpointEvent) {
      const restored = checkpointEvent.type === "CHECKPOINT_RESTORED";
      setNotice({ id: checkpointEvent.id, kind: "checkpoint", eyebrow: "FINAL_CHECKPOINT", title: restored ? "Checkpoint restored" : "Checkpoint saved", detail: restored ? "Resolution state returned to pre-application." : "Pre-resolution state is available." });
    } else if (achievement) {
      setNotice({ id: achievement.id, kind: "achievement", eyebrow: "Achievement unlocked", title: achievement.title, detail: achievement.description });
    } else if (evidence) {
      setNotice({ id: evidence.id, kind: "evidence", eyebrow: `${evidence.sourceType} source`, title: evidence.title, detail: "Evidence added to the session workspace." });
    }

    previousEvidenceRef.current = state.evidenceIds;
    previousEventCountRef.current = state.events.length;
    previousAchievementRef.current = state.achievementsUnlocked ?? [];
  }, [state.evidenceIds, state.events]);

  useEffect(() => {
    if (!notice) return;
    const handle = window.setTimeout(() => setNotice(null), 4200);
    return () => window.clearTimeout(handle);
  }, [notice]);

  if (!notice) return null;

  const NoticeIcon = notice.kind === "chapter" ? Flag : notice.kind === "checkpoint" ? ArchiveRestore : notice.kind === "achievement" ? Trophy : Database;

  return (
    <div className={`game-notice notice-${notice.kind}`} role="status" aria-live="polite">
      <span className="notice-icon"><NoticeIcon aria-hidden="true" /></span>
      <div>
        <span>{notice.eyebrow}</span>
        <strong>{notice.title}</strong>
        <p>{notice.detail}</p>
      </div>
      <span className="notice-confirm"><Check aria-hidden="true" /></span>
      <button type="button" title="Dismiss" aria-label="Dismiss notification" onClick={() => setNotice(null)}><X aria-hidden="true" /></button>
    </div>
  );
}
