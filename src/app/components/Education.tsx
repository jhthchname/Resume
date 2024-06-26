import React from "react";
import { Steps, Row, Col } from "antd";
import { motion } from "framer-motion";

const Education: React.FC = () => (
  <Row gutter={[16, 16]}>
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 24 }}
      lg={{ span: 18 }}
      xl={{ span: 16 }}
    >
      <div id="education">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            background: "white",
            padding: "5vh 0",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              maxHeight: "400px",
              height: "100%",
              padding: "0 20px",
            }}
          >
            <Steps
              style={{ width: "100%", height: "100%" }}
              progressDot
              current={1}
              direction="vertical"
              responsive={true}
              items={[
                {
                  title: <div style={{ fontSize: "24px" }}>2561 - 2563</div>,
                  description: (
                    <div style={{ fontSize: "20px" }}>
                      โรงเรียนสามร้อยยอดวิทยาคม สายวิทยาศาสตร์ - คณิตศาสตร์
                    </div>
                  ),
                },
                {
                  title: (
                    <div style={{ fontSize: "24px" }}>2564 - ปัจจุบัน</div>
                  ),
                  description: (
                    <div style={{ fontSize: "20px" }}>
                      กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 3 คณะวิศวกรรมศาสตร์
                      สาขาคอมพิวเตอร์และหุ่นยนต์
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </Col>
  </Row>
);

export default Education;
