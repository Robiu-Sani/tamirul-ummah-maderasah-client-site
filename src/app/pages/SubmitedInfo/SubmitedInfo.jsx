"use client";
import { useEffect, useState } from "react";

export default function SubmitedInfo() {
  const [student, setStudent] = useState(null);

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
  }, []); // Empty dependency array ensures this runs only once

  console.log(student);

  return (
    <div className=" bg-gray-100 p-4 shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">Submitted Information</h3>
      {student ? <div>sata</div> : <p>No information found</p>}
    </div>
  );
}
