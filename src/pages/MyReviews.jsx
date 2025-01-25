import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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

//   const handleUpdate = (id) => {
//     // Navigate to an update form page or display a modal for editing the review
//     console.log(`Update review with id: ${id}`);
//   };

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this review?");
//     if (confirmDelete) {
//       fetch(`http://localhost:5000/reviews/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.success) {
//             setMyReviews(myReviews.filter((review) => review._id !== id));
//             toast.success("Review deleted successfully!");
//           } else {
//             toast.error("Failed to delete the review.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error deleting review:", error);
//           toast.error("An error occurred while deleting the review.");
//         });
//     }
//   };

  if (loading) {
    return <div className="text-center mt-10">Loading reviews...</div>;
  }

  if (!myReviews.length) {
    return <div className="text-center mt-10">You have no reviews.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">My Reviews</h1>

      <div className="rounded-lg shadow-lg bg-white">
        <div className="p-4">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Rating</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review) => (
                <tr key={review._id} className="odd:bg-gray-50 even:bg-gray-100">
                  <td className="p-2 border">{review.gameTitle}</td>
                  <td className="p-2 border">{review.rating}</td>
                  <td className="p-2 border">{review.reviewDescription}</td>
                  <td className="p-2 border">{review.genre}</td>
                  <td className="p-2 border flex gap-2">
                    {/* <button
                      className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                      onClick={() => handleUpdate(review._id)}
                    > */}
                     <button
                      className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                      >
                      Update
                    </button>
                    {/* <button
                      className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                      onClick={() => handleDelete(review._id)}
                    > */}
                        <button
                      className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                      
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
