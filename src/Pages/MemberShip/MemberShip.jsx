import React, { useEffect, useState } from 'react';
import { Card } from "antd";
import { UserAddOutlined, StarOutlined, CrownFilled } from "@ant-design/icons";
import useTheme from '../../hooks/useTheme';
import PrimaryButton from '../Buttons/PrimaryButton';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const MemberShip = () => {
    const { theme } = useTheme();
    const [inView, setInView] = useState(false);

    const handleScroll = () => {
        const rect = document.getElementById('membership-cards')?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
            setInView(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const motionVariants = {
        initial: { opacity: 0, x: 100 }, // Start off-screen to the right
        animate: {
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 100, // Slide from right to left when in view
        },
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    };

    return (
        <div className='my-20 mx-10'>
            <section className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className={`container mx-auto text-center mb-8 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    <h2 className="text-3xl font-semibold">Our Membership Plans</h2>
                    <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Choose the plan that best suits your needs and start your journey to find the perfect match!
                    </p>
                </div>

                <motion.div
                    id="membership-cards"
                    className="flex flex-wrap justify-center gap-6"
                    variants={motionVariants}
                    initial="initial"
                    animate="animate"
                    transition={motionVariants.transition}
                >
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
                            <div className="mt-auto">
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
                </motion.div>
            </section>
        </div>
    );
};

export default MemberShip;
