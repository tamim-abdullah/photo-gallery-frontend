// app/page.tsx
'use client';

import { useState } from 'react';
import type { Image } from '@/types/image';
import Masonry from '@/components/Masonry';

export default function HomePage() {
  // Mock data
  const initialImages: Image[] = [
    { url: 'https://picsum.photos/400/600?random=1', alt: 'Nature landscape' },
    { url: 'https://picsum.photos/400/300?random=2', alt: 'Urban architecture' },
    { url: 'https://picsum.photos/400/800?random=3', alt: 'Portrait photography' },
    { url: 'https://picsum.photos/400/400?random=4', alt: 'Abstract art' },
    { url: 'https://picsum.photos/400/500?random=5', alt: 'Street photography' },
    { url: 'https://picsum.photos/400/700?random=6', alt: 'Minimalist design' },
    { url: 'https://picsum.photos/400/350?random=7', alt: 'Food photography' },
    { url: 'https://picsum.photos/400/600?random=8', alt: 'Travel destination' },
    { url: 'https://picsum.photos/400/450?random=9', alt: 'Wildlife' },
    { url: 'https://picsum.photos/400/550?random=10', alt: 'Technology' },
    { url: 'https://picsum.photos/400/650?random=11', alt: 'Fashion' },
    { url: 'https://picsum.photos/400/400?random=12', alt: 'Vintage style' },
  ];

  const [images, setImages] = useState<Image[]>(initialImages);

  const renderItem = (item: Image, index: number) => {
    return (
      <img
        src={item.url}
        alt={item.alt}
        className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      />
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Image Gallery</h1>
      <Masonry items={images} renderItem={renderItem} />
    </div>
  );
}