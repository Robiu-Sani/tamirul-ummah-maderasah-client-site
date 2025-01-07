import LibraryAndOnlineLearningSection from "./LibraryAndOnlineLearningSection";
import NurturingScholars from "./NurturingScholars";
import OurLegacy from "./OurLegacy";

export default function page() {
  return (
    <div className="bg-green-50">
      <OurLegacy />
      <NurturingScholars />
      <LibraryAndOnlineLearningSection />
    </div>
  );
}
