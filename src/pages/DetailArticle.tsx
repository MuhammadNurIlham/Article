import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './HomeArticle.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CardDetail from '../components/CardDetail';

const { Header, Content, Footer } = Layout;

const DetailArtcile: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/home')
    };

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal">
                    <Menu.Item onClick={() => backToHome()}>
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
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Detail Article</Breadcrumb.Item>
                    <Breadcrumb.Item>Title Article</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <CardDetail />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Article ©2023 Created by Muhammad NurIlham</Footer>
        </Layout>
    );
};

export default DetailArtcile;