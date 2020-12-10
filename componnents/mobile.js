import React, { useState } from "react";
import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";
const Mobile = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setCollapsed(!isCollapsed);
    setActive(!active);
  };
  return (
    <div>
      <ul className={`active${active}`}>
        <li>Products</li>
        <li>Use Cases</li>
        <li>Docs</li>
        <li>Pricing</li>
        <li>About us</li>
      </ul>
      <div className="trigger-div">
        {React.createElement(
          isCollapsed ? AlignRightOutlined : AlignLeftOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
      </div>
    </div>
  );
};
export default Mobile;
