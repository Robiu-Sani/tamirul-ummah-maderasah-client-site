import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function MadrasahCampuses() {
  const campuses = [
    {
      name: "মেইন ক্যাম্পাস",
      address: "ইনসাফ গার্ডেন সিটি, দৌলতপুর, কোটবাড়ি রোড, আদর্শ সদর, কুমিল্লা",
      phone: "01716453952",
    },
    {
      name: "শাখা ক্যাম্পাস - ১",
      address: "ফেনুয়া, কালিরবাজার, আদর্শ সদর, কুমিল্লা",
      phone: "01741727957",
    },
    {
      name: "শাখা ক্যাম্পাস - ২",
      address: "পাঁচপুকুরিয়া, বাতাইছড়ি, বরুড়া, কুমিল্লা",
      phone: "01813098275",
    },
  ];

  return (
    <div className="bg-green-50 py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        মাদরাসা ক্যাম্পাস পরিচিতি
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {campuses.map((campus, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              {campus.name}
            </h3>
            <div className="mb-4 flex items-start">
              <FaMapMarkerAlt className="text-green-600 text-xl mr-3" />
              <p className="text-gray-800">{campus.address}</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-green-600 text-xl mr-3" />
              <p className="text-gray-800 font-medium">{campus.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
