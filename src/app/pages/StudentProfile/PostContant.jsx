import ArticleCard from "../articles/ArticleCard";

export default function PostContant({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-gray-500 text-center flex justify-center items-center py-20">
        there are no posts
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-3">
      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className=" p-5 border bg-green-200 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              শিক্ষার্থী প্রতিভা !
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              আমাদের এই আর্টিকেল ফিল্ডের উদ্দেশ্য শিক্ষার্থীদের মধ্যে প্রতিভা
              জাগ্রত করা এবং তাদের দক্ষতাকে উন্নত করার সুযোগ করে দেওয়া।
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              এখানে শিক্ষার্থীরা তাদের সৃজনশীলতা প্রকাশের মাধ্যমে নিজেকে একধাপ
              এগিয়ে নিতে পারে। আমরা চাই, তারা নতুন কিছু শিখুক এবং তাদের প্রতিভা
              বিশ্বমঞ্চে উপস্থাপন করুক।
            </p>
          </div>
        </div>

        {/* Main Posts Section */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {posts?.map((post, idx) => (
            <ArticleCard post={post} key={idx} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 hidden lg:block ">
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
  );
}
