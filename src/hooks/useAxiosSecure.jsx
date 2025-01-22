import React from 'react';

const axiosSecure = axiosSecure({
    baseURL:"http://localhost:5000"
})
const useAxiosSecure = () => {
    return  axiosSecure;
}

export default useAxiosSecure;