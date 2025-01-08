"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GiOilySpiral } from "react-icons/gi";

export default function ContactForm() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { type: "contact", ...data };
    try {
      setIsSubmiting(true);
      const response = await axios.post(
        `${url}/consult/create-consulting`,
        newData
      );
      if (response?.data?.status === true) {
        reset();
        toast.success(response.data.data.message || "Submit successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something is worng!");
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="w-full py-16 px-4 bg-green-100 flex justify-center items-center">
      <div className="bg-white  max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-gray-600">
            আপনার যেকোনো প্রশ্ন বা মতামত জানাতে নিচের ফর্মটি পূরণ করুন।
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
            যোগাযোগ ফর্ম
          </h2>

          {/* Subject Input */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              নাম
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "বিষয়টি অবশ্যই প্রয়োজন",
              })}
              placeholder="আপনার নাম লিখুন"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Subject Input */}
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              নাম্বার
            </label>
            <input
              type="number"
              id="contactNumber"
              {...register("contactNumber", {
                required: "বিষয়টি অবশ্যই প্রয়োজন",
              })}
              placeholder="আপনার বিষয় লিখুন"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
            />
            {errors.contactNumber && (
              <span className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </span>
            )}
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              বিবরণ
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "বিবরণ অবশ্যই প্রয়োজন",
                minLength: {
                  value: 10,
                  message: "বিবরণ অন্তত ১০ অক্ষরের হতে হবে",
                },
              })}
              placeholder="আপনার বিবরণ লিখুন"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
            জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
}
