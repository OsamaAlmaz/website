import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinUs() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-24">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-700 mb-8">
          At Spark Cleaner, we are always looking for dedicated and passionate individuals to join our growing team. Whether you're starting your career or looking for a new opportunity in the cleaning industry, we'd love to hear from you.
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-12">
        <blockquote className="text-2xl italic text-blue-900 mb-4">"I'm always proud to be a part of the Spark Cleaner family where employee safety is top priority."</blockquote>
        <p className="text-right text-lg text-gray-700">- Sara</p>
      </div>

      {/* Careers Description */}
      <div className="bg-white p-12 rounded-lg shadow-md max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-4"> Spark Cleaner Careers</h2>
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">We support our people’s success</h3>
        <p className="text-gray-700 mb-4">
          We've been in business for almost 100 years. Which means we’ve been around long enough to know our success is entirely due to our team. And now we need you.
        </p>
        <p className="text-gray-700 mb-4">
          We have nearly 26,000 employees across Canada and the United States, and we’re proud of what each one brings to our company. We believe every individual's unique combination of interests, experience, and skills brings something essential to our team.
        </p>
        <p className="text-gray-700">
          Simply put, we’re better together. And we can’t wait to see what you bring to the table.
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-blue-900 text-white mt-16 p-12 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Want to join our team? Here’s what you can expect...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">💡</div>
            <p className="text-center">
              At Spark Cleaner, our business is built on innovation and safety. We support the personal growth and safety of every one of our team members.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">🌱</div>
            <p className="text-center">
              Whether you're a new hire or have been with us for 20 years, we offer opportunities to grow and innovate in your position. We provide top-notch training and development.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">🔒</div>
            <p className="text-center">
              Our overall business philosophy is centered around safety, ensuring all our standards, procedures, and policies keep you secure.
            </p>
          </div>
        </div>
      </div>

      {/* Job Opportunities */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Cleaner</h3>
            <p className="text-gray-600 mb-4">
              We are looking for full-time and part-time cleaners to join our team. No experience is required. We provide full training.
            </p>
            <button
            onClick={()=> navigate('/contact')} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Supervisor</h3>
            <p className="text-gray-600 mb-4">
              Seeking experienced supervisors to lead and motivate our cleaning teams. Experience in a similar role is a plus.
            </p>
            <button 
            onClick={()=> navigate('/contact')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Customer Service Representative</h3>
            <p className="text-gray-600 mb-4">
              If you have strong communication skills and enjoy working with customers, apply to join our customer support team.
            </p>
            <button 
            onClick={()=> navigate('/contact')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Application Steps Section */}
      <div className="bg-white mt-16 p-12 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Apply</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li className="mb-2"><strong>#1 – Apply:</strong> Select an open job and fill out the application form.</li>
          <li className="mb-2"><strong>#2 – Review:</strong> We’ll take a look at the form and see if it’s a good fit.</li>
          <li className="mb-2"><strong>#3 – Interview:</strong> If your resume lines up with what we need, we’ll call you for an interview and check your references.</li>
          <li className="mb-2"><strong>#4 – Hiring:</strong> We’ll complete the relevant safety and security checks, and if you’re the successful candidate, you’ll get an offer of employment and our Welcome to Spark Cleaner orientation Package.</li>
          <li className="mb-2"><strong>#5 – Training:</strong> All our team members start with training and tests on Health and Safety, Environment, and Respect at the Workplace. We provide specific training on cleaning processes and procedures to make sure you feel confident getting into a work routine.</li>
        </ol>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Browse All Opportunities
          </button>
        </div>
      </div>

      {/* Application CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Join Our Team?</h2>
        <p className="text-gray-700 mb-8">
          Submit your application today and become a part of a company that values its employees and provides quality service to its clients.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Apply Today
        </button>
      </div>
    </div>
  );
}
