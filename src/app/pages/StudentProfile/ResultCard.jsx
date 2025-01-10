"use client";
import { useRef } from "react";
import { FaFileImage, FaFilePdf } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import ResultChart from "./ResultChart";
import ResultHeader from "./result-header/ResultHeader";
import StudentDetails from "./result-header/StudentDetails";
import ResultTable from "./result-header/ResultTable";

const ResultCard = ({ result, image }) => {
  const noticeRef = useRef();

  // Mock subjects data
  const subjects = [
    { name: "Math", score: 85, total: 100 },
    { name: "Science", score: 90, total: 100 },
    { name: "English", score: 78, total: 100 },
    { name: "History", score: 88, total: 100 },
    { name: "Geography", score: 75, total: 100 },
    { name: "Physics", score: 92, total: 100 },
    { name: "Chemistry", score: 89, total: 100 },
    { name: "Biology", score: 80, total: 100 },
    { name: "Computer", score: 95, total: 100 },
    { name: "Art", score: 70, total: 100 },
  ];

  // Calculate grade based on percentage
  const calculateGrade = (percentage) => {
    if (percentage >= 80) return "A+";
    if (percentage >= 70) return "A";
    if (percentage >= 60) return "A-";
    if (percentage >= 50) return "B";
    if (percentage >= 40) return "C";
    if (percentage >= 33) return "D";
    return "F";
  };

  // Download as image
  const downloadAsImage = async () => {
    if (noticeRef.current) {
      const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "result.png";
      link.click();
    }
  };

  // Download as PDF with proper height management

  const downloadAsPDF = async () => {
    if (noticeRef.current) {
      const element = noticeRef.current;

      // Create a canvas from the element
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

      // Split content into multiple pages if necessary
      while (yPosition < scaledHeight) {
        pdf.addImage(imageData, "PNG", 0, -yPosition, pdfWidth, scaledHeight);
        yPosition += pdfHeight;

        // Add a new page unless it's the last portion
        if (yPosition < scaledHeight) {
          pdf.addPage();
        }
      }

      pdf.save("result.pdf");
    }
  };

  console.log(result._id);

  return (
    <div className="px-0 md:px-6 md:p-6">
      {/* Download Buttons */}
      <div className="flex justify-end gap-6 p-4">
        <div className="group relative cursor-pointer" onClick={downloadAsPDF}>
          <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as PDF
          </span>
        </div>
        <div
          className="group relative cursor-pointer"
          onClick={downloadAsImage}
        >
          <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as Image
          </span>
        </div>
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

export default ResultCard;
