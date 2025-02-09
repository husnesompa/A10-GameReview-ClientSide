
import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames ';
import { useState, useEffect } from "react";
import MeetTheMembers from '../components/MeetTheMembers';
import Contact from '../components/Contact';

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
            {/* Toggle Switch UI */}
            <div className="flex justify-end p-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium">
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </span>
                </label>
            </div>

            <Banner />
            <HighestRatedGames />
            <MeetTheMembers />
            <Contact />
        </div>
    );
};

export default Home;
