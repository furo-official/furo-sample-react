import React from 'react';
import { Col, Row } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import styles from '../styles/grid.module.css';

const Content = ({ subject, content, link }) => {
  return (
    <div>
      <a href={link} className={styles.contentHeader} target="_blank" rel="noreferrer">
        <LinkOutlined className={styles.link} />
        {subject}
      </a>
      <span>{content}</span>
    </div>
  );
};

const Grid = () => {
  return (
    <div className={styles.container}>
      <Row gutter={50} className={styles.gutter}>
        <Col span={12}>
          <Content subject={'Furo Console'} link={'https://console.furo.one'} />
        </Col>
        <Col span={12}>
          <Content subject={'Docs'} link={'https://docs.furo.one/'} />
        </Col>
      </Row>
      <Row gutter={50}>
        <Col span={12}>
          <Content subject={'Community'} link={'https://discord.com/invite/g7pUbYeDWK'} />
        </Col>
        <Col span={12}>
          <Content subject={'Furoboard'} link={'https://discord.com/invite/g7pUbYeDWK'} />
        </Col>
      </Row>
    </div>
  );
};

export default Grid;
