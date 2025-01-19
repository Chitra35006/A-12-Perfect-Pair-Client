import React from 'react';
import { useTheme } from '../../Provider/ThemeContext';

const Section_Heading3 = ({heading}) => {
    const{theme} = useTheme();
    return (
        <div className="mx-auto text-center w-6/12  md:w-4/12 my-8">
            <h3 className= {`md:text-3xl uppercase py-4  border-green-600 border-dashed border-2 ${theme === "light" ? "text-lime-600" : "text-lime-300"}`}
           >
            {heading}</h3>
        </div>
      
      

      


      
    );
};

export default Section_Heading3;