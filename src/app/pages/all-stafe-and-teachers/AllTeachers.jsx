import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";
import axios from "axios";
import TeacherCard from "./TeacherCard";

export default async function AllTeachers() {
  const response = await axios.get(`${url}/teacher`);
  const teachers = response.data.data;
  return (
    <div>
      {teachers?.map((item, idx) => (
        <TeacherCard key={idx} teacher={item} />
      ))}
    </div>
  );
}
