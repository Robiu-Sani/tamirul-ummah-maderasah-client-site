import React from "react";
import FatherData from "./_ocerView/FatherData";
import MotherData from "./_ocerView/MotherData";
import GairdeanData from "./_ocerView/GairdeanData";

export default function OverView({ student }) {
  return (
    <div className="flex flex-col gap-3">
      {student.father ? <FatherData father={student.father} /> : null}
      {student.mother ? <MotherData mother={student.mother} /> : null}
      {student.gairdean ? <GairdeanData gairdean={student.mother} /> : null}
    </div>
  );
}
