import type { RouteId } from "../game/types";

export type UiThemeId = "archive" | "forum" | "photo" | "recovery" | "continuity" | "resolution";

export interface UiThemeMeta {
  id: UiThemeId;
  label: string;
  code: string;
  description: string;
}

export const uiThemes: Record<UiThemeId, UiThemeMeta> = {
  archive: { id: "archive", label: "ACTIVE ARCHIVE", code: "CH01", description: "Cold index / source intake" },
  forum: { id: "forum", label: "BLUEMOON CACHE", code: "CH02", description: "Archived community / session noise" },
  photo: { id: "photo", label: "PHOTO PROVENANCE", code: "CH03", description: "Darkroom comparison / image chain" },
  recovery: { id: "recovery", label: "RECOVERY SHELL", code: "CH04", description: "Mapped desktop / recovered state" },
  continuity: { id: "continuity", label: "CONTINUITY SERVICE", code: "CH05", description: "System history / generated output" },
  resolution: { id: "resolution", label: "SOURCE RESOLUTION", code: "FINAL", description: "Boundary review / policy state" },
};

export function getUiThemeId(routeId: RouteId, chapter: number): UiThemeId {
  if (routeId.startsWith("RESOLUTION") || routeId.startsWith("FINAL") || routeId === "CREDITS" || routeId === "ENDING_GALLERY") {
    return "resolution";
  }

  if (routeId.startsWith("ROOM_") || routeId.startsWith("SUBJECT404") || routeId === "CONTINUITY_SERVICE") {
    return "continuity";
  }

  if (routeId.startsWith("RECOVERY") || routeId.startsWith("DESKTOP") || routeId.startsWith("MESSENGER") || routeId.startsWith("CALENDAR") || routeId.startsWith("TERMINAL")) {
    return "recovery";
  }

  if (routeId.startsWith("PHOTO17") || routeId === "SUBJECT04_PHOTO17" || routeId === "TIMELINE_20070817") {
    return "photo";
  }

  if (routeId.startsWith("FORUM") || routeId === "BLUEMOON_ARCHIVE") {
    return "forum";
  }

  if (chapter >= 5) return "continuity";
  if (chapter === 4) return "recovery";
  if (chapter === 3) return "photo";
  if (chapter === 2) return "forum";
  return "archive";
}

export function getUiTheme(routeId: RouteId, chapter: number): UiThemeMeta {
  return uiThemes[getUiThemeId(routeId, chapter)];
}
