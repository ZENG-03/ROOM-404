export interface TextPoolMatch {
  line: number;
  heading: string;
  excerpt: string;
}

export interface TextPoolSearchResult {
  matches: TextPoolMatch[];
  stats: {
    lines: number;
    characters: number;
  };
}

function compact(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

let textPoolLines: string[] | null = null;
let textPoolCharacters = 0;
let loadPromise: Promise<void> | null = null;

async function loadTextPool(): Promise<void> {
  if (textPoolLines) return;
  if (!loadPromise) {
    loadPromise = fetch("/content/room404-text-pool.txt")
      .then((response) => {
        if (!response.ok) throw new Error(`Text pool request failed: ${response.status}`);
        return response.text();
      })
      .then((text) => {
        textPoolLines = text.split(/\r?\n/);
        textPoolCharacters = text.length;
      });
  }
  await loadPromise;
}

export async function searchTextPool(query: string, limit = 5): Promise<TextPoolSearchResult> {
  await loadTextPool();
  const normalizedQuery = compact(query).toLocaleLowerCase();
  if (normalizedQuery.length < 2) return { matches: [], stats: { lines: textPoolLines?.length ?? 0, characters: textPoolCharacters } };

  const matches: TextPoolMatch[] = [];
  let lastMatchLine = -10;

  const lines = textPoolLines ?? [];
  for (let index = 0; index < lines.length && matches.length < limit; index += 1) {
    if (!lines[index].toLocaleLowerCase().includes(normalizedQuery)) continue;
    if (index - lastMatchLine < 5) continue;

    const context = lines
      .slice(Math.max(0, index - 1), Math.min(lines.length, index + 3))
      .map(compact)
      .filter(Boolean);
    const heading = context.find((line) => line.startsWith("【") || line.startsWith("#") || /^\d+[、.]/.test(line)) ?? "TEXT POOL RECORD";
    matches.push({
      line: index + 1,
      heading,
      excerpt: context.join(" ").slice(0, 260),
    });
    lastMatchLine = index;
  }

  return { matches, stats: { lines: lines.length, characters: textPoolCharacters } };
}
