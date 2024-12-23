import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Only keep what is being used

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="font-medium mb-2">
            &copy; 2024 MohsinRaza | Assignment 07
          </p>
          <p className="text-sm">Client-side and Server-side Data Fetching</p>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/mohsin-raza-a514392b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
        <div className="mt-4 text-sm">
          <p>If you have any questions, feel free to reach out at:</p>
          <p>
            <a
              href="mailto:mohsinraza2248@gmail.com"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Mohsinraza2248@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
