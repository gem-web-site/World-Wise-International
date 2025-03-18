import styles from "../../styles/About/OurMission.module.css";

const OurMission = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Our Mission & Values</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutPhoto2}>
          <img src="/AboutUs/a.hand.jpg" alt="About Us" />
          <p className={styles.aboutD}>Transparent & ethical trading</p>
        </div>
        <div className={styles.aboutPhoto2}>
          <img src="/AboutUs/a.rate.jpg" alt="About Us" />
          <p className={styles.aboutD}>Premium, world-class services</p>
        </div>
        <div className={styles.aboutPhoto2}>
          <img src="/AboutUs/a.bulb.jpg" alt="About Us" />
          <p className={styles.aboutD}>Advanced financial solutions</p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
