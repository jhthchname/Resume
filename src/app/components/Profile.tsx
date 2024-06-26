import React from "react";
import { Avatar, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

const Profile = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const avatarSize = isLargeScreen ? 300 : isMediumScreen ? 200 : 150;
  const titleFontSize = isLargeScreen
    ? "40px"
    : isMediumScreen
    ? "30px"
    : "20px";
  const subTitleFontSize = isLargeScreen
    ? "20px"
    : isMediumScreen
    ? "18px"
    : "16px";

  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        background: "white",
        textAlign: isSmallScreen ? "center" : "left",
      }}
    >
      <Col
        xs={{ span: 24 }}
        sm={{ span: 18 }}
        md={{ span: 16 }}
        lg={{ span: 12 }}
      >
        <div
          id="profile"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isSmallScreen ? "column" : "row",
            paddingTop: isSmallScreen ? 0 : "14vh",
            textAlign: "left",
          }}
        >
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0 }}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: isSmallScreen ? 20 : 0,
            }}
          >
            <Avatar
              shape="square"
              size={300}
              src="Profile.png"
              className="mb-5"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0 }}
            style={{
              marginLeft: isSmallScreen ? 0 : 50,
              marginTop: isSmallScreen ? 20 : 0,
            }}
          >
            <Title
              level={1}
              style={{
                fontSize: titleFontSize,
                color: "#1890ff",
                whiteSpace: "nowrap",
              }}
            >
              จิณณ์ฐิชา สุขเชาว์ฤทธิไกร
            </Title>
            <Title
              level={3}
              style={{ fontSize: subTitleFontSize, color: "#1890ff" }}
            >
              Jhinthicha Sukchaoritthikrai
            </Title>
            <Title
              level={4}
              style={{ fontSize: subTitleFontSize, color: "#1890ff" }}
            >
              เกิดวันศุกร์ที่ 7 มีนาคม พ.ศ. 2546 อายุ 21 ปี
            </Title>
          </motion.div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
