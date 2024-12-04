import React from 'react';

const EventSolutionPage = () => {
  const solutions = [
    {
      title: 'Pre-Event Cleaning',
      description:
        'Prepare your venue for success with thorough cleaning before the event, ensuring a pristine environment for guests.',
      icon: '🧹',
    },
    {
      title: 'Post-Event Cleanup',
      description:
        'Efficiently handle all post-event cleaning needs, from waste removal to deep cleaning, leaving the venue spotless.',
      icon: '🗑️',
    },
    {
      title: 'Locker Room Sanitization',
      description:
        'Ensure hygiene and safety with our specialized cleaning services for locker rooms and athlete facilities.',
      icon: '🏒',
    },
    {
      title: 'Spectator Area Cleaning',
      description:
        'Keep seating areas clean and welcoming with detailed cleaning services for bleachers, stands, and VIP sections.',
      icon: '🏟️',
    },
    {
      title: 'Ice Rink Maintenance',
      description:
        'Maintain the quality and cleanliness of ice rinks with our advanced cleaning and maintenance services.',
      icon: '❄️',
    },
    {
      title: 'Restroom Cleaning',
      description:
        'Provide a clean and comfortable experience for attendees with our restroom cleaning and sanitization services.',
      icon: '🚻',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Event Cleaning Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          From sports arenas to concert venues, our event cleaning solutions
          ensure a clean and welcoming environment before, during, and after
          your events.
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
          Contact Us for Event Cleaning
        </a>
      </div>
    </div>
  );
};

export default EventSolutionPage;
