import React from "react";
import { Steps, Row, Col } from "antd";

const Education: React.FC = () => (
  <Row gutter={[16, 16]}>
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <div id="education">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            height: "80vh",
            background: "white",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              width: "100%",
              maxHeight: "300px",
              height: "100%",
            }}
          >
            <Steps style={{ width: "100%", height: "300px" }}
              progressDot
              current={1}
              direction="vertical"
              responsive={true}
              items={[
                {
                  title: "2561 - 2563",
                  description:
                    "โรงเรียนสามร้อยยอดวิทยาคม สายวิทยาศาสตร์ - คณิตศาสตร์",
                },
                {
                  title: "2564 - ปัจจุบัน",
                  description:
                    "กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 3 คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์และหุ่นยนต์",
                },
              ]}
              
            />
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

export default Education;
