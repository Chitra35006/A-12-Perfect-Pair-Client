import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Section_Heading1 = ({heading,custom_class}) => {
    const {theme} = useTheme();
    return (
        <div className="mx-auto bg-gradient-to-r from-lime-400 via-lime-500 to-green-700 text-center w-6/12  md:w-4/12 my-8">
            <h3 className= {` md:text-2xl font-bold uppercase py-4 border-x-4 border-green-600 ${custom_class}`}
           >
            {heading}</h3>
        </div>
    );
};

export default Section_Heading1;