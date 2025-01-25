import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DynamicButton from "../../Buttons/DynamicButton";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useBioData from "../../../hooks/useBioData";
import { FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const GotMarriedRoute = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { userBioData } = useBioData();
    const firstUserBio = userBioData[0] || {};
    const [rating, setRating] = useState(0);
    
  const {
    register,
    handleSubmit,setValue,control,reset,
    formState: { errors },
  } = useForm();
  const handleRating = (value) => {
    setRating(value); // Update the local state
    setValue("rating", value, { shouldValidate: true }); // Update react-hook-form state
  };
  
 
  const onSubmit = async(data) => {
    console.log(data);

    const gotMarriedList={
        selfId:data.selfBioId,
        partnerId:data.partnerBioId,
        photo:data.photo,
        description:data.description,
        mDate:data.date,
        rating:data.rating

    }
    console.log(gotMarriedList);
    const marriageRes = await axiosPublic.post('/addMarriagePost',gotMarriedList);
    console.log(marriageRes.data);
    if(marriageRes.data.insertedId){
        reset();
        Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Marital Status Created Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');

    }
  };

  return (
    <div>
      <Helmet>
        <title>Perfect Pair || Got Married Route</title>
      </Helmet>
      <div className="my-10 p-10 bg-[linear-gradient(25deg,#99f6e4_5%,_white_30%,_white_70%,#d9f99d_100%)]">
        <div className="flex justify-center items-center">
          <h2 className="text-bold md:text-2xl text-lime-600 p-1 border-y-2 border-blue-300 px-2">
            Share Feelings to Us
          </h2>
        </div>
        <div className="grid grid-cols-12 md:flex-col flex-row min-h-screen bg-[linear-gradient(25deg,#bef264_5%,_white_30%,_white_70%,#99f6e4_100%)] rounded-xl shadow-md">
          {/* Form Section */}
          <div className="md:col-span-6 col-span-12 order-2 md:order-1 border-lime-400 border-dashed border-l-4 flex items-center justify-center p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  max-w-md">
              {/* Self Biodata Id*/}
              <div className="form-control w-full my-4">
                <TextField
                value={firstUserBio.id||""}
                  type="number"
                  label="Self Biodata Id"
                  variant="outlined"
                  fullWidth
                  {...register("selfBioId")}

                />
               
              </div>
               {/* Partnner Biodata Id*/}
              <div className="form-control w-full my-4">
                <TextField
                  type="number"
                  label="Partner Biodata Id"
                  variant="outlined"
                  fullWidth
                  {...register("partnerBioId", { required: "Partner Biodata Id is required" ,
                    validate: {
                        positiveNumber: (value) =>
                          value > 0 || "The number must be greater than 0", // Custom validation
                      },
                  })}
                />
                 {errors.partnerBioId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userAge.message}
              </p>
            )}
              </div>

              {/* Photo */}
              <div className="form-control w-full my-4">
                <TextField
                  type="text"
                  label="Photo"
                  variant="outlined"
                  fullWidth
                  {...register("photo", { required:"Photo is Required" })}
                />
              </div>
               {/* Marriage Date*/}
               <div className="form-group my-4">
  <label
    htmlFor="date"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Marriage Date
  </label>
  <Controller
    name="date"
    control={control}
    defaultValue={null}
    rules={{ required: "Marriage Date is required" }}
    render={({ field }) => (
      <DatePicker
        placeholderText="Select a date"
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        dateFormat="yyyy-MM-dd"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
  />
  {errors.date && (
    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
  )}
</div>


      {/* Star Rating */}
      <div className="form-control w-full my-4">
  <label className="block mb-2 text-sm font-medium text-gray-700">Rate Us</label>
  <Controller
    name="rating"
    control={control}
    defaultValue={0}
    rules={{ required: "Rating is required" }}
    render={({ field }) => (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            onClick={() => {
              field.onChange(star); // Updates the rating value in the form
              setRating(star); // Updates the local rating state for visual feedback
            }}
            className={`cursor-pointer ${
              star <= field.value ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    )}
  />
  {errors.rating && (
    <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
  )}
</div>

                {/* Text Area */}
              <div className="form-control w-full my-4">
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4} // Adjust the number of rows as needed
                  {...register("description", { required: "Description is required"})}
                />
              </div>

              <div className="mt-6 flex justify-center items-center gap-4">
                <DynamicButton color="green" text="Submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotMarriedRoute;
