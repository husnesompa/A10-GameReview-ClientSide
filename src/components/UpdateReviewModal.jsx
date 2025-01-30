import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateReviewModal = ({ review, onClose, onUpdate }) => {
    // console.log("sompa review",review);
    const [formData, setFormData] = useState({
        gameTitle: review.gameTitle,
        reviewDescription: review.reviewDescription,
        rating: review.rating,
        genre: review.genre,
        userName: review.userName,
        userEmail: review.userEmail,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/review/${review._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Review updated successfully!");
                    onUpdate(); // Notify parent to refresh data
                    onClose(); // Close modal
                } else {
                    toast.error(data.message || "Failed to update the review.");
                }
            })
            .catch((error) => {
                console.error("Error updating review:", error);
                toast.error("An error occurred while updating the review.");
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                <h2 className="text-xl font-bold text-red-600 mb-4">Update Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"
                            value={formData.gameTitle}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Description</label>
                        <textarea
                            name="reviewDescription"
                            value={formData.reviewDescription}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleInputChange}
                            min="1"
                            max="10"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            readOnly
                            className="w-full p-2 border bg-gray-100 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            readOnly
                            className="w-full p-2 border bg-gray-100 rounded"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReviewModal;
