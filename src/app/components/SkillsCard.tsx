import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const SkillsCard = () => {
  return (
    <>
      <div
        id="ความสามารถ"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          background: "white",
        }}
      >
        <Title level={2}>ความสามารถ</Title>
        <ul>
          <li>ภาษาไทย: ดีมาก</li>
          <li>ภาษาอังกฤษ: พอใช้ (Fair)</li>
          <li>
            ทักษะการใช้คอมพิวเตอร์: มีความรู้และใช้งานเบื้องต้น C Python Java
            JavaScipt Html Css
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillsCard;
