import axios from "axios";
import OurAchievementCard from "./OurAchievementCard";
import { url } from "@/app/_DefaultsComponent/DefaultsFunctions/Config";

export default async function OurAchievements() {
  const gains = await axios.get(`${url}/gain`);
  return (
    <div className="pt-5 " style={{ columns: "350px" }}>
      {gains?.data?.data.map((gain, idx) => (
        <OurAchievementCard key={idx} gain={gain} />
      ))}
    </div>
  );
}
