import { FaGraduationCap, FaChalkboardTeacher, FaLeaf } from "react-icons/fa";

export default function NurturingScholars() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            জ্ঞানচর্চার পৃষ্ঠপোষকতা
          </h2>
          <p className="text-gray-600 mt-4">
            শিক্ষাগত ও আধ্যাত্মিক উন্নয়নের ভারসাম্যের মাধ্যমে আগামী দিনের
            জ্ঞানীদের গড়ে তোলা।
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1: Academic Excellence */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap size={30} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                শিক্ষাগত উৎকর্ষতা
              </h3>
            </div>
            <p className="text-gray-600">
              আমাদের মাদ্রাসা ইসলামিক ও আধুনিক উভয় শিক্ষায় দক্ষ ছাত্র তৈরি
              করতে প্রতিশ্রুতিবদ্ধ, যা তাদের আগামী দিনের চ্যালেঞ্জ মোকাবিলা করতে
              প্রস্তুত করে।
            </p>
          </div>

          {/* Card 2: Expert Guidance */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaChalkboardTeacher size={30} className="text-green-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                বিশেষজ্ঞের দিকনির্দেশনা
              </h3>
            </div>
            <p className="text-gray-600">
              অভিজ্ঞ পণ্ডিত ও শিক্ষকদের দিকনির্দেশনায়, ছাত্ররা ধর্মীয় ও
              পার্থিব উভয় বিষয়ে প্রয়োজনীয় জ্ঞান ও প্রজ্ঞা অর্জন করে।
            </p>
          </div>

          {/* Card 3: Character Building */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLeaf size={30} className="text-yellow-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                চরিত্র গঠন
              </h3>
            </div>
            <p className="text-gray-600">
              আমাদের সার্বিক শিক্ষাদান পদ্ধতি নৈতিক ও নীতিগত উন্নয়নকে গুরুত্ব
              দেয়, যা ছাত্রদেরকে করুণাময় ও দায়িত্বশীল ব্যক্তি হিসেবে গড়ে
              তোলে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
