"use client";

import styles from "../../styles/About/HeroSection.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/HeroImage.png)` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>World-Wise International</h1>
        <p className={styles.description}>
          With decades of expertise in global trade and luxury assets,
          World-Wise International is your trusted partner in financial and
          commodity markets.
        </p>
        <a href="/newpage/services" className={styles.exploreButton}>
          Explore Our Services
        </a>
      </div>
    </div>
  );
}
