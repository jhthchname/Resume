import React, { useState } from "react";
import { Drawer, Button, Anchor } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Link } = Anchor;

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
      }}
    >
      <div style={{ color: "#1890ff", fontSize: "24px", fontWeight: "bold" }}>
        Resume
      </div>
      <div className="mobileHidden">
        <Anchor
          direction="horizontal"
          targetOffset={64}
          className="custom-anchor"
        >
          <Link href="#profile" title="Profile" />
          <Link href="#contact" title="Contact" />
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
          <Anchor targetOffset={64} className="custom-anchor">
            <Link href="#profile" title="Profile" />
            <Link href="#contact" title="Contact" />
            <Link href="#education" title="Education" />
            <Link href="#skills" title="Skills" />
          </Anchor>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
