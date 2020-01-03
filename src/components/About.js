import React from "react";
import william from "../william.jpg";
import brian from '../brian.jpg';
import george from '../george.jpg';
import samir from '../samir.jpg';
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import '../styles/About.css'

const { Content } = Layout;
const { Meta } = Card;

const About = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className='about-content' style={{ background: "#fff", padding: 24, minHeight: "80vh" }}>
          <Card
          className='about-card'
            style={{ width: 300, margin: 20 }}
            cover={<img alt="example" src={william} />}
            actions={[
              <a target="_blank" href="https://github.com/WilliamConnatser">
                <Icon type="github" key="github" />
              </a>,
              <a
                target="_blank"
                href="https://www.linkedin.com/in/williamconnatser/"
              >
                <Icon type="linkedin" key="linkedin" />
              </a>,
              <a target="_blank" href="https://twitter.com/ConnatserW">
                <Icon type="twitter" key="twitter" />
              </a>
            ]}
          >
            <Meta
              title="William Connatser"
              description="William is our Senior Full-Stack Developer. He is currently an enginner at Florida Blue."
            />
          </Card>
          <Card
          className='about-card'
            style={{ width: 300, margin: 20 }}
            cover={<img alt="example" src={brian} />}
            actions={[
              <a target="_blank" href="https://github.com/BrianThomasRoss">
                <Icon type="github" key="github" />
              </a>,
              <a
                target="_blank"
                href="https://www.linkedin.com/in/brianthomasross/"
              >
                <Icon type="linkedin" key="linkedin" />
              </a>,
            ]}
          >
            <Meta
              title="Brian Ross"
              description="Brian Ross is our Data Scientist who specializes in building regression models."
            />
          </Card>
          <Card
          className='about-card'
            style={{ width: 300, margin: 20 }}
            cover={<img alt="example" src={george} />}
            actions={[
              <a target="_blank" href="https://github.com/gyhou">
                <Icon type="github" key="github" />
              </a>,
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gyhou/"
              >
                <Icon type="linkedin" key="linkedin" />
              </a>,
              <a target="_blank" href="https://twitter.com/gyhou">
              <Icon type="twitter" key="twitter" />
            </a>
            ]}
          >
            <Meta
              title="George Hou"
              description="George Hou is our Data Scientist who specializes in building regression models."
            />
          </Card>
          <Card
          className='about-card'
            style={{ width: 300, margin: 20 }}
            cover={<img alt="example" src={samir} />}
            actions={[
              <a target="_blank" href="https://github.com/samir-hub">
                <Icon type="github" key="github" />
              </a>,
              <a
                target="_blank"
                href="https://www.linkedin.com/in/samir-hub/"
              >
                <Icon type="linkedin" key="linkedin" />
              </a>,
              <a target="_blank" href="https://twitter.com/samirlilienfeld">
                <Icon type="twitter" key="twitter" />
              </a>
            ]}
          >
            <Meta
              title="Samir Lilienfeld"
              description="Samir Lilienfeld is our Junior Full-Stack Developer. He specializes in React and building RESTful APIs."
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default About;
