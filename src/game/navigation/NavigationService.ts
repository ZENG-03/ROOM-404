import type { NavigatePayload } from "../types";
import { findRouteByPath, routes } from "./RouteRegistry";

export function resolveNavigation(input: string): NavigatePayload {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      routeId: "ARCHIVE_HOME",
      fakeUrl: routes.ARCHIVE_HOME.path,
    };
  }

  if (trimmed.startsWith("/search")) {
    const query = new URLSearchParams(trimmed.split("?")[1] ?? "").get("q") ?? "";
    return {
      routeId: "ARCHIVE_SEARCH",
      fakeUrl: query ? `/search?q=${query}` : routes.ARCHIVE_SEARCH.path,
      query,
    };
  }

  if (trimmed.startsWith("/forum/search")) {
    const params = new URLSearchParams(trimmed.split("?")[1] ?? "");
    const query = params.get("q") ?? (params.get("author") === "1847" ? "Summer17" : "");

    return {
      routeId: "FORUM_SEARCH",
      fakeUrl: query ? `/forum/search?q=${query}` : routes.FORUM_SEARCH.path,
      query,
    };
  }

  if (trimmed.startsWith("/chapter/end")) {
    const params = new URLSearchParams(trimmed.split("?")[1] ?? "");
    const chapter = params.get("chapter") ?? "1";
    return {
      routeId: "CHAPTER_END",
      fakeUrl: `/chapter/end?chapter=${chapter}`,
    };
  }

  if (trimmed.startsWith("/photo/forensics/compare")) {
    return {
      routeId: "PHOTO17_COMPARE",
      fakeUrl: routes.PHOTO17_COMPARE.path,
    };
  }

  const route = findRouteByPath(trimmed);

  if (route) {
    return {
      routeId: route.id,
      fakeUrl: route.path,
    };
  }

  return {
    routeId: "SYSTEM_404",
    fakeUrl: trimmed.startsWith("/") ? trimmed : `/${trimmed}`,
  };
}
