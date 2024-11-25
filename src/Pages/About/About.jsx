import React, {useState, useEffect} from 'react';

export default function AboutPage(){
    
    const fullText = ' We are committed to excellence and providing the best solutions for our customers.';
    

    return (
<div className="bg-white mb-32">
      <header className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">{fullText}</p>
        </div>
      </header>

      <main className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Our journey began with a passion for innovation and a dedication to our customers. Over the years, we have expanded our capabilities to deliver exceptional services and products tailored to the needs of our diverse clientele.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                {/* You can replace with an icon component */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">Commitment to quality and customer satisfaction.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">Innovation that drives progress and results.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">Integrity in all our interactions.</p>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Meet Our Team</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-300" /> {/* Placeholder for image */}
              <h3 className="mt-6 text-lg font-medium text-gray-900">Yahya Al Mazloum</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-300" /> {/* Placeholder for image */}
              <h3 className="mt-6 text-lg font-medium text-gray-900">Aiman Al Mazloum</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-300" /> {/* Placeholder for image */}
              <h3 className="mt-6 text-lg font-medium text-gray-900">Osama Al Mazloum</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    )
}