import React from 'react';
import { Card } from 'antd';
import { CalendarOutlined, VideoCameraOutlined, GlobalOutlined } from '@ant-design/icons';
import useTheme from '../../hooks/useTheme';

const CommunityStandards = () => {
    const { theme } = useTheme();

    return (
        <div className={`my-20 mx-10 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
            <section className={`py-12 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700' : 'bg-gradient-to-r from-indigo-100 to-indigo-300'}`}>
                <div className={`container mx-auto text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-lime-400' : 'text-gray-800'} mb-4`}>Community Events & Webinars</h2>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Dive into our vibrant community with events and webinars that are insightful, interactive, and fun!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* Event Card 1 */}
                    <Card
                        className={`w-full sm:w-80 shadow-lg rounded-lg border border-transparent ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-purple-900' : 'bg-gradient-to-r from-blue-500 to-blue-700'} hover:scale-105 transform transition duration-300`}
                        title={
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-white'} flex items-center space-x-2`}>
                                <CalendarOutlined className="text-2xl" /> <span>Upcoming Events</span>
                            </h3>
                        }
                        bordered={false}
                    >
                        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded-lg`}>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Stay ahead with the latest events and activities happening in our community. Connect, engage, and grow!
                            </p>
                            <div className="mt-4 text-center">
                                <a href="#" className={`font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>See Events</a>
                            </div>
                        </div>
                    </Card>

                    {/* Event Card 2 */}
                    <Card
                        className={`w-full sm:w-80 shadow-lg rounded-lg border border-transparent ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-indigo-900' : 'bg-gradient-to-r from-yellow-400 to-yellow-600'} hover:scale-105 transform transition duration-300`}
                        title={
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-white'} flex items-center space-x-2`}>
                                <VideoCameraOutlined className="text-2xl" /> <span>Webinars</span>
                            </h3>
                        }
                        bordered={false}
                    >
                        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded-lg`}>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Join our webinars to expand your knowledge on key industry topics and interact with global experts.
                            </p>
                            <div className="mt-4 text-center">
                                <a href="#" className={`font-medium ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'} hover:underline`}>Explore Webinars</a>
                            </div>
                        </div>
                    </Card>

                    {/* Event Card 3 */}
                    <Card
                        className={`w-full sm:w-80 shadow-lg rounded-lg border border-transparent ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-teal-900' : 'bg-gradient-to-r from-purple-500 to-purple-700'} hover:scale-105 transform transition duration-300`}
                        title={
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-white'} flex items-center space-x-2`}>
                                <GlobalOutlined className="text-2xl" /> <span>Global Community</span>
                            </h3>
                        }
                        bordered={false}
                    >
                        <div className={` ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded-lg`}>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Join a global network of like-minded individuals in our virtual events. Let's break borders and connect!
                            </p>
                            <div className="mt-4 text-center">
                                <a href="#" className={`font-medium ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} hover:underline`}>Join the Community</a>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default CommunityStandards;
