"use client";

import styles from "../../styles/Home/AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>About Us</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutPhoto}>
          <img src="/Home/About.jpg" alt="About Us" />
        </div>
        <div className={styles.aboutContent}>
          <p>
            World-Wise International is a premier global business focused on
            providing high-quality gemstones, gold, forex, cryptocurrency,
            loans, and liquor distribution services. With decades of expertise
            in international trade and financial services, we aim to deliver
            secure, reliable, and premium solutions to our clients. Our mission
            is to build lasting relationships based on trust and excellence,
            offering exclusive opportunities for both individuals and businesses
            across the globe.
          </p>
          <button className={styles.aboutButton}>
            <a href="/newpage/about">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
