import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../components/Spinner";


const ReviewDetails = () => {
    const { id } = useParams();

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Review ID from daata:", id);
                if (data.success) {
                    setReview(data.data);
                } else {
                    toast.error("Review not found.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching review:", error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToWatchList = () => {
        if (!user) {
            toast.error("Please log in to add to the watchlist.");
            return;
        }

        const watchListData = {
            reviewId: review._id,
            gameTitle: review.gameTitle,
            userEmail: user.email,
            userName: user.name,
        };

        fetch("http://localhost:5000/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(watchListData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    toast.success("Added to Watchlist!");
                } else {
                    toast.error("Failed to add to Watchlist.");
                }
            })
            .catch((error) => {
                console.error("Error adding to watchlist:", error);
                toast.error("An error occurred.");
            });
    };

    if (loading) {
        return <Spinner/> ;
    }

    if (!review) {
        return <div className="text-center mt-10">Review not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md p-6 rounded-lg">
                <img
                    src={review.gameCoverImage}
                    alt={review.gameTitle}
                    className="w-full md:w-1/3 object-cover rounded-lg"
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">{review.gameTitle}</h2>
                    <p className="text-gray-600 mt-2">{review.reviewDescription}</p>
                    <p className="mt-4">
                        <span className="font-medium">Rating:</span> {review.rating}/5
                    </p>
                    <p>
                        <span className="font-medium">Genre:</span> {review.genre}
                    </p>
                    <p>
                        <span className="font-medium">Publishing Year:</span> {review.publishingYear}
                    </p>
                    <p className="mt-4">
                        <span className="font-medium">Reviewer:</span> {review.userName} ({review.userEmail})
                    </p>
                    <button
                        onClick={handleAddToWatchList}
                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >

                        Add to WatchList
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ReviewDetails;