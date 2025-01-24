import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { DatePicker, ConfigProvider } from "antd";
import "antd/dist/reset.css";
import locale from "antd/es/locale/en_US";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const AddEditBioData = () => {
    const{user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);

    
    
      const bioDataList={
        gender:data.gender,
        name:data.name,
        photo:data.photo,
        birthDate:data.date,
        userHeight:data.userHeight,
        userWeight:data.userWeight,
        userAge:data.userAge,
        occupation:data.occupation,
        skinColor:data.skinColor,
        fatherName:data.fatherName,
        motherName:data.motherName,
        permanentDivision:data.permanentDivision,
        presentDivision:data.presentDivision,
        partnerAge:data.partnerAge,
        partnerHeight:data.partnerHeight,
        partnerWeight:data.partnerWeight,
        email:data.email,
        phone:data.phone
  
       }
       const bioDataRes = await axiosPublic.post('/allBioData',bioDataList);
       console.log(bioDataRes.data);
       if(bioDataRes.data.insertedId){
        // show success popup
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} Your BioData Created Successfully.`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/viewBio');
    }
    
  };

 

  return (
    <div className="bg-fixed min-h-screen bg-[linear-gradient(15deg,#99f6e4_25%,_white_20%,_white_40%,#f0fdf4_100%)]">
      <div className="bg-[linear-gradient(25deg,#99f6e4_5%,_white_40%,_white_40%,#bef264_100%)] mx-4 mt-8 p-8 shadow-xl rounded-lg">
        
         
         
        <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">Add Bio Data</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl space-y-6"
        >
          <div className="grid grid-cols-12 gap-4">
            {/* <<<<Biodata Type>>>[1] */}
            <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
              <label className="mb-1 text-green-700 font-semibold text-base">
                Biodata Type
              </label>
              <select
                {...register("gender", {
                  required: "Biodata Type is required",
                })}
                className="px-4 py-2 border rounded-md w-full"
                defaultValue="" // Set the default value to "" to show the placeholder
              >
                <option value="" disabled>
                  Select Biodata Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* <<<Name>>>[2] */}
            <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
              <label className="mb-1 text-green-700 font-semibold text-base">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={user?.displayName || ""} 
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* <<<<Photo URL>>>>[3] */}
            <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
              <label className="mb-1 text-teal-500 font-semibold text-base">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photo", { required: "Photo URL is required" })}
                className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter photo URL"
                value={user?.photoURL || ""} 
              />
              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* <<<<<Date Picker>>>>[4> */}
            <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
              <label className="mb-1 text-teal-500 font-semibold text-base">
                Date of Birth
              </label>
              <ConfigProvider locale={locale}>
                <DatePicker
                  {...register("date", {
                    required: "Date of Birth is required",
                  })} // Explicit registration
                  onChange={(date, dateString) => {
                    setValue("date", dateString, { shouldValidate: true });
                  }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Choose a date"
                />
              </ConfigProvider>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>
            {/* <<<<<Your Height>>>>[5] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Your Height
  </label>
  <select
    {...register("userHeight", { required: "Height is required" })}
    className="px-4 py-2 border rounded-md w-full"
    defaultValue="" // Set the default value to "" to show the placeholder
  >
   <option value="" disabled>
    Select Height
  </option>
  <option value="Below 5'0">Below 5'0"</option>
  <option value="5'0 - 5'3'">5'0" - 5'3"</option>
  <option value="5'4 - 5'6'">5'4" - 5'6"</option>
  <option value="5'7 - 5'9'">5'7" - 5'9"</option>
  <option value="Above 6'0">Above 6'0"</option>
</select>
  {errors.userHeight && (
    <p className="text-red-500 text-sm mt-1">
      {errors.userHeight.message}
    </p>
  )}
</div>
           {/*<<<< Your Weight>>>>>[6] */}
           <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Your Weight
  </label>
  <select
  {...register("userWeight", { required: "Your Weight is required" })}
  className="px-4 py-2 border rounded-md w-full"
  defaultValue="" // Set the default value to "" to show the placeholder
>
  <option value="" disabled>
    Select Weight
  </option>
  <option value="Below 40 kg">Below 40 kg</option>
  <option value="40 kg - 49 kg">40 kg - 49 kg</option>
  <option value="50 kg - 59 kg">50 kg - 59 kg</option>
  <option value="60 kg - 69 kg">60 kg - 69 kg</option>
  <option value="70 kg - 79 kg">70 kg - 79 kg</option>
  <option value="80 kg - 89 kg">80 kg - 89 kg</option>
  <option value="90 kg - 99 kg">90 kg - 99 kg</option>
  <option value="Above 100 kg">Above 100 kg</option>
</select>

  {errors.userWeight && (
    <p className="text-red-500 text-sm mt-1">
      {errors.userWeight.message}
    </p>
  )}
</div>

            {/* <<<<<Your Age>>>>>[7] */}
          <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
            <label className="mb-1 text-teal-500 font-semibold text-base">
              Your Age
            </label>
            <input
              type="number"
              {...register("userAge", {
                required: "Your Age is required",
                validate: {
                  positiveNumber: (value) =>
                    value > 0 || "The number must be greater than 0", // Custom validation
                },
              })}
              className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Age"
            />
            {errors.userAge && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userAge.message}
              </p>
            )}
          </div>

          {/* <<<<Occupation>>>>[8] */}
          <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
            <label className="mb-1 text-teal-500 font-semibold text-base">
              Your Occupation
            </label>
            <select
              {...register("occupation", {
                required: "Occupation  required",
              })}
              className="px-4 py-2 border rounded-md w-full"
              defaultValue="" // Set the default value to "" to show the placeholder
            >
              <option value="" disabled>
                Select Occupation
              </option>
              <option value="Student">Student</option>
              <option value="Job Holder">Job Holder</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Businessperson">Businessperson</option>
              <option value="Homemaker">Homemaker / Housewife</option>
              <option value="Retired">Retired</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Government Employee">Government Employee</option>
              <option value="Private Sector Employee">
                Private Sector Employee
              </option>
              <option value="Defense Personnel">
                Defense Personnel (Army/Navy/Air Force)
              </option>
              <option value="Medical Professional">Medical Professional</option>
              <option value="Teacher">Teacher / Professor</option>
              <option value="Other">Other</option>
            </select>
            {errors.occupation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.occupation.message}
              </p>
            )}
          </div>
             {/* <<<<Skin Color>>>> [9]*/}
          <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Race
  </label>
  <select
    {...register("skinColor", { required: "Skin color is required" })}
    className="px-4 py-2 border rounded-md w-full"
    defaultValue="" // Set the default value to "" to show the placeholder
  >
    <option value="" disabled>
      Select Skin Color
    </option>
    <option value="Fair">Fair</option>
    <option value="Medium">Medium</option>
    <option value="Olive">Olive</option>
    <option value="Dark">Dark</option>
    <option value="Wheatish">Wheatish</option>
    <option value="Very Fair">Very Fair</option>
    <option value="Brown">Brown</option>
    <option value="Dusky">Dusky</option>
  </select>
  {errors.skinColor && (
    <p className="text-red-500 text-sm mt-1">
      {errors.skinColor.message}
    </p>
  )}
</div>
{/* <<<<Father's Name>>>>[10] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Father's Name
  </label>
  <input
    type="text"
    {...register("fatherName", { required: "Father's Name is required" })}
    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter father's name"
  />
  {errors.fatherName && (
    <p className="text-red-500 text-sm mt-1">
      {errors.fatherName.message}
    </p>
  )}
</div>

{/* <<<<Mother's Name>>>>>[11] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-teal-500 font-semibold text-base">
    Mother's Name
  </label>
  <input
    type="text"
    {...register("motherName", { required: "Mother's Name is required" })}
    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter mother's name"
  />
  {errors.motherName && (
    <p className="text-red-500 text-sm mt-1">
      {errors.motherName.message}
    </p>
  )}
</div>
{/* <<<<<Permanent Division>>>>>[12] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-teal-500 font-semibold text-base">
    Permanent Division
  </label>
  <select
    {...register("permanentDivision", { required: "Permanent Division is required" })}
    className="px-4 py-2 border rounded-md w-full"
    defaultValue="" // Set the default value to "" to show the placeholder
  >
    <option value="" disabled>
      Select Permanent Division
    </option>
    <option value="Dhaka">Dhaka</option>
    <option value="Chittagong">Chittagong</option>
    <option value="Rangpur">Rangpur</option>
    <option value="Barishal">Barishal</option>
    <option value="Khulna">Khulna</option>
    <option value="Mymensingh">Mymensingh</option>
    <option value="Sylhet">Sylhet</option>
  </select>
  {errors.permanentDivision && (
    <p className="text-red-500 text-sm mt-1">
      {errors.permanentDivision.message}
    </p>
  )}
</div>
{/* <<<<<Present Division>>>>>[13] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Present Division
  </label>
  <select
    {...register("presentDivision", { required: "Present Division is required" })}
    className="px-4 py-2 border rounded-md w-full"
    defaultValue="" // Set the default value to "" to show the placeholder
  >
    <option value="" disabled>
      Select Present Division
    </option>
    <option value="Dhaka">Dhaka</option>
    <option value="Chittagong">Chittagong</option>
    <option value="Rangpur">Rangpur</option>
    <option value="Barishal">Barishal</option>
    <option value="Khulna">Khulna</option>
    <option value="Mymensingh">Mymensingh</option>
    <option value="Sylhet">Sylhet</option>
  </select>
  {errors.presentDivision && (
    <p className="text-red-500 text-sm mt-1">
      {errors.presentDivision.message}
    </p>
  )}
</div>
 {/* <<<<<Partner Expected Age>>>>>[14] */}
 <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
            <label className="mb-1 text-green-700 font-semibold text-base">
              Expected Partner Age
            </label>
            <input
              type="number"
              {...register("partnerAge", {
                required: "Age is required",
                validate: {
                  positiveNumber: (value) =>
                    value > 0 || "The number must be greater than 0", // Custom validation
                },
              })}
              className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Partner Age"
            />
            {errors.partnerAge && (
              <p className="text-red-500 text-sm mt-1">
                {errors.partnerAge.message}
              </p>
            )}
          </div>
            {/*<<<<< Partner Height>>>>>[15] */}
            <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-teal-500 font-semibold text-base">
    Expected Partner Height
  </label>
  <select
    {...register("partnerHeight", { required: "Height is required" })}
    className="px-4 py-2 border rounded-md w-full"
    defaultValue="" // Set the default value to "" to show the placeholder
  >
   <option value="" disabled>
    Select Height
  </option>
  <option value="Below 5'0">Below 5'0"</option>
  <option value="5'0 - 5'3'">5'0" - 5'3"</option>
  <option value="5'4 - 5'6'">5'4" - 5'6"</option>
  <option value="5'7 - 5'9'">5'7" - 5'9"</option>
  <option value="Above 6'0">Above 6'0"</option>
</select>
  {errors.partnerHeight && (
    <p className="text-red-500 text-sm mt-1">
      {errors.partnerHeight.message}
    </p>
  )}
</div>
           {/*<<<<< Expected Weight>>>>[16] */}
           <div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-teal-500 font-semibold text-base">
    Expected partner Weight
  </label>
  <select
  {...register("partnerWeight", { required: "Weight is required" })}
  className="px-4 py-2 border rounded-md w-full"
  defaultValue="" // Set the default value to "" to show the placeholder
>
  <option value="" disabled>
    Select Weight
  </option>
  <option value="Below 40 kg">Below 40 kg</option>
  <option value="40 kg - 49 kg">40 kg - 49 kg</option>
  <option value="50 kg - 59 kg">50 kg - 59 kg</option>
  <option value="60 kg - 69 kg">60 kg - 69 kg</option>
  <option value="70 kg - 79 kg">70 kg - 79 kg</option>
  <option value="80 kg - 89 kg">80 kg - 89 kg</option>
  <option value="90 kg - 99 kg">90 kg - 99 kg</option>
  <option value="Above 100 kg">Above 100 kg</option>
</select>

  {errors.partnerWeight && (
    <p className="text-red-500 text-sm mt-1">
      {errors.partnerWeight.message}
    </p>
  )}
</div>
{/* <<<<<Email>>>>>[17] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Your Email
  </label>
  <input
    type="email"
    {...register("email", { required: "Email is required" })}
    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your email"
    value={user?.email || ""} // Pre-populate with user email if available
    readOnly // Makes the input field read-only
  />
  {errors.email && (
    <p className="text-red-500 text-sm mt-1">
      {errors.email.message}
    </p>
  )}
</div>
{/*<<<<< Phone Number>>>>[18] */}
<div className="col-span-12 md:col-span-6 my-2 flex flex-col">
  <label className="mb-1 text-green-700 font-semibold text-base">
    Your Phone Number
  </label>
  <input
    type="tel"
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^\+8801[0-9]{9}$/, // Ensures the phone number starts with +880 and is followed by 8 digits
        message: "Please enter a valid phone number starting with +880 and having 11 digits",
      },
    })}
    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your phone number"
  />
  {errors.phone && (
    <p className="text-red-500 text-sm mt-1">
      {errors.phone.message}
    </p>
  )}
</div>


          </div>

          

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button className="text white  hover:text-lime-300 bg-gradient-to-r from-indigo-900 via-indigo-900 to-indigo-900" type="submit" variant="contained" color="primary">
              Save And Publish
            </Button>
          </div>
        </form>
       
      </div>

      
    </div>
  );
};

export default AddEditBioData;
