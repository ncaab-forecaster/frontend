import React, { useState, useEffect } from "react";
import axios from "axios";
import ComparePrediction from "./ComparePrediction";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import Select from "antd/es/select";
import "antd/es/select/style/css";
import "../styles/Compare.css";

const { Content } = Layout;
const { Option } = Select;

const Home = () => {
  const [teamsAndIds, setTeamsAndIds] = useState();
  const [selectedAway, setSelectedAway] = useState(null);
  const [selectedHome, setSelectedHome] = useState(null);

  useEffect(() => {
    axios.get("https://model-ncaab.herokuapp.com/teams/").then(response => {
      setTeamsAndIds(response.data);
    });
  }, []);

  function onChangeOne(value, key) {
    setSelectedAway(value);
  }

  function onChangeTwo(value, key) {
    setSelectedHome(value);
  }

  return (
    <Layout className="layout">
      <Content
        className="compare-desktop-content"
        style={{ padding: "0 20px" }}
      >
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div
          className="compare-main"
          style={{ background: "#fff", padding: 24, minHeight: "80vh" }}
        >
          <div className="compare-select-fields">
            <div>
              <h1>Away Team:</h1>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeOne}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <h1>Home Team:</h1>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeTwo}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
          </div>
          <ComparePrediction
            teamsAndIds={teamsAndIds}
            selectedAway={selectedAway}
            selectedHome={selectedHome}
          />
        </div>
      </Content>
      <Content
        className="compare-mobile-content"
        style={{ padding: "0 20px", height: "90vh" }}
      >
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div
          className="compare-main"
          style={{ background: "#fff", padding: 24, minHeight: "80vh" }}
        >
          <div className="compare-select-fields">
            <div>
              <h1>Away Team:</h1>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeOne}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <h1>Home Team:</h1>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeTwo}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
          </div>
          <ComparePrediction
            teamsAndIds={teamsAndIds}
            selectedAway={selectedAway}
            selectedHome={selectedHome}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
