import React from 'react';
import useBioData from '../../../hooks/useBioData';
import { Avatar } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Button } from "@mui/material";
const ViewBioData = () => {
  const { userBioData } = useBioData();

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
  console.log(firstUserBio);
   

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
            <Button className="text-white font-bold hover:text-lime-300 bg-gradient-to-r from-indigo-900 via-indigo-900 to-indigo-900" type="submit" variant="contained" color="primary">
              Make Biodata To Premium
            </Button></div>
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
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Gender</td>
        <td className="border border-gray-300 p-3 text-gray-600">{gender || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
  <td className="border border-gray-300 p-3 text-lime-600 font-medium">Birth Date</td>
  <td className="border border-gray-300 p-3 text-gray-600">
    {birthDate && !isNaN(new Date(birthDate).getTime())
      ? new Date(birthDate).toISOString().split('T')[0]
      : 'N/A'}
  </td>
</tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Age</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userAge || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Height</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userHeight || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Weight</td>
        <td className="border border-gray-300 p-3 text-gray-600">{userWeight || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Skin Color</td>
        <td className="border border-gray-300 p-3 text-gray-600">{skinColor || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Occupation</td>
        <td className="border border-gray-300 p-3 text-gray-600">{occupation || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Permanent Division</td>
        <td className="border border-gray-300 p-3 text-gray-600">{permanentDivision || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Present Division</td>
        <td className="border border-gray-300 p-3 text-gray-600">{presentDivision || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Partner Age</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerAge || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Partner Height</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerHeight || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-teal-500 font-medium">Partner Weight</td>
        <td className="border border-gray-300 p-3 text-gray-600">{partnerWeight || 'N/A'}</td>
      </tr>
      <tr className="hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Email</td>
        <td className="border border-gray-300 p-3 text-gray-600">{email || 'N/A'}</td>
      </tr>
      <tr className="bg-indigo-50 hover:bg-lime-200">
        <td className="border border-gray-300 p-3 text-lime-600 font-medium">Phone</td>
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
