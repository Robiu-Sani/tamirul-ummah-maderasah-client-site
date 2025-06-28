import { FaBell } from "react-icons/fa";
import NoticeCard from "./NoticeCard";
import axios from "axios";
import { url } from "../../_DefaultsComponent/DefaultsFunctions/Config";

export default async function Page() {
  const response = await axios.get(`${url}/notice`);
  const notices = response.data.data || [];

  return (
    <div className="w-full">
      <div className="container mx-auto py-14 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <FaBell className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আপনাকে নোটিশ বোর্ডে স্বাগতম।
          </h1>
        </div>
        {/* all notice here */}
        <div className="w-full mt-5 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {notices.map((notice, idx) => (
            <NoticeCard key={idx} notice={notice} />
          ))}
        </div>
      </div>
    </div>
  );
}
