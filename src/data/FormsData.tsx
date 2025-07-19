// src/data/surveyList.ts
import { CardItem } from "./Types";

export const surveyList: CardItem[] = [
  {
    id: 1,
    title: "Youth Politics and Last Generation Survey",
    slug: "youth-politics",
    author: "Sosioloji",
    body: "<p>Help us understand youth perspectives on political standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria engagement...</p>",
    description: "Understanding youth political engagement in Nigeria standing youth political engagement in Nigeriastanding youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria...",
    category: "Survey",
    image: "https://plus.unsplash.com/premium_photo-1752658399836-07566560b88f?w=600",
    buttonLabel: "Fill Out",
    buttonLink: "/survey/youth-politics",
    buttonBgColor: "#FFD682",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Education Experience with Solutions Survey",
    slug: "education-experience",
    author: "Sosioloji",
    body: "<p>Share your experience with education standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria in your country...</p>",
    description: "We want to hear your story about standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria standing youth political engagement in Nigeria education...",
    category: "Survey",
    image: "https://images.unsplash.com/photo-1752859625900-a7fbeee9b8e3?w=600",
    buttonLabel: "Start Survey",
    buttonLink: "/survey/education-experience",
    buttonBgColor: "#FFD682",
    created_at: new Date().toISOString(),
  },
];
