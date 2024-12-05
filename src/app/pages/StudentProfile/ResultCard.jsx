"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaFileImage, FaFilePdf } from "react-icons/fa";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ResultChart from "./ResultChart";

const ResultCard = () => {
  const noticeRef = useRef();

  // Mock student details
  const studentDetails = {
    examName: "1st Semester Examination",
    studentName: "John Doe",
    roll: "12345",
    class: "10th Grade",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Option_1_-_Aryan_JAIN_x.jpeg?VersionId=iT6pvrs3MzZV9itpfqLODfKPS.FvzW58",
  };

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
          <div className="bg-green-600 text-white p-4 rounded-t-md flex flex-col items-center md:flex-row justify-center">
            <Image
              src="https://i.ibb.co/f25gg33/logo.png"
              alt="Madrasa Logo"
              width={100}
              height={100}
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">
                তামিরুল উম্মাহ আলিম মাদ্রাসা
              </h1>
              <p className="w-full">ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা</p>
            </div>
          </div>

          {/* Student Details */}
          <div className="p-4 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{studentDetails.examName}</h2>
              <p>
                <strong>Student Name:</strong> {studentDetails.studentName}
              </p>
              <p>
                <strong>Roll:</strong> {studentDetails.roll}
              </p>
              <p>
                <strong>Class:</strong> {studentDetails.class}
              </p>
            </div>
            <Image
              src={studentDetails.image}
              alt="Student"
              width={120}
              height={150}
              className="border-2 border-gray-300 rounded-md"
            />
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Subject</th>
                  <th className="border px-4 py-2">Marks Obtained</th>
                  <th className="border px-4 py-2">Total Marks</th>
                  <th className="border px-4 py-2">Percentage</th>
                  <th className="border px-4 py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => {
                  const percentage = (
                    (subject.score / subject.total) *
                    100
                  ).toFixed(2);
                  const grade = calculateGrade(percentage);

                  return (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="border px-4 py-2">{subject.name}</td>
                      <td className="border px-4 py-2">{subject.score}</td>
                      <td className="border px-4 py-2">{subject.total}</td>
                      <td className="border px-4 py-2">{percentage}%</td>
                      <td className="border px-4 py-2">{grade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Chart Section */}
          <ResultChart subjects={subjects} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
