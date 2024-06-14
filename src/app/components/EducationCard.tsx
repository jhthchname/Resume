import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

const EducationCard = () => {
  return (
    <>
      <div
        id="ประวัติการศึกษา"
        style={{
          width: "100vw",
          height: "100vh",
          background: "white"
        }}
      >
        <Title level={2}>ประวัติการศึกษา</Title>
        <Paragraph>
          <strong>มหาวิทยาลัยกรุงเทพ</strong>
          <br />
          กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 3<br />
          คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์และหุ่นยนต์
        </Paragraph>
        <Paragraph>
          <strong>โรงเรียนสามร้อยยอดวิทยาคม</strong>
          <br />
          สายวิทยาศาสตร์ - คณิตศาสตร์
        </Paragraph>
      </div>
    </>
  );
};

export default EducationCard;
