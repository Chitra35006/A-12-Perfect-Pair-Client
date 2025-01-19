import clsx from 'clsx';
import React from 'react';

const DynamicButton = ({ text, color }) => {
    return (
        <button
  className={clsx(
    'inline-block py-3 px-5 border-[1px] rounded-xl font-semibold hover:text-white text-black focus:outline-none transition-all duration-200 shadow-md', // Common base styles
    {
      'hover:bg-gradient-to-r focus:bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-600 text-blue-500 border-blue-500': color === 'blue', // Blue color with hover and focus
      'hover:bg-gradient-to-r focus:bg-gradient-to-r from-lime-300 via-lime-500 to-green-600 text-lime-500 border-lime-500': color === 'green', // Green color with hover and focus
      'hover:bg-gradient-to-r focus:bg-gradient-to-r from-violet-300 to-pink-500': color === 'violet', // Violet gradient with hover and focus
      'hover:bg-yellow-700 focus:bg-yellow-700 bg-yellow-500 border-yellow-500': color === 'yellow', // Yellow color with hover and focus
    }
  )}
>
            {text}
        </button>
    );
};

export default DynamicButton;