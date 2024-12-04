import React from 'react';

const SpecializedServicePage = () => {
  const services = [
    {
      title: 'Artificial Turf Cleaning',
      description:
        'Thoroughly clean and disinfect artificial turf fields to ensure a safe playing surface for athletes.',
      icon: '🌱',
    },
    {
      title: 'Stadium Pressure Washing',
      description:
        'Deep clean stadium exteriors, entrances, and high-traffic areas with high-pressure washing.',
      icon: '🚿',
    },
    {
      title: 'Scoreboard and Equipment Maintenance',
      description:
        'Specialized cleaning and maintenance of scoreboards, lighting systems, and electronic equipment.',
      icon: '📟',
    },
    {
      title: 'Outdoor Track and Field Cleaning',
      description:
        'Keep running tracks, jumping pits, and field equipment clean and competition-ready.',
      icon: '🏃‍♂️',
    },
    {
      title: 'VIP Suite and Lounge Cleaning',
      description:
        'Provide premium cleaning services for VIP suites and lounges, ensuring a luxurious experience for guests.',
      icon: '🎩',
    },
    {
      title: 'Training Facility Disinfection',
      description:
        'Clean and disinfect athlete training facilities, including weight rooms and rehabilitation areas.',
      icon: '🏋️‍♀️',
    },
    {
      title: 'Parking Lot and Entrance Cleanup',
      description:
        'Maintain clean and safe parking lots and entrances for event attendees and staff.',
      icon: '🚗',
    },
    {
      title: 'Indoor Air Quality Control',
      description:
        'Reduce airborne contaminants and ensure fresh air in enclosed arenas with advanced air purification techniques.',
      icon: '💨',
    },
    {
      title: 'Special Event Setup Cleaning',
      description:
        'Ensure venues are spotless and ready for concerts, corporate events, or special ceremonies.',
      icon: '🎤',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Specialized Cleaning Services for Sports and Events
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our unique and specialized cleaning solutions tailored for
          sports venues, event spaces, and high-traffic facilities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us for Specialized Services
        </a>
      </div>
    </div>
  );
};

export default SpecializedServicePage;
