import { SiProteus } from "react-icons/si";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";

export default async function Articles() {
  const posts = await axios.get(`${url}/post`);
  return (
    <div className="bg-green-50">
      <div className="container bg-green-50 mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <SiProteus className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আমাদের আর্টিকেল পেইজ
          </h1>
        </div>
        <div className="w-full mt-7" style={{ columns: "450px" }}>
          {posts?.data?.data.map((post, idx) => (
            <ArticleCard post={post} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
