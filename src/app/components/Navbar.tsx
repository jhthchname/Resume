import React, { useState } from "react";
import { Drawer, Button, Anchor } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

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
    <div className="container-fluid">
      <div className="header">
        <div
          style={{
            color: "#191970",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Resume
        </div>
        <div className="mobileHidden">
          <Anchor
            direction="horizontal"
            targetOffset={65}
            className="custom-anchor"
          >
            <Link href="#profile" title="Profile" />
            <Link href="#contact" title="Contact" />
            <Link href="#education" title="Education" />
            <Link href="#skills" title="Skills" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button
            type="primary"
            onClick={showDrawer}
            style={{ backgroundColor: "#191970" }}
          >
            <MenuOutlined style={{ background: "#191970" }} />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClick={onClose}
            open={open}
            style={{
              background:
                "linear-gradient(0deg, rgba(25, 25, 112,1) 0%, rgba(123, 104, 238,1) 23%,rgb(255, 192, 203,1) 61%, rgba(255, 255, 255,1) 100%)",
            }}
          >
            <div className="flex justify-end">
              <Button
                type="text"
                onClick={onClose}
                style={{ position: "absolute", right: 10 }}
              >
                <CloseOutlined
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#191970",
                  }}
                />
              </Button>
            </div>

            <Anchor
              direction="vertical"
              targetOffset={65}
              className="custom-drawer"
              style={{ position: "absolute", top: 50 }}
            >
              <Link href="#profile" title="Profile" />
              <Link href="#contact" title="Contact" />
              <Link href="#education" title="Education" />
              <Link href="#skills" title="Skills" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
