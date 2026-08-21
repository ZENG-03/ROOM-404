import type { GameRoute, RouteId } from "../types";

export const routes: Record<RouteId, GameRoute> = {
  ARCHIVE_HOME: {
    id: "ARCHIVE_HOME",
    path: "/",
    title: "ROOM Archive",
    sourceType: "SYSTEM",
    aliases: ["/archive"],
  },
  ARCHIVE_SEARCH: {
    id: "ARCHIVE_SEARCH",
    path: "/search",
    title: "Search",
    sourceType: "SYSTEM",
  },
  LINXIA_HOME: {
    id: "LINXIA_HOME",
    path: "/site/2007/linxia",
    title: "林夏の小窝",
    sourceType: "ARCHIVED",
    aliases: ["http://linxia-home.net/", "linxia-home.net"],
  },
  LINXIA_DIARY: {
    id: "LINXIA_DIARY",
    path: "/site/2007/linxia/diary",
    title: "Diary",
    sourceType: "ARCHIVED",
  },
  LINXIA_PHOTO_INDEX: {
    id: "LINXIA_PHOTO_INDEX",
    path: "/site/2007/linxia/photo",
    title: "Photo",
    sourceType: "ARCHIVED",
  },
  PHOTO17: {
    id: "PHOTO17",
    path: "/site/2007/linxia/photo/17",
    title: "Photo 17",
    sourceType: "ARCHIVED",
  },
  LINXIA_GUESTBOOK: {
    id: "LINXIA_GUESTBOOK",
    path: "/site/2007/linxia/guestbook",
    title: "Guestbook",
    sourceType: "ARCHIVED",
  },
  LINXIA_0817_INDEX: {
    id: "LINXIA_0817_INDEX",
    path: "/site/2007/linxia/0817/",
    title: "Index of /0817/",
    sourceType: "ARCHIVED",
  },
  LINXIA_0817_PRIVATE: {
    id: "LINXIA_0817_PRIVATE",
    path: "/site/2007/linxia/0817/private",
    title: "private.html",
    sourceType: "ARCHIVED",
    aliases: ["/site/2007/linxia/0817/private.html"],
  },
  LINXIA_BACKUP_ZIP: {
    id: "LINXIA_BACKUP_ZIP",
    path: "/site/2007/linxia/0817/backup/backup_20070823.zip",
    title: "backup_20070823.zip",
    sourceType: "RECOVERED",
  },
  SCHOOL_HOME: {
    id: "SCHOOL_HOME",
    path: "/site/2003/nc2ms",
    title: "南城市立第二中学",
    sourceType: "ARCHIVED",
    aliases: ["nc2ms.edu", "http://nc2ms.edu/"],
  },
  SCHOOL_PHOTO_CLUB: {
    id: "SCHOOL_PHOTO_CLUB",
    path: "/site/2003/nc2ms/clubs/photo",
    title: "南城二中摄影社",
    sourceType: "ARCHIVED",
    aliases: ["nc2ms.edu/club/photo/"],
  },
  SCHOOL_NOTICE_V1: {
    id: "SCHOOL_NOTICE_V1",
    path: "/archive/20070815/nc2ms.edu/photo-event",
    title: "摄影社暑期活动通知 - 2007-08-15",
    sourceType: "ORIGINAL",
  },
  SCHOOL_NOTICE_V2: {
    id: "SCHOOL_NOTICE_V2",
    path: "/archive/20070819/nc2ms.edu/photo-event",
    title: "摄影社暑期活动通知 - 2007-08-19",
    sourceType: "ALTERED",
  },
  SCHOOL_NEWS_20070816: { id: "SCHOOL_NEWS_20070816", path: "/site/2003/nc2ms/news/20070816", title: "校园安全检查", sourceType: "ARCHIVED" },
  SCHOOL_NEWS_20070813: { id: "SCHOOL_NEWS_20070813", path: "/site/2003/nc2ms/news/20070813", title: "高三年级返校安排", sourceType: "ARCHIVED" },
  SCHOOL_NEWS_20070810: { id: "SCHOOL_NEWS_20070810", path: "/site/2003/nc2ms/news/20070810", title: "暑期值班表", sourceType: "ARCHIVED" },
  SCHOOL_ACTIVITY_20070722: { id: "SCHOOL_ACTIVITY_20070722", path: "/site/2003/nc2ms/clubs/photo/activity/20070722", title: "老城区街景拍摄", sourceType: "ARCHIVED" },
  SCHOOL_ACTIVITY_20070610: { id: "SCHOOL_ACTIVITY_20070610", path: "/site/2003/nc2ms/clubs/photo/activity/20070610", title: "校园植物专题", sourceType: "ARCHIVED" },
  SCHOOL_QUICK_OFFICE: { id: "SCHOOL_QUICK_OFFICE", path: "/site/2003/nc2ms/office", title: "校务公开", sourceType: "ARCHIVED" },
  SCHOOL_QUICK_DOWNLOAD: { id: "SCHOOL_QUICK_DOWNLOAD", path: "/site/2003/nc2ms/download", title: "资源下载", sourceType: "ARCHIVED" },
  BLUEMOON_ARCHIVE: {
    id: "BLUEMOON_ARCHIVE",
    path: "/archive/20070817/bluemoon-forum.net/",
    title: "BlueMoon Community - Archive",
    sourceType: "ARCHIVED",
    aliases: ["/archive/20070817/bluemoon-forum.net"],
  },
  FORUM_HOME: {
    id: "FORUM_HOME",
    path: "/forum",
    title: "BlueMoon Community",
    sourceType: "ARCHIVED",
  },
  FORUM_BOARD_NIGHT: {
    id: "FORUM_BOARD_NIGHT",
    path: "/forum/board/night",
    title: "夜话",
    sourceType: "ARCHIVED",
  },
  FORUM_BOARD_PHOTO: {
    id: "FORUM_BOARD_PHOTO",
    path: "/forum/board/photo",
    title: "摄影",
    sourceType: "ARCHIVED",
  },
  FORUM_BOARD_CAMPUS: {
    id: "FORUM_BOARD_CAMPUS",
    path: "/forum/board/campus",
    title: "校园",
    sourceType: "ARCHIVED",
  },
  FORUM_BOARD_WEB: {
    id: "FORUM_BOARD_WEB",
    path: "/forum/board/web",
    title: "网页制作",
    sourceType: "ARCHIVED",
  },
  FORUM_BOARD_ANNOUNCEMENTS: { id: "FORUM_BOARD_ANNOUNCEMENTS", path: "/forum/board/announcements", title: "论坛公告", sourceType: "ARCHIVED" },
  FORUM_BOARD_FEEDBACK: { id: "FORUM_BOARD_FEEDBACK", path: "/forum/board/feedback", title: "建议反馈", sourceType: "ARCHIVED" },
  FORUM_BOARD_CHAT: { id: "FORUM_BOARD_CHAT", path: "/forum/board/chat", title: "闲聊灌水", sourceType: "ARCHIVED" },
  FORUM_BOARD_RELATIONSHIP: { id: "FORUM_BOARD_RELATIONSHIP", path: "/forum/board/relationship", title: "情感", sourceType: "ARCHIVED" },
  FORUM_BOARD_MUSIC: { id: "FORUM_BOARD_MUSIC", path: "/forum/board/music", title: "音乐", sourceType: "ARCHIVED" },
  FORUM_BOARD_TRADE: { id: "FORUM_BOARD_TRADE", path: "/forum/board/trade", title: "旧物交换", sourceType: "ARCHIVED" },
  FORUM_SEARCH: {
    id: "FORUM_SEARCH",
    path: "/forum/search",
    title: "Forum Search",
    sourceType: "ARCHIVED",
  },
  FORUM_USER_1847: {
    id: "FORUM_USER_1847",
    path: "/forum/user/1847",
    title: "Summer17",
    sourceType: "ARCHIVED",
    aliases: ["BM-1847"],
  },
  FORUM_USER_1741: {
    id: "FORUM_USER_1741",
    path: "/forum/user/1741",
    title: "Linxia",
    sourceType: "ARCHIVED",
  },
  FORUM_USER_1766: {
    id: "FORUM_USER_1766",
    path: "/forum/user/1766",
    title: "Ran",
    sourceType: "ARCHIVED",
  },
  FORUM_USER_1739: {
    id: "FORUM_USER_1739",
    path: "/forum/user/1739",
    title: "GY",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1847: {
    id: "FORUM_THREAD_1847",
    path: "/forum/thread/1847",
    title: "如果一个人突然不再存在",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1711: {
    id: "FORUM_THREAD_1711",
    path: "/forum/thread/1711",
    title: "主页到底要不要关",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1738: {
    id: "FORUM_THREAD_1738",
    path: "/forum/thread/1738",
    title: "照片改过以后还算原来那张吗",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1682: {
    id: "FORUM_THREAD_1682",
    path: "/forum/thread/1682",
    title: "如果别人一直说你是那样的人",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1792: {
    id: "FORUM_THREAD_1792",
    path: "/forum/thread/1792",
    title: "你们会留聊天记录吗",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1816: {
    id: "FORUM_THREAD_1816",
    path: "/forum/thread/1816",
    title: "卡片机夜景怎么拍",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1904: {
    id: "FORUM_THREAD_1904",
    path: "/forum/thread/1904",
    title: "有人认识Linxia吗？",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1905: {
    id: "FORUM_THREAD_1905",
    path: "/forum/thread/1905",
    title: "旧体育馆现在还能进吗",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1906: {
    id: "FORUM_THREAD_1906",
    path: "/forum/thread/1906",
    title: "你们会不会把旧照片刻光盘",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1907: {
    id: "FORUM_THREAD_1907",
    path: "/forum/thread/1907",
    title: "网页字体显示乱码",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1908: {
    id: "FORUM_THREAD_1908",
    path: "/forum/thread/1908",
    title: "推荐几首雨天听的歌",
    sourceType: "ARCHIVED",
  },
  FORUM_THREAD_1910: { id: "FORUM_THREAD_1910", path: "/forum/thread/1910", title: "本周论坛维护通知", sourceType: "ARCHIVED" },
  FORUM_THREAD_1911: { id: "FORUM_THREAD_1911", path: "/forum/thread/1911", title: "建议把个人主页备份入口放明显一点", sourceType: "ARCHIVED" },
  FORUM_THREAD_1912: { id: "FORUM_THREAD_1912", path: "/forum/thread/1912", title: "今天南城又下雨了吗", sourceType: "ARCHIVED" },
  FORUM_THREAD_1913: { id: "FORUM_THREAD_1913", path: "/forum/thread/1913", title: "如果总是想起同一个人", sourceType: "ARCHIVED" },
  FORUM_THREAD_1914: { id: "FORUM_THREAD_1914", path: "/forum/thread/1914", title: "有没有适合坐公交听的歌", sourceType: "ARCHIVED" },
  FORUM_THREAD_1915: { id: "FORUM_THREAD_1915", path: "/forum/thread/1915", title: "出一个128M U盘", sourceType: "ARCHIVED" },
  FORUM_THREAD_1847_FRAGMENTS: {
    id: "FORUM_THREAD_1847_FRAGMENTS",
    path: "/archive/forum/thread/1847/fragments",
    title: "Thread 1847 Fragments",
    sourceType: "RECOVERED",
  },
  FORUM_THREAD_1847_COMPARE: {
    id: "FORUM_THREAD_1847_COMPARE",
    path: "/archive/forum/thread/1847/compare",
    title: "Thread 1847 State Compare",
    sourceType: "RECOVERED",
  },
  FORUM_SESSION_1847: {
    id: "FORUM_SESSION_1847",
    path: "/archive/forum/session/1847",
    title: "Summer17 Session Metadata",
    sourceType: "RECOVERED",
  },
  FORUM_SESSION_MATCH: {
    id: "FORUM_SESSION_MATCH",
    path: "/archive/forum/session/match",
    title: "Archived Session Relation",
    sourceType: "RECOVERED",
  },
  FORUM_POST_NEW: {
    id: "FORUM_POST_NEW",
    path: "/forum/post/new",
    title: "发表主题",
    sourceType: "SESSION",
  },
  FORUM_PLAYER_POST: {
    id: "FORUM_PLAYER_POST",
    path: "/forum/thread/PLAYER_POST_001",
    title: "PLAYER_POST_001",
    sourceType: "PLAYER_SESSION_ORIGINAL",
  },
  FORUM_PLAYER_POST_COMPARE: {
    id: "FORUM_PLAYER_POST_COMPARE",
    path: "/forum/thread/PLAYER_POST_001/compare",
    title: "PLAYER_POST_001 Version Compare",
    sourceType: "SYSTEM",
  },
  FORUM_PLAYER_POST_EDIT: {
    id: "FORUM_PLAYER_POST_EDIT",
    path: "/forum/thread/PLAYER_POST_001/edit",
    title: "Edit PLAYER_POST_001",
    sourceType: "SESSION",
  },
  FORUM_PLAYER_POST_ARCHIVE: {
    id: "FORUM_PLAYER_POST_ARCHIVE",
    path: "/archive/forum/thread/PLAYER_POST_001",
    title: "Cached Player Thread",
    sourceType: "ARCHIVED",
  },
  TIMELINE_20070817: {
    id: "TIMELINE_20070817",
    path: "/timeline/2007-08-17",
    title: "2007-08-17 Timeline",
    sourceType: "SYSTEM",
  },
  PHOTO17_FORENSICS: {
    id: "PHOTO17_FORENSICS",
    path: "/photo/forensics/DSC0417",
    title: "DSC0417 Provenance Viewer",
    sourceType: "SYSTEM",
    aliases: ["/photo/forensics/DSC0017"],
  },
  PHOTO17_SOURCE_WEB2007: {
    id: "PHOTO17_SOURCE_WEB2007",
    path: "/photo/forensics/DSC0417/source/web2007",
    title: "DSC0417 - Web 2007",
    sourceType: "ARCHIVED",
    aliases: ["/photo/forensics/DSC0017/source/web2007"],
  },
  PHOTO17_SOURCE_ARCHIVE2008: {
    id: "PHOTO17_SOURCE_ARCHIVE2008",
    path: "/photo/forensics/DSC0417/source/archive2008",
    title: "DSC0417 - Archive 2008",
    sourceType: "ARCHIVED",
    aliases: ["/photo/forensics/DSC0017/source/archive2008"],
  },
  PHOTO17_CLUB_INDEX: {
    id: "PHOTO17_CLUB_INDEX",
    path: "/archive/photo-club/20070817/index",
    title: "Photo Club File Index",
    sourceType: "RECOVERED",
  },
  PHOTO17_CLUB_FILE: {
    id: "PHOTO17_CLUB_FILE",
    path: "/archive/photo-club/20070817/DSC0417",
    title: "DSC0417 - Club Copy",
    sourceType: "ORIGINAL",
    aliases: ["/archive/photo-club/20070817/DSC0017"],
  },
  PHOTO17_VERSION_20070823: {
    id: "PHOTO17_VERSION_20070823",
    path: "/photo/forensics/DSC0417/version/20070823",
    title: "DSC0417 - 2007-08-23 Copy",
    sourceType: "RECOVERED",
    aliases: ["/photo/forensics/DSC0017/version/20070823"],
  },
  PHOTO17_VERSION_2015: {
    id: "PHOTO17_VERSION_2015",
    path: "/photo/forensics/DSC0417/version/2015",
    title: "DSC0417 - ROOM Restore 2015",
    sourceType: "RECONSTRUCTED",
    aliases: ["/photo/forensics/DSC0017/version/2015"],
  },
  PHOTO17_VERSION_2016: {
    id: "PHOTO17_VERSION_2016",
    path: "/photo/forensics/DSC0417/version/2016",
    title: "DSC0417 - Reconstruction 2016",
    sourceType: "RECONSTRUCTED",
    aliases: ["/photo/forensics/DSC0017/version/2016"],
  },
  PHOTO17_VERSION_2022: {
    id: "PHOTO17_VERSION_2022",
    path: "/photo/forensics/DSC0417/version/2022",
    title: "DSC0417 - Reconstruction 2022",
    sourceType: "RECONSTRUCTED",
    aliases: ["/photo/forensics/DSC0017/version/2022"],
  },
  PHOTO17_COMPARE: {
    id: "PHOTO17_COMPARE",
    path: "/photo/forensics/compare",
    title: "Photo 17 Compare",
    sourceType: "SYSTEM",
  },
  PHOTO17_HELP: {
    id: "PHOTO17_HELP",
    path: "/photo/forensics/help",
    title: "Photo Forensics Help",
    sourceType: "SYSTEM",
  },
  PHOTO17_SESSION_HISTORY: {
    id: "PHOTO17_SESSION_HISTORY",
    path: "/photo/forensics/DSC0417/session-history",
    title: "Photo 17 Session History",
    sourceType: "SESSION",
    aliases: ["/photo/forensics/DSC0017/session-history"],
  },
  PHOTO17_SIMILAR: {
    id: "PHOTO17_SIMILAR",
    path: "/photo/forensics/similar",
    title: "Similar Reconstructed Features",
    sourceType: "RECONSTRUCTED",
  },
  SUBJECT04_PHOTO17: {
    id: "SUBJECT04_PHOTO17",
    path: "/system/object/SUBJECT_04_PHOTO17",
    title: "SUBJECT_04 / PHOTO17",
    sourceType: "SYSTEM",
  },
  RECOVERY_BOOT: {
    id: "RECOVERY_BOOT",
    path: "/recovery/boot",
    title: "ROOM Recovery System",
    sourceType: "SYSTEM",
  },
  RECOVERY_LOGIN: {
    id: "RECOVERY_LOGIN",
    path: "/recovery/login",
    title: "ROOM Recovery Login",
    sourceType: "SYSTEM",
  },
  RECOVERY_DESKTOP: {
    id: "RECOVERY_DESKTOP",
    path: "/recovery/desktop",
    title: "ROOM Legacy Shell",
    sourceType: "SYSTEM",
  },
  CONTINUITY_SERVICE: {
    id: "CONTINUITY_SERVICE",
    path: "/service/continuity",
    title: "ROOM Continuity Service",
    sourceType: "SYSTEM",
  },
  ROOM_ABOUT: {
    id: "ROOM_ABOUT",
    path: "/service/room",
    title: "About ROOM",
    sourceType: "SYSTEM",
  },
  ROOM_HISTORY: {
    id: "ROOM_HISTORY",
    path: "/service/history",
    title: "ROOM Project History",
    sourceType: "SYSTEM",
  },
  ROOM_HISTORY_2011: { id: "ROOM_HISTORY_2011", path: "/service/history/2011", title: "ROOM History 2011", sourceType: "SYSTEM" },
  ROOM_HISTORY_2012: { id: "ROOM_HISTORY_2012", path: "/service/history/2012", title: "ROOM History 2012", sourceType: "SYSTEM" },
  ROOM_HISTORY_2013: { id: "ROOM_HISTORY_2013", path: "/service/history/2013", title: "ROOM History 2013", sourceType: "GENERATED" },
  ROOM_HISTORY_2014: { id: "ROOM_HISTORY_2014", path: "/service/history/2014", title: "ROOM History 2014", sourceType: "SYSTEM" },
  ROOM_HISTORY_2015: { id: "ROOM_HISTORY_2015", path: "/service/history/2015", title: "ROOM History 2015", sourceType: "SYSTEM" },
  ROOM_HISTORY_2016: { id: "ROOM_HISTORY_2016", path: "/service/history/2016", title: "ROOM History 2016", sourceType: "SYSTEM" },
  ROOM_HISTORY_2017: { id: "ROOM_HISTORY_2017", path: "/service/history/2017", title: "ROOM History 2017", sourceType: "SYSTEM" },
  ROOM_HISTORY_2018: { id: "ROOM_HISTORY_2018", path: "/service/history/2018", title: "ROOM History 2018", sourceType: "SYSTEM" },
  ROOM_HISTORY_2020: { id: "ROOM_HISTORY_2020", path: "/service/history/2020", title: "ROOM History 2020", sourceType: "SYSTEM" },
  ROOM_HISTORY_2022: { id: "ROOM_HISTORY_2022", path: "/service/history/2022", title: "ROOM History 2022", sourceType: "SYSTEM" },
  ROOM_HISTORY_2025: { id: "ROOM_HISTORY_2025", path: "/service/history/2025", title: "ROOM History 2025", sourceType: "SYSTEM" },
  ROOM_HISTORY_2026: { id: "ROOM_HISTORY_2026", path: "/service/history/2026", title: "ROOM History 2026", sourceType: "SESSION" },
  SUBJECT404_OBJECT: { id: "SUBJECT404_OBJECT", path: "/object/SUBJECT_404", title: "SUBJECT_404", sourceType: "SYSTEM" },
  UNRESOLVED_PERSONA_OBJECT: { id: "UNRESOLVED_PERSONA_OBJECT", path: "/object/UNRESOLVED_PERSONA", title: "UNRESOLVED_PERSONA", sourceType: "SYSTEM", aliases: ["/object/UNKNOWN"] },
  OBSERVER_SERVICE: { id: "OBSERVER_SERVICE", path: "/service/observer", title: "Observer Model", sourceType: "SESSION", aliases: ["/service/observer/profile"] },
  OBSERVER_INFERENCES: { id: "OBSERVER_INFERENCES", path: "/service/observer/inferences", title: "Observer Inferences", sourceType: "SESSION" },
  OBSERVER_CANDIDATE: { id: "OBSERVER_CANDIDATE", path: "/service/observer/candidate", title: "Observer Candidate 405", sourceType: "SESSION" },
  OBSERVER_AUTHORED_OBJECT: { id: "OBSERVER_AUTHORED_OBJECT", path: "/service/observer/object/PLAYER_POST_001", title: "Observer Authored Object", sourceType: "SESSION" },
  FINAL_REVIEW: { id: "FINAL_REVIEW", path: "/resolution/review", title: "ROOM 404 Final Review", sourceType: "SYSTEM" },
  FINAL_GENERATED_SAMPLE: { id: "FINAL_GENERATED_SAMPLE", path: "/resolution/review/generated", title: "Generated Linxia Final Test", sourceType: "GENERATED" },
  FINAL_SOURCE_BOUNDARY: { id: "FINAL_SOURCE_BOUNDARY", path: "/resolution/review/source-boundary", title: "Last Reliable Source", sourceType: "ORIGINAL" },
  FINAL_OBSERVER_REVIEW: { id: "FINAL_OBSERVER_REVIEW", path: "/resolution/review/observer", title: "Observer 405 Final Review", sourceType: "SESSION" },
  RESOLUTION_CENTER: { id: "RESOLUTION_CENTER", path: "/resolution", title: "Resolution Policies", sourceType: "SYSTEM" },
  ENDING_STATE: { id: "ENDING_STATE", path: "/resolution/state", title: "Post-Resolution State", sourceType: "SYSTEM" },
  ENDING_GALLERY: { id: "ENDING_GALLERY", path: "/resolution/gallery", title: "Ending Gallery", sourceType: "SYSTEM" },
  EVIDENCE_GRAPH: { id: "EVIDENCE_GRAPH", path: "/evidence/graph", title: "Evidence Graph", sourceType: "SYSTEM" },
  ACHIEVEMENTS: { id: "ACHIEVEMENTS", path: "/achievements", title: "Achievement Archive", sourceType: "SYSTEM" },
  CREDITS: { id: "CREDITS", path: "/credits", title: "Credits", sourceType: "SYSTEM" },
  CHAPTER_END: { id: "CHAPTER_END", path: "/chapter/end", title: "Chapter End", sourceType: "SYSTEM" },
  SYSTEM_404: {
    id: "SYSTEM_404",
    path: "/404",
    title: "404 Not Found",
    sourceType: "SYSTEM",
  },
  SYSTEM_403: {
    id: "SYSTEM_403",
    path: "/403",
    title: "403 Forbidden",
    sourceType: "SYSTEM",
  },
  SYSTEM_410: {
    id: "SYSTEM_410",
    path: "/410",
    title: "410 Gone",
    sourceType: "SYSTEM",
  },
};

export function findRouteByPath(input: string): GameRoute | undefined {
  const normalized = normalizeFakeUrl(input);
  const allRoutes = Object.values(routes);

  return allRoutes.find((route) => {
    const candidates = [route.path, ...(route.aliases ?? [])].map(normalizeFakeUrl);
    return candidates.includes(normalized);
  });
}

export function normalizeFakeUrl(input: string): string {
  const trimmed = input.trim();

  if (!trimmed) {
    return "/";
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const url = new URL(trimmed);
      return `${url.hostname}${url.pathname}`.replace(/\/$/, "") || "/";
    } catch {
      return trimmed;
    }
  }

  if (trimmed.startsWith("/")) {
    return trimmed.replace(/\/$/, "") || "/";
  }

  return trimmed.replace(/\/$/, "");
}
