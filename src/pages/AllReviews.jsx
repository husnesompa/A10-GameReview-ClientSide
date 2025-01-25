import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews(data.data);
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

    if (loading) {
        return <div className="text-center mt-10">Loading reviews...</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">All Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div
                        key={review._id}
                        className="border rounded-lg shadow-lg p-4 bg-white"
                    >
                        <img
                            src={review.gameCoverImage}
                            alt={review.gameTitle}
                            className="h-40 w-full object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{review.gameTitle}</h3>
                        <p className="text-gray-600 mt-2 line-clamp-2">
                            {review.reviewDescription}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="font-medium text-blue-600">
                                Rating: {review.rating}/5
                            </p>
                            <Link

                                to={`/review/${review._id}`}
                                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                            >
                                Explore Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllReviews;