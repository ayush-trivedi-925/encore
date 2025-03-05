"use client";
import Masonry from "react-masonry-css";

export default function PostsGrid() {
  const images = [
    "https://picsum.photos/id/30/1024/768.jpg",
    "https://picsum.photos/id/69/768/1024.jpg",
    "https://picsum.photos/id/42/1024/768.jpg",
    "https://picsum.photos/id/25/768/1024.jpg",
    "https://picsum.photos/id/88/1024/768.jpg",
    "https://picsum.photos/id/12/768/1024.jpg",
    "https://picsum.photos/id/50/1024/768.jpg",
    "https://picsum.photos/id/52/768/1024.jpg",
    "https://picsum.photos/id/56/1024/768.jpg",
    "https://picsum.photos/id/58/768/1024.jpg",
    "https://picsum.photos/id/60/1024/768.jpg",
    "https://picsum.photos/id/12/768/1024.jpg",
    "https://picsum.photos/id/88/1024/768.jpg",
    "https://picsum.photos/id/95/768/1024.jpg",
    "https://picsum.photos/id/90/1024/768.jpg",
  ];
  const breakpointColumnsObj = {
    default: 3,
    500: 2,
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4"
        columnClassName="pl-4"
      >
        {images.map((src, idx) => {
          return (
            <div key={idx} className="mt-4">
              <img src={src} alt={idx} />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
