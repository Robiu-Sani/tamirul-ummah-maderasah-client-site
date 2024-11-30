import Image from "next/image";
import { FaMicroscope, FaAtom, FaFlask } from "react-icons/fa";

export default function ScienceEducation() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">বিজ্ঞান শিক্ষা</h2>
          <p className=" mt-3 text-lg">
            তামিরুল উম্মাহ মাদরাসায় বিজ্ঞান শিক্ষা একটি অত্যন্ত গুরুত্বপূর্ণ
            ক্ষেত্র যা শিক্ষার্থীদের আধুনিক বিশ্বে জ্ঞানচর্চার সুযোগ দেয়।
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMicroscope size={40} className="text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold ">গবেষণার সুযোগ</h3>
                <p className="">
                  আমাদের ল্যাবরেটরিগুলোতে আধুনিক যন্ত্রপাতি রয়েছে, যা
                  শিক্ষার্থীদের হাতে-কলমে বিজ্ঞান অনুশীলনের সুযোগ দেয়।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaAtom size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-2xl font-semibold ">আধুনিক বিজ্ঞান</h3>
                <p className="">
                  পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং গণিতের বিভিন্ন বিষয়
                  শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করে।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaFlask size={40} className="text-red-500" />
              <div>
                <h3 className="text-2xl font-semibold ">ব্যবহারিক শিক্ষা</h3>
                <p className="">
                  তাত্ত্বিক শিক্ষার পাশাপাশি ব্যবহারিক জ্ঞান অর্জনের জন্য আমরা
                  হাতে-কলমে শিক্ষাদানের উপর গুরুত্ব দিই।
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <Image
              width={300}
              height={200}
              src="https://i.ibb.co/f0wXc1H/science-education.jpg"
              alt="Science Education"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
