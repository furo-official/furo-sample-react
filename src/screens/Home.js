import React, { useContext } from 'react';
import { Col, Row } from 'antd';
import { Hero, Board, Grid, Tab } from '../components';
import { ConfigContext } from '../contexts/ConfigContext';
import { useParams } from 'react-router-dom';
import { FuroProvider } from 'furo-react';

const Home = () => {
  const { clientId } = useContext(ConfigContext);
  const { pid } = useParams();

  return (
    <FuroProvider
      domain={process.env.REACT_APP_DOMAIN_URL || 'https://auth.furo.one'}
      clientId={pid ? pid : clientId}
      redirectUri={window.location.origin + `/${pid ? pid : clientId}`}
      apiUrl={process.env.REACT_APP_API_URL || 'https://api.furo.one'}
    >
      <div style={{ margin: 30 }}>
        <Row gutter={60}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Hero />
          </Col>
          <Col lg={12} md={24} sm={24} xs={24} style={{ display: 'flex' }}>
            <Grid />
          </Col>
        </Row>
        <Tab />
        <Row>
          <Board />
        </Row>
      </div>
    </FuroProvider>
  );
};

export default Home;
