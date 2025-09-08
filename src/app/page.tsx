// app/page.tsx
'use client';

import { useState } from 'react';
import type { ImageData } from '@/types/image';
import GalleryGrid from '@/components/GalleryGrid';
import UploadButton from '@/components/UploadButton';

export default function HomePage() {
  // Extended mock data for better masonry effect
  const mockImages: ImageData[] = [
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

  const [images, setImages] = useState<ImageData[]>(mockImages);

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const newImage: ImageData = {
      url: imageUrl,
      alt: `Uploaded image - ${file.name}`,
      id: Date.now().toString(),
    };
    setImages(prev => [newImage, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900 tracking-tight">
                Gallery
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {images.length} {images.length === 1 ? 'photo' : 'photos'}
              </p>
            </div>
            <UploadButton onImageUpload={handleImageUpload} />
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main>
        {images.length === 0 ? (
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="text-gray-400 mb-4">
              <svg 
                className="w-16 h-16 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No images yet</p>
            <p className="text-gray-400 text-sm mt-2">Upload your first image to get started</p>
          </div>
        ) : (
          <GalleryGrid images={images} />
        )}
      </main>
    </div>
  );
}