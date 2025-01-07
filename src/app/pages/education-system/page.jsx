import CurriculumInformation from "./CurriculumInformation";
import GraduationProgram from "./GraduationProgram";
import IslamicStadies from "./IslamicStadies";
import QualifiedTeachers from "./QualifiedTeachers";
import QuranMemorization from "./QuranMemorization";
import ScienceEducation from "./ScienceEducation";

export default function page() {
  return (
    <div className="bg-green-50 -mt-8 pt-8">
      <CurriculumInformation />
      <IslamicStadies />
      <ScienceEducation />
      <QualifiedTeachers />
      <GraduationProgram />
      <QuranMemorization />
    </div>
  );
}
