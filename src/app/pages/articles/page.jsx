import { SiProteus } from "react-icons/si";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <div>
      <div className="container mx-auto py-10 px-3">
        {/* banner */}
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <SiProteus className="text-2xl animate-bounce" />
          <h1 className="ml-4 text-lg md:text-2xl font-bold">
            আমাদের আর্টিকেল পেইজ
          </h1>
        </div>
        <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
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
