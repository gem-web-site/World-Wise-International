"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Blog/HeroSection.module.css";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/Blog&News/HeroImage.jpg)` }}
      ></div>
      <div className={styles.content}>
        <h1>World-Wise International</h1>
        <h2>Excellence in Global Trade</h2>
        <p>
          At World-Wise International, we redefine luxury and trust in global
          From the finest gemstones and gold to secure forex and crypto
          transactions, we offer unparalleled expertise in international
          markets.
        </p>
      </div>
    </div>
  );
}
