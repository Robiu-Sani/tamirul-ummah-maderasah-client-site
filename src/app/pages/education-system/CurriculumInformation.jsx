export default function CurriculumInformation() {
  return (
    <div className="p-5 mt-10 container mx-auto md:p-10 ">
      {/* Section 1: Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
        আমাদের কারিকুলাম
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Column 1 */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-yellow-600 mb-3">
            আমাদের কারিকুলামে
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>শিশু শ্রেণি</li>
            <li>আদর্শ নূরাণী</li>
            <li>তাজবীদ ও ক্বিরাত</li>
            <li>আল-কুরআন শরীফ (নাযেরা)</li>
            <li>আল-কুরআন শরীফ (হিফজ)</li>
            <li>হাদিস শরীফ</li>
            <li>আরবি ও ইসলামী শিক্ষা</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            কওমী কারিকুলামে
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>নূরাণী (১ম বর্ষ)</li>
            <li>ফারসি-১ (২য় বর্ষ, নাহবেমীর)</li>
            <li>আরবি মুকাদ্দামাত</li>
            <li>হাদিস শরীফ ও নাহবেমীর</li>
            <li>তাজবীদ ও ক্বিরাত</li>
            <li>সীরাতুন নবী</li>
            <li>ফিকহ</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">
            In the Curriculum of All Boards
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Play, Nursery, Kinder Garden</li>
            <li>From Class Six to Seven</li>
            <li>Class Eight (JSC/JDC)</li>
            <li>Class Nine</li>
            <li>Class Ten (SSC/Dakhil)</li>
            <li>HSC (1st Year/Alim)</li>
            <li>HSC (2nd Year/Alim)</li>
            <li>Fazil-Kamil (Honors-Masters)</li>
          </ul>
        </div>
      </div>

      {/* Path Table */}
      <div className="mt-8 bg-white p-5 border border-gray-200 rounded-lg">
        <h2 className="text-xl font-bold text-green-600 mb-4">পাঠ তালিকা</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Column */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              শিশু শ্রেণি
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>কালিমা ও আসমাউল হুসনা</li>
              <li>কোরআন মাজীদ ও তাজবীদ</li>
              <li>আরবি, ইংরেজি, বাংলা ও গণিত</li>
              <li>কালচারাল (গান, ক্যারাম, শরীরচর্চা, গল্প)</li>
              <li>আখলাক-আহলাল</li>
            </ul>
          </div>
          {/* Second Column */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              হিফজুল জামাত (১ম-৭ম)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>আরবি, ইংরেজি, বাংলা ও গণিত</li>
              <li>মিজান, নাহবেমীর</li>
              <li>এসো আরবি শিখি</li>
              <li>মক্তবুল আদব</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 p-5 bg-yellow-100 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-700 mb-2">বিশেষ নোট:</h3>
        <p className="text-gray-700">
          হিফজ শেষে ছাত্রদের জন্য বিশেষ কোর্স, দাওরায়ে হাদিস, মিজান, নাহবেমীর
          সহ কওমী ও আলিয়া বোর্ডের সকল বিষয় সমন্বয়কৃত পাঠ্যক্রম অনুসরণ করা
          হয়।
        </p>
      </div>
    </div>
  );
}
