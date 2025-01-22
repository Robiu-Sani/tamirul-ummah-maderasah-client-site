import localFont from "next/font/local";
// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_DefaultsComponent/Navbar";
import Footer from "./_DefaultsComponent/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tamirul Ummah Madrasah | তামিরুল উম্মাহ মাদ্রাসা ",
  description:
    "Discover Tamirul Ummah Maderasah - দোলাতপুর আদর্শ সদর, হালিমা নগর, কুমিল্লা। আধুনিক ও ইসলামী শিক্ষার সেরা প্রতিষ্ঠান।",
  keywords:
    "Tamirul Ummah Maderasah, Madrasah in Cumilla, Islamic Education, দোলাতপুর মাদ্রাসা, কুমিল্লা মাদ্রাসা, Halima Nagar Madrasah, comulla madrasah, ",
  author: "Tamirul Ummah Maderasah",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta
          name="google-site-verification"
          content="yE6LWh9OBDrFmKu5ThS3l56FdkDZcn6mQeLNgKiIMSg"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://i.postimg.cc/66HFxrZQ/WhatsApp_Image_2024-12-12_at_8.45.34_AM-removebg-preview.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta
          property="twitter:image"
          content="https://www.tamirulummahmadrasah.com/twitter-image.jpg"
        />

        {/* Facebook (Open Graph Protocol) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/facebook-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Tamirul Ummah Madrasah banner image"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Tamirul Ummah Madrasah" />

        {/* Instagram */}
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/instagram-image.jpg"
        />

        {/* YouTube */}
        <meta name="theme-color" content="#FF0000" />
        <meta name="og:type" content="video.other" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/youtube-thumbnail.jpg"
        />

        {/* TikTok */}
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/tiktok-image.jpg"
        />

        {/* LinkedIn */}
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/linkedin-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Tamirul Ummah Madrasah banner image"
        />

        {/* Pinterest */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.tamirulummahmadrasah.com/pinterest-image.jpg"
        />

        {/* General SEO */}
        <link rel="canonical" href="https://www.tamirulummahmadrasah.com/" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Tamirul Ummah Madrasah, Islamic education, modern education, madrasa in Cumilla"
        />
        <meta name="author" content="Tamirul Ummah Madrasah" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#FFD700" shadow="#FFf" height={4} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
