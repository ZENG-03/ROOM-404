import { useEffect, useMemo, useState } from "react";
import type { MediaAsset } from "../../game/types";

interface MediaSlotProps {
  asset: MediaAsset;
  className?: string;
}

export function MediaSlot({ asset, className }: MediaSlotProps) {
  const candidates = useMemo(() => asset.candidates.filter(Boolean), [asset.candidates]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCandidateIndex(0);
    setFailed(false);
  }, [asset.id]);

  const currentSrc = candidates[candidateIndex];

  function handleImageError() {
    const nextIndex = candidateIndex + 1;

    if (nextIndex < candidates.length) {
      setCandidateIndex(nextIndex);
      return;
    }

    setFailed(true);
  }

  return (
    <div
      className={["media-slot", className].filter(Boolean).join(" ")}
      style={{ aspectRatio: asset.aspectRatio }}
      data-asset-id={asset.id}
    >
      {currentSrc && !failed ? (
        <img src={currentSrc} alt={asset.alt} onError={handleImageError} />
      ) : (
        <div className="media-placeholder" role="img" aria-label={asset.alt}>
          <span>{asset.title}</span>
          <small>{asset.expectedFile}</small>
        </div>
      )}
    </div>
  );
}
