"use client";

import useAxiousSource from "@/app/_DefaultsComponent/useAxiousSource";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";

export default function SinglePost() {
  const { id } = useParams();
  const axiosSource = useAxiousSource();
  const [post, setPost] = useState();

  useEffect(() => {
    // Fetch data on mount
    axiosSource
      .get(`/post/single-post/${id}`)
      .then((response) => setPost(response.data.data))
      .catch((err) => console.error(err));
  }, [axiosSource, id]);

  if (!id) {
    return <div>No ID provided in the URL</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-10 flex justify-center items-center">
      <div className="w-full max-w-[500px] border bg-white rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex items-center p-3 justify-between space-x-4 mb-4">
          <div className="flex items-center gap-4">
            <Image
              width={100}
              height={100}
              src={
                post.studentID.gender === "male"
                  ? post.studentID.image
                  : "https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png"
              }
              alt={post.studentID.studentNameEnglish}
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold">
                {post.studentID.studentNameEnglish}
              </h4>
              <p className="text-sm text-gray-500">
                Class: {post.studentID.class}
              </p>
              <p className="text-sm text-gray-500">
                Section: {post.studentID.section}
              </p>
            </div>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-2xl p-2 font-bold mb-4 text-gray-800">
          {post?.postTitle}
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 p-2 mb-4">{post?.postDescription}</p>

        {/* Post Image */}
        <div className="border-b overflow-hidden p-2">
          {post.postImage && (
            <Image
              width={300}
              height={200}
              src={post?.postImage}
              alt="Post"
              className="w-full rounded-md"
            />
          )}
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 cursor-pointer">
          <div className="flex justify-center items-center p-3">
            {post.isSelected ? (
              <p className="flex justify-center items-center gap-2 text-green-600">
                <SiTicktick /> Selected
              </p>
            ) : (
              <p className="flex justify-center items-center gap-2 text-yellow-600">
                <SiTicktick /> Not Yet Selected
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
