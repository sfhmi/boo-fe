export interface PostList {
  posts: Post[];
}

export interface Post {
  id: string;
  user: User;
  created_at: string; // e.g. "25d", "1w", "10h"
  award: Award;
  content: PostContent;
  stats: PostStats;
  share: string;
  replies: Post[];
}

export interface User {
  name: string;
  avatar: string; // URL of dummy avatar
  badges: Badge[];
  mbti: string;
  zodiac: string;
  range: number[];
}

export interface Badge {
  type: "mbti" | "zodiac" | "age_range";
  label: string;
  color?: string; // optional (only some badges)
  icon?: string; // optional (zodiac etc.)
  highlight?: boolean; // optional (age badge)
}

export interface Award {
  count: number;
}

export interface PostContent {
  text: string;
  highlights: string[];
}

export interface PostStats {
  likes: number;
  comments: number;
  reposts: number;
  bookmarks: number;
}
