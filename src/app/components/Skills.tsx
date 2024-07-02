import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";

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
    title: "HTML",
  },
  {
    key: "6",
    src: "CSS_Logo",
    title: "CSS",
  },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skill">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)",
          paddingBottom: "14vh",
        }}
      >
        <div>
          <div className="titleHolder">
            <motion.h1
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h1>
          </div>
          <div className="contentHolder">
            <motion.p
              className="text"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.5,
              }}
              style={{ fontSize: "24px", color: "#7B68EE" }}
            >
              มีความรู้และใช้งานเบื้องต้นสำหรับภาษา
            </motion.p>
          </div>
          <Row gutter={[16, 16]}>
            {items.map((item, index) => {
              return (
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 8 }}
                  md={{ span: 4 }}
                  key={item.key}
                >
                  <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: [-20, 10] }}
                    transition={{
                      duration: 2.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 1,
                    }}
                  >
                    <div className="content">
                      <div className="icon">
                        <div className="changeSize">
                          <img
                            src={`${item.src}.png`}
                            alt={item.title}
                            style={{ width: "90px", height: "90px" }}
                          />
                        </div>
                        <h3 style={{ fontSize: "20px" }}>{item.title}</h3>
                      </div>
                    </div>
                  </motion.div>
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
