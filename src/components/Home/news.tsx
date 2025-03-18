"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/Home/News.module.css";

const newsItems = [
  {
    id: 1,
    image: "https://cdn.corporatefinanceinstitute.com/assets/japanese-yen.jpeg",
    title: "Japanese Yen",
    content:
      "The yen has experienced a notable depreciation, reaching levels not seen in over 37 years. Factors contributing to this decline include the U.S. Federal Reserve's interest rate hikes and Japan's ongoing ultra-low interest rate policy.",
  },
  {
    id: 2,
    image:
      "https://e3.365dm.com/22/07/1600x900/skynews-european-central-bank_5841483.jpg?20220721132445",
    title: "European Central Bank (ECB)",
    content:
      "The ECB has reduced its deposit rate by a quarter-point to 2.5%, marking its sixth consecutive rate cut. This decision aims to address weakening economic activity and inflation within the eurozone.",
  },
  {
    id: 3,
    image:
      "https://economysaudiarabia.com/wp-content/uploads/sites/2/2024/02/Gold-prices-12.jpeg",
    title: "Gold Prices",
    content:
      "Gold prices have remained relatively stable amid global economic uncertainties. The introduction of Zimbabwe's gold-backed ZiG currency in April 2024 underscores the metal's enduring value as a hedge against inflation and currency volatility.",
  },
];

const hotNews = [
  {
    id: 1,
    image:
      "https://s3-eu-west-2.amazonaws.com/newzimlive/wp-content/uploads/2024/04/05171626/zig-6.jpg",
    title: "Zimbabwe's ZiG",
    content:
      "In April 2024, Zimbabwe introduced the ZiG, a gold-backed currency, to stabilize its economy. Initially, 1 ZiG was equivalent to approximately 13.56 USD. However, by September 2024, the Reserve Bank of Zimbabwe devalued the ZiG by 42.55% against the U.S. dollar due to rising inflation.",
  },
  {
    id: 2,
    image:
      "https://www.currencytransfer.com/wp-content/uploads/2023/08/pound-vs-euro-header.min_.jpg",
    title: "Euro and British Pound",
    content:
      "The euro has strengthened against the British pound, reaching its highest level since January. This surge follows Germany's announcement of a significant fiscal expansion, including a €500 billion infrastructure fund. Consequently, the pound has declined by approximately 1.5% this week, marking its most substantial drop since January 2023.",
  },
  {
    id: 3,
    image:
      "https://mediaassets.cbre.com/-/media/project/cbre/dotcom/global/services/invest/market-forecasts-and-analytics/market-forecast-analystics-hero-972x1296.jpg",
    title: "Market Projections",
    content:
      "The global gems and jewelry market is projected to grow from $361.71 million in 2025 to $522.32 million by 2033, reflecting a steady compound annual growth rate (CAGR) of 4.7%. This growth is attributed to advanced technologies and emerging opportunities within the industry.",
  },
  {
    id: 4,
    image: "https://irpp.org/wp-content/uploads/2016/10/trade-deal.jpg",
    title: "Trade Negotiations",
    content:
      "India and the United States are engaged in bilateral trade discussions, with India expressing willingness to lower tariffs on specific items, including those in the gems and jewelry sector. This initiative aims to foster mutual concessions and strengthen trade relations between the two countries.",
  },
  {
    id: 5,
    image:
      "https://www.deccanchronicle.com/h-upload/2025/02/24/1500x900_1893590-whatsappimage2025-02-24at20222pm.webp",
    title: "Educational Milestone",
    content:
      "The Global Gems & Jewelry Academy (GGJA) recently held its first annual convocation in Hyderabad, honoring over 10 graduates for their excellence in gemology and jewelry design. This event underscores the industry's commitment to education and professional development.",
  },
];

const latestNews = [
  {
    id: 1,
    image: "https://www.adroitvaluation.com/images/price-movement-analysis.jpg",
    title: "Price Movements",
    content:
      "Gold prices have experienced slight increases due to a weakening U.S. dollar. Investors are closely monitoring upcoming U.S. nonfarm payrolls data for insights into potential Federal Reserve interest rate decisions amid escalating global trade tensions. Spot gold recently rose by 0.1% to $2,921.19 per ounce, with U.S. gold futures also up 0.1% to $2,929.30.",
  },
  {
    id: 2,
    image:
      "https://wallpaperbat.com/img/395023-stock-market-wallpaper-top-free-stock-market-background.jpg",
    title: "Market Sentiment",
    content:
      "Concerns over a potential recession, fueled by trade tensions and the imposition of 25% tariffs on Canadian and Mexican imports by President Trump, have led investors to seek safe-haven assets like gold and U.S. Treasurys. Major stock indexes have declined, with sectors sensitive to economic slowdowns, such as banking and smaller companies, experiencing significant losses.",
  },
  {
    id: 3,
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2024/12/GettyImages-2153377684-e1735413134340.jpg?w=1440&q=75",
    title: "De Beers' Technological Initiatives",
    content:
      "In response to the growing popularity of lab-grown diamonds, De Beers has introduced 'DiamondProof,' a device designed to help retailers distinguish between natural and synthetic diamonds. This move aims to restore confidence in natural diamonds and counteract the impact of synthetic alternatives on the market.",
  },
];

export default function News() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = newsItems[currentNewsIndex];

  return (
    <div>
      <h1 className={styles.heading}>Blog & News</h1>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.mainNews}>
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className={styles.mainNewsImage}
            />
            <div className={styles.mainNewsContent}>
              <h2>{currentNews.title}</h2>
              <p>{currentNews.content}</p>
            </div>
          </div>
          <div className={styles.hotNewsContainer}>
            {hotNews.map((news) => (
              <div key={news.id} className={styles.hotNewsItem}>
                <img src={news.image} alt={news.title} />
                <div className={styles.hotNewsItemContent}>
                  <h3>{news.title}</h3>
                  <p>{news.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2>Latest News</h2>
          <div className={styles.latestNewsContainer}>
            {latestNews.map((news) => (
              <div key={news.id} className={styles.latestNewsItem}>
                <img src={news.image} alt={news.title} />
                <div className={styles.latestNewsItemContent}>
                  <h3>{news.title}</h3>
                  <p>{news.content}</p>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.viewMoreButton}>
            <a href="/newpage/blog">View More</a>
          </button>
        </div>
      </div>
    </div>
  );
}
