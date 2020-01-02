import React from "react";
import { NavLink } from "react-router-dom";
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
        </Breadcrumb>
        <div className='home-div' style={{ background: "#fff", padding: 24, minHeight: "80vh" }}>
          <h1 className='home-title'>We Predict Scores</h1>
          <h3 className='home-text'>
            NCAAB Predictor uses historical data and advanced Data Science to
            predict Division I NCAA basketball scores. You can select any two
            teams in <NavLink to="/compare">Compare</NavLink> or check out the predictions for today's games in <NavLink to="/today"> Today</NavLink>.
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
