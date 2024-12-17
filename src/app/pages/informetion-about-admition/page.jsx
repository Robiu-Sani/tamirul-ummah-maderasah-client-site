import React from "react";
import FeeStructure from "./FeeStructure";
import HifzInfo from "./HifzInfo";
import FeeStructureCard from "./FeeStructureCard";

export default function page() {
  return (
    <div>
      <FeeStructureCard />
      <FeeStructure />
      <HifzInfo />
    </div>
  );
}
