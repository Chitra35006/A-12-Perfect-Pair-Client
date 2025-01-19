import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

import PrimaryButton from "../Buttons/PrimaryButton";

const captions = [
  {
    id: 1,
    name: "The Love Birds",
    image: "https://i.ibb.co/pdTXMnB/914-Asbury-Park-Convention-Hall-Berkeley-Hotel-KL-1-1024x683.jpg",
    description: "Building a lifetime of memories, one moment at a time."
  },
  {
    id: 3,
    name: "The Perfect Couple",
    image: "https://i.ibb.co/2YQyBYp/IMG-20210511-173330.jpg",
    description: "We may not have it all together, but together we have it all"
  },
  {
    id: 4,
    name: "Two peas in a pod",
    image: "https://i.ibb.co/QFCTf85/Indian-Wedding-Photography-Boston-PTaufiq-The-Grand-Lodge-of-Maryland-Couples-Portrait-85-1.jpg",
    description: "Marriage: where 'what's mine is yours' becomes a reality."
  },
  
  
  {
    id: 6,
    name: "My better half",
    image: "https://i.ibb.co/P6KjZkY/Wedding-Photography-London-23.jpg",
    description: "In a world of chaos, love is our constant."
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % captions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + captions.length) % captions.length);
  };

  return (
    <div className="relative w-11/12 mx-auto my-6">
      <div className="text-white md:h-[450px] lg:min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center object-cover rounded-lg"
          style={{
            backgroundImage: `url(${captions[currentSlide].image})`,
            filter: "brightness(50%)",
          }}
        ></div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto py-5">
          {/* Main Content */}
          <div className="flex  flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 justify-center md:m-0">
            {/* Text Section */}
            <div className="flex lg:w-6/12 flex-col justify-center items-center mt-20">
              <div className="px-4 space-y-2">
                <h1 className="md:p-0 p-4 text-2xl lg:text-4xl md:text-3xl font-bold animate__animated animate__backInRight">
                  {captions[currentSlide].name}
                </h1>
                <p className="md:p-0 p-4 text-gray-300 text-lg lg:w-auto md:w-72  animate__animated animate__backInLeft">
                  {captions[currentSlide].description}
                </p>
                {/* <Button className="md:text-2xl text-base md:px-6 px-2 py-6 md:py-8 border-none font-bold bg-gradient-to-r from-lime-400 via-lime-500 to-green-700">Explore More</Button> */}
              <PrimaryButton text="EXPLORE NOW"></PrimaryButton>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="flex relative flex-1 space-x-2 overflow-x-hidden lg:overflow-x-auto overflow-y-hidden scrollbar-hide md:mx-0  mx-2">
              {captions.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`lg:w-60 w-20 md:w-32 flex-shrink-0 rounded-lg shadow-md cursor-pointer transform transition-transform ${
                    currentSlide === index ? "border-4 border-lime-400" : "hover:scale-105"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="rounded-lg object-cover md:w-full lg:h-[300px]"
                    />
                    <div className="font-medium md:font-bold  hidden lg:block bg-gray-200 text-black opacity-60 absolute lg:top-16 lg:-right-10 lg:rotate-90 transform "
                    >
                      <p className="text-center px-2 my-0">{destination.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Btns */}
          <div className="hidden lg:block">
            <div className="flex absolute inset-x-0 -bottom-20 justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 bg-white hover:bg-lime-300 rounded-full"
                aria-label="Previous slide"
              >
                <FiChevronLeft className="text-4xl text-lime-700" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white hover:bg-lime-300 rounded-full"
                aria-label="Next slide"
              >
                <FiChevronRight className="text-4xl text-lime-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
