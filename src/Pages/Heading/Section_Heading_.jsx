
import React, { useContext } from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Section_Heading_ = ({heading,customClass}) => {
    const{theme} = useTheme();
    return (
        <div className="mx-auto text-center w-6/12  md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2"></p>
            <h3 className={`${customClass} uppercase border-double border-y-4 py-4 ${theme === "light" ? "text-black" : "text-gray-400"}`}
             style={{
                borderImage: 'linear-gradient(to right, #a3e635, #4ade80) 1',
            }}>
            {heading}</h3>
        </div>
    );
};

export default Section_Heading_;