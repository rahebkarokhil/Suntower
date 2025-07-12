import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white px-6 md:px-12 py-12 mt-20 border-t">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Column */}
        <div className="max-w-xs">
          <h1 className="text-sm font-bold mb-4 cursor-pointer">
            Sun tower suntower.com
          </h1>
          <p className="text-sm text-gray-600 mb-6 cursor-pointer">
            Your time to relax. Our time to sparkle.
          </p>
          <div className="flex gap-3 mt-4">
            <span className="rounded-full p-2 border hover:bg-gray-100 cursor-pointer">
              <TfiGithub />
            </span>
            <span className="rounded-full p-2 border hover:bg-gray-100 cursor-pointer">
              <FaFacebook />
            </span>
            <span className="rounded-full p-2 border hover:bg-gray-100 cursor-pointer">
              <FaInstagram />
            </span>
            <span className="rounded-full p-2 border hover:bg-gray-100 cursor-pointer">
              <FaLinkedin />
            </span>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            © 2025 Real Estate Developer & Construction Company <br />
            Terms of Use • Privacy Policy
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10 text-xs text-gray-600">
          <ul className="space-y-3">
            <li className="font-bold text-black">ABOUT US</li>
            <li>Advertising</li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Property Blog</li>
          </ul>
          <ul className="space-y-3">
            <li className="font-bold text-black">Get our social</li>
            <li>Facebook</li>
            <li>X (Twitter)</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
          <ul className="space-y-3">
            <li className="font-bold text-black">Support</li>
            <li>Help</li>
            <li>Contact Us</li>
            <li>Call Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
