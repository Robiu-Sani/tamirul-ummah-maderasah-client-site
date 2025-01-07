import axios from "axios";

const axiosSource = axios.create({
  baseURL: "https://tum-server.vercel.app/api/v1",
});

export default function useAxiousSource() {
  return axiosSource;
}
