import React from 'react';
import useBioData from '../../../hooks/useBioData';
import { Avatar } from '@mui/material';
import { Helmet } from 'react-helmet';

const ViewBioData = () => {
  const { userBioData } = useBioData();

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

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
        <Helmet><title>Perfect Pair | View Bio Data</title></Helmet>
      {/* Top Section */}
      <div className="flex justify-between md:px-20 px-10 bg-indigo-100 py-4 rounded-bl-[80px] rounded-tr-[40px] items-center border-b-4 border-r-4 border-x-4 border-teal-500 pb-4">
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

      {/* Details Section with Table */}
      <div className="mt-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-lime-200 text-indigo-900">
              <th className="border border-lime-500 p-2 text-left">Attribute</th>
              <th className="border border-lime-500 p-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-lime-600">Gender</td>
              <td className="border border-gray-300 p-2 text-gray-500">{gender || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 p-2 text-lime-600">Birth Date</td>
              <td className="border border-gray-300 p-2 text-gray-500">{birthDate || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-teal-500">Age</td>
              <td className="border border-gray-300 p-2 text-gray-500">{userAge || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 p-2 text-teal-500">Height</td>
              <td className="border border-gray-300 p-2 text-gray-500">{userHeight || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-lime-600">Weight</td>
              <td className="border border-gray-300 p-2 text-gray-500">{userWeight || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 p-2 text-lime-600">Skin Color</td>
              <td className="border border-gray-300 p-2 text-gray-500">{skinColor || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-teal-500 p-2">Occupation</td>
              <td className="border border-gray-300 p-2 text-gray-500">{occupation || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 text-teal-500 p-2">Permanent Division</td>
              <td className="border border-gray-300 p-2 text-gray-500">{permanentDivision || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-lime-600 p-2">Present Division</td>
              <td className="border border-gray-300 p-2 text-gray-500">{presentDivision || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 text-lime-600 p-2">Partner Age</td>
              <td className="border border-gray-300 p-2 text-gray-500">{partnerAge || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-teal-500">Partner Height</td>
              <td className="border border-gray-300 p-2 text-gray-500">{partnerHeight || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 text-teal-500 p-2">Partner Weight</td>
              <td className="border border-gray-300 p-2 text-gray-500">{partnerWeight || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-lime-600 p-2">Email</td>
              <td className="border border-gray-300 p-2 text-gray-500">{email || 'N/A'}</td>
            </tr>
            <tr className="bg-indigo-50">
              <td className="border border-gray-300 text-lime-600 p-2">Phone</td>
              <td className="border border-gray-300 p-2 text-gray-500">{phone || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBioData;
