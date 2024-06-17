import React from "react";
import { Avatar, Typography, Row, Col, Space } from "antd";

const { Title } = Typography;

const Profile = () => {
  return (
    <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "20px", height:"100vh" }}>
      <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 16 }} lg={{ span: 12 }}>
        <div id="profile">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "40px 40px",
              borderRadius: "20px",
              background: "#1890ff",
              boxSizing: "border-box",
              width: "100%",
              textAlign: "start",
            }}
          >
            <Space
              direction="horizontal"
              size="middle"
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
            >
              <Avatar
                shape="square"
                size={250}
                src="Profile.png"
                style={{ marginBottom: "20px" }}
              />
              <div>
                <Title level={2} style={{ color: "white" }}>
                  จิณณ์ฐิชา สุขเชาว์ฤทธิไกร
                </Title>
                <Title level={3} style={{ color: "white" }}>
                  Jhinthicha Sukchaoritthikrai
                </Title>
                <Title level={4} style={{ color: "white" }}>
                  เกิดวันศุกร์ที่ 7 มีนาคม พ.ศ. 2546
                </Title>
                <Title level={4} style={{ color: "white" }}>
                  อายุ 21 ปี
                </Title>
              </div>
            </Space>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
