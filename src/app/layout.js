import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_DefaultsComponent/Navbar";
import Footer from "./_DefaultsComponent/Footer";
import NextTopLoader from "nextjs-toploader";
import Map from "./_DefaultsComponent/Map";
import WhatsApp from "./_DefaultsComponent/WhatsApp";

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
  title: "Tamirul Ummah Madrasah | তা’মীরুল উম্মাহ মাদ্রাসা, Cumilla",
  description:
    "Tamirul Ummah Madrasah (তা’মীরুল উম্মাহ মাদ্রাসা) provides top-notch Islamic and modern education in Cumilla.",
  url: "https://www.tamirulummahmadrasah.com/",
  image:
    "https://lh3.googleusercontent.com/p/AF1QipPPykIiwgQjtIX_6M5wt8Mt3HAtMrTEjFmvEfJy=s680-w680-h510",
  author: "Tamirul Ummah Madrasah",
  keywords: [
    "Tamirul Ummah Madrasah",
    "Tamirul Ummah",
    "Islamic education",
    "modern education",
    "Cumilla",
    "মাদ্রাসা",
    "তামীরুল উম্মাহ মাদ্রাসা",
    "madrasah education",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Touch Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Primary Meta Tags */}
        <meta
          name="google-site-verification"
          content="yE6LWh9OBDrFmKu5ThS3l56FdkDZcn6mQeLNgKiIMSg"
        />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta
          property="og:image:alt"
          content="Tamirul Ummah Madrasah banner image"
        />
        <meta property="og:site_name" content="Tamirul Ummah Madrasah" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.url} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />

        {/* Additional Meta Tags */}
        <link rel="canonical" href={metadata.url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#FFD700" shadow="#FFF" height={4} />
        <Navbar />
        <main>{children}</main>
        <WhatsApp />
        <Map />
        <Footer />
      </body>
    </html>
  );
}
