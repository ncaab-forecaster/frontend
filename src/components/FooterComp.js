import React from "react";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";

const { Footer } = Layout;

const FooterComp = () => {
  return (
    <Layout className="layout">
      <Footer style={{ textAlign: "center" }}>
        Score Genie ©2020 Created by Samir, William, Brian and George. <br />
        For entertainment purposes only.
      </Footer>
    </Layout>
  );
};

export default FooterComp;
