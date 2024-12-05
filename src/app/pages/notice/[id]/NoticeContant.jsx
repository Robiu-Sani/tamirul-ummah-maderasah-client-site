"use client";
import Image from "next/image";
import { FaFilePdf, FaFileImage } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function NoticeContant() {
  const noticeRef = useRef();

  const notice = {
    title: "Admission Notice for 2024",
    description:
      "Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.Admission for the 2024 session is now open. Please check the requirements and submit your application online. Admission for the 2024 session is now open. Please check the requirements and submit your application online.",
    place: "Insaaf Gardens, Daulatpur, Comilla",
    startDate: "2024-12-05",
    startTime: "10:00 AM",
    endDate: "2024-12-10",
    endTime: "4:00 PM",
    publishingDate: "2024-12-01",
  };

  const downloadAsImage = async () => {
    if (noticeRef.current) {
      const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "notice.png";
      link.click();
    }
  };

  const downloadAsPDF = async () => {
    if (noticeRef.current) {
      const doc = new jsPDF();
      const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
      const imgProps = doc.getImageProperties(dataUrl);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      doc.save("notice.pdf");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-14 px-2 rounded-md">
      {/* Icons */}
      <div className="flex justify-end gap-6 p-4">
        <div className="group relative cursor-pointer" onClick={downloadAsPDF}>
          <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />
          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as PDF
          </span>
        </div>
        <div
          className="group relative cursor-pointer"
          onClick={downloadAsImage}
        >
          <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as Image
          </span>
        </div>
      </div>

      {/* Notice Content */}
      <div className="w-full bg-primary rounded-md p-2" ref={noticeRef}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-end gap-7">
          {/* Left Content */}
          <div className="text-center w-full md:w-auto justify-center md:justify-end md:text-right flex flex-col gap-2 order-2 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              তামিরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>

          {/* Image Section */}
          <Image
            src="https://i.ibb.co/f25gg33/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto"
          />

          {/* Right Content */}
          <div className="text-center md:flex hidden md:text-left flex-col gap-2 order-3 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              তামিরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>
        </div>

        {/* Notice Details */}
        <div className="mt-8 p-5 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-800">{notice.title}</h2>
          <p className="text-gray-600 mt-2">{notice.description}</p>
          {notice.place && (
            <p className="text-gray-600 mt-2">
              <strong>Place:</strong> {notice.place}
            </p>
          )}
          <p className="text-gray-600 mt-2">
            <strong>Start Date:</strong> {notice.startDate}{" "}
            {notice.startTime && `at ${notice.startTime}`}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>End Date:</strong> {notice.endDate}{" "}
            {notice.endTime && `at ${notice.endTime}`}
          </p>
          <p className="text-gray-500 text-sm text-right mt-4">
            Published on: {notice.publishingDate}
          </p>
        </div>
      </div>
    </div>
  );
}
