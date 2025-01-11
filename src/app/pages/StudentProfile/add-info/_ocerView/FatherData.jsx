import Image from "next/image";
import React from "react";

export default function FatherData({ father }) {
  if (!father) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        No father data available.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto  p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
        {/* Left Section: Image */}
        <div className="flex-shrink-0">
          <Image
            width={150}
            height={150}
            src={father.fatherImage || "https://via.placeholder.com/150"}
            alt={father.fatherNameBn}
            className="w-40 h-40 rounded-md border border-gray-300"
          />
        </div>

        {/* Right Section: Details */}
        <div className="mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {father.fatherNameBn}
          </h1>
          <h2 className="text-lg text-gray-600 mb-4">{father.fatherNameEn}</h2>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <p>
              <strong className="font-semibold text-gray-700">
                Occupation:
              </strong>{" "}
              {father.occupation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Monthly Income:
              </strong>{" "}
              ৳{father.monthlyIncome || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Blood Group:
              </strong>{" "}
              {father.bloodGroup || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Mobile Number:
              </strong>{" "}
              {father.mobilenumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">WhatsApp:</strong>{" "}
              {father.whatsapp || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Email:</strong>{" "}
              {father.email ? (
                <a
                  href={`mailto:${father.email}`}
                  className="text-blue-500 underline"
                >
                  {father.email}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Facebook:</strong>{" "}
              {father.facebook ? (
                <a
                  href={father.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Profile
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                NID Number:
              </strong>{" "}
              {father.nidNumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Work Location:
              </strong>{" "}
              {father.workLocation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Death Year:
              </strong>{" "}
              {father.deathYear ? father.deathYear : "Alive"}
            </p>
          </div>

          {/* Timestamps */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(father.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(father.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
