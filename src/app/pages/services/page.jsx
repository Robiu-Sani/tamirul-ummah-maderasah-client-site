import LibraryAndOnlineLearningSection from "./LibraryAndOnlineLearningSection";
import MadrasahOverview from "./MadrasahOverview";
import NurturingScholars from "./NurturingScholars";
import OurLegacy from "./OurLegacy";

export default function page() {
  return (
    <div>
      <OurLegacy />
      <MadrasahOverview />
      <NurturingScholars />
      <LibraryAndOnlineLearningSection />
    </div>
  );
}
