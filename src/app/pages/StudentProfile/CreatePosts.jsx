"use client";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { GiOilySpiral } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function CreatePosts({ student }) {
  const [image, setImage] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      ...data,
      studentID: student._id,
      isSelected: false,
      postImage: image,
    };
    console.log(postData);
    try {
      setIsSubmiting(true);

      const response = await axios.post(`${url}/post/create-post`, postData);

      if (response?.data?.status) {
        reset();
        toast.success(response.data.message || "Submit successful");
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
    <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-md shadow-md">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-center">Create a New Post</h1>
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
            {...register("postTitle", { required: "Title is required" })}
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
              required: "Description is required",
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
                  <small>Upload Student Image</small>
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
