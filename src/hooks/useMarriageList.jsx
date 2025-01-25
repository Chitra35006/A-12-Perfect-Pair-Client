import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMarriageList = () => {
    const axiosPublic = useAxiosPublic();
    const{data: allMrStatus =[],isPending:Loading,refetch}=useQuery({
        queryKey:['addMarriagePost'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/addMarriagePost');
            return res.data
        }
    })
    return[allMrStatus,Loading.refetch]
   
};

export default useMarriageList;