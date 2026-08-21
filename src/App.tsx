import { useState } from "react";
import { BrowserShell } from "./components/browser/BrowserShell";
import { EvidencePanel } from "./components/browser/EvidencePanel";
import { PageRenderer } from "./components/pages/PageRenderer";
import { GameFeedbackLayer } from "./components/ui/GameFeedbackLayer";
import { GameStoreProvider } from "./game/engine/GameStore";
import { useGameStore } from "./game/engine/GameStore";
import { getUiTheme } from "./ui/theme";

export default function App() {
  return (
    <GameStoreProvider>
      <AppWorkspace />
    </GameStoreProvider>
  );
}

function AppWorkspace() {
  const { state } = useGameStore();
  const [evidenceOpen, setEvidenceOpen] = useState(() => !window.matchMedia("(max-width: 960px)").matches);
  const theme = getUiTheme(state.currentRouteId, state.chapter);

  return (
    <main className={`app-shell theme-${theme.id} ${evidenceOpen ? "evidence-open" : "evidence-closed"}`} data-theme={theme.id} data-chapter={state.chapter}>
      <BrowserShell evidenceOpen={evidenceOpen} onToggleEvidence={() => setEvidenceOpen((open) => !open)}>
        <PageRenderer />
      </BrowserShell>
      <button className="evidence-backdrop" type="button" aria-label="Close evidence workspace" onClick={() => setEvidenceOpen(false)} />
      <EvidencePanel open={evidenceOpen} onClose={() => setEvidenceOpen(false)} />
      <GameFeedbackLayer />
    </main>
  );
}
