import { FaGraduationCap, FaBook, FaMosque } from "react-icons/fa";

export default function OurLegacy() {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">আমাদের ঐতিহ্য</h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            তামিরুল উম্মাহ আলিম মাদ্রাসা মাদ্রাসার জ্ঞান ও বিশ্বাসের যাত্রা
            শতাব্দীর পরম্পরায় সমৃদ্ধ। এখানে ঐতিহ্য ও আধুনিকতার সমন্বয়ে ভবিষ্যৎ
            নেতাদের গড়ে তোলা হয়।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Education Excellence */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaGraduationCap size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              শিক্ষাক্ষেত্রে উৎকর্ষতা
            </h3>
            <p className="text-gray-600">
              তামিরুল উম্মাহ আলিম মাদ্রাসা শুরু থেকেই সেরা মানের ইসলামিক
              শিক্ষাদানের জন্য প্রতিশ্রুতিবদ্ধ। আমাদের গ্র্যাজুয়েটরা ধর্মীয়
              এবং আধুনিক জ্ঞানের ক্ষেত্রে দক্ষতা অর্জন করে, যা তাদের এ জীবন এবং
              পরকালে সফল করে তোলে।
            </p>
          </div>

          {/* Comprehensive Curriculum */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaBook size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              সমন্বিত পাঠ্যক্রম
            </h3>
            <p className="text-gray-600">
              আমাদের পাঠ্যক্রম এমনভাবে ডিজাইন করা হয়েছে, যাতে ইসলামিক স্টাডিজ
              এবং আধুনিক শিক্ষার মধ্যে ভারসাম্য বজায় থাকে। আমরা ছাত্রদের
              আধ্যাত্মিক এবং বুদ্ধিবৃত্তিক উন্নতির উপর গুরুত্ব দিই।
            </p>
          </div>

          {/* Fostering Faith */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaMosque size={40} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              বিশ্বাস ও সম্প্রদায়কে লালন
            </h3>
            <p className="text-gray-600">
              আমাদের মাদ্রাসা শুধু শিক্ষা কেন্দ্র নয়; এটি এমন একটি সম্প্রদায়
              যেখানে ছাত্ররা শক্তিশালী ইসলামিক মূল্যবোধ, চরিত্র এবং তাদের
              বিশ্বাসের প্রতি গভীর সংযোগ গড়ে তোলে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
