import { useEffect, useState } from "react";
import BlobBackground from "./Blob";
import { type IdentityItem } from "~/data/data";

interface BlobWithPosition extends IdentityItem {
  top: number;
  left: number;
}

const generateNonOverlappingBlobs = (
  count: number,
  width: number,
  height: number,
  minDistance = 100,
  margin = 30
): BlobWithPosition[] => {
  const blobs: BlobWithPosition[] = [];

  const distance = (a: BlobWithPosition, b: BlobWithPosition) => {
    const dx = a.left - b.left;
    const dy = a.top - b.top;
    return Math.sqrt(dx * dx + dy * dy);
  };

  while (blobs.length < count && blobs.length < 1000) {
    const candidate: BlobWithPosition = {
      id: "blob_" + Math.random().toString(36).substring(2, 11),
      g1: Math.random(),
      g2: Math.random(),
      g3: Math.random(),
      g4: Math.random(),
      g5: Math.random(),
      g6: Math.random(),
      top: margin + Math.random() * (height - 2 * margin),
      left: Math.random() * width,
    };

    const tooClose = blobs.some((b) => distance(b, candidate) < minDistance);
    if (!tooClose) {
      blobs.push(candidate);
    }
  }

  return blobs;
};

const BlobsContainer = ({ count }: { count: number }) => {
  const [blobs, setBlobs] = useState<BlobWithPosition[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const generated = generateNonOverlappingBlobs(count, width, height);
    setBlobs(generated);
  }, [count]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          style={{
            position: "absolute",
            top: `${blob.top}px`,
            left: `${blob.left}px`,
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "200px",
          }}
        >
          <BlobBackground identity={blob} />
        </div>
      ))}
    </div>
  );
};

export default BlobsContainer;