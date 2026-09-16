"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

import type { YouTubeVideo } from "@/lib/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const publishedDate = new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(video.publishedAt));

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Video */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* Thumbnail */}
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />

            {/* Play Button */}
            <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-16">
              <Play
                size={24}
                fill="currentColor"
                className="ml-1"
                aria-hidden="true"
              />
            </span>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-2 text-lg font-semibold leading-7 text-gray-900">
          {video.title}
        </h2>

        <time
          dateTime={video.publishedAt}
          className="mt-2 block text-sm text-gray-500"
        >
          {publishedDate}
        </time>
      </div>
    </motion.article>
  );
}