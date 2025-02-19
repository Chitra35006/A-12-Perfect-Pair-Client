import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import regAnimation from "../../assets/lottie.json";
import DynamicButton from "../Buttons/DynamicButton";
import "animate.css";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ArrowRightOutlined } from "@ant-design/icons";
import useTheme from "../../hooks/useTheme";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const { theme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
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
    <div
      className={`p-10 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-[linear-gradient(25deg,#99f6e4_5%,_white_30%,_white_70%,#d9f99d_100%)]"
      }`}
    >
      <Helmet>
        <title>Perfect Pair | Register</title>
      </Helmet>
      <div className="text-xl font-bold flex my-4 justify-center items-center">
        <a href="/" className="text-gray-800 flex items-center md:text-2xl text-xl">
          <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />{" "}
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
        <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex items-center justify-center p-6 relative">
          <div className="flex absolute top-4 md:top-5 justify-between items-center w-full px-4">
            {/* Arrow Link Section */}
            <a
              href="/"
              className="flex items-center text-lime-500 hover:text-blue-500 transition-colors duration-300"
            >
              <ArrowRightOutlined className="text-xl md:text-2xl" />
              <span className="ml-1 text-sm md:text-base font-medium">Go Home</span>
            </a>

            {/* Heading Section */}
            <h2 className="font-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">
              Register Now
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:my-0 my-8">
            {/* Name */}
            <div className="form-control w-full my-4">
  <TextField
    type="text"
    label={<span className={theme === "dark" ? "text-gray-300" : ""}>Name</span>}
    variant="outlined"
    fullWidth
    {...register("name", { required: "Name is required" })}
    required
  />
  {errors.name && <span className="text-red-600">{errors.name.message}</span>}
</div>


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

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-600 mt-2 flex items-center">
                <MdError className="text-yellow-400 bg-red-600 rounded-full mr-1" />
                {errorMessage}
              </p>
            )}

            {/* Password */}
            <div className="form-control w-full my-4">
              <TextField
                type="password"
                label={<span className={theme === "dark" ? "text-gray-300" : ""}>Password</span>}
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
            </div>

            {/* Already Registered Section */}
            <p className={`text-center font-semibold ${theme === "dark" ? "text-lime-300" : "text-gray-500"}`}>
              Already Registered? Go to{" "}
              <Link className="md:ml-2 hover:text-lime-500 text-indigo-900" to="/login">
                Login
              </Link>
            </p>

            <div className="mt-6 flex justify-center items-center gap-4">
              <DynamicButton color="green" text={"SIGN UP"}></DynamicButton>
            </div>
          </form>
        </div>

        {/* Lottie React Section */}
        <div className="md:col-span-6 col-span-12 order-1 md:order-2 flex items-center justify-center border-cyan-400 border-dashed border-r-4 md:border-b-0 border-b-4">
          <div className="w-2/3 h-2/3 flex items-center justify-center">
            <Lottie animationData={regAnimation}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
