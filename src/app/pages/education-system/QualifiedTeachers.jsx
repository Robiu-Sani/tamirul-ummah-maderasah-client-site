import { FaChalkboardTeacher, FaGraduationCap, FaUsers } from "react-icons/fa";

export default function QualifiedTeachers() {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            যোগ্য শিক্ষকবৃন্দ
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            তামিরুল উম্মাহ মাদরাসার যোগ্য শিক্ষকবৃন্দ প্রতিটি শিক্ষার্থীকে সেরা
            শিক্ষা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaChalkboardTeacher size={50} className="text-green-500" />
              <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                অভিজ্ঞ শিক্ষকগণ
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              আমাদের শিক্ষকরা অত্যন্ত যোগ্য ও অভিজ্ঞ। তাঁরা শিক্ষার্থীদের মানসিক
              ও নৈতিক উন্নয়নের জন্য কাজ করেন।
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaGraduationCap size={50} className="text-blue-500" />
              <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                আধুনিক ও ধর্মীয় শিক্ষা
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              আধুনিক শিক্ষার পাশাপাশি ধর্মীয় শিক্ষার উপর সমান জোর দিয়ে
              শিক্ষাদান করা হয়।
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaUsers size={50} className="text-yellow-500" />
              <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                ব্যক্তিগত মনোযোগ
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              প্রতিটি শিক্ষার্থীর প্রতি আলাদা মনোযোগ দিয়ে তাঁদের মেধা ও
              ব্যক্তিগত উন্নয়ন নিশ্চিত করা হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
