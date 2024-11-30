import Image from "next/image";
import { FaMosque, FaBook, FaHandsHelping } from "react-icons/fa";

export default function IslamicStadies() {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">ইসলামিক শিক্ষা</h2>
          <p className="text-gray-700 mt-3 text-lg">
            তামিরুল উম্মাহ মাদরাসা - আধুনিক ও ধর্মীয় শিক্ষার সমন্বয়ে এক অনন্য
            শিক্ষা প্রতিষ্ঠান।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://i.ibb.co/FzC1rfT/islamic-studies.jpg"
              alt="Tamirul Ummah Madrasah"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMosque size={40} className="text-green-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  মসজিদভিত্তিক শিক্ষা
                </h3>
                <p className="text-gray-600">
                  তামিরুল উম্মাহ মাদরাসার শিক্ষাব্যবস্থা মসজিদভিত্তিক, যেখানে
                  ধর্মীয় মূল্যবোধ এবং প্রাতিষ্ঠানিক শিক্ষার সমন্বয় ঘটে।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaBook size={40} className="text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  কুরআন ও হাদিস শিক্ষা
                </h3>
                <p className="text-gray-600">
                  মাদরাসায় পবিত্র কুরআন এবং হাদিসের গভীরতর অধ্যয়ন এবং তাদের
                  নৈতিক শিক্ষাকে গুরুত্ব দেওয়া হয়।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaHandsHelping size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  সামাজিক দায়িত্ববোধ
                </h3>
                <p className="text-gray-600">
                  তামিরুল উম্মাহ মাদরাসার শিক্ষার্থীদের নৈতিক এবং সামাজিক
                  দায়িত্ববোধে শিক্ষিত করে তোলা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
