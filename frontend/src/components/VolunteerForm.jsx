import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setSubmitted(false); // Reset message on new typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with backend API call
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="volunteer"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 min-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Volunteer With Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium">
              Thank you for volunteering!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
