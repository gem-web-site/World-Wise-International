"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Home/ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Gemstones & Gold Trading",
      description:
        " Certified gemstones (diamonds, sapphires, rubies) and 24K/22K gold. Ethically sourced with competitive pricing.",
      image:
        "https://smartzonesuae.com/wp-content/uploads/2023/10/precious-metals-and-gems-license-dubai.webp",
    },
    {
      title: "Cryptocurrency Sales & Trading ",
      description:
        "Buy & trade Bitcoin, Ethereum, and more with secure transactions and expert guidance.  ",
      image:
        "https://img.freepik.com/free-photo/golden-bitcoin-coin-keyboard-stock-market-trading-chart-online-candlestick_169016-66246.jpg",
    },
    {
      title: "Foreign Exchange Services ",
      description:
        " Get the best exchange rates with fast, same-day transactions. Premium service for large exchanges.",
      image:
        "https://unipayforex.com/wp-content/uploads/2024/06/foreign-currency-exchange.webp",
    },
    {
      title: "Loans Without Credit Check",
      description:
        "Description Quick, hassle-free loans with minimal documentation. Apply now through our contact form.",
      image:
        "https://content.thebrief24.com/wp-content/uploads/2024/09/04180036/loan.jpg",
    },
    {
      title: "Commodity Supply & Sourcing",
      description:
        "Reliable procurement of quality commodities with seamless logistics and global sourcing.",
      image:
        "https://www.gep.com/prod/s3fs-public/blog-images/advantages-and-disadvantages-of-global-supply-chains-1920x1274.jpg",
    },
    {
      title: "Liquor Distribution & Export",
      description:
        "Wholesale supply of premium liquor brands with international shipping options.",
      image:
        "https://s.yimg.com/ny/api/res/1.2/Zq5dmRaLsKKZCphW2oz5Xg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDE-/https://media.zenfs.com/en/insidermonkey.com/b5cf371fe73fb9c9d837db0f24eef443",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getPosition = (index: number) => {
    const total = services.length;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;

    if (index === currentIndex) return "middle";
    if (index === left) return "left";
    if (index === right) return "right";
    return "hidden";
  };

  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles[position]}`}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.serviceButton}>
        <a href="/newpage/services">Explore Our Service</a>
      </button>
    </section>
  );
};

export default ServicesSection;
