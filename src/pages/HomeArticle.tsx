import React from 'react';
import './HomeArticle.css';
import { Layout, Menu, theme } from 'antd';
import CardArticle from '../components/CardArticle';

const { Header, Content, Footer } = Layout;

const HomeArtcile: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal">
            <Menu.Item>
                Home
            </Menu.Item>
            <Menu.Item>
                List Article
            </Menu.Item>
            <Menu.Item>
                About
            </Menu.Item>
        </Menu>
      </Header>
      <Content className="content" style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <CardArticle />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Article ©2023 Created by Muhammad NurIlham</Footer>
    </Layout>
  );
};

export default HomeArtcile;