import React, { useState } from 'react';
import useBioData from '../../../hooks/useBioData';
import { Avatar } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Button } from "@mui/material";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const ViewBioData = () => {
  const { userBioData } = useBioData();
  const axiosSecure = useAxiosSecure();

  const [requestStatus, setRequestStatus] = useState(""); // To track request status
  const [isProcessing, setIsProcessing] = useState(false);

  // Fallback for empty data
  if (!userBioData || userBioData.length === 0) {
    return (
      <div className='flex justify-center items-center my-20'>
        <p className='text-indigo-800 font-semibold'>No Bio data Found. Please Add bio Data.</p>
      </div>
    );
  }

  // Safely destructure the first bio data
  const firstUserBio = userBioData[0] || {};
  const {
    gender,
    name,
    photo,
    birthDate,
    userHeight,
    userWeight,
    userAge,
    occupation,
    skinColor,
    fatherName,
    motherName,
    permanentDivision,
    presentDivision,
    partnerAge,
    partnerHeight,
    partnerWeight,
    email,
    phone,
  } = firstUserBio;
  // console.log(firstUserBio);

  

  const handleToPremium = async (userEmail, userName) => {
    setIsProcessing(true);
    setRequestStatus("isPending");
  
    if (userEmail && firstUserBio.role !== "premium") {
      // Show confirmation modal
      const result = await Swal.fire({
        title: `Are you sure ${userName}  to make you  a PREMIUM user?`, // Display user's name in the confirmation
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, make me Premium!",
        cancelButtonText: "No, cancel",
      });
  
      // If the user clicks "Yes", proceed with the request
      if (result.isConfirmed) {
        const data = {
          name: userName,
          email: userEmail,
          status: "isPending",
        };
  
        console.log("Data to send:", data);
  
        axiosSecure.post("/approvePremium", data)
          .then((res) => {
            console.log("Response from server:", res.data);
            if (res.data.success && res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Request to make ${userName} a premium user is now pending.`,
                showConfirmButton: false,
                timer: 1500,
              });
              // Refetch data to update UI
            }
          })
          .catch((err) => {
            console.error("Error submitting request:", err);
            Swal.fire({
              icon: "error",
              title: "Failed to submit premium request!",
              text: err.response?.data?.message || err.message,
            });
          });
      } else {
        // If the user clicks "No, cancel", you can handle cancellation here if needed
        setIsProcessing(false);
        setRequestStatus(""); // Reset the request status if canceled
        console.log("User canceled the request to make premium.");
      }
    }
  };
  

   

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
        <Helmet>
    <title>Perfect Pair | {name ? `${name}'s Bio` : "View Bio Data"}</title>
</Helmet>
      {/* Top Section */}
      <div className="flex justify-between md:px-20 px-10 bg-indigo-100 py-4 rounded-bl-[80px] rounded-tr-[40px] items-center border-b-4 border-r-4 border-x-4 border-teal-500 pb-4 shadow-xl">
        {/* Left Section */}
        <div className="space-y-2">
          <h1 className="md:text-2xl font-bold text-gray-800">{name || 'Unknown'}</h1>
          <p className="md:text-xl text-xs text-gray-700 font-medium"><span className='text-teal-600 font-bold'>Father:</span> {fatherName || 'N/A'}</p>
          <p className="md:text-xl text-xs text-gray-700 font-medium"><span className='text-teal-600 font-bold'>Mother:</span> {motherName || 'N/A'}</p>
        </div>
        {/* Right Section (Photo) */}
        <div>
        <div>
      <Avatar
        src={photo || 'https://via.placeholder.com/150'}
        alt={name || 'User'}
        sx={{
          width: { xs: 64, sm: 96, md: 128 }, // Adjust width based on screen size
          height: { xs: 64, sm: 96, md: 128 }, // Adjust height based on screen size
          border: '2px solid #14b8a6', // Lime border color
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow effect
        }}
      />
    </div>
    </div>


      </div>
      <div className="flex justify-end my-4 ">
      <Button
        onClick={() => handleToPremium(email, name)} // Pass the user email and name here
        className={`text-white font-bold ${
          firstUserBio.role === "premium" || requestStatus === "isPending"
           
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-900 via-indigo-900 to-indigo-900"
        }`}
        type="submit"
        disabled={firstUserBio.role === "premium" || requestStatus === "isPending" || isProcessing}
        
        variant="contained"
        color="primary"
      >
        {isProcessing
          ? "Request for Premium is processing"
          : firstUserBio.role === "premium"
          ? "Premium User"
          : "Make Biodata To Premium"}
          
      </Button>

</div>
      {/* Details Section with Table */}
      <div className="mt-6">
      <div className="overflow-x-auto">
  <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-md">
    <thead>
      <tr className="bg-lime-300 text-indigo-900">
        <th className="border border-lime-500 p-3 text-left text-lg font-semibold">Attribute</th>
        <th className="border border-lime-500 p-3 text-left text-lg font-semibold">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Gender</td>
        <td className="border border-gray-300 p-3 text-gray-600">{gender || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
  <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Birth Date</td>
  <td className="border border-gray-300 p-3 text-gray-600">
    {birthDate && !isNaN(new Date(birthDate).getTime())
      ? new Date(birthDate).toISOString().split('T')[0]
      : 'N/A'}
  </td>
</tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Age</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userAge || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Height</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userHeight || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Weight</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userWeight || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Skin Color</td>
        <td className="border border-gray-300 p-3 text-gray-600">{skinColor || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Occupation</td>
        <td className="border border-gray-300 p-3 text-gray-600">{occupation || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Permanent Division</td>
        <td className="border border-gray-300 p-3 text-gray-600">{permanentDivision || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Present Division</td>
        <td className="border border-gray-300 p-3 text-gray-600">{presentDivision || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Partner Age</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerAge || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Partner Height</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerHeight || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium hover:font-bold">Partner Weight</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerWeight || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Email</td>
        <td className="border border-gray-300 p-3 text-gray-600">{email || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200 hover:font-bold">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium hover:font-bold">Phone</td>
        <td className="border border-gray-300 p-3 text-gray-600">{phone || 'N/A'}</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default ViewBioData;
