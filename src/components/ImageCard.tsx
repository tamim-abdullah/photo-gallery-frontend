// components/ImageCard.tsx
import type { Image } from '@/types/image';

export default function ImageCard({ url, alt }: ImageData) {
  return (
    <div className="p-1 sm:p-2 md:p-3 lg:p-4">
      {/* <div className="h-auto max-w-full rounded-lg block"> */}
          <img
            src={url}
            alt={alt}
            className="w-full h-auto block rounded-lg"
            loading="lazy"
          />
      {/* </div>   */}
    </div>
  );
}