import type { GameState, SourceType } from "../types";
import { allEvidence } from "../../story/evidenceRegistry";

export type EvidenceGraphNodeKind = "SOURCE" | "EVIDENCE" | "KNOWLEDGE";

export interface EvidenceGraphNode {
  id: string;
  kind: EvidenceGraphNodeKind;
  label: string;
  summary: string;
  sourceType?: SourceType;
  known: boolean;
}

export interface EvidenceGraphEdge {
  from: string;
  to: string;
  relation: "contains" | "supports";
  known: boolean;
}

const sourceLabels: Partial<Record<SourceType, string>> = {
  ORIGINAL: "Original source",
  RECOVERED: "Recovered object",
  ALTERED: "Altered snapshot",
  ARCHIVED: "Archived page",
  RECONSTRUCTED: "Reconstructed object",
  GENERATED: "Generated output",
  SYSTEM: "ROOM system",
  SESSION: "Current session",
  PLAYER_SESSION_ORIGINAL: "Player session original",
  UNKNOWN: "Unknown source",
};

export function buildEvidenceGraph(state: GameState) {
  const nodes: EvidenceGraphNode[] = [];
  const edges: EvidenceGraphEdge[] = [];
  const sourceIds = new Set<string>();
  const knownEvidenceIds = new Set(state.evidenceIds);
  const knownKnowledgeIds = new Set(state.knowledgeIds);

  for (const evidenceId of state.evidenceIds) {
    const evidence = allEvidence[evidenceId];
    if (!evidence) continue;
    const sourceId = `source:${evidence.sourceType}`;
    if (!sourceIds.has(sourceId)) {
      sourceIds.add(sourceId);
      nodes.push({ id: sourceId, kind: "SOURCE", label: sourceLabels[evidence.sourceType] ?? evidence.sourceType, summary: `${evidence.sourceType} provenance layer`, sourceType: evidence.sourceType, known: true });
    }
    const evidenceNodeId = `evidence:${evidence.id}`;
    nodes.push({ id: evidenceNodeId, kind: "EVIDENCE", label: evidence.title, summary: evidence.summary, sourceType: evidence.sourceType, known: knownEvidenceIds.has(evidence.id) });
    edges.push({ from: sourceId, to: evidenceNodeId, relation: "contains", known: true });

    for (const knowledgeId of evidence.supports) {
      const knowledgeNodeId = `knowledge:${knowledgeId}`;
      if (!nodes.some((node) => node.id === knowledgeNodeId)) {
        nodes.push({ id: knowledgeNodeId, kind: "KNOWLEDGE", label: knowledgeId, summary: knownKnowledgeIds.has(knowledgeId) ? "Established in the current Session." : "Possible conclusion supported by this source.", known: knownKnowledgeIds.has(knowledgeId) });
      }
      edges.push({ from: evidenceNodeId, to: knowledgeNodeId, relation: "supports", known: knownKnowledgeIds.has(knowledgeId) });
    }
  }

  for (const knowledgeId of state.knowledgeIds) {
    const knowledgeNodeId = `knowledge:${knowledgeId}`;
    if (!nodes.some((node) => node.id === knowledgeNodeId)) nodes.push({ id: knowledgeNodeId, kind: "KNOWLEDGE", label: knowledgeId, summary: "Established conclusion without a single attached evidence card.", known: true });
  }

  return { nodes, edges };
}
