import { SiProteus } from "react-icons/si";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <div>
      <div className="container bg-green-50 mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <SiProteus className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আমাদের আর্টিকেল পেইজ
          </h1>
        </div>
        <div className="w-full " style={{ columns: "350px" }}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
