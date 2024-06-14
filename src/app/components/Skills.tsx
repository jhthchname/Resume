import { Typography, Row, Col } from "antd";
import React from "react";

const { Title } = Typography;

const Skills = () => {
  return (
    <>
      <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <div id="ความสามารถ">
            <div
              id="ความสามารถ"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100vw",
                height: "70vh",
                background: "white",
              }}
            >
              <Title level={2}>ความสามารถ</Title>
              <ul>
                <li>ภาษาไทย: ดีมาก</li>
                <li>ภาษาอังกฤษ: พอใช้ (Fair)</li>
                <li>
                  ทักษะการใช้คอมพิวเตอร์: มีความรู้และใช้งานเบื้องต้น C Python
                  Java JavaScipt Html Css
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Skills;
