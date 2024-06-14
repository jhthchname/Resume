"use client";

import React from "react";
import { Layout, Row, Col, Anchor } from "antd";
import dynamic from "next/dynamic";
import "./globals.css";

const { Content } = Layout;

const Profile = dynamic(() => import("./components/Profile"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/Education"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/Skills"), {
  ssr: false,
});

const App: React.FC = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "#ffff",
        padding: "10px",
        textAlign: "left",
        paddingLeft: "20px",
      }}
    >
      <div style={{ color: "#191970", fontSize: "24px", fontWeight: "bold" }}>
        Resume
      </div>
    </div>
    <Content style={{ padding: "0" }}>
      <div
        style={{
          backgroundColor: "#ffff",
          padding: "10px",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#ข้อมูลส่วนตัว",
              title: "ข้อมูลส่วนตัว",
            },
            {
              key: "part-2",
              href: "#ประวัติการศึกษา",
              title: "ประวัติการศึกษา",
            },
            {
              key: "part-3",
              href: "#ความสามารถ",
              title: "ความสามารถ",
            },
          ]}
        />
      </div>
      <div className="site-layout-content">
        <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div id="ข้อมูลส่วนตัว">
              <Profile />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div id="ประวัติการศึกษา">
              <Education />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div id="ความสามารถ">
              <Skills />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default App;
