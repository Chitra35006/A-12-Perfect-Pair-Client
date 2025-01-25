import React from 'react';
import useAllBioData from "../../hooks/useAllBioData";
import useMarriageList from '../../hooks/useMarriageList';
import { Card, Row, Col } from 'antd';
import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';
import './SuccessCounter.css'; // Import the custom CSS file

const SuccessCounter = () => {
    const [biodatas] = useAllBioData();
    const [mrlists] = useMarriageList();

    const mrLength = mrlists ? mrlists.length : 0;
    const genderCount = biodatas?.reduce(
        (acc, bio) => {
          if (bio.gender === "Male") {
            acc.male += 1;
          } else if (bio.gender === "Female") {
            acc.female += 1;
          }
          return acc;
        },
        { male: 0, female: 0 }
    );

    const totalMale = genderCount?.male || 0;
    const totalFemale = genderCount?.female || 0;

    const cardData = [
        {
          icon: <FaMale size={80} style={{ color: "#fff" }} />, // Icon size and color
          count: totalMale,
          title: "Boys",
          bgGradient: "linear-gradient(to right, #ff9a9e, #ff80aa)", // Light pink gradient
        },
        {
          icon: <FaFemale size={80} style={{ color: "#fff" }} />, // Icon size and color
          count: totalFemale,
          title: "Girls",
          bgGradient: "linear-gradient(to right, #5dade2, #1f618d)", // Light pink to light violet gradient
        },
        {
          icon: <FaUsers size={80} style={{ color: "#fff" }} />, // Icon size and color
          count: mrLength,
          title: "Couple",
          bgGradient: "linear-gradient(to right, #ff66a3, #6666ff)", // Light violet gradient
        },
    ];

    return (
        <div className='mt-10 mb-20 bg-gray-100 p-10 w-10/12 mx-auto shadow-md rounded-2xl border-gray-300 border-2'>
            <h2 className='w-4/12 mx-auto text-center my-5 text-3xl border-dashed border-lime-400 p-1 mb-10 border-2 font-bold text-black/60'>
                Success Counter
            </h2>
            <Row gutter={[16, 16]} justify="center">
                {cardData.map((card, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                        <Card
                            hoverable
                            className="custom-card" // Custom hover class
                            bodyStyle={{
                                textAlign: 'center',
                                padding: '16px',
                                background: card.bgGradient, // Apply gradient background
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderRadius: '10px', // Rounded corners
                                color: '#fff', // Ensures text is readable
                            }}
                        >
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                {card.icon}
                            </div>
                            <div className='text-3xl' style={{ flex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h4>{card.count}</h4>
                                <h3>{card.title}</h3>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SuccessCounter;
