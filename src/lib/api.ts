// src/lib/api.ts
// 🚨 UNCOMMENT THIS LINE TO USE MOCKS INSTEAD OF REAL API
import * as mockApi from './mockApi';

// 🚫 COMMENT OUT OR REMOVE REAL API CALLS FOR NOW
/*
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchImages(): Promise<ImageMetadata[]> {
  const res = await fetch(`${API_BASE}/images`);
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
}

export async function uploadImage(file: File): Promise<ImageMetadata> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/images/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to upload image");
  return res.json();
}
*/

// ✅ EXPORT MOCKS INSTEAD
export const fetchImages = mockApi.fetchImages;
export const uploadImage = mockApi.uploadImage;