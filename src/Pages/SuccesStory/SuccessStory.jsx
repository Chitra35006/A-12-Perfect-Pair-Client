import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Custom navigation icons
import { format } from 'date-fns';
import { useEffect, useState, useRef } from 'react';
import useMarriageList from '../../hooks/useMarriageList';
import { FaStar } from 'react-icons/fa'; // Importing star icon for review
import Section_Heading3 from '../Heading/Section_Heading3';
import Section_Heading_ from '../Heading/Section_Heading_';
import { useTheme } from '../../Provider/ThemeContext';


const SuccessStory = () => {
    const{theme} = useTheme();
    const [mrLists] = useMarriageList();
    const [sortedStories, setSortedStories] = useState([]);
    
    const swiperRef = useRef(null); // Create a reference to the Swiper instance

    useEffect(() => {
        if (mrLists && mrLists.length > 0) {
            // Sort the stories by marriage date in ascending order
            const sorted = [...mrLists].sort((a, b) => new Date(a.mDate) - new Date(b.mDate));
            setSortedStories(sorted);
        }
    }, [mrLists]);

    // Function to go to the next slide
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Move to next slide
        }
    };

    // Function to go to the previous slide
    const goToPrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Move to previous slide
        }
    };

    return (
        <div className={`${theme === "light"? "bg-gray-100":"bg-gray-700"} py-10`}>
            <Section_Heading_ customClass="md:text-3xl" heading={"Success story"}></Section_Heading_>
            <div className="success-story-slider relative w-11/12  mx-auto mt-10 mb-20">
            
            <Swiper
                ref={swiperRef} // Attach the ref to Swiper
                spaceBetween={30}
                slidesPerView={2} // Show two items per slide by default
                className="mySwiper"
                breakpoints={{
                    // When screen width is 320px or greater, show 1 item
                    320: {
                        slidesPerView: 1, // Show 1 item per slide
                        spaceBetween: 10,
                    },
                    // When screen width is 640px or greater, show 1 item
                    640: {
                        slidesPerView: 1, // Show 1 item per slide
                        spaceBetween: 20,
                    },
                    // When screen width is 1024px or greater, show 2 items
                    1024: {
                        slidesPerView: 2, // Show 2 items per slide
                        spaceBetween: 30,
                    },
                }}
            >
                {sortedStories.map((mrlist) => (
                    <SwiperSlide key={mrlist._id}>
                        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg">
                            {/* Image Section */}
                            <div
                                className="bg-cover bg-center w-full lg:w-1/2 h-64 rounded-lg mb-4 lg:mb-0"
                                style={{
                                    backgroundImage: `url(${mrlist.photo})`,
                                }}
                            >
                                <div className="overlay"></div> {/* Add overlay for better readability */}
                            </div>

                            {/* Text Section */}
                            <div className="text-white lg:w-1/2 px-4">
                                {/* Description */}
                                <p className="italic text-lg mb-4">{mrlist.description}</p>
                                <h3 className="text-2xl font-semibold text-orange-400">{mrlist.name}</h3>
                                {/* Marriage Date */}
                                <p className="text-sm md:text-lg mt-4">{`Marriage Date: ${format(
                                    new Date(mrlist.mDate),
                                    'yyyy-MM-dd'
                                )}`}</p>
                                
                                {/* Rating */}
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            size={20}
                                            color={index < mrlist.rating ? 'orange' : 'gray'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                className="swiper-button-prev swiper-button-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={goToPrevSlide} // Trigger goToPrevSlide on click
            >
                <FaArrowLeft size={30} className="text-white" />
            </div>
            <div
                className="swiper-button-next swiper-button-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={goToNextSlide} // Trigger goToNextSlide on click
            >
                <FaArrowRight size={30} className="text-white" />
            </div>
        </div>
        </div>
    );
};

export default SuccessStory;
