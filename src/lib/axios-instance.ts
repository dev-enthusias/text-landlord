import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.ogalandlords.com/api",
  timeout: 3000,
});

export default axiosInstance;
