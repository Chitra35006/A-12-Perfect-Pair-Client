import React from 'react';
import {ArrowRightOutlined } from "@ant-design/icons";
const Four04Page = () => {
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="w-8/12">
          <div className="flex justify-center items-center flex-col">
            <div className='bg-indigo-900 p-4 my-10 rounded-2xl'>
              <a
                href="/"
                className="flex items-center text-lime-300 hover:text-white font-semibold transition-colors duration-300"
              >
                <ArrowRightOutlined className="text-xl md:text-2xl" />
                <span className="ml-1 text-sm md:text-base font-medium">Go Home</span>
              </a>
            </div>
            <div className="bg-lime-300 p-20 border-dashed border-red-600 border-2">
              <h2 className="md:text-6xl text-3xl text-indigo-900 text-center">
                !!!{" "}404
              </h2>
              <h2 className="font-semibold w-full max-w-8xl text-red-700 p-4 md:rounded-full rounded-lg bg-red-400 text-center text-base md:text-xl">
  Page Not Found
</h2>

            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Four04Page;