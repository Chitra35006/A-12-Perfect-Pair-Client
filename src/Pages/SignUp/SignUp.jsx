import { TextField, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { Link, useNavigation } from "react-router-dom";
import Lottie from "lottie-react";
import regAnimation from "../../assets/lottie.json";
import DynamicButton from "../Buttons/DynamicButton";
import "animate.css";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const SignUp = () => {
  const{createUser,updateUserProfile} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 const navigate = useNavigation();
  //handleSubmit
 
  const { theme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const logggedUser = result.user;
      console.log(logggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        console.log('User profile info updated');
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully.',
          showConfirmButton: false,
          timer: 1500
      });
      navigate('/');
      
    })
    .then(error => console.log(error))
      })
      
    .catch((error) => {
      console.error(error);
      if (error.message.includes("email-already-in-use")) {
        setErrorMessage("The email address is already in use.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    });
  };
  return (
    <div className="p-10 bg-[linear-gradient(25deg,#99f6e4_5%,_white_30%,_white_70%,#d9f99d_100%)]">
      <Helmet>
        <title>Perfect Pair | Register</title>
      </Helmet>
      <div className="text-xl font-bold flex my-4 justify-center items-center">
        <a
          href="/"
          className="text-gray-800 flex items-center md:text-2xl text-xl"
        >
          <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />{" "}
          <h1
            className={`${
              theme === "dark" ? "text-gray-200" : "text-black"
            } animate__animated animate__bounce my-2`}
            style={{
              animationIterationCount: 2, // Run the animation only once
            }}
          >
            <span className="text-lime-500">P</span>erfect{" "}
            <span className="text-lime-500">P</span>air
          </h1>
        </a>
      </div>
      <div className="grid grid-cols-12 md:flex-col flex-row min-h-screen bg-[linear-gradient(25deg,#bef264_5%,_white_30%,_white_70%,#99f6e4_100%)] rounded-xl shadow-md">
        {/* Form Section */}
        <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex  items-center justify-center p-6 relative">
          {/* Form */}
          <div className="flex  absolute top-4 md:top-5  justify-center items-center">
            <h2 className="text-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">
              Register Now
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md md:my-0 my-8"
          >
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
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
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
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
             {/* Error Message */}
             {errorMessage && (
              <p className="text-red-600 mt-2 flex items-center">
                <MdError className="text-yellow-400 bg-red-600 rounded-full mr-1" />
                {errorMessage}
              </p>
            )}

            {/* Photo */}
            <div className="form-control w-full my-4">
              <TextField
                type="text"
                label="Photo"
                variant="outlined"
                fullWidth
                {...register("photoURL", { required: true })}
                required
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            {/* Password */}
            <div className="form-control w-full my-4">
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-1 flex items-center"><MdError className="text-yellow-400 bg-red-600 rounded-full" />Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-1 flex items-center"><MdError className="text-red-600 w-8 h-8  rounded-full" />Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 mt-1 flex items-center"><MdError className="text-red-600 w-8 h-8  rounded-full" />
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 mt-1 flex items-center"><MdError className="text-red-600 w-8 h-8  rounded-full" />
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>

            <p className="text-center text-gray-500 font-semibold">
              Already Registered? Go to{" "}
              <Link className="md:ml-2" to="/login">
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
