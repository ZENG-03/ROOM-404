import type { Evidence } from "../../game/types";

export const chapter03EvidenceRegistry: Record<string, Evidence> = {
  E030_photo17_original_club_copy: {
    id: "E030_photo17_original_club_copy",
    title: "Photo17 原始链：相机与摄影社副本 Hash 一致",
    sourceType: "ORIGINAL",
    summary: "DSC0417.JPG 的相机/存储卡记录与摄影社 19:06 副本字节一致，均无明确第四人。",
    supports: ["knows_photo17_original_no_fourth_person"],
  },
  E031_photo17_recovered_copy: {
    id: "E031_photo17_recovered_copy",
    title: "Photo17：2007-08-23 恢复副本",
    sourceType: "RECOVERED",
    summary: "该副本与原图 Hash 不同，但差异分布符合全局重编码，未检测到局部插入。",
    supports: ["knows_20070823_copy_no_fourth_person", "knows_hash_difference_not_proof_of_edit"],
  },
  E032_reconstruction_recursion: {
    id: "E032_reconstruction_recursion",
    title: "重建链：后代版本被再次用作输入",
    sourceType: "RECONSTRUCTED",
    summary: "2016 到 2022 的处理记录显示，先前重建版本参与了后续输入。",
    supports: ["knows_reconstruction_uses_previous_generation"],
  },
  E033_photo17_session_variant_log: {
    id: "E033_photo17_session_variant_log",
    title: "Photo17 会话版本日志",
    sourceType: "SESSION",
    summary: "2026 会话按访问状态选择展示版本，当前预览不是固定原始文件。",
    supports: ["knows_current_photo_is_dynamic_session_variant"],
  },
  E034_2016_artifact: {
    id: "E034_2016_artifact",
    title: "2016 Reconstruction：首次人形特征",
    sourceType: "RECONSTRUCTED",
    summary: "与 2015 Restore 对比后，门框附近出现局部结构性增量。",
    supports: ["knows_human_first_appears_in_reconstruction"],
  },
  E035_feature_persistence: {
    id: "E035_feature_persistence",
    title: "2022 Reconstruction：特征递归强化",
    sourceType: "RECONSTRUCTED",
    summary: "2022 版本的人形特征更稳定，但仍无可辨认脸部。",
    supports: ["knows_reconstruction_uses_previous_generation"],
  },
};
