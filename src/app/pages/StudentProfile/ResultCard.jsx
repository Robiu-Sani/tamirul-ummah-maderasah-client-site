"use client";
import Image from "next/image";
import { FaFileImage, FaFilePdf } from "react-icons/fa";

const ResultCard = () => {
  const studentDetails = {
    examName: "1st Semester Examination",
    studentName: "John Doe",
    roll: "12345",
    class: "10th Grade",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Option_1_-_Aryan_JAIN_x.jpeg?VersionId=iT6pvrs3MzZV9itpfqLODfKPS.FvzW58", // Replace with an actual image URL
  };

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

  const calculateGrade = (percentage) => {
    if (percentage >= 80) return "A+";
    if (percentage >= 70) return "A";
    if (percentage >= 60) return "A-";
    if (percentage >= 50) return "B";
    if (percentage >= 40) return "C";
    if (percentage >= 33) return "D";
    return "F";
  };

  return (
    <div className="">
      <div className="flex justify-end gap-6 p-4">
        <div className="group relative cursor-pointer">
          <FaFilePdf className="text-3xl text-red-600 hover:text-red-800 transition" />
          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as PDF
          </span>
        </div>
        <div className="group relative cursor-pointer">
          <FaFileImage className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          <span className="absolute z-[9999] bottom-10 left-1/2 -translate-x-1/2 bg-primary border text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition">
            Download as Image
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto rounded-md border bg-white  mt-3">
        {/* maderasah name   */}
        <div className="max-w-5xl bg-primary p-3 rounded-t-md mb-3 mx-auto flex flex-col md:flex-row justify-center items-end gap-7">
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
        {/* Student Details */}
        <div className="flex flex-col p-4 md:flex-row justify-between items-center mb-4">
          <div className="text-gray-800 space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">{studentDetails.examName}</h2>
            <p className="text-lg">
              <span className="font-semibold">Student Name:</span>{" "}
              {studentDetails.studentName}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Roll:</span> {studentDetails.roll}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Class:</span>{" "}
              {studentDetails.class}
            </p>
          </div>
          <Image
            width={150}
            height={200}
            src={studentDetails.image}
            alt="Student"
            className="rounded-lg border-2 border-gray-300 mt-6 md:mt-0"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4 mb-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Subject
                </th>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Marks Obtained
                </th>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Total Marks
                </th>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Percentage
                </th>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Grade
                </th>
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
                  <tr key={index} className="even:bg-gray-100">
                    <td className="py-2 px-4 border-b">{subject.name}</td>
                    <td className="py-2 px-4 border-b">{subject.score}</td>
                    <td className="py-2 px-4 border-b">{subject.total}</td>
                    <td className="py-2 px-4 border-b">{percentage}%</td>
                    <td className="py-2 px-4 border-b">{grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* SVG Bar Chart */}
        <div className="flex flex-col p-4 items-center">
          <h3 className="text-lg font-semibold">Performance Bar Chart</h3>
          <svg viewBox="0 0 550 300" className="w-full h-auto   p-2">
            {/* Grid Lines */}
            {[20, 40, 60, 80, 100].map((yValue, index) => (
              <line
                key={index}
                x1="50"
                y1={250 - (yValue / 100) * 200}
                x2="500"
                y2={250 - (yValue / 100) * 200}
                stroke="#E2E8F0"
                strokeWidth="0.5"
              />
            ))}

            {/* Y-Axis Labels */}
            {[20, 40, 60, 80, 100].map((yValue, index) => (
              <text
                key={index}
                x="30"
                y={250 - (yValue / 100) * 200 + 5}
                fontSize="11"
                fill="#64748B"
              >
                {yValue}
              </text>
            ))}

            {/* Chart Border */}
            <rect
              x="50"
              y="50"
              width="450"
              height="200"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1"
            />

            {/* Bars */}
            {subjects.map((subject, index) => {
              const xStep = 400 / subjects.length;
              const barWidth = 30;
              const x = 50 + index * xStep + (xStep - barWidth) / 2;
              const barHeight = (subject.score / 100) * 200;
              const y = 250 - barHeight;

              return (
                <g key={index}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill="url(#barGradient)"
                    className="hover:opacity-80 cursor-pointer transition-opacity duration-200"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 5}
                    fontSize="12"
                    fill="#1E293B"
                    textAnchor="middle"
                  >
                    {subject.score}
                  </text>
                </g>
              );
            })}

            {/* X-Axis Labels */}
            {subjects.map((subject, index) => {
              const xStep = 400 / subjects.length;
              const x = 50 + index * xStep + xStep / 2;
              return (
                <text
                  key={index}
                  x={x}
                  y="270"
                  fontSize="12"
                  fill="#64748B"
                  textAnchor="middle"
                  transform={`rotate(45, ${x}, 270)`}
                >
                  {subject.name}
                </text>
              );
            })}

            {/* Gradient for Bars */}
            <defs>
              <linearGradient
                id="barGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#34D399", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#6366F1", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
