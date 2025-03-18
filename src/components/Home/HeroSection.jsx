"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/Home/HeroSection.module.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  const slides = [
    {
      backgroundImage: "/Home/WelcomeSlider.jpg",
      headline: "WELCOME TO",
      tagline: "World-Wise International",
      description:
        "World Wise International is a premier platform specializing in luxury investments, including gold, gemstones, and forex trading. We provide expert solutions and global opportunities for high-value asset trading and wealth growth.",
      buttonText: "Contact Us",
      className: "welcomeSlide",
      path: "/newpage/contact",
    },
    {
      backgroundImage: "/Home/GemsSlider.jpg",
      headline: "Gems",
      description:
        "Discover the finest certified gemstones, sourced from the world's most exclusive mines. Our collection includes sapphires, rubies, emeralds, and diamonds.",
      buttonText: "Explore More",
      className: "gemsSlide",
      path: "/newpage/gems",
    },
    {
      backgroundImage: "/Home/CurrencySlider.png",
      headline: "Currency",
      description:
        "Benefit from competitive exchange rates and secure foreign exchange services. We specialize in high-value forex transactions, providing fast, trusted, and efficient currency exchange solutions.",
      buttonText: "Explore More",
      className: "currencySlide",
      path: "/newpage/about",
    },
    {
      backgroundImage: "/Home/GoldSlider.jpg",
      headline: "Gold",
      description:
        "Trade in pure, investment-grade gold, sourced with transparency and certification. We offer secure transactions for gold bars, coins, and bullion, ensuring reliability for investors and collectors.",
      buttonText: "Explore More",
      className: "goldSlide",
      path: "/newpage/about",
    },
    {
      backgroundImage: "/Home/PremiumSlider.jpg",
      headline: "Premium Services",
      description:
        "Elevate your financial experience with our luxury-focused premium services, including exclusive commodity sourcing and high-value investment opportunities tailored for elite clients.",
      buttonText: "Explore More",
      className: "premiumSlide",
      path: "/newpage/services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.heroSection}>
      {/* Slides Container */}
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${styles[slide.className]}`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className={styles.slideContent}>
              <h1>{slide.headline}</h1>
              {slide.tagline && <h2>{slide.tagline}</h2>}
              <p>{slide.description}</p>
              <button onClick={() => handleButtonClick(slide.path)}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className={styles.arrowLeft} onClick={goToPrevSlide}>
        <IoIosArrowBack />
      </button>
      <button className={styles.arrowRight} onClick={goToNextSlide}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HeroSection;
