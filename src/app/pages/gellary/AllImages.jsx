"use client";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearchPlus, FaTimes, FaDownload } from "react-icons/fa";

// Function to download an image
const downloadImage = async (url, fileName) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up the URL object
  } catch (error) {
    console.error("Image download failed:", error);
  }
};

export default function AllImages() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/image`)
      .then((res) => setImages(res.data.data.data))
      .then((err) => console.log(err));
  }, []);

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
          {images?.map((image) => (
            <div key={image.id} className="relative m-1 group duration-300">
              <Image
                width={400}
                height={400}
                src={image.image}
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
                  onClick={() =>
                    downloadImage(image.image, `${image.title}.jpg`)
                  }
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ইমেজ প্রিভিউর জন্য মডাল */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-y-scroll max-w-3xl w-full shadow-lg">
              <div className="relative">
                <Image
                  width={800}
                  height={600}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-auto h-96 "
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
                  onClick={() =>
                    downloadImage(
                      selectedImage.src,
                      `${selectedImage.title}.jpg`
                    )
                  }
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
