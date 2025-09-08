// hooks/useImageUpload.ts
'use client';

import { useState } from 'react';
import { uploadImage } from '@/lib/api';
import { ImageMetadata } from '@/types/image';

export function useImageUpload(onSuccess?: (image: ImageMetadata) => void) {
  const [isUploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const result = await uploadImage(file);
      onSuccess?.(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return { upload, isUploading, error };
}