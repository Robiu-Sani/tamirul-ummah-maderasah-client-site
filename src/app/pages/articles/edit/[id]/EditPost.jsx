"use client";

import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { GiOilySpiral } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function EditPost() {
  const [image, setImage] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [post, setPost] = useState(null); // Initialize as null
  const { id } = useParams();
  const navigate = useRouter();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const id = localStorage.getItem("id");

        if (!id) {
          // Redirect if ID is missing
          localStorage.removeItem("student");
          navigate.push("/");
          return;
        }

        const response = await axios.get(`${url}/student/single-student/${id}`);
        const { data } = response.data;

        if (data?.student?.type !== "student") {
          // If the type isn't valid, redirect and clean up local storage
          localStorage.removeItem("student");
          localStorage.removeItem("id");
          navigate.push("/");
        }
      } catch (error) {
        console.error("Error fetching student information:", error);
        navigate.push("/"); // Redirect on error
      }
    };

    fetchStudentInfo();
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${url}/post/single-post/${id}`);
        setPost(response.data.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="w-full h-20 flex justify-center items-center">
        Loading...
      </div>
    ); // Render loading state
  }

  const onSubmit = async (data) => {
    const postData = {
      postTitle: data.postTitle ? data.postTitle : post.postTitle,
      postDescription: data.postDescription
        ? data.postDescription
        : post.postDescription,
      studentID: post.studentID._id,
      isSelected: post.isSelected,
      postImage: image ? image : post.postImage,
    };
    try {
      setIsSubmiting(true);

      const response = await axios.patch(
        `${url}/post/update-single-post-by-patch/${id}`,
        postData
      );

      if (response?.data?.status) {
        reset();
        toast.success(response.data.message || "Submit successful");
        navigate.push("/");
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

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-4 bg-green-50 mt-10 rounded-md shadow-md">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Your Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Post Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-green-700"
          >
            Post Title
          </label>
          <input
            id="title"
            type="text"
            {...register("postTitle", { required: false })}
            className="mt-1 block w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {errors.postTitle && (
            <p className="text-red-500 text-sm">{errors.postTitle.message}</p>
          )}
        </div>

        {/* Post Description */}
        <div>
          <label
            htmlFor="postDescription"
            className="block text-sm font-medium text-green-700"
          >
            Post Description
          </label>
          <textarea
            id="description"
            {...register("postDescription", {
              required: false,
            })}
            className="mt-1 block w-full h-40 p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {errors.postDescription && (
            <p className="text-red-500 text-sm">
              {errors.postDescription.message}
            </p>
          )}
        </div>

        {/* image  */}
        <div className="my-4 max-w-sm">
          <div className="w-full flex flex-col gap-3">
            <label className="block text-sm text-green-600 mb-2">
              Upload Image
            </label>
            <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {image ? (
                <Image
                  width={100}
                  height={100}
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full h-auto min-h-[150px] rounded-md border"
                />
              ) : (
                <div className="w-full max-h-[100px] min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload Image</small>
                </div>
              )}
              <ImageUpload onUpload={handleImageUpload} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
          Create Post
        </button>
      </form>
    </div>
  );
}
