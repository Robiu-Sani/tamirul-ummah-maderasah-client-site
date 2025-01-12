"use client";
import useAxiousSource from "@/app/_DefaultsComponent/useAxiousSource";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdEditNotifications, MdOutlineReadMore } from "react-icons/md";

export default function NoticeSection() {
  const router = useRouter();
  const [notices, setNotices] = useState();

  const axiosSource = useAxiousSource();

  useEffect(() => {
    // Fetch data on mount
    axiosSource
      .get(`/notice`)
      .then((response) => setNotices(response.data.data))
      .catch((err) => console.error(err));
  }, [axiosSource]);

  return (
    <div className="w-full mx-auto py-10 container bg-green-50 px-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div className="w-full col-span-1 md:col-span-2 flex justify-end relative">
        <div className="w-[90%] md:w-[60%] p-3 mt-7 rounded-md border border-primary bg-white z-20">
          <h2 className="font-semibold text-xl mb-3">
            তা’মীরুল উম্মাহ মাদরাসা
          </h2>
          <p className="text-gray-600">
            তা’মীরুল উম্মাহ মাদরাসা একটি স্বতন্ত্র শিক্ষাপ্রতিষ্ঠান, যেখানে
            ইসলামি জ্ঞানের গভীরতা এবং আধুনিক শিক্ষার যুগোপযোগীতা একসঙ্গে
            শিক্ষার্থীদের কাছে পৌঁছে দেওয়া হয়। এখানে শিক্ষার্থীদের কুরআন ও
            হাদিসের সঙ্গে আধুনিক বিজ্ঞান ও প্রযুক্তি বিষয়ক জ্ঞান অর্জনের সুযোগ
            রয়েছে। তা’মীরুল উম্মাহ মাদরাসা শিক্ষার্থীদের নৈতিকতা, আদর্শ এবং
            মানবিক গুণাবলির বিকাশে গুরুত্ব দেয়। এটি এমন একটি প্রতিষ্ঠান যা
            শিক্ষার্থীদের জীবনে দীন ও দুনিয়ার ভারসাম্য বজায় রেখে সাফল্যের পথে
            এগিয়ে যেতে সহায়তা করে।...
          </p>
          <div className="w-full mt-3">
            <Link
              href="/pages/about-history"
              className="px-3 flex justify-center items-center w-[150px] gap-3 p-1 rounded-md bg-primary hover:bg-hover font-medium text-white"
            >
              আরও <MdOutlineReadMore className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="absolute z-10 w-[80%] md:w-[50%]  left-0 top-0">
          <Image
            height={200}
            width={200}
            className="w-full rounded-md"
            src={`https://i.postimg.cc/2yPQcYYZ/1.jpg`}
            alt="maderasah campus"
          />
        </div>
      </div>
      <div className="w-full border border-primary overflow-hidden rounded-md">
        <div className="w-full bg-primary text-xl text-white font-semibold border-b p-2 text-center">
          নোটিশ বক্স
        </div>
        <div className="w-full  max-h-[270px] flex flex-col gap-2 overflow-y-auto p-2">
          {(notices || [])
            .slice(0)
            .reverse()
            .slice(0, 5)
            .map((item, idx) => (
              <div
                key={idx}
                onClick={() => router.push(`/pages/notice/${item._id}`)}
                className="w-full cursor-pointer flex p-1 shadow-primary shadow rounded-md"
              >
                <div className="flex min-w-[40px] justify-center items-center p-2">
                  <MdEditNotifications className="text-xl text-primary" />
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                  <p>{item.title}</p>
                  <small>{item.submissionDate}</small>
                </div>
              </div>
            ))}
        </div>
        <div
          onClick={() => router.push(`/pages/notice/`)}
          className="w-full bg-primary cursor-pointer text-white font-semibold  p-1 text-center"
        >
          সব নোটিশ
        </div>
      </div>
    </div>
  );
}
