import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, Typography, Tooltip, Spin } from 'antd';
import { useFuro } from 'furo-react';
import { WarningOutlined } from '@ant-design/icons';
import styles from '../styles/board.module.css';
import { ConfigContext } from '../contexts/ConfigContext';
import { LogoutOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Board = () => {
  const { user, loginWithRedirect, logout, isLoading } = useFuro();
  const { hasClientId, page, workspaces } = useContext(ConfigContext);

  if (isLoading)
    return (
      <div className={styles.container}>
        <div className={styles.code} style={{ alignItems: 'center' }}>
          <Spin tip="Loading" size="large" />
        </div>
      </div>
    );
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        {user ? (
          <>
            <SyntaxHighlighter language="javascript" style={coldarkDark} wrapLines={true} wrapLongLines={true}>
              {page === 'user'
                ? '// Logged in user Info\n' + JSON.stringify(user, null, '\t')
                : `// user's joined Info\n` + JSON.stringify(workspaces, null, '\t')}
            </SyntaxHighlighter>

            <div className={styles.button_wrapper}>
              <Tooltip title={'로그아웃'}>
                <LogoutOutlined className={styles.icon_logout} onClick={logout} />
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            {!isLoading && !hasClientId && (
              <Text type="danger" className={styles.warning}>
                <WarningOutlined className={styles.icon_warning} />
                <Tooltip
                  title={
                    <a
                      href="https://github.com/furo-official/furo-sample-react#%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      설정하러 가기
                    </a>
                  }
                  color={'#ffffff10'}
                >
                  Client ID
                </Tooltip>{' '}
                가 설정되지 않았습니다
              </Text>
            )}
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={loginWithRedirect}
              disabled={!hasClientId}
              style={{ alignSelf: 'center' }}
            >
              로그인 하러 가기
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
