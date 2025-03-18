"use client"; // Mark this component as a Client Component

import { useState } from "react";
import styles from "../../styles/Blog/HotNews.module.css";

export default function HotNews() {
  const hotNewsItems = [
    {
      id: 1,
      title: "Gemstone Market Trends: What's Driving the Prices?",
      description:
        "Stay up to date with the latest trends in the gemstone market. This post explores the factors driving gemstone prices and how global events influence the market.",
    },
    {
      id: 2,
      image:
        "https://images.moneycontrol.com/static-mcnews/2024/11/20241119115137_gold-dollar-1.jpg?impolicy=website&width=770&height=431",
      title: "Gold Trading in 2025: Key Insights for Investors",
      description:
        "Discover what's shaping the gold trading market in 2025. We delve into emerging trends and provide tips for those looking to invest in gold.",
    },
    {
      id: 3,
      image:
        "https://www.bubblestranslation.com/wp-content/uploads/What-do-Cryptocurrencies-Mean-for-the-Future-of-International-Trade.jpg",
      title: "Cryptocurrency in Global Trade: Opportunities and Risks",
      description:
        "Explore how cryptocurrencies are becoming a key element in international trade, offering new opportunities and potential risks for businesses worldwide.",
    },
    {
      id: 4,
      image:
        "https://strapi-cdn.indmoney.com/cdn-cgi/image/quality=80,format=auto,metadata=copyright,width=700/https://strapi-cdn.indmoney.com/xlarge_The_Basics_of_Forex_Trading_Is_It_Right_for_You_4c7f935112.jpg",
      title: "Understanding Forex Trading: How to Maximize Your Profits",
      description:
        "A beginner’s guide to forex trading. Learn the basics, strategies, and key factors that affect currency exchange rates in the global market.",
    },
    {
      id: 5,
      image:
        "https://assets.isu.pub/document-structure/230613125139-6276d8973d127c4b2616e42b7de54fb2/v1/e33ca9e298d39cccce6f0ba7a9457718.jpeg",
      title: "Exploring Liquor Distribution: A Growing Global Market",
      description:
        " Learn about the booming liquor distribution industry. This post covers the key players, market dynamics, and how World-Wise International is making an impact.",
    },
    {
      id: 6,
      image:
        "https://vakilsearch.com/blog/wp-content/uploads/2022/09/procedure-recover-money-insolvency-bankruptcy-code-5.png",
      description:
        "Discover how our loans without credit checks can provide businesses with the funding they need to grow, offering a flexible and accessible solution.",
    },
  ];

  const latestNewsItems = [
    {
      id: 1,
      image:
        "https://enorcerna.com/wiki/wp-content/uploads/2021/08/tipos-piedras-preciosas-social-1024x538.jpg",
      title: "Global Gemstone Market: Latest Developments in 2025",
      description:
        "An overview of the latest trends and developments in the global gemstone market.",
    },
    {
      id: 2,
      image:
        "https://www.sbcgold.com/wp-content/uploads/2025/01/is-gold-a-good-investment-in-2025.jpg",
      title: "Top Investment Strategies for Gold in 2025",
      description:
        "Experts share their investment strategies to navigate the gold market in 2025.",
    },
    {
      id: 3,
      image:
        "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/6b011ebe25f916f850b54a76b84dc243.jpg",
      title: "How Cryptocurrencies are Reshaping Global Trade",
      description:
        "A look at the disruptive role cryptocurrencies are playing in the global trade ecosystem.",
    },
    {
      id: 4,
      image:
        "https://futuramo.com/blog/wp-content/uploads/2024/06/2149250210-800x500.jpg",
      title: "Forex Trading in Emerging Markets: A 2025 Guide",
      description:
        "Explore forex trading strategies for emerging markets in 2025.",
    },
    {
      id: 5,
      image:
        "https://www.caterermiddleeast.com/cloud/2025/01/27/a6mqgwn9-DVG_0237_1-cropped-1200x900.jpg",
      title: "Expanding Liquor Distribution in the Middle East",
      description:
        "Challenges and opportunities for expanding liquor distribution in the Middle East market.",
    },
    {
      id: 6,
      image:
        "https://cdn.prod.website-files.com/634054c00f602044abb3060d/6450e5e74d9cbabce10a1c88_Crypto%20Lending%20.webp",
      title: "Crypto Loans: A New Trend in Financial Services",
      description:
        "How cryptocurrency-backed loans are reshaping traditional finance.",
    },
    {
      id: 7,
      image:
        "https://www.shareindia.com/wp-content/uploads/2023/06/A-Simple-Must-Read-Guide-to-Basics-of-Commodity-Trading.webp",
      title: "Financial Opportunities in Commodity Trading",
      description:
        "Exploring the growing financial opportunities in commodity trading markets.",
    },
    {
      id: 8,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*szJX33PuBr2JMfAe.jpg",
      title: "How to Protect Your Investments in a Volatile Market",
      description:
        "Practical tips for protecting your investments amidst global market volatility.",
    },
    {
      id: 9,
      image:
        "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?fit=1200%2C697&ssl=1",
      title: "Global Trends in Cryptocurrency Mining",
      description:
        "A comprehensive look at the rise of cryptocurrency mining across the world, exploring new technologies, mining farms, and the environmental impact of the industry.",
    },
  ];

  return (
    <div className={styles.hotNews}>
      <div className={styles.container}>
        {/* Left Side*/}
        <div className={styles.leftSide}>
          <h1>Hot News</h1>
          <a href="#" className={styles.imageLink}>
            <img
              src="https://cdn.create.vista.com/api/media/small/348354978/stock-photo-cropped-view-jewelry-appraiser-holding-ring-gemstone-box-lamp-table"
              alt="Trending Hot News"
              className={styles.largeImage}
            />
          </a>
          <div className={styles.newsText}>
            <h3>{hotNewsItems[0].title}</h3>
            <p>{hotNewsItems[0].description}</p>
          </div>

          {/* Trending Hot News*/}
          <div className={styles.trendingNews}>
            {hotNewsItems.slice(1).map((item) => (
              <div key={item.id} className={styles.newsItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.smallImage}
                />
                <div className={styles.newsText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side*/}
        <div className={styles.rightSide}>
          <h2>Latest News</h2>
          <div className={styles.newsList}>
            {latestNewsItems.map((item) => (
              <div key={item.id} className={styles.newsItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.smallImage}
                />
                <div className={styles.newsText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
