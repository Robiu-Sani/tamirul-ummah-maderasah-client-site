"use client";
import { useRouter } from "next/navigation";
import {
  FaBook,
  FaChalkboardTeacher,
  FaQuran,
  FaUserGraduate,
  FaMicroscope,
  FaLaptop,
  FaLanguage,
  FaHandsHelping,
} from "react-icons/fa";

export default function ServicesSection() {
  const router = useRouter();
  const services = [
    {
      icon: FaBook,
      name: "ইসলামিক স্টাডিজ",
      title: "কুরআন ও হাদিসের গভীর পাঠ",
    },
    {
      icon: FaChalkboardTeacher,
      name: "যোগ্য শিক্ষকবৃন্দ",
      title: "ইসলামি শিক্ষায় বিশেষজ্ঞ আলেমগণ",
    },
    {
      icon: FaQuran,
      name: "কুরআন মুখস্থকরণ",
      title: "শিক্ষার্থীদের জন্য হিফজ প্রোগ্রাম",
    },
    {
      icon: FaUserGraduate,
      name: "গ্রাজুয়েশন প্রোগ্রাম",
      title: "শিক্ষার্থীদের জন্য সনদ প্রদান",
    },
    {
      icon: FaMicroscope,
      name: "বিজ্ঞান শিক্ষা",
      title: "আধুনিক বিজ্ঞান বিষয়ের সমন্বয়",
    },
    {
      icon: FaLaptop,
      name: "ডিজিটাল লার্নিং",
      title: "অনলাইন ক্লাস ও রিসোর্স",
    },
    {
      icon: FaLanguage,
      name: "ভাষা শিক্ষা প্রোগ্রাম",
      title: "আরবি, ইংরেজি এবং অন্যান্য ভাষা",
    },
    {
      icon: FaHandsHelping,
      name: "কমিউনিটি সার্ভিস",
      title: "স্থানীয় ও বৈশ্বিক মুসলিম সমাজের সেবা",
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-10 px-2">
        <h1 className="text-4xl font-bold text-center mb-6">আমাদের সেবাসমূহ</h1>
        <p className="text-center mb-10 text-lg">
          আমাদের মাদরাসার বিভিন্ন শিক্ষা সেবা সম্পর্কে জানুন।
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <div
              onClick={() => router.push(`/pages/services`)}
              key={index}
              className="p-2 sm:p-4 border cursor-pointer rounded-md border-primary shadow-md flex flex-col items-center text-center bg-white hover:bg-gray-100 transition duration-300"
            >
              <service.icon className="text-2xl sm:text-5xl text-primary mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {service.name}
              </h3>
              <p className=" sm:text-lg text-gray-600">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
