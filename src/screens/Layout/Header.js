import React from "react";
import styles from "../../styles/layout.module.css";

import { Dropdown, Layout, Space, Menu, Avatar, Spin } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { useFuro } from "furo-react";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/">
          <div className={styles.headerLogo}>
            <img src={process.env.PUBLIC_URL + "/furo_naive.svg"} height={36} />
            <span>Furo</span>
          </div>
        </a>
        <Profile />
      </div>
    </Layout.Header>
  );
};

const Profile = () => {
  const { user, loginWithRedirect, logout, isLoading } = useFuro();
  const items = [
    {
      label: (
        <div>
          <Space direction="horizontal">
            <Avatar />
            <Space direction="vertical">
              <Paragraph>이름</Paragraph>
              <Paragraph>이메일</Paragraph>
            </Space>
          </Space>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
  ];

  console.log(user);

  if (isLoading) return <Spin />;

  if (user) {
    return (
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <div>
            <Avatar src={user} />
          </div>
        </a>
      </Dropdown>
    );
  } else {
    return <>로그인하삼</>;
  }
};

export default Header;
