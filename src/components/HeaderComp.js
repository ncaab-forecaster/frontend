import React from "react";
import { Link } from "react-router-dom";
import Layout from 'antd/es/layout';
import 'antd/es/layout/style/css';
import Menu from 'antd/es/menu';
import 'antd/es/menu/style/css';

const { Header } = Layout;

const HeaderComp = () => {

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
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/compare">Compare</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/today">Today</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>
  </Layout>
  );
};

export default HeaderComp;
