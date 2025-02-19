import React from "react";
import { Helmet } from "react-helmet";
import { Card, Row, Col } from "antd";
import { HeartOutlined, UsergroupAddOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const AboutUs = () => {
  const aboutData = [
    {
      icon: <HeartOutlined className="text-5xl text-red-500" />,
      title: "Our Mission",
      description: "We aim to connect hearts and create meaningful relationships that last a lifetime.",
    },
    {
      icon: <UsergroupAddOutlined className="text-5xl text-blue-500" />,
      title: "Why Choose Us?",
      description: "With thousands of verified profiles, we ensure you find the perfect match effortlessly.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-5xl text-green-500" />,
      title: "Secure & Trustworthy",
      description: "We prioritize your privacy and safety, offering a secure matchmaking experience.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-950">
      <Helmet>
        <title>Perfect Pair | About Us</title>
      </Helmet>

      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className=" my-10 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">About Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          Find your perfect partner with our trusted matrimonial platform.
        </p>
      </div>

      {/* About Section Cards */}
      <Row gutter={[16, 16]} justify="center" className="mt-10 px-4">
        {aboutData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className="shadow-md rounded-xl border-2 transition-transform transform hover:scale-105 dark:bg-gray-900 dark:border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
