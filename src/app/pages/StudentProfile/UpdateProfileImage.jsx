import { url } from "../../_DefaultsComponent/DefaultsFunctions/Config";
import ImageUpload from "../../_DefaultsComponent/ImageUpload";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaCameraRetro } from "react-icons/fa";

export default function UpdateProfileImage({ student, handleUploadImage }) {
  const handleImageUpload = async (ImageUrl) => {
    handleUploadImage(ImageUrl);
    const submittedData = await axios.patch(
      `${url}/student/update-single-student-by-patch/${student._id}`,
      { image: ImageUrl }
    );
    if (submittedData.data.status === true) {
      toast.success(submittedData.message);
    } else {
      toast.error(submittedData.message);
    }
  };
  console.log(student._id);
  return (
    <div className="w-7 h-7  border overflow-hidden rounded-full cursor-pointer flex justify-center items-center bg-[#000000c0] bottom-5 right-1 absolute">
      <FaCameraRetro className="text-white" />
      <Toaster />
      <ImageUpload onUpload={handleImageUpload} />
    </div>
  );
}
