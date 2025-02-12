"use client";
import { useState, useCallback } from "react";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import ImageUpload from "@/app/_DefaultsComponent/ImageUpload";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaCameraRetro } from "react-icons/fa";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/app/_DefaultsComponent/DefaultsFunctions/getCroppedImg";

export default function UpdateProfileImage({ student, handleUploadImage }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (ImageUrl) => {
    setImageSrc(ImageUrl);
    setIsCropping(true);
  };

  const handleCropDone = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    setIsCropping(false);

    // API call to update profile image
    axios
      .patch(`${url}/student/update-single-student-by-patch/${student._id}`, {
        image: croppedImage,
      })
      .then((response) => {
        if (response.data.status === true) {
          toast.success(response.data.message);
          handleUploadImage(croppedImage);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error updating profile image:", error);
      });
  };

  return (
    <div className="relative">
      <div className="w-7 h-7 border overflow-hidden rounded-full cursor-pointer flex justify-center items-center bg-[#000000c0] bottom-5 right-1 absolute">
        <FaCameraRetro className="text-white" />
        <Toaster />
        <ImageUpload onUpload={handleImageUpload} />
      </div>

      {/* Crop Modal */}
      {isCropping && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="relative w-80 h-80">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <button
              onClick={handleCropDone}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Crop & Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
