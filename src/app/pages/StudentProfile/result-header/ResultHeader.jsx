import Image from "next/image";

export default function ResultHeader() {
  return (
    <div className="bg-green-600 text-white p-4 rounded-t-md flex gap-3 flex-col items-center md:flex-row justify-center">
      <Image
        src="http://res.cloudinary.com/duegkjfvf/image/upload/v1736431614/f0clqiynnor6tavnuonl.png"
        alt="Madrasa Logo"
        width={100}
        height={100}
        className="bg-green-300 rounded-full"
      />
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">তা’মীরুল উম্মাহ মাদ্রাসা</h1>
        <p className="w-full">ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা</p>
      </div>
    </div>
  );
}
