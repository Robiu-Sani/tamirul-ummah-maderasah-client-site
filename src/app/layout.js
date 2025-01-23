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
  title: "Tamirul Ummah Madrasah | তা’মীরুল উম্মাহ মাদ্রাসা",
  description:
    "Tamirul Ummah Madrasah (তা’মীরুল উম্মাহ মাদ্রাসা) provides top-notch Islamic and modern education in Cumilla. Discover our renowned institution for excellence in education.",
  keywords:
    "Tamirul Ummah Madrasah, Madrasah, তামীরুল উম্মাহ মাদ্রাসা , তা’মীরুল উম্মাহ মাদ্রাসা,তামিরুল উম্মাহ মাদ্রাসা, মাদ্রাসা, education, Islamic education, tamirul, ummah, modern education, Cumilla madrasah",
  author: "Tamirul Ummah Madrasah",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
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
          content="https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510"
        />

        {/* General SEO */}
        <link rel="canonical" href="https://www.tamirulummahmadrasah.com/" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Tamirul Ummah Madrasah,tamirul ummah madrasah Islamic education, modern education, madrasa in Cumilla"
        />
        <meta
          name="keywords"
          content="মাদ্রাসা, Islamic school, তামীরুল উম্মাহ মাদ্রাসা,তা’মীরুল উম্মাহ মাদ্রাসা,তামিরুল উম্মাহ মাদ্রাসা, education nash, madrasah nash, school nash"
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
