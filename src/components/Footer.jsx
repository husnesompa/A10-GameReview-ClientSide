import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaRss, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white">
                {/* Main Footer Section */}
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo */}
                    <div className="text-4xl font-bold tracking-wide text-center md:text-left mb-4 md:mb-0">
                        8-bit-Opinion
                    </div>

                    {/* Stay Connected + Icons */}
                    <div className="flex items-center space-x-4 md:ml-auto">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaYoutube />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaTwitch />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaRss />
                            </a>
                            <p className="text-sm uppercase font-semibold">Stay Connected</p>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer Section */}
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        {/* Left: Copyright */}
                        <div className="text-sm text-gray-400">
                            Copyright 2025@Husna_Sompa$$8-bit-opinion Inc. - All Rights Reserved.
                        </div>

                        {/* Right: Navbar Links */}
                        <div className="flex space-x-4 text-sm text-gray-400">
                            <a
                                href="#top"
                                className="text-sm text-gray-400 hover:text-white uppercase tracking-wide"
                            >
                                Back to Top ↑
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;