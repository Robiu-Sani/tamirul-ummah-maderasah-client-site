import { FaMosque, FaBook, FaHandsHelping } from "react-icons/fa";

export default function IslamicStadies() {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">ইসলামিক শিক্ষা</h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            তামিরুল উম্মাহ মাদরাসা - আধুনিক ও ধর্মীয় শিক্ষার সমন্বয়ে এক অনন্য
            শিক্ষা প্রতিষ্ঠান।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <FaMosque size={50} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                ইসলামভিত্তিক শিক্ষা
              </h3>
              <p className="text-gray-600 text-center">
                তামিরুল উম্মাহ মাদরাসার শিক্ষাব্যবস্থা ইসলামভিত্তিক, যেখানে
                ধর্মীয় মূল্যবোধ এবং প্রাতিষ্ঠানিক শিক্ষার সমন্বয় ঘটে।
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <FaBook size={50} className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                কুরআন ও হাদিস শিক্ষা
              </h3>
              <p className="text-gray-600 text-center">
                মাদরাসায় পবিত্র কুরআন এবং হাদিসের গভীরতর অধ্যয়ন এবং তাদের
                নৈতিক শিক্ষাকে গুরুত্ব দেওয়া হয়।
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <FaHandsHelping size={50} className="text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                সামাজিক দায়িত্ববোধ
              </h3>
              <p className="text-gray-600 text-center">
                তামিরুল উম্মাহ মাদরাসার শিক্ষার্থীদের নৈতিক এবং সামাজিক
                দায়িত্ববোধে শিক্ষিত করে তোলা হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
