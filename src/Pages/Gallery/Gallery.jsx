import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import useTheme from '../../hooks/useTheme';
import useAllBioData from '../../hooks/useAllBioData';

const Gallery = () => {
  const { theme } = useTheme();
  const [biodatas] = useAllBioData();

  // Array of background colors and border colors
  const bgColors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-teal-100',
    'bg-indigo-100',
    'bg-gray-100',
    'bg-orange-100',
  ];

  const borderColors = [
    'border-red-400',
    'border-yellow-400',
    'border-blue-400',
    'border-green-400',
    'border-purple-400',
    'border-pink-400',
    'border-teal-400',
    'border-indigo-400',
    'border-gray-400',
    'border-orange-400',
  ];

  // State to manage the in-view status of the gallery items
  const [inViewItems, setInViewItems] = useState(new Set());

  // Handle scroll event to detect when an element is in view
  const handleScroll = () => {
    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInViewItems((prevItems) => new Set(prevItems.add(index)));
      } else {
        setInViewItems((prevItems) => {
          const newItems = new Set(prevItems);
          newItems.delete(index);
          return newItems;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-12 my-20 mx-auto w-10/12 px-4 sm:px-8 lg:px-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[linear-gradient(25deg,#d3f9f3_5%,_white_40%,_white_40%,#d4f8b6_100%)]'}`}
    >
      <div className="container mx-auto text-center mb-8">
        <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Gallery
        </h2>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
          Check out our gallery!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery">
        {/* Loop through biodatas and display images */}
        {biodatas.map((bio, index) => {
          const bgClass = bgColors[index % bgColors.length]; // Dynamic background color
          const borderClass = borderColors[index % borderColors.length]; // Dynamic border color

          // Define the gradient for light and dark mode
          const gradientClass = theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-black'
            : 'bg-gradient-to-r from-yellow-200 via-white to-green-200';

          return (
            <motion.div
              key={index}
              className={`gallery-item relative group ${bgClass} border-4 ${borderClass} rounded-2xl`}
              initial={{ opacity: 0, x: 100 }} // Start from the right side
              animate={{
                opacity: inViewItems.has(index) ? 1 : 0, // Fade-in when in view
                x: inViewItems.has(index) ? 0 : 100, // Slide-in when in view
              }} // Move to original position and fade in
              transition={{
                type: 'spring', // Use spring for bouncing effect
                stiffness: 100, // Adjust stiffness for bounce intensity
                damping: 20, // Adjust damping for bounce smoothness
                delay: index * 0.1, // Add delay for staggered effect
              }}
            >
              <div
                className={`w-full ${index % 3 === 1 ? 'h-72' : 'h-48'} w-60 p-2 ${gradientClass}`} // Added padding around the image
                style={{
                  backgroundImage: `url(${bio.photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay with the name */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-white text-lg font-semibold">{bio.name}</p>
                </div>
              </div>

              <div className="p-4"></div> {/* Add padding here */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
