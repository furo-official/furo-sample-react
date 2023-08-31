import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, Furo!</h1>
      <p className={styles.subTititle}>Furo 샘플앱을 통해 Furo의 빠르고 직관적인 로그인을 경험해 보세요</p>
    </div>
  );
};

export default Hero;
