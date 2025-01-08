export default function GideLine() {
  return (
    <div className="max-w-2xl mt-10 mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">
        ভর্তি ফরম সাবমিট করার পর করণীয়
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl">&#9679;</span>
          <span>
            <strong>ছবির আইকনে</strong> ক্লিক করার মাধ্যমে তথ্যের একটি ছবি
            ডাউনলোড করুন।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl">&#9679;</span>
          <span>
            <strong>তথ্যের মাধ্যমে</strong> অফিসে গিয়ে ভর্তি নিশ্চিত করুন।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl">&#9679;</span>
          <span>
            যে <strong>ডিভাইসের আবেদন</strong> করা হবে, আবেদনের তথ্য শুধু সেই
            ডিভাইসেই পাবেন।
          </span>
        </li>
      </ul>
    </div>
  );
}
