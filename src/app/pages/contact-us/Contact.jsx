import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="bg-green-100  py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">যোগাযোগ করুন</h1>
          <p className="text-gray-600 mt-2">
            আপনার যেকোনো প্রশ্ন বা সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaPhoneAlt className="text-green-600 text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-green-700">ফোন করুন</h2>
            <p className="text-gray-600 mt-2">০১৬১৭৬৮৮৮০৫</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaEnvelope className="text-green-600 text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-green-700">ইমেইল</h2>
            <p className="text-gray-600 mt-2">contact@paypath.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaMapMarkerAlt className="text-green-600 text-4xl mb-4" />
            <h2 className="text-xl font-semibold text-green-700">ঠিকানা</h2>
            <p className="text-gray-600 mt-2">ঢাকা, বাংলাদেশ</p>
          </div>
        </div>

        {/* Live Chat */}
        <div className="text-center mt-10">
          <BsFillChatDotsFill className="text-green-600 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700">লাইভ চ্যাট</h2>
          <p className="text-gray-600 mt-2">
            আমাদের সাপোর্ট টিম ২৪/৭ লাইভ চ্যাটে আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            চ্যাট শুরু করুন
          </button>
        </div>
      </div>
    </div>
  );
}
