import React, { useEffect, useState } from 'react';
import useBioData from '../../../hooks/useBioData';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTheme from '../../../hooks/useTheme';



const EditBioDataPage = () => {
  const{user} = useAuth();
  const {theme} = useTheme();
  const navigate = useNavigate();
  const { userBioData } = useBioData();
  const axiosSecure = useAxiosSecure();
     // Fallback for empty data
     if (!userBioData || userBioData.length === 0) {
       return (
         <div>
           <p>No Bio data Found. Please Add bio Data.</p>
         </div>
       );
     }
 
   
     // Safely destructure the first bio data
     const firstUserBio = userBioData[0] || {};
    // console.log(firstUserBio);
   
     // Set state for each field
  const [name, setName] = useState("");
  const [gender, setGender] = useState( "");
  const [photo, setPhoto] = useState("");
  const [birthDate, setBirthDate] = useState("")
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userAge, setUserAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [permanentDivision, setPermanentDivision] = useState(""
  );
  const [presentDivision, setPresentDivision] = useState(""
  );
  const [partnerAge, setPartnerAge] = useState( "");
  const [partnerHeight, setPartnerHeight] = useState("");
  const [partnerWeight, setPartnerWeight] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState( "");
  useEffect(() => {
    if (firstUserBio) {
      setName(firstUserBio.name || "");
      setGender(firstUserBio.gender || "");
      setPhoto(firstUserBio.photo || "");
      setUserHeight(firstUserBio.userHeight || "");
      setBirthDate(firstUserBio.birthDate || "")
      setUserWeight(firstUserBio.userWeight || "");
      setOccupation(firstUserBio.occupation || "")
      setUserAge(firstUserBio.userAge || "")
      setSkinColor(firstUserBio.skinColor || "");
      setFatherName(firstUserBio.fatherName || "");
      setMotherName(firstUserBio.motherName || "");
      setPermanentDivision(firstUserBio.permanentDivision || "")
      setPresentDivision(firstUserBio.presentDivision || "")
      setPartnerAge(firstUserBio.partnerAge || "")
      setPartnerWeight(firstUserBio.partnerWeight || "")
      setPartnerHeight(firstUserBio.partnerHeight || "")
      setEmail(firstUserBio.email || "")
      setPhone(firstUserBio.phone || "")
   
    }
  }, [firstUserBio]);
  // console.log(birthDate);
  // console.log(birthDate);
  // console.log(typeof(birthDate));
    const handleUpdateData =async (e)=>{
      e.preventDefault();
      const bioDataList={
        name,
        gender,
        photo,
        birthDate,
        userHeight,
        userWeight,
        userAge,
        occupation,
        skinColor,
        fatherName,motherName,permanentDivision,presentDivision,partnerAge,partnerHeight,partnerWeight,
        email,
        phone
      }
     
      
      try {
        const bioDataRes = await axiosSecure.patch(`/updateBio/${firstUserBio._id}`, bioDataList);
      
        if (bioDataRes.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${bioDataList.name} Biodata is updated.`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/viewBio');
        } else {
          Swal.fire({
            icon: "warning",
            title: "No changes were made.",
            text: "Try modifying the data before updating.",
          });
        }
      } catch (error) {
        console.error('Error updating biodata:', error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong. Please try again.",
        });
      }
      
    }

  return (
   <div>
    <Helmet><title>Perfect Pair || Edit Bio Data</title></Helmet>
     <div className={`bg-fixed min-h-screen ${theme === "dark"? "[linear-gradient(25deg,#3f6212_5%,_#1f2937_30%,_#1f2937_70%,_#065f46_100%)]":"bg-[linear-gradient(15deg,#99f6e4_25%,_white_20%,_white_40%,#f0fdf4_100%)]"}`}>
    <div className={`${theme === "dark"?"bg-[linear-gradient(25deg,#3f6212_5%,_#1f2937_30%,_#1f2937_70%,_#065f46_100%)]":"bg-[linear-gradient(25deg,#99f6e4_5%,_white_40%,_white_40%,#bef264_100%)]"} mx-4 mt-8 p-8 shadow-xl rounded-lg`}>
      
       
       
      <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">Edit Bio Data</h1>
      <form onSubmit={handleUpdateData}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* <<<<Biodata Type>>>[1] */}
                 <div className="form-group mb-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Select Biodata Type
                  </label>
                  <select
                    // id="campaign"
                   value={gender}
                    onChange={(e)=> setGender(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled>
                  Select Biodata Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                  </select>
                </div>
                 {/* <<<Name>>>[2] */}
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Name
                  </label>
                  <input
                 value={name}
                  onChange={(e)=>setName(e.target.value)}
                    type="text"
                    required
                    id="name"
                    placeholder="Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                 {/* <<<<Photo URL>>>>[3] */}
                <div className="form-group">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    PhotoURL
                  </label>
                  <input
                 value={photo}
                  onChange={(e)=>setPhoto(e.target.value)}
                    type="text"
                    required
                    id="photo"
                    placeholder="PhotoURL link"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
               
                </div>
                    {/* date[4] */}
                    <div className="form-group">
        <label
          htmlFor="birthDate"
          className="block text-sm font-semibold text-lime-500"
        >
          Your Birth Date
        </label>
        <DatePicker
  selected={birthDate}
  onChange={(date) => {
    if (date) {
      const timestamp = date.getTime(); // Convert selected date to timestamp
      setBirthDate(timestamp); // Save as timestamp
    } else {
      setBirthDate(null); // Handle invalid or empty date
    }
  }}
  dateFormat="yyyy-MM-dd"
  className="w-full px-4 py-2 border border-gray-300 rounded-md"
  placeholderText="Choose a date"
/>

      </div>
                {/* User Height[5] */}
                <div className="form-group">
                  <label
                    htmlFor="userHeight"
                    className="block text-sm font-bold  text-teal-500"
                  >
                    Your Height
                  </label>
                  <select
                    // id="campaign"
                   value={userHeight}
                    onChange={(e)=> setUserHeight(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                
               
                {/* User Weight Input[6] */}
                <div className="form-group">
                  <label
                    htmlFor="userWeight"
                    className="block text-sm font-bold text-teal-500"
                  >
                    Your Weight
                  </label>
                  <select
                    // id="campaign"
                   value={userWeight}
                    onChange={(e)=> setUserWeight(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                {/* <<<<<Your Age>>>>>[7] */}
                <div className="form-group">
                  <label
                    htmlFor="userAge"
                    className="block text-sm font-semibold text-teal-500"
                  >
                    Your Age
                  </label>
                  <input
                 value={userAge}
                  onChange={(e)=>setUserAge(e.target.value)}
                    type="number"
                    required
                    id="age"
                    placeholder="Enter Your Age"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div> 
        {/* <<<<Occupation>>>>[8] */}
        <div className="form-group">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-bold text-teal-500"
                  >
                    Your Occupation
                  </label>
                  <select
                    // id="campaign"
                   value={occupation}
                    onChange={(e)=> setOccupation(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                {/* <<<<Skin Color>>>> [9]*/}
                <div className="form-group">
                  <label
                    htmlFor="skinColor"
                    className="block text-sm font-bold text-lime-500"
                  >
                    Your Skin Color
                  </label>
                  <select
                    // id="campaign"
                   value={skinColor}
                    onChange={(e)=> setSkinColor(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                {/* <<<<Father's Name>>>>[10] */}
                <div className="form-group">
                  <label
                    htmlFor="motherName"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Mother Name
                  </label>
                  <input
                 value={motherName}
                  onChange={(e)=>setMotherName(e.target.value)}
                    type="text"
                    required
                    id="motherName"
                    placeholder="Mother Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* <<<<Mother's Name>>>>>[11] */}
                <div className="form-group">
                  <label
                    htmlFor="fatherName"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Father Name
                  </label>
                  <input
                 value={fatherName}
                  onChange={(e)=>setFatherName(e.target.value)}
                    type="text"
                    required
                    id="fatherName"
                    placeholder="Father Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* <<<<<Permanent Division>>>>>[12] */}
                <div className="form-group">
                  <label
                    htmlFor="permanentDivision"
                    className="block text-sm font-bold text-lime-500"
                  >
                    Permanent Division
                  </label>
                  <select
                    // id="campaign"
                   value={permanentDivision}
                    onChange={(e)=> setPermanentDivision(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  
                </div>
                {/* <<<<<Present Division>>>>>[13] */}
                <div className="form-group">
                  <label
                    htmlFor="presentDivision"
                    className="block text-sm font-bold text-teal-500"
                  >
                    Present Division
                  </label>
                  <select
                    // id="campaign"
                   value={presentDivision}
                    onChange={(e)=> setPresentDivision(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  
                </div>
                 {/* Partner Height[14] */}
                 <div className="form-group">
                  <label
                    htmlFor="userWeight"
                    className="block text-sm font-bold text-teal-500"
                  >
                    Expected Partner Weight
                  </label>
                  <select
                    // id="campaign"
                   value={partnerWeight}
                    onChange={(e)=> setPartnerWeight(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                
               
                {/* Partner Height Input[15] */}
                <div className="form-group">
                  <label
                    htmlFor="partnerHeight"
                    className="block text-sm font-bold text-teal-500"
                  >
                  Expected Partner Height
                  </label>
                  <select
                    // id="campaign"
                   value={partnerHeight}
                    onChange={(e)=> setPartnerHeight(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                </div>
                {/* <<<<<Your Age>>>>>[16] */}
                <div className="form-group">
                  <label
                    htmlFor="partnerAge"
                    className="block text-sm font-semibold text-teal-500"
                  >
                    Partner Age
                  </label>
                  <input
                 value={partnerAge}
                  onChange={(e)=>setPartnerAge(e.target.value)}
                    type="number"
                    required
                    id="age"
                    placeholder="Enter Partner Age"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div> 
                {/* <<<<<Your Email>>>>>[17] */}
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Your Email
                  </label>
                  <input
                 value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    readOnly
                    id="age"
                    placeholder="Enter Your Email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div> 
                {/* <<<<<Your Phone>>>>>[16] */}
                <div className="form-group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-lime-500"
                  >
                    Your Phone Number
                  </label>
                  <input
                 value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                    type="tel"
                    required
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div> 
              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className={` px-6 py-3 font-semibold rounded-md  text-white transition ${theme ==="dark"?"hover:bg-lime-500 bg-teal-600":"hover:bg-indigo-900 bg-indigo-500"}`}
                >
                  Update
                </button>
                </div>
            </div>
            </form>
     
    </div>

    
  </div>
   </div>
  );
};

export default EditBioDataPage;