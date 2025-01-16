"use client";

import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

export default function PopupBox({ post }) {
  const id = localStorage.getItem("id");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsSubmiting(true);

      const response = await axios.delete(
        `${url}/post/delete-post/${post._id}`
      );

      if (response?.data?.status) {
        toast.success(response.data.message || "Delete successful");
        toast.info("it will delete after 10 munite");
      } else {
        toast.error("Unexpected API response");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmiting(false);
    }
  };

  if (id == post.studentID._id) {
    return (
      <div className="p-2 w-[150px] bg-white flex flex-col justify-center items-center gap-2 rounded-md border shadow-md absolute top-4 right-0">
        <p className=" p-1 rounded-md  text-center w-[134px] text-sm text-gray-600">
          Posts
        </p>
        <Toaster />
        <Link
          href={`/pages/articles/edit/${post._id}`}
          className=" p-1 rounded-md bg-gray-50 border text-center w-[134px] text-sm text-gray-600"
        >
          Edit Post
        </Link>
        <button
          onClick={handleDelete}
          className=" p-1 flex justify-center items-center gap-2 rounded-md bg-gray-50 border text-center w-[134px] text-sm text-red-400"
        >
          {isSubmiting ? <FaSpinner className="animate-spin" /> : null} Delete
        </button>
      </div>
    );
  }
  return (
    <div className="p-3 bg-white rounded-md border shadow-md absolute top-4 right-0">
      PopupBox <Toaster />
    </div>
  );
}
