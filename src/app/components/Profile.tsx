import React from "react";
import { Avatar, Typography } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const Profile: React.FC = () => {
  return (
    <div
      style={{
        margin: "0",
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("pastel-sky-background.png")',
        backgroundSize: "cover",
      }}
    >
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
          transition={{ duration: 1 }}
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
            className="mb-5 avatar"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            marginTop: 20,
          }}
        >
          <Title
            level={2}
            style={{
              color: "#191970",
            }}
          >
            Jhinthicha Sukchaoritthikrai
          </Title>
          <span style={{ fontSize: "18px", color: "#7B68EE" }}>
            จิณณ์ฐิชา สุขเชาว์ฤทธิไกร
          </span>
          <p style={{ fontSize: "16px", color: "#7B68EE" }}>
            เกิดวันศุกร์ที่ 7 มีนาคม พ.ศ.2546 อายุ 21 ปี
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
