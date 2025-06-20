// src/utils/Types.ts
export interface CardItem {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryLink: string;
  subTag: string; // ✅ make it required
  subTagC?: string;
  image: string;
  buttonLabel: string;
  buttonLink: string;
  buttonBgColor: string;
  slug: string;
}
