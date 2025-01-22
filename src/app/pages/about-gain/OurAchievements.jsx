import axios from "axios";
import OurAchievementCard from "./OurAchievementCard";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";

export const metadata = {
  title: "Our Achievements | Tamirul Ummah Madrasah",
  description:
    "Discover the remarkable achievements of Tamirul Ummah Madrasah. A testament to excellence in Islamic and modern education.",
  keywords:
    "Tamirul Ummah Madrasah, Achievements, Islamic Education, Modern Education, Educational Success",
  author: "Tamirul Ummah Madrasah",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://www.tamirulummahmadrasah.com/our-achievements",
    title: "Our Achievements | Tamirul Ummah Madrasah",
    description:
      "Discover the remarkable achievements of Tamirul Ummah Madrasah. A testament to excellence in Islamic and modern education.",
    images: [
      {
        url: "https://www.tamirulummahmadrasah.com/achievements-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our Achievements - Tamirul Ummah Madrasah",
      },
    ],
  },
};

export default async function OurAchievements() {
  const gains = await axios.get(`${url}/gain`);
  return (
    <div className="pt-5 " style={{ columns: "350px" }}>
      {gains?.data?.data.map((gain, idx) => (
        <OurAchievementCard key={idx} gain={gain} />
      ))}
    </div>
  );
}
