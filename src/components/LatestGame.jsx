import React from 'react';
import { Link } from 'react-router-dom';

const LatestGame = () => {
    return (
        <div className="bg-gray-900 text-white">
        {/* Latest Game News Section */}
        
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Latest Game News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                        <img src="/news1.jpg" alt="News 1" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Game Update 1.2 Released!</h3>
                        <p className="text-sm text-gray-300 mb-4">Discover the new features and fixes in the latest update...</p>
                        <Link to="/news/1" className="text-orange-500 hover:underline">Read More</Link>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                        <img src="/news2.jpg" alt="News 2" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Exciting New Game Announced!</h3>
                        <p className="text-sm text-gray-300 mb-4">A sneak peek into the most anticipated game of the year...</p>
                        <Link to="/news/2" className="text-orange-500 hover:underline">Read More</Link>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                        <img src="/news3.jpg" alt="News 3" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Esports Championship Highlights</h3>
                        <p className="text-sm text-gray-300 mb-4">Catch up on the biggest moments from the recent championship...</p>
                        <Link to="/news/3" className="text-orange-500 hover:underline">Read More</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Community Spotlight Section */}
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Community Spotlight</h2>
                <div className="flex overflow-x-scroll gap-4">
                    <div className="bg-gray-700 p-4 rounded-lg min-w-[300px]">
                        <img src="/player1.jpg" alt="Player 1" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Player of the Month: Alex</h3>
                        <p className="text-sm text-gray-300 mb-4">Achieved the highest score in 'Battle Royale' mode.</p>
                        <Link to="/community" className="text-orange-500 hover:underline">Learn More</Link>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg min-w-[300px]">
                        <img src="/player2.jpg" alt="Player 2" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Fan Art by Jamie</h3>
                        <p className="text-sm text-gray-300 mb-4">Check out this stunning artwork inspired by 'Fantasy Quest.'</p>
                        <Link to="/community" className="text-orange-500 hover:underline">Learn More</Link>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg min-w-[300px]">
                        <img src="/player3.jpg" alt="Player 3" className="rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Top Streamer: Chris</h3>
                        <p className="text-sm text-gray-300 mb-4">Join Chris on their journey to conquer 'Space Wars.'</p>
                        <Link to="/community" className="text-orange-500 hover:underline">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default LatestGame;