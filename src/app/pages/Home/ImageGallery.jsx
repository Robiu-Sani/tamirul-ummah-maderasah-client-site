"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearchPlus, FaTimes, FaDownload } from "react-icons/fa";

const images = [
  {
    id: 1,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "ইসলামী ইভেন্ট ১",
    description: "ইসলামী ইভেন্ট ১ এর বিবরণ।",
  },
  {
    id: 2,
    src: "https://www.beesmart.city/hubfs/05-sponsored-content/viewsonic/smart-education-bee-smart-city-viewsonic-classroom-social.jpg",
    title: "ইসলামী ইভেন্ট ২",
    description: "ইসলামী ইভেন্ট ২ এর বিবরণ।",
  },
  {
    id: 3,
    src: "https://www.tetonscience.org/wp-content/uploads/2019/09/TSS_SummerCamp_BoyleHill_07-31-19-17-min-scaled.jpg",
    title: "ইসলামী ইভেন্ট ৩",
    description: "ইসলামী ইভেন্ট ৩ এর বিবরণ।",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjmOPekQuvCQDiyFt9q7NmMIQygYz7D3rpiRE_4HTUCdRJR2SblQVHM1mEty7tYu1Yos&usqp=CAU",
    title: "ইসলামী ইভেন্ট ৪",
    description: "ইসলামী ইভেন্ট ৪ এর বিবরণ।",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT363UwfUvPaGlAoZkiCTR8R9AyHIRk0wQbZAP2pOPzinCyXfwCGI6quW9Rrw4X7pGWFOE&usqp=CAU",
    title: "ইসলামী ইভেন্ট ৫",
    description: "ইসলামী ইভেন্ট ৫ এর বিবরণ।",
  },
  {
    id: 6,
    src: "https://www.gettingsmart.com/wp-content/uploads/2016/11/5-Levels-of-Place-Based-Learning-Implementation-Feature-Image.png",
    title: "ইসলামী ইভেন্ট ৬",
    description: "ইসলামী ইভেন্ট ৬ এর বিবরণ।",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to download an image
  // const downloadImage = async (url, fileName) => {
  //   try {
  //     const response = await fetch(url);
  //     const blob = await response.blob();
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.download = fileName;
  //     link.click();
  //     URL.revokeObjectURL(link.href); // Clean up the URL object
  //   } catch (error) {
  //     console.error("Image download failed:", error);
  //   }
  // };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container items-center mx-auto px-4">
        {/* শিরোনাম */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ইসলামী ইভেন্ট এবং কার্যক্রম
          </h2>
          <p className="text-gray-600 leading-relaxed">
            আমাদের স্মরণীয় ইসলামী ইভেন্ট এবং কার্যক্রমের কিছু ঝলক। বিস্তারিত
            দেখার জন্য যেকোনো ছবিতে ক্লিক করুন।
          </p>
        </div>

        {/* গ্যালারি গ্রিড */}
        <div className="" style={{ columns: "250px" }}>
          {images.map((image) => (
            <div key={image.id} className="relative m-1 group duration-300">
              <Image
                width={200}
                height={200}
                src={image.src}
                alt={image.title}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="text-white text-2xl p-4 bg-green-500 rounded-full hover:bg-green-600 mr-2"
                  onClick={() => handleImageClick(image)}
                >
                  <FaSearchPlus />
                </button>
                <button
                  className="text-white text-2xl p-4 bg-green-500 rounded-full hover:bg-green-600"
                  // onClick={() => downloadImage(image.src, `${image.title}.jpg`)}
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 flex justify-center items-center">
          <Link
            href={"/pages/gellary"}
            className="px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-hover transition duration-300"
          >
            সব ছবি দেখুন
          </Link>
        </div>

        {/* ইমেজ প্রিভিউর জন্য মডাল */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg">
              <div className="relative">
                <Image
                  width={700}
                  height={500}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl p-2 bg-red-600 rounded-full"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <button
                  className="mt-4 text-white text-xl p-3 bg-green-500 rounded-full hover:bg-green-600"
                  // onClick={() =>
                  //   downloadImage(
                  //     selectedImage.src,
                  //     `${selectedImage.title}.jpg`
                  //   )
                  // }
                >
                  <FaDownload className="inline-block mr-2" />
                  ডাউনলোড করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
