import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Server might be down." });
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl">📞</span>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl">📧</span>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Email</h3>
            <p className="text-gray-600">info@ngowebsite.org</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl">📍</span>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Location</h3>
            <p className="text-gray-600">123 NGO Street, Belgaum, Karnataka</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>

            {/* Status message */}
            {status.message && (
              <p
                className={`text-center text-sm mt-2 ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
