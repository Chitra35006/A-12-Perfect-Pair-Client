import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://a-12-perfect-pair-server.vercel.app"
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
