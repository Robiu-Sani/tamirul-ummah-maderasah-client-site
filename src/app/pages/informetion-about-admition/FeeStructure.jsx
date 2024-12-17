const FeeStructure = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-10 px-5">
      <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white text-center py-5 font-bold text-2xl md:text-3xl">
          ভর্তি বেতন ও অন্যান্য ফি
        </div>

        {/* Fee Details */}
        <div className="p-5 md:p-10">
          {/* Table 1: Admission Fees */}
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              ভর্তি ও আবাসিক ফি
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">বিবরণ</th>
                  <th className="p-2 border text-center">ফি</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">ভর্তি ফরম ফি</td>
                  <td className="p-2 border text-center">২০০/-</td>
                </tr>
                <tr>
                  <td className="p-2 border">নতুন ভর্তি ফি</td>
                  <td className="p-2 border text-center">৩৫০০/-</td>
                </tr>
                <tr>
                  <td className="p-2 border">ভর্তি নবায়ন ফি (আবাসিক)</td>
                  <td className="p-2 border text-center">৩০০০/-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: General & Class Fees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                আবাসিক ফি (হিফজ ও তাখসীসি শাখা)
              </h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border">টিউশন ফি</td>
                    <td className="p-2 border text-center">২২০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">মাসিক খাবার</td>
                    <td className="p-2 border text-center">৩৬০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">আবাসন ও সংরক্ষণ ফি</td>
                    <td className="p-2 border text-center">৮০০/-</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="p-2 border">মোট</td>
                    <td className="p-2 border text-center">৬৬০০/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                জেনারেল শ্রেণির বেতন ও পরীক্ষা ফি
              </h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border">শিশু</td>
                    <td className="p-2 border text-center">৬০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">প্রথম-দ্বিতীয়</td>
                    <td className="p-2 border text-center">৭০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">তৃতীয়-ষষ্ঠ</td>
                    <td className="p-2 border text-center">৮০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">সেমিস্টার পরীক্ষার ফি</td>
                    <td className="p-2 border text-center">৮০০/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">ডিজিটালিয়ার পরীক্ষার ফি</td>
                    <td className="p-2 border text-center">৫০০/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Routine Section */}
          <div className="my-8">
            <h3 className="text-xl font-semibold text-red-600 mb-3">
              আবাসিক ও ডে কেয়ার ক্লাস রুটিন
            </h3>
            <p className="text-gray-700">
              <strong>ফজরের পূর্বে:</strong> হিফজ ও নাজেরা ক্লাস সকাল ৫:৩০ থেকে।
            </p>
            <p className="text-gray-700">
              <strong>ফজরের পর:</strong> কুরআন ক্লাস এবং অন্যান্য বিষয়।
            </p>
            <p className="text-gray-700">
              <strong>যোহরের পর:</strong> সাধারণ ক্লাস এবং পুনরাবৃত্তি।
            </p>
          </div>

          {/* Uniform Section */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-green-700 mb-3">
              শিক্ষার্থীদের ইউনিফর্ম
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>বালক:</strong> সবুজ রঙের পাঞ্জাবি-পায়জামা, সাদা টুপি।
              </li>
              <li>
                <strong>বালিকা:</strong> সাদা কামিজ, কালো বোরকা, সাদা হিজাব।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
