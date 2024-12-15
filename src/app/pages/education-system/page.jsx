import CurriculumInformation from "./CurriculumInformation";
import GraduationProgram from "./GraduationProgram";
import IslamicStadies from "./IslamicStadies";
import QualifiedTeachers from "./QualifiedTeachers";
import QuranMemorization from "./QuranMemorization";
import ScienceEducation from "./ScienceEducation";

export default function page() {
  return (
    <div>
      <CurriculumInformation />
      <IslamicStadies />
      <ScienceEducation />
      <QualifiedTeachers />
      <GraduationProgram />
      <QuranMemorization />
    </div>
  );
}
