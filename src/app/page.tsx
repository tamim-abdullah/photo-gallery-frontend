// app/page.tsx
'use client';

import { useState } from 'react';
import type { Image } from '@/types/image';
import GalleryGrid from '@/components/GalleryGrid';
import UploadButton from '@/components/UploadButton';
import Masonry from '@/components/Masonry';
import { mock } from 'node:test';

export default function HomePage() {
  // Extended mock data for better masonry effect
  const items: Image[] = [
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

  const [images, setImages] = useState<Image[]>(items);

  const renderItem = (item: Image) => {
    return (
      <div key={item.alt}>
        <img src={item.url} alt={item.alt} className="w-full h-full" />
      </div>
    );
  }

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const newImage: Image = {
      url: imageUrl,
      alt: `Uploaded image - ${file.name}`,
      id: Date.now().toString(),
    };
    setImages(prev => [newImage, ...prev]);
  };

  return (
    // <GalleryGrid images={images}/>
    <div className='max-w-7xl mx-auto'>
      <Masonry items={items} renderItem={renderItem} /> 
    </div>
  );
}