// src/components/About.jsx
import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are committed to empowering underprivileged communities through
          quality education, mentorship, and volunteer programs.
        </p>
        <p className="text-lg text-gray-500">
          Our volunteers and educators work tirelessly to provide a nurturing
          learning environment...
        </p>
        <a
          href="https://www.smilefoundationindia.org/"  // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg">
            Learn More
          </button>
        </a>
        <div className="flex gap-6 mt-6">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-600">Children Educated</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-600">Active Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
