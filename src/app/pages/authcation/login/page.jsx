"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="w-full px-4 py-14 bg-green-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Login
        </h2>

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
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
