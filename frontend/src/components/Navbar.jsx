// src/components/Navbar.jsx
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#001f3f] to-[#003366] shadow-md">
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-20 py-2">
        {/* Logo */}
        <div className="pt-6 flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-orange-500" />
          <span className="hover:text-orange-400 cursor-pointer text-3xl text-white font-medium w-2/8">NGO</span>
        </div>

        {/* Navigation Links */}
        <ul className="text-3xl flex space-x-40 text-white font-medium w-2/8">
          <li>
            <a
              href="#home"
              className={`hover:text-orange-400 cursor-pointer ${
                activeSection === '' ? 'text-orange-400' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:text-orange-400 cursor-pointer ${
                activeSection === 'about' ? 'text-orange-400' : ''
              }`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#volunteer"
              className={`hover:text-orange-400 cursor-pointer ${
                activeSection === 'volunteer' ? 'text-orange-400' : ''
              }`}
            >
              Volunteer
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-orange-400 cursor-pointer ${
                activeSection === 'volunteer' ? 'text-orange-400' : ''
              }`}
            >
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
