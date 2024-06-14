import React from "react";

import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    src: "C_Logo",
    title: "C",
  },
  {
    key: "2",
    src: "Python_Logo",
    title: "Python",
  },
  {
    key: "3",
    src: "Java_Logo",
    title: "Java",
  },
  {
    key: "4",
    src: "JavaScript_Logo",
    title: "JavaScript",
  },
  {
    key: "5",
    src: "HTML_Logo",
    title: "Html",
  },
  {
    key: "6",
    src: "CSS_Logo",
    title: "CSS",
  },
];
const Skills = () => {
  return (
    <div id="skills" className="block aboutBlock">
      <div
        style={{
          width: "100vw",
          height: "70vh",
          background: "white",
        }}
      >
        <div className="container-fluid">
          <div className="titleHolder">
            <h1>Skills</h1>
          </div>
          <div className="contentHolder">
            <p>มีความรู้และใช้งานเบื้องต้นในการใช้ภาษา</p>
          </div>
          <Row gutter={[24, 16]}>
            {items.map((item) => {
              return (
                <Col md={{ span: 4 }} key={item.key}>
                  <div className="content">
                    <div className="icon">
                    <div className="changeSize">
                    <img
                      src={`${item.src}.png`}
                      alt={item.title}
                      style={{ width: "100px" }} />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Skills;
