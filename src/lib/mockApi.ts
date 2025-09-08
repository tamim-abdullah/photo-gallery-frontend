// src/lib/mockApi.ts
import { ImageMetadata } from '@/types/image';

// Mock images
const mockImages: ImageMetadata[] = [
  {
    id: 1,
    filename: 'sunset.jpg',
    url: 'https://picsum.photos/600/200?random=1',
    uploadedAt: new Date('2024-06-01T10:00:00Z').toISOString(),
  },
  {
    id: 2,
    filename: 'mountain.jpg',
    url: 'https://picsum.photos/300/600?random=2',
    uploadedAt: new Date('2024-06-02T14:30:00Z').toISOString(),
  },
  {
    id: 3,
    filename: 'ocean.jpg',
    url: 'https://picsum.photos/100/300?random=3',
    uploadedAt: new Date('2024-06-03T09:15:00Z').toISOString(),
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchImages(): Promise<ImageMetadata[]> {
  await delay(800); // Simulate loading
  return [...mockImages]; // Return copy so we can modify safely
}

export async function uploadImage(file: File): Promise<ImageMetadata> {
  await delay(1200); // Simulate upload

  // Generate mock response
  const newImage: ImageMetadata = {
    id: mockImages.length + 1,
    filename: file.name,
    url: URL.createObjectURL(file), // 👈 Creates local preview URL!
    uploadedAt: new Date().toISOString(),
  };

  // Optional: Add to mock list if you want persistence during dev session
  mockImages.unshift(newImage);

  return newImage;
}