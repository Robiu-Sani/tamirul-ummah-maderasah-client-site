import Image from "next/image";
import React from "react";

export default function GairdeanData({ gairdean }) {
  if (!gairdean) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        No Gairdean data available.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            width={150}
            height={150}
            src={gairdean.motherImage || "https://via.placeholder.com/150"}
            alt={gairdean.motherNameBn}
            className="w-40 h-40 rounded-lg border border-gray-300"
          />
        </div>

        {/* Details Section */}
        <div className="mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {gairdean.motherNameBn}
          </h1>
          <h2 className="text-lg text-gray-600 mb-4">
            {gairdean.motherNameEn}
          </h2>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <p>
              <strong className="font-semibold text-gray-700">
                Occupation:
              </strong>{" "}
              {gairdean.occupation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Monthly Income:
              </strong>{" "}
              ৳{gairdean.monthlyIncome || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Blood Group:
              </strong>{" "}
              {gairdean.bloodGroup || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Mobile Number:
              </strong>{" "}
              {gairdean.mobilenumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">WhatsApp:</strong>{" "}
              {gairdean.whatsapp || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Email:</strong>{" "}
              {gairdean.email ? (
                <a
                  href={`mailto:${gairdean.email}`}
                  className="text-blue-500 underline"
                >
                  {gairdean.email}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">Facebook:</strong>{" "}
              {gairdean.facebook ? (
                <a
                  href={gairdean.facebook}
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
              {gairdean.nidNumber || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Work Location:
              </strong>{" "}
              {gairdean.workLocation || "N/A"}
            </p>
            <p>
              <strong className="font-semibold text-gray-700">
                Death Year:
              </strong>{" "}
              {gairdean.deathYear ? gairdean.deathYear : "Alive"}
            </p>
          </div>

          {/* Timestamps */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(gairdean.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(gairdean.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
