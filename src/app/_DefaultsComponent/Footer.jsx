import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* ফুটার সেকশন গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* লোগো এবং মাদ্রাসার নাম */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">তামিরুল উম্মাহ মাদ্রাসা</h2>
            <p className="text-gray-200 text-sm">
              এক প্রখ্যাত ইসলামিক প্রতিষ্ঠান যা একাডেমিক এবং ধর্মীয় উৎকর্ষতার
              উপর গুরুত্ব দেয়।
            </p>
            <Image
              width={100}
              height={100}
              src="https://via.placeholder.com/150x100.png?text=Madrasah+Logo"
              alt="Madrasah Logo"
              className="w-32 mt-4 rounded-md shadow-md"
            />
          </div>

          {/* শর্টকাট / কুইক লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">শর্টকাট</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#admission"
                  className="hover:text-gray-300 transition duration-200"
                >
                  ভর্তি
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-gray-300 transition duration-200"
                >
                  প্রোগ্রাম
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-gray-300 transition duration-200"
                >
                  ইভেন্ট ও কার্যক্রম
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition duration-200"
                >
                  আমাদের সাথে যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          {/* গুরুত্বপূর্ণ লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition duration-200"
                >
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a
                  href="#library"
                  className="hover:text-gray-300 transition duration-200"
                >
                  লাইব্রেরি
                </a>
              </li>
              <li>
                <a
                  href="#online-learning"
                  className="hover:text-gray-300 transition duration-200"
                >
                  অনলাইন লার্নিং
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="hover:text-gray-300 transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* সোশ্যাল মিডিয়া লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">আমাদের অনুসরণ করুন</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ফুডারের নিচের অংশ */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          <p>&copy; ২০২৪ তামিরুল উম্মাহ মাদ্রাসা। সব অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
