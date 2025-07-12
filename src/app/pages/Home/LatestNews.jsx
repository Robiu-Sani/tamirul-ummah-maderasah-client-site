"use client";

import Image from "next/image";
import React from "react";
import { MdOutlineAnnouncement } from "react-icons/md";

export default function LatestNews() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <MdOutlineAnnouncement className="text-green-600 text-4xl" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            সর্বশেষ সংবাদ
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-xl font-semibold text-green-800">
            আলহামদুলিল্লাহ কুমিল্লায় আবারও প্রথম স্থান অর্জন।
          </p>
          <p>
            ঐতিহ্যবাহী তামিরুল উম্মাহ আলিম মাদ্রাসা ইনসাফ গার্ডেন সিটি, দৌলতপুর,
            কোটবাড়ি রোড, আদর্শ সদর, কুমিল্লা ২০২৫ সালের অনুষ্ঠিতব্য দাখিল
            পরীক্ষায় ১৩ টি এ প্লাস সহ শতভাগ সফলতা অর্জন করে প্রথম স্থান অর্জন
            করায় মাদ্রাসা পরিচালনা পর্ষদের সদস্যবৃন্দ, মাদ্রাসার অধ্যক্ষ এবং
            সকল শিক্ষক মন্ডলী মহান আল্লাহ তায়ালার শুকরিয়া আদায় করেন।
          </p>
          <ul className="list-disc list-inside">
            <li>মোট পরীক্ষার্থীর সংখ্যা ৬২ জন</li>
            <li>এ প্লাস পেয়েছে ১৩ জন</li>
            <li>এ গ্রেড পেয়েছে ৩৫ জন</li>
            <li>এ মাইনাস পেয়েছে ১৪ জন</li>
          </ul>
        </div>

        {/* Images */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["/image/1.jpg", "/image/2.jpg", "/image/3.jpg"].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md group">
              <Image
                src={src}
                alt={`News ${i + 1}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
