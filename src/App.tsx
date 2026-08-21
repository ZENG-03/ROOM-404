import { useState } from "react";
import { BrowserShell } from "./components/browser/BrowserShell";
import { EvidencePanel } from "./components/browser/EvidencePanel";
import { PageRenderer } from "./components/pages/PageRenderer";
import { GameFeedbackLayer } from "./components/ui/GameFeedbackLayer";
import { GameStoreProvider } from "./game/engine/GameStore";

export default function App() {
  return (
    <GameStoreProvider>
      <AppWorkspace />
    </GameStoreProvider>
  );
}

function AppWorkspace() {
  const [evidenceOpen, setEvidenceOpen] = useState(() => !window.matchMedia("(max-width: 960px)").matches);

  return (
    <main className={`app-shell ${evidenceOpen ? "evidence-open" : "evidence-closed"}`}>
      <BrowserShell evidenceOpen={evidenceOpen} onToggleEvidence={() => setEvidenceOpen((open) => !open)}>
        <PageRenderer />
      </BrowserShell>
      <button className="evidence-backdrop" type="button" aria-label="Close evidence workspace" onClick={() => setEvidenceOpen(false)} />
      <EvidencePanel open={evidenceOpen} onClose={() => setEvidenceOpen(false)} />
      <GameFeedbackLayer />
    </main>
  );
}
