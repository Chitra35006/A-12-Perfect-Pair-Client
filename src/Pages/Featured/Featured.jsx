import React from 'react';
import './featured.css'
import featuredImg from "../../assets/featured.jpg"
import Section_Heading3 from '../Heading/Section_Heading3';
import { DoubleRightOutlined } from '@ant-design/icons';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white p-8 my-20'>
  <Section_Heading3 heading={"How It Works"}></Section_Heading3>
  <div className="md:flex justify-center items-center pb-20 mx-4 md:mx-20 pt-12 px-4 md:px-36 bg-black bg-opacity-40">
    <div className='w-full md:w-6/12'>
      <img src={featuredImg} alt="" className="w-full h-auto"/>
    </div>
    <div className="md:ml-10 mt-6 md:mt-0">
      <p className="flex items-center"><DoubleRightOutlined className='bg-gray-700 p-2 rounded-full mr-2'/> 
        Perfect Pair is a matrimonial website that truly works for connecting you with your desired partner.
      </p>
      <p className="flex items-center"><DoubleRightOutlined className='bg-gray-700 p-2 rounded-full mr-2'/> 
        First, register here, and you will see the biodata at the top. Click there, and you will find all the biodatas.
      </p>
      <p className="flex items-center"><DoubleRightOutlined className='bg-gray-700 p-2 rounded-full mr-2'/> 
        You can add users to your favorites & request to see the contact address. There will be a checkout page where you need to pay 5 USD to see each requested contact.
      </p>
      <p className="flex items-center"><DoubleRightOutlined className='bg-gray-700 p-2 rounded-full mr-2'/> 
        You can also find the user dashboard, where you can add or edit your biodata, manage your contact requests, and view your added favorite profiles.Also upload your marital status share reviews in got married route
      </p>
    </div>
  </div>
</div>

    );
};

export default Featured;