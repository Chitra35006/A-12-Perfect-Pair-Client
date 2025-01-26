import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'antd';
import {ArrowRightOutlined } from "@ant-design/icons";
import 'sweetalert2/dist/sweetalert2.min.css';

import { 
    UserOutlined, 
    CalendarOutlined, 
    SmileOutlined, 
    PushpinOutlined, 
    ManOutlined, 
    WomanOutlined, 
    PhoneOutlined, 
    MailOutlined, 
    HomeOutlined 
  } from '@ant-design/icons';
import useBioData from '../../hooks/useBioData';
import useAuth from '../../hooks/useAuth';
import UseAllUsers from '../../hooks/UseAllUsers';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const DetailsBioData = () => {
    const navigate = useNavigate();
    const{userInfo} = UseAllUsers();
    const{user} = useAuth();
     const [totalPrice, setTotalPrice] = useState(0);
    const axiosSecure = useAxiosSecure();
 
    const {gender,
        name,
        photo,
        birthDate,
        userHeight,
        userWeight,
        userAge,
        occupation,
        skinColor,
        fatherName,
        motherName,
        permanentDivision,
        presentDivision,
        partnerAge,
        partnerHeight,
        partnerWeight,
        email,id,
        phone} = useLoaderData();
        
        // console.log(userInfo);
    const handleFavourite = ()=>{
      const fData ={
         
         id:id,
         name:name,
         occupation:occupation,
         email:user.email,
         photo:photo,

      }
      console.log(fData);
      axiosSecure.post("/addFavourite", fData)
  .then((res) => {
    console.log("Response from server:", res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} Added to your favorite Page.`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard/favBioData');
    }
  })
  .catch((error) => {
    console.error("Error adding to favorites:", error);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Failed to add to favorites. Please try again later.",
      showConfirmButton: false,
      timer: 1500,
    });
  });

      
    }

    const handlePayment = async ()=>{
      setTotalPrice((prevPrice) => prevPrice + 5);
      const data={
        id:id,
        reqName:name,
        price:"5",
        email:user.email
        
      }
      const contactRequest = await axiosSecure.post('/contactRequest',data)
      navigate('/dashboard/payment',{state: data});

    }
    return (
       <div className='mt-20 mb-10'>
<Card className="w-full max-w-[600px] mx-auto rounded-xl shadow-lg overflow-hidden">

<div className="flex flex-wrap md:flex-nowrap gap-4">
    {/* Image Section */}
    <div className="w-full md:w-5/12 border border-gray-300 bg-teal-50 p-4 rounded-xl md:rounded-l-xl">
      <img
        src={photo}
        alt={name}
        className="w-full h-auto md:h-[220px] rounded-xl md:rounded-l-xl object-cover"
      />
       
    </div>

    {/* Details Section */}
    <div className="w-full md:w-7/12 border border-teal-500 p-4 rounded-xl md:rounded-br-[80px] md:rounded-tr-[40px] items-center border-b-4 border-l-4 border-x-4 space-y-2">
      <div className='flex justify-between'>
      <h3 className="font-bold text-teal-600 text-xl">{name}</h3>
      <div className="bg-teal-500 text-white px-2 py-2 rounded-md text-xs font-bold">
      ID: {id}
</div>
      </div>
      <p className="m-0">
        <UserOutlined className="text-lime-500" /> <strong>Gender:</strong> {gender}
      </p>
      <p className="m-0">
        <SmileOutlined className="text-lime-500" /> <strong>Age:</strong> {userAge}
      </p>
      <p className="m-0">
        <CalendarOutlined className="text-teal-500" /> <strong>Birth Date:</strong> {birthDate}
      </p>
      <p className="m-0">
        <PushpinOutlined className="text-teal-500" /> <strong>Height:</strong> {userHeight}
      </p>
      <div>
      <Button     
      onClick={()=>handleFavourite()}
                    className='my-4'
                    icon={<ArrowRightOutlined />}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#365314',
                      borderBottom: '4px solid #84cc16',
                      fontWeight: 'bold',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'teal';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderBottom = "4px solid teal";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#365314';
                      e.currentTarget.style.borderBottom = "4px solid #84cc16";
                    }}
                  >
                    Add To Favourite
                  </Button>
      </div>
    </div>
  </div>




<div className="mt-4">
<div className="mt-4">
  <div className="flex flex-wrap gap-4">
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full gap-4">
  <p className="border w-full md:w-1/2 border-gray-300 p-2 text-teal-600 rounded-md bg-lime-100">
    <PushpinOutlined className="text-lime-600" /> <strong>Weight:</strong> 
    <span className="text-gray-700 font-medium">{userWeight}</span>
  </p>
  <p className="border w-full md:w-1/2 border-gray-300 p-2 text-teal-600 rounded-md bg-lime-100">
    <CalendarOutlined className="text-lime-600" /> <strong>Occupation:</strong> 
    <span className="text-gray-700 font-medium">{occupation}</span>
  </p>
</div>

    
   
    <div className="flex justify-between md:flex-nowrap gap-4 flex-wrap items-center w-full">
      <p className="border border-gray-300 rounded-md text-teal-600  md:w-1/2 w-full p-2 bg-lime-100">
        <CalendarOutlined className="text-lime-600" /> <strong>Skin Color:</strong><span className='text-gray-700 font-medium'> {skinColor}</span>
      </p>
      <p className="border border-gray-300 rounded-md text-teal-600  md:w-1/2 w-full p-2 bg-lime-100">
        <ManOutlined className="text-lime-600" /> <strong>Father's Name:</strong> <span className='text-gray-700 font-medium'>{fatherName}</span>
      </p>
    </div>
    <div className="flex justify-between md:flex-nowrap gap-4 flex-wrap items-center w-full">
    <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-teal-50 text-lime-600">
        <WomanOutlined className="text-teal-600" /> <strong>Mother's Name:</strong> <span className='text-gray-700 font-medium'>{motherName}</span>
      </p>
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-teal-50 text-lime-600">
        <HomeOutlined className="text-teal-600" /> <strong>Permanent Division:</strong> <span className='text-gray-700 font-medium'>{permanentDivision}</span>
      </p>
    </div>

    <div className="flex justify-between md:flex-nowrap gap-4 flex-wrap items-center w-full">
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-teal-50 text-lime-600">
        <HomeOutlined className="text-teal-500" /> <strong>Present Division:</strong> <span className='text-gray-700 font-medium'>{presentDivision}</span>
      </p>
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-teal-50 text-lime-600">
        <CalendarOutlined className="text-teal-500" /> <strong>Partner Age:</strong> <span className='text-gray-700 font-medium'>{partnerAge}</span>
      </p>
    </div>
    <div className="flex justify-between md:flex-nowrap gap-4 flex-wrap items-center w-full">
    <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-lime-100 text-teal-600">
        <PushpinOutlined className="text-lime-600 " /> <strong>Partner Height:</strong> <span className='text-gray-700 font-medium'>{partnerHeight}</span>
      </p>
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-lime-100 text-teal-600">
        <PushpinOutlined className="text-lime-600 " /> <strong>Partner Weight:</strong> <span className='text-gray-700 font-medium'>{partnerWeight}</span>
      </p>
    </div>
    
    {
  userInfo?.role === "premium" ? (
    <div className="flex justify-between md:flex-nowrap gap-4 flex-wrap items-center w-full">
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-lime-100 text-teal-600">
        <MailOutlined className="text-lime-600 " /> <strong>Email:</strong> <span className='text-gray-700 font-medium'>{email}</span>
      </p>
      <p className="border border-gray-300 rounded-md md:w-1/2 w-full p-2 bg-lime-100 text-teal-600">
        <PhoneOutlined className="text-lime-600 " /> <strong>Phone:</strong> <span className='text-gray-700 font-medium'>{phone}</span>
      </p>
    </div>
  ) : null
}
{/* //Request for contact */}
{
  userInfo?.role === "premium" ? null : (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <Button
        onClick={() => handlePayment()}
        className="my-4"
        icon={<ArrowRightOutlined />}
        style={{
          backgroundColor: "transparent",
          color: "#365314",
          borderBottom: "4px solid #84cc16",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "teal";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.borderBottom = "4px solid teal";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#365314";
          e.currentTarget.style.borderBottom = "4px solid #84cc16";
        }}
      >
        Request For Contact
      </Button>
    </div>
  )
}





  </div>
</div>

</div>

</Card>


       </div>
    );
};

export default DetailsBioData;