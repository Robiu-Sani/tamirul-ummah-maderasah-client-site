import {
  FaBook,
  FaLaptop,
  FaChalkboardTeacher,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import Image from "next/image";

export default function LibraryAndOnlineLearningSection() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            গ্রন্থাগার এবং অনলাইন শিক্ষা
          </h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের বিস্তৃত গ্রন্থাগার এবং অনলাইন শিক্ষা প্ল্যাটফর্ম আবিষ্কার
            করুন, যা শিক্ষার্থীদের ইসলামী এবং আধুনিক শিক্ষার জন্য প্রয়োজনীয়
            সরঞ্জাম সরবরাহ করে।
          </p>
        </div>

        {/* Library and Online Learning Sections */}
        <div className="flex flex-col gap-8">
          {/* Library Section */}
          <div className="p-6 gap-8 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
            <Image
              src="https://i.postimg.cc/Kzb6zR28/1.webp" // Replace with actual image URL
              alt="গ্রন্থাগার"
              width={600}
              height={400}
              className="w-full object-cover rounded-lg mb-4"
            />
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaBook size={24} className="text-green-500" />
                মাদ্রাসা গ্রন্থাগার
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                আমাদের মাদ্রাসা গ্রন্থাগারে ইসলামিক সাহিত্য, পাঠ্যপুস্তক,
                রেফারেন্স বই এবং জার্নালের বিশাল সংগ্রহের পরিকল্পনা রয়েছে।
                শিক্ষার্থীরা ধর্মীয় এবং একাডেমিক ক্ষেত্রে তাদের জ্ঞান বাড়াতে
                এগুলি ব্যবহার করতে পারে।
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>৫,০০০-এরও বেশি ইসলামিক বই এবং সম্পদ।</li>
                <li>ডিজিটাল জার্নাল এবং গবেষণা সামগ্রীতে অ্যাক্সেস।</li>
                <li>মনোযোগ সহকারে পড়াশোনার জন্য নীরব কক্ষ।</li>
                <li>সাপ্তাহিক বই আলোচনা এবং অধ্যয়ন চক্র।</li>
              </ul>
              <div className="">
                {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  <AiOutlineFileSearch
                    size={20}
                    className="inline-block mr-2"
                  />
                  গ্রন্থাগার অন্বেষণ করুন
                </button> */}
              </div>
            </div>
          </div>

          {/* Online Learning Section */}
          <div className="p-6 gap-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaLaptop size={24} className="text-blue-500" />
                অনলাইন শিক্ষা প্ল্যাটফর্ম
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                আমাদের অনলাইন শিক্ষা প্ল্যাটফর্মে ইসলামিক স্টাডিজ, কোরআন
                মুখস্থকরণ এবং একাডেমিক বিষয়গুলির উপর বিভিন্ন কোর্সর পরিকল্পনা
                রয়েছে। এটি শিক্ষার্থীদের অভিজ্ঞ শিক্ষকদের সমর্থনে তাদের নিজস্ব
                গতিতে শিখতে সক্ষম করে।
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>ইন্টারেক্টিভ কোরআন আবৃত্তি এবং মুখস্থকরণ সেশন।</li>
                <li>প্রখ্যাত স্কলারদের লাইভ এবং রেকর্ড করা ভিডিও লেকচার।</li>
                <li>অনলাইন মূল্যায়ন এবং কুইজ।</li>
                <li>ডাউনলোডযোগ্য শিক্ষামূলক উপকরণ।</li>
              </ul>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <FaChalkboardTeacher size={24} className="text-gray-600" />
                <span>লাইভ ইন্টারেক্টিভ ক্লাস</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <FaCloudDownloadAlt size={24} className="text-gray-600" />
                <span>পাঠ্য উপকরণ ডাউনলোড করুন</span>
              </div>
              <div className="">
                {/* <button className="px-4 py-2 mt-6 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                  <FaCloudDownloadAlt size={20} className="inline-block mr-2" />
                  অনলাইন শেখা শুরু করুন
                </button> */}
              </div>
            </div>
            <Image
              src="https://i.postimg.cc/0yJF0p5N/Getty-Images-1174366520-1024x594.jpg" // Replace with actual image URL
              alt="অনলাইন শিক্ষা"
              width={600}
              height={400}
              className="w-full sm:w-1/2 object-cover rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
