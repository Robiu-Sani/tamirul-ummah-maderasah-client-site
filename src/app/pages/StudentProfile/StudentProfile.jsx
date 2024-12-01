import Image from "next/image";
import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaEnvelope,
  FaMale,
  FaFemale,
  FaRulerVertical,
  FaWeight,
} from "react-icons/fa";

const StudentProfile = () => {
  const studentData = {
    address: "korimganj, kishoreganj",
    birthCertificate: "20023566214567",
    bloodGroup: "O+",
    class: "11",
    dateOfBirth: "2002-03-15",
    email: "robiusani@tum.com",
    fathersName: "Khokon Mia",
    gender: "male",
    height: "5.9",
    identityMark: "N/A",
    image:
      "http://res.cloudinary.com/duegkjfvf/image/upload/v1733077452/hcbl5oil7vcdpxbe4j8c.jpg",
    mothersName: "Howa Akter",
    residentialStatus: "abashik",
    section: "alia",
    studentNameBangla: "রবিউস সানি",
    studentNameEnglish: "Robiu Sani",
    weight: "74",
  };

  return (
    <div className="container mx-auto p-6 relative">
      {/* Cover Image */}
      <div
        className="relative h-60 w-full bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20230520/original/pngtree-green-books-stacked-on-a-green-surface-picture-image_2679596.jpg')`,
        }}
      ></div>

      {/* Profile Card */}
      <div className="relative -mt-24 md:-mt-8 bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <Image
            width={150}
            height={150}
            src={studentData.image}
            alt={`${studentData.studentNameEnglish} Profile`}
            className="w-36 h-36 rounded-full border-4 border-green-500 shadow-lg"
          />

          {/* Personal Information */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-green-600 flex items-center justify-center md:justify-start gap-2">
              <FaUser /> {studentData.studentNameEnglish}{" "}
              <span className="text-sm text-gray-500">
                ( {studentData.studentNameBangla} )
              </span>
            </h2>
            <p className="text-sm text-gray-600">
              <FaMapMarkerAlt className="inline-block text-green-500" />{" "}
              {studentData.address}
            </p>
            <p className="text-sm text-gray-600">
              <FaEnvelope className="inline-block text-green-500" />{" "}
              {studentData.email}
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Detail Card */}
          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Father`s Name:</span>{" "}
              {studentData.fathersName}
            </p>
            <p>
              <span className="font-bold">Mother`s Name:</span>{" "}
              {studentData.mothersName}
            </p>
          </div>

          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Gender:</span>{" "}
              {studentData.gender === "male" ? (
                <FaMale className="inline-block text-blue-500" />
              ) : (
                <FaFemale className="inline-block text-pink-500" />
              )}
            </p>
            <p>
              <span className="font-bold">Date of Birth:</span>{" "}
              <FaBirthdayCake className="inline-block text-orange-500" />{" "}
              {studentData.dateOfBirth}
            </p>
          </div>

          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Class:</span> {studentData.class}
            </p>
            <p>
              <span className="font-bold">Section:</span> {studentData.section}
            </p>
          </div>

          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Height:</span>{" "}
              <FaRulerVertical className="inline-block text-gray-700" />{" "}
              {studentData.height} ft
            </p>
            <p>
              <span className="font-bold">Weight:</span>{" "}
              <FaWeight className="inline-block text-gray-700" />{" "}
              {studentData.weight} kg
            </p>
          </div>

          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Blood Group:</span>{" "}
              {studentData.bloodGroup}
            </p>
            <p>
              <span className="font-bold">Identity Mark:</span>{" "}
              {studentData.identityMark}
            </p>
          </div>

          <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
            <p>
              <span className="font-bold">Birth Certificate:</span>{" "}
              {studentData.birthCertificate}
            </p>
            <p>
              <span className="font-bold">Residential Status:</span>{" "}
              {studentData.residentialStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
