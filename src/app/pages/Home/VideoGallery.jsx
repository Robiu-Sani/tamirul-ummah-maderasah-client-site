import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/-EE_0qtBXps?si=yIiiBhK9862Gc8kg",
    title: "ইসলামিক লেকচার ১",
    speaker: "স্পিকার ১",
    date: "১ সেপ্টেম্বর, ২০২৪",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/example_video_2",
    title: "ইসলামিক লেকচার ২",
    speaker: "স্পিকার ২",
    date: "১৫ আগস্ট, ২০২৪",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/example_video_3",
    title: "ইসলামিক লেকচার ৩",
    speaker: "স্পিকার ৩",
    date: "২০ জুলাই, ২০২৪",
  },
];

export default function VideoGallery() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* শিরোনাম */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ইসলামিক ভিডিও গ্যালারি
          </h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের সংগ্রহ থেকে শিক্ষণীয় ইসলামিক লেকচার এবং ইভেন্টগুলি দেখুন।
            জ্ঞানী স্পিকারদের থেকে শিখুন।
          </p>
        </div>

        {/* ভিডিও গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              {/* ভিডিও এমবেড */}
              <iframe
                className="w-full h-56 rounded-md"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* ভিডিও তথ্য */}
              <div className="mt-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaYoutube className="text-red-600" /> {video.title}
                </h3>
                <p className="text-gray-500">
                  <strong>স্পিকার:</strong> {video.speaker}
                </p>
                <p className="text-gray-500">
                  <strong>তারিখ:</strong> {video.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* সব ভিডিও দেখুন বাটন */}
        <div className="text-center mt-12">
          <Link
            href={`/pages/videos`}
            className="px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-hover transition duration-300"
          >
            সব ভিডিও দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
