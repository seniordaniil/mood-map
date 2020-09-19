export type Mood = 'negative' | 'positive' | 'high-energy' | 'low-energy';

export interface Post {
  author: {
    name: string;
    photo: string;
  };
  date: string;
  picture: string;
  mood: Mood;
  likes: number;
  comments: number;
  reposts: number;
  views: number;
}

export interface Topic {
  id: number;
  icon: string;
  name: string;
  position?: [number, number];
  mood: Mood;
  posts: Post[];
}
