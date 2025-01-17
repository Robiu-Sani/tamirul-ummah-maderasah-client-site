"use client"; // This makes the component a Client Component

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import PopupBox from "./PopupBox";

export default function ArticleCard({ post, HandleReFatch }) {
  const [callBox, setCallBox] = useState(false);
  const handleShare = async (post, id) => {
    const postUrl = `${window.location.origin}/pages/articles/details/${id}`;
    const shareData = {
      title: `${post?.studentID?.studentNameEnglish}'s post on Tamirul Ummah Madrasah website`,
      text:
        post.postDescription.length > 100
          ? post.postDescription.substring(0, 97) + "..."
          : post.postDescription,
      url: postUrl,
    };

    const fallbackShare = (url) => {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          toast.success("Post link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy link to clipboard:", error);
          toast.error("Failed to copy link. Please try again!");
        });
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Post shared successfully!");
      } catch (error) {
        console.error("Error sharing via Web Share API:", error);
        fallbackShare(postUrl);
      }
    } else {
      fallbackShare(postUrl);
    }
  };

  return (
    <div className="w-full border bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center p-3 justify-between space-x-4 mb-4">
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
        <span className="ml-auto text-sm flex justify-center items-center gap-3 text-gray-400">
          {post?.studentID?.section}
          <div
            onClick={() => setCallBox(!callBox)}
            className="relative text-xl text-black cursor-pointer"
          >
            <BsThreeDots />
            {callBox ? (
              <PopupBox post={post} HandleReFatch={HandleReFatch} />
            ) : null}
          </div>
        </span>
      </div>

      {/* Post Title */}
      <h2 className="text-2xl p-2 font-bold mb-4 text-gray-800">
        {post?.postTitle}
      </h2>

      {/* Post Description */}
      <p className="text-gray-600 p-2 mb-4">{post?.postDescription}</p>

      {/* Post Image */}
      <div className="border-b overflow-hidden p-2">
        {post?.postImage ? (
          <Image
            width={300}
            height={200}
            src={post.postImage}
            alt="Post"
            className="w-full"
          />
        ) : null}
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-2 cursor-pointer">
        <div className="flex justify-center items-center p-3">
          {post.isSelected ? (
            <p className="flex justify-center items-center gap-2">
              <SiTicktick className="text-green-600" /> Selected
            </p>
          ) : (
            <p className="flex justify-center items-center gap-2">
              <SiTicktick className="text-yellow-600" /> Not Yet
            </p>
          )}
        </div>
        <div
          onClick={() => handleShare(post, post._id)}
          className="flex justify-center items-center p-2 hover:text-blue-600"
        >
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
}
