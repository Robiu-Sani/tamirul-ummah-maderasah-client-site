import Image from "next/image";
import { FaChalkboardTeacher, FaGraduationCap, FaUsers } from "react-icons/fa";

export default function QualifiedTeachers() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            যোগ্য শিক্ষকবৃন্দ
          </h2>
          <p className="text-gray-700 mt-3 text-lg">
            তামিরুল উম্মাহ মাদরাসার যোগ্য শিক্ষকবৃন্দ আপনার সন্তানদের জন্য সেরা
            শিক্ষা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaChalkboardTeacher size={40} className="text-green-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  অভিজ্ঞ শিক্ষকগণ
                </h3>
                <p className="text-gray-600">
                  আমাদের শিক্ষকরা অত্যন্ত যোগ্য এবং অভিজ্ঞ। তাঁরা শিক্ষার্থীদের
                  জ্ঞান ও নৈতিকতায় পরিপূর্ণ করে তুলতে নিরলস কাজ করেন।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGraduationCap size={40} className="text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  আধুনিক ও ধর্মীয় শিক্ষা
                </h3>
                <p className="text-gray-600">
                  শিক্ষকরা শিক্ষার্থীদের আধুনিক ও ধর্মীয় শিক্ষা উভয়ের উপর সমান
                  জোর দিয়ে শিক্ষাদান করেন।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUsers size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  ব্যক্তিগত মনোযোগ
                </h3>
                <p className="text-gray-600">
                  প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ প্রদান করে তাঁদের
                  মেধা ও মানসিক উন্নয়নে সহায়তা করা হয়।
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://i.ibb.co/ZMTZsMd/qualified-teachers.jpg"
              alt="Qualified Teachers"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
