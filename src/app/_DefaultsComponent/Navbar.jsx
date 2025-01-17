"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLogInOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import useAxiousSource from "./useAxiousSource";
import Swal from "sweetalert2";
import { usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const axiosSource = useAxiousSource();
  const [studentInfo, setStudentInfo] = useState();
  const [islogout, setIslogput] = useState(false);
  const [info, setInfo] = useState();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Fetch data on mount
    axiosSource
      .get(`/institution`)
      .then((response) => setInfo(response.data.data[0]))
      .catch((err) => console.error(err));
  }, [axiosSource]);

  useEffect(() => {
    try {
      const student = JSON.parse(localStorage.getItem("student"));
      if (student?.type === "student") {
        setStudentInfo(student);
        setIslogput(true);
      }
    } catch (error) {
      console.error("Error reading student data from localStorage:", error);
    }
  }, [pathname]);

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

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you want to  logout then click on yes",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log-out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("student");
        localStorage.removeItem("id");
        router.push("/");
        setIslogput(false);
        toast.success("You successfully log-out");
      }
    });
  };

  return (
    <div className="w-full bg-green-700 relative px-2 pt-5 pb-10">
      <Toaster />
      <div className="max-w-6xl mx-auto px-3">
        <div className="w-full flex flex-col md:flex-row justify-center items-end gap-7">
          {/* Left Content */}
          <div className="text-center w-full md:w-auto justify-center md:justify-end md:text-right flex flex-col gap-2 order-2 md:order-none">
            <h1 className="text-3xl font font-bold text-green-100">
              {info?.institutionNameEnglish
                ? info?.institutionNameEnglish
                : "Tamirul Ummah Maderasah"}
            </h1>
            <p className="text-green-200">
              {info?.institutionAddressEnglish
                ? info?.institutionAddressEnglish
                : "Insaf garden city , daulatpur , kotbari road, cumilla"}
            </p>
          </div>

          {/* Image Section */}
          <Image
            src={
              info?.logo
                ? info?.logo
                : "http://res.cloudinary.com/duegkjfvf/image/upload/v1736431614/f0clqiynnor6tavnuonl.png"
            }
            alt="logo"
            width={150}
            height={150}
            className="mx-auto bg-green-300 rounded-full "
          />

          {/* Right Content */}
          <div className="text-center md:flex  hidden  md:text-left  flex-col gap-2 order-3 md:order-none">
            <h1 className="text-3xl font-bold text-green-100">
              {info?.institutionNameBanglaArabic
                ? info?.institutionNameBanglaArabic
                : "তা’মীরুল উম্মাহ মাদ্রাসা"}
            </h1>
            <p className="text-green-200">
              {info?.institutionAddressBanglaArabic
                ? info?.institutionAddressBanglaArabic
                : "ইনসাফ গার্ডেনসিটি, দৌলতপুর, কুমিল্লা"}
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
            src={
              info?.logo
                ? info?.logo
                : "http://res.cloudinary.com/duegkjfvf/image/upload/v1736431614/f0clqiynnor6tavnuonl.png"
            }
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
            onClick={closeMenu}
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
                onClick={closeMenu}
                href="/pages/informetion-about-admition"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভর্তি সম্পর্কিত তথ্য
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/admition"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভর্তি ফরম
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/SubmitedInfo"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                জমাকৃত তথ্য
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
                onClick={closeMenu}
                href="/pages/education-system"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                পাঠ পদ্ধতি
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/all-stafe-and-teachers"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আমাদের শিক্ষক ও স্টাফ মন্ডলী
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/about-gain"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আমাদের অর্জন
              </Link>
              {/* <Link
                href="/pages/about-campus"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ক্যাম্পাস
              </Link> */}
              <Link
                onClick={closeMenu}
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
                onClick={closeMenu}
                href="/pages/services"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                সেবা সমূহ
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/notice"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                নোটিশ
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/consulting"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                পরামর্শ
              </Link>
              <Link
                onClick={closeMenu}
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
              {/* <Link
                href="/pages/programm"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                প্রোগ্রাম
              </Link> */}
              <Link
                onClick={closeMenu}
                href="/pages/videos"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ভিডিও
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/articles"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                আর্টিকেল
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/gellary"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                গ্যালারী
              </Link>
              {/* <Link
                href="/pages/documents"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                ডকুমেন্টস্
              </Link> */}
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
                onClick={closeMenu}
                href="/pages/curriculum"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                কারিকুলাম
              </Link>
              <Link
                onClick={closeMenu}
                href="/pages/departments"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                বিভাগসমূহ
              </Link>
              {/* <Link
                href="/pages/library"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                লাইব্রেরি রিসোর্স
              </Link> */}
              {/* <Link
                href="/pages/calendar"
                className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
              >
                একাডেমিক ক্যালেন্ডার
              </Link> */}
            </div>
          </div>
          <Link
            onClick={closeMenu}
            href="/pages/contact-us"
            className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
          >
            যোগাযোগ করুন
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          {studentInfo && islogout ? (
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("profile")}
                className=" text-sm  md:w-auto hover:bg-gray-100 rounded-md  flex justify-between items-center"
              >
                <Image
                  src={studentInfo?.image}
                  width={50}
                  height={50}
                  alt={studentInfo?.studentNameEnglish}
                  className="w-[50px] h-[50px] rounded-full border border-primary cursor-pointer"
                />
              </button>
              <div
                className={`dropdown z-[999] bg-white right-0 absolute w-[200px] p-2 rounded-md border shadow-md flex flex-col gap-3 ${
                  dropdownOpen === "profile" ? "flex" : "hidden"
                }`}
              >
                <p className="text-sm p-1 text-center px-3 w-full md:w-auto hover:bg-gray-100 rounded-md ">
                  {studentInfo?.studentNameBangla}
                </p>
                <Link
                  onClick={closeMenu}
                  href="/pages/StudentProfile"
                  className="text-sm p-1 text-center px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
                >
                  প্রফাইল
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/pages/education-fee"
                  className="text-sm p-1 text-center px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
                >
                  বেতন পরিশোধ করুন
                </Link>

                <button
                  onClick={handleLogOut}
                  className="text-sm text-center p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md "
                >
                  Log-out
                </button>
              </div>
            </div>
          ) : (
            <Link
              onClick={closeMenu}
              href="/pages/authcation/login"
              className="px-3 flex justify-center items-center gap-3 p-2 rounded-md bg-primary hover:bg-hover font-medium text-white"
            >
              লগইন <IoLogInOutline className="text-xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
