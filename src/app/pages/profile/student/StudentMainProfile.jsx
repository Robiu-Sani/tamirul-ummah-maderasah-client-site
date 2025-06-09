"use client";

import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiEdit,
  FiFileText,
  FiAward,
  FiLogOut,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function StudentMainProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const userInfo =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || {}
      : {};

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.name || "Not provided"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.email || "Not provided"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Student ID
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.studentId || "Not provided"}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Department
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.department || "Not provided"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Batch
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.batch || "Not provided"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Contact Number
                  </label>
                  <p className="mt-1 p-2 bg-gray-50 rounded-md">
                    {userInfo.phone || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Edit Profile
            </button>
          </div>
        );
      case "create":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Create New Post
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Post title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Content
                </label>
                <textarea
                  rows={5}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Write your post here..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Upload Image
                </label>
                <input type="file" className="mt-1 w-full" />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Publish Post
              </button>
            </form>
          </div>
        );
      case "posts":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Posts
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((post) => (
                <div key={post} className="border-b pb-4">
                  <h3 className="text-lg font-semibold">
                    Sample Post Title {post}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris...
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">
                      Posted on: 2023-05-{10 + post}
                    </span>
                    <div className="space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "results":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Academic Results
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Semester
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Introduction to Computer Science
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">A</td>
                    <td className="px-6 py-4 whitespace-nowrap">3</td>
                    <td className="px-6 py-4 whitespace-nowrap">Fall 2022</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Data Structures
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">A-</td>
                    <td className="px-6 py-4 whitespace-nowrap">3</td>
                    <td className="px-6 py-4 whitespace-nowrap">Spring 2023</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Algorithms</td>
                    <td className="px-6 py-4 whitespace-nowrap">B+</td>
                    <td className="px-6 py-4 whitespace-nowrap">3</td>
                    <td className="px-6 py-4 whitespace-nowrap">Fall 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-md">
              <h3 className="font-semibold text-green-800">CGPA: 3.67</h3>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full absolute top-0 left-0 bg-green-50 min-h-screen z-[9999999]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">
              Student Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, {userInfo.name || "Student"}!
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <FiHome className="mr-2" /> Go Home
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center px-4 py-3 rounded-md ${
                  activeTab === "profile"
                    ? "bg-green-100 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiUser className="mr-3" /> Profile
              </button>
              <button
                onClick={() => setActiveTab("create")}
                className={`flex items-center px-4 py-3 rounded-md ${
                  activeTab === "create"
                    ? "bg-green-100 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiEdit className="mr-3" /> Create Post
              </button>
              <button
                onClick={() => setActiveTab("posts")}
                className={`flex items-center px-4 py-3 rounded-md ${
                  activeTab === "posts"
                    ? "bg-green-100 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiFileText className="mr-3" /> Your Posts
              </button>
              <button
                onClick={() => setActiveTab("results")}
                className={`flex items-center px-4 py-3 rounded-md ${
                  activeTab === "results"
                    ? "bg-green-100 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiAward className="mr-3" /> Results
              </button>
              <div className="border-t my-2"></div>
              <button
                className="flex items-center px-4 py-3 rounded-md hover:bg-gray-100 text-red-600"
                onClick={handleLogout}
              >
                <FiLogOut className="mr-3" /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
