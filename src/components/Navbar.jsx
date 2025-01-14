import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaTwitch, FaRss } from "react-icons/fa";
const Navbar = () => {
    return (
        <header className="bg-gray-900 text-white">
            {/* Top Section: Logo and Banner */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="text-3xl font-bold tracking-wide">8-Bit-Opinion</div>

                {/* Banner Spot */}
                <div className="mt-4 md:mt-0">
                    <div className="bg-gray-700 w-[728px] h-[90px] flex items-center justify-center text-sm text-gray-400">
                        <img />
                    </div>
                </div>
            </div>

            {/* Bottom Navbar Section */}
            <nav className="bg-gray-800">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
                    {/* Navigation Links */}
                    <ul className="flex flex-wrap items-center space-x-6 text-sm font-sans uppercase">
                        <li className="cursor-pointer">
                            <a
                                href="#home"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Home
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#features"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Features
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#news"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                News
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#reviews"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Reviews
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#videos"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Videos
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#shop"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Shop
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="#contact"
                                className="hover:text-orange-600 hover:underline hover:decoration-2 hover:decoration-orange-500"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-orange-600">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaYoutube />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaTwitch />
                        </a>
                        <a href="#" className="hover:text-orange-600">
                            <FaRss />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;