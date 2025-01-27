import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    
        const { user, loading } = useAuth();
        const axiosSecure = useAxiosSecure();
      
        console.log('user:', user);  // Make sure user is populated
      
        const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
          queryKey: [user?.email, 'isAdmin'],
          enabled: !!user?.email && !loading,  // Ensure the query is enabled only if user.email is available
          queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log('Admin response:', res.data);  // Debug the response
            return res.data?.admin;
          }
        });
      
        return [isAdmin, isAdminLoading];
      };
      
  
  
export default useAdmin;