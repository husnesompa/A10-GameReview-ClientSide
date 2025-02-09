import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaRss, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white">
                {/* Main Footer Section */}
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl sm:text-4xl font-bold tracking-wide text-center md:text-left mb-4 md:mb-0">
                        8-bit-Opinion
                    </div>

                    {/* Stay Connected + Icons */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <p className="text-sm uppercase font-semibold text-center md:text-left">
                            Stay Connected
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
                            <a href="#" className="hover:text-gray-400">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaYoutube size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaTwitch size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <FaRss size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        {/* Left: Copyright */}
                        <div className="text-sm text-gray-400 text-center md:text-left mb-2 md:mb-0">
                            Copyright 2025@Husna_Sompa$$8-bit-opinion Inc. - All Rights Reserved.
                        </div>

                        {/* Right: Navbar Links */}
                        <div className="flex justify-center md:justify-end space-x-4 text-sm text-gray-400">
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