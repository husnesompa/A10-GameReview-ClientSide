import React, { useContext } from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaTwitch, FaRss } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Typewriter } from "react-simple-typewriter";

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
                    <div className="flex items-center justify-center text-sm text-gray-400">
                        {/* <img alt="Banner" /> */}
                        <div className="text-center py-10">
                            <h1 className="text-4xl font-bold text-red-600">
                                Welcome to <span className="text-white">8-Bit-Opinion</span>
                            </h1>
                            <p className="text-xl mt-4 text-gray-300">
                                <Typewriter
                                    words={["Find Top Players", "Get Exclusive Deals", "Explore Gaming Reviews"]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
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



            <div className="navbar bg-gray-800 text-white px-6 justify-between">


                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 uppercase">
                    <Link to="/" className="hover:text-red-600">Home</Link>
                    <Link to="/reviews" className="hover:text-red-600">All Reviews</Link>
                    <Link to="/add-review" className="hover:text-red-600">Add Review</Link>
                    <Link to="/my-reviews" className="hover:text-red-600">My Reviews</Link>
                    <Link to="/my-WatchList" className="hover:text-red-600">Game Watch List</Link>
                    <Link to="#shop" className="hover:text-red-600">Shop</Link>
                    <Link to="#contact" className="hover:text-red-600">Contact</Link>
                </div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden">
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl">
                            ☰
                        </div>
                        <div className="collapse-content bg-gray-900 text-white p-4">
                            <ul className="space-y-3 text-center">
                                <li><Link to="/" className="hover:text-red-600">Home</Link></li>
                                <li><Link to="/reviews" className="hover:text-red-600">All Reviews</Link></li>
                                <li><Link to="/add-review" className="hover:text-red-600">Add Review</Link></li>
                                <li><Link to="/my-reviews" className="hover:text-red-600">My Reviews</Link></li>
                                <li><Link to="/my-WatchList" className="hover:text-red-600">Game Watch List</Link></li>
                                <li><Link to="#shop" className="hover:text-red-600">Shop</Link></li>
                                <li><Link to="#contact" className="hover:text-red-600">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-red-600"><FaFacebook /></a>
                    <a href="https://youtube.com" className="hover:text-red-600"><FaYoutube /></a>
                    <a href="https://twitter.com" className="hover:text-red-600"><FaTwitter /></a>
                    <a href="https://instagram.com" className="hover:text-red-600"><FaInstagram /></a>
                    <a href="https://linkedin.com" className="hover:text-red-600"><FaLinkedin /></a>
                    <a href="https://twitch.tv" className="hover:text-red-600"><FaTwitch /></a>
                    <a href="https://rss.com" className="hover:text-red-600"><FaRss /></a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


