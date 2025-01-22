import Head from "next/head";
import AddStudentForm from "./AddStudentForm";
// import SubmitedInfo from "../SubmitedInfo/SubmitedInfo";

export default function Admition() {
  return (
    <>
      <Head>
        <title>Admission Form - Tamirul Ummah Madrasah</title>
        <meta
          name="description"
          content="Fill out the admission form to enroll in Tamirul Ummah Madrasah. Join us today for quality Islamic education!"
        />
        <meta
          name="keywords"
          content="Admission, Student Form, Enrollment, Tamirul Ummah Madrasah, Islamic Education"
        />
        <meta name="author" content="Tamirul Ummah Madrasah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Admission Form - Tamirul Ummah Madrasah"
        />
        <meta
          property="og:description"
          content="Fill out the admission form to enroll in Tamirul Ummah Madrasah. Join us today for quality Islamic education!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tamirulummahmadrasah.com/admition"
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
      <div className="w-full relative bg-green-100 py-10 ">
        <div className="container mx-auto px-3">
          <AddStudentForm />
        </div>
        {/* <SubmitedInfo /> */}
      </div>
    </>
  );
}
