// src/components/Hero.jsx
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative md:h-[550px] flex items-center justify-between bg-gradient-to-r from-[#001f3f] to-[#003366] overflow-hidden"
    >
      {/* Text Section - Left */}
      <div className="w-1/2 pl-16 md:pl-20 z-30 space-y-8 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Open the <br /> Community with <br /> Education
        </h1>
        <a
          href="https://www.smilefoundationindia.org/"  // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white py-3 md:py-4 px-6 md:px-8 mt-6 rounded-lg shadow-lg transition duration-300">
          Get Involved
        </button>
        </a>
      </div>

      {/* Image Section - Right */}
      <div className="w-1/3 h-full relative">
        <img
          src={heroImage}
          alt="Student with book"
          className="absolute right-5 top-0 h-full w-auto object-cover object-left opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#001f3f]/30 to-[#001f3f] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 via-transparent to-[#001f3f]/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/20 via-transparent to-[#001f3f]/40 z-10"></div>
      </div>
    </section>
  );
}