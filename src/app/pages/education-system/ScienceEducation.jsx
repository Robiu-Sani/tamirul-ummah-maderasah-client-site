import { FaMicroscope, FaAtom, FaFlask } from "react-icons/fa";

export default function ScienceEducation() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">বিজ্ঞান শিক্ষা</h2>
          <p className="mt-3 text-lg text-gray-600">
            তামিরুল উম্মাহ মাদরাসায় বিজ্ঞান শিক্ষা একটি অত্যন্ত গুরুত্বপূর্ণ
            ক্ষেত্র যা শিক্ষার্থীদের আধুনিক বিশ্বে জ্ঞানচর্চার সুযোগ দেয়।
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: গবেষণার সুযোগ */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMicroscope size={50} className="text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              গবেষণার সুযোগ
            </h3>
            <p className="text-gray-600 text-center">
              আমাদের ল্যাবরেটরিগুলোতে আধুনিক যন্ত্রপাতি রয়েছে, যা শিক্ষার্থীদের
              হাতে-কলমে বিজ্ঞান অনুশীলনের সুযোগ দেয়।
            </p>
          </div>

          {/* Card 2: আধুনিক বিজ্ঞান */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaAtom size={50} className="text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              আধুনিক বিজ্ঞান
            </h3>
            <p className="text-gray-600 text-center">
              পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং গণিতের বিভিন্ন বিষয়
              শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করে।
            </p>
          </div>

          {/* Card 3: ব্যবহারিক শিক্ষা */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaFlask size={50} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              ব্যবহারিক শিক্ষা
            </h3>
            <p className="text-gray-600 text-center">
              তাত্ত্বিক শিক্ষার পাশাপাশি ব্যবহারিক জ্ঞান অর্জনের জন্য আমরা
              হাতে-কলমে শিক্ষাদানের উপর গুরুত্ব দিই।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
