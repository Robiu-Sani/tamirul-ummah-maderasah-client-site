import { FaFortAwesomeAlt } from "react-icons/fa6";
import OurAchievements from "./OurAchievements";

export default function page() {
  return (
    <div className="w-full bg-green-50">
      <div className="container mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <FaFortAwesomeAlt className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">আমাদের অর্জন</h1>
        </div>
        <OurAchievements />
      </div>
    </div>
  );
}
