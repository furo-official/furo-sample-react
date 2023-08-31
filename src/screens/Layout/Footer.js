import React from "react";
import styles from "../../styles/layout.module.css";

import { Layout } from "antd";

const Footer = () => {
  const now = new Date();
  return <Layout.Footer className={styles.footer}>©{now.getFullYear()} Team Hopae Inc. All Rights Reserved</Layout.Footer>;
};

export default Footer;
