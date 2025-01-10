import axios from "axios";
import { url } from "./DefaultsFunctions/Config";

const axiosSource = axios.create({
  baseURL: url,
});

export default function useAxiousSource() {
  return axiosSource;
}
