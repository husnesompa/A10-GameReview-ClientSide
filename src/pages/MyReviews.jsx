import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import UpdateReviewModal from "../components/UpdateReviewModal";
import Spinner from "../components/Spinner";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedReview, setSelectedReview] = useState(null); // For updating purpose 

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myReviews?email=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setMyReviews(data.data);
                    } else {
                        toast.error(data.message || "Failed to load reviews.");
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching reviews:", error);
                    toast.error("An error occurred.");
                    setLoading(false);
                });
        }
    }, [user]);

    const handleUpdateClick = (id) => {
        const selectedReview = myReviews.find((review) => review._id === id); // Find the review by ID
        setSelectedReview(selectedReview); // Set the selected review for the modal
    };


    const handleUpdateSuccess = () => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMyReviews(data.data);
                } else {
                    toast.error(data.message || "Failed to load reviews.");
                }
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
                toast.error("An error occurred.");
            });
    };





    const handleDelete = (id) => {
        console.log("deleted id", id);
        const confirmDelete = window.confirm("Are you sure you want to delete this review?");
        if (confirmDelete) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        // Update the state to reflect the deletion immediately
                        const updatedReviews = myReviews.filter((review) => review._id !== id);
                        setMyReviews(updatedReviews);
                        toast.success("Review deleted successfully!");
                    } else {
                        toast.error(data.message || "Failed to delete the review.");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting review:", error);
                    toast.error("An error occurred while deleting the review.");
                });
        }
    };


    if (loading) {
        return <Spinner/>;
    }

    if (!myReviews.length) {
        return <div className="text-center mt-10">You have no reviews.</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-red-600 mb-4 text-center sm:text-left">
                My Reviews
            </h1>
            <div className="rounded-lg shadow-lg bg-white overflow-x-auto">
                {/* Added `overflow-x-auto` for better handling of small screens */}
                <div className="p-4">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 border text-sm md:text-base">Title</th>
                                <th className="p-2 border text-sm md:text-base">Rating</th>
                                <th className="p-2 border text-sm md:text-base">Description</th>
                                <th className="p-2 border text-sm md:text-base">Type</th>
                                <th className="p-2 border text-sm md:text-base">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myReviews.map((review) => (
                                <tr key={review._id} className="odd:bg-gray-50 even:bg-gray-100">
                                    <td className="p-2 border text-xs sm:text-sm md:text-base">
                                        {review.gameTitle}
                                    </td>
                                    <td className="p-2 border text-xs sm:text-sm md:text-base">
                                        {review.rating}
                                    </td>
                                    <td className="p-2 border text-xs sm:text-sm md:text-base">
                                        {review.reviewDescription}
                                    </td>
                                    <td className="p-2 border text-xs sm:text-sm md:text-base">
                                        {review.genre}
                                    </td>
                                    <td className="p-2 border flex flex-col sm:flex-row gap-2 justify-center">
                                        {/* Buttons stack vertically on smaller screens */}
                                        <button
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-600 text-xs sm:text-sm"
                                            onClick={() => handleUpdateClick(review._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-xs sm:text-sm"
                                            onClick={() => handleDelete(review._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {
                        selectedReview && (
                            <UpdateReviewModal
                                review={selectedReview}
                                onClose={() => setSelectedReview(null)}
                                onUpdate={handleUpdateSuccess}
                            />
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default MyReviews;
