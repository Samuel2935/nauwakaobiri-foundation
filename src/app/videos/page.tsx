import { getYouTubeVideos, type YouTubeVideo } from "@/lib/youtube";
import VideoCard from "@/components/videos/video-card";

export const revalidate = 21600;

export default async function VideosPage() {
  let videos: YouTubeVideo[] = [];

  try {
    videos = await getYouTubeVideos();
  } catch (error) {
    console.error("Failed to load YouTube videos:", error);
  }

  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Our Activities & Community Engagement
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          Watch our latest conversations, stories, programmes, and community
          activities.
        </p>
      </header>

      {/* Videos */}
      {videos.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center">
          <p className="text-gray-600">
            No videos are currently available.
          </p>
        </div>
      ) : (
        <section
          aria-label="Video episodes"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </section>
      )}
    </main>
  );
}