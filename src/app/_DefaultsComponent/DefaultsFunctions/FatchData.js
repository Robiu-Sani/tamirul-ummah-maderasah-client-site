import axios from "axios";

const FatchData = (urlPath) => {
  return axios
    .get(`${process.env.VITE_SERVER}/${urlPath}`)
    .then((response) => response.data)
    .catch((err) => err);
};

export default FatchData;
