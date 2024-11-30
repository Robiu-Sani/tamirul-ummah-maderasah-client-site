import Image from "next/image";
import { FaGraduationCap, FaChalkboardTeacher, FaAward } from "react-icons/fa";

export default function GraduationProgram() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">গ্রাজুয়েশন প্রোগ্রাম</h2>
          <p className=" mt-3 text-lg">
            তামিরুল উম্মাহ মাদরাসার গ্রাজুয়েশন প্রোগ্রাম শিক্ষার্থীদের জন্য
            উচ্চশিক্ষার একটি অনন্য সুযোগ।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://i.ibb.co/FJ3Nm8n/graduation.jpg"
              alt="Graduation Program"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaGraduationCap size={40} className="text-blue-600" />
              <div>
                <h3 className="text-2xl font-semibold ">উচ্চশিক্ষার মান</h3>
                <p className="">
                  আমাদের গ্রাজুয়েশন প্রোগ্রামে উচ্চ মানসম্পন্ন শিক্ষাদানের
                  মাধ্যমে শিক্ষার্থীদের জীবনের বিভিন্ন ক্ষেত্রে সফল হওয়ার জন্য
                  প্রস্তুত করা হয়।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaChalkboardTeacher size={40} className="text-green-500" />
              <div>
                <h3 className="text-2xl font-semibold ">অভিজ্ঞ শিক্ষকমণ্ডলী</h3>
                <p className="">
                  অভিজ্ঞ ও প্রতিজ্ঞাবদ্ধ শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীদের
                  মানসিক ও জ্ঞানগত বিকাশ ঘটানো হয়।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaAward size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-2xl font-semibold ">
                  সার্টিফিকেশন ও স্বীকৃতি
                </h3>
                <p className="">
                  সফল গ্রাজুয়েটরা স্বীকৃত সার্টিফিকেট পান, যা তাদের ভবিষ্যতের
                  উচ্চশিক্ষা ও পেশাগত জীবনে সহায়ক।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
