"use client";
import { url } from "../../../../_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { GiOilySpiral } from "react-icons/gi";

export default function ReportForm() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { id } = useParams();
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmiting(true);

      const response = await axios.patch(
        `${url}/post/update-single-post-by-patch/${id}`,
        data
      );
      //   reports

      if (response?.data?.status) {
        reset();
        toast.success(response.data.message || "Submit successful");
        navigate.push("/pages/articles");
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

  return (
    <div className="w-full py-5 pt-20 px-3 flex justify-center items-center">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[300px]">
        {/* Post Title */}

        {/* Post Description */}
        <div>
          <label
            htmlFor="postDescription"
            className="block text-sm font-medium text-green-700"
          >
            Write what you want to report
          </label>
          <textarea
            id="description"
            {...register("reports", {
              required: false,
            })}
            className="mt-1 block w-full h-40 p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {errors.reports && (
            <p className="text-red-500 text-sm">{errors.reports.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
          Submit Report
        </button>
      </form>
    </div>
  );
}
