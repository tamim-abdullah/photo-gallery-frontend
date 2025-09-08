import React from "react";

interface MasonryProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function Masonry<T>({ items, renderItem }: MasonryProps<T>) {
    return (
        <div className="gap-4 space-y-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            {items.map(renderItem)}
        </div>
    );
}
