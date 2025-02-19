import React, { useState, useEffect, useMemo } from 'react';
import useAllBioData from '../../hooks/useAllBioData';
import Section_Heading1 from '../Heading/Section_Heading1';
import PremiumUserCard from './PremiumUserCard';
import { Select } from 'antd';
import useTheme from '../../hooks/useTheme';

const PreimumUsers = () => {
    const {theme} = useTheme();
    const { Option } = Select;
    const [biodatas, setBiodatas] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending
    const [sortedBiodatas, setSortedBiodatas] = useState([]);

    const [allBioData] = useAllBioData(); // Assuming useAllBioData returns allBioData

    useEffect(() => {
        if (allBioData && allBioData !== biodatas) {
            setBiodatas(allBioData);
        }
    }, [allBioData, biodatas]);

    const premiumBiodatas = useMemo(
        () => biodatas.filter((biodata) => biodata.role === "premium"),
        [biodatas]
    );
    // console.log(premiumBiodatas);


    const sortBiodatas = () => {
        const sorted = [...premiumBiodatas].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.userAge - b.userAge;
            } else {
                return b.userAge - a.userAge;
            }
        });
        setSortedBiodatas(sorted.slice(0, 6));
    };

    useEffect(() => {
        sortBiodatas(); // Call sorting function when biodatas or sortOrder changes
    }, [premiumBiodatas, sortOrder]);

    const handleSortChange = (value) => {
        setSortOrder(value);
    };

    // Log to check if premiumBiodatas are correctly filtered and available
    // console.log("Premium Biodatas: ", premiumBiodatas);

    return (
        <div className={`my-20 w-11/12 mx-auto px-4 pb-6 rounded-xl ${
            theme === "dark" ? "bg-slate-900" : "bg-slate-100 "
          }`}>
            <Section_Heading1 heading="Premium Users"></Section_Heading1>

            {/* Sorting Dropdown on the Right */}
            <div className="mb-4 flex justify-end w-full">
                <Select 
                    defaultValue="asc" 
                    onChange={handleSortChange} 
                    className="w-auto" 
                    style={{ maxWidth: '200px' }}
                >
                    <Option value="asc">Sort by Age (Ascending)</Option>
                    <Option value="desc">Sort by Age (Descending)</Option>
                </Select>
            </div>

            <div className={`grid md:grid-cols-3 grid-cols-1 gap-4 ${
            theme === "dark" ? "bg-slate-900" : "bg-white"
          }`}>
                {
                    sortedBiodatas.length > 0 ? (
                        sortedBiodatas.map((premiumBiodata) => (
                            <PremiumUserCard
                                key={premiumBiodata._id}
                                premiumBiodata={premiumBiodata}
                            />
                        ))
                    ) : (
                        <p>No premium users found.</p> // Display message if no data
                    )
                }
            </div>
        </div>
    );
};

export default PreimumUsers;
