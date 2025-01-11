// components/OurAchievementCard.jsx
import Image from "next/image";
import React from "react";

const OurAchievementCard = ({ gain }) => {
  return (
    <section className="max-w-4xl mb-4 mx-auto">
      <div className="bg-white rounded-lg shadow-md border p-3  items-center">
        {/* Text Section */}
        <div className="w-full  space-y-4">
          <h2 className="text-3xl font-bold flex items-center">
            {gain?.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">{gain?.description}</p>
          <div className="space-y-2"></div>
        </div>
        {/* Image Section */}
        <div className="relative w-full  mb-6 ">
          {gain?.image ? (
            <Image
              width={500}
              height={500}
              src={gain.image}
              alt="Achievements"
              className="rounded-lg  w-full h-auto"
            />
          ) : null}

          {/* <div className="absolute top-4 left-4 bg-green-400 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            #SuccessStory
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurAchievementCard;
