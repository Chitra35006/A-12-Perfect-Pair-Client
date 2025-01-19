import { TextField } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import regAnimation from "../../assets/lottie.json"
import DynamicButton from "../Buttons/DynamicButton";

const SignUp = () => {
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
        <title>Perfect Pair | Register</title>
      </Helmet>
      <div className="flex justify-center items-center"><h2 className="text-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">Register Now</h2></div>
      <div className="grid grid-cols-12 md:flex-col flex-row min-h-screen bg-[linear-gradient(25deg,#bef264_5%,_white_30%,_white_70%,#99f6e4_100%)] rounded-xl shadow-md">
        
  {/* Form Section */}
  <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex  items-center justify-center p-6">
    {/* Form */}
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      {/* Name */}
      <div className="form-control w-full my-4">
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          fullWidth
          {...register("name", { required: true })}
          required
        />
      </div>

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

      {/* Photo */}
      <div className="form-control w-full my-4">
        <TextField
          type="text"
          label="Photo"
          variant="outlined"
          fullWidth
          {...register("photo", { required: true })}
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
        Already Registered? Go to{" "}
        <Link className="md:ml-2"  to="/login">
        <DynamicButton color="blue" text={"LOGIN"}></DynamicButton>
        </Link>
      </p>

      <div className="mt-6 flex justify-center items-center gap-4">
        <DynamicButton color="green" text={"SIGN UP"}></DynamicButton>
        
      </div>
    </form>
  </div>

  {/* Lottie React Section */}
  <div className="md:col-span-6 col-span-12 order-1 md:order-2 flex items-center justify-center border-cyan-400 border-dashed border-r-4 md:border-b-0 border-b-4">
    {/* Add Lottie Animation or Placeholder */}
    <div className="w-2/3 h-2/3  flex items-center justify-center">
      <Lottie animationData={regAnimation}></Lottie>
    </div>
  </div>
</div>

    </div>
  );
};
{
  /* <FaUtensils className="ml-4"></FaUtensils> */
}
export default SignUp;
