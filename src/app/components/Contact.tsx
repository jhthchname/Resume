import React from "react";
import { Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Paragraph } = Typography;

const Contact = () => {
  return (
    <div id="contact">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          backgroundImage: `linear-gradient(to right, rgb(123, 104, 238, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgb(123, 104, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: "6rem 4rem",
        }}
      >
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paragraph
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <a href="tel:0838137545" style={{ color: "#191970" }}>
              <PhoneOutlined
                style={{
                  color: "#FFC0CB",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />{" "}
              083 813 7545
            </a>
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <a
              href="mailto:jhinthicha.sukc@bumail.net"
              style={{ color: "#191970" }}
            >
              <MailOutlined
                style={{
                  color: "#FFC0CB",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />{" "}
              jhinthicha.sukc@bumail.net
            </a>
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://www.instagram.com/jhthchname"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#191970" }}
            >
              <InstagramOutlined
                style={{
                  color: "#FFC0CB",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />{" "}
              jhthchname
            </a>
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://web.facebook.com/profile.php?id=100007300845854"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#191970" }}
            >
              <FacebookOutlined
                style={{
                  color: "#FFC0CB",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />{" "}
              Jhinthicha Sukchaoritthikrai
            </a>
          </Paragraph>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
