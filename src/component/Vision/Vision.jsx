import React from 'react';


export default function VisionSection(){
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between md:px-16  md:py-20">
            {/* Left Section with Bold Headline */}
            <div className="md:w-1/2 mb-6 md:mb-0 px-3">
                <h2 className="text-base md:text-2xl lg:text-3xl font-bold text-blue-800">
                    Our vision is to be the world-leading provider of facility services & solutions
                </h2>
            </div>

            {/* Right Section with Description Text */}
            <div className="md:w-1/2 text-gray-700 px-3">
                <p>
                Spark Cleaning Integrated Facility Services is your single source for comprehensive facilities maintenance and commercial cleaning across North America. Partnering with Spark Cleaning means you benefit from our commitment to consistently delivering high-quality, reliable facility services and innovative solutions that meet your needs and standards.
                </p>
            </div>
        </div>
    );
}