"use client";

import React, { useState } from "react";
import { Layout, Drawer, Button, Anchor } from "antd";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./globals.css";
import { MenuOutlined} from '@ant-design/icons';

const { Content, Header } = Layout;
const { Link } = Anchor;

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffff",
        }}
      >
        <div style={{ color: "#191970", fontSize: "24px", fontWeight: "bold" }}>
          Resume
        </div>
        <div className="header">
          <div className="logo">
            <div className="my-custom-anchor ">
              <div className="mobileHidden">
                <Anchor targetOffset={65}>
                  <Link href="#profile" title="Profile" />
                  <Link href="#education" title="Education" />
                  <Link href="#skills" title="Skills" />
                </Anchor>
              </div>
              <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
                </Button>
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  open={open}
                >
                  <Anchor targetOffset={65}>
                    <Link href="#profile" title="Profile" />
                    <Link href="#education" title="Education" />
                    <Link href="#skills" title="Skills" />
                  </Anchor>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Content style={{ padding: "0" }}>
        <div className="site-layout-content">
          <Profile />
          <Education />
          <Skills />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
