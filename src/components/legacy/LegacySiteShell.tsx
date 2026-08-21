import { ReactNode } from "react";
import { useGameStore } from "../../game/engine/GameStore";
import { resolveNavigation } from "../../game/navigation/NavigationService";

interface LegacySiteShellProps {
  title: string;
  subtitle: string;
  nav?: Array<[string, string]>;
  children: ReactNode;
}

export function LegacySiteShell({ title, subtitle, nav = [], children }: LegacySiteShellProps) {
  const { navigate } = useGameStore();

  return (
    <article className="legacy-site">
      <header className="legacy-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      {nav.length > 0 && (
        <nav className="legacy-nav" aria-label={`${title} navigation`}>
          {nav.map(([label, path]) => (
            <button key={path} type="button" onClick={() => navigate(resolveNavigation(path))}>
              {label}
            </button>
          ))}
        </nav>
      )}
      <div className="legacy-body">{children}</div>
    </article>
  );
}
