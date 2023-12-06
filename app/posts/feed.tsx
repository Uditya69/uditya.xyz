"use client"// components/Feed.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const accessToken = 'IGQWROeWtwSnljWmNLMURlbXNJVFl5dGlWRFJKM09uREo0Yk1pSUJ3aW5JYzc1SEV5RTVUWVlEcTU0VURrZAHJna2l1ZAnJObjdtb2pzMFAycUkyZATJRS1BwUUlnYk5UQm9JZAkZAuWWVPb2EzOC1yd2g1TUhqVDJvUFEZD';

        const response = await axios.get<{ data: InstagramPost[] }>(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
        );

        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram feed:', error);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Some of my Shots📷</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden hover:text-slate-600 hover:rounded-md">
              <img src={post.media_url} alt={post.caption} className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 overflow-hidden whitespace-nowrap overflow-ellipsis opacity-0 transition-opacity group-hover:opacity-100">
                {post.caption.slice(0, 30)}
              </div>
              <p className="mt-2">{post.caption.slice(0, 30)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Feed;
