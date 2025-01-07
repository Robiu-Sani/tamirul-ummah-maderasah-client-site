import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import StaffCard from "./StaffCard";
import axios from "axios";

export default async function AllStaff() {
  const response = await axios.get(`${url}/stafe/client`);
  const staffs = response.data.data || []; // Ensure it defaults to an empty array

  return (
    <div className="container mx-auto p-4">
      <div className="w-full p-3 text-xl mb-4 bg-primary cursor-pointer text-white font-semibold rounded-md flex justify-center items-center">
        Our Staff Members
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-3">
        {staffs.map((staff, idx) => (
          <StaffCard key={idx} staff={staff} />
        ))}
      </div>
    </div>
  );
}
