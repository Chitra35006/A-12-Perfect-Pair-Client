import axios from "axios";

// Create an axios instance with a base URL
const axiosSecure = axios.create({
  baseURL: "https://a-12-perfect-pair-server.vercel.app", // Replace with your actual base URL
});

const useAxiosSecure = () => {
  // Get the JWT token from localStorage
  const token = localStorage.getItem("access-token");

  // Attach the token to the Authorization header if it exists
  if (token) {
    axiosSecure.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axiosSecure;
};

export default useAxiosSecure;
