// src/components/Services.jsx

import { Book, HeartPulse, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
          Our Programs
        </h2>
        <p className="text-gray-600 text-lg">
          Empowering communities through key services in education, health, and personal development.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1: Education */}
        <div className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Book className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Education</h3>
          <p className="text-center text-lg">
            We provide free and accessible educational resources for underprivileged children and communities.
          </p>
        </div>

        {/* Card 2: Health */}
        <div className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <HeartPulse className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Health</h3>
          <p className="text-center text-lg">
            We organize health camps, provide first aid awareness, and promote basic hygiene practices.
          </p>
        </div>

        {/* Card 3: Empowerment */}
        <div className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-12 w-12" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Empowerment</h3>
          <p className="text-center text-lg">
            We conduct skill development workshops to empower women, youth, and marginalized groups.
          </p>
        </div>
      </div>
    </section>
  );
}
