"use client";

import { useState, useEffect } from "react";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import ContactSection from "../components/Home/ContactSection";
import News from "../components/Home/news";
import QuickLinks from "../components/Home/QuickLinks";
import Loading from "../components/Home/Loading"; // Loading Component

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Set your preferred loading time here
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
          <News />
          <QuickLinks />
        </>
      )}
    </>
  );
};

export default Home;
