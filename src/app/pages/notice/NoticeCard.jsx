import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function NoticeCard({ notice }) {
  const shortDescription =
    notice?.description.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-4 py-3">
        <FaRegCalendarAlt className="text-2xl" />
        <span className="ml-2 text-sm font-medium">
          {notice?.submissionDate}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{notice?.title}</h2>
        <p className="text-gray-600 mt-2">{shortDescription}</p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 text-right">
        <Link
          href={`/pages/notice/${notice?._id}`}
          className="text-sm  font-medium text-green-600 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
