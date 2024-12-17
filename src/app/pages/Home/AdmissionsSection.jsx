import Link from "next/link";
import {
  AiOutlineFileText,
  AiOutlineUserAdd,
  AiOutlineCheck,
  AiOutlineBook,
  AiOutlineSchedule,
} from "react-icons/ai";

export default function AdmissionsSection() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* শিরোনাম */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ভর্তির প্রক্রিয়া
          </h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের মাদ্রাসায় স্বাগতম! ভর্তি প্রক্রিয়া, যোগ্যতা এবং কিভাবে
            আবেদন করবেন তা জানুন।
          </p>
        </div>

        {/* ভর্তির বিস্তারিত */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ভর্তি প্রক্রিয়া */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AiOutlineFileText size={24} />
              ভর্তি প্রক্রিয়া
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                অনলাইনে আবেদনপত্র পূরণ করুন।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineBook className="text-blue-500" />
                প্রয়োজনীয় নথি জমা দিন (জন্ম সনদ, পূর্ববর্তী স্কুলের রেকর্ড)।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineSchedule className="text-yellow-500" />
                সাক্ষাৎকার বা প্রবেশিকা পরীক্ষায় অংশগ্রহণ করুন।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                ৫-৭ কার্যদিবসের মধ্যে ভর্তি সিদ্ধান্ত গ্রহণ করুন।
              </li>
            </ul>
            <Link
              href={"/pages/admition"}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              এখনই আবেদন করুন
            </Link>
          </div>

          {/* যোগ্যতা */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AiOutlineUserAdd size={24} />
              যোগ্যতা
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                শিক্ষার্থীদের বয়স ৫-১৮ বছরের মধ্যে হতে হবে।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineBook className="text-blue-500" />
                আবেদনকারীদের কুরআন এবং ইসলামিক শিক্ষার মৌলিক জ্ঞান থাকা উচিত।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                মাদ্রাসার একাডেমিক এবং আচরণগত মানদণ্ড পূরণ করতে হবে।
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineSchedule className="text-yellow-500" />
                প্রবেশিকা পরীক্ষা বা সাক্ষাৎকারে উত্তীর্ণ হতে হবে।
              </li>
            </ul>
            <p className="text-gray-500">
              আরও তথ্যের জন্য আমাদের ভর্তি অফিসে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
