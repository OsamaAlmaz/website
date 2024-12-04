import React from 'react';

const EnvironmentalSolutionPage = () => {
  const solutions = [
    {
      title: 'Sports Arena Cleaning',
      description:
        'Comprehensive cleaning for sports arenas, ensuring clean seating areas, locker rooms, and playing surfaces for athletes and fans.',
      icon: '🏟️',
    },
    {
      title: 'Ice Rink Cleaning',
      description:
        'Maintain pristine ice surfaces and surrounding areas with specialized cleaning solutions for hockey and skating rinks.',
      icon: '❄️',
    },
    {
      title: 'Eco-Friendly Waste Management',
      description:
        'Implement sustainable waste management practices, including recycling and proper disposal of hazardous materials.',
      icon: '♻️',
    },
    {
      title: 'Outdoor Event Cleaning',
      description:
        'Clean up outdoor spaces after concerts, festivals, and sports events, ensuring no trace is left behind.',
      icon: '🌳',
    },
    {
      title: 'Environmental Hazard Cleanup',
      description:
        'Tackle environmental hazards like spills or biohazards with professional cleanup services.',
      icon: '☣️',
    },
    {
      title: 'Restroom and Facility Cleaning',
      description:
        'Ensure spotless and hygienic restrooms and facilities for a safe and comfortable environment.',
      icon: '🚻',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Environmental Cleaning Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Our specialized environmental cleaning solutions are designed to meet
          the demands of sports venues, outdoor events, and environmentally
          sensitive areas.
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
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Contact Us for Environmental Cleaning
        </a>
      </div>
    </div>
  );
};

export default EnvironmentalSolutionPage;
