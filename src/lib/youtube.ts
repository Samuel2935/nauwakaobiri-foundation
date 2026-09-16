const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

interface YouTubeSearchResponse {
  nextPageToken?: string;
  items: {
    id: {
      videoId?: string;
    };
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        high?: {
          url: string;
        };
        medium?: {
          url: string;
        };
        default?: {
          url: string;
        };
      };
    };
  }[];
}

interface YouTubeErrorResponse {
  error?: {
    code?: number;
    message?: string;
    status?: string;
    errors?: {
      domain?: string;
      reason?: string;
      message?: string;
    }[];
  };
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey) {
    throw new Error("YOUTUBE_API_KEY is missing");
  }

  if (!channelId) {
    throw new Error("YOUTUBE_CHANNEL_ID is missing");
  }

  const videos: YouTubeVideo[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      part: "snippet",
      channelId,
      maxResults: "50",
      order: "date",
      type: "video",
      key: apiKey,
    });

    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const url = `${YOUTUBE_API_URL}/search?${params.toString()}`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      const responseText = await response.text();

      let errorData: YouTubeErrorResponse | null = null;

      try {
        errorData = JSON.parse(responseText);
      } catch {
        // Response wasn't JSON
      }

      const youtubeMessage =
        errorData?.error?.message ||
        responseText ||
        response.statusText;

      console.error(
        `YouTube API Error [${response.status}]: ${youtubeMessage}`,
      );

      console.error(
        "YouTube API error details:",
        JSON.stringify(errorData, null, 2),
      );

      throw new Error(
        `YouTube API request failed (${response.status}): ${youtubeMessage}`,
      );
    }

    const data: YouTubeSearchResponse = await response.json();

    for (const item of data.items) {
      const videoId = item.id.videoId;

      if (!videoId) continue;

      videos.push({
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail:
          item.snippet.thumbnails.high?.url ??
          item.snippet.thumbnails.medium?.url ??
          item.snippet.thumbnails.default?.url ??
          "",
      });
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return videos;
}