import React from 'react';
import styles from '../../styles/layout.module.css';

import { Dropdown, Layout, Avatar, Spin, Space } from 'antd';
import { useFuro } from 'furo-react';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContainer}>
        <FuroLogo />
        <Profile />
      </div>
    </Layout.Header>
  );
};

const FuroLogo = () => {
  return (
    <a href="/">
      <div className={styles.headerLogo}>
        <img src={process.env.PUBLIC_URL + '/furo_naive.svg'} alt="furo" height={36} />
        <span>Furo</span>
      </div>
    </a>
  );
};

const Profile = () => {
  const { user, logout, isLoading } = useFuro();
  const items = [
    {
      label: (
        <div>
          <LogoutOutlined /> Logout
        </div>
      ),
      key: 'logout',
      onClick: logout,
    },
  ];

  if (isLoading) return <Spin />;

  if (user) {
    return (
      <Space direction="horizontal">
        <span>
          <b>{user.display_name || user.email.split('@')[0]}</b>님 안녕하세요!
        </span>
        <Dropdown menu={{ items }}>
          <div>
            <Avatar src={user.profile_url} icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </Space>
    );
  }

  return <>로그인이 필요합니다</>;
};

export default Header;
