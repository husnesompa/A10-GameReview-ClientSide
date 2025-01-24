
import React, { useContext } from "react";
import { useForm } from "react-hook-form"; // Optional
import { AuthContext } from '../Providers/AuthProvider'; //Replace with your context file
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddReview = () => {
    const { user } = useContext(AuthContext); //Replace with your user context
    const { register, handleSubmit, reset } = useForm(); //Optional form management

    const onSubmit = (data) => {
        const reviewData = {
            gameCoverImage: data.gameCoverImage,
            gameTitle: data.gameTitle,
            reviewDescription: data.reviewDescription,
            rating: Number(data.rating),
            publishingYear: data.publishingYear,
            genre: data.genre,
            userEmail: user.email,
            userName: user.name,
        };

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    toast.success("Review added successfully!");
                    reset(); // Clear the form
                } else {
                    toast.error("Failed to add review. Try again.");
                }
            })
            .catch((err) => toast.error("An error occurred. Please try again."));

    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add a New Game Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-semibold">Game Cover Image URL</label>
                    <input
                        type="url"
                        {...register("gameCoverImage", { required: true })}
                        placeholder="Enter the cover image URL"
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Game Title</label>
                    <input
                        type="text"
                        {...register("gameTitle", { required: true })}
                        placeholder="Enter the game title"
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Review Description</label>
                    <textarea
                        {...register("reviewDescription", { required: true })}
                        placeholder="Write your detailed review here"
                        className="w-full border rounded p-2 h-32"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Rating</label>
                    <input
                        type="number"
                        {...register("rating", { required: true, min: 1, max: 10 })}
                        placeholder="Enter rating (1-10)"
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Publishing Year</label>
                    <input
                        type="number"
                        {...register("publishingYear", { required: true })}
                        placeholder="Enter the publishing year"
                        className="w-full border rounded p-2"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Genres</label>
                    <select
                        {...register("genre", { required: true })}
                        className="w-full border rounded p-2"
                    >
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Sports">Sports</option>
                        <option value="Strategy">Strategy</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">User Email</label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full border rounded p-2 bg-gray-200"
                    />
                </div>
                <div>
                    <label className="block font-semibold">User Name</label>
                    <input
                        type="text"
                        value={user?.name || ""}
                        readOnly
                        className="w-full border rounded p-2 bg-gray-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
