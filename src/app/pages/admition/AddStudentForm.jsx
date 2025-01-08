"use client";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaCalendarAlt,
  FaTint,
  FaMapMarkerAlt,
  FaHome,
  FaMale,
  FaSchool,
} from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import axios from "axios";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import toast, { Toaster } from "react-hot-toast";
import { GiOilySpiral } from "react-icons/gi";
import AlertBox from "./AlertBox";

export default function AddStudentForm() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email =
      data.studentNameEnglish.toLowerCase().replace(/\s+/g, "") + "@tum.com";
    const newData = { image, email, ...data };
    const submitedData = {
      name: "Admition Notice",
      messages: `${data.studentNameEnglish} want a admition on class ${data.class}`,
      info: newData,
      path: "/notifictions/admition-Student",
      isClick: false,
    };
    try {
      setIsSubmiting(true);
      const response = await axios.post(
        `${url}/notifection/create-notifection`,
        submitedData
      );
      if (response?.data?.status === true) {
        reset();
        toast.success(response.data.data.message || "Submit successful");
        localStorage.setItem("student", JSON.stringify(newData));
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 4000);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something is worng!");
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  mx-auto bg-white p-8 rounded-md shadow-lg border"
    >
      {alert ? <AlertBox /> : null}
      <Toaster />
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Add Student Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Student Name in English */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaUser className="inline mr-2" />
            Student Name (English)
          </label>
          <input
            type="text"
            {...register("studentNameEnglish", { required: true })}
            placeholder="Enter student name in English"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.studentNameEnglish && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Student Name in Bangla */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaUser className="inline mr-2" />
            ছাত্র/ছাত্রীর নাম (বাংলা)
          </label>
          <input
            type="text"
            {...register("studentNameBangla", { required: true })}
            placeholder="বাংলা নাম লিখুন"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.studentNameBangla && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Father's Name */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Father`s Name
          </label>
          <input
            type="text"
            {...register("fathersName", { required: true })}
            placeholder="Enter father's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.fathersName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Mother's Name */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Mother`s Name
          </label>
          <input
            type="text"
            {...register("mothersName", { required: true })}
            placeholder="Enter mother's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.mothersName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Date of Birth */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaCalendarAlt className="inline mr-2" />
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.dateOfBirth && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Blood Group */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaTint className="inline mr-2" />
            Blood Group
          </label>
          <select
            {...register("bloodGroup", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.bloodGroup && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Height */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Height
          </label>
          <input
            type="text"
            {...register("height", { required: true })}
            placeholder="Enter height (e.g., 5'6\)"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.height && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Weight */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Weight
          </label>
          <input
            type="text"
            {...register("weight", { required: true })}
            placeholder="Enter weight (e.g., 60kg)"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.weight && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Identity Mark */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Identity Mark
          </label>
          <input
            type="text"
            {...register("identityMark", { required: false })}
            placeholder="If don't then N/A"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.identityMark && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Birth Certificate Number */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            Birth Certificate Number
          </label>
          <input
            type="text"
            {...register("birthCertificate", { required: true })}
            placeholder="Enter birth certificate number"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.birthCertificate && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Section */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaSchool className="inline mr-2" />
            Section
          </label>
          <select
            {...register("section", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select section</option>
            <option value="alia">Alia</option>
            <option value="hifz">Hifz</option>
            <option value="thaksisi">Thaksisi</option>
          </select>
          {errors.section && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Class */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">Class</label>
          <select
            {...register("class", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled selected>
              Select a class
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
            <option value="six">Six</option>
            <option value="seven">Seven</option>
            <option value="eight">Eight</option>
            <option value="nine">Nine</option>
            <option value="ten">Ten</option>
            <option value="eleven">Eleven</option>
            <option value="twelve">Twelve</option>
            <option value="hifz">Hifz</option>
            <option value="norani">Norani</option>
            <option value="fazil">Fazil</option>
            <option value="Thaksisi">Thaksisi</option>
            <option value="kamil">Kamil</option>
          </select>
          {errors.class && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Gender */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaMale className="inline mr-2" />
            Gender
          </label>
          <select
            {...register("gender", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Residential Status */}
        <div className="w-full">
          <label className="block font-medium text-green-700 mb-2">
            <FaHome className="inline mr-2" />
            Residential Status
          </label>
          <select
            {...register("residentialStatus", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select status</option>
            <option value="abashik">Abashik</option>
            <option value="onabashik">Onabashik</option>
            <option value="daycare">Daycare</option>
          </select>
          {errors.residentialStatus && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Address */}
        <div className="w-full col-span-1 md:col-span-2">
          <label className="block font-medium text-green-700 mb-2">
            <FaMapMarkerAlt className="inline mr-2" />
            Address
          </label>
          <textarea
            {...register("address", { required: true })}
            placeholder="Enter address"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
        Submit
      </button>
    </form>
  );
}
