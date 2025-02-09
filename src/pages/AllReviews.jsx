import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("");
    const [genreFilter, setGenreFilter] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews(data.data);
                    setFilteredReviews(data.data); // Initialize filtered reviews
                } else {
                    console.error("Failed to fetch reviews");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);



    const handleSort = (option) => {
        setSortOption(option);
        let sortedReviews = [...filteredReviews];

        if (option === "rating") {
            sortedReviews.sort((a, b) => b.rating - a.rating); // Descending Order
        } else if (option === "year") {
            sortedReviews.sort((a, b) => b.year - a.year); // Descending Order
        }

        setFilteredReviews(sortedReviews);
    };



    // Filtering Function (By Genre)
    const handleFilter = (genre) => {
        setGenreFilter(genre);
        if (genre === "") {
            setFilteredReviews(reviews); // Show all if no filter is applied
        } else {
            setFilteredReviews(reviews.filter((review) => review.genre === genre));
        }
    };

    // Extract unique genres from the reviews
    const genres = [...new Set(reviews.map((review) => review.genre))];

    if (loading) {
        // return <Spinner />;
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Lottie animationData={loadingAnimation} loop={true} className="w-32" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                All Reviews
            </h2>

            {/* Sorting & Filtering Dropdowns */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 gap-4">
                {/* Sort Dropdown */}
                <select
                    onChange={(e) => handleSort(e.target.value)}
                    value={sortOption}
                    className="p-2 border rounded-md w-full sm:w-48 bg-white shadow-md focus:outline-none"
                >
                    <option value="">Sort by</option>
                    <option value="rating">Rating (High to Low )</option>
                    <option value="year">Year (Oldest to Newest)</option>
                </select>

                {/* Filter Dropdown (By Genre) */}
                <select
                    onChange={(e) => handleFilter(e.target.value)}
                    value={genreFilter}
                    className="p-2 border rounded-md w-full sm:w-48 bg-white shadow-md focus:outline-none"
                >
                    <option value="">Filter by Genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                        <div
                            key={review._id}
                            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={review.gameCoverImage}
                                alt={review.gameTitle}
                                className="h-40 w-full object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                {review.gameTitle}
                            </h3>
                            <p className="text-gray-600 mt-2 line-clamp-2">
                                {review.reviewDescription}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <p className="font-medium text-orange-500">
                                    Rating: {review.rating}/5
                                </p>
                                <Link
                                    to={`/review/${review._id}`}
                                    className="text-white bg-red-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-all duration-300"
                                >
                                    Explore Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-3">
                        No reviews found
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllReviews;
