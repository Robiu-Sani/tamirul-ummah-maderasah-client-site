import Link from "next/link";

export default function AlertBox() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Alert Box */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-bold text-green-500 text-center mb-4">
          দয়া করে নিশ্চিত করুন
        </h2>
        <p className="text-gray-700 text-center mb-6">
          আপনি কি জমাকৃত তথ্য নিশ্চিত করুন এবং তথ্যের মাধ্যমে অফিসে গিয়ে ভর্তি
          নিশ্চিত করুন।
        </p>
        <div className="flex justify-center gap-4">
          {/* Confirm Button */}
          <Link
            href={"/pages/SubmitedInfo"}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            জমাকৃত তথ্য
          </Link>
        </div>
      </div>
    </div>
  );
}
