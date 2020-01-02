import React from "react";
import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import Breadcrumb from 'antd/es/breadcrumb'
import 'antd/es/breadcrumb/style/css'

const { Content } = Layout;

const About = () => {

  return (
    <Layout className="layout">
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '24px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>About</div>
    </Content>
  </Layout>
  );
};

export default About;
