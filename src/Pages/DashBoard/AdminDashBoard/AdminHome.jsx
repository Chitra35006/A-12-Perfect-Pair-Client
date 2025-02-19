import React from 'react';
import useAdminStats from '../../../hooks/useAdminStats';
import { Card } from "antd";
import { UserOutlined, DollarOutlined, CrownOutlined, ManOutlined, WomanOutlined } from "@ant-design/icons";
import { Helmet } from 'react-helmet';
import { Pie } from "@ant-design/plots";
import useTheme from '../../../hooks/useTheme';

const AdminHome = () => {
    const [allItem] = useAdminStats();
    const { theme } = useTheme();

    const cards = [
        {
            title: "Male Users",
            value: allItem.maleBioData,
            icon: <ManOutlined className="text-3xl text-blue-800" />,
            gradient: "from-blue-500 to-indigo-600",
        },
        {
            title: "Female Users",
            value: allItem.femaleBioData,
            icon: <WomanOutlined className="text-3xl text-violet-800" />,
            gradient: "from-pink-500 to-purple-600",
        },
        {
            title: "Premium Users",
            value: allItem.premiumBioData,
            icon: <CrownOutlined className="text-3xl text-yellow-800" />,
            gradient: "from-yellow-500 to-orange-600",
        },
        {
            title: "Revenue",
            value: `$${allItem.revenue}`,
            icon: <DollarOutlined className="text-3xl text-green-800" />,
            gradient: "from-green-500 to-emerald-600",
        },
    ];

    const data = [
        { type: "Male Users", value: allItem.maleBioData },
        { type: "Female Users", value: allItem.femaleBioData },
        { type: "Premium Users", value: allItem.premiumBioData },
        { type: "Payments", value: allItem.paymentCount },
    ];

    const config = {
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        label: {
            type: "inner",
            offset: "-30%",
            content: "{name} ({value})",
            style: {
                fontSize: 14,
                textAlign: "center",
                fill: theme === "dark" ? "#fff" : "#000", // Change text color based on the theme
            },
        },
        interactions: [{ type: "element-active" }],
        legend: {
            position: "bottom",
            itemName: {
                style: {
                    fill: theme === "dark" ? "#fff" : "#000", // Change legend text color based on the theme
                },
            },
        },
        color: ["#4B9CD3", "#F76C5E", "#FFC857", "#6CD4B5"],
        // Manually set styles for pie chart elements based on theme
        style: {
            color: theme === "dark" ? "#fff" : "#000", // Ensure pie chart text color changes based on the theme
        }
    };

    return (
        <div>
            <Helmet><title>Admin Dashboard || Perfect Pair</title></Helmet>
            <h1 className={`text-xl font-bold ${theme === "dark" ? "text-teal-500" : "text-indigo-900"} border-double border-y-2 mt-10 md:w-1/4 w-2/4 text-center border-lime-400 py-1 mx-auto mb-4`}>
                Dashboard
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className="shadow-md hover:shadow-xl transition-all duration-300"
                        bordered={false}
                        bodyStyle={{ padding: "0" }}
                    >
                        <div className={`flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-r ${card.gradient}`}>
                            <div className="p-4 bg-white rounded-full shadow-md mb-4">{card.icon}</div>
                            <h2 className="text-white text-2xl font-bold">{card.value}</h2>
                            <p className="text-white text-sm mt-2">{card.title}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Statistics Chart */}
            <div className="p-6">
                <h2 className={`text-2xl font-bold text-center ${theme === "dark" ? "text-white" : "text-indigo-900"} mb-4`}>
                    Statistics Overview
                </h2>
                <Pie {...config} />
            </div>
        </div>
    );
};

export default AdminHome;
