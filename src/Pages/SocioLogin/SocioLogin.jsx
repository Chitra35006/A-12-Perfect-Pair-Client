import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';
import DynamicButton from '../Buttons/DynamicButton';

const SocioLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = ()=>{
        console.log("clicked");
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })}
    return (
        <div className="mt-6 w-3/4 flex justify-center items-center">
                    <DynamicButton onClick={handleGoogleSignIn} color="violet">
                      <div className="flex flex-row items-center justify-center gap-2">
                        <IoLogoGoogle className="text-white text-2xl" />
                        <span>SIGN IN WITH GOOGLE</span>
                      </div>
                    </DynamicButton>
                  </div>
            
        
    );
};

export default SocioLogin;