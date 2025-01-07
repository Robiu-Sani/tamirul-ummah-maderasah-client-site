import {
  FaPray,
  FaBookReader,
  FaBasketballBall,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function StudentLifeSection() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        {/* শিরোনাম */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ছাত্রজীবন</h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের মাদরাসার শিক্ষার্থীদের গতিশীল ও আধ্যাত্মিক জীবন আবিষ্কার
            করুন। পড়াশোনা, অতিরিক্ত কার্যক্রম এবং আধ্যাত্মিক উন্নয়নের মধ্যে
            সামঞ্জস্য বজায় রেখে এগিয়ে চলা।
          </p>
        </div>

        {/* ছাত্রজীবনের বিস্তারিত */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* আধ্যাত্মিক উন্নয়ন */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaPray size={24} className="text-green-500" />
              আধ্যাত্মিক উন্নয়ন
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              শিক্ষার্থীরা দৈনিক নামাজ, কুরআন তিলাওয়াত এবং ইসলামিক পাঠে
              অংশগ্রহণ করে তাদের আধ্যাত্মিক বিকাশ ও ধর্মীয় সংযোগ বাড়ায়।
            </p>
            <Image
              width={300}
              height={200}
              src="https://i.postimg.cc/V5Qt9F99/10b928a5-1d0a-4784-88de-aed72a984e81.jpg"
              alt="ছাত্ররা নামাজ পড়ছে"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>

          {/* একাডেমিক জীবন */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaBookReader size={24} className="text-blue-500" />
              একাডেমিক উৎকর্ষতা
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              আমাদের কঠোর একাডেমিক কারিকুলাম শিক্ষার্থীদের ইসলামী জ্ঞানের
              পাশাপাশি গণিত, বিজ্ঞান এবং সাহিত্য সহ আধুনিক বিষয়গুলিতে দক্ষ করে
              তোলে।
            </p>
            <Image
              width={300}
              height={400}
              src="https://i.postimg.cc/t4d358Ms/7b5b2e4e-bff8-4a9e-b443-86a68c00a99a.jpg"
              alt="ছাত্ররা পড়াশোনা করছে"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>

          {/* অতিরিক্ত কার্যক্রম */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaBasketballBall size={24} className="text-orange-500" />
              অতিরিক্ত কার্যক্রম
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              শিক্ষার্থীরা খেলাধুলা, শিল্পকলা এবং বিতর্ক সহ বিভিন্ন কার্যক্রমে
              অংশগ্রহণ করে যা তাদের গুরুত্বপূর্ণ জীবন দক্ষতা এবং দলবদ্ধতা বিকাশে
              সহায়তা করে।
            </p>
            <Image
              width={300}
              height={200}
              src="https://i.postimg.cc/DZNL0h8M/abab9783-993d-4611-9b57-9be3969df789.jpg"
              alt="ছাত্ররা খেলাধুলা করছে"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>

        {/* দৈনন্দিন রুটিন */}
        <div className="w-full mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaCalendarAlt size={24} className="text-purple-500" />
              দৈনন্দিন জীবন
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              শিক্ষার্থীরা একটি সু-সংগঠিত দৈনিক রুটিন অনুসরণ করে যেখানে নামাজ,
              পড়াশোনা, অতিরিক্ত কার্যক্রম এবং ব্যক্তিগত উন্নয়নের জন্য সময়
              বরাদ্দ থাকে। এটি শৃঙ্খলা ও আধ্যাত্মিক সমৃদ্ধি বাড়ায়।
            </p>
            <Image
              width={800}
              height={250}
              src="https://i.postimg.cc/k5XTtngJ/28ab6bef-ca8b-4878-8480-78b5465f1f89.jpg"
              alt="দৈনন্দিন রুটিন"
              className="w-full max-h-[250] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
