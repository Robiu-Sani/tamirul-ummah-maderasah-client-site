import Image from "next/image";
import { FaGraduationCap, FaBook, FaMosque } from "react-icons/fa";

export default function OurLegacy() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">আমাদের ঐতিহ্য</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            তামিরুল উম্মাহ আলিম মাদ্রাসা মাদ্রাসার জ্ঞান ও বিশ্বাসের যাত্রা
            শতাব্দীর পরম্পরায় সমৃদ্ধ। এখানে ঐতিহ্য ও আধুনিকতার সমন্বয়ে ভবিষ্যৎ
            নেতাদের গড়ে তোলা হয়।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="মাদ্রাসার ঐতিহ্য"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            {/* Education Excellence */}
            <div className="flex items-start gap-6">
              <FaGraduationCap
                size={28}
                className="text-blue-500 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  শিক্ষাক্ষেত্রে উৎকর্ষতা
                </h3>
                <p className="text-gray-600 mt-2">
                  তামিরুল উম্মাহ আলিম মাদ্রাসা মাদ্রাসা শুরু থেকেই সেরা মানের
                  ইসলামিক শিক্ষাদানের জন্য প্রতিশ্রুতিবদ্ধ। আমাদের
                  গ্র্যাজুয়েটরা ধর্মীয় এবং আধুনিক জ্ঞানের ক্ষেত্রে দক্ষতা
                  অর্জন করে, যা তাদের এ জীবন এবং পরকালে সফল করে তোলে।
                </p>
              </div>
            </div>

            {/* Comprehensive Curriculum */}
            <div className="flex items-start gap-6">
              <FaBook size={28} className="text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  সমন্বিত পাঠ্যক্রম
                </h3>
                <p className="text-gray-600 mt-2">
                  আমাদের পাঠ্যক্রম এমনভাবে ডিজাইন করা হয়েছে, যাতে ইসলামিক
                  স্টাডিজ এবং আধুনিক শিক্ষার মধ্যে ভারসাম্য বজায় থাকে। আমরা
                  ছাত্রদের আধ্যাত্মিক এবং বুদ্ধিবৃত্তিক উন্নতির উপর গুরুত্ব দিই।
                </p>
              </div>
            </div>

            {/* Fostering Faith */}
            <div className="flex items-start gap-6">
              <FaMosque size={28} className="text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  বিশ্বাস ও সম্প্রদায়কে লালন
                </h3>
                <p className="text-gray-600 mt-2">
                  আমাদের মাদ্রাসা শুধু শিক্ষা কেন্দ্র নয়; এটি এমন একটি
                  সম্প্রদায় যেখানে ছাত্ররা শক্তিশালী ইসলামিক মূল্যবোধ, চরিত্র
                  এবং তাদের বিশ্বাসের প্রতি গভীর সংযোগ গড়ে তোলে।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </div>
  );
}
