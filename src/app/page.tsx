'use client';

import React from "react";
import { Layout, Anchor } from "antd";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./globals.css";

const { Content } = Layout;

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
              href: "#profile",
              title: "Profile",
            },
            {
              key: "part-2",
              href: "#education",
              title: "Education",
            },
            {
              key: "part-3",
              href: "#skills",
              title: "Skills",
            },
          ]}
        />
      </div>
      <div className="site-layout-content">
        <Profile />
        <Education />
        <Skills />
      </div>
    </Content>
  </Layout>
);

export default App;
