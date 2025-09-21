// src/components/Masonry.tsx
'use client';

import React from "react";

interface MasonryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Masonry<T>({ items, renderItem }: MasonryProps<T>) {
  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-min">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}