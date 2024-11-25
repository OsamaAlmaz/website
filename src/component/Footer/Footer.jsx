import React from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaYoutube,
} from 'react-icons/fa'


export default function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-10 md:px-12 lg:px-20 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Company Mission */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                <span className="text-indigo-500">Making the world a better place</span> through constructing elegant hierarchies.
              </h2>
              <div className="flex space-x-4 mt-6">
                <FaFacebookF className="h-5 w-5 hover:text-white cursor-pointer" />
                <FaInstagram className="h-5 w-5 hover:text-white cursor-pointer" />
                <FaTwitter className="h-5 w-5 hover:text-white cursor-pointer" />
                <FaGithub className="h-5 w-5 hover:text-white cursor-pointer" />
                <FaYoutube className="h-5 w-5 hover:text-white cursor-pointer" />
              </div>
            </div>
  
            {/* Solutions Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul>
                <li className="hover:text-white"><a href="#!">Commercial</a></li>
                <li className="hover:text-white"><a href="#!">Industrial</a></li>
                <li className="hover:text-white"><a href="#!">Institutional</a></li>
                <li className="hover:text-white"><a href="#!">Hospitality</a></li>
                <li className="hover:text-white"><a href="#!">HealthCare</a></li>
                <li className="hover:text-white"><a href="#!">Aviation</a></li>
                <li className="hover:text-white"><a href="#!">Recreational</a></li>
              </ul>
            </div>
  
            {/* Support Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul>
                <li className="hover:text-white"><a href="#!">Submit ticket</a></li>
                <li className="hover:text-white"><a href="#!">Documentation</a></li>
                <li className="hover:text-white"><a href="#!">Guides</a></li>
              </ul>
            </div>
  
            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul>
                <li className="hover:text-white"><a href="/about">About</a></li>
                <li className="hover:text-white"><a href="/">Services</a></li>
                <li className="hover:text-white"><a href="/join-us"> Join Us</a></li>
                <li className="hover:text-white"><a href="/contact">Contact Us </a></li>
              </ul>
            </div>
  
          </div>
  
          <hr className="my-6 border-gray-700" />
  
          {/* Footer Bottom */}
          <div className="flex justify-between items-center text-sm">
            <p>© 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}