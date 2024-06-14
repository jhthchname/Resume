import React from "react";
import { Typography, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

const Contact = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <div id="contact">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100vw",
              height: "80vh",
              background: "white",
            }}
          >
            <div>
              <Paragraph style={{ fontSize: "24px", fontWeight: "bold" }}>
                <PhoneOutlined style={{ color: "#1890ff", fontSize: "30px" }} /> 083 813 7545
              </Paragraph>
              <Paragraph style={{ fontSize: "24px", fontWeight: "bold" }}>
                <MailOutlined style={{ color: "#1890ff", fontSize: "30px" }}/> jhinthicha.sukc@bumail.net
              </Paragraph>
              <Paragraph style={{ fontSize: "24px", fontWeight: "bold" }}>
                <InstagramOutlined style={{ color: "#1890ff", fontSize: "30px" }} /> jhinthicha_name
              </Paragraph>
              <Paragraph style={{ fontSize: "24px", fontWeight: "bold" }}>
                <FacebookOutlined style={{ color: "#1890ff", fontSize: "30px" }}/> Jhinthicha Sukchaoritthikrai
              </Paragraph>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
