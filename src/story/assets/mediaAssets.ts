import type { AssetId, MediaAsset } from "../../game/types";

const PHOTO_ROOT = `${import.meta.env.BASE_URL}assets/photos`;

function photoCandidates(stem: string): string[] {
  return ["jpg", "png", "webp", "jpeg"].map((extension) => `${PHOTO_ROOT}/${stem}.${extension}`);
}

export const mediaAssets: Record<AssetId, MediaAsset> = {
  linxia_photo_02: {
    id: "linxia_photo_02",
    title: "Photo 02 - 空教室",
    alt: "下午四点的空教室",
    sourceType: "ARCHIVED",
    expectedFile: "linxia-photo-02.jpg",
    candidates: photoCandidates("linxia-photo-02"),
    aspectRatio: "4 / 3",
  },
  linxia_photo_05: {
    id: "linxia_photo_05",
    title: "Photo 05 - 公交站",
    alt: "公交站",
    sourceType: "ARCHIVED",
    expectedFile: "linxia-photo-05.jpg",
    candidates: photoCandidates("linxia-photo-05"),
    aspectRatio: "4 / 3",
  },
  linxia_photo_08: {
    id: "linxia_photo_08",
    title: "Photo 08 - 旧城区招牌",
    alt: "旧城区招牌",
    sourceType: "ARCHIVED",
    expectedFile: "linxia-photo-08.jpg",
    candidates: photoCandidates("linxia-photo-08"),
    aspectRatio: "4 / 3",
  },
  linxia_photo_11: {
    id: "linxia_photo_11",
    title: "Photo 11 - 周然背影",
    alt: "周然背影",
    sourceType: "ARCHIVED",
    expectedFile: "linxia-photo-11.jpg",
    candidates: photoCandidates("linxia-photo-11"),
    aspectRatio: "4 / 3",
  },
  linxia_photo_13: {
    id: "linxia_photo_13",
    title: "Photo 13 - 顾言在弄电脑",
    alt: "顾言在弄电脑",
    sourceType: "ARCHIVED",
    expectedFile: "linxia-photo-13.jpg",
    candidates: photoCandidates("linxia-photo-13"),
    aspectRatio: "4 / 3",
  },
  photo17_web_v0: {
    id: "photo17_web_v0",
    title: "Photo 17 - Web Variant 0",
    alt: "旧体育馆侧门",
    sourceType: "ARCHIVED",
    expectedFile: "photo17-web-v0.jpg",
    candidates: photoCandidates("photo17-web-v0"),
    aspectRatio: "16 / 10",
    notes: "首次访问版本，无明显人物。",
  },
  photo17_web_v1: {
    id: "photo17_web_v1",
    title: "Photo 17 - Web Variant 1",
    alt: "旧体育馆侧门，右后方门框边缘有难以确认的暗块",
    sourceType: "ARCHIVED",
    expectedFile: "photo17-web-v1.jpg",
    candidates: photoCandidates("photo17-web-v1"),
    aspectRatio: "16 / 10",
    notes: "第二次访问版本，人形暗块极轻。",
  },
  photo17_web_v2: {
    id: "photo17_web_v2",
    title: "Photo 17 - Web Variant 2",
    alt: "旧体育馆侧门，右后方的暗块比之前更清楚",
    sourceType: "ARCHIVED",
    expectedFile: "photo17-web-v2.jpg",
    candidates: photoCandidates("photo17-web-v2"),
    aspectRatio: "16 / 10",
    notes: "第三次及后续访问版本，仍不可确定是不是人。",
  },
  photo17_original: {
    id: "photo17_original",
    title: "DSC0417.JPG - Camera Original",
    alt: "2007 年相机原图，旧体育馆侧门，无明确第四人",
    sourceType: "ORIGINAL",
    expectedFile: "photo17-original.jpg",
    candidates: photoCandidates("photo17-original"),
    aspectRatio: "4 / 3",
  },
  photo17_club_copy: {
    id: "photo17_club_copy",
    title: "DSC0417.JPG - Club Copy",
    alt: "摄影社电脑复制的 2007 年原图，无明确第四人",
    sourceType: "ORIGINAL",
    expectedFile: "photo17-club-copy.jpg",
    candidates: photoCandidates("photo17-club-copy"),
    aspectRatio: "4 / 3",
  },
  photo17_backup_20070823: {
    id: "photo17_backup_20070823",
    title: "DSC0417.JPG - 2007-08-23 Copy",
    alt: "2007 年 8 月 23 日恢复副本，无明确第四人",
    sourceType: "RECOVERED",
    expectedFile: "photo17-backup-20070823.jpg",
    candidates: photoCandidates("photo17-backup-20070823"),
    aspectRatio: "4 / 3",
  },
  photo17_restore_2015: {
    id: "photo17_restore_2015",
    title: "Photo 17 - ROOM Restore 2015",
    alt: "2015 年恢复版，暗部更亮但无明确第四人",
    sourceType: "RECONSTRUCTED",
    expectedFile: "photo17-restore-2015.jpg",
    candidates: photoCandidates("photo17-restore-2015"),
    aspectRatio: "4 / 3",
  },
  photo17_recon_2016: {
    id: "photo17_recon_2016",
    title: "Photo 17 - Reconstruction 2016",
    alt: "2016 年重建版，门框暗处出现模糊人形特征",
    sourceType: "RECONSTRUCTED",
    expectedFile: "photo17-recon-2016.jpg",
    candidates: photoCandidates("photo17-recon-2016"),
    aspectRatio: "4 / 3",
  },
  photo17_recon_2022: {
    id: "photo17_recon_2022",
    title: "Photo 17 - Reconstruction 2022",
    alt: "2022 年重建版，门框暗处人形特征更明确",
    sourceType: "RECONSTRUCTED",
    expectedFile: "photo17-recon-2022.jpg",
    candidates: photoCandidates("photo17-recon-2022"),
    aspectRatio: "4 / 3",
  },
  photo17_session: {
    id: "photo17_session",
    title: "Photo 17 - Current Session",
    alt: "当前会话展示版本，来自动态重建呈现",
    sourceType: "SESSION",
    expectedFile: "photo17-session.jpg",
    candidates: photoCandidates("photo17-session"),
    aspectRatio: "4 / 3",
  },
};

export function getMediaAsset(assetId: AssetId): MediaAsset {
  return mediaAssets[assetId];
}

export function resolvePhoto17Asset(visitCount: number): MediaAsset {
  if (visitCount <= 1) {
    return mediaAssets.photo17_web_v0;
  }

  if (visitCount === 2) {
    return mediaAssets.photo17_web_v1;
  }

  return mediaAssets.photo17_web_v2;
}

