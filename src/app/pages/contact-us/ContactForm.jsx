"use client";

import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("তথ্য জমা হয়েছে:", data);
    alert("আপনার তথ্য সফলভাবে জমা হয়েছে!");
  };

  return (
    <div className="w-full py-16 px-4 bg-green-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* নাম ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              আপনার নাম
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                {...register("name", { required: "আপনার নাম আবশ্যক" })}
                placeholder="আপনার নাম লিখুন"
                className={`w-full pl-10 pr-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* ইমেইল ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                {...register("email", { required: "ইমেইল আবশ্যক" })}
                placeholder="আপনার ইমেইল লিখুন"
                className={`w-full pl-10 pr-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* মোবাইল নম্বর ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              মোবাইল নম্বর
            </label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                {...register("phone", {
                  required: "মোবাইল নম্বর আবশ্যক",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "সঠিক মোবাইল নম্বর প্রদান করুন",
                  },
                })}
                placeholder="আপনার মোবাইল নম্বর লিখুন"
                className={`w-full pl-10 pr-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* বার্তা ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              আপনার বার্তা
            </label>
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                {...register("message", {
                  required: "আপনার বার্তা লিখুন",
                  minLength: {
                    value: 20,
                    message: "বার্তা অন্তত ২০ অক্ষরের হতে হবে",
                  },
                })}
                placeholder="আপনার বার্তা লিখুন"
                rows={5}
                className={`w-full pl-10 pr-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* জমা দিন */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 shadow-lg transition duration-300"
          >
            জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
}
