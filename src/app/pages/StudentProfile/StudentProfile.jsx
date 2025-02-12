import Image from "next/image";
import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaEnvelope,
  FaMale,
  FaFemale,
  FaRulerVertical,
  FaWeight,
  FaTint,
  FaCertificate,
  FaHome,
} from "react-icons/fa";
import Tabs from "./Tabs";
import UpdateProfileImage from "./UpdateProfileImage";

const StudentProfile = ({ student }) => {
  const [studentImage, setStudentImage] = useState("");

  const handleUploadImage = (url) => {
    setStudentImage(url);
  };
  return (
    <div className="container mx-auto py-8">
      {/* Cover Section */}
      <div
        className="relative h-60 w-full bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20230520/original/pngtree-green-books-stacked-on-a-green-surface-picture-image_2679596.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
      </div>

      {/* Profile Card */}
      <div className="relative -mt-28 bg-white rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="relative cursor-pointer">
            <div className="w-40 h-40  overflow-hidden rounded-full border-2 border-primary cursor-pointer flex justify-center items-center">
              <Image
                width={100}
                height={100}
                src={
                  studentImage
                    ? studentImage
                    : student?.student?.image ||
                      "https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
                }
                alt={`${student?.student?.studentNameEnglish} Profile`}
                className="w-full "
              />
            </div>
            <UpdateProfileImage
              handleUploadImage={handleUploadImage}
              student={student.student}
            />
          </div>

          {/* Personal Information */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              <FaUser className="text-green-500" />{" "}
              {student?.student?.studentNameEnglish}{" "}
              <span className="text-lg text-gray-500">
                ( {student?.student?.studentNameBangla} )
              </span>
            </h2>
            <p className="mt-2 text-gray-600 text-lg flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />{" "}
              {student?.student?.address}
            </p>
            <p className="mt-2 text-gray-600 text-lg flex items-center gap-2">
              <FaEnvelope className="text-green-500" />{" "}
              {student?.student?.email}
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              label: "Father's Name",
              value: student?.student?.fathersName,
              icon: <FaUser className="text-blue-500" />,
            },
            {
              label: "Mother's Name",
              value: student?.student?.mothersName,
              icon: <FaUser className="text-pink-500" />,
            },
            {
              label: "Gender",
              value: student?.student?.gender === "male" ? "Male" : "Female",
              icon:
                student?.student?.gender === "male" ? (
                  <FaMale className="text-blue-500" />
                ) : (
                  <FaFemale className="text-pink-500" />
                ),
            },
            {
              label: "Date of Birth",
              value: student?.student?.dateOfBirth,
              icon: <FaBirthdayCake className="text-orange-500" />,
            },
            {
              label: "Class & Section",
              value: `${student?.student?.class} (${student?.student?.section})`,
              icon: <FaCertificate className="text-purple-500" />,
            },
            {
              label: "Height",
              value: `${student?.student?.height} ft`,
              icon: <FaRulerVertical className="text-gray-500" />,
            },
            {
              label: "Weight",
              value: `${student?.student?.weight} kg`,
              icon: <FaWeight className="text-gray-500" />,
            },
            {
              label: "Blood Group",
              value: student?.student?.bloodGroup,
              icon: <FaTint className="text-red-500" />,
            },
            {
              label: "Residential Status",
              value: student?.student?.residentialStatus,
              icon: <FaHome className="text-green-500" />,
            },
            {
              label: "Birth Certificate",
              value: student?.student?.birthCertificate,
              icon: <FaCertificate className="text-yellow-500" />,
            },
            {
              label: "Identity Mark",
              value: student?.student?.identityMark,
              icon: <FaUser className="text-gray-500" />,
            },
          ].map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-2 bg-gray-50 rounded-md shadow-md border"
            >
              <div className="text-3xl">{detail.icon}</div>
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {detail.label}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="w-full">
          <Tabs student={student} />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
