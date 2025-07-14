import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import ShowProjects from './sections/ShowProjects.jsx';
import Overview from './sections/Overview.jsx';
import Experience from './sections/Experience.jsx';
import Testimonials from './sections/Testimonials.jsx';
import TechSkills from './sections/TechSkills.jsx';
import Contact from './sections/Contact.jsx';
import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './sections/Footer.jsx';
export default function App() {
  const sectionRefs = {
    overview: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };
  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <main>
        <Hero scrollToRef={sectionRefs.overview} />
        <Overview sectionRef={sectionRefs.overview} />
        {/* <Experience sectionRef={sectionRefs.experience} /> */}
        <TechSkills sectionRef={sectionRefs.skills} />
        {/* <Testimonials /> */}
        <ShowProjects sectionRef={sectionRefs.work} />
        <Contact sectionRef={sectionRefs.contact} />
        <Footer />
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
