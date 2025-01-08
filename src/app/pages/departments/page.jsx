import { SiProtractor } from "react-icons/si";
import IslamicCourses from "./IslamicCourses";
import HifzDetails from "./HifzDetails";
import AliaDetails from "./AliaDetails";
import TakcisiDetails from "./TakcisiDetails";
import KowmiDetails from "./KowmiDetails";

export default function Departments() {
  return (
    <div className="bg-green-50">
      <div className="container bg-green-50 mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <SiProtractor className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">বিভাগসমূহ</h1>
        </div>
        <IslamicCourses />
        <AliaDetails />
        <HifzDetails />
        <TakcisiDetails />
        <KowmiDetails />
      </div>
    </div>
  );
}
