import localFont from "next/font/local";
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
  title: "Tamirul Ummah Maderasah",
  description: "Make your life brite with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <NextTopLoader color="#FFf" height={4} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
