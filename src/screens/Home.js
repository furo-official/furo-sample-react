import React from "react";
import { Col, Row } from "antd";
import { Hero, Board, Grid, Tab } from "../components";

const Home = () => {
  return (
    <div style={{ margin: "100px 30px 0" }}>
      <Row gutter={60}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Hero />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24} style={{ display: "flex" }}>
          <Grid />
        </Col>
      </Row>
      <Tab />
      <Row>
        <Board />
      </Row>
    </div>
  );
};

export default Home;
