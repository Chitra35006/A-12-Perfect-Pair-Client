import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000"
});

const useAxiosPublic = () => {
  const token = localStorage.getItem("access-token");

  // Attach the token to the Authorization header if it exists
  if (token) {
    axiosPublic.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axiosPublic;
};

export default useAxiosPublic;
