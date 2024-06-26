import React from "react";
import { Typography, Row, Col } from "antd";
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
    <Row gutter={[16, 16]}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 18 }}
        md={{ span: 16 }}
        lg={{ span: 12 }}
      >
        <div id="contact">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100vw",
              height: "100vh",
              background: "white",
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
                <PhoneOutlined
                  style={{
                    color: "#1890ff",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />{" "}
                083 813 7545
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                <MailOutlined
                  style={{
                    color: "#1890ff",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />{" "}
                jhinthicha.sukc@bumail.net
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                <InstagramOutlined
                  style={{
                    color: "#1890ff",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />{" "}
                jhinthicha_name
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                <FacebookOutlined
                  style={{
                    color: "#1890ff",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />{" "}
                Jhinthicha Sukchaoritthikrai
              </Paragraph>
            </motion.div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
