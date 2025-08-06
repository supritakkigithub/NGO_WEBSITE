// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-bold">Basti Ki Pathshala</h2>
          <p className="mt-2 text-md text-gray-400">
            Empowering underprivileged children through free education and volunteer-driven learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#volunteer" className="hover:text-white">Volunteer</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Footer Line */}
      <div className="text-center mt-10 text-gray-500 text-md border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
