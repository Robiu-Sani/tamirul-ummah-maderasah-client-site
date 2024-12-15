import { FaGraduationCap, FaChalkboardTeacher, FaAward } from "react-icons/fa";

export default function GraduationProgram() {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            গ্রাজুয়েশন প্রোগ্রাম
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            তামিরুল উম্মাহ মাদরাসার গ্রাজুয়েশন প্রোগ্রাম শিক্ষার্থীদের জন্য
            উচ্চশিক্ষার একটি অনন্য সুযোগ।
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <FaGraduationCap
              size={40}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                উচ্চশিক্ষার মান
              </h3>
              <p className="text-gray-600">
                আমাদের গ্রাজুয়েশন প্রোগ্রামে উচ্চ মানসম্পন্ন শিক্ষাদানের
                মাধ্যমে শিক্ষার্থীদের জীবনের বিভিন্ন ক্ষেত্রে সফল হওয়ার জন্য
                প্রস্তুত করা হয়।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaChalkboardTeacher
              size={40}
              className="text-green-500 hover:text-green-700 transition-colors duration-300"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                অভিজ্ঞ শিক্ষকমণ্ডলী
              </h3>
              <p className="text-gray-600">
                অভিজ্ঞ ও প্রতিজ্ঞাবদ্ধ শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীদের
                মানসিক ও জ্ঞানগত বিকাশ ঘটানো হয়।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaAward
              size={40}
              className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                সার্টিফিকেশন ও স্বীকৃতি
              </h3>
              <p className="text-gray-600">
                সফল গ্রাজুয়েটরা স্বীকৃত সার্টিফিকেট পান, যা তাদের ভবিষ্যতের
                উচ্চশিক্ষা ও পেশাগত জীবনে সহায়ক।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
