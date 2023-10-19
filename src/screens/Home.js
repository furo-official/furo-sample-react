import React from 'react';
import { Col, Row } from 'antd';
import { Hero, Board, Grid, Tab } from '../components';
import { useFuro } from 'furo-react';
import { Profile } from '../components/Profile';

const Home = () => {
  const { user } = useFuro();

  const board = !user ? (
    <>
      <Tab />
      <Row>
        <Board />
      </Row>
    </>
  ) : (
    <Row gutter={60}>
      <Col lg={12} md={24} sm={24} xs={24}>
        <Profile />
      </Col>
      <Col lg={12} md={24} sm={24} xs={24}>
        <Tab />
        <Row>
          <Board />
        </Row>
      </Col>
    </Row>
  );
  return (
    <div
      style={{
        margin: '100px 30px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Row gutter={60}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Hero />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Grid />
        </Col>
      </Row>

      {board}
    </div>
  );
};

export default Home;
