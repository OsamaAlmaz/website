import React from 'react';

const ContaminationSolutionPage = () => {
  const solutions = [
    {
      title: 'Hazardous Spill Cleanup',
      description:
        'Safely handle and remove hazardous spills, including chemical, oil, and biohazardous waste, with our professional cleanup services.',
      icon: '☣️',
    },
    {
      title: 'Mold Remediation',
      description:
        'Effectively eliminate mold contamination from your home or workplace to ensure a safe and healthy environment.',
      icon: '🦠',
    },
    {
      title: 'Industrial Contamination Control',
      description:
        'Maintain safety in industrial facilities by addressing contamination risks from hazardous materials and chemicals.',
      icon: '🏭',
    },
    {
      title: 'Food Safety Sanitization',
      description:
        'Protect your food production and handling facilities with specialized cleaning solutions to prevent cross-contamination.',
      icon: '🍽️',
    },
    {
      title: 'Water Contamination Cleanup',
      description:
        'Address water contamination issues, from sewage backups to polluted water sources, ensuring safe and clean environments.',
      icon: '💧',
    },
    {
      title: 'Airborne Contamination Control',
      description:
        'Mitigate the spread of airborne contaminants with advanced cleaning techniques and filtration solutions.',
      icon: '🌬️',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Contamination Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We offer comprehensive contamination cleaning and control services to
          protect your environment from harmful substances. Explore our
          specialized solutions for homes, businesses, and industrial spaces.
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
  );
};

export default ContaminationSolutionPage;
