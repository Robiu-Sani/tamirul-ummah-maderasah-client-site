"use client";
import { useRef, useState } from "react";
import { FaFileImage, FaFilePdf } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import ResultChart from "./ResultChart";
import ResultHeader from "./result-header/ResultHeader";
import StudentDetails from "./result-header/StudentDetails";
import ResultTable from "./result-header/ResultTable";
import { PiSpinnerBallFill } from "react-icons/pi";

const ResultCard = ({ result, image }) => {
  const noticeRef = useRef();

  const [isimage, setIsImage] = useState(false);
  const [isPdf, setIsPdf] = useState(false);

  // Download as image
  const downloadAsImage = async () => {
    try {
      setIsImage(true);
      if (noticeRef.current) {
        const dataUrl = await toPng(noticeRef.current, { cacheBust: true });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "result.png";
        link.click();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsImage(false);
    }
  };

  // Download as PDF with proper height management

  const downloadAsPDF = async () => {
    try {
      setIsPdf(true);
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
    } catch (err) {
      console.log(err);
    } finally {
      setIsPdf(false);
    }
  };

  return (
    <div className="px-0 md:px-6 md:p-6">
      {/* Download Buttons */}
      <div className="flex justify-end gap-6 p-4">
        {isPdf ? (
          <PiSpinnerBallFill size={30} className="animate-spin" />
        ) : (
          <div
            className="group relative cursor-pointer"
            onClick={downloadAsPDF}
          >
            <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />

            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
              Download as PDF
            </span>
          </div>
        )}

        {isimage ? (
          <PiSpinnerBallFill size={30} className="animate-spin" />
        ) : (
          <div
            className="group relative cursor-pointer"
            onClick={downloadAsImage}
          >
            <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />

            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
              Download as Image
            </span>
          </div>
        )}
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
