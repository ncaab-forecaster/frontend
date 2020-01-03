import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import "antd/es/icon/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import "../styles/MobileNavBar.css";

function MobileNavBar() {
  const [menu, setMenu] = useState({
    current: "mail"
  });

  const handleClick = e => {
    setMenu({
      current: e.key
    });
  };

  return (
    <Layout className="m-nav-layout">
      <Menu
        className="nav-menu"
        mode="horizontal"
        theme="light"
        onClick={handleClick}
        selectedKeys={[menu.current]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item className="m-1" key="mail">
          <Link to="/">
            <Icon style={{ fontSize: "25px" }} type="home" />
          </Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="player">
          <Link to="/compare">
            <Icon style={{ fontSize: "25px" }} type="dribbble" />
          </Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="standings">
          <Link to="/today">
            <Icon style={{ fontSize: "25px" }} type="calendar" />
          </Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="shot">
          <Link to="/about">
            <Icon style={{ fontSize: "25px" }} type="info-circle" />
          </Link>
        </Menu.Item>
      </Menu>

      <Layout></Layout>
    </Layout>
  );
}

export default MobileNavBar;
