import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Typography, Tooltip, Spin, message } from 'antd';
import { useFuro } from 'furo-react';
import { WarningOutlined } from '@ant-design/icons';
import styles from '../styles/board.module.css';
import { ConfigContext } from '../contexts/ConfigContext';
import { CopyOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Board = () => {
  const { user, loginWithRedirect, isLoading } = useFuro();
  const { hasClientId, page, workspaces, clientId } = useContext(ConfigContext);
  const [messageApi, contextHolder] = message.useMessage();

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
      {contextHolder}
      <div className={styles.code}>
        {user ? (
          <>
            <SyntaxHighlighter language="javascript" style={coldarkDark} wrapLines={true} wrapLongLines={true}>
              {page === 'user' ? JSON.stringify(user, null, 2) : JSON.stringify(workspaces, null, 2)}
            </SyntaxHighlighter>

            <div className={styles.button_wrapper}>
              <Tooltip title={'Logout'}>
                <CopyOutlined
                  className={styles.icon_logout}
                  onClick={() => {
                    const text = page === 'user' ? JSON.stringify(user, null, 4) : JSON.stringify(workspaces, null, 4);
                    navigator.clipboard
                      .writeText(text)
                      .then(() => {
                        console.log('Text copied to clipboard: ' + text);
                        messageApi.open({
                          type: 'success',
                          content: 'Data Copied to your clipboard',
                          duration: 1,
                        });
                      })
                      .catch((error) => {
                        console.error('Copy to clipboard failed: ' + error);
                      });
                  }}
                />
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            {!isLoading && !hasClientId ? (
              <>
                <Text type="danger" className={styles.warning}>
                  <WarningOutlined className={styles.icon_warning} />
                  Client ID not Configured
                </Text>
                <div
                  className={styles.login}
                  onClick={() => {
                    window.open(
                      'https://github.com/furo-official/furo-sample-react#%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95',
                      '_blank',
                    );
                  }}
                >
                  How to configure
                </div>
              </>
            ) : (
              <>
                <Text className={styles.clientId}>{`Client ID: ${clientId}`}</Text>
                <div className={styles.login} onClick={loginWithRedirect} style={{ alignSelf: 'center' }}>
                  Login
                </div>{' '}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
