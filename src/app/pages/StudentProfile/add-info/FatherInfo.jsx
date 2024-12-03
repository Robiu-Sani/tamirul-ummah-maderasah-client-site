"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaTint,
  FaIdCard,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FatherInfo() {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, image };
    console.log("Father Info Submitted:", newData);
    alert("Father's Information Saved Successfully!");
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto bg-white p-6 rounded-md shadow-lg border"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Father`s Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Father's Name (Bangla) */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-2" />
            পিতার নাম (বাংলা)
          </label>
          <input
            type="text"
            {...register("fatherNameBn", {
              required: "পিতার নাম (বাংলা) আবশ্যক",
            })}
            placeholder="পিতার নাম লিখুন"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fatherNameBn && (
            <span className="text-red-500 text-sm">
              {errors.fatherNameBn.message}
            </span>
          )}
        </div>

        {/* Father's Name (English) */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-2" />
            Father`s Name (English)
          </label>
          <input
            type="text"
            {...register("fatherNameEn", {
              required: "Father's name is required",
            })}
            placeholder="Enter father's name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fatherNameEn && (
            <span className="text-red-500 text-sm">
              {errors.fatherNameEn.message}
            </span>
          )}
        </div>

        {/* What he does */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaBriefcase className="inline mr-2" />
            What he does
          </label>
          <input
            type="text"
            {...register("occupation", { required: "Occupation is required" })}
            placeholder="Enter what he does"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.occupation && (
            <span className="text-red-500 text-sm">
              {errors.occupation.message}
            </span>
          )}
        </div>

        {/* Where he works */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline mr-2" />
            Where he works
          </label>
          <input
            type="text"
            {...register("workLocation", {
              required: "Work location is required",
            })}
            placeholder="Enter work location"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.workLocation && (
            <span className="text-red-500 text-sm">
              {errors.workLocation.message}
            </span>
          )}
        </div>

        {/* Mobile number*/}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline mr-2" />
            Mobile number
          </label>
          <input
            type="text"
            {...register("mobilenumber", {
              required: "Work location is required",
            })}
            placeholder="Enter work location"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.mobilenumber && (
            <span className="text-red-500 text-sm">
              {errors.mobilenumber.message}
            </span>
          )}
        </div>

        {/* Monthly Income */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaBriefcase className="inline mr-2" />
            Monthly Income
          </label>
          <input
            type="number"
            {...register("monthlyIncome", {
              required: "Monthly income is required",
            })}
            placeholder="Enter monthly income"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.monthlyIncome && (
            <span className="text-red-500 text-sm">
              {errors.monthlyIncome.message}
            </span>
          )}
        </div>

        {/* NID Number */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaIdCard className="inline mr-2" />
            NID Number
          </label>
          <input
            type="text"
            {...register("nidNumber", { required: "NID number is required" })}
            placeholder="Enter NID number"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nidNumber && (
            <span className="text-red-500 text-sm">
              {errors.nidNumber.message}
            </span>
          )}
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaTint className="inline mr-2" />
            Blood Group
          </label>
          <input
            type="text"
            {...register("bloodGroup", { required: "Blood group is required" })}
            placeholder="Enter blood group"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.bloodGroup && (
            <span className="text-red-500 text-sm">
              {errors.bloodGroup.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaEnvelope className="inline mr-2" />
            Email (Optional)
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email address"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Facebook */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaFacebook className="inline mr-2" />
            Facebook (Optional)
          </label>
          <input
            type="text"
            {...register("facebook")}
            placeholder="Enter Facebook profile link"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Whats app */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaWhatsapp className="inline mr-2" />
            Whatsapp (Optional)
          </label>
          <input
            type="text"
            {...register("Whatsapp")}
            placeholder="Enter Facebook profile link"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Death Year */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            <FaCalendarAlt className="inline mr-2" />
            Is he deceased? If yes, enter the year (Optional)
          </label>
          <input
            type="text"
            {...register("deathYear")}
            placeholder="Enter death year"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* profile  */}
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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
