import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../components/Spinner";


const MyWatchList = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user's info
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user's watchList
    if (user) {
      fetch(`http://localhost:5000/WatchList?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setWatchList(data.data); // Set the fetched watchList data
          } else {
            console.error(data.message);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching watchList:", error);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

  if (!watchList.length) {
    return <div className="text-center mt-10">Your watchList is empty.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-red-600 mb-4 text-center sm:text-left">
        My watchList
      </h1>
      <div className="rounded-lg shadow-lg bg-white overflow-x-auto">
        <div className="p-4">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Cover</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Year</th>
                <th className="p-2 border">Genre</th>
                <th className="p-2 border">Rating</th>
                <th className="p-2 border">Added Date</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((game) => (
                <tr key={game._id} className="odd:bg-gray-50 even:bg-gray-100">
                  <td className="p-2 border">
                    <img
                      src={game.gameCover}
                      alt={game.gameTitle}
                      className="w-16 h-16 rounded"
                    />
                  </td>
                  <td className="p-2 border">{game.gameTitle}</td>
                  <td className="p-2 border">{game.publishingYear}</td>
                  <td className="p-2 border">{game.genre}</td>
                  <td className="p-2 border">{game.rating}</td>
                  <td className="p-2 border">{game.addedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWatchList;
