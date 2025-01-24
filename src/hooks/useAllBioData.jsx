import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllBioData = () => {
    const axiosPublic = useAxiosPublic();
    const {data: allBioData =[], isPending: Loading, refetch} = useQuery({
        queryKey:['allBioData'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allBioData');
            return res.data
        }
    })
    return[allBioData,Loading,refetch]
};

export default useAllBioData;