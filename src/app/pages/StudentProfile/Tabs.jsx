"use client";
import { useState } from "react";
import ResultContant from "./ResultContant";
import PostContant from "./PostContant";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("result"); // Default active tab

  return (
    <div className="mt-5 w-full mx-auto">
      {/* Tab Buttons */}
      <div className="w-full rounded-md grid grid-cols-2 bg-gray-200 shadow-md overflow-hidden">
        <button
          onClick={() => setActiveTab("result")}
          className={`w-full p-1 text-lg font-medium ${
            activeTab === "result"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-300"
          } transition-all`}
        >
          Result
        </button>
        <button
          onClick={() => setActiveTab("post")}
          className={`w-full p-1 text-lg font-medium ${
            activeTab === "post"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-300"
          } transition-all`}
        >
          Posts
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white rounded-md">
        {activeTab === "result" && <ResultContant />}
        {activeTab === "post" && <PostContant />}
      </div>
    </div>
  );
}
