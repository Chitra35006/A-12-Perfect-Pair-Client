import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import regAnimation from "../../assets/lotti2.json";
import DynamicButton from "../Buttons/DynamicButton";
import { IoLogoGoogle } from "react-icons/io5";
import "animate.css";
import logo from "../../assets/logo.png";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { MdError } from "react-icons/md";
import SocioLogin from "../SocioLogin/SocioLogin";
import { ArrowRightOutlined } from "@ant-design/icons";
import useTheme from "../../hooks/useTheme";

const SignIn = () => {
  const { signIn } = useAuth();
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message.includes("user-not-found")) {
          setErrorMessage("This email is not registered. Please sign up first.");
        } else if (error.message.includes("wrong-password")) {
          setErrorMessage("The password is incorrect. Please try again.");
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.");
        }
      });
  };

  return (
    <div
      className={`p-10 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-[linear-gradient(25deg,#99f6e4_5%,_white_30%,_white_70%,#d9f99d_100%)]"
      }`}
    >
      <Helmet>
        <title>Perfect Pair | Login</title>
      </Helmet>

      <div>
        <a
          href="/"
          className="flex items-center text-lime-500 hover:text-blue-500 transition-colors duration-300"
        >
          <ArrowRightOutlined className="text-xl md:text-2xl" />
          <span className="ml-1 text-sm md:text-base font-medium">Go Home</span>
        </a>
      </div>

      <div className="text-xl font-bold flex my-4 justify-center items-center">
        <a href="/" className="text-gray-800 flex items-center md:text-2xl text-xl">
          <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />
          <h1
            className={`${
              theme === "dark" ? "text-gray-200" : "text-black"
            } animate__animated animate__bounce my-2`}
          >
            <span className="text-lime-500">P</span>erfect{" "}
            <span className="text-lime-500">P</span>air
          </h1>
        </a>
      </div>

      <div
        className={`grid grid-cols-12 md:flex-col flex-row min-h-screen rounded-xl shadow-md ${
          theme === "dark"
            ? "bg-[linear-gradient(25deg,#3f6212_5%,_#1f2937_30%,_#1f2937_70%,_#065f46_100%)]"
            : "bg-[linear-gradient(25deg,#bef264_5%,_white_30%,_white_70%,#99f6e4_100%)]"
        }`}
      >
        {/* Form Section */}
        <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex flex-col items-center justify-center p-6">
          {/* Form */}
          <div className="flex justify-center items-center">
            <h2 className="text-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">
              Login Now
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            {/* Email */}
            <div className="form-control w-full my-4">
              <TextField
                type="email"
                label={<span className={theme === "dark" ? "text-gray-300" : ""}>Email</span>}
                variant="outlined"
                fullWidth
                {...register("email", { required: true })}
                required
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>

            {/* Password */}
            <div className="form-control w-full my-4">
              <TextField
                type="password"
                label={<span className={theme === "dark" ? "text-gray-300" : ""}>Password</span>}
                variant="outlined"
                fullWidth
                {...register("password", { required: true })}
                required
              />
              {errors.password && <span className="text-red-600">Password is required</span>}
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-600 mt-2 flex items-center">
                <MdError className="text-yellow-400 bg-red-600 rounded-full mr-1" />
                {errorMessage}
              </p>
            )}

            <p className="text-center text-gray-500 font-semibold">
              Don't have an account?{" "}
              <Link className="md:ml-2 hover:text-lime-500 text-indigo-900" to="/signUp">
                Sign Up
              </Link>
            </p>

            <div className="mt-6 flex justify-center items-center gap-4">
              <DynamicButton color="green" text={"SIGN IN"} />
            </div>
          </form>

          {/* Google Button */}
          <SocioLogin />
        </div>

        {/* Lottie React Section */}
        <div className="md:col-span-6 col-span-12 order-1 md:order-2 flex items-center justify-center border-cyan-400 border-dashed border-r-4 md:border-b-0 border-b-4">
          {/* Lottie Animation */}
          <div className="w-2/3 h-2/3 flex items-center justify-center">
            <Lottie animationData={regAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
