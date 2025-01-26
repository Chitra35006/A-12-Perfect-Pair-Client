import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePayments = () => {
    const axiosPublic = useAxiosPublic();
    const {
        data: allPaymentData = [], 
        isLoading, // Corrected from isPending to isLoading
        refetch
    } = useQuery({
        queryKey: ['allPaymentData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payments');
            return res.data;
        }
    });

    return [allPaymentData, isLoading, refetch]; // Return isLoading instead of isPending
};

export default usePayments;
