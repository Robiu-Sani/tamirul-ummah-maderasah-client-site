"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { toPng } from "html-to-image";
import toast, { Toaster } from "react-hot-toast";

export default function SubmitedInfo() {
  const [student, setStudent] = useState(null);
  const [isDownloadImg, setIsDownloadImg] = useState(false);
  const infoRef = useRef();

  useEffect(() => {
    // Safely access localStorage after the component mounts
    const storedData = localStorage.getItem("student");
    if (storedData) {
      try {
        setStudent(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  const downloadAsImage = async () => {
    try {
      setIsDownloadImg(true);
      if (infoRef.current) {
        const dataUrl = await toPng(infoRef.current, { cacheBust: true });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "admition-form-information.png";
        link.click();
      }
    } catch (err) {
      console.log(err);
      toast.error("Try Again!! Download faield!");
    } finally {
      setIsDownloadImg(false);
    }
  };

  if (!student) {
    return (
      <div className="max-w-2xl mx-auto my-10 flex flex-col justify-center items-center p-3">
        <p className="text-gray-700">
          বর্তমানে আপনার এই ডিভাইসে জমাকৃত কোন তথ্য নেই । ধন্যবাদ
        </p>
        <Link
          href={`/pages/admition`}
          className="p-2 px-5 rounded-md bg-green-600 text-white hover:bg-green-700 mt-3"
        >
          ভর্তি ফরম
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl  mx-auto my-3 mb-10  ">
      <Toaster />
      {/* Header Section */}
      <div className="w-full flex justify-end my-3 items-center">
        <div
          className="group relative cursor-pointer"
          onClick={downloadAsImage}
        >
          {isDownloadImg ? (
            <ImSpinner9 className="animate-spin" />
          ) : (
            <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          )}

          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download Image
          </span>
        </div>
      </div>
      <div
        className="w-full rounded-md bg-white shadow-md overflow-hidden"
        ref={infoRef}
      >
        <div className="flex items-center py-6 justify-center gap-5 bg-primary">
          <Image
            width={150}
            height={150}
            src="https://i.postimg.cc/66HFxrZQ/Whats-App-Image-2024-12-12-at-8-45-34-AM-removebg-preview.png"
            alt="Madrasah Logo"
            className="w-20 h-20 bg-green-300 rounded-full object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">
              তা’মীরুল উম্মাহ মাদরাসা
            </h1>
            <p className="text-white">ইনসাফ গার্ডেন সিটি, দৌলতপুর, কুমিল্লা</p>
          </div>
        </div>

        {/* Student Information */}
        <div className="flex flex-col p-6 md:flex-row items-start md:items-center gap-6">
          <Image
            width={150}
            height={150}
            src={
              student.image ||
              "https://www.shutterstock.com/image-vector/man-avatar-profile-picture-vector-260nw-229692004.jpg"
            }
            alt="Student Image"
            className="w-32 h-[150px] object-cover border rounded-lg"
          />

          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {student.studentNameBangla} ({student.studentNameEnglish})
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">শ্রেণি:</span> {student.class},{" "}
              <span className="font-semibold">সেকশন:</span> {student.section}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">জন্ম তারিখ:</span>{" "}
              {student.dateOfBirth}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">বিভাগ:</span>{" "}
              {student.residentialStatus}
            </p>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-6 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">পিতার নাম:</span>{" "}
              {student.fathersName}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">মাতার নাম:</span>{" "}
              {student.mothersName}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">ইমেইল:</span> {student.email}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">রক্তের গ্রুপ:</span>{" "}
              {student.bloodGroup}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">জন্ম সনদ:</span>{" "}
              {student.birthCertificate}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">লিঙ্গ:</span> {student.gender}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">ঠিকানা:</span> {student.address}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">উচ্চতা:</span> {student.height}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">ওজন:</span> {student.weight}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">শনাক্তকরণ চিহ্ন:</span>{" "}
              {student.identityMark}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
