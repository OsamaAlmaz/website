export default function Cleaning (){

    const services = [
        {
          title: 'Residential Cleaning',
          description:
            'Keep your home spotless with our comprehensive residential cleaning services. We handle everything from dusting to mopping.',
          icon: '🏠',
        },
        {
          title: 'Commercial Cleaning',
          description:
            'Ensure a clean and professional workspace with our commercial cleaning services, tailored for offices and retail spaces.',
          icon: '🏢',
        },
        {
          title: 'Deep Cleaning',
          description:
            'For a thorough and detailed clean, our deep cleaning service tackles even the toughest spots in your home or business.',
          icon: '🧹',
        },
        {
          title: 'Move-In/Move-Out Cleaning',
          description:
            'Make your move stress-free with our move-in and move-out cleaning services. Perfect for tenants and landlords.',
          icon: '📦',
        },
        {
          title: 'Carpet Cleaning',
          description:
            'Refresh and rejuvenate your carpets with our professional carpet cleaning services.',
          icon: '🧼',
        },
        {
          title: 'Window Cleaning',
          description:
            'Enjoy streak-free windows and let the sunlight in with our professional window cleaning service.',
          icon: '🌞',
        },
      ];

    return (
        <div className="bg-gray-50 py-14 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-12">
            Our Cleaning Services
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover our range of professional cleaning services designed to meet
            your needs. Whether it’s your home or business, we’ve got you covered!
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
            Contact Us for a Free Quote
          </a>
        </div>
      </div>
        );
    
}