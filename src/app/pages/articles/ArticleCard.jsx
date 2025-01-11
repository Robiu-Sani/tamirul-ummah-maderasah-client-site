import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

export default function ArticleCard({ post }) {
  return (
    <div className="w-full border  p-2 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            width={100}
            height={100}
            src={
              post?.studentID?.gender === "male"
                ? post?.studentID?.image
                : "https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png"
            }
            alt={post?.studentID?.studentNameEnglish}
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h4 className="text-lg font-semibold">
              {post?.studentID?.studentNameEnglish}
            </h4>
            <p className="text-sm text-gray-500">{post?.studentID?.class}</p>
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-400">
          {post?.studentID?.section}
        </span>
      </div>

      {/* Post Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {post?.postTitle}
      </h2>

      {/* Post Description */}
      <p className="text-gray-600 mb-4">{post?.postDescription}</p>

      {/* Post Image */}
      <div className="border-b overflow-hidden p-2">
        {post?.postImage ? (
          <Image
            width={300}
            height={200}
            src={post.postImage}
            alt="Post"
            className="w-full "
          />
        ) : null}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center p-2">
          {post.isSelected ? (
            <p className="flex justify-center items-center gap-2">
              <SiTicktick className="text-green-600" /> Selected
            </p>
          ) : (
            <p className="flex justify-center items-center gap-2">
              <SiTicktick className="text-yellow-600" />
              Not Yet
            </p>
          )}
        </div>
        <div className="flex justify-center items-center p-2">
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
}
