import ComingSoon from "@/app/_DefaultsComponent/ComingSoon";

export const metadata = {
  title: "About-campus | Tamirul Ummah Madrasah",
  description:
    "Learn more about Tamirul Ummah Madrasah, a leading institution for Islamic and modern education.",
  keywords:
    "Tamirul Ummah Madrasah, About Tamirul Ummah, Islamic Education, Modern Education",
  author: "Tamirul Ummah Madrasah",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://www.tamirulummahmadrasah.com/about",
    title: "About | Tamirul Ummah Madrasah",
    description:
      "Learn more about Tamirul Ummah Madrasah, a leading institution for Islamic and modern education.",
    images: [
      {
        url: "https://www.tamirulummahmadrasah.com/about-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Tamirul Ummah Madrasah",
      },
    ],
  },
};

export default function page() {
  return (
    <div>
      <ComingSoon />
    </div>
  );
}
