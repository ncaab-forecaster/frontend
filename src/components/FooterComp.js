import React from "react";
import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'

const { Footer } = Layout;

const Home = () => {

  return (
    <Layout className="layout">
    <Footer style={{ textAlign: 'center' }}>NCAAB Predictor ©2020 Created by Samir, William, Brian and George. <br/> 
    For entertainment pusposes only.</Footer>
  </Layout>
  );
};

export default Home;
