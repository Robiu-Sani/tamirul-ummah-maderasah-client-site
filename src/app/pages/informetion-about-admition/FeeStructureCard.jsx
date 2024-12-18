const FeeStructureCard = () => {
  return (
    <div className="bg-white border my-10 rounded-lg shadow-lg p-4 container mx-auto">
      {/* Title Section */}
      <div className="bg-green-600 text-white py-3 px-4 rounded-t-lg">
        <h2 className="text-xl font-bold text-center">ত্রৈমাসিক পরীক্ষার ফি</h2>
      </div>

      {/* Subheader */}
      <div className="bg-gray-100 py-2 px-4 text-center">
        <p className="text-sm font-semibold">
          নাসারী-দ্বিতীয় শ্রেণি পর্যন্ত -{" "}
          <span className="text-green-600">২০০ টাকা</span> | তৃতীয়-৫ম শ্রেণি
          পর্যন্ত - <span className="text-green-600">২৫০ টাকা</span> | ষষ্ঠ-আলিম
          শ্রেণি পর্যন্ত - <span className="text-green-600">৩০০ টাকা</span>
        </p>
      </div>

      {/* Grid Layout Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {/* Half-Yearly & Annual Fees */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-blue-700 mb-2">
            অর্ধ বার্ষিক ও বার্ষিক পরীক্ষার ফি বেতনের সমান
          </h3>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-1">ভর্তি ফি বাবদ</td>
                <td className="text-right font-semibold">১,৫০০/-</td>
              </tr>
              <tr>
                <td className="py-1">সংস্থাপন (খাট+টেবিল)</td>
                <td className="text-right font-semibold">২,০০০/-</td>
              </tr>
              <tr className="font-bold text-green-600">
                <td className="py-1">মোট</td>
                <td className="text-right">৩,৫০০/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Residential Fees */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-md font-bold text-blue-700 mb-2">আবাসিক ফি</h3>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-1">টিউশন ফি</td>
                <td className="text-right">১,৫০০/-</td>
              </tr>
              <tr>
                <td className="py-1">আবাসন ফি</td>
                <td className="text-right">১,০০০/-</td>
              </tr>
              <tr>
                <td className="py-1">মাসিক খাবার</td>
                <td className="text-right">৩,৫০০/-</td>
              </tr>
              <tr>
                <td className="py-1">অন্যান্য ফি</td>
                <td className="text-right">৫০০/-</td>
              </tr>
              <tr className="font-bold text-green-600">
                <td className="py-1">মোট</td>
                <td className="text-right">৬,৫০০/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Admission Marks Distribution */}
        <div className="md:col-span-2 border p-4 rounded-lg shadow bg-gray-50">
          <h3 className="text-md font-bold text-red-500 mb-2 text-center">
            ভর্তি পরীক্ষা মানবন্টন
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex justify-between border p-2">
              <span>আরবি</span>
              <span className="font-bold">১০</span>
            </div>
            <div className="flex justify-between border p-2">
              <span>ইংরেজি</span>
              <span className="font-bold">১০</span>
            </div>
            <div className="flex justify-between border p-2">
              <span>গণিত</span>
              <span className="font-bold">১০</span>
            </div>
            <div className="flex justify-between border p-2">
              <span>বাংলা</span>
              <span className="font-bold">১০</span>
            </div>
            <div className="flex justify-between border p-2">
              <span>সাধারণ জ্ঞান</span>
              <span className="font-bold">১০</span>
            </div>
            <div className="flex justify-between  border p-2 font-bold text-green-600">
              <span>মোট</span>
              <span>৫০</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructureCard;
