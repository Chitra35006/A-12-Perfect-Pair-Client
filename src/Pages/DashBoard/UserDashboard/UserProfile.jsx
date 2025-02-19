import React from 'react';
import useTheme from '../../../hooks/useTheme';
import useBioData from '../../../hooks/useBioData';

const UserProfile = () => {
    const { userBioData } = useBioData();
    const firstUserBio = userBioData[0] || {};
    const {
        gender,
        name,
        photo,
        fatherName,
        motherName,
        permanentDivision,
        presentDivision,
        email,
        phone,
    } = firstUserBio;

    // Fallback for empty data
    if (!userBioData || userBioData.length === 0) {
        return (
            <div className='flex justify-center items-center my-20'>
                <p className='text-indigo-800 dark:text-indigo-300 font-semibold'>
                    No Data Found. Please Add Bio Data.
                </p>
            </div>
        );
    }

    return (
        <div className="my-20 flex flex-col md:flex-row justify-between items-center bg-indigo-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-teal-500 dark:border-teal-400 max-w-4xl mx-auto">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    src={photo || 'https://via.placeholder.com/150'}
                    alt={name || 'User'}
                    className="w-40 md:w-56 h-auto border-4 border-teal-500 dark:border-teal-400 shadow-lg"
                />
            </div>

            {/* Text Content Section */}
            <div className="flex-1 md:my-0 my-10 md:ml-10 text-gray-900 dark:text-gray-200 space-y-3">
                <h1 className="text-2xl font-bold">{name || 'Unknown'}</h1>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Gender:</span> {gender || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Father:</span> {fatherName || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Mother:</span> {motherName || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Permanent Division:</span> {permanentDivision || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Present Division:</span> {presentDivision || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Email:</span> {email || 'N/A'}
                </p>
                <p className="text-lg font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Phone:</span> {phone || 'N/A'}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
