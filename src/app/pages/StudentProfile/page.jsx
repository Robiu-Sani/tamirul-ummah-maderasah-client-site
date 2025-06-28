"use client";
import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import useAxiousSource from "../../_DefaultsComponent/useAxiousSource";
import { useRouter } from "next/navigation";
import { ImSpinner5 } from "react-icons/im";

export default function StudentPage() {
  const [studentInfo, setStudentInfo] = useState({});
  const [error, setError] = useState(false);
  const axiosSource = useAxiousSource();
  const router = useRouter();

  const fetchStudentInfo = async () => {
    try {
      const id = localStorage.getItem("id");

      if (!id) {
        localStorage.removeItem("student");
        router.push("/");
        return;
      }

      const response = await axiosSource.get(`/student/single-student/${id}`);
      const { data } = response.data;

      if (data?.student?.type === "blocked") {
        localStorage.removeItem("student");
        localStorage.removeItem("id");
        router.push("/");
      } else {
        setStudentInfo(data);
        localStorage.setItem("student", JSON.stringify(data.student));
        localStorage.setItem("id", data.student._id);
      }
    } catch (error) {
      console.error("Error fetching student information:", error);
      setError(true);
      setTimeout(() => router.push("/"), 3000);
    }
  };

  useEffect(() => {
    fetchStudentInfo();
  }, [router]); // Removed axiosSource as it may not change

  return (
    <div className="w-full bg-green-50 py-4">
      {error ? (
        <div className="h-[200px] flex justify-center items-center">
          <p className="text-red-500">
            Error loading student information. Redirecting...
          </p>
        </div>
      ) : studentInfo?.student ? (
        <StudentProfile student={studentInfo} />
      ) : (
        <div className="h-[200px] flex justify-center items-center">
          <ImSpinner5 className="animate-spin" size={50} />
        </div>
      )}
    </div>
  );
}
