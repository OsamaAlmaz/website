import React from 'react';

const ComprehensiveSolutionPage = () => {
  const solutions = [
    {
      title: 'Pre-Event Preparation Cleaning',
      description:
        'Prepare your venue with detailed cleaning before the event. We ensure a spotless environment for players, staff, and spectators.',
      icon: '🧹',
    },
    {
      title: 'Post-Event Deep Cleaning',
      description:
        'Efficiently handle all post-event cleaning tasks, including waste removal and deep cleaning of facilities.',
      icon: '🗑️',
    },
    {
      title: 'Ice Rink Cleaning and Maintenance',
      description:
        'Specialized cleaning services to maintain pristine ice surfaces for hockey games and skating events.',
      icon: '❄️',
    },
    {
      title: 'Locker Room Sanitization',
      description:
        'Ensure hygiene and safety for athletes with thorough cleaning and sanitization of locker rooms.',
      icon: '🏒',
    },
    {
      title: 'Spectator Seating Cleaning',
      description:
        'Keep stands and spectator areas clean and welcoming with our tailored cleaning solutions.',
      icon: '🏟️',
    },
    {
      title: 'Restroom and Facility Cleaning',
      description:
        'Provide a clean and hygienic experience with professional restroom cleaning for high-traffic events.',
      icon: '🚻',
    },
    {
      title: 'Concession Stand Cleaning',
      description:
        'Maintain cleanliness and hygiene in food preparation and serving areas for a safe dining experience.',
      icon: '🍔',
    },
    {
      title: 'Eco-Friendly Waste Management',
      description:
        'Implement sustainable practices for waste collection, recycling, and disposal during and after events.',
      icon: '♻️',
    },
    {
      title: 'Emergency Cleanup Services',
      description:
        'Handle unexpected spills, biohazards, and other emergencies swiftly and professionally.',
      icon: '🚨',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Comprehensive Cleaning Solutions for Sports Events
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          From hockey arenas to large-scale sports venues, we offer a complete
          range of cleaning solutions to keep your event spaces clean, safe, and
          ready for action.
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
          Contact Us for Comprehensive Solutions
        </a>
      </div>
    </div>
  );
};

export default ComprehensiveSolutionPage;
