"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLogInOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <div className="w-full bg-primary relative px-2 pt-5 pb-10">
      <div className="max-w-5xl mx-auto px-3">
        <div className="w-full flex flex-col md:flex-row justify-center items-end gap-7">
          {/* Left Content */}
          <div className="text-center w-full md:w-auto justify-center md:justify-end md:text-right flex flex-col gap-2 order-2 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              তামিরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>

          {/* Image Section */}
          <Image
            src="https://i.ibb.co/f25gg33/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto drop-shadow-md shadow-[#fff] order-1 md:order-none"
          />

          {/* Right Content */}
          <div className="text-center md:flex  hidden  md:text-left  flex-col gap-2 order-3 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              তামিরুল উম্মাহ আলিম মাদ্রাসা
            </h1>
            <p className="text-green-200">
              ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা, ০১৬১৭৬৮৮৮০৫
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container left-[50%] translate-x-[-50%] mx-auto bg-white rounded-md px-3 p-1 flex justify-between items-center shadow-md absolute -bottom-7 z-50">
        <div className="flex justify-start gap-3 items-center">
          <button
            className="block md:hidden text-2xl text-primary"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
          {/* Logo */}
          <Image
            src="https://i.ibb.co/f25gg33/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        {/* Navigation Items */}
        <nav
          className={`w-full md:w-auto absolute md:static top-14 md:top-auto left-0 md:left-auto flex flex-col md:flex-row gap-3 bg-white p-3 md:p-0 justify-center items-center rounded-md md:rounded-none border md:border-0 shadow-md md:shadow-none ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            হোম
          </Link>
          <Link
            href="/about"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            href="/about"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            ভর্তি
          </Link>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("services")}
              className=" text-sm p-1  px-3  md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
            >
              সেবা সমূহ <MdArrowDropDown />
            </button>
            <div
              className={`dropdown z-[999] bg-white absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                dropdownOpen === "services" ? "flex" : "hidden"
              }`}
            >
              <Link
                href="/services/consulting"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                পরামর্শ
              </Link>
              <Link
                href="/services/training"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রশিক্ষণ
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("academics")}
              className=" text-sm p-1 px-3 md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
            >
              একাডেমিক <MdArrowDropDown />
            </button>
            <div
              className={`dropdown bg-white z-[999] absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                dropdownOpen === "academics" ? "flex" : "hidden"
              }`}
            >
              <Link
                href="/academics/curriculum"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                কারিকুলাম
              </Link>
              <Link
                href="/academics/departments"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                বিভাগসমূহ
              </Link>
              <Link
                href="/academics/library"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                লাইব্রেরি রিসোর্স
              </Link>
              <Link
                href="/academics/calendar"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                একাডেমিক ক্যালেন্ডার
              </Link>
            </div>
          </div>
          <Link
            href="/contact-us"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            যোগাযোগ করুন
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            href="/login"
            className="px-3 flex justify-center items-center gap-3 p-2 rounded-md bg-primary hover:bg-hover font-medium text-white"
          >
            লগইন <IoLogInOutline className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}