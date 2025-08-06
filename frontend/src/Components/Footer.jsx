import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      {/* Logo and Text Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img src="/LOGO.png" alt="LostLink Logo" className="h-16 w-auto rounded-lg bg-white px-2" />
        </div>

        {/* Text Info */}
        <div className="text-center md:text-center">
          <p className="text-md text-gray-50 ">© 2025 LostLink. All rights reserved.</p>
          <p className="text-sm text-gray-300 mt-1">Made with ❤️ by LostLink Team</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-100 hover:text-blue-500 size-7 cursor-pointer transition duration-200" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaSquareXTwitter className="text-gray-100 hover:text-gray-500 size-7 cursor-pointer transition duration-200" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagramSquare className="text-gray-100 hover:text-[#cf5569] size-7 cursor-pointer transition duration-200" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
