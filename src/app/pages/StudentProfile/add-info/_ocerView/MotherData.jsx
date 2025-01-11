import Image from "next/image";
import React from "react";

export default function MotherData({ mother }) {
  if (!mother) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        No mother data available.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
        {/* Left Section: Image */}
        <div className="flex-shrink-0">
          <Image
            width={150}
            height={150}
            src={mother.motherImage || "https://via.placeholder.com/150"}
            alt={mother.motherNameBn}
            className="w-40 h-40 rounded-md border border-gray-300"
          />
        </div>

        {/* Right Section: Details */}
        <div className="mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {mother.motherNameBn}
          </h1>
          <h2 className="text-lg text-gray-600 mb-4">{mother.motherNameEn}</h2>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <p>
              <strong className="font-semibold text-gray-700">
                Occupation:
              </strong>{" "}
              {mother.occupation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Monthly Income:
              </strong>{" "}
              ৳{mother.monthlyIncome || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Blood Group:
              </strong>{" "}
              {mother.bloodGroup || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Mobile Number:
              </strong>{" "}
              {mother.mobilenumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">WhatsApp:</strong>{" "}
              {mother.whatsapp || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Email:</strong>{" "}
              {mother.email ? (
                <a
                  href={`mailto:${mother.email}`}
                  className="text-blue-500 underline"
                >
                  {mother.email}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Facebook:</strong>{" "}
              {mother.facebook ? (
                <a
                  href={mother.facebook}
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
              {mother.nidNumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Work Location:
              </strong>{" "}
              {mother.workLocation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Death Year:
              </strong>{" "}
              {mother.deathYear ? mother.deathYear : "Alive"}
            </p>
          </div>

          {/* Timestamps */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(mother.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(mother.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
