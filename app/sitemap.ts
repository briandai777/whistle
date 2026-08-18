import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://whistleref.org",
      priority: 1,
    },
    {
      url: "https://whistleref.org/about",
      priority: 0.8,
    },
    {
      url: "https://whistleref.org/practice",
      priority: 0.9,
    },
    {
      url: "https://whistleref.org/practice/setup",
      priority: 0.8,
    },
    {
      url: "https://whistleref.org/legal",
      priority: 0.5,
    },
  ];
}