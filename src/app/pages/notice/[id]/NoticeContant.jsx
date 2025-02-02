"use client";
import Image from "next/image";
import { FaFilePdf, FaFileImage } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

export default function NoticeContant() {
  const [notice, setNotice] = useState();
  const [isDownloadPdf, setIsDownloadPdf] = useState(false);
  const [isDownloadImg, setIsDownloadImg] = useState(false);
  const noticeRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/notice/single-notice/${id}`)
      .then((res) => setNotice(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  const downloadAsImage = async () => {
    try {
      setIsDownloadImg(true);
      if (noticeRef.current) {
        const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "notice.png";
        link.click();
      }
    } catch (err) {
      console.log(err);
      toast.error("Try Again!! Download faield!");
    } finally {
      setIsDownloadImg(false);
    }
  };

  const downloadAsPDF = async () => {
    try {
      setIsDownloadPdf(true);
      if (noticeRef.current) {
        const doc = new jsPDF();
        const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
        const imgProps = doc.getImageProperties(dataUrl);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        doc.save("notice.pdf");
      }
    } catch (err) {
      console.log(err);
      toast.error("Try Again!! Download faield!");
    } finally {
      setIsDownloadPdf(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-14 px-2 rounded-md">
      {/* Icons */}
      <Toaster />
      <div className="flex justify-end gap-6 p-4">
        <div className="group relative cursor-pointer" onClick={downloadAsPDF}>
          {isDownloadPdf ? (
            <ImSpinner9 className="animate-spin" />
          ) : (
            <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />
          )}

          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as PDF
          </span>
        </div>
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
              তা’মীরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>

          {/* Image Section */}
          <Image
            src="http://res.cloudinary.com/duegkjfvf/image/upload/v1736431614/f0clqiynnor6tavnuonl.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto bg-green-300 rounded-full"
          />

          {/* Right Content */}
          <div className="text-center md:flex hidden md:text-left flex-col gap-2 order-3 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              তা’মীরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>
        </div>

        {/* Notice Details */}
        <div className="mt-8 p-5 bg-white rounded-md shadow-md">
          <h2 className="md:text-2xl text-xl font-bold text-black">
            {notice?.title}
          </h2>
          <div className="text-gray-800 text-sm md:text-xl mt-2 whitespace-pre-wrap">
            {notice?.description}
          </div>
          {notice?.place && (
            <p className="text-gray-600 mt-2">
              <strong>Place:</strong> {notice?.place}
            </p>
          )}
          <p className="text-gray-600 mt-2">
            <strong>Start Date:</strong> {notice?.startDate}{" "}
            {notice?.startTime && `at ${notice?.startTime}`}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>End Date:</strong> {notice?.endDate}{" "}
            {notice?.endTime && `at ${notice?.endTime}`}
          </p>
          <p className="text-gray-500 text-sm text-right mt-4">
            Published on: {notice?.submissionDate}
          </p>
        </div>
      </div>
    </div>
  );
}
