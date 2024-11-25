import React, { useState } from 'react';

const services = [
  {
    name: 'Cleaning Services',
    title: "Attractive, healthy buildings are vital for your success.",
    description: `Beautiful, healthy buildings and facilities are crucial to your success. Since 1926, we’ve built a reputation for delivering quality results. Our team works tirelessly to keep your building environments hygienic and attractive, offering a wide range of commercial cleaning services to match your needs. Your facility deserves to shine, and our specialists are trained using the right equipment to provide you with premium cleaning solutions. By opting for a customized package from Spark Cleaning , it will allow you to win over potential clients, strengthen your reputation, and increase your employees’ production.`,
    link: '/cleaning-services',
    image: 'https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?s=612x612&w=0&k=20&c=5h8NBR190d46Ni4MclqJ7Zf9ZOtf3TM3gPRJaHUdMjk=', // Replace with actual image URL
  },
  {
    name: 'Integrated Facility Services',
    title: 'Attractive, well-maintained facilities are key to your success.',
    description: "We take care of all your facility operations, allowing you to focus on what matters most—your core business. The [Company Name] team simplifies facilities management by providing a single point of contact for every aspect of your facility needs. We align performance metrics across your entire portfolio, ensure consistency in data and financial/operational insights, leverage our procurement power, and transfer operational risks to our team. Our integrated facility services create synergy across our business units, helping clients offload the complexities of facility management seamlessly.",
    link: '/integrated-facility-services',
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
  },
  {
    name: 'Disinfection Services',
    title: "Elevate your business with a healthier clean",
    description: 'Our Clean for Health program offers a fresh approach to facility care, emphasizing deep cleaning, disinfection, and indoor air quality. Using eco-friendly, hospital-grade products, we ensure your facility remains safe and healthy beyond the pandemic. By prioritizing health-focused cleaning, we help reduce germ transmission and maintain a healthier environment for your employees and customers year-round.',
    link: '/disinfection-services',
    image: "https://ekergroup.com/content/uploads/sites/6/2021/02/disinfection-1024x849.jpg"
  },
  {
    name: "Specialty Services",
    title: "No matter how specialized your requirements, our team is equipped to meet all your facility maintenance needs",
    description: "At [You, we leverage our expertise to elevate yours, offering specialized services to meet any cleaning needs. Whether it's technical equipment cleaning, disaster restoration, or post-construction cleanup, our skilled team is ready to tackle even the most complex tasks.",
    link: 'speciality-services',
    
  },
  {
    name: "Food Plant Sanitation Services",
    title: "Protect your reputation with a perfect clean.",
    description: "Our specialists bring extensive expertise in the cleaning and sanitation industry directly to your business. [Your Company] provides mission-critical cleaning and sanitation services for both wet and dry environments.",
    link: '/food-plant-sanitation',
    image: 'https://systemcleaners.com/Admin/Public/GetImage.ashx?Width=640&Height=544&Crop=5&DoNotUpscale=True&FillCanvas=False&Image=/Files/Images/Boxbilleder_Store/ManualCleaning_Solution_SystemCleaners.jpg&x=4&y=-10'

  },
  {
    name: "Event Support Service",
    title: "Confidence every step of the way.",
    description: "We ensure your event runs smoothly, without a hitch! With experience supporting hundreds of major entertainment events, we've built a strong reputation for reliability and expertise. Whether your event is in a large or small venue—such as a sports complex, stadium, cultural center, arena, outdoor site, or office—we provide a wide range of services to assist before, during, and after the event.",
    link: "event-service",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3QZs7Rwvq8mFWfjd9_kPo0i-agO1SF0usg&s",
  },
  {
    name: "Environmental Services",
    title: "Our sustainable approach",
    description: "[Your Company] prioritizes the use of chemicals, consumables, and equipment that meet environmental accreditation or performance standards, promoting healthier building environments for clients and staff. By supporting environmental initiatives, we not only help protect the environment but also ensure safer products for our staff and healthier spaces for clients and tenants.",
    link: "environmental-service",
    image: "https://www.healthcarefacilitiestoday.com/resources/editorial/2021/25812-mop.jpg",
  },
  {
    name: "Security Services",
    title: "Outstanding Security Personnel and Services to Safeguard Your Organization",
    description: "At [Your Company] Security Services, protecting your employees, customers, and visitors is our highest priority in today’s world. We are committed to delivering top-quality security solutions, giving you peace of mind so you can concentrate on your core business. With over six decades of collective experience in law enforcement and security, our expert team is skilled at safeguarding your assets while building lasting partnerships with our clients. Trust [Your Company] Security Services for unmatched protection and peace of mind.",
    link: "/security-service-link",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0RmlsMCjgKBRTfPiVsauIV-uW3zezxcTjA&s"
  }
];

export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-32">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Services</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => handleServiceSelect(service)}
            className={`py-2 px-4 text-sm font-medium border-b-4 transition ${
              selectedService.name === service.name
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

      <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`transition-transform transform duration-500 ease-out`} style={{ transform: `translateX(0)` }}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{selectedService.title}</h3>
          <p className="text-gray-600 mb-4">{selectedService.description}</p>
          <a href={selectedService.link} className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More
          </a>
        </div>
        {selectedService.image && (
          <img
            src={selectedService.image}
            alt={selectedService.name}
            className="rounded-lg shadow-md w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}
