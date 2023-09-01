import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useParams } from 'react-router-dom';
import { FuroProvider, useFuro } from 'furo-react';
import styles from '../../styles/layout.module.css';
import { ConfigContext } from '../../contexts/ConfigContext';

const { Content } = Layout;

function RequireAuth({ children }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    if (isLoading || isAuthenticated) return <>Loading...</>;
    loginWithRedirect();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return isAuthenticated ? children : <></>;
}

const LayoutWithRoute = ({ auth }) => {
  const { clientId } = useContext(ConfigContext);
  const { pid } = useParams();
  return (
    <FuroProvider
      domain={process.env.REACT_APP_DOMAIN_URL || 'https://auth.furo.one'}
      clientId={pid ? pid : clientId}
      redirectUri={window.location.origin + `/${pid ? pid : clientId}`}
      apiUrl={process.env.REACT_APP_API_URL || 'https://api.furo.one'}
    >
      <Layout className={styles.container}>
        <Layout className={styles.body}>
          <Header />
          <Content className={styles.content}>
            {auth ? (
              <RequireAuth>
                <Outlet />
              </RequireAuth>
            ) : (
              <Outlet />
            )}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </FuroProvider>
  );
};

export default LayoutWithRoute;
