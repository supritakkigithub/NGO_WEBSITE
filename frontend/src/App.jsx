import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import VolunteerForm from './components/VolunteerForm';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />          
      <Hero />            
      <About />           
      <Services />        
      <Testimonials />    
      <VolunteerForm />  
      <Contact />
       <Footer />
    </>
  );
}

export default App;
