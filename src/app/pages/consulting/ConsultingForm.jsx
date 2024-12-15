"use client";
import { useForm } from "react-hook-form";

export default function ConsultingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="w-full px-4 py-14 bg-green-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          পরামর্শ ফর্ম
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
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            বিষয়
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject", {
              required: "বিষয়টি অবশ্যই প্রয়োজন",
            })}
            placeholder="আপনার বিষয় লিখুন"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
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
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          জমা দিন
        </button>
      </form>
    </div>
  );
}
