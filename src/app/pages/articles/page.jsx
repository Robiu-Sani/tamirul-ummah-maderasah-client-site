"use client";
import { SiProteus } from "react-icons/si";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import { useEffect, useRef, useState } from "react";

export default function Articles() {
  const [posts, setPosts] = useState([]); // Store the posts
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const scrollar = useRef(null); // Ref for scroll behavior
  const isFirstRender = useRef(true); // Track the first render

  // Function to fetch posts
  const fetchPosts = async () => {
    setLoading(true); // Start loading
    setError(""); // Reset error
    try {
      const response = await axios.get(`${url}/post`);
      setPosts(response.data?.data || []); // Update posts
    } catch (err) {
      setError("Failed to fetch articles. Please try again later."); // Handle error
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch posts and manage scrolling
  useEffect(() => {
    fetchPosts();
  }, []);

  // Scroll logic
  useEffect(() => {
    if (isFirstRender.current) {
      // Skip scrolling on the first render
      isFirstRender.current = false;
    } else if (posts.length > 0) {
      // Scroll only after the first render
      scrollar.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [posts]);

  return (
    <div className="bg-green-50">
      <div className="container bg-green-50 mx-auto py-10 px-3">
        {/* Banner Section */}
        <div className="w-full h-[120px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg mb-6">
          <SiProteus className="text-2xl md:text-4xl animate-bounce" />
          <h1 className="ml-4 text-xl md:text-3xl font-bold">
            আমাদের আর্টিকেল পেইজ
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="p-5 border bg-green-200 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                শিক্ষার্থী প্রতিভা !
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                আমাদের এই আর্টিকেল ফিল্ডের উদ্দেশ্য শিক্ষার্থীদের মধ্যে প্রতিভা
                জাগ্রত করা এবং তাদের দক্ষতাকে উন্নত করার সুযোগ করে দেওয়া।
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                এখানে শিক্ষার্থীরা তাদের সৃজনশীলতা প্রকাশের মাধ্যমে নিজেকে একধাপ
                এগিয়ে নিতে পারে। আমরা চাই, তারা নতুন কিছু শিখুক এবং তাদের
                প্রতিভা বিশ্বমঞ্চে উপস্থাপন করুক।
              </p>
            </div>
          </div>

          {/* Main Posts Section */}
          <div ref={scrollar} className="lg:col-span-6 flex flex-col gap-4">
            {loading && (
              <div className="text-center text-blue-600">
                <p>লোড হচ্ছে...</p>
              </div>
            )}
            {error && (
              <div className="text-center text-red-600">
                <p>{error}</p>
              </div>
            )}
            {!loading && !error && posts.length === 0 && (
              <div className="text-center text-gray-600">
                <p>কোনো আর্টিকেল পাওয়া যায়নি।</p>
              </div>
            )}
            {!loading &&
              !error &&
              posts.map((post, idx) => (
                <ArticleCard
                  post={post}
                  key={idx}
                />
              ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="bg-green-200 p-5 border rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                ম্যাগাজিন মেসেজ!
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                শিক্ষার্থীদের লিখা বাছাই করা হয় পোস্ট থেকে। তাদের সৃজনশীলতা এবং
                প্রতিভা ফুটিয়ে তোলার জন্য আমরা এই প্ল্যাটফর্মে তাদের কাজকে তুলে
                ধরি।
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                প্রতিটি লেখার মধ্যে থাকে নতুন কিছু শেখার সুযোগ এবং অনুপ্রেরণার
                গল্প, যা অন্য শিক্ষার্থীদের জন্য উদাহরণ হতে পারে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
