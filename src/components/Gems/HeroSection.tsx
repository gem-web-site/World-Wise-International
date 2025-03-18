import React from "react";
import styles from "../../styles/Gems/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Discover the World of Exquisite Gems
        </h1>
        <p className={styles.heroSubtitle}>
          Explore our curated collection of rare and luxurious gemstones.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
