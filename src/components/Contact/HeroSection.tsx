"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Contact/HeroSection.module.css";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/Contact/HeroImage.jpg)` }}
      ></div>
      <div className={styles.content}>
        <h2>Get in Touch with</h2>
        <h1>World-Wise International</h1>
        <p>
          Have questions or need assistance? We're here to help! Reach out to us
          today, and let's connect to find the best solution for you.
        </p>
      </div>
    </div>
  );
}
