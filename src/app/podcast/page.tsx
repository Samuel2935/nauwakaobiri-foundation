const videos = [
  {
    id: "aZBn7vSMKyY",
    title: "Episode 1",
  },
  {
    id: "m_glK9pHQxk",
    title: "Episode 2",
  },
  {
    id: "uoUn248YK3Y",
    title: "Episode 3",
  },
];

export default function PodcastPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">
        Podcast Episodes
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-4">
              <h2 className="font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}