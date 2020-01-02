import React from "react";
import { Link } from "react-router-dom";
import homebasket from "../homebasket.jpg";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import "../styles/Home.css";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className='home-div' style={{ background: "#fff", padding: 24, minHeight: "80vh" }}>
          <h1 className='home-title'>We Predict Scores</h1>
          <h3 className='home-text'>
            NCAAB Predictor uses historical data and advanced Data Science to
            predict Division I NCAA basketball scores. You can select any two
            teams in <Link to="/compare">Compare</Link> or check out the predictions for today's games in <Link to="/today"> Today</Link>.
          </h3>
          <img
            className="main-image"
            src={homebasket}
            alt="black and white basket"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
