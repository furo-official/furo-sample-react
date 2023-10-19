import React from 'react';
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello, Furo!</div>
      <div className={styles.subTititle}>Experience Furo’s fast and intuitive login</div>
    </div>
  );
};

export default Hero;
