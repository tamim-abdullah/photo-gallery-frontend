// src/components/Masonry.tsx
'use client';

import React from 'react';
import { Masonry as MuiMasonry } from '@mui/lab';

interface MasonryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: number;
  spacing?: number; // in MUI units (1 = 8px)
}

export default function Masonry<T>({
  items,
  renderItem,
  columns = 4,
  spacing = 5, // = 16px
}: MasonryProps<T>) {
  return (
    <MuiMasonry columns={columns} spacing={spacing}>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </MuiMasonry>
  );
}