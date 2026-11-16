"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const VIDEOS = [
  {
    title: "Invisible Grill Installation",
    views: "98.2K",
    src: "/videos/gallery/reel-1-min.mp4",
    poster: "/images/gallery/reel-1-poster.webp",
  },
  {
    title: "Balcony Transformation",
    views: "431K",
    src: "/videos/gallery/reel-2-min.mp4",
    poster: "/images/gallery/reel-2-poster.webp",
  },
  {
    title: "Honeycomb Net in Action",
    views: "12.4K",
    src: "/videos/gallery/reel-3-min.mp4",
    poster: "/images/gallery/reel-3-poster.webp",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof VIDEOS)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleEnter = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const handleLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE_LUXURY }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="glass-panel group relative aspect-[9/16] w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full gold-gradient">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="translate-x-0.5"
            >
              <path d="M4 2.5L15 9L4 15.5V2.5Z" fill="#0B1114" />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-sm font-medium text-text-primary">
          {video.title}
        </p>
        <p className="mt-1 text-xs text-accent-gold">
          {video.views} views
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoGallery() {
  return (
    <section className="bg-surface px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            SEE IT IN ACTION
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Installations That{" "}
            <span className="italic text-accent-gold">Speak for Themselves</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.title} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}