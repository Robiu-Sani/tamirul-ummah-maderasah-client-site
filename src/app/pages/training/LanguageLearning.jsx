import React from "react";
import { FaLanguage, FaBook, FaChalkboardTeacher } from "react-icons/fa";

const LanguageLearning = () => {
  return (
    <div className="  py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">ভাষা শিক্ষা</h2>
        <p className="text-center text-lg mb-12">
          তামিরুল উম্মাহ মাদ্রাসা একটি সমৃদ্ধ ভাষা শিক্ষা প্রোগ্রাম পরিচালনা
          করে। আমরা বাংলা, ইংরেজি এবং আরবি ভাষায় দক্ষতা অর্জনের জন্য
          শিক্ষার্থীদের সহায়তা প্রদান করি।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* বাংলা */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center mb-4">
              <FaBook className="text-6xl text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">বাংলা ভাষা</h3>
            <p className="text-center">
              মাতৃভাষার প্রতি শ্রদ্ধা এবং দক্ষতা অর্জনের জন্য আমরা বিশেষ বাংলা
              কোর্স প্রদান করি। এখানে বাংলা সাহিত্যের উপর জোর দেওয়া হয়।
            </p>
          </div>
          {/* ইংরেজি */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center mb-4">
              <FaChalkboardTeacher className="text-6xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">ইংরেজি ভাষা</h3>
            <p className="text-center">
              আমাদের ইংরেজি কোর্স শিক্ষার্থীদের আন্তর্জাতিক মানের যোগাযোগ দক্ষতা
              উন্নত করতে সাহায্য করে।
            </p>
          </div>
          {/* আরবি */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center mb-4">
              <FaLanguage className="text-6xl text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">আরবি ভাষা</h3>
            <p className="text-center">
              আরবি ভাষা শেখার মাধ্যমে আমরা শিক্ষার্থীদের কুরআন এবং ইসলামী জ্ঞান
              অর্জনের জন্য প্রস্তুত করি।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageLearning;
