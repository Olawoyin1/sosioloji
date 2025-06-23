// src/store/useBlogStore.ts
import { create } from 'zustand';

interface CardItem {
  id: number;
  title: string;
  slug: string;
  author: string;
  body: string;
  description: string;
  category: string;
  tag: string;
  subTag?: string;
  subTagC?: string;
  image: string;
  video?: string;
  contentImages?: string[];
  buttonLabel: string;
  buttonLink: string;
  buttonBgColor: string;
  created_at: string;
}

interface BlogState {
  posts: CardItem[];
  setPosts: (posts: CardItem[]) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
