import React from 'react';

const FoodPlantSolutionPage = () => {
  const solutions = [
    {
      title: 'Processing Equipment Cleaning',
      description:
        'Ensure food safety and efficiency with our specialized cleaning for processing equipment, including conveyors and mixers.',
      icon: '🍴',
    },
    {
      title: 'Sanitary Drain Cleaning',
      description:
        'Keep your drains free from buildup and contamination with our professional sanitary drain cleaning services.',
      icon: '🚿',
    },
    {
      title: 'Deep Floor Cleaning',
      description:
        'Maintain a hygienic workspace with deep cleaning solutions for floors, tailored to handle grease and grime.',
      icon: '🧹',
    },
    {
      title: 'High-Pressure Sanitization',
      description:
        'Thoroughly sanitize surfaces and equipment with high-pressure cleaning, ensuring compliance with food safety standards.',
      icon: '🚿',
    },
    {
      title: 'Storage Facility Cleaning',
      description:
        'Prevent cross-contamination and ensure freshness with our cleaning services for cold storage and warehouses.',
      icon: '❄️',
    },
    {
      title: 'Pest Prevention Cleaning',
      description:
        'Reduce the risk of pest infestations with cleaning techniques designed to eliminate food residue and attractants.',
      icon: '🐜',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Food Plant Cleaning Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Maintain the highest standards of hygiene and food safety with our
          tailored cleaning solutions for food processing plants and facilities.
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
          Contact Us for a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default FoodPlantSolutionPage;
