import axios from "axios";

// Create an axios instance with a base URL
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Replace with your actual base URL
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
