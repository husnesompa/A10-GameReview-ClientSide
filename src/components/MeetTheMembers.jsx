import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const MeetTheMembers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://a10-assignment-game-review-application-server-side.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setUsers(data.data);
                } else {
                    console.error("Failed to fetch Users");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className=" text-white">
            <div className="container mx-auto p-6">
                <h2 className="text-center text-3xl font-bold mb-8 text-red-600">Meet the Members</h2>

                {loading ? (
                    <p className="text-center text-gray-400">Loading...</p>
                ) : users.length > 0 ? (
                    <Slider {...settings}>
                        {users.map((user, index) => (
                            <div key={user._id || index} className="flex flex-col items-center justify-center text-center p-4">
                                <img
                                    src={user.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmJt4GxnQwQQxfqHxJ2WRdSFD0NhArBo-DQ&s"}
                                    alt={user.name}
                                    className="w-32 h-32 rounded-full mb-4 object-cover mx-auto"
                                />
                                <h3 className="text-xl font-semibold">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-500">No reviewers found.</p>
                )}
            </div>
        </div>
    );
};

export default MeetTheMembers;