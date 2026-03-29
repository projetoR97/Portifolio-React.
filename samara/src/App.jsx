
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    service: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for header

      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetBottom = offsetTop + ref.current.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial active

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <section id="home" ref={sectionRefs.home}><Home /></section>
        <section id="about" ref={sectionRefs.about}><About /></section>
        <section id="service" ref={sectionRefs.service}><Services /></section>
        <section id="testimonials" ref={sectionRefs.testimonials}><Testimonials /></section>
        <section id="contact" ref={sectionRefs.contact}><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;