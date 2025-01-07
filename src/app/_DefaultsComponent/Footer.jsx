import Image from "next/image";
import Link from "next/link";
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
              src="https://i.postimg.cc/66HFxrZQ/Whats-App-Image-2024-12-12-at-8-45-34-AM-removebg-preview.png"
              alt="Madrasah Logo"
              className="w-32 mt-4 rounded-full bg-green-300"
            />
          </div>

          {/* শর্টকাট / কুইক লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">শর্টকাট</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/informetion-about-admition"
                  className="hover:text-gray-300 transition duration-200"
                >
                  ভর্তি সম্পর্কিত তথ্য
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/admition"
                  className="hover:text-gray-300 transition duration-200"
                >
                  ভর্তি
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/education-system"
                  className="hover:text-gray-300 transition duration-200"
                >
                  পাঠ পদ্ধতি
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/all-stafe-and-teachers"
                  className="hover:text-gray-300 transition duration-200"
                >
                  আমাদের শিক্ষক ও স্টাফ মন্ডলী
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact-us"
                  className="hover:text-gray-300 transition duration-200"
                >
                  আমাদের সাথে যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* গুরুত্বপূর্ণ লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">গুরুত্বপূর্ণ শর্টকাট</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/about-history"
                  className="hover:text-gray-300 transition duration-200"
                >
                  প্রতিষ্টার ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/services"
                  className="hover:text-gray-300 transition duration-200"
                >
                  সেবা সমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/notice"
                  className="hover:text-gray-300 transition duration-200"
                >
                  নোটিশ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/consulting"
                  className="hover:text-gray-300 transition duration-200"
                >
                  পরামর্শ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/curriculum"
                  className="hover:text-gray-300 transition duration-200"
                >
                  কারিকুলাম
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/departments"
                  className="hover:text-gray-300 transition duration-200"
                >
                  বিভাগসমূহ
                </Link>
              </li>
            </ul>
          </div>

          {/* সোশ্যাল মিডিয়া লিঙ্ক */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/footer_path/ssl-site"
                  className="hover:text-gray-300 transition duration-200"
                >
                  আপনার নিরাপত্তা
                </Link>
              </li>
              <li>
                <Link
                  href="/footer_path/cooki-policy"
                  className="hover:text-gray-300 mb-5 transition duration-200"
                >
                  কুকি পলিসি
                </Link>
              </li>
            </ul>
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
