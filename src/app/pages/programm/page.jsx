import { GiGroundSprout } from "react-icons/gi";

export default function Programm() {
  return (
    <div>
      <div className="container mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <GiGroundSprout className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আপনাকে প্রোগ্রাম পেইজে স্বাগতম।
          </h1>
        </div>
      </div>
    </div>
  );
}
