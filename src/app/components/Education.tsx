import React from 'react';
import { Divider, Steps } from 'antd';

const Education: React.FC = () => (
  <div
    id="ความสามารถ"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '70vh',
      background: 'white',
    }}
  >
    <div style={{ maxWidth: '500px', width: '100%', maxHeight: '500px', height: '100%' }}>
      <Steps
        progressDot
        current={1}
        direction="vertical"
        items={[
          {
            title: '2561 - 2563',
            description: (
              <span style={{ whiteSpace: 'nowrap', lineHeight: '2.5' }}>
                โรงเรียนสามร้อยยอดวิทยาคม สายวิทยาศาสตร์ - คณิตศาสตร์
              </span>
            ),
          },
          {
            title: '2564 - ปัจจุบัน',
            description: (
              <span style={{ whiteSpace: 'nowrap', lineHeight: '2.5'  }}>
                กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 3 คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์และหุ่นยนต์
              </span>
            ),
          },
        ]}
        style={{ width: '100%', height: '300px' }}
      />
    </div>
    <Divider />
  </div>
);

export default Education;