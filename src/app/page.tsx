"use client";

import React from "react";
import { Layout, Row, Col, Anchor } from "antd";
import dynamic from "next/dynamic";
import "./globals.css";

const { Content } = Layout;

const ProfileCard = dynamic(() => import("./components/ProfileCard"), {
  ssr: false,
});
const EducationCard = dynamic(() => import("./components/EducationCard"), {
  ssr: false,
});
const SkillsCard = dynamic(() => import("./components/SkillsCard"), {
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
          <Col xs={24} sm={12} md={8} lg={6}>
            <div id="ข้อมูลส่วนตัว">
              <ProfileCard />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div id="ประวัติการศึกษา">
              <EducationCard />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div id="ความสามารถ">
              <SkillsCard />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default App;
