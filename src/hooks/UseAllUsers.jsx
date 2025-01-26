import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAllUsers = () => {
  const { user } = useAuth();  // Assuming useAuth is managing authentication state
  const axiosSecure = useAxiosSecure();  // Secure axios instance

  const { refetch, data: userInfo = {}, isLoading, isError } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) return {}; // If no email, return empty object
      const res = await axiosSecure.get(`/usersEmail?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only fetch data if user email exists
  });

  // Handle loading and error states
  if (isLoading) {
    return { userInfo: null, refetch, isLoading: true, isError: false };  // You can show loading UI here
  }

  if (isError) {
    return { userInfo: null, refetch, isLoading: false, isError: true };  // Handle error state
  }

  return { userInfo, refetch, isLoading: false, isError: false };  // Returning user data when loaded
};

export default UseAllUsers;
