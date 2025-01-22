import Head from "next/head";
import AllStaff from "./AllStaff";
import AllTeachers from "./AllTeachers";

export default function Page() {
  return (
    <>
      <Head>
        <title>Our Team - Tamirul Ummah Madrasah</title>
        <meta
          name="description"
          content="Meet the dedicated team of teachers and staff at Tamirul Ummah Madrasah. Learn about their expertise and contributions to Islamic education."
        />
        <meta
          name="keywords"
          content="Tamirul Ummah Madrasah, Teachers, Staff, Islamic Education, Madrasah Team"
        />
        <meta name="author" content="Tamirul Ummah Madrasah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Our Team - Tamirul Ummah Madrasah" />
        <meta
          property="og:description"
          content="Meet the dedicated team of teachers and staff at Tamirul Ummah Madrasah. Learn about their expertise and contributions to Islamic education."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/all-stafe-and-teachers"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/66HFxrZQ/Whats-App-Image-2024-12-12-at-8-45-34-AM-removebg-preview.png"
        />
        <link
          rel="icon"
          href="https://i.postimg.cc/66HFxrZQ/Whats-App-Image-2024-12-12-at-8-45-34-AM-removebg-preview.png"
        />
      </Head>
      <div className="bg-green-50 pt-8">
        <AllTeachers />
        <AllStaff />
      </div>
    </>
  );
}
