import React from 'react';
import { Card } from "antd";
import { UserAddOutlined, StarOutlined, CrownFilled } from "@ant-design/icons";
import useTheme from '../../hooks/useTheme';
import PrimaryButton from '../Buttons/PrimaryButton';

const MemberShip = () => {
    const { theme } = useTheme();

    return (
        <div className='my-20 mx-10'>
            <section className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className={`container mx-auto text-center mb-8 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    <h2 className="text-3xl font-semibold">Our Membership Plans</h2>
                    <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Choose the plan that best suits your needs and start your journey to find the perfect match!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {/* Free Plan Card */}
                    <Card
                        className={`w-full sm:w-80 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                        title={<h3 className="text-xl font-semibold text-blue-500"><UserAddOutlined className="text-blue-500" /> Free Plan</h3>}
                        bordered={false}
                    >
                        <div className="flex flex-col h-full">
                            <ul className="list-disc pl-6 space-y-2 flex-grow">
                                <li>Profile creation</li>
                                <li>Basic matching algorithm</li>
                                <li>Access to limited profiles</li>
                            </ul>
                            <div className="mt-auto"> {/* Ensure the button is pushed to the bottom */}
                                <PrimaryButton textSize="text-base" text="Sign Up Free" />
                            </div>
                        </div>
                    </Card>

                    {/* Standard Plan Card */}
                    <Card
                        className={`w-full sm:w-80 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                        title={<h3 className="text-xl font-semibold text-yellow-500"><StarOutlined className="text-yellow-500" /> Standard Plan</h3>}
                        bordered={false}
                    >
                        <div className="flex flex-col h-full">
                            <ul className="list-disc pl-6 space-y-2 flex-grow">
                                <li>All features of Free Plan</li>
                                <li>Unlimited profile access</li>
                                <li>Increased matching accuracy</li>
                                <li>Priority customer support</li>
                            </ul>
                            <div className="mt-auto">
                                <PrimaryButton textSize="text-base" text="Upgrade Now" />
                            </div>
                        </div>
                    </Card>

                    {/* Premium Plan Card */}
                    <Card
                        className={`w-full sm:w-80 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                        title={<h3 className="text-xl font-semibold text-purple-600"><CrownFilled className="text-purple-600" /> Premium Plan</h3>}
                        bordered={false}
                    >
                        <div className="flex flex-col h-full">
                            <ul className="list-disc pl-6 space-y-2 flex-grow">
                                <li>All features of Standard Plan</li>
                                <li>Exclusive matchmaking events</li>
                                <li>Personalized matchmaking assistance</li>
                                <li>VIP Profile Status</li>
                            </ul>
                            <div className="mt-auto">
                                <PrimaryButton textSize="text-base" text="Go Premium" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default MemberShip;
