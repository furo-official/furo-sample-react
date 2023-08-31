import React from "react";
import styles from "../styles/hero.module.css";
import { PlusOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <div
          style={{
            backgroundImage: `url('/react.svg')`,
          }}
          className={styles.icon_react}
        />
        <PlusOutlined className={styles.icon_plus} />
        <div
          style={{
            backgroundImage: `url('/furo_naive.svg')`,
          }}
          className={styles.icon_furo}
        />
      </div>

      <h1 className={styles.title}>Hello, Furo!</h1>
      <p className={styles.subTititle}>Furo 샘플앱을 통해 Furo의 빠르고 직관적인 로그인을 경험해 보세요</p>
    </div>
  );
};

export default Hero;
