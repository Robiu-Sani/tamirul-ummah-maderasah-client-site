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
  FaTint,
  FaCertificate,
  FaHome,
} from "react-icons/fa";
import Tabs from "./Tabs";

const StudentProfile = () => {
  const studentData = {
    address: "Korimganj, Kishoreganj",
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
    residentialStatus: "Abashik",
    section: "Alia",
    studentNameBangla: "রবিউস সানি",
    studentNameEnglish: "Robiu Sani",
    weight: "74",
  };

  return (
    <div className="container mx-auto px-6 py-8">
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
          <Image
            width={150}
            height={150}
            src={studentData.image}
            alt={`${studentData.studentNameEnglish} Profile`}
            className="w-40 h-40 rounded-full border-4 border-green-500 shadow-md"
          />

          {/* Personal Information */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              <FaUser className="text-green-500" />{" "}
              {studentData.studentNameEnglish}{" "}
              <span className="text-lg text-gray-500">
                ( {studentData.studentNameBangla} )
              </span>
            </h2>
            <p className="mt-2 text-gray-600 text-lg flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />{" "}
              {studentData.address}
            </p>
            <p className="mt-2 text-gray-600 text-lg flex items-center gap-2">
              <FaEnvelope className="text-green-500" /> {studentData.email}
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            {
              label: "Father's Name",
              value: studentData.fathersName,
              icon: <FaUser className="text-blue-500" />,
            },
            {
              label: "Mother's Name",
              value: studentData.mothersName,
              icon: <FaUser className="text-pink-500" />,
            },
            {
              label: "Gender",
              value: studentData.gender === "male" ? "Male" : "Female",
              icon:
                studentData.gender === "male" ? (
                  <FaMale className="text-blue-500" />
                ) : (
                  <FaFemale className="text-pink-500" />
                ),
            },
            {
              label: "Date of Birth",
              value: studentData.dateOfBirth,
              icon: <FaBirthdayCake className="text-orange-500" />,
            },
            {
              label: "Class & Section",
              value: `${studentData.class} (${studentData.section})`,
              icon: <FaCertificate className="text-purple-500" />,
            },
            {
              label: "Height",
              value: `${studentData.height} ft`,
              icon: <FaRulerVertical className="text-gray-500" />,
            },
            {
              label: "Weight",
              value: `${studentData.weight} kg`,
              icon: <FaWeight className="text-gray-500" />,
            },
            {
              label: "Blood Group",
              value: studentData.bloodGroup,
              icon: <FaTint className="text-red-500" />,
            },
            {
              label: "Residential Status",
              value: studentData.residentialStatus,
              icon: <FaHome className="text-green-500" />,
            },
            {
              label: "Birth Certificate",
              value: studentData.birthCertificate,
              icon: <FaCertificate className="text-yellow-500" />,
            },
            {
              label: "Identity Mark",
              value: studentData.identityMark,
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
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
