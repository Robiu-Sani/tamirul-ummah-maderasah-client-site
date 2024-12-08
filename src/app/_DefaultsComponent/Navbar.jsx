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
            className="mx-auto "
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

          <div className="relative group">
            <button
              onClick={() => toggleDropdown("admitions")}
              className=" text-sm p-1  px-3  md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
            >
              ভর্তি <MdArrowDropDown />
            </button>
            <div
              className={`dropdown z-[999] bg-white absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                dropdownOpen === "admitions" ? "flex" : "hidden"
              }`}
            >
              <Link
                href="/pages/informetion-about-admition"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভর্তি সম্পর্কিত তথ্য
              </Link>
              <Link
                href="/pages/admition"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভর্তি ফরম
              </Link>
              <Link
                href="/pages/about-campus"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                কেম্পাস
              </Link>
              <Link
                href="/pages/about-history"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রতিষ্ঠার ইতিহাস
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className=" text-sm p-1  px-3  md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
            >
              আমাদের সম্পর্কে <MdArrowDropDown />
            </button>
            <div
              className={`dropdown z-[999] bg-white absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                dropdownOpen === "about" ? "flex" : "hidden"
              }`}
            >
              <Link
                href="/pages/education-system"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                পাঠ পদ্ধতি
              </Link>
              <Link
                href="/pages/all-stafe-and-teachers"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আমাদের শিক্ষক ও স্টাফ মন্ডলী
              </Link>
              <Link
                href="/pages/about-gain"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আমাদের অর্জন
              </Link>
              <Link
                href="/pages/about-campus"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                কেম্পাস
              </Link>
              <Link
                href="/pages/about-history"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রতিষ্ঠার ইতিহাস
              </Link>
            </div>
          </div>
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
                href="/pages/services"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                সেবা সমূহ
              </Link>
              <Link
                href="/pages/notice"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                নোটিশ
              </Link>
              <Link
                href="/pages/consulting"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                পরামর্শ
              </Link>
              <Link
                href="/pages/training"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রশিক্ষণ
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("media")}
              className=" text-sm p-1  px-3  md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
            >
              মিডিয়া <MdArrowDropDown />
            </button>
            <div
              className={`dropdown z-[999] bg-white absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                dropdownOpen === "media" ? "flex" : "hidden"
              }`}
            >
              <Link
                href="/pages/programm"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রোগ্রাম
              </Link>
              <Link
                href="/pages/videos"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভিডিও
              </Link>
              <Link
                href="/pages/articles"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আর্টিকেল
              </Link>
              <Link
                href="/pages/gellary"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                গ্যালারী
              </Link>
              <Link
                href="/pages/documents"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ডকুমেন্টস্
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
                href="/pages/curriculum"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                কারিকুলাম
              </Link>
              <Link
                href="/pages/departments"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                বিভাগসমূহ
              </Link>
              <Link
                href="/pages/library"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                লাইব্রেরি রিসোর্স
              </Link>
              <Link
                href="/pages/calendar"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                একাডেমিক ক্যালেন্ডার
              </Link>
            </div>
          </div>
          <Link
            href="/pages/contact-us"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            যোগাযোগ করুন
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            href="/pages/authcation/login"
            className="px-3 flex justify-center items-center gap-3 p-2 rounded-md bg-primary hover:bg-hover font-medium text-white"
          >
            লগইন <IoLogInOutline className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
