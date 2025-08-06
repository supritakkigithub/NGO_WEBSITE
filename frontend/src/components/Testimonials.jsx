import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Volunteer",
    message:
      "Working with the NGO has been a life-changing experience. I've learned so much and met amazing people.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sneha Patil",
    role: "Beneficiary",
    message:
      "The support provided by the NGO helped me complete my education. I'm forever grateful.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rahul Mehta",
    role: "Volunteer",
    message:
      "Every small effort here counts. Proud to be part of a cause that makes a real difference.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FaQuoteLeft className="text-4xl text-indigo-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What People Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{t.message}"</p>
              <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
              <span className="text-sm text-indigo-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
