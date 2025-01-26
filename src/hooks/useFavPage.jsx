import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useFavPage = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: allFavData = {} } = useQuery({
        queryKey: ["allFavData", user?.email],
        queryFn: async () => {
          if (!user?.email) return {}; // Handle cases where user.email is undefined
          const res = await axiosSecure.get(`/addFavourite?email=${user.email}`);
          return res.data;
        },
        enabled: !!user?.email, // Prevent query from running if email is undefined
      });
    
      return { allFavData, refetch };
};

export default useFavPage;