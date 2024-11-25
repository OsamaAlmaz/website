import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const slides = [
    { image: "https://jan-pro.ca/app/uploads/2023/10/Equipment-needed-VF-2880x1620-1-scaled.jpg", text: "Professional solutions for clean environments." },
    { image: "https://www.enviropurehome.com/wp-content/uploads/2022/02/shutterstock_564110662.jpg", text: "One provider. One solution. All of your facility service needs." },
    { image: "https://cdn.prod.website-files.com/5a4be71aa12183000115e62c/62f8f9fe3280f285537b2606_cleaning.webp", text: "Your reliable partner in facility maintenance." },
    
];

export default function Carousel({scrollToServices}) {
    const [current, setCurrent] = useState(0);
    const [showOverlay, setShowOverlay] = useState(true);
    const navigate = useNavigate();
    
    // Auto-slide using setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [current]); // Reset interval on slide change
    // Show overlay with a delay after each slide change
    useEffect(() => {
        const overlayTimeout = setTimeout(() => {
            setShowOverlay(true);
        }, 500); // 1 second delay

        return () => clearTimeout(overlayTimeout);
    }, [current]);

    const previousSlide = () => {
        setShowOverlay(false);
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setShowOverlay(false);
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="overflow-hidden relative w-full h-[700px]">
            <div
                className="flex transition-transform ease-out duration-700"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img
                        key={index}
                        src={s.image}
                        className="w-full h-full object-cover"
                        style={{ flex: '0 0 100%' }}
                        alt="Slide"
                    />
                ))}
            </div>
            {/* Overlay Text and Buttons */}
            {showOverlay && (
                <div className="absolute left-10 top-1/3 bg-gray-900 bg-opacity-70 text-white p-6 rounded-lg max-w-md transition-opacity duration-500 z-10">
                    <h1 className="text-2xl font-bold mb-4">{slides[current].text}</h1>
                    <div className="flex space-x-4">
                        {/* Use the scrollToServices function to scroll to the Services section */}
                        <button 
                            onClick={scrollToServices}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
                            Our Services
                        </button>
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}


            {/* Navigation Arrows */}
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowAltCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowAltCircleRight />
                </button>
            </div>

            {/* Dots for Carousel Navigation */}
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, index) => (
                    <div
                        onClick={() => {
                            setCurrent(index);
                        }}
                        key={'circle' + index}
                        className={`rounded-full w-5 h-5 cursor-pointer ${
                            index === current ? "bg-white" : "bg-gray-500"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
