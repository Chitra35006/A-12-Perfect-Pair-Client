import React from 'react';
import useAllBioData from "../../hooks/useAllBioData";
import useMarriageList from '../../hooks/useMarriageList';
import { Card, Row, Col } from 'antd';
import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';
import { useTheme } from '../../Provider/ThemeContext';
import { motion } from 'framer-motion';

const SuccessCounter = () => {
    const [biodatas] = useAllBioData();
    const [mrlists] = useMarriageList();
    const { theme } = useTheme();

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
            icon: <FaMale size={80} style={{ color: "#fff" }} />,
            count: totalMale,
            title: "Boys",
            bgGradient: theme === "light"
                ? "linear-gradient(to right,#90caf9, #1e88e5 )"
                : "linear-gradient(to right,#0e347b , #063da5  )",
            borderColor: theme === "light" ? "border-blue-300" : "border-blue-700",
        },
        {
            icon: <FaFemale size={80} style={{ color: "#fff" }} />,
            count: totalFemale,
            title: "Girls",
            bgGradient: theme === "light"
                ? "linear-gradient(to right, #f8bbd0, #ff80aa)"
                : "linear-gradient(to right, #710a71 , #b40fb4 )",
            borderColor: theme === "light" ? "border-pink-300" : "border-pink-500",
        },
        {
            icon: <FaUsers size={80} style={{ color: "#fff" }} />,
            count: mrLength,
            title: "Couple",
            bgGradient: theme === "light"
                ? "linear-gradient(to right, #ff66a3, #6666ff)"
                : "linear-gradient(to right, #6a0572, #3f37c9)",
            borderColor: theme === "light" ? "border-purple-300" : "border-purple-700",
        },
    ];

    return (
        <div className={`mt-10 mb-20 p-10 w-10/12 mx-auto shadow-md rounded-2xl border-2 
            ${theme === "light" ? "bg-gray-100 border-gray-300" : "bg-gray-950 border-cyan-600"}`}>
            
            <h2 className={`md:w-4/12 mx-auto text-center my-5 md:text-3xl border-dashed border-lime-400 p-1 mb-10 border-2 font-bold 
                ${theme === "light" ? "text-black/60" : "text-gray-400"}`}>
                Success Counter
            </h2>
            
            <Row gutter={[16, 16]} justify="center">
                {cardData.map((card, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                        <motion.div
                            className={`custom-card shadow-lg border-2 rounded-xl transition duration-300 hover:border-white 
                                ${card.borderColor}`} // Dynamic border color
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: {
                                    duration: 2, // 2 seconds for each fade-in/out
                                    ease: "easeInOut",
                                    repeat: Infinity, // Continuously repeat the fade transition
                                    repeatType: "reverse", // Reverse the fade-out to fade back in
                                },
                            }}
                        >
                            <Card
                                hoverable
                                bodyStyle={{
                                    textAlign: 'center',
                                    padding: '16px',
                                    background: card.bgGradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderRadius: '10px',
                                    color: '#fff',
                                }}
                            >
                                <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                    {card.icon}
                                </div>
                                <div className='md:text-3xl text-xl' style={{ flex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h4>{card.count}</h4>
                                    <h3>{card.title}</h3>
                                </div>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SuccessCounter;
