import { Avatar, List, Space, Tag, Tooltip } from 'antd';
import { useFuro } from 'furo-react';
import {
  UnorderedListOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  DeploymentUnitOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const furoLogo = 'https://res.cloudinary.com/dsllzosoi/image/upload/v1695004534/furo-logo-square_slejhp.png';
const colors = ['blue', 'green', 'yellow', 'purple', 'red', 'orange', 'cyan', 'geekblue', 'magenta', 'volcano'];

export const Profile = () => {
  const { user, logout } = useFuro();
  const name = user.display_name || user.email.split('@')[0];
  const userData = [
    {
      title: 'Email',
      icon: <MailOutlined />,
      content: user.email,
    },
    {
      title: 'User ID',
      icon: <IdcardOutlined />,
      content: user.uid,
    },
    {
      title: 'Project ID',
      icon: <DeploymentUnitOutlined />,
      content: user.project_id,
    },
    {
      title: 'Login Methods',
      icon: <UnorderedListOutlined />,
      content: (Object.keys(user.sign_in_methods) || []).map((method, i) => (
        <Space size={[0, 8]} wrap>
          <Tag color={colors[i]}>{method}</Tag>
        </Space>
      )),
    },
    {
      title: 'Last Login',
      icon: <LoginOutlined />,
      content: user.last_sign_in_at,
    },
  ];

  return (
    <div
      style={{
        padding: '10px 10px 0px 10px',
        height: '100%',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Profile
      </h1>
      <div
        style={{
          borderRadius: '6px',
          backgroundColor: '#1f1f1f',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Avatar size={80} src={user.profile_url || furoLogo} icon={<UserOutlined />} />
          <div
            style={{
              fontSize: '3rem',
            }}
          >
            <b>{name}</b>
          </div>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={userData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} size={36} />}
                title={item.title}
                description={item.content}
              />
            </List.Item>
          )}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Tooltip title={'Logout'}>
            <LogoutOutlined
              style={{
                color: 'rgba(255, 255, 255, 0.45)',
                fontSize: '1.5em',
              }}
              onClick={logout}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
