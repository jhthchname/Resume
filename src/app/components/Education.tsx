import React from "react";
import { Steps } from "antd";
import { motion } from "framer-motion";

const Education: React.FC = () => (
  <div id="education">
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("Bangkok_University.png")',
        backgroundSize: "cover",
      }}
    >
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
          padding: "5vh 0",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
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
                title: (
                  <div style={{ fontSize: "20px", color: "#191970" }}>
                    2561 - 2563
                  </div>
                ),
                description: (
                  <div style={{ fontSize: "18px", color: "#FFC0CB" }}>
                    โรงเรียนสามร้อยยอดวิทยาคม สายวิทยาศาสตร์ - คณิตศาสตร์
                  </div>
                ),
              },
              {
                title: (
                  <div style={{ fontSize: "20px", color: "#191970" }}>
                    2564 - ปัจจุบัน
                  </div>
                ),
                description: (
                  <div style={{ fontSize: "18px", color: "#7B68EE" }}>
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
  </div>
);

export default Education;
