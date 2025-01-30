
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HighestRatedGames = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/highest-rated-games")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setGames(data.data);
                } else {
                    console.error("Failed to fetch highest-rated games");
                }
            })
            .catch((error) => {
                console.error("Error fetching highest-rated games:", error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-red-600 mb-6">
                Highest Rated Games
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <div
                        key={game._id}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
                    >
                        <h2 className="text-xl font-semibold mb-2">{game.gameTitle}</h2>
                        <p className="text-gray-600 mb-4">{game.reviewDescription}</p>
                        <p className="text-red-600 font-bold mb-4">
                            Rating: {game.rating}
                        </p>
                        <Link

                            to={`/review/${game._id}`}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Explore Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighestRatedGames;
