import React from "react";
import { Avatar, Typography, Row, Col, Space, Card } from "antd";

const { Title } = Typography;

const Profile = () => {
  return (
    <Row
      gutter={[16, 16]}
    >
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <div id="profile">
          <Card
            style={{
              width: 700,
              background: "#1890ff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                background: "#1890ff",
              }}
            >
              <Space
                direction="horizontal"
                size="middle"
                style={{ display: "flex" }}
              >
                <Avatar
                  shape="square"
                  size={250}
                  src="Profile.png"
                  style={{ marginRight: "20px" }}
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
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
