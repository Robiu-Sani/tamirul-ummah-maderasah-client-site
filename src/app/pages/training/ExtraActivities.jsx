import React from "react";
import {
  FaBasketballBall,
  FaPaintBrush,
  FaMusic,
  FaBookReader,
} from "react-icons/fa";

const ExtraActivities = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          অতিরিক্ত কার্যক্রম
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          আমাদের মাদ্রাসা শিক্ষার্থীদের একাডেমিক দক্ষতার পাশাপাশি সৃজনশীলতা এবং
          শারীরিক বিকাশ নিশ্চিত করতে বিভিন্ন অতিরিক্ত কার্যক্রম পরিচালনা করে।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* স্পোর্টস */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all text-center">
            <div className="flex justify-center mb-4">
              <FaBasketballBall className="text-6xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">ক্রীড়া</h3>
            <p className="text-gray-600">
              শিক্ষার্থীদের শারীরিক সক্ষমতা বাড়াতে এবং দলবদ্ধ কাজের মনোভাব গড়ে
              তুলতে আমরা নিয়মিত ক্রীড়া কার্যক্রম পরিচালনা করি।
            </p>
          </div>
          {/* আর্ট */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all text-center">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-6xl text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">চিত্রকলা</h3>
            <p className="text-gray-600">
              শিক্ষার্থীদের সৃজনশীল চিন্তা ও দক্ষতা বিকাশে আমরা চিত্রাঙ্কন ও
              অন্যান্য শিল্প কার্যক্রম পরিচালনা করি।
            </p>
          </div>
          {/* সঙ্গীত */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all text-center">
            <div className="flex justify-center mb-4">
              <FaMusic className="text-6xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">সঙ্গীত</h3>
            <p className="text-gray-600">
              ইসলামী সঙ্গীত এবং সাংস্কৃতিক পরিবেশনা শিক্ষার্থীদের মানসিক বিকাশে
              সহায়তা করে।
            </p>
          </div>
          {/* বইপাঠ */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all text-center">
            <div className="flex justify-center mb-4">
              <FaBookReader className="text-6xl text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">বইপাঠ</h3>
            <p className="text-gray-600">
              নিয়মিত বইপাঠ কার্যক্রমের মাধ্যমে শিক্ষার্থীদের জ্ঞানার্জনের প্রতি
              আগ্রহ তৈরি করা হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraActivities;
