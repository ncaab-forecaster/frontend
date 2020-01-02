import React, { useState } from "react";
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
  const [selectedTeams, setSelectedTeams] = useState({ team1: "", team2: "" });

  function onChangeOne(value) {
    setSelectedTeams({ ...selectedTeams, team1: value})
  }

  function onChangeTwo(value) {
    setSelectedTeams({ ...selectedTeams, team2: value})
  }

  // function onBlur() {
  //   console.log("blur");
  // }

  // function onFocus() {
  //   console.log("focus");
  // }

  // function onSearch(val) {
  //   console.log("search:", val);
  // }

  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div
          className="compare-main"
          style={{ background: "#fff", padding: 24, minHeight: "80vh" }}
        >
          <div className="compare-select-fields">
            <div>
              <h1>Home Team:</h1>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeOne}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
            <div>
              <h1>Away Team:</h1>
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
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
          </div>
          <ComparePrediction selectedTeams={selectedTeams} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
