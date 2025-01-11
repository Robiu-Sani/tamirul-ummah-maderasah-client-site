"use client";
import FatherInfo from "./FatherInfo";
import MotherInfo from "./MotherInfo";
import GairdeanInfo from "./GairdeanInfo";
import { useState } from "react";
import { BiSolidComponent } from "react-icons/bi";
import { DiComposer } from "react-icons/di";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OverView from "./OverView";

export default function AddInfo({ student }) {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Information Overview */}
      <div className="w-full flex flex-col gap-3">
        <div
          onClick={() => toggleSection("overview")}
          className="w-full p-3 rounded-md border cursor-pointer flex gap-3 text-gray-700 justify-between items-center"
        >
          <div className="flex justify-start items-center gap-3">
            <BiSolidComponent className="text-[60px] font-bold" /> Information
            Overview
          </div>
          {activeSection === "overview" ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {activeSection === "overview" && <OverView />}
      </div>

      {/* Father's Information */}

      {student.father ? null : (
        <div className="w-full flex flex-col gap-3">
          <div
            onClick={() => toggleSection("father")}
            className="w-full p-3 rounded-md border cursor-pointer flex gap-3 text-gray-700 justify-between items-center"
          >
            <div className="flex justify-start items-center gap-3">
              <DiComposer className="text-[60px] font-bold" /> Father`s
              Information
            </div>
            {activeSection === "father" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {activeSection === "father" && (
            <FatherInfo id={student?.student._id} />
          )}
        </div>
      )}

      {/* Mother's Information */}
      {student.mother ? null : (
        <div className="w-full flex flex-col gap-3">
          <div
            onClick={() => toggleSection("mother")}
            className="w-full p-3 rounded-md border cursor-pointer flex gap-3 text-gray-700 justify-between items-center"
          >
            <div className="flex justify-start items-center gap-3">
              <DiComposer className="text-[60px] font-bold" /> Mother`s
              Information
            </div>
            {activeSection === "mother" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {activeSection === "mother" && (
            <MotherInfo id={student?.student._id} />
          )}
        </div>
      )}

      {/* Gairdean's Information */}
      {student.gairdean ? null : (
        <div className="w-full flex flex-col gap-3">
          <div
            onClick={() => toggleSection("gairdean")}
            className="w-full p-3 rounded-md border cursor-pointer flex gap-3 text-gray-700 justify-between items-center"
          >
            <div className="flex justify-start items-center gap-3">
              <DiComposer className="text-[60px] font-bold" /> Gairdean`s
              Information
            </div>
            {activeSection === "gairdean" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </div>
          {activeSection === "gairdean" && (
            <GairdeanInfo id={student?.student._id} />
          )}
        </div>
      )}
    </div>
  );
}
