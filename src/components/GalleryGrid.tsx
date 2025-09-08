// components/GalleryGrid.tsx
import type { ImageData } from '@/types/image';

export default function GalleryGrid({ images }: { images: ImageData[] }) {
  const columns = 3; // number of columns on desktop
  const splitImages: ImageData[][] = Array.from({ length: columns }, () => []);

  // distribute images into columns round-robin
  images.forEach((img, idx) => {
    splitImages[idx % columns].push(img);
  });

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
      {splitImages.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col grid gap-4">
          {col.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={img.alt}
              className="w-full rounded-xl shadow"
            />
          ))}
        </div>
      ))}
    </div>

  );
}
