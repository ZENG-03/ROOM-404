import { FormEvent, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  CornerDownRight,
  History,
  House,
  LoaderCircle,
  Network,
  PanelRightClose,
  PanelRightOpen,
  RotateCw,
  Trophy,
} from "lucide-react";
import { useGameStore } from "../../game/engine/GameStore";
import { resolveNavigation } from "../../game/navigation/NavigationService";
import { routes } from "../../game/navigation/RouteRegistry";
import { getUiTheme } from "../../ui/theme";
import { getInvestigationProgress } from "../../story/investigation";

interface BrowserShellProps {
  children: ReactNode;
  evidenceOpen: boolean;
  onToggleEvidence: () => void;
}

export function BrowserShell({ children, evidenceOpen, onToggleEvidence }: BrowserShellProps) {
  const { state, navigate, saveStatus, lastSavedAt } = useGameStore();
  const [address, setAddress] = useState(state.fakeUrl);
  const [navigationHistory, setNavigationHistory] = useState([state.fakeUrl]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [historyOpen, setHistoryOpen] = useState(false);

  useEffect(() => {
    setAddress(state.fakeUrl);
    if (navigationHistory[historyIndex] === state.fakeUrl) return;

    setNavigationHistory((current) => {
      const next = [...current.slice(0, historyIndex + 1), state.fakeUrl].slice(-12);
      setHistoryIndex(next.length - 1);
      return next;
    });
  }, [state.fakeUrl]);

  function submitAddress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(resolveNavigation(address));
  }

  function moveThroughHistory(nextIndex: number) {
    const nextUrl = navigationHistory[nextIndex];
    if (!nextUrl) return;
    setHistoryIndex(nextIndex);
    setHistoryOpen(false);
    navigate(resolveNavigation(nextUrl));
  }

  const route = routes[state.currentRouteId];
  const theme = getUiTheme(state.currentRouteId, state.chapter);
  const investigation = getInvestigationProgress(state);
  const SaveIcon = saveStatus === "saving" ? LoaderCircle : saveStatus === "error" ? CircleAlert : Check;
  const saveLabel = saveStatus === "saving" ? "Saving" : saveStatus === "error" ? "Save failed" : "Saved";

  return (
    <section className="browser-window" aria-label="ROOM Archive browser">
      <div className="browser-toolbar">
        <div className="browser-nav-controls" aria-label="Archive navigation">
          <button className="toolbar-icon-button" type="button" title="Back" aria-label="Back" disabled={historyIndex === 0} onClick={() => moveThroughHistory(historyIndex - 1)}>
            <ArrowLeft aria-hidden="true" />
          </button>
          <button className="toolbar-icon-button" type="button" title="Forward" aria-label="Forward" disabled={historyIndex >= navigationHistory.length - 1} onClick={() => moveThroughHistory(historyIndex + 1)}>
            <ArrowRight aria-hidden="true" />
          </button>
          <button className="toolbar-icon-button" type="button" title="Reload current archive object" aria-label="Reload current archive object" onClick={() => navigate(resolveNavigation(state.fakeUrl))}>
            <RotateCw aria-hidden="true" />
          </button>
          <button className="toolbar-icon-button" type="button" title="ROOM Archive home" aria-label="ROOM Archive home" onClick={() => navigate(resolveNavigation("/"))}>
            <House aria-hidden="true" />
          </button>
        </div>

        <form className="address-form" onSubmit={submitAddress}>
          <span className={`address-source source-${route.sourceType.toLowerCase()}`}>{route.sourceType}</span>
          <input aria-label="Archive address" value={address} onChange={(event) => setAddress(event.target.value)} spellCheck={false} />
          <button className="toolbar-icon-button" type="submit" title="Go" aria-label="Go to address">
            <CornerDownRight aria-hidden="true" />
          </button>
        </form>

        <div className="browser-toolbar-status">
          <div className="browser-theme-context" title={theme.description}>
            <span>{theme.code}</span>
            <strong>{theme.label}</strong>
          </div>
          <div className="browser-lead-context" title={investigation.activeNode?.objective ?? "Archive session recorded"}>
            <span>LEAD</span>
            <strong>{investigation.activeNode?.code ?? "ARCHIVE"}</strong>
          </div>
          <div className="browser-history-control">
            <button className="toolbar-icon-button" type="button" title="Recent archive history" aria-label="Recent archive history" aria-expanded={historyOpen} onClick={() => setHistoryOpen((open) => !open)}>
              <History aria-hidden="true" />
            </button>
            {historyOpen && (
              <div className="browser-history-menu" role="menu" aria-label="Recent archive history">
                <strong>Recent objects</strong>
                {navigationHistory.map((path, index) => ({ path, index })).reverse().map((entry) => (
                  <button key={`${entry.path}-${entry.index}`} type="button" role="menuitem" className={entry.index === historyIndex ? "active" : ""} onClick={() => moveThroughHistory(entry.index)}>
                    <span>{entry.path}</span>
                    {entry.index === historyIndex && <Check aria-hidden="true" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className={`save-status save-${saveStatus}`} title={lastSavedAt ? `Last saved ${new Date(lastSavedAt).toLocaleTimeString()}` : saveLabel}>
            <SaveIcon aria-hidden="true" />
            <span>{saveLabel}</span>
          </span>

          <button className="toolbar-icon-button" type="button" title="Open achievement archive" aria-label="Open achievement archive" onClick={() => navigate(resolveNavigation("/achievements"))}>
            <Trophy aria-hidden="true" />
          </button>

          <button className="toolbar-icon-button" type="button" title="Open evidence graph" aria-label="Open evidence graph" onClick={() => navigate(resolveNavigation("/evidence/graph"))}>
            <Network aria-hidden="true" />
          </button>

          <button className="toolbar-icon-button evidence-toggle" type="button" title={evidenceOpen ? "Close evidence workspace" : "Open evidence workspace"} aria-label={evidenceOpen ? "Close evidence workspace" : "Open evidence workspace"} aria-expanded={evidenceOpen} onClick={onToggleEvidence}>
            {evidenceOpen ? <PanelRightClose aria-hidden="true" /> : <PanelRightOpen aria-hidden="true" />}
            {state.evidenceIds.length > 0 && <span>{state.evidenceIds.length}</span>}
          </button>
        </div>
      </div>
      <div className="browser-content">{children}</div>
    </section>
  );
}
