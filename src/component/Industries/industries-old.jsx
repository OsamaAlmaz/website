import React, { useState, useEffect } from 'react';

const industries = [
    {name: "Commercial", imageUrl: 'https://images.squarespace-cdn.com/content/v1/591641675016e1ac9984f2db/1496422270787-N1AR8YOCDDAUCAESE2OL/image-asset.jpeg'},
    {name: "Educational", imageUrl: "https://thumbs.dreamstime.com/b/harvard-library-entrance-columns-doors-13000802.jpg"},
    {name: "Industrial", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sxOb9-lOlvvAB7MGBoBZ4e90TW-jB3uQSE3MjAgPM8Hfqzhh5M7iOv6mxzaRKRwCM9Y&usqp=CAU"},
    {name: "Institutional", imageUrl: "https://media.bazaarvoice.com/Shutterstock_1459669151-1.png"},
    {name: "Hospitality", imageUrl: "https://media.istockphoto.com/id/1283271838/photo/conference-hall.jpg?s=612x612&w=0&k=20&c=WIEkkW9ejw5czSyf-7cfWCveTCf2TaoZKG36op3bvfw="},
    {name: "Healthcare", imageUrl: "https://cdn.prod.website-files.com/5f9991f36e1e75902fb25d47/6400e424713ebf7821e60563_Blog-Body-Image.jpg"},
    {name: "Aviation", imageUrl: "https://media.istockphoto.com/id/1137400812/photo/front-view-of-landed-airplane-in-istanbul-international-airport.jpg?s=612x612&w=0&k=20&c=PBarns1wUGJm7b3_mkQoyqh0Q27NoRa7ROtfuImiw00="},
    {name: "Recreational", imageUrl: "https://s7d2.scene7.com/is/image/TWCNews/Chargers_Chiefs_Football_06312"},
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // Number of items to display at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 8000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? industries.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-700"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
          >
            {industries.map((industry, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <img
                  src={industry.imageUrl}
                  alt={industry.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-lg font-medium">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {industries.map((_, index) => (
          <div
            onClick={()=>{
                setCurrentIndex(index);
            }}
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
