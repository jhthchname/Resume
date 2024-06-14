import React from "react";
import { Avatar, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ProfileCard = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
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
        <Title level={4} style={{ marginBottom: "0" }}>
          จิณณ์ฐิชา สุขเชาว์ฤทธิไกร
        </Title>
        <Paragraph style={{ marginBottom: "5px" }}>
          <PhoneOutlined /> 083 813 7545
        </Paragraph>
        <Paragraph style={{ marginBottom: "5px" }}>
          <MailOutlined /> jhinthicha.sukc@bumail.net
        </Paragraph>
        <Paragraph style={{ marginBottom: "5px" }}>
          <InstagramOutlined /> jhinthicha_name
        </Paragraph>
        <Paragraph style={{ marginBottom: "0" }}>
          <EnvironmentOutlined /> 15/45 หมู่ 5 ซอย รังสิตภิรมย์, ตำบล คลองหนึ่ง,
          อำเภอ คลองหลวง, จังหวัด ปทุมธานี 12120
        </Paragraph>
      </div>
    </div>
  );
};

export default ProfileCard;
