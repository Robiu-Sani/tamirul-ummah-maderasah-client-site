"use client";
import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import useAxiousSource from "@/app/_DefaultsComponent/useAxiousSource";
import { useRouter } from "next/navigation";
import { ImSpinner5 } from "react-icons/im";

export default function StudentPage() {
  const [studentInfo, setStudentInfo] = useState(null);
  const axiosSource = useAxiousSource();
  const router = useRouter();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const id = localStorage.getItem("id");

        if (!id) {
          // Redirect if ID is missing
          localStorage.removeItem("student");
          router.push("/");
          return;
        }

        const response = await axiosSource.get(`/student/single-student/${id}`);
        const { data } = response.data;

        if (data?.student?.type !== "student") {
          // If the type isn't valid, redirect and clean up local storage
          localStorage.removeItem("student");
          localStorage.removeItem("id");
          router.push("/");
        } else {
          setStudentInfo(data);
        }
      } catch (error) {
        console.error("Error fetching student information:", error);
        router.push("/"); // Redirect on error
      }
    };

    fetchStudentInfo();
  }, [axiosSource, router]);

  return (
    <div className="w-full bg-gray-100 py-4">
      {studentInfo ? (
        <StudentProfile student={studentInfo} />
      ) : (
        <div className="h-[200px] flex justify-center items-center">
          <ImSpinner5 className="animate-spin" size={50} />
        </div>
      )}
    </div>
  );
}
