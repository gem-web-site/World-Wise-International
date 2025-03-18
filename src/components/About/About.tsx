import styles from "../../styles/Home/AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Who We Are</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <p>
            World-Wise International is a leading global provider specializing
            in gemstones, gold, forex, loans, cryptocurrency, and liquor
            distribution. With a strong focus on transparency and ethical
            trading, we offer premium services tailored to the unique needs of
            our clients.
            <br />
            <br />
            Our expertise in international trade ensures reliable and secure
            transactions, building long-term relationships based on trust and
            customer satisfaction. At World-Wise International, we are committed
            to delivering high-quality solutions that exceed client
            expectations.
          </p>
        </div>
        <div className={styles.aboutPhoto}>
          <img src="/AboutUs/a.aboutus.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
