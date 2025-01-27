import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAdminStats = () => {
    const axiosPublic = useAxiosPublic();
    const {data: allItem =[]} = useQuery({
        queryKey:['allItem'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/admin-stats');
            return res.data
        }
    })
    return[allItem]
};

export default useAdminStats;