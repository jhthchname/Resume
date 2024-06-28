import React, { useEffect, useState } from "react";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const Backtop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <BackTop>
          <div className={`goTop ${isMobile ? "goTopMobile" : ""}`}>
            <ArrowUpOutlined />
          </div>
        </BackTop>
      )}
    </>
  );
};

export default Backtop;
