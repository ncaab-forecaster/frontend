import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import "../styles/Today.css";

const { Content } = Layout;

const Today = () => {
  const [todayProjections, setTodayProjections] = useState();

  useEffect(() => {
    axios
      .get("https://model-ncaab.herokuapp.com/projections/")
      .then(response => {
        setTodayProjections(response.data);
      });
  }, []);

  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: "80vh" }}>
          <h1 className="today-title">Today's Projections</h1>
          {todayProjections &&
            todayProjections.map((games, index) => {
              return (
                <Card key={index} className="today-card">
                  <h2>
                    {games.away_name}: {games.away_projection}
                  </h2>
                  <h2>
                    {games.home_name}: {games.home_projection}
                  </h2>
                </Card>
              );
            })}
        </div>
      </Content>
    </Layout>
  );
};

export default Today;
