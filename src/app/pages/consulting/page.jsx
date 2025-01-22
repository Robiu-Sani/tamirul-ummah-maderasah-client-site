import Head from "next/head";
import ConsultingForm from "./ConsultingForm";
import IslamicConsulting from "./IslamicConsulting";

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Consulting Services - Tamirul Ummah Madrasah</title>
        <meta
          name="description"
          content="Explore the consulting services provided by Tamirul Ummah Madrasah, offering specialized Islamic and educational consulting to individuals and organizations."
        />
        <meta
          name="keywords"
          content="Consulting, Islamic Consulting, Tamirul Ummah Madrasah, Educational Consulting, Islamic Services"
        />
        <meta name="author" content="Tamirul Ummah Madrasah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Consulting Services - Tamirul Ummah Madrasah"
        />
        <meta
          property="og:description"
          content="Tamirul Ummah Madrasah offers Islamic and educational consulting services to help individuals and organizations grow."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/consulting"
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
      <div>
        <IslamicConsulting />
        <ConsultingForm />
      </div>
    </>
  );
}
