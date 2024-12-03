"use client";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function CreatePosts() {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const postData = {
      ...data,
      image,
      date: new Date().toLocaleString(), // Automatically add current date and time
    };
    alert(JSON.stringify(postData, null, 2));
    reset(); // Reset the form after submission
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-md shadow-md">
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
            {...register("title", { required: "Title is required" })}
            className="mt-1 block w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Post Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-green-700"
          >
            Post Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 block w-full h-40 p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
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
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
