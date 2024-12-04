import React from 'react';

export default function SanitizationSolutionPage(){
    const solutions = [
        {
          title: 'Office Sanitization',
          description:
            'Ensure a clean and germ-free workspace with our professional office sanitization services tailored for businesses of all sizes.',
          icon: '🏢',
        },
        {
          title: 'Home Sanitization',
          description:
            'Keep your home safe and sanitized with our specialized home cleaning and disinfection services.',
          icon: '🏠',
        },
        {
          title: 'Industrial Sanitization',
          description:
            'Maintain hygiene in your industrial spaces with our heavy-duty sanitization solutions for factories and warehouses.',
          icon: '🏭',
        },
        {
          title: 'Medical Facility Sanitization',
          description:
            'Protect patients and staff with our sanitization services for hospitals, clinics, and healthcare facilities.',
          icon: '🏥',
        },
        {
          title: 'Event Venue Sanitization',
          description:
            'Prepare for safe gatherings with our sanitization services for event venues and conference halls.',
          icon: '🎉',
        },
        {
          title: 'Transportation Sanitization',
          description:
            'Sanitize vehicles, public transport, and fleets to ensure safe travel for passengers and employees.',
          icon: '🚍',
        },
    ];

    return (
        <div className='bg-gray-50 py-12 px-6 mt-16'>
            <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Sanitization Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our wide range of sanitization solutions designed to create
          safe and hygienic environments. Whether it’s your home, office, or
          industrial space, we have the right solution for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">{solution.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {solution.title}
            </h2>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us for a Free Quote
        </a>
      </div>

        </div>
    )
    

    
}