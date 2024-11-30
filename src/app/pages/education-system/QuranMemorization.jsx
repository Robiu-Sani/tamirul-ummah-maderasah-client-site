import Image from "next/image";
import { FaQuran, FaBookOpen, FaStar } from "react-icons/fa";

export default function QuranMemorization() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">কুরআন মুখস্থকরণ</h2>
          <p className=" mt-3 text-lg">
            তামিরুল উম্মাহ মাদরাসায় কুরআন মুখস্থকরণ প্রক্রিয়াটি অত্যন্ত যত্নের
            সাথে পরিচালিত হয়।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaQuran size={40} className="text-green-600" />
              <div>
                <h3 className="text-2xl font-semibold ">পবিত্র কুরআন মুখস্থ</h3>
                <p className="">
                  শিক্ষার্থীদের প্রতিদিনের নির্ধারিত পাঠ ও নিয়মিত পুনরাবৃত্তি
                  নিশ্চিত করে কুরআন মুখস্থ করার পথ সুগম করা হয়।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaBookOpen size={40} className="text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold ">শ্রেণিকক্ষ ও পরিবেশ</h3>
                <p className="">
                  মুখস্থকরণের জন্য বিশেষ শ্রেণিকক্ষ ও মনোরম পরিবেশ তৈরি করা
                  হয়েছে, যা শিক্ষার্থীদের মনোযোগ বাড়াতে সহায়ক।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaStar size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-2xl font-semibold ">মানসম্মত পদ্ধতি</h3>
                <p className="">
                  কুরআন মুখস্থ করার জন্য সর্বাধুনিক ও ফলপ্রসূ পদ্ধতিগুলি ব্যবহার
                  করা হয়।
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://i.ibb.co/W0f5rmM/quran-memorization.jpg"
              alt="Quran Memorization"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
