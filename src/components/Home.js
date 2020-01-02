import React from "react";
import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import Menu from 'antd/es/menu'
import 'antd/es/menu/style/css'
import Breadcrumb from 'antd/es/breadcrumb'
import 'antd/es/breadcrumb/style/css'

const { Header, Content, Footer } = Layout;

const Home = () => {

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Compare</Menu.Item>
        <Menu.Item key="3">Today</Menu.Item>
        <Menu.Item key="4">About</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '24px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>NCAAB Predictor ©2020 Created by Samir, William, Brian and George</Footer>
  </Layout>
  );
};

export default Home;
