const HifzInfo = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white p-5 md:p-10">
      <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-5 text-center font-bold text-2xl md:text-3xl">
          হিফজ শাখা: আমরা কেন ব্যতিক্রম?
        </div>

        {/* Main Content */}
        <div className="p-5 md:p-10 space-y-5">
          {/* Section 1: Key Points */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-green-700">
              আমরা কেন ব্যতিক্রম?
            </h3>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                কুমিল্লার মধ্যে একমাত্র ট্রাস্টের অধীনস্থ প্রতিষ্ঠান, যেটি
                ১০০শতক জমির উপর স্থাপিত নিজস্ব ক্যাম্পাস।
              </li>
              <li>
                ২৪ ঘণ্টা ক্লোজড ক্যাম্পাসে নিরাপত্তা ব্যবস্থা ও নিবিড়
                তত্ত্বাবধান।
              </li>
              <li>
                আন্তর্জাতিক মানের হিফজুল কুরআনের শিক্ষাক্রম ও অভিজ্ঞ শিক্ষক
                দ্বারা পাঠদান।
              </li>
              <li>
                তাহফিজুল কুরআনের পাশাপাশি ইলমে নাফী ও আধুনিক শিক্ষা ব্যবস্থা।
              </li>
              <li>
                প্রতি গ্রুপে ১২ জন শিক্ষার্থী এবং প্রতিজনের জন্য আলাদা মনোযোগ।
              </li>
              <li>কুরআন প্রতিযোগিতা ও প্রাক-উত্তরপূর্ববর্তী বিশেষ কর্মশালা।</li>
            </ul>
          </div>

          {/* Section 2: ছাত্রদের করণীয় */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-green-700">
              আবাসিক শিক্ষার্থীদের করণীয়
            </h3>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>নিয়মিত ৫ ওয়াক্ত সালাত জামাতের সাথে আদায়।</li>
              <li>শৃঙ্খলা বজায় রেখে নির্দিষ্ট সময়ে ক্লাসে অংশগ্রহণ।</li>
              <li>প্রতিষ্ঠানের সকল নিয়ম-কানুন মেনে চলা।</li>
            </ul>
          </div>

          {/* Section 3: অভিভাবকদের প্রস্তুতি */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-red-600">
              অভিভাবক যা সরবরাহ করবেন (আবাসিক ছাত্রদের জন্য)
            </h3>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                পান্জাবি, সেলোয়ার, চাদর, টুপি, সাদা শার্ট, খাতা-কলম ইত্যাদি।
              </li>
              <li>
                প্রয়োজনীয় তেল, সাবান, শীতের পোশাক, ছোট সুটকেস এবং খাটের চাদর।
              </li>
              <li>পড়ার উপকরণ ও খাবার ব্যবস্থার জন্য প্রয়োজনীয় সামগ্রী।</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-200 p-5 text-center">
          <p className="text-gray-700 font-semibold">মা`আসসালাম</p>
          <div className="flex justify-center space-x-5 mt-3 text-sm">
            <div>
              <span className="font-bold text-green-600">ড. আবরার আহমাদ</span> -
              সভাপতি
            </div>
            <div>
              <span className="font-bold text-green-600">
                মাও. মো. রাশেদুল হক
              </span>{" "}
              - উপদেষ্টা
            </div>
            <div>
              <span className="font-bold text-green-600">
                হা. মাও. আব্দুল্লাহ আয যিয়াদ
              </span>{" "}
              - পরিচালনা
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HifzInfo;
