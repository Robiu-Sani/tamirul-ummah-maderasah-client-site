// components/OurAchievementCard.jsx
import Image from "next/image";
import React from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";

const OurAchievementCard = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border p-3  items-center">
        {/* Image Section */}
        <div className="relative w-full  mb-6 ">
          <Image
            width={500}
            height={350}
            src="https://www.shutterstock.com/image-vector/success-banner-web-icons-set-260nw-1325511530.jpg"
            alt="Achievements"
            className="rounded-lg  w-full h-auto"
          />
          {/* <div className="absolute top-4 left-4 bg-green-400 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            #SuccessStory
          </div> */}
        </div>

        {/* Text Section */}
        <div className="w-full  space-y-4">
          <h2 className="text-3xl font-bold flex items-center">
            <FaTrophy className="text-green-400 mr-3" /> আমাদের অর্জন
          </h2>
          <p className="text-gray-700 leading-relaxed">
            আমরা কঠোর পরিশ্রম এবং নিবেদন দিয়ে অসংখ্য অর্জন করেছি। আমাদের টিমের
            উদ্ভাবনী চিন্তাভাবনা এবং অধ্যবসায়ের ফলস্বরূপ আমরা জাতীয় এবং
            আন্তর্জাতিক স্বীকৃতি অর্জন করেছি।
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaAward className="text-green-400 text-2xl mr-3" />
              <span className="text-gray-800 font-medium">জাতীয় পুরস্কার</span>
            </div>
            <div className="flex items-center">
              <FaMedal className="text-green-400 text-2xl mr-3" />
              <span className="text-gray-800 font-medium">
                আন্তর্জাতিক সাফল্য
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievementCard;
