import React from "react";
import AliaCurriculum from "./AliaCurriculum";
import HifzCurriculum from "./HifzCurriculum";
import KowmiCurriculum from "./KowmiCurriculum";

export default function page() {
  return (
    <div className="bg-green-50">
      <AliaCurriculum />
      <HifzCurriculum />
      <KowmiCurriculum />
    </div>
  );
}
