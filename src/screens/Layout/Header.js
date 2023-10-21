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

const furoLogo = 'https://res.cloudinary.com/dsllzosoi/image/upload/v1695004534/furo-logo-square_slejhp.png';

const FuroLogo = () => {
  return (
    <a href="/">
      <div className={styles.headerLogo}>
        <img src={furoLogo} alt="furo" height={36} />
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
        <div style={{ fontSize: '1.1rem', lineHeight: 1.4 }}>
          <b>{user.display_name || user.email.split('@')[0]}</b>
        </div>
        <Dropdown menu={{ items }}>
          <div style={{ marginBottom: '5px' }}>
            <Avatar src={user.profile_url || furoLogo} icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </Space>
    );
  }

  return <></>;
};

export default Header;
