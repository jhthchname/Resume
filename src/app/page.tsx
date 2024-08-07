"use client";

import React from "react";
import { Layout } from "antd";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Backtop from "./components/Backtop";
import "./globals.css";

const { Content, Header } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header>
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
      <Backtop />
    </Layout>
  );
};

export default App;
