import { evidenceRegistry } from "./chapter01/content";
import { chapter02EvidenceRegistry } from "./chapter02/forumContent";
import { chapter03EvidenceRegistry } from "./chapter03/photo17Content";
import { chapter04EvidenceRegistry } from "./chapter04/recoveryContent";
import { chapter05EvidenceRegistry } from "./chapter05/systemContent";
import { finalEvidenceRegistry } from "./final/finalContent";
import { playerPostEvidenceRegistry } from "./forum/playerPostContent";

export const allEvidence: Record<string, Evidence> = {
  ...evidenceRegistry,
  ...chapter02EvidenceRegistry,
  ...chapter03EvidenceRegistry,
  ...chapter04EvidenceRegistry,
  ...chapter05EvidenceRegistry,
  ...finalEvidenceRegistry,
  ...playerPostEvidenceRegistry,
};
import type { Evidence } from "../game/types";
