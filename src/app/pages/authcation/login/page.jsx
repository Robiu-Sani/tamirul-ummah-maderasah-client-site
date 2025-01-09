"use client";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiOilySpiral } from "react-icons/gi";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isWorng, setIsWorng] = useState(false);
  const [errMessage, setErrMessage] = useState();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem("student"));
    if (student && student?.type == "student") {
      router.push(`/pages/StudentProfile`);
    } else if (student && student?.type !== "student") {
      localStorage.removeItem("student");
      localStorage.removeItem("id");
    }
  }, [router]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsSubmiting(true);
      const response = await axios.post(`${url}/auth/student`, data);
      console.log(response.data.message);

      if (response.data.message === "Login Successful") {
        reset();
        setIsWorng(false);
        toast.success(response.data.message || "Submit successful");
        localStorage.setItem("student", JSON.stringify(response.data.data));
        localStorage.setItem("id", response.data.data._id);
      } else {
        setIsWorng(true);
        // Show the error message from the backend
        toast.error(response.data.error || "Something something is wrong");
        setErrMessage(response.data.error);
      }
    } catch (err) {
      console.error(err);
      setErrMessage(err.message);
      setIsWorng(true);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="w-full px-4 py-14 bg-green-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <Toaster />
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Login
        </h2>
        {isWorng ? (
          <div className="w-full rounded-md p-2 bg-red-100 my-3 text-center text-red-500 border border-red-600 flex justify-center items-center">
            Loging is not successful!{" "}
            {errMessage ? errMessage : "something is worng in there"}.
          </div>
        ) : null}

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="flex items-center mt-1">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
              placeholder="Enter your password"
              className={`block w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
          Login
        </button>
      </form>
    </div>
  );
}
