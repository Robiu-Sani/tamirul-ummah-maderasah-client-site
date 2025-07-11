import FeeStructure from "./FeeStructure";
import HifzInfo from "./HifzInfo";
import FeeStructureCard from "./FeeStructureCard";
import axios from "axios";
import { url } from "../../_DefaultsComponent/DefaultsFunctions/Config";

export default async function page() {
  const response = await axios.get(`${url}/feesStructure`);

  return (
    <div className="bg-green-50">
      <FeeStructureCard data={response.data.data[0]} />
      <FeeStructure data={response.data.data[0]} />
      <HifzInfo />
    </div>
  );
}
