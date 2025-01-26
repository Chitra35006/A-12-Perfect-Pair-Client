import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useReqContact = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: allReqContact = {} } = useQuery({
        queryKey: ["allReqContact", user?.email],
        queryFn: async () => {
          if (!user?.email) return {}; // Handle cases where user.email is undefined
          const res = await axiosSecure.get(`/contactRequest?email=${user.email}`);
          return res.data;
        },
        enabled: !!user?.email, // Prevent query from running if email is undefined
      });
    
      return { allReqContact, refetch };
};

export default useReqContact;