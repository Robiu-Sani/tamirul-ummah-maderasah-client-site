import ArticleComponent from "./ArticleComponent";

export const metadata = {
  title: "Tamirul Ummah Madrasah | Article Page",
  description:
    "Read insightful articles about modern and Islamic education at Tamirul Ummah Madrasah.",
  keywords:
    "Tamirul Ummah Madrasah, Islamic Education, Articles, Modern Education",
  author: "Tamirul Ummah Madrasah",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "article",
    url: "https://www.tamirulummahmadrasah.com/article",
    title: "Tamirul Ummah Madrasah | Article Page",
    description:
      "Read insightful articles about modern and Islamic education at Tamirul Ummah Madrasah.",
    images: [
      {
        url: "https://www.tamirulummahmadrasah.com/article-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tamirul Ummah Madrasah Articles",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <ArticleComponent />
    </div>
  );
}
