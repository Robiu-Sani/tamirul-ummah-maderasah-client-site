"use client";
import { useEffect, useRef, useState } from "react";
import { FaFileImage, FaFilePdf } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { PiSpinnerBallFill } from "react-icons/pi";
import axios from "axios";
import { url } from "../../_DefaultsComponent/DefaultsFunctions/Config";
import PropTypes from "prop-types";
import ResultHeader from "./result-header/ResultHeader";
import StudentDetails from "./result-header/StudentDetails";
import ResultTable from "./result-header/ResultTable";

const ResultCard = ({ result, image }) => {
  const noticeRef = useRef();
  const [loading, setLoading] = useState(""); // Manage loading state for both image and PDF
  const [data, setData] = useState({});
  const currentDateTime = new Date().toISOString();

  useEffect(() => {
    axios
      .get(`${url}/release`)
      .then((res) => setData(res.data.data[0]))
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch release data. Please try again later.");
      });
  }, []);

  // Helper function to validate result availability
  const isResultAvailable = (examName, releaseData, currentDateTime) => {
    const releaseDates = {
      "First Tutorial": releaseData.firstTutorial,
      "Half Yearly Exam": releaseData.halfYearlyExam,
      "Second Tutorial": releaseData.secondTutorial,
      "Final Exam": releaseData.finalExam,
      "Model Test": releaseData.modelTest,
      Test: releaseData.test,
    };

    return releaseDates[examName] && currentDateTime >= releaseDates[examName];
  };

  if (!isResultAvailable(result.examName, data, currentDateTime)) {
    return null;
  }

  // Download as Image
  const downloadAsImage = async () => {
    try {
      setLoading("image");
      if (noticeRef.current) {
        const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "result.png";
        link.click();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading("");
    }
  };

  // Download as PDF
  const downloadAsPDF = async () => {
    try {
      setLoading("pdf");
      if (noticeRef.current) {
        const element = noticeRef.current;
        const canvas = await html2canvas(element, { scale: 2 }); // High resolution for better quality
        const imageData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imageWidth = canvas.width;
        const imageHeight = canvas.height;
        const aspectRatio = imageWidth / imageHeight;
        const scaledHeight = pdfWidth / aspectRatio;

        let yPosition = 0;
        while (yPosition < scaledHeight) {
          pdf.addImage(imageData, "PNG", 0, -yPosition, pdfWidth, scaledHeight);
          yPosition += pdfHeight;
          if (yPosition < scaledHeight) {
            pdf.addPage();
          }
        }

        pdf.save("result.pdf");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading("");
    }
  };

  return (
    <div className="px-0 md:px-6 md:p-6">
      {/* Download Buttons */}
      <div className="flex justify-end gap-6 p-4">
        <button
          className="group relative cursor-pointer flex items-center"
          onClick={downloadAsPDF}
          disabled={loading === "pdf"}
        >
          {loading === "pdf" ? (
            <PiSpinnerBallFill size={30} className="animate-spin" />
          ) : (
            <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />
          )}
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as PDF
          </span>
        </button>

        <button
          className="group relative cursor-pointer flex items-center"
          onClick={downloadAsImage}
          disabled={loading === "image"}
        >
          {loading === "image" ? (
            <PiSpinnerBallFill size={30} className="animate-spin" />
          ) : (
            <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          )}
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as Image
          </span>
        </button>
      </div>

      {/* Result Card */}
      <div className="max-w-5xl mx-auto rounded-md border shadow-lg">
        <div className="bg-white" ref={noticeRef}>
          {/* Madrasa Header */}
          <ResultHeader />

          {/* Student Details */}
          <StudentDetails image={image} result={result} />

          {/* Subjects Table */}
          <ResultTable id={result._id} />
        </div>
      </div>
    </div>
  );
};

// Prop Validation

export default ResultCard;
