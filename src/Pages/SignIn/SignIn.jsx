import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import regAnimation from "../../assets/lotti2.json"
import DynamicButton from "../Buttons/DynamicButton";
import { IoLogoGoogle } from "react-icons/io5";
const SignIn = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="my-10 p-10 bg-[linear-gradient(25deg,#99f6e4_5%,_white_30%,_white_70%,#d9f99d_100%)]">
        <Helmet>
          <title>Perfect Pair | Login</title>
        </Helmet>
        <div className="flex justify-center items-center">
          <h2 className="text-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">Login Now</h2>
        </div>
        <div className="grid grid-cols-12 md:flex-col flex-row min-h-screen bg-[linear-gradient(25deg,#bef264_5%,_white_30%,_white_70%,#99f6e4_100%)] rounded-xl shadow-md">
          
          {/* Form Section */}
          <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex flex-col items-center justify-center p-6">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
              {/* Email */}
              <div className="form-control w-full my-4">
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email", { required: true })}
                  required
                />
              </div>
      
              {/* Password */}
              <div className="form-control w-full my-4">
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  {...register("password", { required: true })}
                  required
                />
              </div>
      
              <p className="text-center text-gray-500 font-semibold">
                Don't have an account? {" "}
                <Link className="md:ml-2" to="/signin">
                  <DynamicButton color="blue" text={"SIGN UP"}></DynamicButton>
                </Link>
              </p>
      
              <div className="mt-6 flex justify-center items-center gap-4">
                <DynamicButton color="green" text={"SIGN IN"}></DynamicButton>
              </div>
            </form>
      
            {/* Google Button */}
            <div className="mt-6 w-full flex justify-center items-center">
  <DynamicButton color="violet">
    <div className="flex flex-row items-center justify-center gap-2">
      <IoLogoGoogle className="text-white text-2xl" />
      <span>SIGN IN WITH GOOGLE</span>
    </div>
  </DynamicButton>
</div>

          </div>
      
          {/* Lottie React Section */}
          <div className="md:col-span-6 col-span-12 order-1 md:order-2 flex items-center justify-center border-cyan-400 border-dashed border-r-4 md:border-b-0 border-b-4">
            {/* Add Lottie Animation or Placeholder */}
            <div className="w-2/3 h-2/3 flex items-center justify-center">
              <Lottie animationData={regAnimation}></Lottie>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default SignIn;