import { SiTheodinproject } from "react-icons/si";
import AllImages from "./AllImages";

export default function Gellary() {
  return (
    <div className="bg-gray-50">
      <div className="container bg-green-50 mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <SiTheodinproject className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আমাদের গ্যালারী
          </h1>
        </div>
      </div>
      <AllImages />
    </div>
  );
}
