import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";
import "../styles/Today.css";
import SearchForm from "./SearchForm";
import "../styles/Today.css";

const { Content } = Layout;

const Today = () => {
  const [todayProjections, setTodayProjections] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get("https://model-ncaab.herokuapp.com/projections/")
      .then(response => {
        setTodayProjections(response.data);
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    todayProjections && setDataToDisplay(todayProjections);
  }, [todayProjections]);

  return isFetching ? (
    <div className="shot-spinner spinner">
      <Spin size="large" />
    </div>
  ) : (
    <Layout className="layout">
      <Content  style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div className='today-content' style={{ background: "#fff", padding: 24, minHeight: "80vh" }}>
          <h1 className="today-title">Today's Projections</h1>
          <SearchForm
            className='today-search'
            data={todayProjections}
            setDataToDisplay={setDataToDisplay}
          />
          {todayProjections &&
            dataToDisplay.map((games, index) => {
              return (
                <div key={index} className="today-card">
                  <div className="today-card-away"> 
                  <p>{games.away_name} {games.away_projection.toFixed(2)}</p>
                  </div>
                  <div><p>@</p></div>
                  <div className="today-card-home">
                  <p>{games.home_projection.toFixed(2)} {games.home_name}</p>
                  </div>
                 
                </div>
              );
            })}
        </div>
      </Content>
    </Layout>
  );
};

export default Today;
