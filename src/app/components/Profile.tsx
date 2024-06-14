import React from "react";
import { Avatar, Typography, Row, Col } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Profile = () => {
  return (
    <Row gutter={16}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <div id="ข้อมูลส่วนตัว">
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
            <Avatar
              shape="square"
              size={230}
              src="Profile.png"
              icon={<UserOutlined />}
              style={{ marginRight: "20px" }}
            />
            <div>
              <Title level={4}>จิณณ์ฐิชา สุขเชาว์ฤทธิไกร</Title>
              <Paragraph>
                <PhoneOutlined /> 083 813 7545
              </Paragraph>
              <Paragraph>
                <MailOutlined /> jhinthicha.sukc@bumail.net
              </Paragraph>
              <Paragraph>
                <InstagramOutlined /> jhinthicha_name
              </Paragraph>
              <Paragraph>
                <EnvironmentOutlined /> 15/45 หมู่ 5 ซอย รังสิตภิรมย์, ตำบล
                คลองหนึ่ง, อำเภอ คลองหลวง, จังหวัด ปทุมธานี 12120
              </Paragraph>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
