"use client";

import { useEffect } from "react";
import styles from "../../styles/Home/Loading.module.css";

const Loading = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={styles.loadingContainer}>
      <img src="/Loading.gif" alt="Loading..." className={styles.loadingGif} />
    </div>
  );
};

export default Loading;
