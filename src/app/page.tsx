"use client";

import React from "react";
import { Layout } from "antd";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import "./globals.css";

const { Content, Header } = Layout;

const headerStyle: React.CSSProperties = {
  background: "white",
  backgroundColor: "transparent",
};

const layoutStyle: React.CSSProperties = {
  background: "white",
};

const App: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="ant-layout-header">
          <Navbar />
        </div>
      </Header>
      <Content>
        <div className="site-layout-content">
          <Profile />
          <Contact />
          <Education />
          <Skills />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
