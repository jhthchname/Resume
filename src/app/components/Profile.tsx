import React from "react";
import { Avatar, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const Profile = () => {
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      align="middle"
      style={{
        margin: "0",
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("pastel-sky-background.png")',
        backgroundSize: "cover",
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div
          id="profile"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "15vh",
            textAlign: "center",
          }}
        >
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Avatar
              shape="square"
              size={{
                xs: 200,
                sm: 250,
                md: 300,
                lg: 300,
                xl: 300,
                xxl: 350,
              }}
              src="Profile.png"
              className="mb-5"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0 }}
            style={{
              marginTop: 20,
            }}
          >
            <Title
              level={2}
              style={{
                fontSize: "26px",
                color: "#191970",
                whiteSpace: "nowrap",
              }}
            >
              Jhinthicha Sukchaoritthikrai
            </Title>
            <span style={{ fontSize: "20px", color: "#7B68EE" }}>
              จิณณ์ฐิชา สุขเชาว์ฤทธิไกร
            </span>
            <p style={{ fontSize: "18px", color: "#7B68EE" }}>
              เกิดวันศุกร์ที่ 7 มีนาคม พ.ศ.2546 อายุ 21 ปี
            </p>
          </motion.div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
