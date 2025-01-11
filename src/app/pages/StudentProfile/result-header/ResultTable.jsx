"use client";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";

export default function ResultTable({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/result/get-single-result/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const examData = data?.data || {};
  const { examName, subjects = {} } = examData;
  const { tutiral = {}, halfYearly = {}, firstTutiral = {} } = data || {};

  const calculateGrade = (percentage) => {
    if (percentage >= 80) return "A+";
    if (percentage >= 70) return "A";
    if (percentage >= 60) return "A-";
    if (percentage >= 50) return "B";
    if (percentage >= 40) return "C";
    if (percentage >= 33) return "D";
    return "F";
  };

  const calculateRow = (subject, score, multiplier) => {
    const total =
      subject === "commonKnowladge" ||
      subject === "drawing" ||
      subject === "ict"
        ? 50
        : 100;
    const tutiralTotal =
      subject === "commonKnowladge" ||
      subject === "drawing" ||
      subject === "ict"
        ? 20
        : 40;
    const obtained = score * multiplier;
    const grade = calculateGrade((obtained / total) * 100);
    const tutiralgrade = calculateGrade((obtained / tutiralTotal) * 100);
    return { total, obtained, grade, tutiralgrade, tutiralTotal };
  };

  const mergeSubjects = () => {
    const allSubjects = new Set([
      ...Object.keys(subjects),
      ...Object.keys(tutiral),
      ...Object.keys(halfYearly),
      ...Object.keys(firstTutiral),
    ]);
    return Array.from(allSubjects);
  };

  const renderTableBody = () => {
    return mergeSubjects().map((subject, index) => {
      const subjectScore = subjects[subject] || 0;
      // const tutorialScore = tutiral[subject] || 0;
      const halfYearlyScore = halfYearly[subject] || 0;
      // const firstTutorialScore = firstTutiral[subject] || 0;

      let rowData = {};

      if (examName === "Model Test" || examName === "Test") {
        rowData = calculateRow(subject, subjectScore, 1);
      } else if (
        examName === "First Tutorial" ||
        examName === "Second Tutorial"
      ) {
        const halfObtained = subjects[subject] * 0.5;
        rowData = calculateRow(subject, subjects[subject], 1);
        // const halfObtained = tutorialScore * 0.5;
        // rowData = calculateRow(subject, tutorialScore, 1);
        return (
          <tr key={index} className="even:bg-gray-50">
            <td className="border px-4 py-2">{subject}</td>
            <td className="border px-4 py-2">{rowData.tutiralTotal}</td>
            <td className="border px-4 py-2">{rowData.obtained}</td>
            <td className="border px-4 py-2">{halfObtained.toFixed(0)}</td>
            <td className="border px-4 py-2">{rowData.tutiralgrade}</td>
          </tr>
        );
      } else if (examName === "Half Yearly Exam") {
        // const halfYearlyWeighted = subjects[subject] || 0 * 0.8;
        const halfYearlyWeighted = subjectScore * 0.8;
        const tutorialWeighted = (tutiral ? tutiral[subject] || 0 : 0) * 0.5;
        rowData = calculateRow(subject, subjects[subject] || 0, 1);
        // const tutorialWeighted = tutorialScore * 0.5;
        // rowData = calculateRow(subject, halfYearlyScore, 1);
        return (
          <tr key={index} className="even:bg-gray-50">
            <td className="border px-4 py-2">{subject}</td>
            <td className="border px-4 py-2">{rowData.total}</td>
            <td className="border px-4 py-2">{rowData.obtained}</td>
            <td className="border px-4 py-2">
              {halfYearlyWeighted.toFixed(0)}
            </td>
            <td className="border px-4 py-2">
              {(tutorialWeighted + halfYearlyWeighted).toFixed(0)}
            </td>
            <td className="border px-4 py-2">{rowData.grade}</td>
          </tr>
        );
      } else if (examName === "Final Exam") {
        // const finalWeighted = subjects[subject] || 0 * 0.8;
        const finalWeighted = subjectScore * 0.8;
        const secondTutorialWeighted =
          (tutiral ? tutiral[subject] || 0 : 0) * 0.5;
        const halfYearlyWeighted =
          (halfYearly ? halfYearly[subject] || 0 : 0) * 0.8;
        const firstTutorialWeighted =
          (firstTutiral ? firstTutiral[subject] || 0 : 0) * 0.5;
        const totalWeighted =
          firstTutorialWeighted +
          halfYearlyWeighted +
          secondTutorialWeighted +
          finalWeighted;

        rowData = calculateRow(subject, subjects[subject] || 0, 1);
        // const secondTutorialWeighted = tutorialScore * 0.5;
        // const halfYearlyWeighted = halfYearlyScore * 0.8;
        // const firstTutorialWeighted = firstTutorialScore * 0.5;
        // const totalWeighted =
        //   firstTutorialWeighted +
        //   halfYearlyWeighted +
        //   secondTutorialWeighted +
        //   finalWeighted;

        // rowData = calculateRow(subject, subjectScore, 1);
        return (
          <tr key={index} className="even:bg-gray-50">
            <td className="border px-4 py-2">{subject}</td>
            <td className="border px-4 py-2">{rowData.total}</td>
            <td className="border px-4 py-2">{rowData.obtained}</td>
            <td className="border px-4 py-2">{finalWeighted.toFixed(2)}</td>
            <td className="border px-4 py-2">
              {(secondTutorialWeighted + finalWeighted).toFixed(2)}
            </td>
            <td className="border px-4 py-2">{totalWeighted.toFixed(2)}</td>
            <td className="border px-4 py-2">{rowData.grade}</td>
          </tr>
        );
      }
      return (
        <tr key={index} className="even:bg-gray-50">
          <td className="border px-4 py-2">{subject}</td>
          <td className="border px-4 py-2">{rowData.total}</td>
          <td className="border px-4 py-2">{rowData.obtained}</td>
          <td className="border px-4 py-2">{rowData.grade}</td>
        </tr>
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      {data ? (
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Total Marks</th>
              <th className="border px-4 py-2">Marks Obtained</th>
              {["First Tutorial", "Second Tutorial"].includes(examName) && (
                <th className="border px-4 py-2">50% Marks</th>
              )}
              {["Half Yearly Exam", "Final Exam"].includes(examName) && (
                <>
                  <th className="border px-4 py-2">80% Marks</th>
                  <th className="border px-4 py-2">Tutorial Weighted Marks</th>
                  {examName === "Final Exam" && (
                    <th className="border px-4 py-2">Overall Total</th>
                  )}
                </>
              )}
              <th className="border px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      ) : (
        <div className="h-[200px] flex justify-center items-center">
          <ImSpinner className="animate-spin" />
        </div>
      )}
    </div>
  );
}
