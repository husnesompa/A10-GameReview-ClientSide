import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    const slides = [
        {
            title: "New MMORPG coming this summer",
            category: "MMORPG",
            image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Watch the new Star Wars Battlefront trailer",
            category: "Xbox One",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Explore Witcher 3's huge open world",
            category: "Xbox One",
            image: "https://cdn.pixabay.com/photo/2023/07/24/08/28/ai-generated-8146559_640.png",
        },
        {
            title: "New MMORPG coming this summer",
            category: "MMORPG",
            image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Watch the new Star Wars Battlefront trailer",
            category: "Xbox One",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWV8ZW58MHx8MHx8fDA%3D",
        },
    ];

    return (

        <Swiper
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            spaceBetween={0} // Removes gap between slides
            loop={true}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {slides.map((slide, index) => (

                <SwiperSlide key={index}>
                    <div
                        className="relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})`, height: '300px' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                            {/* Category Label */}
                            <span className="text-sm text-white bg-red-600 px-3 py-1 rounded-md inline-block w-auto self-start">
                                {slide.category}
                            </span>
                            {/* Title */}
                            <h3 className="text-white text-lg font-bold">{slide.title}</h3>
                            {/* Admin Text */}
                            <span className="text-gray-300 text-sm">by admin</span>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
};

export default Banner;
