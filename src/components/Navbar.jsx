

import React, { useContext } from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaTwitch, FaRss } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <header className="bg-gray-900 text-white">
            {/* Top Section */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="text-3xl font-bold tracking-wide">8-Bit-Opinion</div>

                {/* Banner Spot */}
                <div className="mt-4 md:mt-0">
                    <div className="bg-gray-700 w-[228px] h-[90px] md:w-[728px] flex items-center justify-center text-sm text-gray-400">
                        <img alt="Banner" />
                    </div>
                </div>

                {/* Auth Buttons */}
                <div>
                    {user && user?.email ? (
                        <div className="flex items-center gap-2">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img
                                    src={user.photoURL || "/default-avatar.png"}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full border border-gray-500"
                                />
                            </div>
                            <button onClick={logOut} className="btn btn-sm">Log Out</button>
                        </div>
                    ) : (
                        <div className="flex flex-row gap-2">
                            <Link to="/login" className="btn btn-sm">Log In</Link>
                            <Link to="/register" className="btn btn-sm">Register</Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navbar */}
            <nav className="bg-gray-800">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
                    {/* Navigation Links */}
                    <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm font-sans uppercase">
                        <li><Link to="/" className="hover:text-red-600">Home</Link></li>
                        <li><Link to="/reviews" className="hover:text-red-600">All Reviews</Link></li>
                        {/* {user?.email && ( */}
                        <>
                            <li><Link to="/add-review" className="hover:text-red-600">Add Review</Link></li>
                            <li><Link to="/my-reviews" className="hover:text-red-600">My Reviews</Link></li>
                            <li><Link to="/my-WatchList" className="hover:text-red-600">Game Watch List</Link></li>
                        </>
                        {/* )} */}
                        <li><Link to="#shop" className="hover:text-red-600">Shop</Link></li>
                        <li><Link to="#contact" className="hover:text-red-600">Contact</Link></li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://facebook.com" className="hover:text-red-600"><FaFacebook /></a>
                        <a href="https://youtube.com" className="hover:text-red-600"><FaYoutube /></a>
                        <a href="https://twitter.com" className="hover:text-red-600"><FaTwitter /></a>
                        <a href="https://instagram.com" className="hover:text-red-600"><FaInstagram /></a>
                        <a href="https://linkedin.com" className="hover:text-red-600"><FaLinkedin /></a>
                        <a href="https://twitch.tv" className="hover:text-red-600"><FaTwitch /></a>
                        <a href="https://rss.com" className="hover:text-red-600"><FaRss /></a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
