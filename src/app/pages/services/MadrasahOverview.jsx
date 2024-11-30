import Image from "next/image";
import { FaChalkboardTeacher, FaQuran, FaUserGraduate } from "react-icons/fa";

export default function MadrasahOverview() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            মাদ্রাসার সংক্ষিপ্ত পরিচিতি
          </h2>
          <p className="text-gray-600 mt-3">
            আমাদের মাদ্রাসার ভিত্তি, লক্ষ্য এবং শিক্ষামূলক পদ্ধতি যা এটিকে অনন্য
            করে তোলে তা সম্পর্কে জানুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaChalkboardTeacher size={40} className="text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  দক্ষ শিক্ষক মণ্ডলী
                </h3>
                <p className="text-gray-600">
                  আমাদের মাদ্রাসায় অভিজ্ঞ এবং উচ্চ যোগ্যতাসম্পন্ন শিক্ষকমণ্ডলী
                  রয়েছে, যারা ছাত্রদের জ্ঞানীয় এবং আধ্যাত্মিক উন্নয়নে
                  নিবেদিত।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaQuran size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  কুরআন ও হাদিসের শিক্ষা
                </h3>
                <p className="text-gray-600">
                  পবিত্র কুরআন এবং হাদিসের শিক্ষার উপর আমরা বিশেষ জোর দিই, যাতে
                  ছাত্ররা ইসলামের শিক্ষা এবং মূল্যবোধ সম্পর্কে গভীর জ্ঞান অর্জন
                  করতে পারে।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUserGraduate size={40} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  ছাত্রদের সফলতা
                </h3>
                <p className="text-gray-600">
                  আমাদের ছাত্ররা ইসলামী ও আধুনিক উভয় শিক্ষাক্ষেত্রে উৎকর্ষতা
                  অর্জন করে, যা তাদের জীবনের বিভিন্ন ক্ষেত্রে সফল হতে সহায়তা
                  করে।
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="মাদ্রাসার সংক্ষিপ্ত পরিচিতি"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
