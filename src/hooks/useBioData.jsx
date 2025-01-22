import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBioData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: userBioData = {} } = useQuery({
    queryKey: ["allBioData", user?.email],
    queryFn: async () => {
      if (!user?.email) return {}; // Handle cases where user.email is undefined
      const res = await axiosSecure.get(`/userBioData?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Prevent query from running if email is undefined
  });

  return { userBioData, refetch };
};

export default useBioData;
